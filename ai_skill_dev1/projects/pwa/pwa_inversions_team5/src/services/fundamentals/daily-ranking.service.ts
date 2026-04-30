import { CompanySnapshot } from '../../types/fundamentals.types'
import { FundamentalsService } from './fundamentals.service'

export interface RankedOpportunity {
  symbol: string
  rank: number
  totalScore: number
  fundamentalsScore: number
  valuationScore: number
  growthScore: number
  profitabilityScore: number
  metrics: Partial<CompanySnapshot>
  signals: string[]
}

export interface DailyRankingResult {
  topCandidates: RankedOpportunity[]
  scoredSymbols: Record<string, number>
  refreshTime: string
  totalAnalyzed: number
}

export class DailyRankingService {
  static async rankDailyOpportunities(symbols: string[], minScore: number = 60): Promise<DailyRankingResult> {
    const opportunities: RankedOpportunity[] = []
    const scoredSymbols: Record<string, number> = {}

    for (const symbol of symbols) {
      try {
        const metrics = await FundamentalsService.fetchCompanyMetrics(symbol)
        if (!metrics) continue

        const valuationScore = FundamentalsService.calculateValuationScore(metrics)
        const growthScore = this.calculateGrowthScore(metrics)
        const profitabilityScore = this.calculateProfitabilityScore(metrics)
        const fundamentalsScore = Math.round(
          valuationScore * 0.35 + growthScore * 0.35 + profitabilityScore * 0.3
        )

        const totalScore = Math.round(fundamentalsScore)
        scoredSymbols[symbol] = totalScore

        if (totalScore >= minScore) {
          const signals = this.generateSignals(metrics, valuationScore, growthScore, profitabilityScore)

          opportunities.push({
            symbol,
            rank: 0,
            totalScore,
            fundamentalsScore,
            valuationScore,
            growthScore,
            profitabilityScore,
            metrics: {
              symbol: metrics.symbol,
              name: metrics.name,
              sector: metrics.sector,
              marketCap: metrics.marketCap,
              pe: metrics.pe,
              eps: metrics.eps,
              revenueGrowth: metrics.revenueGrowth,
              profitMargin: metrics.profitMargin,
            },
            signals,
          })
        }
      } catch (error) {
        console.error(`DailyRankingService error for ${symbol}:`, error)
      }
    }

    opportunities.sort((a, b) => b.totalScore - a.totalScore)

    opportunities.forEach((opp, index) => {
      opp.rank = index + 1
    })

    return {
      topCandidates: opportunities.slice(0, 25),
      scoredSymbols,
      refreshTime: new Date().toISOString(),
      totalAnalyzed: symbols.length,
    }
  }

  private static calculateGrowthScore(metrics: CompanySnapshot): number {
    let score = 50

    if (metrics.revenueGrowth > 30) score += 30
    else if (metrics.revenueGrowth > 20) score += 25
    else if (metrics.revenueGrowth > 15) score += 20
    else if (metrics.revenueGrowth > 10) score += 15
    else if (metrics.revenueGrowth > 5) score += 10
    else if (metrics.revenueGrowth > 0) score += 5
    else if (metrics.revenueGrowth < -5) score -= 15
    else score -= 10

    if (metrics.eps > 0) score += 10
    else score -= 10

    return Math.max(0, Math.min(100, score))
  }

  private static calculateProfitabilityScore(metrics: CompanySnapshot): number {
    let score = 50

    if (metrics.profitMargin > 30) score += 30
    else if (metrics.profitMargin > 20) score += 25
    else if (metrics.profitMargin > 15) score += 20
    else if (metrics.profitMargin > 10) score += 15
    else if (metrics.profitMargin > 5) score += 10
    else if (metrics.profitMargin > 0) score += 5
    else score -= 20

    if (metrics.marketCap > 100000000000) score += 10
    else if (metrics.marketCap > 10000000000) score += 5

    return Math.max(0, Math.min(100, score))
  }

  private static generateSignals(
    metrics: CompanySnapshot,
    valuationScore: number,
    growthScore: number,
    profitabilityScore: number
  ): string[] {
    const signals: string[] = []

    if (metrics.pe > 0 && metrics.pe < 20) {
      signals.push(`Attractive P/E ratio (${metrics.pe})`)
    }

    if (metrics.revenueGrowth > 20) {
      signals.push(`High revenue growth (${metrics.revenueGrowth}%)`)
    }

    if (metrics.profitMargin > 20) {
      signals.push(`Strong profit margins (${metrics.profitMargin}%)`)
    }

    if (valuationScore >= 70) {
      signals.push(`Strong valuation score (${valuationScore}/100)`)
    }

    if (growthScore >= 70) {
      signals.push(`Excellent growth trajectory (${growthScore}/100)`)
    }

    if (profitabilityScore >= 70) {
      signals.push(`High profitability (${profitabilityScore}/100)`)
    }

    if (metrics.marketCap > 500000000000) {
      signals.push(`Mega-cap stability ($${(metrics.marketCap / 1000000000).toFixed(0)}B)`)
    }

    return signals
  }
}
