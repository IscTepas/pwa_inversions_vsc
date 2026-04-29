// Signal Types
export interface CoreSignalResult {
  coreId: string
  symbol: string
  timeframe: string
  side: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  score: number
  reasons: string[]
  risks?: string[]
  timestamp: string
}

export interface SignalTableRow {
  id: string
  symbol: string
  timestamp: string
  timeframe: string
  strategyId: string
  strategyName: string
  signal: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  score: number
  priceAtSignal: number
  selectedCores: string[]
  coreResults: CoreSignalResult[]
  suggested: {
    entry: number
    stopLoss: number
    takeProfit: number
    positionSize: number
    riskReward: number
  }
  aiConfirmation?: {
    confirmed: boolean
    confidenceAdjustment: number
    reasoning: string
    riskNotes: string
  }
  status: 'active' | 'executed' | 'dismissed' | 'expired'
  expiresAt: string
}

export interface OpportunityRankRow {
  symbol: string
  priorityRank: number
  opportunityScore: number
  recommendedAction: 'BUY' | 'SELL' | 'WATCH' | 'AVOID'
  whyNow: string[]
  whyNot: string[]
  nextRelevantEvent: string | null
  confidence: number
}

export interface SignalHistoryItem {
  timestamp: string
  signal: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  timeframe: string
  result: number | null
  resultLabel: 'win' | 'loss' | 'open' | 'unknown'
}
