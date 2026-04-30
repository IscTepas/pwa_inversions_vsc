import { CompanySnapshot, EarningsData, ValuationData } from '../../types/fundamentals.types'

export class FundamentalsService {
  private static apiKey: string = import.meta.env.VITE_FINNHUB_API_KEY || ''
  private static baseUrl = 'https://finnhub.io/api/v1'

  static async fetchCompanyMetrics(symbol: string): Promise<CompanySnapshot | null> {
    if (!this.apiKey) {
      return this.getMockCompanySnapshot(symbol)
    }

    try {
      const [metricsRes, profileRes] = await Promise.all([
        fetch(`${this.baseUrl}/stock/metric?symbol=${symbol}&metric=all&token=${this.apiKey}`),
        fetch(`${this.baseUrl}/stock/profile2?symbol=${symbol}&token=${this.apiKey}`),
      ])

      if (!metricsRes.ok || !profileRes.ok) {
        throw new Error(`Finnhub API error`)
      }

      const [metricsData, profileData] = await Promise.all([
        metricsRes.json(),
        profileRes.json(),
      ])

      const metric = metricsData.metric || {}

      return {
        symbol,
        name: profileData.name || symbol,
        sector: profileData.finnhubIndustry || 'Unknown',
        marketCap: metric.marketCapitalization || 0,
        pe: metric.peNormalizedAnnual || 0,
        eps: metric.reportedEPSAnnual || 0,
        revenueGrowth: metric.revenueGrowthTTM || 0,
        profitMargin: metric.netMarginTTM || 0,
        updated: new Date().toISOString(),
      }
    } catch (error) {
      console.error('FundamentalsService.fetchCompanyMetrics error:', error)
      return this.getMockCompanySnapshot(symbol)
    }
  }

  static async fetchEarnings(symbol: string): Promise<EarningsData[]> {
    if (!this.apiKey) {
      return this.getMockEarnings(symbol)
    }

    try {
      const response = await fetch(
        `${this.baseUrl}/calendar/earnings?symbol=${symbol}&token=${this.apiKey}`
      )

      if (!response.ok) throw new Error('Finnhub earnings error')

      const data = await response.json()
      return (data.earnings || []).map((e: any) => ({
        symbol,
        date: e.date,
        estimated: e.epsEstimate || 0,
        actual: e.epsActual !== null ? e.epsActual : null,
        surprise: e.epsSurpriseDollar !== null ? e.epsSurpriseDollar : null,
        guidanceRaised: false,
      }))
    } catch (error) {
      console.error('FundamentalsService.fetchEarnings error:', error)
      return this.getMockEarnings(symbol)
    }
  }

  static calculateValuationScore(metrics: CompanySnapshot): number {
    let score = 50

    if (metrics.pe > 0 && metrics.pe < 15) score += 15
    else if (metrics.pe >= 15 && metrics.pe < 25) score += 5
    else if (metrics.pe >= 35) score -= 10

    if (metrics.revenueGrowth > 20) score += 15
    else if (metrics.revenueGrowth > 10) score += 10
    else if (metrics.revenueGrowth > 0) score += 5
    else if (metrics.revenueGrowth < -10) score -= 10

    if (metrics.profitMargin > 20) score += 15
    else if (metrics.profitMargin > 10) score += 10
    else if (metrics.profitMargin > 0) score += 5
    else score -= 5

    if (metrics.marketCap > 100000000000) score += 5

    return Math.max(0, Math.min(100, score))
  }

  static detectEarningsSurprise(earnings: EarningsData[]): { surprise: number | null; trend: 'improving' | 'declining' | 'stable' } {
    const reported = earnings.filter((e) => e.actual !== null && e.surprise !== null)

    if (reported.length === 0) {
      return { surprise: null, trend: 'stable' }
    }

    const latest = reported[0]
    const surprises = reported.slice(0, 4).map((e) => e.surprise || 0)

    if (surprises.length < 2) {
      return { surprise: latest.surprise, trend: 'stable' }
    }

    const avgRecent = surprises.slice(0, 2).reduce((a, b) => a + b, 0) / 2
    const avgOlder = surprises.slice(2).reduce((a, b) => a + b, 0) / (surprises.length - 2)

    let trend: 'improving' | 'declining' | 'stable' = 'stable'
    if (avgRecent > avgOlder + 0.05) trend = 'improving'
    else if (avgRecent < avgOlder - 0.05) trend = 'declining'

    return { surprise: latest.surprise, trend }
  }

  private static getMockCompanySnapshot(symbol: string): CompanySnapshot {
    const mockData: Record<string, Partial<CompanySnapshot>> = {
      AAPL: { name: 'Apple Inc.', sector: 'Technology', marketCap: 3000000000000, pe: 30, revenueGrowth: 8, profitMargin: 25 },
      MSFT: { name: 'Microsoft Corp.', sector: 'Technology', marketCap: 2800000000000, pe: 35, revenueGrowth: 12, profitMargin: 35 },
      GOOGL: { name: 'Alphabet Inc.', sector: 'Technology', marketCap: 1800000000000, pe: 25, revenueGrowth: 10, profitMargin: 22 },
      AMZN: { name: 'Amazon.com Inc.', sector: 'Consumer Cyclical', marketCap: 1600000000000, pe: 60, revenueGrowth: 15, profitMargin: 5 },
      TSLA: { name: 'Tesla Inc.', sector: 'Consumer Cyclical', marketCap: 800000000000, pe: 70, revenueGrowth: 25, profitMargin: 12 },
      NVDA: { name: 'NVIDIA Corp.', sector: 'Technology', marketCap: 2500000000000, pe: 65, revenueGrowth: 100, profitMargin: 45 },
      JPM: { name: 'JPMorgan Chase', sector: 'Financial Services', marketCap: 500000000000, pe: 12, revenueGrowth: 5, profitMargin: 28 },
      V: { name: 'Visa Inc.', sector: 'Financial Services', marketCap: 550000000000, pe: 30, revenueGrowth: 10, profitMargin: 50 },
    }

    const data = mockData[symbol] || {}

    return {
      symbol,
      name: data.name || `${symbol} Corp.`,
      sector: data.sector || 'Unknown',
      marketCap: data.marketCap || 100000000000,
      pe: data.pe || 20,
      eps: data.pe ? 100 / data.pe : 5,
      revenueGrowth: data.revenueGrowth || 5,
      profitMargin: data.profitMargin || 15,
      updated: new Date().toISOString(),
    }
  }

  private static getMockEarnings(symbol: string): EarningsData[] {
    const now = new Date()
    return [
      {
        symbol,
        date: new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        estimated: 1.50,
        actual: null,
        surprise: null,
        guidanceRaised: false,
      },
      {
        symbol,
        date: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        estimated: 1.42,
        actual: 1.52,
        surprise: 0.10,
        guidanceRaised: true,
      },
      {
        symbol,
        date: new Date(now.getTime() - 180 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        estimated: 1.35,
        actual: 1.38,
        surprise: 0.03,
        guidanceRaised: false,
      },
      {
        symbol,
        date: new Date(now.getTime() - 270 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        estimated: 1.30,
        actual: 1.25,
        surprise: -0.05,
        guidanceRaised: false,
      },
    ]
  }
}
