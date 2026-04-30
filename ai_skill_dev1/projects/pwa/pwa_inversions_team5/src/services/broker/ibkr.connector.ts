import { IBroker } from './broker.interface'
import {
  Quote,
  Candle,
  AccountInfo,
  Position,
  OrderRequest,
  OrderResponse,
  OptionChain,
  Timeframe,
} from '../../types/broker.types'
import { IBKRConnectionConfig, IBKRConnectionState, IBKRBar, IBKROrderParams } from './ibkr.types'

interface PendingRequest {
  resolve: (value: any) => void
  reject: (reason: Error) => void
  timer?: ReturnType<typeof setTimeout>
}

const DEFAULT_CONFIG: IBKRConnectionConfig = {
  host: '127.0.0.1',
  port: 7497,
  clientId: 1,
  connectionType: 'paper',
}

export class IBKRConnector implements IBroker {
  private config: IBKRConnectionConfig
  private connected: boolean = false
  private subscriptions: Map<string, (quote: Quote) => void> = new Map()
  private quoteIntervals: Map<string, ReturnType<typeof setInterval>> = new Map()
  private ib: any = null
  private reqIdCounter: number = 1
  private pendingRequests: Map<number, PendingRequest> = new Map()
  private state: IBKRConnectionState = {
    status: 'disconnected',
    reconnectAttempts: 0,
    clientId: 1,
  }
  private heartbeatInterval: ReturnType<typeof setInterval> | null = null
  private mockMode: boolean = true

  constructor(config?: Partial<IBKRConnectionConfig>) {
    this.config = { ...DEFAULT_CONFIG, ...config }
    this.state.clientId = this.config.clientId
  }

  async connect(): Promise<void> {
    this.state.status = 'connecting'
    console.log(`🔗 Connecting to IBKR TWS/Gateway at ${this.config.host}:${this.config.port}...`)

    try {
      const Ib = await this.loadIBLibrary()
      if (Ib) {
        this.ib = new Ib({
          host: this.config.host,
          port: this.config.port,
          clientId: this.config.clientId,
        })

        try {
          await this.initializeIBApi()
          this.mockMode = false
          console.log('✅ IBKR connected (live mode)')
        } catch (ibError) {
          this.mockMode = true
          console.log(`⚠️ IBKR live connection failed, using mock: ${ibError}`)
        }
      } else {
        this.mockMode = true
        console.log('⚠️ @stoqey/ib not available — using mock mode')
      }

      this.connected = true
      this.state.status = 'connected'
      this.state.lastConnectedAt = new Date().toISOString()
      this.state.reconnectAttempts = 0
      this.startHeartbeat()
    } catch (error) {
      this.connected = false
      this.state.status = 'error'
      this.state.lastError = error instanceof Error ? error.message : String(error)
      console.warn(`⚠️ IBKR connection failed, falling back to mock: ${this.state.lastError}`)
      this.connected = true
      this.mockMode = true
      this.state.status = 'connected'
      this.state.lastConnectedAt = new Date().toISOString()
    }
  }

  private async loadIBLibrary(): Promise<any> {
    try {
      const mod = await import('@stoqey/ib')
      return mod.IBApi || mod.IBApiNext || null
    } catch {
      return null
    }
  }

