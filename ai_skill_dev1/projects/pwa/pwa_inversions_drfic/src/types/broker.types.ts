// Market Data Types
export interface Quote {
  symbol: string
  bid: number
  ask: number
  last: number
  volume: number
  timestamp: string // ISO8601
}

export interface Candle {
  timestamp: string // ISO8601
  open: number
  high: number
  low: number
  close: number
  volume: number
}

export type Timeframe = '1m' | '5m' | '15m' | '1h' | '4h' | '1D' | '1W' | '1M' | '1Y'

export interface CandleData {
  symbol: string
  timeframe: Timeframe
  candles: Candle[]
  lastUpdate: string
}

// Account Types
export interface AccountInfo {
  id: string
  balance: number
  buyingPower: number
  cash: number
  positions: Position[]
  equity: number
}

export interface Position {
  symbol: string
  quantity: number
  avgFillPrice: number
  currentPrice: number
  unrealizedGainLoss: number
  unrealizedGainLossPercent: number
}

// Order Types
export interface OrderRequest {
  symbol: string
  action: 'BUY' | 'SELL'
  quantity: number
  orderType: 'LIMIT' | 'MARKET'
  limitPrice?: number
  stopPrice?: number
  timeInForce: 'DAY' | 'GTC'
  strategyId?: string
}

export interface OrderResponse {
  id: string
  symbol: string
  action: 'BUY' | 'SELL'
  quantity: number
  filledQuantity: number
  status: 'PENDING' | 'FILLED' | 'PARTIAL' | 'CANCELLED'
  avgFillPrice?: number
  timestamp: string
}

// Option Chain Types
export interface Strike {
  strike: number
  bid: number
  ask: number
  last: number
  volume: number
  openInterest: number
  iv: number
  delta: number
  gamma: number
  theta: number
  vega: number
  bidSize: number
  askSize: number
}

export interface OptionChain {
  symbol: string
  expiration: string
  calls: Strike[]
  puts: Strike[]
}
