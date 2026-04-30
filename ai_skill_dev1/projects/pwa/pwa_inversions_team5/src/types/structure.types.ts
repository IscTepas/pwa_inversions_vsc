export interface SupportResistanceZone {
  type: 'support' | 'resistance'
  priceLevel: number
  strength: number
  touches: number
  timeframe: string
  startDate: string
}

export interface TrendBiasByTimeframe {
  [timeframe: string]: {
    direction: 'bullish' | 'bearish' | 'sideways'
    strength: number
  }
}

export interface StructureBreak {
  type: 'BOS' | 'CHoCH'
  direction: 'bullish' | 'bearish'
  price: number
  timestamp: string
}

export interface TechnicalStructureCoreResult {
  symbol: string
  timeframe: string
  side: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  score: number
  supportResistanceZones: SupportResistanceZone[]
  trendBiasByTimeframe: TrendBiasByTimeframe
  structureBreaks: StructureBreak[]
  reasons: string[]
  risks?: string[]
  timestamp: string
}
