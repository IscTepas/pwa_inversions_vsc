import { create } from 'zustand'
import { Quote, CandleData, Timeframe } from '@types/broker.types'

interface MarketDataStore {
  quotes: Map<string, Quote>
  candles: Map<string, CandleData>
  addQuote: (quote: Quote) => void
  addCandles: (symbol: string, timeframe: Timeframe, candles: CandleData) => void
  getQuote: (symbol: string) => Quote | undefined
  getCandles: (symbol: string, timeframe: Timeframe) => CandleData | undefined
}

export const useMarketDataStore = create<MarketDataStore>((set, get) => ({
  quotes: new Map(),
  candles: new Map(),
  addQuote: (quote) => {
    set((state) => {
      const newQuotes = new Map(state.quotes)
      newQuotes.set(quote.symbol, quote)
      return { quotes: newQuotes }
    })
  },
  addCandles: (symbol, timeframe, candleData) => {
    set((state) => {
      const newCandles = new Map(state.candles)
      newCandles.set(`${symbol}_${timeframe}`, candleData)
      return { candles: newCandles }
    })
  },
  getQuote: (symbol) => {
    return get().quotes.get(symbol)
  },
  getCandles: (symbol, timeframe) => {
    return get().candles.get(`${symbol}_${timeframe}`)
  },
}))
