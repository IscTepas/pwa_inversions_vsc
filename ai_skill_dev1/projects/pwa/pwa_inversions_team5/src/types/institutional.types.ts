export interface UnusualOptionActivity {
  type: 'sweep' | 'block' | 'large_trade'
  symbol: string
  strike: number
  expiration: string
  optionType: 'call' | 'put'
  volume: number
  openInterest: number
  volumeOIRatio: number
  premium: number
  timestamp: string
}

export interface OpenInterestSwing {
  symbol: string
  strike: number
  expiration: string
  optionType: 'call' | 'put'
  oiChange: number
  oiChangePercent: number
  direction: 'bullish' | 'bearish'
  timestamp: string
}

export interface BlockOrder {
  symbol: string
  side: 'buy' | 'sell'
  size: number
  price: number
  timestamp: string
}

export interface PutCallRatio {
  value: number
  interpretation: 'bullish' | 'bearish' | 'neutral'
  timestamp: string
}

export interface InstitutionalFlowCoreResult {
  symbol: string
  timeframe: string
  side: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  score: number
  institutionalEvents: (UnusualOptionActivity | OpenInterestSwing | BlockOrder)[]
  putCallRatio: PutCallRatio
  reasons: string[]
  risks?: string[]
  timestamp: string
}
