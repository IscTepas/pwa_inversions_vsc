import { CoreSignalResult, SignalTableRow } from '@types/signal.types'
import { IndicatorsCoreResult } from '@types/indicators.types'

/**
 * Confluence Engine
 * Combines multiple analysis cores into a single BUY/SELL/HOLD signal
 */
export class ConfluenceEngine {
  static combineSignals(
    symbol: string,
    timeframe: string,
    indicatorResult: IndicatorsCoreResult,
    enabledCores: Record<string, boolean>,
    strategyId: string,
    strategyName: string,
    currentPrice: number,
  ): SignalTableRow {
    // Map core results to standard format
    const coreResults: CoreSignalResult[] = []

    if (enabledCores.technicalIndicators && indicatorResult) {
      coreResults.push({
        coreId: 'technical_indicators',
        symbol,
        timeframe,
        side: indicatorResult.side,
        confidence: indicatorResult.confidence,
        score: indicatorResult.score,
        reasons: indicatorResult.reasons,
        risks: indicatorResult.risks,
        timestamp: indicatorResult.timestamp,
      })
    }

    // Calculate final signal
    const buyVotes = coreResults.filter((r) => r.side === 'BUY').length
    const sellVotes = coreResults.filter((r) => r.side === 'SELL').length
    const holdVotes = coreResults.filter((r) => r.side === 'HOLD').length

    let finalSignal: 'BUY' | 'SELL' | 'HOLD' = 'HOLD'
    if (buyVotes >= 2 && buyVotes > sellVotes) {
      finalSignal = 'BUY'
    } else if (sellVotes >= 2 && sellVotes > buyVotes) {
      finalSignal = 'SELL'
    } else if (buyVotes > sellVotes) {
      finalSignal = 'BUY'
    } else if (sellVotes > buyVotes) {
      finalSignal = 'SELL'
    }

    // Calculate confidence
    const totalCores = coreResults.length
    const strongestVotes = Math.max(buyVotes, sellVotes, holdVotes)
    const confidence = totalCores > 0 ? (strongestVotes / totalCores) * 100 : 50

    // Calculate score
    const avgScore = coreResults.reduce((sum, c) => sum + c.score, 0) / (totalCores || 1)

    // Suggested parameters
    const entry = currentPrice
    const stopLoss = currentPrice * 0.985 // -1.5%
    const takeProfit = currentPrice * 1.03 // +3%
    const positionSize = 5 // Default 5 shares, will be recalculated by risk manager
    const riskReward = (takeProfit - entry) / (entry - stopLoss)

    return {
      id: `signal_${Date.now()}`,
      symbol,
      timestamp: new Date().toISOString(),
      timeframe,
      strategyId,
      strategyName,
      signal: finalSignal,
      confidence: Math.round(confidence),
      score: Math.round(avgScore * 100) / 100,
      priceAtSignal: currentPrice,
      selectedCores: coreResults.map((c) => c.coreId),
      coreResults,
      suggested: {
        entry: Math.round(entry * 100) / 100,
        stopLoss: Math.round(stopLoss * 100) / 100,
        takeProfit: Math.round(takeProfit * 100) / 100,
        positionSize,
        riskReward: Math.round(riskReward * 100) / 100,
      },
      aiConfirmation: {
        confirmed: false,
        confidenceAdjustment: 0,
        reasoning: '',
        riskNotes: '',
      },
      status: 'active',
      expiresAt: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(), // 2 hours
    }
  }
}
