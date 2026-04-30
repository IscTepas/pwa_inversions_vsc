export interface NewsItem {
  id: string
  symbol: string
  headline: string
  summary: string
  source: string
  url: string
  publishedAt: string
  sentiment: 'positive' | 'negative' | 'neutral'
  sentimentScore: number
  relevanceScore: number
}

export interface SentimentResult {
  symbol: string
  overallSentiment: 'bullish' | 'bearish' | 'neutral'
  score: number
  positiveCount: number
  negativeCount: number
  neutralCount: number
  timestamp: string
}

export interface EarningsEvent {
  symbol: string
  date: string
  estimatedEPS: number
  actualEPS: number | null
  surprise: number | null
  surprisePercent: number | null
  quarter: string
  year: number
}

export interface EventRisk {
  type: 'earnings' | 'fed' | 'dividend' | 'analyst' | 'macro'
  symbol: string
  date: string
  riskLevel: 'high' | 'medium' | 'low'
  description: string
  potentialImpact: number
}

export interface NewsEventsCoreResult {
  symbol: string
  timeframe: string
  side: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  score: number
  sentiment: SentimentResult
  newsItems: NewsItem[]
  upcomingEvents: EventRisk[]
  reasons: string[]
  risks?: string[]
  timestamp: string
}
