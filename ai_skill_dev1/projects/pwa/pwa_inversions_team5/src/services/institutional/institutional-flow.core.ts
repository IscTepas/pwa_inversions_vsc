import { OptionChain } from '../../types/broker.types'
import { InstitutionalFlowCoreResult } from '../../types/institutional.types'
import { InstitutionalService } from './institutional.service'

interface Level2Data {
  symbol: string
  bids: Array<{ price: number; size: number }>
  asks: Array<{ price: number; size: number }>
  trades: Array<{ symbol: string; side: string; size: number; price: number; timestamp: string }>
}

export class InstitutionalFlowCore {
  static analyze(
    optionChain: OptionChain[],
    level2Data?: Level2Data,
    previousOptionChain?: OptionChain[]
  ): InstitutionalFlowCoreResult {
    if (optionChain.length === 0) {
      return {
        symbol: '',
        timeframe: '1D',
        side: 'HOLD',
        confidence: 0,
        score: 0,
        institutionalEvents: [],
        putCallRatio: { value: 1, interpretation: 'neutral', timestamp: new Date().toISOString() },
        reasons: ['No option chain data available'],
        timestamp: new Date().toISOString(),
      }
    }

    const symbol = optionChain[0]?.symbol || ''
    const unusualActivity = InstitutionalService.detectUnusualOptionActivity(optionChain)
    const putCallRatio = InstitutionalService.calculatePutCallRatio(optionChain)

    const oiSwings = previousOptionChain
      ? InstitutionalService.analyzeOpenInterestSwings(optionChain, previousOptionChain)
      : []

    const blockOrders = level2Data
      ? InstitutionalService.detectBlockOrders(level2Data.trades)
      : []

    const events = [
      ...unusualActivity.map((a) => ({ ...a })),
      ...oiSwings.map((s) => ({ ...s })),
      ...blockOrders.map((b) => ({ ...b })),
    ]

    let buySignals = 0
    let sellSignals = 0
    const reasons: string[] = []
    const risks: string[] = []

    if (putCallRatio.interpretation === 'bullish') {
      buySignals++
      reasons.push(`Put/Call ratio ${putCallRatio.value} — bullish sentiment (< 0.7)`)
    } else if (putCallRatio.interpretation === 'bearish') {
      sellSignals++
      reasons.push(`Put/Call ratio ${putCallRatio.value} — bearish sentiment (> 1.3)`)
    }

    const callSweeps = unusualActivity.filter((a) => a.type === 'sweep' && a.optionType === 'call')
    const putSweeps = unusualActivity.filter((a) => a.type === 'sweep' && a.optionType === 'put')

    if (callSweeps.length > 0) {
      buySignals += Math.min(callSweeps.length, 3)
      reasons.push(`${callSweeps.length} call sweep(s) detected — institutional bullish positioning`)
    }

    if (putSweeps.length > 0) {
      sellSignals += Math.min(putSweeps.length, 3)
      reasons.push(`${putSweeps.length} put sweep(s) detected — institutional bearish positioning`)
    }

    const bullishSwings = oiSwings.filter((s) => s.direction === 'bullish')
    const bearishSwings = oiSwings.filter((s) => s.direction === 'bearish')

    if (bullishSwings.length > bearishSwings.length && bullishSwings.length > 0) {
      buySignals++
      reasons.push(`Open interest swings favor bullish positioning (${bullishSwings.length} vs ${bearishSwings.length})`)
    } else if (bearishSwings.length > bullishSwings.length && bearishSwings.length > 0) {
      sellSignals++
      reasons.push(`Open interest swings favor bearish positioning (${bearishSwings.length} vs ${bullishSwings.length})`)
    }

    if (blockOrders.length > 0) {
      const buyBlocks = blockOrders.filter((b) => b.side === 'buy')
      const sellBlocks = blockOrders.filter((b) => b.side === 'sell')

      if (buyBlocks.length > sellBlocks.length) {
        buySignals++
        reasons.push(`${buyBlocks.length} large block buy order(s) detected`)
      } else if (sellBlocks.length > buyBlocks.length) {
        sellSignals++
        reasons.push(`${sellBlocks.length} large block sell order(s) detected`)
      }
    }

    const totalPremium = unusualActivity.reduce((sum, a) => sum + a.premium, 0)
    if (totalPremium > 1000000) {
      reasons.push(`High premium activity: $${Math.round(totalPremium / 1000)}K in unusual options`)
    }

    if (unusualActivity.length === 0 && oiSwings.length === 0 && blockOrders.length === 0) {
      risks.push('No significant institutional activity detected')
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
      timeframe: '1D',
      side,
      confidence,
      score,
      institutionalEvents: events.slice(0, 20),
      putCallRatio,
      reasons,
      risks,
      timestamp: new Date().toISOString(),
    }
  }
}
