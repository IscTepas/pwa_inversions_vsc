import { Candle } from '../../types/broker.types'
import { SupportResistanceZone, TrendBiasByTimeframe, StructureBreak } from '../../types/structure.types'

export class StructureService {
  static detectSupportResistance(candles: Candle[], period: number = 20): SupportResistanceZone[] {
    const zones: SupportResistanceZone[] = []
    const recentCandles = candles.slice(-period * 2)

    const pivots: { price: number; index: number; type: 'support' | 'resistance' }[] = []

    for (let i = 2; i < recentCandles.length - 2; i++) {
      const isPivotHigh =
        recentCandles[i].high > recentCandles[i - 1].high &&
        recentCandles[i].high > recentCandles[i - 2].high &&
        recentCandles[i].high > recentCandles[i + 1].high &&
        recentCandles[i].high > recentCandles[i + 2].high

      const isPivotLow =
        recentCandles[i].low < recentCandles[i - 1].low &&
        recentCandles[i].low < recentCandles[i - 2].low &&
        recentCandles[i].low < recentCandles[i + 1].low &&
        recentCandles[i].low < recentCandles[i + 2].low

      if (isPivotHigh) {
        pivots.push({ price: recentCandles[i].high, index: i, type: 'resistance' })
      } else if (isPivotLow) {
        pivots.push({ price: recentCandles[i].low, index: i, type: 'support' })
      }
    }

    const tolerance = 0.005
    const clusteredZones: Map<string, { price: number; type: 'support' | 'resistance'; touches: number; indices: number[] }> = new Map()

    for (const pivot of pivots) {
      let found = false
      for (const [key, zone] of clusteredZones.entries()) {
        if (Math.abs(pivot.price - zone.price) / zone.price < tolerance) {
          zone.touches++
          zone.indices.push(pivot.index)
          zone.price = (zone.price * (zone.touches - 1) + pivot.price) / zone.touches
          found = true
          break
        }
      }
      if (!found) {
        const key = `${pivot.type}-${pivot.price.toFixed(2)}`
        clusteredZones.set(key, {
          price: pivot.price,
          type: pivot.type,
          touches: 1,
          indices: [pivot.index],
        })
      }
    }

    let zoneIndex = 0
    for (const [, zone] of clusteredZones) {
      if (zone.touches >= 2) {
        const strength = Math.min(100, zone.touches * 25 + Math.min(zone.indices.length * 10, 30))
        const firstTouchIdx = Math.min(...zone.indices)
        const lastTouchIdx = Math.max(...zone.indices)

        zones.push({
          type: zone.type,
          priceLevel: Math.round(zone.price * 100) / 100,
          strength,
          touches: zone.touches,
          timeframe: '1D',
          startDate: candles[firstTouchIdx]?.timestamp || new Date().toISOString(),
        })
        zoneIndex++
      }
    }

    zones.sort((a, b) => b.strength - a.strength)
    return zones.slice(0, 6)
  }

  static detectTrendBias(candles: Candle[], timeframes: string[] = ['4h', '1D', '1W']): TrendBiasByTimeframe {
    const result: TrendBiasByTimeframe = {}

    for (const tf of timeframes) {
      const period = this.getPeriodForTimeframe(tf)
      const subset = candles.slice(-period)

      if (subset.length < 20) {
        result[tf] = { direction: 'sideways', strength: 0 }
        continue
      }

      const closes = subset.map((c) => c.close)
      const ema20 = this.calculateEMA(closes, 20)
      const ema50 = this.calculateEMA(closes, 50)
      const currentPrice = closes[closes.length - 1]

      let direction: 'bullish' | 'bearish' | 'sideways' = 'sideways'
      let strength = 0

      if (currentPrice > ema20 && ema20 > ema50) {
        direction = 'bullish'
        strength = Math.min(100, ((currentPrice - ema50) / ema50) * 1000)
      } else if (currentPrice < ema20 && ema20 < ema50) {
        direction = 'bearish'
        strength = Math.min(100, ((ema50 - currentPrice) / ema50) * 1000)
      } else {
        const emaDiff = Math.abs(ema20 - ema50) / ema50
        strength = Math.min(50, emaDiff * 500)
      }

      result[tf] = { direction, strength: Math.round(strength * 10) / 10 }
    }

    return result
  }

