import { NewsItem, SentimentResult, EarningsEvent, EventRisk } from '../../types/news.types'

export class NewsService {
  private static apiKey: string = import.meta.env.VITE_NEWSAPI_KEY || ''
  private static baseUrl = 'https://newsapi.org/v2'

  static async fetchNews(symbol: string, daysBack: number = 7): Promise<NewsItem[]> {
    if (!this.apiKey) {
      return this.getMockNews(symbol, daysBack)
    }

    try {
      const fromDate = new Date()
      fromDate.setDate(fromDate.getDate() - daysBack)

      const response = await fetch(
        `${this.baseUrl}/everything?q=${symbol}+stock&from=${fromDate.toISOString().split('T')[0]}&sortBy=relevancy&pageSize=20&apiKey=${this.apiKey}`
      )

      if (!response.ok) throw new Error(`NewsAPI error: ${response.status}`)

      const data = await response.json()

      return data.articles.map((article: any, index: number) => ({
        id: `news-${symbol}-${index}`,
        symbol,
        headline: article.title,
        summary: article.description || '',
        source: article.source?.name || 'Unknown',
        url: article.url || '',
        publishedAt: article.publishedAt,
        sentiment: this.analyzeSentiment(article.title + ' ' + (article.description || '')),
        sentimentScore: this.getSentimentScore(article.title + ' ' + (article.description || '')),
        relevanceScore: this.calculateRelevance(article, symbol),
      }))
    } catch (error) {
      console.error('NewsService.fetchNews error:', error)
      return this.getMockNews(symbol, daysBack)
    }
  }

  static analyzeSentiment(text: string): 'positive' | 'negative' | 'neutral' {
    const score = this.getSentimentScore(text)
    if (score > 0.1) return 'positive'
    if (score < -0.1) return 'negative'
    return 'neutral'
  }

  static getSentimentScore(text: string): number {
    const lower = text.toLowerCase()

    const positiveWords = [
      'surge', 'soar', 'gain', 'rally', 'beat', 'exceed', 'growth', 'profit',
      'upgrade', 'bullish', 'breakout', 'record', 'strong', 'positive',
      'opportunity', 'recovery', 'momentum', 'buy', 'outperform', 'increase',
      'higher', 'rise', 'win', 'success', 'approved', 'deal', 'partnership',
    ]

    const negativeWords = [
      'crash', 'drop', 'fall', 'loss', 'miss', 'downgrade', 'bearish',
      'decline', 'weak', 'negative', 'risk', 'warning', 'sell', 'underperform',
      'lower', 'recession', 'lawsuit', 'investigation', 'fraud', 'bankruptcy',
      'cut', 'layoff', 'debt', 'default', 'delay', 'rejected',
    ]

    let score = 0
    const words = lower.split(/\s+/)

    for (const word of words) {
      if (positiveWords.some((pw) => word.includes(pw))) score += 1
      if (negativeWords.some((nw) => word.includes(nw))) score -= 1
    }

    return Math.max(-1, Math.min(1, score / Math.max(words.length, 10)))
  }

  static calculateRelevance(article: any, symbol: string): number {
    let score = 0
    const text = (article.title + ' ' + (article.description || '')).toLowerCase()

    if (text.includes(symbol.toLowerCase())) score += 30
    if (text.includes('earnings') || text.includes('revenue')) score += 20
    if (text.includes('upgrade') || text.includes('downgrade')) score += 15
    if (article.source?.name && ['Bloomberg', 'Reuters', 'CNBC'].includes(article.source.name)) {
      score += 10
    }

    return Math.min(100, score)
  }

  static detectEarningsEvent(symbol: string, earningsCalendar: EarningsEvent[]): EarningsEvent | null {
    const now = new Date()
    const next7Days = new Date()
    next7Days.setDate(next7Days.getDate() + 7)

    const upcoming = earningsCalendar.find((e) => {
      const eventDate = new Date(e.date)
      return e.symbol === symbol && eventDate >= now && eventDate <= next7Days
    })

    return upcoming || null
  }

