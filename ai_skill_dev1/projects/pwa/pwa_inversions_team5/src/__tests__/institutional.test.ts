import { InstitutionalFlowCore } from '../services/institutional/institutional-flow.core'
import { InstitutionalService } from '../services/institutional/institutional.service'
import { OptionChain } from '../types/broker.types'

function generateOptionChain(symbol: string = 'AAPL', expiration: string = '2026-06-20'): OptionChain {
  const strikes = [140, 145, 150, 155, 160, 165, 170]
  const calls = strikes.map((strike) => ({
    strike,
    bid: Math.max(0, Math.round((170 - strike + Math.random() * 5) * 100)) / 100,
    ask: Math.max(0, Math.round((170 - strike + Math.random() * 5 + 0.5) * 100)) / 100,
    last: Math.max(0, Math.round((170 - strike + Math.random() * 5) * 100)) / 100,
    volume: Math.floor(Math.random() * 5000) + 100,
    openInterest: Math.floor(Math.random() * 10000) + 500,
    iv: Math.round((0.2 + Math.random() * 0.3) * 1000) / 1000,
    delta: Math.round(Math.random() * 100) / 100,
    gamma: Math.round(Math.random() * 10) / 100,
    theta: Math.round(-Math.random() * 5 * 100) / 100,
    vega: Math.round(Math.random() * 20 * 100) / 100,
    bidSize: Math.floor(Math.random() * 100) + 1,
    askSize: Math.floor(Math.random() * 100) + 1,
  }))

  const puts = strikes.map((strike) => ({
    strike,
    bid: Math.max(0, Math.round((strike - 150 + Math.random() * 5) * 100)) / 100,
    ask: Math.max(0, Math.round((strike - 150 + Math.random() * 5 + 0.5) * 100)) / 100,
    last: Math.max(0, Math.round((strike - 150 + Math.random() * 5) * 100)) / 100,
    volume: Math.floor(Math.random() * 5000) + 100,
    openInterest: Math.floor(Math.random() * 10000) + 500,
    iv: Math.round((0.2 + Math.random() * 0.3) * 1000) / 1000,
    delta: Math.round(-Math.random() * 100) / 100,
    gamma: Math.round(Math.random() * 10) / 100,
    theta: Math.round(-Math.random() * 5 * 100) / 100,
    vega: Math.round(Math.random() * 20 * 100) / 100,
    bidSize: Math.floor(Math.random() * 100) + 1,
    askSize: Math.floor(Math.random() * 100) + 1,
  }))

  return { symbol, expiration, calls, puts }
}

describe('InstitutionalService', () => {
  describe('detectUnusualOptionActivity', () => {
    it('should detect unusual activity with high volume/OI ratio', () => {
      const chain = generateOptionChain('AAPL')
      const unusual = InstitutionalService.detectUnusualOptionActivity([chain], 2)
      expect(Array.isArray(unusual)).toBe(true)
    })

    it('should filter by threshold', () => {
      const chain = generateOptionChain('AAPL')
      const unusualLow = InstitutionalService.detectUnusualOptionActivity([chain], 2)
      const unusualHigh = InstitutionalService.detectUnusualOptionActivity([chain], 100)
      expect(unusualLow.length).toBeGreaterThanOrEqual(unusualHigh.length)
    })
  })

  describe('calculatePutCallRatio', () => {
    it('should calculate PCR for valid option chain', () => {
      const chain = generateOptionChain('AAPL')
      const pcr = InstitutionalService.calculatePutCallRatio([chain])
      expect(pcr.value).toBeGreaterThan(0)
      expect(['bullish', 'bearish', 'neutral']).toContain(pcr.interpretation)
    })

    it('should return neutral for empty chain', () => {
      const emptyChain = { symbol: 'AAPL', expiration: '2026-06-20', calls: [], puts: [] }
      const pcr = InstitutionalService.calculatePutCallRatio([emptyChain])
      expect(pcr.value).toBe(1)
      expect(pcr.interpretation).toBe('neutral')
    })
  })

  describe('detectBlockOrders', () => {
    it('should detect large block orders', () => {
      const trades = [
        { symbol: 'AAPL', side: 'buy', size: 50000, price: 155, timestamp: new Date().toISOString() },
        { symbol: 'AAPL', side: 'sell', size: 100, price: 155, timestamp: new Date().toISOString() },
      ]
      const blocks = InstitutionalService.detectBlockOrders(trades, 10000)
      expect(blocks.length).toBe(1)
      expect(blocks[0].size).toBe(50000)
    })

    it('should return empty for no large orders', () => {
      const trades = [
        { symbol: 'AAPL', side: 'buy', size: 100, price: 155, timestamp: new Date().toISOString() },
      ]
      const blocks = InstitutionalService.detectBlockOrders(trades, 10000)
      expect(blocks.length).toBe(0)
    })
  })
})

describe('InstitutionalFlowCore', () => {
  it('should return HOLD for empty option chain', () => {
    const result = InstitutionalFlowCore.analyze([])
    expect(result.side).toBe('HOLD')
    expect(result.confidence).toBe(0)
  })

  it('should analyze valid option chain', () => {
    const chain = generateOptionChain('AAPL')
    const result = InstitutionalFlowCore.analyze([chain])
    expect(result.symbol).toBe('AAPL')
    expect(['BUY', 'SELL', 'HOLD']).toContain(result.side)
    expect(result.confidence).toBeGreaterThanOrEqual(0)
    expect(Array.isArray(result.institutionalEvents)).toBe(true)
    expect(result.putCallRatio).toBeDefined()
  })

  it('should analyze with previous chain for OI swings', () => {
    const currentChain = generateOptionChain('AAPL')
    const previousChain = generateOptionChain('AAPL')
    const result = InstitutionalFlowCore.analyze([currentChain], undefined, [previousChain])
    expect(Array.isArray(result.institutionalEvents)).toBe(true)
  })

  it('should include timestamp', () => {
    const chain = generateOptionChain('MSFT')
    const result = InstitutionalFlowCore.analyze([chain])
    expect(result.timestamp).toBeDefined()
  })
})
