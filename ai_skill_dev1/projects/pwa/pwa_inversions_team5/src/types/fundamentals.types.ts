// Fundamentals Types
export interface CompanySnapshot {
  symbol: string
  name: string
  sector: string
  marketCap: number
  pe: number
  eps: number
  revenueGrowth: number
  profitMargin: number
  updated: string
}

export interface EarningsData {
  symbol: string
  date: string
  estimated: number
  actual: number | null
  surprise: number | null
  guidanceRaised: boolean
}

export interface ValuationData {
  symbol: string
  pe: number
  pb: number
  peg: number
  priceToSales: number
  roe: number
}

export interface FundamentalsCoreResult {
  symbol: string
  timeframe?: string
  side: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  score: number
  reasons: string[]
  risks?: string[]
  fundamentals: {
    earnings?: EarningsData
    valuation?: ValuationData
  }
  timestamp: string
}
