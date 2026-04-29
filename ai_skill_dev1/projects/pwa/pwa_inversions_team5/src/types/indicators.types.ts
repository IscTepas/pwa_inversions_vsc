// Technical Indicator Results
export interface RSIResult {
  value: number
  signal: 'oversold' | 'neutral' | 'overbought'
  timestamp: string
}

export interface MACDResult {
  macdLine: number
  signalLine: number
  histogram: number
  crossover: 'bullish' | 'bearish' | null
  candlesAgo?: number
  timestamp: string
}

export interface BollingerBandsResult {
  upper: number
  middle: number
  lower: number
  bandwidth: number
  percentB: number
  signal: 'squeeze' | 'breakout' | 'normal'
  touch?: 'upper' | 'lower' | 'middle' | 'none'
  timestamp: string
}

export interface EMAResult {
  ema9: number
  ema21: number
  ema50: number
  trend: 'bullish' | 'bearish' | 'sideways'
  timestamp: string
}

export interface ATRResult {
  value: number
  volatility: 'high' | 'medium' | 'low'
  timestamp: string
}

export interface VolumeResult {
  current: number
  average20: number
  ratio: number
  signal: 'high' | 'normal' | 'low'
  timestamp: string
}

export interface IndicatorBreakdown {
  rsi?: RSIResult & { active: boolean; score: number; weight: number }
  macd?: MACDResult & { active: boolean; score: number; weight: number }
  bollinger?: BollingerBandsResult & { active: boolean; score: number; weight: number }
  ema?: EMAResult & { active: boolean; score: number; weight: number }
  atr?: ATRResult & { active: boolean; score: number; weight: number }
  volume?: VolumeResult & { active: boolean; score: number; weight: number }
}

export interface IndicatorsCoreResult {
  symbol: string
  timeframe: string
  side: 'BUY' | 'SELL' | 'HOLD'
  confidence: number
  score: number
  reasons: string[]
  indicatorBreakdown: IndicatorBreakdown
  timestamp: string
}
