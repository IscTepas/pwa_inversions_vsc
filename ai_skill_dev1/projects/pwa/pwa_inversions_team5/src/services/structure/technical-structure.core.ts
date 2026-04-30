import { Candle } from '../../types/broker.types'
import { TechnicalStructureCoreResult } from '../../types/structure.types'
import { StructureService } from './structure.service'

interface StructureState {
  lastBOS?: number
  lastCHoCH?: number
}

export class TechnicalStructureCore {
  private static state: Map<string, StructureState> = new Map()

  static analyze(candles: Candle[], symbol: string, timeframe: string): TechnicalStructureCoreResult {
    if (candles.length < 50) {
      return {
        symbol,
        timeframe,
        side: 'HOLD',
        confidence: 0,
        score: 0,
        supportResistanceZones: [],
        trendBiasByTimeframe: {},
        structureBreaks: [],
        reasons: ['Insufficient data (< 50 candles)'],
        timestamp: new Date().toISOString(),
      }
    }

    const state = this.state.get(symbol) || {}
    const zones = StructureService.detectSupportResistance(candles)
    const trendBias = StructureService.detectTrendBias(candles, ['4h', '1D', '1W'])
    const structureBreak = StructureService.detectBOS_CHoCH(candles, state)

    if (structureBreak) {
      this.state.set(symbol, {
        lastBOS: structureBreak.type === 'BOS' ? structureBreak.price : state.lastBOS,
        lastCHoCH: structureBreak.type === 'CHoCH' ? structureBreak.price : state.lastCHoCH,
      })
    }

    const currentPrice = candles[candles.length - 1].close
    let buySignals = 0
    let sellSignals = 0
    const reasons: string[] = []
    const risks: string[] = []

    for (const zone of zones.slice(0, 3)) {
      if (zone.type === 'support' && currentPrice <= zone.priceLevel * 1.01) {
        buySignals++
        reasons.push(`Price near strong support at $${zone.priceLevel} (${zone.touches} touches)`)
      } else if (zone.type === 'resistance' && currentPrice >= zone.priceLevel * 0.99) {
        sellSignals++
        reasons.push(`Price near strong resistance at $${zone.priceLevel} (${zone.touches} touches)`)
      }
    }

    for (const [tf, bias] of Object.entries(trendBias)) {
      if (bias.strength > 30) {
        if (bias.direction === 'bullish') {
          buySignals++
          reasons.push(`${tf} trend is bullish (strength: ${bias.strength}%)`)
        } else if (bias.direction === 'bearish') {
          sellSignals++
          reasons.push(`${tf} trend is bearish (strength: ${bias.strength}%)`)
        }
      }
    }

    if (structureBreak) {
      if (structureBreak.direction === 'bullish') {
        buySignals += 2
        reasons.push(`${structureBreak.type} detected — bullish break at $${structureBreak.price}`)
      } else {
        sellSignals += 2
        reasons.push(`${structureBreak.type} detected — bearish break at $${structureBreak.price}`)
      }
    }

    if (zones.length === 0) {
      risks.push('No significant support/resistance zones detected')
    }

    const dominantTimeframe = this.getDominantTimeframe(trendBias)
    if (dominantTimeframe) {
      const bias = trendBias[dominantTimeframe]
      if (bias.direction === 'sideways') {
        risks.push(`Market is sideways on ${dominantTimeframe} — low conviction signals`)
      }
    }

    let side: 'BUY' | 'SELL' | 'HOLD' = 'HOLD'
    if (buySignals >= 3 && buySignals > sellSignals) {
      side = 'BUY'
    } else if (sellSignals >= 3 && sellSignals > buySignals) {
      side = 'SELL'
    } else if (buySignals > sellSignals) {
      side = buySignals >= 2 ? 'BUY' : 'HOLD'
    } else if (sellSignals > buySignals) {
      side = sellSignals >= 2 ? 'SELL' : 'HOLD'
    }

    const totalSignals = buySignals + sellSignals
    const confidence = totalSignals > 0 ? Math.round((Math.max(buySignals, sellSignals) / Math.max(totalSignals, 1)) * 100) : 0
    const score = Math.round((buySignals - sellSignals) * 15 * 10) / 10

    return {
      symbol,
      timeframe,
      side,
      confidence,
      score,
      supportResistanceZones: zones,
      trendBiasByTimeframe: trendBias,
      structureBreaks: structureBreak ? [structureBreak] : [],
      reasons,
      risks,
      timestamp: new Date().toISOString(),
    }
  }

  private static getDominantTimeframe(trendBias: Record<string, { direction: string; strength: number }>): string | null {
    let maxStrength = 0
    let dominant = null

    for (const [tf, bias] of Object.entries(trendBias)) {
      if (bias.strength > maxStrength) {
        maxStrength = bias.strength
        dominant = tf
      }
    }

    return dominant
  }
}
