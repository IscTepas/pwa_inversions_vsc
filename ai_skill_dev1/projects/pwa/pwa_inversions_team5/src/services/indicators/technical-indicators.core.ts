import { Candle } from '@types/broker.types'
import { IndicatorsCoreResult } from '@types/indicators.types'
import { IndicatorsService } from './indicators.service'

/**
 * Technical Indicators Core
 * Evaluates all technical indicators and generates BUY/SELL/HOLD signal
 */
export class TechnicalIndicatorsCore {
  static analyze(candles: Candle[], timeframe: string): IndicatorsCoreResult {
    if (candles.length < 50) {
      return {
        symbol: '',
        timeframe,
        side: 'HOLD',
        confidence: 0,
        score: 0,
        reasons: ['Insufficient data (< 50 candles)'],
        indicatorBreakdown: {},
        timestamp: new Date().toISOString(),
      }
    }

    const closes = candles.map((c) => c.close)
    const volumes = candles.map((c) => c.volume)

    // Calculate all indicators
    const rsi = IndicatorsService.calculateRSI(closes)
    const macd = IndicatorsService.calculateMACD(closes)
    const bb = IndicatorsService.calculateBollingerBands(closes)
    const ema = IndicatorsService.calculateEMATrend(closes)
    const atr = IndicatorsService.calculateATR(candles)
    const volume = IndicatorsService.calculateVolume(volumes)

    // Score calculation
    let buySignals = 0
    let sellSignals = 0
    let score = 0
    const reasons: string[] = []
    const risks: string[] = []

    // RSI Analysis
    if (rsi.signal === 'oversold') {
      buySignals++
      score += 1.0
      reasons.push(`RSI ${rsi.value} — Oversold (< 30)`)
    } else if (rsi.signal === 'overbought') {
      sellSignals++
      score -= 1.0
      risks.push(`RSI ${rsi.value} — Overbought (> 70)`)
    }

    // MACD Analysis
    if (macd.crossover === 'bullish') {
      buySignals++
      score += 1.0
      reasons.push(`MACD — Bullish crossover`)
    } else if (macd.crossover === 'bearish') {
      sellSignals++
      score -= 1.0
      risks.push(`MACD — Bearish crossover`)
    }

    // Bollinger Bands Analysis
    if (bb.touch === 'lower') {
      buySignals++
      score += 0.8
      reasons.push(`Bollinger Lower Band — Price near support`)
    } else if (bb.touch === 'upper') {
      sellSignals++
      score -= 0.8
      risks.push(`Bollinger Upper Band — Price near resistance`)
    }

    // EMA Trend Analysis
    if (ema.trend === 'bullish') {
      buySignals++
      score += 1.0
      reasons.push(`EMA Trend — Bullish (9 > 21 > 50)`)
    } else if (ema.trend === 'bearish') {
      sellSignals++
      score -= 1.0
      risks.push(`EMA Trend — Bearish (9 < 21 < 50)`)
    }

    // Volume Analysis
    if (volume.signal === 'high') {
      buySignals++
      score += 0.5
      reasons.push(`Volume — ${volume.ratio}x average (strong confirmation)`)
    }

    // Determine signal
    let side: 'BUY' | 'SELL' | 'HOLD' = 'HOLD'
    if (buySignals >= 2 && buySignals > sellSignals) {
      side = 'BUY'
    } else if (sellSignals >= 2 && sellSignals > buySignals) {
      side = 'SELL'
    }

    // Confidence calculation
    const totalSignals = buySignals + sellSignals
    const confidence = totalSignals > 0 ? (Math.max(buySignals, sellSignals) / totalSignals) * 100 : 0

    return {
      symbol: '',
      timeframe,
      side,
      confidence: Math.round(confidence),
      score: Math.round(score * 100) / 100,
      reasons,
      risks,
      indicatorBreakdown: {
        rsi: { ...rsi, active: true, score: rsi.signal === 'oversold' ? 1 : rsi.signal === 'overbought' ? -1 : 0, weight: 1.0 },
        macd: { ...macd, active: true, score: macd.crossover === 'bullish' ? 1 : macd.crossover === 'bearish' ? -1 : 0, weight: 1.0 },
        bollinger: { ...bb, active: true, score: bb.touch === 'lower' ? 0.8 : bb.touch === 'upper' ? -0.8 : 0, weight: 1.0 },
        ema: { ...ema, active: true, score: ema.trend === 'bullish' ? 1 : ema.trend === 'bearish' ? -1 : 0, weight: 1.0 },
        atr: { ...atr, active: true, score: 0, weight: 0.8 },
        volume: { ...volume, active: true, score: volume.signal === 'high' ? 0.5 : 0, weight: 0.9 },
      },
      timestamp: new Date().toISOString(),
    }
  }
}
