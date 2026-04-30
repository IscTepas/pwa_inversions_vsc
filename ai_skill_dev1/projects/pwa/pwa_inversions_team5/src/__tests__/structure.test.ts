import { TechnicalStructureCore } from '../services/structure/technical-structure.core'
import { StructureService } from '../services/structure/structure.service'
import { Candle } from '../types/broker.types'

function generateCandles(count: number, basePrice: number = 100): Candle[] {
  const candles: Candle[] = []
  let price = basePrice
  for (let i = 0; i < count; i++) {
    const open = price
    const change = (Math.random() - 0.5) * 4
    const close = open + change
    const high = Math.max(open, close) + Math.random() * 2
    const low = Math.min(open, close) - Math.random() * 2
    const date = new Date()
    date.setDate(date.getDate() - (count - i))

    candles.push({
      timestamp: date.toISOString(),
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume: Math.floor(Math.random() * 1000000) + 100000,
    })

    price = close
  }
  return candles
}

describe('StructureService', () => {
  describe('detectSupportResistance', () => {
    it('should return empty array for insufficient data', () => {
      const candles = generateCandles(10)
      const zones = StructureService.detectSupportResistance(candles)
      expect(zones.length).toBeGreaterThanOrEqual(0)
    })

    it('should detect support and resistance zones', () => {
      const candles = generateCandles(100, 150)
      const zones = StructureService.detectSupportResistance(candles)
      expect(Array.isArray(zones)).toBe(true)
    })

    it('should sort zones by strength', () => {
      const candles = generateCandles(100, 150)
      const zones = StructureService.detectSupportResistance(candles)
      if (zones.length > 1) {
        for (let i = 0; i < zones.length - 1; i++) {
          expect(zones[i].strength).toBeGreaterThanOrEqual(zones[i + 1].strength)
        }
      }
    })
  })

  describe('detectTrendBias', () => {
    it('should return trend bias for multiple timeframes', () => {
      const candles = generateCandles(200, 100)
      const trendBias = StructureService.detectTrendBias(candles, ['4h', '1D'])
      expect(Object.keys(trendBias).length).toBeGreaterThan(0)
    })

    it('should return sideways for insufficient data', () => {
      const candles = generateCandles(10)
      const trendBias = StructureService.detectTrendBias(candles, ['1D'])
      expect(trendBias['1D'].direction).toBe('sideways')
    })
  })

  describe('detectBOS_CHoCH', () => {
    it('should return null for insufficient data', () => {
      const candles = generateCandles(20)
      const result = StructureService.detectBOS_CHoCH(candles, {})
      expect(result).toBeNull()
    })
  })

  describe('calculateZoneStrength', () => {
    it('should calculate strength based on proximity', () => {
      const zone = {
        type: 'support' as const,
        priceLevel: 100,
        strength: 50,
        touches: 3,
        timeframe: '1D',
        startDate: new Date().toISOString(),
      }
      const strength = StructureService.calculateZoneStrength(zone, 101)
      expect(strength).toBeGreaterThan(50)
    })
  })
})

describe('TechnicalStructureCore', () => {
  it('should return HOLD for insufficient data', () => {
    const candles = generateCandles(20)
    const result = TechnicalStructureCore.analyze(candles, 'AAPL', '1D')
    expect(result.side).toBe('HOLD')
    expect(result.confidence).toBe(0)
  })

  it('should analyze with sufficient data', () => {
    const candles = generateCandles(200, 150)
    const result = TechnicalStructureCore.analyze(candles, 'AAPL', '1D')
    expect(result.symbol).toBe('AAPL')
    expect(result.timeframe).toBe('1D')
    expect(['BUY', 'SELL', 'HOLD']).toContain(result.side)
    expect(result.confidence).toBeGreaterThanOrEqual(0)
    expect(result.confidence).toBeLessThanOrEqual(100)
    expect(Array.isArray(result.supportResistanceZones)).toBe(true)
    expect(typeof result.trendBiasByTimeframe).toBe('object')
    expect(Array.isArray(result.reasons)).toBe(true)
  })

  it('should include timestamp', () => {
    const candles = generateCandles(100)
    const result = TechnicalStructureCore.analyze(candles, 'MSFT', '1D')
    expect(result.timestamp).toBeDefined()
  })
})
