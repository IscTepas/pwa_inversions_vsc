// Broker Interface
import { Quote, Candle, AccountInfo, Position, OrderRequest, OrderResponse, OptionChain, Timeframe } from './broker.types'

export interface IBroker {
  connect(): Promise<void>
  disconnect(): Promise<void>
  isConnected(): boolean
  getAccount(): Promise<AccountInfo>
  getPositions(): Promise<Position[]>
  getQuote(symbol: string): Promise<Quote>
  getHistoricalCandles(
    symbol: string,
    timeframe: Timeframe,
    limit: number,
  ): Promise<Candle[]>
  subscribeToQuotes(symbol: string, callback: (quote: Quote) => void): void
  unsubscribeFromQuotes(symbol: string): void
  submitOrder(order: OrderRequest): Promise<OrderResponse>
  cancelOrder(orderId: string): Promise<void>
  getOptionChain(symbol: string, expiration?: string): Promise<OptionChain>
}
