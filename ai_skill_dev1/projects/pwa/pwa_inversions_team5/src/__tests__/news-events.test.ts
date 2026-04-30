import { NewsService } from '../services/news/news.service'
import { NewsEventsCore } from '../services/news/news-events.core'
import { EarningsEvent } from '../types/news.types'

describe('NewsService', () => {
  describe('analyzeSentiment', () => {
    it('should detect positive sentiment', () => {
      const text = 'Company reports record profits and surge in revenue growth'
      const sentiment = NewsService.analyzeSentiment(text)
      expect(sentiment).toBe('positive')
    })

    it('should detect negative sentiment', () => {
      const text = 'Company faces losses and crash in stock price amid investigation'
      const sentiment = NewsService.analyzeSentiment(text)
      expect(sentiment).toBe('negative')
    })

    it('should return neutral for mixed sentiment', () => {
      const text = 'Company trades flat in regular session'
      const sentiment = NewsService.analyzeSentiment(text)
      expect(sentiment).toBe('neutral')
    })
  })

  describe('getSentimentScore', () => {
    it('should return positive score for bullish text', () => {
      const text = 'Strong earnings beat with positive outlook and growth opportunity'
      const score = NewsService.getSentimentScore(text)
      expect(score).toBeGreaterThan(0)
    })

    it('should return negative score for bearish text', () => {
      const text = 'Bearish downgrade with decline and risk warning'
      const score = NewsService.getSentimentScore(text)
      expect(score).toBeLessThan(0)
    })

    it('should return score between -1 and 1', () => {
      const score = NewsService.getSentimentScore('Some neutral text about stock')
      expect(score).toBeGreaterThanOrEqual(-1)
      expect(score).toBeLessThanOrEqual(1)
    })
  })

  describe('aggregateSentiment', () => {
    it('should aggregate positive news', () => {
      const newsItems = [
        { id: '1', symbol: 'AAPL', headline: 'Strong earnings', summary: '', source: 'Test', url: '', publishedAt: new Date().toISOString(), sentiment: 'positive' as const, sentimentScore: 0.7, relevanceScore: 80 },
        { id: '2', symbol: 'AAPL', headline: 'Growth continues', summary: '', source: 'Test', url: '', publishedAt: new Date().toISOString(), sentiment: 'positive' as const, sentimentScore: 0.6, relevanceScore: 70 },
      ]
      const result = NewsService.aggregateSentiment(newsItems)
      expect(result.overallSentiment).toBe('bullish')
      expect(result.positiveCount).toBe(2)
    })

    it('should return neutral for empty news', () => {
      const result = NewsService.aggregateSentiment([])
      expect(result.overallSentiment).toBe('neutral')
      expect(result.score).toBe(0)
    })
  })

  describe('detectEarningsEvent', () => {
    it('should detect upcoming earnings', () => {
      const upcomingDate = new Date()
      upcomingDate.setDate(upcomingDate.getDate() + 3)
      const calendar: EarningsEvent[] = [
        { symbol: 'AAPL', date: upcomingDate.toISOString().split('T')[0], estimated: 1.5, actual: null, surprise: null, guidanceRaised: false },
      ]
      const event = NewsService.detectEarningsEvent('AAPL', calendar)
      expect(event).not.toBeNull()
      expect(event?.symbol).toBe('AAPL')
    })

    it('should return null for no upcoming earnings', () => {
      const pastDate = new Date()
      pastDate.setDate(pastDate.getDate() - 30)
      const calendar: EarningsEvent[] = [
        { symbol: 'AAPL', date: pastDate.toISOString().split('T')[0], estimated: 1.5, actual: 1.6, surprise: 0.1, guidanceRaised: false },
      ]
      const event = NewsService.detectEarningsEvent('AAPL', calendar)
      expect(event).toBeNull()
    })
  })

  describe('calculateEventRisk', () => {
    it('should calculate high risk for imminent earnings', () => {
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      const event: EarningsEvent = { symbol: 'AAPL', date: tomorrow.toISOString().split('T')[0], estimated: 1.5, actual: null, surprise: null, guidanceRaised: false }
      const risk = NewsService.calculateEventRisk(event)
      expect(risk.riskLevel).toBe('high')
      expect(risk.type).toBe('earnings')
    })
  })

  describe('fetchNews (mock)', () => {
    it('should return mock news when no API key', () => {
      const result = NewsService.fetchNews('AAPL', 3)
      result.then((news) => {
        expect(Array.isArray(news)).toBe(true)
        expect(news.length).toBeGreaterThan(0)
        expect(news[0].symbol).toBe('AAPL')
      })
    })
  })
})

describe('NewsEventsCore', () => {
  it('should return HOLD for empty symbol', async () => {
    const result = await NewsEventsCore.analyze('')
    expect(result.side).toBe('HOLD')
    expect(result.confidence).toBe(0)
  })

  it('should analyze with mock data', async () => {
    const result = await NewsEventsCore.analyze('AAPL')
    expect(result.symbol).toBe('AAPL')
    expect(['BUY', 'SELL', 'HOLD']).toContain(result.side)
    expect(Array.isArray(result.newsItems)).toBe(true)
    expect(result.sentiment).toBeDefined()
  })

  it('should include timestamp', async () => {
    const result = await NewsEventsCore.analyze('MSFT')
    expect(result.timestamp).toBeDefined()
  })
})
