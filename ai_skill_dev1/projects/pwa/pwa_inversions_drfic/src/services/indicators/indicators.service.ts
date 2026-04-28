import { Candle, RSIResult, MACDResult, BollingerBandsResult, EMAResult, ATRResult, VolumeResult } from '@types'

/**
 * Technical Indicators Calculations
 */

export class IndicatorsService {
  /**
   * RSI (Relative Strength Index)
   */
  static calculateRSI(prices: number[], period: number = 14): RSIResult {
    if (prices.length < period + 1) {
      return {
        value: 0,
        signal: 'neutral',
        timestamp: new Date().toISOString(),
      }
    }

    const deltas = prices.slice(1).map((p, i) => p - prices[i])
    const gains = deltas.map((d) => (d > 0 ? d : 0))
    const losses = deltas.map((d) => (d < 0 ? -d : 0))

    const avgGain = gains.slice(-period).reduce((a, b) => a + b) / period
    const avgLoss = losses.slice(-period).reduce((a, b) => a + b) / period

    const rs = avgGain / (avgLoss || 1)
    const rsi = 100 - 100 / (1 + rs)

    let signal: 'oversold' | 'neutral' | 'overbought' = 'neutral'
    if (rsi < 30) signal = 'oversold'
    else if (rsi > 70) signal = 'overbought'

    return {
      value: Math.round(rsi * 10) / 10,
      signal,
      timestamp: new Date().toISOString(),
    }
  }

  /**
   * MACD (Moving Average Convergence Divergence)
   */
  static calculateMACD(prices: number[], fast: number = 12, slow: number = 26, signal: number = 9): MACDResult {
    if (prices.length < slow) {
      return {
        macdLine: 0,
        signalLine: 0,
        histogram: 0,
        crossover: null,
        timestamp: new Date().toISOString(),
      }
    }

    const ema12 = this.calculateEMA(prices, fast)
    const ema26 = this.calculateEMA(prices, slow)
    const macdLine = ema12 - ema26

    const macdArray = prices.map((_, i) => {
      const e12 = this.calculateEMA(prices.slice(0, i + 1), fast)
      const e26 = this.calculateEMA(prices.slice(0, i + 1), slow)
      return e12 - e26
    })

    const signalLine = this.calculateEMA(macdArray.slice(-signal), signal)
    const histogram = macdLine - signalLine

    return {
      macdLine: Math.round(macdLine * 100) / 100,
      signalLine: Math.round(signalLine * 100) / 100,
      histogram: Math.round(histogram * 100) / 100,
      crossover: histogram > 0 ? 'bullish' : 'bearish',
      timestamp: new Date().toISOString(),
    }
  }

  /**
   * Bollinger Bands
   */
  static calculateBollingerBands(prices: number[], period: number = 20, stdDev: number = 2): BollingerBandsResult {
    if (prices.length < period) {
      return {
        upper: 0,
        middle: 0,
        lower: 0,
        bandwidth: 0,
        percentB: 0,
        signal: 'normal',
        timestamp: new Date().toISOString(),
      }
    }

    const recentPrices = prices.slice(-period)
    const middle = recentPrices.reduce((a, b) => a + b) / period
    const variance = recentPrices.reduce((sum, p) => sum + Math.pow(p - middle, 2), 0) / period
    const std = Math.sqrt(variance)

    const upper = middle + stdDev * std
    const lower = middle - stdDev * std
    const bandwidth = ((upper - lower) / middle) * 100
    const current = prices[prices.length - 1]
    const percentB = (current - lower) / (upper - lower)

    let signal: 'squeeze' | 'breakout' | 'normal' = 'normal'
    if (bandwidth < 2) signal = 'squeeze'
    else if (percentB < 0.1 || percentB > 0.9) signal = 'breakout'

    let touch: 'upper' | 'lower' | 'middle' | 'none' = 'none'
    if (Math.abs(current - upper) < 0.5) touch = 'upper'
    else if (Math.abs(current - lower) < 0.5) touch = 'lower'
    else if (Math.abs(current - middle) < 0.5) touch = 'middle'

    return {
      upper: Math.round(upper * 100) / 100,
      middle: Math.round(middle * 100) / 100,
      lower: Math.round(lower * 100) / 100,
      bandwidth: Math.round(bandwidth * 100) / 100,
      percentB: Math.round(percentB * 1000) / 1000,
      signal,
      touch,
      timestamp: new Date().toISOString(),
    }
  }

  /**
   * EMA (Exponential Moving Average)
   */
  static calculateEMA(prices: number[], period: number): number {
    if (prices.length === 0) return 0
    const multiplier = 2 / (period + 1)
    let ema = prices[0]
    for (let i = 1; i < prices.length; i++) {
      ema = prices[i] * multiplier + ema * (1 - multiplier)
    }
    return ema
  }

  /**
   * EMA Trend (9, 21, 50)
   */
  static calculateEMATrend(prices: number[]): EMAResult {
    if (prices.length < 50) {
      return {
        ema9: 0,
        ema21: 0,
        ema50: 0,
        trend: 'sideways',
        timestamp: new Date().toISOString(),
      }
    }

    const ema9 = this.calculateEMA(prices, 9)
    const ema21 = this.calculateEMA(prices, 21)
    const ema50 = this.calculateEMA(prices, 50)

    let trend: 'bullish' | 'bearish' | 'sideways' = 'sideways'
    if (ema9 > ema21 && ema21 > ema50) trend = 'bullish'
    else if (ema9 < ema21 && ema21 < ema50) trend = 'bearish'

    return {
      ema9: Math.round(ema9 * 100) / 100,
      ema21: Math.round(ema21 * 100) / 100,
      ema50: Math.round(ema50 * 100) / 100,
      trend,
      timestamp: new Date().toISOString(),
    }
  }

  /**
   * ATR (Average True Range)
   */
  static calculateATR(candles: Candle[], period: number = 14): ATRResult {
    if (candles.length < period) {
      return {
        value: 0,
        volatility: 'medium',
        timestamp: new Date().toISOString(),
      }
    }

    const trueRanges = candles.map((candle, i) => {
      if (i === 0) return candle.high - candle.low
      const prev = candles[i - 1]
      return Math.max(candle.high - candle.low, Math.abs(candle.high - prev.close), Math.abs(candle.low - prev.close))
    })

    const atr = trueRanges.slice(-period).reduce((a, b) => a + b) / period

    let volatility: 'high' | 'medium' | 'low' = 'medium'
    const atrPercent = (atr / candles[candles.length - 1].close) * 100
    if (atrPercent > 2) volatility = 'high'
    else if (atrPercent < 0.8) volatility = 'low'

    return {
      value: Math.round(atr * 100) / 100,
      volatility,
      timestamp: new Date().toISOString(),
    }
  }

  /**
   * Volume Analysis
   */
  static calculateVolume(volumes: number[], period: number = 20): VolumeResult {
    if (volumes.length < period) {
      return {
        current: volumes[volumes.length - 1] || 0,
        average20: 0,
        ratio: 1,
        signal: 'normal',
        timestamp: new Date().toISOString(),
      }
    }

    const recent = volumes.slice(-period)
    const average = recent.reduce((a, b) => a + b) / period
    const current = volumes[volumes.length - 1]
    const ratio = current / average

    let signal: 'high' | 'normal' | 'low' = 'normal'
    if (ratio > 1.5) signal = 'high'
    else if (ratio < 0.7) signal = 'low'

    return {
      current,
      average20: Math.round(average),
      ratio: Math.round(ratio * 100) / 100,
      signal,
      timestamp: new Date().toISOString(),
    }
  }
}
