export interface IBKRConnectionConfig {
  host: string
  port: number
  clientId: number
  accountCode?: string
  connectionType: 'paper' | 'live'
}

export interface IBKRConnectionState {
  status: 'disconnected' | 'connecting' | 'connected' | 'reconnecting' | 'error'
  lastError?: string
  lastConnectedAt?: string
  reconnectAttempts: number
  clientId: number
}

export interface IBKRMarketDataRequest {
  symbol: string
  exchange?: string
  currency?: string
  secType?: 'STK' | 'OPT' | 'FUT' | 'CASH'
}

export interface IBKROptionSearchParams {
  underlyingSymbol: string
  exchange: string
  secType: string
  conId: number
}

export interface IBKRSymbolSearchResult {
  contractName: string
  instrumentName: string
  exchange: string
  symbol: string
  secType: string
  primaryExch: string
  currency: string
}

export interface IBKRBar {
  date: string
  open: number
  high: number
  low: number
  close: number
  volume: number
  count: number
}

export interface IBKRPosition {
  symbol: string
  quantity: number
  avgCost: number
  secType: string
  exchange: string
  currency: string
}

export interface IBKROrderParams {
  orderId: number
  action: 'BUY' | 'SELL'
  totalQuantity: number
  orderType: 'MKT' | 'LMT' | 'STP' | 'STP LMT' | 'TRAIL' | 'MIT'
  lmtPrice?: number
  auxPrice?: number
  tif?: 'DAY' | 'GTC' | 'IOC' | 'GTD' | 'OPG' | 'FOK'
  outsideRth?: boolean
}

export interface IBKRTickData {
  field: number
  price?: number
  size?: number
  timestamp?: string
}

export type IBKREventName =
  | 'connected'
  | 'disconnected'
  | 'reconnecting'
  | 'error'
  | 'quote'
  | 'historicalData'
  | 'optionChain'
  | 'orderStatus'
  | 'openOrder'
  | 'position'
  | 'accountValue'
