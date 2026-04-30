import { FundamentalsCoreResult, CompanySnapshot, EarningsData } from '../../types/fundamentals.types'
import { FundamentalsService } from './fundamentals.service'

export class FundamentalsCore {
  private static metricsCache: Map<string, CompanySnapshot> = new Map()
  private static earningsCache: Map<string, EarningsData[]> = new Map()

  static async analyze(symbol: string, timeframe: string = '1D'): Promise<FundamentalsCoreResult> {
    if (!symbol) {
      return {
        symbol: '',
        side: 'HOLD',
        confidence: 0,
        score: 0,
        reasons: ['No symbol provided'],
        fundamentals: {},
        timestamp: new Date().toISOString(),
      }
    }

    let metrics: CompanySnapshot | undefined = this.metricsCache.get(symbol)
    if (!metrics) {
      const fetched = await FundamentalsService.fetchCompanyMetrics(symbol)
      if (fetched) {
        metrics = fetched
        this.metricsCache.set(symbol, fetched)
      }
    }

    let earnings: EarningsData[] | undefined = this.earningsCache.get(symbol)
    if (!earnings) {
      const fetched = await FundamentalsService.fetchEarnings(symbol)
      if (fetched) {
        earnings = fetched
        this.earningsCache.set(symbol, fetched)
      }
    }

    if (!metrics) {
      return {
        symbol,
        side: 'HOLD',
        confidence: 0,
        score: 0,
        reasons: ['Unable to fetch company metrics'],
        fundamentals: {},
        timestamp: new Date().toISOString(),
      }
    }

    const valuationScore = FundamentalsService.calculateValuationScore(metrics)
    const earningsSurprise = earnings ? FundamentalsService.detectEarningsSurprise(earnings) : { surprise: null, trend: 'stable' }

    let buySignals = 0
    let sellSignals = 0
    const reasons: string[] = []
    const risks: string[] = []

    if (valuationScore >= 70) {
      buySignals++
      reasons.push(`Strong valuation score: ${valuationScore}/100`)
    } else if (valuationScore < 30) {
      sellSignals++
      reasons.push(`Weak valuation score: ${valuationScore}/100`)
    }

    if (metrics.pe > 0 && metrics.pe < 15) {
      buySignals++
      reasons.push(`Attractive P/E ratio of ${metrics.pe}`)
    } else if (metrics.pe > 50) {
      sellSignals++
      reasons.push(`High P/E ratio of ${metrics.pe} — potentially overvalued`)
    }

    if (metrics.revenueGrowth > 15) {
      buySignals++
      reasons.push(`Strong revenue growth: ${metrics.revenueGrowth}%`)
    } else if (metrics.revenueGrowth < 0) {
      sellSignals++
      reasons.push(`Negative revenue growth: ${metrics.revenueGrowth}%`)
    }

    if (metrics.profitMargin > 20) {
      buySignals++
      reasons.push(`Healthy profit margin: ${metrics.profitMargin}%`)
    } else if (metrics.profitMargin < 0) {
      sellSignals++
      reasons.push(`Negative profit margin: ${metrics.profitMargin}%`)
    }

    if (earningsSurprise.surprise !== null) {
      if (earningsSurprise.surprise > 0) {
        buySignals++
        reasons.push(`Last earnings beat by $${earningsSurprise.surprise} (${earningsSurprise.trend} trend)`)
      } else if (earningsSurprise.surprise < 0) {
        sellSignals++
        reasons.push(`Last earnings missed by $${Math.abs(earningsSurprise.surprise)} (${earningsSurprise.trend} trend)`)
      }

      if (earningsSurprise.trend === 'declining') {
        risks.push('Earnings surprise trend is declining')
      }
    }

    if (metrics.marketCap < 2000000000) {
      risks.push(`Small-cap stock ($${(metrics.marketCap / 1000000).toFixed(0)}M) — higher risk`)
    }

    if (metrics.sector === 'Unknown') {
      risks.push('Sector information unavailable')
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
    const score = Math.round((buySignals - sellSignals) * 12 * 10) / 10

    return {
      symbol,
      side,
      confidence,
      score,
      reasons,
      fundamentals: {
        earnings: earnings?.[0] || undefined,
        valuation: {
          symbol,
          pe: metrics.pe,
          pb: 0,
          peg: metrics.pe > 0 && metrics.revenueGrowth > 0 ? Math.round((metrics.pe / metrics.revenueGrowth) * 10) / 10 : 0,
          priceToSales: 0,
          roe: 0,
        },
      },
      risks,
      timestamp: new Date().toISOString(),
    }
  }

  static async analyzeMultiple(symbols: string[]): Promise<FundamentalsCoreResult[]> {
    const results: FundamentalsCoreResult[] = []

    for (const symbol of symbols) {
      try {
        const result = await this.analyze(symbol)
        results.push(result)
      } catch (error) {
        console.error(`FundamentalsCore.analyze error for ${symbol}:`, error)
      }
    }

    return results
  }

  static clearCache(): void {
    this.metricsCache.clear()
    this.earningsCache.clear()
  }
}