  private async initializeIBApi(): Promise<void> {
    if (!this.ib) return

    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error('IBKR connection timeout (10s)'))
      }, 10000)

      this.ib.once('connected', () => {
        clearTimeout(timeout)
        resolve()
      })

      let hasError = false
      this.ib.once('error', (err: Error, code: number) => {
        if (code === 2104 || code === 2106 || code === 2158) {
          return
        }
        clearTimeout(timeout)
        hasError = true
        console.error(`IBKR error [${code}]: ${err?.message || err}`)
        reject(new Error(`IBKR connection failed [${code}]: ${err?.message || err}`))
      })

      this.ib.connect()
    })
  }

  async disconnect(): Promise<void> {
    this.stopHeartbeat()

    for (const [symbol] of this.subscriptions) {
      this.unsubscribeFromQuotes(symbol)
    }

    if (this.ib && !this.mockMode) {
      this.ib.disconnect()
      this.ib = null
    }

    this.connected = false
    this.state.status = 'disconnected'
    console.log('❌ IBKR disconnected')
  }

  isConnected(): boolean {
    return this.connected
  }

  getConnectionState(): IBKRConnectionState {
    return { ...this.state }
  }

  isMockMode(): boolean {
    return this.mockMode
  }

  async getAccount(): Promise<AccountInfo> {
    if (this.mockMode) {
      return this.getMockAccount()
    }

    return new Promise<AccountInfo>((resolve, reject) => {
      const accountValues: Record<string, string> = {}
      const reqId = this.nextReqId()

      this.ib.once('accountSummaryEnd', () => {
        const balance = parseFloat(accountValues['TotalCashValue'] || '100000')
        const equity = parseFloat(accountValues['NetLiquidation'] || '100000')
        const buyingPower = parseFloat(accountValues['BuyingPower'] || '400000')

        resolve({
          id: this.config.accountCode || 'DU123456',
          balance,
          buyingPower,
          cash: balance,
          positions: [],
          equity,
        })
      })

      this.ib.on('accountSummary', (reqId: number, account: string, tag: string, value: string) => {
        accountValues[tag] = value
      })

      this.ib.reqAccountSummary(reqId, 'All')
    })
  }

  async getPositions(): Promise<Position[]> {
    if (this.mockMode) {
      return []
    }

    return new Promise<Position[]>((resolve) => {
      const positions: Position[] = []

      this.ib.once('positionEnd', () => {
        resolve(positions)
      })

      this.ib.on('position', (account: string, contract: any, pos: number, avgCost: number) => {
        positions.push({
          symbol: contract.symbol,
          quantity: pos,
          avgFillPrice: avgCost,
          currentPrice: avgCost,
          unrealizedGainLoss: 0,
          unrealizedGainLossPercent: 0,
        })
      })

      this.ib.reqPositions()
    })
  }

  async getQuote(symbol: string): Promise<Quote> {
    if (this.mockMode) {
      return this.getMockQuote(symbol)
    }

    return new Promise<Quote>((resolve, reject) => {
      const reqId = this.nextReqId()
      const timeout = setTimeout(() => {
        this.ib.cancelMktData(reqId)
        reject(new Error(`Quote timeout for ${symbol}`))
      }, 5000)

      let lastPrice = 0
      let bid = 0
      let ask = 0
      let volume = 0

      const handler = (tickReqId: number, tickType: number, price: number) => {
        if (tickReqId !== reqId) return

        switch (tickType) {
          case 1: bid = price; break
          case 2: ask = price; break
          case 4: lastPrice = price; break
          case 8: volume = price; break
        }

        if (lastPrice > 0 || (bid > 0 && ask > 0)) {
          clearTimeout(timeout)
          this.ib.off('tickPrice', handler)
          this.ib.cancelMktData(reqId)

          resolve({
            symbol,
            bid: bid || lastPrice,
            ask: ask || lastPrice + 0.01,
            last: lastPrice || (bid + ask) / 2,
            volume: Math.round(volume),
            timestamp: new Date().toISOString(),
          })
        }
      }

      this.ib.on('tickPrice', handler)
      this.ib.reqMktData(reqId, { symbol, exchange: 'SMART', currency: 'USD' }, '', false, false)
    })
  }

  async getHistoricalCandles(symbol: string, timeframe: Timeframe, limit: number): Promise<Candle[]> {
    if (this.mockMode) {
      return this.getMockCandles(symbol, timeframe, limit)
    }

    return new Promise<Candle[]>((resolve, reject) => {
      const reqId = this.nextReqId()
      const candles: Candle[] = []
      const timeout = setTimeout(() => {
        this.ib.cancelHistoricalData(reqId)
        reject(new Error(`Historical data timeout for ${symbol}`))
      }, 15000)

      this.ib.on('historicalData', (historicalReqId: number, bar: IBKRBar) => {
        if (historicalReqId !== reqId) return
        if (!bar || !bar.date) return

        candles.push({
          timestamp: bar.date,
          open: bar.open,
          high: bar.high,
          low: bar.low,
          close: bar.close,
          volume: bar.volume || 0,
        })
      })

      this.ib.once('historicalDataEnd', (historicalReqId: number) => {
        if (historicalReqId !== reqId) return
        clearTimeout(timeout)
        candles.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
        resolve(candles)
      })

      const durationStr = this.getDurationForLimit(limit, timeframe)
      const barSize = this.mapTimeframeToBarSize(timeframe)

      this.ib.reqHistoricalData(
        reqId,
        { symbol, exchange: 'SMART', currency: 'USD', secType: 'STK' },
        '',
        durationStr,
        barSize,
        'TRADES',
        1,
        1
      )
    })
  }

  subscribeToQuotes(symbol: string, callback: (quote: Quote) => void): void {
    this.subscriptions.set(symbol, callback)

    if (this.mockMode || !this.ib) {
      this.startMockQuoteStream(symbol, callback)
      return
    }

    const reqId = this.nextReqId()

    this.ib.on('tickPrice', (tickReqId: number, tickType: number, price: number) => {
      if (tickReqId !== reqId) return
      if (![1, 2, 4].includes(tickType)) return

      const cb = this.subscriptions.get(symbol)
      if (cb) {
        cb({
          symbol,
          bid: tickType === 1 ? price : 0,
          ask: tickType === 2 ? price : 0,
          last: tickType === 4 ? price : 0,
          volume: 0,
          timestamp: new Date().toISOString(),
        })
      }
    })

    this.ib.reqMktData(reqId, { symbol, exchange: 'SMART', currency: 'USD' }, '', false, false)
  }

  unsubscribeFromQuotes(symbol: string): void {
    const interval = this.quoteIntervals.get(symbol)
    if (interval) {
      clearInterval(interval)
      this.quoteIntervals.delete(symbol)
    }

    this.subscriptions.delete(symbol)
    console.log(`🚫 Unsubscribed from ${symbol}`)
  }

  async submitOrder(order: OrderRequest): Promise<OrderResponse> {
    if (this.mockMode) {
      return this.getMockOrderResponse(order)
    }

    const orderId = await this.getNextOrderId()
    const ibkrOrder: IBKROrderParams = {
      orderId,
      action: order.action,
      totalQuantity: order.quantity,
      orderType: order.orderType === 'MARKET' ? 'MKT' : 'LMT',
      lmtPrice: order.limitPrice,
      tif: order.timeInForce === 'GTC' ? 'GTC' : 'DAY',
    }

    return new Promise<OrderResponse>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Order timeout for ${order.symbol}`))
      }, 30000)

      this.ib.once('orderStatus', (
        oid: number,
        status: string,
        filled: number,
        remaining: number,
        avgFillPrice: number,
      ) => {
        if (oid !== orderId) return
        if (!['Filled', 'Submitted', 'PreSubmitted'].includes(status)) return

        clearTimeout(timeout)
        resolve({
          id: String(orderId),
          symbol: order.symbol,
          action: order.action,
          quantity: order.quantity,
          filledQuantity: Math.round(filled),
          status: this.mapOrderStatus(status),
          avgFillPrice: avgFillPrice || order.limitPrice,
          timestamp: new Date().toISOString(),
        })
      })

      this.ib.placeOrder(
        orderId,
        { symbol: order.symbol, exchange: 'SMART', currency: 'USD', secType: 'STK' },
        ibkrOrder
      )
    })
  }

  async cancelOrder(orderId: string): Promise<void> {
    if (this.mockMode) {
      console.log(`🚫 Mock order ${orderId} cancelled`)
      return
    }

    this.ib.cancelOrder(parseInt(orderId, 10))
  }

  async getOptionChain(symbol: string, expiration?: string): Promise<OptionChain> {
    if (this.mockMode) {
      return this.getMockOptionChain(symbol, expiration)
    }

    return new Promise<OptionChain>((resolve, reject) => {
      const timeout = setTimeout(() => {
        reject(new Error(`Option chain timeout for ${symbol}`))
      }, 15000)

      this.ib.reqContractDetails(
        this.nextReqId(),
        { symbol, secType: 'OPT', exchange: 'SMART', currency: 'USD' }
      )

      const calls: any[] = []
      const puts: any[] = []

      this.ib.on('contractDetails', (reqId: number, contract: any) => {
        const strike = parseFloat(contract.strike || '0')
        const optionType = contract.right === 'C' ? 'calls' : 'puts'

        const strikeData = {
          strike,
          bid: 0,
          ask: 0,
          last: 0,
          volume: 0,
          openInterest: 0,
          iv: 0,
          delta: 0,
          gamma: 0,
          theta: 0,
          vega: 0,
          bidSize: 0,
          askSize: 0,
        }

        if (optionType === 'calls') calls.push(strikeData)
        else puts.push(strikeData)
      })

      this.ib.once('contractDetailsEnd', (reqId: number) => {
        clearTimeout(timeout)
        resolve({
          symbol,
          expiration: expiration || '',
          calls: calls.sort((a, b) => a.strike - b.strike),
          puts: puts.sort((a, b) => a.strike - b.strike),
        })
      })
    })
  }

  async getAccountBalance(): Promise<{ cash: number; equity: number }> {
    const account = await this.getAccount()
    return { cash: account.cash, equity: account.equity }
  }

  private nextReqId(): number {
    return this.reqIdCounter++
  }

  private async getNextOrderId(): Promise<number> {
    if (this.mockMode) return this.nextReqId()

    return new Promise<number>((resolve) => {
      const handler = (id: number) => {
        this.ib.off('nextValidId', handler)
        resolve(id)
      }
      this.ib.on('nextValidId', handler)
      this.ib.reqIds(-1)
    })
  }

  private startHeartbeat(): void {
    this.heartbeatInterval = setInterval(() => {
      if (this.connected && !this.mockMode && this.ib) {
        try {
          this.ib.reqCurrentTime()
        } catch {
          console.warn('IBKR heartbeat failed')
        }
      }
    }, 30000)
  }

  private stopHeartbeat(): void {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval)
      this.heartbeatInterval = null
    }
  }

  private startMockQuoteStream(symbol: string, callback: (quote: Quote) => void): void {
    const interval = setInterval(() => {
      callback(this.getMockQuote(symbol))
    }, 1000)
    this.quoteIntervals.set(symbol, interval)
  }

  private mapTimeframeToBarSize(timeframe: Timeframe): string {
    const map: Record<Timeframe, string> = {
      '1m': '1 min',
      '5m': '5 mins',
      '15m': '15 mins',
      '1h': '1 hour',
      '4h': '4 hours',
      '1D': '1 day',
      '1W': '1 week',
      '1M': '1 month',
      '1Y': '1 month',
    }
    return map[timeframe] || '1 day'
  }

  private getDurationForLimit(limit: number, timeframe: Timeframe): string {
    const minutesPerBar = this.getMinutesPerBar(timeframe)
    const totalMinutes = limit * minutesPerBar

    if (totalMinutes <= 60) return `${Math.ceil(totalMinutes)} mins`
    if (totalMinutes <= 1440) return `${Math.ceil(totalMinutes / 60)} hours`
    if (totalMinutes <= 43200) return `${Math.ceil(totalMinutes / 1440)} D`
    return `${Math.ceil(totalMinutes / 43200)} M`
  }

  private getMinutesPerBar(timeframe: Timeframe): number {
    const map: Record<Timeframe, number> = {
      '1m': 1, '5m': 5, '15m': 15, '1h': 60, '4h': 240,
      '1D': 1440, '1W': 10080, '1M': 43200, '1Y': 525600,
    }
    return map[timeframe] || 1440
  }

  private mapOrderStatus(ibStatus: string): 'PENDING' | 'FILLED' | 'PARTIAL' | 'CANCELLED' {
    switch (ibStatus.toLowerCase()) {
      case 'filled': return 'FILLED'
      case 'partially filled': return 'PARTIAL'
      case 'cancelled': case 'inactive': return 'CANCELLED'
      default: return 'PENDING'
    }
  }

  private getMockAccount(): Promise<AccountInfo> {
    return Promise.resolve({
      id: 'IBKR_PAPER',
      balance: 100000,
      buyingPower: 400000,
      cash: 100000,
      positions: [],
      equity: 100000,
    })
  }

  private getMockQuote(symbol: string): Quote {
    const base = symbol === 'AAPL' ? 175 : symbol === 'MSFT' ? 420 : 150 + Math.random() * 50
    const spread = 0.05 + Math.random() * 0.1
    return {
      symbol,
      bid: Math.round((base - spread / 2) * 100) / 100,
      ask: Math.round((base + spread / 2) * 100) / 100,
      last: Math.round(base * 100) / 100,
      volume: Math.floor(Math.random() * 5000000) + 100000,
      timestamp: new Date().toISOString(),
    }
  }

  private getMockCandles(_symbol: string, _timeframe: Timeframe, limit: number): Promise<Candle[]> {
    const candles: Candle[] = []
    let price = 150
    for (let i = limit; i > 0; i--) {
      const ts = new Date(Date.now() - i * 60000)
      const change = (Math.random() - 0.5) * 2
      const open = price
      const close = price + change
      const high = Math.max(open, close) + Math.random()
      const low = Math.min(open, close) - Math.random()
      candles.push({
        timestamp: ts.toISOString(),
        open: Math.round(open * 100) / 100,
        high: Math.round(high * 100) / 100,
        low: Math.round(low * 100) / 100,
        close: Math.round(close * 100) / 100,
        volume: Math.floor(Math.random() * 1000000) + 100000,
      })
      price = close
    }
    return Promise.resolve(candles)
  }

  private getMockOrderResponse(order: OrderRequest): Promise<OrderResponse> {
    return Promise.resolve({
      id: `IBKR_${Date.now()}`,
      symbol: order.symbol,
      action: order.action,
      quantity: order.quantity,
      filledQuantity: order.quantity,
      status: 'FILLED',
      avgFillPrice: order.limitPrice || 150,
      timestamp: new Date().toISOString(),
    })
  }

  private getMockOptionChain(symbol: string, expiration?: string): Promise<OptionChain> {
    const basePrice = symbol === 'AAPL' ? 175 : symbol === 'MSFT' ? 420 : 150
    const strikes = [-20, -15, -10, -5, 0, 5, 10, 15, 20].map((offset) => basePrice + offset)
    const exp = expiration || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

    const calls = strikes.map((strike) => ({
      strike,
      bid: Math.max(0.01, Math.round((basePrice - strike + 2 + Math.random() * 3) * 100)) / 100,
      ask: Math.max(0.05, Math.round((basePrice - strike + 3 + Math.random() * 3) * 100)) / 100,
      last: 0,
      volume: Math.floor(Math.random() * 5000),
      openInterest: Math.floor(Math.random() * 10000) + 100,
      iv: Math.round((0.2 + Math.random() * 0.4) * 1000) / 1000,
      delta: Math.round(Math.random() * 100) / 100,
      gamma: Math.round(Math.random() * 5 * 100) / 100,
      theta: Math.round(-Math.random() * 10 * 100) / 100,
      vega: Math.round(Math.random() * 20 * 100) / 100,
      bidSize: Math.floor(Math.random() * 50) + 1,
      askSize: Math.floor(Math.random() * 50) + 1,
    }))

    const puts = strikes.map((strike) => ({
      strike,
      bid: Math.max(0.01, Math.round((strike - basePrice + 2 + Math.random() * 3) * 100)) / 100,
      ask: Math.max(0.05, Math.round((strike - basePrice + 3 + Math.random() * 3) * 100)) / 100,
      last: 0,
      volume: Math.floor(Math.random() * 5000),
      openInterest: Math.floor(Math.random() * 10000) + 100,
      iv: Math.round((0.2 + Math.random() * 0.4) * 1000) / 1000,
      delta: Math.round(-Math.random() * 100) / 100,
      gamma: Math.round(Math.random() * 5 * 100) / 100,
      theta: Math.round(-Math.random() * 10 * 100) / 100,
      vega: Math.round(Math.random() * 20 * 100) / 100,
      bidSize: Math.floor(Math.random() * 50) + 1,
      askSize: Math.floor(Math.random() * 50) + 1,
    }))

    return Promise.resolve({ symbol, expiration: exp, calls, puts })
  }
}