  static detectBOS_CHoCH(candles: Candle[], structure: { lastBOS?: number; lastCHoCH?: number }): StructureBreak | null {
    const period = 50
    const recentCandles = candles.slice(-period)

    if (recentCandles.length < 30) return null

    const highs = recentCandles.map((c) => c.high)
    const lows = recentCandles.map((c) => c.low)

    const highestHigh = Math.max(...highs.slice(0, -5))
    const lowestLow = Math.min(...lows.slice(0, -5))

    const last5Candles = recentCandles.slice(-5)
    const currentHigh = Math.max(...last5Candles.map((c) => c.high))
    const currentLow = Math.min(...last5Candles.map((c) => c.low))

    if (currentHigh > highestHigh && (!structure.lastBOS || currentHigh > structure.lastBOS)) {
      return {
        type: 'BOS',
        direction: 'bullish',
        price: Math.round(currentHigh * 100) / 100,
        timestamp: recentCandles[recentCandles.length - 1].timestamp,
      }
    }

    if (currentLow < lowestLow && (!structure.lastCHoCH || currentLow < structure.lastCHoCH)) {
      return {
        type: 'BOS',
        direction: 'bearish',
        price: Math.round(currentLow * 100) / 100,
        timestamp: recentCandles[recentCandles.length - 1].timestamp,
      }
    }

    const prevTrend = this.detectPreviousTrend(recentCandles)
    if (prevTrend === 'bullish' && currentLow < lowestLow) {
      return {
        type: 'CHoCH',
        direction: 'bearish',
        price: Math.round(currentLow * 100) / 100,
        timestamp: recentCandles[recentCandles.length - 1].timestamp,
      }
    }

    if (prevTrend === 'bearish' && currentHigh > highestHigh) {
      return {
        type: 'CHoCH',
        direction: 'bullish',
        price: Math.round(currentHigh * 100) / 100,
        timestamp: recentCandles[recentCandles.length - 1].timestamp,
      }
    }

    return null
  }

  static calculateZoneStrength(zone: SupportResistanceZone, currentPrice: number): number {
    const distancePercent = Math.abs(zone.priceLevel - currentPrice) / currentPrice
    const proximityBonus = distancePercent < 0.02 ? 20 : distancePercent < 0.05 ? 10 : 0

    const touchBonus = zone.touches >= 4 ? 20 : zone.touches >= 3 ? 15 : zone.touches >= 2 ? 10 : 0

    const recencyBonus = 10

    const baseStrength = zone.strength
    return Math.min(100, baseStrength + proximityBonus + touchBonus + recencyBonus)
  }

  private static getPeriodForTimeframe(timeframe: string): number {
    switch (timeframe) {
      case '1m':
        return 60
      case '5m':
        return 100
      case '15m':
        return 150
      case '1h':
        return 200
      case '4h':
        return 300
      case '1D':
        return 500
      case '1W':
        return 1000
      default:
        return 200
    }
  }

  private static calculateEMA(prices: number[], period: number): number {
    if (prices.length === 0) return 0
    const multiplier = 2 / (period + 1)
    let ema = prices.slice(0, Math.min(period, prices.length)).reduce((a, b) => a + b) / Math.min(period, prices.length)
    for (let i = Math.min(period, prices.length); i < prices.length; i++) {
      ema = prices[i] * multiplier + ema * (1 - multiplier)
    }
    return ema
  }

  private static detectPreviousTrend(candles: Candle[]): 'bullish' | 'bearish' | 'sideways' {
    const firstHalf = candles.slice(0, Math.floor(candles.length / 2))
    const secondHalf = candles.slice(Math.floor(candles.length / 2), -5)

    if (firstHalf.length === 0 || secondHalf.length === 0) return 'sideways'

    const firstAvg = firstHalf.reduce((sum, c) => sum + c.close, 0) / firstHalf.length
    const secondAvg = secondHalf.reduce((sum, c) => sum + c.close, 0) / secondHalf.length

    const change = (secondAvg - firstAvg) / firstAvg

    if (change > 0.02) return 'bullish'
    if (change < -0.02) return 'bearish'
    return 'sideways'
  }
}
