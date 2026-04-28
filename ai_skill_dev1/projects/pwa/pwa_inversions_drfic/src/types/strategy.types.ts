// Strategy Types
export interface IndicatorConfig {
  active: boolean
  period?: number
  oversold?: number
  overbought?: number
  fast?: number
  slow?: number
  signal?: number
  stdDev?: number
  weight: number
}

export interface Strategy {
  id: string
  name: string
  description: string
  isPreset: boolean
  enabledCores: {
    technicalIndicators: boolean
    technicalStructure: boolean
    institutionalFlow: boolean
    newsEvents: boolean
    fundamentals: boolean
    aiAdvisor: boolean
  }
  indicators: {
    rsi: IndicatorConfig
    macd: IndicatorConfig
    bollinger: IndicatorConfig
    ema: IndicatorConfig
    atr: IndicatorConfig
    volume: IndicatorConfig
  }
  minConfidenceThreshold: number
  recommendedTimeframes: string[]
  createdAt: string
  lastUsed?: string
}

export const DEFAULT_STRATEGIES: Record<string, Strategy> = {
  P01: {
    id: 'preset_P01',
    name: 'RSI + MACD Crossover',
    description: 'RSI oversold/overbought with MACD bullish crossover',
    isPreset: true,
    enabledCores: {
      technicalIndicators: true,
      technicalStructure: false,
      institutionalFlow: false,
      newsEvents: false,
      fundamentals: false,
      aiAdvisor: true,
    },
    indicators: {
      rsi: { active: true, period: 14, oversold: 30, overbought: 70, weight: 1.0 },
      macd: { active: true, fast: 12, slow: 26, signal: 9, weight: 1.0 },
      bollinger: { active: false, weight: 0 },
      ema: { active: false, weight: 0 },
      atr: { active: false, weight: 0 },
      volume: { active: false, weight: 0 },
    },
    minConfidenceThreshold: 0.5,
    recommendedTimeframes: ['15m', '1h', '4h'],
    createdAt: new Date().toISOString(),
  },
  P04: {
    id: 'preset_P04',
    name: 'Full Confluence (Default)',
    description: 'All technical indicators + structure + AI confirmation',
    isPreset: true,
    enabledCores: {
      technicalIndicators: true,
      technicalStructure: true,
      institutionalFlow: false,
      newsEvents: false,
      fundamentals: false,
      aiAdvisor: true,
    },
    indicators: {
      rsi: { active: true, period: 14, oversold: 30, overbought: 70, weight: 1.0 },
      macd: { active: true, fast: 12, slow: 26, signal: 9, weight: 1.0 },
      bollinger: { active: true, period: 20, stdDev: 2, weight: 1.0 },
      ema: { active: true, weight: 1.0 },
      atr: { active: true, weight: 0.8 },
      volume: { active: true, weight: 0.9 },
    },
    minConfidenceThreshold: 0.6,
    recommendedTimeframes: ['15m', '1h', '4h', '1D'],
    createdAt: new Date().toISOString(),
  },
}
