import { NewsEventsCoreResult, EarningsEvent } from '../../types/news.types'
import { NewsService } from './news.service'

export class NewsEventsCore {
  private static earningsCache: Map<string, EarningsEvent[]> = new Map()

  static async analyze(
    symbol: string,
    timeframe: string = '1D',
    earningsCalendar?: EarningsEvent[]
  ): Promise<NewsEventsCoreResult> {
    if (!symbol) {
      return {
        symbol: '',
        timeframe,
        side: 'HOLD',
        confidence: 0,
        score: 0,
        sentiment: {
          symbol: '',
          overallSentiment: 'neutral',
          score: 0,
          positiveCount: 0,
          negativeCount: 0,
          neutralCount: 0,
          timestamp: new Date().toISOString(),
        },
        newsItems: [],
        upcomingEvents: [],
        reasons: ['No symbol provided'],
        timestamp: new Date().toISOString(),
      }
    }

    const newsItems = await NewsService.fetchNews(symbol, 7)
    const sentiment = NewsService.aggregateSentiment(newsItems)

    const calendar = earningsCalendar || this.earningsCache.get(symbol) || []
    if (earningsCalendar) {
      this.earningsCache.set(symbol, earningsCalendar)
    }

    const upcomingEarnings = NewsService.detectEarningsEvent(symbol, calendar)
    const upcomingEvents = upcomingEarnings
      ? [NewsService.calculateEventRisk(upcomingEarnings)]
      : []

    let buySignals = 0
    let sellSignals = 0
    const reasons: string[] = []
    const risks: string[] = []

    if (sentiment.overallSentiment === 'bullish') {
      buySignals++
      reasons.push(`News sentiment is bullish (score: ${sentiment.score})`)
      if (sentiment.positiveCount > 3) {
        buySignals++
        reasons.push(`${sentiment.positiveCount} positive articles in last 7 days`)
      }
    } else if (sentiment.overallSentiment === 'bearish') {
      sellSignals++
      reasons.push(`News sentiment is bearish (score: ${sentiment.score})`)
      if (sentiment.negativeCount > 3) {
        sellSignals++
        reasons.push(`${sentiment.negativeCount} negative articles in last 7 days`)
      }
    }

    if (upcomingEarnings) {
      const daysUntil = Math.ceil((new Date(upcomingEarnings.date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
      risks.push(`Earnings in ${daysUntil} days — increased volatility expected`)

      if (upcomingEarnings.surprise !== null && upcomingEarnings.surprise > 0) {
        buySignals++
        reasons.push(`Previous earnings beat by ${upcomingEarnings.surprisePercent}% — positive momentum`)
      } else if (upcomingEarnings.surprise !== null && upcomingEarnings.surprise < 0) {
        sellSignals++
        reasons.push(`Previous earnings missed by ${Math.abs(upcomingEarnings.surprisePercent || 0)}% — negative momentum`)
      }
    }

    const highRelevanceNews = newsItems.filter((n) => n.relevanceScore >= 70)
    if (highRelevanceNews.length > 0) {
      const mostRelevant = highRelevanceNews[0]
      reasons.push(`High relevance news: "${mostRelevant.headline.substring(0, 60)}..."`)
    }

    if (newsItems.length === 0) {
      risks.push('No recent news coverage — low information flow')
    }

    let side: 'BUY' | 'SELL' | 'HOLD' = 'HOLD'
    if (buySignals >= 2 && buySignals > sellSignals) {
      side = 'BUY'
    } else if (sellSignals >= 2 && sellSignals > buySignals) {
      side = 'SELL'
    } else if (buySignals > sellSignals) {
      side = 'HOLD'
    } else if (sellSignals > buySignals) {
      side = 'HOLD'
    }

    const totalSignals = buySignals + sellSignals
    const confidence = totalSignals > 0 ? Math.round((Math.max(buySignals, sellSignals) / Math.max(totalSignals, 1)) * 100) : 0
    const score = Math.round((buySignals - sellSignals) * 10 * 10) / 10

    return {
      symbol,
      timeframe,
      side,
      confidence,
      score,
      sentiment,
      newsItems: newsItems.slice(0, 10),
      upcomingEvents,
      reasons,
      risks,
      timestamp: new Date().toISOString(),
    }
  }

  static async analyzeMultiple(symbols: string[], earningsCalendar?: EarningsEvent[]): Promise<NewsEventsCoreResult[]> {
    const results: NewsEventsCoreResult[] = []

    for (const symbol of symbols) {
      try {
        const result = await this.analyze(symbol, '1D', earningsCalendar)
        results.push(result)
      } catch (error) {
        console.error(`NewsEventsCore.analyze error for ${symbol}:`, error)
      }
    }

    return results
  }
}
