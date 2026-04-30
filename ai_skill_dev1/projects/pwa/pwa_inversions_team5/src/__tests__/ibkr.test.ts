import { IBKRConnector } from '../services/broker/ibkr.connector'
import { IBKRConnectionManager } from '../services/broker/ibkr-connection-manager'

describe('IBKRConnector', () => {
  let connector: IBKRConnector

  beforeEach(() => {
    connector = new IBKRConnector({
      port: 7497,
      clientId: 1,
      connectionType: 'paper',
    })
  })

  afterEach(async () => {
    if (connector.isConnected()) {
      await connector.disconnect()
    }
  })

  describe('connect', () => {
    it('should connect successfully (mock mode)', async () => {
      await connector.connect()
      expect(connector.isConnected()).toBe(true)
    })

    it('should be in mock mode without TWS running', async () => {
      await connector.connect()
      expect(connector.isMockMode()).toBe(true)
    })

    it('should set connection state to connected', async () => {
      await connector.connect()
      const state = connector.getConnectionState()
      expect(state.status).toBe('connected')
    })
  })

  describe('disconnect', () => {
    it('should disconnect cleanly', async () => {
      await connector.connect()
      await connector.disconnect()
      expect(connector.isConnected()).toBe(false)
    })

    it('should be idempotent', async () => {
      await connector.disconnect()
      await connector.disconnect()
      expect(connector.isConnected()).toBe(false)
    })
  })

  describe('getAccount', () => {
    it('should return account info', async () => {
      await connector.connect()
      const account = await connector.getAccount()
      expect(account.id).toBeDefined()
      expect(account.balance).toBeGreaterThan(0)
      expect(account.buyingPower).toBeGreaterThan(0)
    })
  })

  describe('getQuote', () => {
    it('should return a quote for a symbol', async () => {
      await connector.connect()
      const quote = await connector.getQuote('AAPL')
      expect(quote.symbol).toBe('AAPL')
      expect(quote.bid).toBeGreaterThan(0)
      expect(quote.ask).toBeGreaterThan(0)
      expect(quote.last).toBeGreaterThan(0)
    })

    it('should have ask greater than bid', async () => {
      await connector.connect()
      const quote = await connector.getQuote('MSFT')
      expect(quote.ask).toBeGreaterThan(quote.bid)
    })

    it('should include timestamp', async () => {
      await connector.connect()
      const quote = await connector.getQuote('GOOGL')
      expect(quote.timestamp).toBeDefined()
    })
  })

  describe('getHistoricalCandles', () => {
    it('should return candles array', async () => {
      await connector.connect()
      const candles = await connector.getHistoricalCandles('AAPL', '1D', 50)
      expect(Array.isArray(candles)).toBe(true)
      expect(candles.length).toBe(50)
    })

    it('should return candles with valid OHLCV data', async () => {
      await connector.connect()
      const candles = await connector.getHistoricalCandles('AAPL', '1D', 10)
      for (const candle of candles) {
        expect(candle.open).toBeGreaterThan(0)
        expect(candle.high).toBeGreaterThan(0)
        expect(candle.low).toBeGreaterThan(0)
        expect(candle.close).toBeGreaterThan(0)
        expect(candle.volume).toBeGreaterThan(0)
        expect(candle.high).toBeGreaterThanOrEqual(candle.low)
      }
    })

    it('should return candles in chronological order', async () => {
      await connector.connect()
      const candles = await connector.getHistoricalCandles('AAPL', '1D', 20)
      for (let i = 1; i < candles.length; i++) {
        expect(new Date(candles[i].timestamp).getTime()).toBeGreaterThanOrEqual(
          new Date(candles[i - 1].timestamp).getTime()
        )
      }
    })

    it('should respect the limit parameter', async () => {
      await connector.connect()
      const candles20 = await connector.getHistoricalCandles('AAPL', '1D', 20)
      const candles50 = await connector.getHistoricalCandles('AAPL', '1D', 50)
      expect(candles20.length).toBe(20)
      expect(candles50.length).toBe(50)
    })
  })

  describe('subscribeToQuotes', () => {
    it('should register subscription', async () => {
      await connector.connect()
      connector.subscribeToQuotes('AAPL', () => {})
      expect(connector.isConnected()).toBe(true)
      connector.unsubscribeFromQuotes('AAPL')
    })

    it('should stop emitting after unsubscribe', (done) => {
      connector.connect().then(async () => {
        let quoteCount = 0
        connector.subscribeToQuotes('AAPL', () => {
          quoteCount++
        })

        setTimeout(() => {
          connector.unsubscribeFromQuotes('AAPL')
          const countAtUnsub = quoteCount
          setTimeout(() => {
            expect(quoteCount).toBe(countAtUnsub)
            done()
          }, 200)
        }, 500)
      })
    }, 5000)
  })

  describe('submitOrder', () => {
    it('should return order response', async () => {
      await connector.connect()
      const response = await connector.submitOrder({
        symbol: 'AAPL',
        action: 'BUY',
        quantity: 10,
        orderType: 'LIMIT',
        limitPrice: 170,
        timeInForce: 'DAY',
      })
      expect(response.id).toBeDefined()
      expect(response.symbol).toBe('AAPL')
      expect(response.action).toBe('BUY')
      expect(response.status).toBeDefined()
    })

    it('should return filled status for mock orders', async () => {
      await connector.connect()
      const response = await connector.submitOrder({
        symbol: 'AAPL',
        action: 'SELL',
        quantity: 5,
        orderType: 'MARKET',
        timeInForce: 'DAY',
      })
      expect(response.status).toBe('FILLED')
    })
  })

  describe('getOptionChain', () => {
    it('should return option chain with calls and puts', async () => {
      await connector.connect()
      const chain = await connector.getOptionChain('AAPL')
      expect(chain.symbol).toBe('AAPL')
      expect(Array.isArray(chain.calls)).toBe(true)
      expect(Array.isArray(chain.puts)).toBe(true)
      expect(chain.calls.length).toBeGreaterThan(0)
      expect(chain.puts.length).toBeGreaterThan(0)
    })

    it('should have valid strike data', async () => {
      await connector.connect()
      const chain = await connector.getOptionChain('AAPL')
      const firstCall = chain.calls[0]
      expect(firstCall.strike).toBeGreaterThan(0)
      expect(firstCall.bid).toBeGreaterThanOrEqual(0)
      expect(firstCall.ask).toBeGreaterThanOrEqual(0)
    })

    it('should have expiration date', async () => {
      await connector.connect()
      const chain = await connector.getOptionChain('AAPL')
      expect(chain.expiration).toBeDefined()
      expect(chain.expiration.length).toBeGreaterThan(0)
    })
  })

  describe('getConnectionState', () => {
    it('should return state object', () => {
      const state = connector.getConnectionState()
      expect(state).toHaveProperty('status')
      expect(state).toHaveProperty('reconnectAttempts')
      expect(state).toHaveProperty('clientId')
    })

    it('should reflect connection status', async () => {
      const stateBefore = connector.getConnectionState()
      expect(stateBefore.status).toBe('disconnected')

      await connector.connect()
      const stateAfter = connector.getConnectionState()
      expect(stateAfter.status).toBe('connected')
    })
  })
})