  static calculateEventRisk(event: EarningsEvent, timeframeDays: number = 7): EventRisk {
    const daysUntilEvent = Math.ceil((new Date(event.date).getTime() - Date.now()) / (1000 * 60 * 60 * 24))
    const withinTimeframe = daysUntilEvent <= timeframeDays

    let riskLevel: 'high' | 'medium' | 'low' = 'low'
    if (daysUntilEvent <= 1) riskLevel = 'high'
    else if (daysUntilEvent <= 3) riskLevel = 'medium'

    const historicalVolatility = event.surprise ? Math.abs(event.surprisePercent || 0) : 5

    return {
      type: 'earnings',
      symbol: event.symbol,
      date: event.date,
      riskLevel,
      description: `Earnings in ${daysUntilEvent} day(s) — estimated EPS: $${event.estimatedEPS}`,
      potentialImpact: withinTimeframe ? Math.round(historicalVolatility * 20) : 0,
    }
  }

  static aggregateSentiment(newsItems: NewsItem[]): SentimentResult {
    if (newsItems.length === 0) {
      return {
        symbol: '',
        overallSentiment: 'neutral',
        score: 0,
        positiveCount: 0,
        negativeCount: 0,
        neutralCount: 0,
        timestamp: new Date().toISOString(),
      }
    }

    const positive = newsItems.filter((n) => n.sentiment === 'positive')
    const negative = newsItems.filter((n) => n.sentiment === 'negative')
    const neutral = newsItems.filter((n) => n.sentiment === 'neutral')

    const avgScore = newsItems.reduce((sum, n) => sum + n.sentimentScore, 0) / newsItems.length

    let overallSentiment: 'bullish' | 'bearish' | 'neutral' = 'neutral'
    if (avgScore > 0.15) overallSentiment = 'bullish'
    else if (avgScore < -0.15) overallSentiment = 'bearish'

    return {
      symbol: newsItems[0].symbol,
      overallSentiment,
      score: Math.round(avgScore * 100) / 100,
      positiveCount: positive.length,
      negativeCount: negative.length,
      neutralCount: neutral.length,
      timestamp: new Date().toISOString(),
    }
  }

  private static getMockNews(symbol: string, daysBack: number): NewsItem[] {
    const headlines = [
      { title: `${symbol} reports strong quarterly earnings`, sentiment: 'positive' as const },
      { title: `Analysts upgrade ${symbol} price target`, sentiment: 'positive' as const },
      { title: `${symbol} faces market headwinds amid sector rotation`, sentiment: 'negative' as const },
      { title: `${symbol} maintains steady growth trajectory`, sentiment: 'positive' as const },
      { title: `Institutional investors increase positions in ${symbol}`, sentiment: 'positive' as const },
      { title: `${symbol} announces new strategic partnership`, sentiment: 'positive' as const },
      { title: `Regulatory concerns weigh on ${symbol} sector`, sentiment: 'negative' as const },
      { title: `${symbol} stock trades flat in light volume`, sentiment: 'neutral' as const },
    ]

    const mockNews: NewsItem[] = []
    for (let i = 0; i < Math.min(headlines.length, daysBack * 2); i++) {
      const date = new Date()
      date.setDate(date.getDate() - i)

      mockNews.push({
        id: `mock-news-${symbol}-${i}`,
        symbol,
        headline: headlines[i].title,
        summary: `Analysis of recent market developments for ${symbol}`,
        source: 'Mock News',
        url: '',
        publishedAt: date.toISOString(),
        sentiment: headlines[i].sentiment,
        sentimentScore: headlines[i].sentiment === 'positive' ? 0.6 : headlines[i].sentiment === 'negative' ? -0.5 : 0,
        relevanceScore: 75 - i * 5,
      })
    }

    return mockNews
  }
}
