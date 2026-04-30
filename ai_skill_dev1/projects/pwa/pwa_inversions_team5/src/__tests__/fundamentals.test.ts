import { FundamentalsService } from '../services/fundamentals/fundamentals.service'
import { FundamentalsCore } from '../services/fundamentals/fundamentals.core'
import { DailyRankingService } from '../services/fundamentals/daily-ranking.service'
import { CompanySnapshot, EarningsData } from '../types/fundamentals.types'

describe('FundamentalsService', () => {
  describe('fetchCompanyMetrics', () => {
    it('should return mock data for known symbols', async () => {
      const metrics = await FundamentalsService.fetchCompanyMetrics('AAPL')
      expect(metrics).not.toBeNull()
      expect(metrics?.symbol).toBe('AAPL')
      expect(metrics?.pe).toBeGreaterThan(0)
    })

    it('should return mock data for unknown symbols', async () => {
      const metrics = await FundamentalsService.fetchCompanyMetrics('XYZ')
      expect(metrics).not.toBeNull()
      expect(metrics?.symbol).toBe('XYZ')
    })
  })

  describe('calculateValuationScore', () => {
    it('should give high score for good fundamentals', () => {
      const metrics: CompanySnapshot = {
        symbol: 'AAPL',
        name: 'Apple',
        sector: 'Technology',
        marketCap: 3000000000000,
        pe: 15,
        eps: 10,
        revenueGrowth: 25,
        profitMargin: 30,
        updated: new Date().toISOString(),
      }
      const score = FundamentalsService.calculateValuationScore(metrics)
      expect(score).toBeGreaterThan(50)
    })

    it('should give low score for poor fundamentals', () => {
      const metrics: CompanySnapshot = {
        symbol: 'XYZ',
        name: 'Bad Co',
        sector: 'Unknown',
        marketCap: 500000000,
        pe: 100,
        eps: -2,
        revenueGrowth: -20,
        profitMargin: -15,
        updated: new Date().toISOString(),
      }
      const score = FundamentalsService.calculateValuationScore(metrics)
      expect(score).toBeLessThan(50)
    })

    it('should return score between 0 and 100', () => {
      const metrics: CompanySnapshot = {
        symbol: 'TEST',
        name: 'Test',
        sector: 'Tech',
        marketCap: 1000000000,
        pe: 20,
        eps: 5,
        revenueGrowth: 10,
        profitMargin: 15,
        updated: new Date().toISOString(),
      }
      const score = FundamentalsService.calculateValuationScore(metrics)
      expect(score).toBeGreaterThanOrEqual(0)
      expect(score).toBeLessThanOrEqual(100)
    })
  })

  describe('detectEarningsSurprise', () => {
    it('should detect improving trend', () => {
      const earnings: EarningsData[] = [
        { symbol: 'AAPL', date: '2026-01-01', estimated: 1.5, actual: 1.7, surprise: 0.2, guidanceRaised: false },
        { symbol: 'AAPL', date: '2025-10-01', estimated: 1.4, actual: 1.55, surprise: 0.15, guidanceRaised: false },
        { symbol: 'AAPL', date: '2025-07-01', estimated: 1.3, actual: 1.35, surprise: 0.05, guidanceRaised: false },
        { symbol: 'AAPL', date: '2025-04-01', estimated: 1.2, actual: 1.22, surprise: 0.02, guidanceRaised: false },
      ]
      const result = FundamentalsService.detectEarningsSurprise(earnings)
      expect(result.trend).toBe('improving')
    })

    it('should return stable for no reported earnings', () => {
      const result = FundamentalsService.detectEarningsSurprise([])
      expect(result.surprise).toBeNull()
      expect(result.trend).toBe('stable')
    })
  })

  describe('fetchEarnings', () => {
    it('should return mock earnings data', async () => {
      const earnings = await FundamentalsService.fetchEarnings('AAPL')
      expect(Array.isArray(earnings)).toBe(true)
      expect(earnings.length).toBeGreaterThan(0)
    })
  })
})

describe('FundamentalsCore', () => {
  it('should return HOLD for empty symbol', async () => {
    const result = await FundamentalsCore.analyze('')
    expect(result.side).toBe('HOLD')
    expect(result.confidence).toBe(0)
  })

  it('should analyze known symbol', async () => {
    const result = await FundamentalsCore.analyze('AAPL')
    expect(result.symbol).toBe('AAPL')
    expect(['BUY', 'SELL', 'HOLD']).toContain(result.side)
    expect(Array.isArray(result.reasons)).toBe(true)
  })

  it('should include valuation data', async () => {
    const result = await FundamentalsCore.analyze('MSFT')
    expect(result.fundamentals.valuation).toBeDefined()
    expect(result.fundamentals.valuation?.pe).toBeGreaterThan(0)
  })

  it('should include timestamp', async () => {
    const result = await FundamentalsCore.analyze('GOOGL')
    expect(result.timestamp).toBeDefined()
  })
})

describe('DailyRankingService', () => {
  it('should rank opportunities', async () => {
    const symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA', 'NVDA', 'JPM', 'V']
    const result = await DailyRankingService.rankDailyOpportunities(symbols)
    expect(Array.isArray(result.topCandidates)).toBe(true)
    expect(result.totalAnalyzed).toBe(symbols.length)
    expect(result.refreshTime).toBeDefined()
  })

  it('should return ranked results with scores', async () => {
    const symbols = ['AAPL', 'MSFT', 'GOOGL']
    const result = await DailyRankingService.rankDailyOpportunities(symbols, 0)
    expect(Object.keys(result.scoredSymbols).length).toBeGreaterThan(0)
    expect(result.scoredSymbols['AAPL']).toBeGreaterThanOrEqual(0)
  })

  it('should filter by minimum score', async () => {
    const symbols = ['AAPL', 'MSFT', 'GOOGL']
    const result = await DailyRankingService.rankDailyOpportunities(symbols, 80)
    for (const candidate of result.topCandidates) {
      expect(candidate.totalScore).toBeGreaterThanOrEqual(80)
    }
  })

  it('should assign ranks sequentially', async () => {
    const symbols = ['AAPL', 'MSFT', 'GOOGL', 'AMZN']
    const result = await DailyRankingService.rankDailyOpportunities(symbols, 0)
    for (let i = 0; i < result.topCandidates.length; i++) {
      expect(result.topCandidates[i].rank).toBe(i + 1)
    }
  })
})