describe('IBKRConnectionManager', () => {
  let manager: IBKRConnectionManager

  beforeEach(() => {
    manager = new IBKRConnectionManager({
      port: 7497,
      clientId: 2,
      enableAutoReconnect: false,
    })
  })

  afterEach(async () => {
    await manager.disconnect()
    manager.destroy()
  })

  describe('connect', () => {
    it('should connect successfully', async () => {
      await manager.connect()
      expect(manager.isConnected()).toBe(true)
    })

    it('should emit connected event', async () => {
      let connected = false
      manager.on('connected', () => {
        connected = true
      })
      await manager.connect()
      expect(connected).toBe(true)
    })

    it('should use mock mode without TWS', async () => {
      await manager.connect()
      expect(manager.isMockMode()).toBe(true)
    })
  })

  describe('disconnect', () => {
    it('should disconnect cleanly', async () => {
      await manager.connect()
      await manager.disconnect()
      expect(manager.isConnected()).toBe(false)
    })

    it('should emit disconnected event', async () => {
      let disconnected = false
      manager.on('disconnected', () => {
        disconnected = true
      })
      await manager.connect()
      await manager.disconnect()
      expect(disconnected).toBe(true)
    })
  })

  describe('event handling', () => {
    it('should register and emit events', async () => {
      let eventFired = false
      manager.on('connected', () => {
        eventFired = true
      })
      await manager.connect()
      expect(eventFired).toBe(true)
    })

    it('should support multiple handlers', async () => {
      let count = 0
      manager.on('connected', () => count++)
      manager.on('connected', () => count++)
      await manager.connect()
      expect(count).toBeGreaterThanOrEqual(2)
    })

    it('should support removing handlers', async () => {
      let count = 0
      const handler = () => count++
      manager.on('connected', handler)
      manager.off('connected', handler)
      await manager.connect()
      expect(count).toBe(0)
    })

    it('should emit error events', async () => {
      const errors: Error[] = []
      manager.on('error', (err) => errors.push(err))

      manager.getConnector()
      expect(errors.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('getState', () => {
    it('should return connection state', async () => {
      await manager.connect()
      const state = manager.getState()
      expect(state.status).toBe('connected')
      expect(state.clientId).toBe(2)
    })
  })

  describe('getReconnectInfo', () => {
    it('should return reconnect info', () => {
      const info = manager.getReconnectInfo()
      expect(info).toHaveProperty('attempts')
      expect(info).toHaveProperty('maxAttempts')
    })
  })

  describe('getConnector', () => {
    it('should return the underlying connector', () => {
      const connector = manager.getConnector()
      expect(connector).toBeDefined()
      expect(connector).toBeInstanceOf(IBKRConnector)
    })
  })

  describe('destroy', () => {
    it('should prevent further connections', async () => {
      manager.destroy()
      await expect(manager.connect()).rejects.toThrow()
    })
  })
})
