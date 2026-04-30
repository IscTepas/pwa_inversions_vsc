import { OptionChain } from '../../types/broker.types'
import {
  UnusualOptionActivity,
  OpenInterestSwing,
  BlockOrder,
  PutCallRatio,
} from '../../types/institutional.types'

export class InstitutionalService {
  static detectUnusualOptionActivity(optionChain: OptionChain[], threshold: number = 3): UnusualOptionActivity[] {
    const unusual: UnusualOptionActivity[] = []

    for (const chain of optionChain) {
      const allStrikes = [...chain.calls, ...chain.puts]

      for (const strike of allStrikes) {
        const volumeOIRatio = strike.openInterest > 0 ? strike.volume / strike.openInterest : 0

        if (volumeOIRatio > threshold || strike.volume > 1000) {
          const optionType = chain.calls.includes(strike) ? 'call' : 'put'
          const isUnusual =
            volumeOIRatio > threshold ||
            strike.volume > 5000 ||
            strike.openInterest < strike.volume * 0.5

          if (isUnusual) {
            unusual.push({
              type: volumeOIRatio > 5 ? 'sweep' : 'large_trade',
              symbol: chain.symbol,
              strike: strike.strike,
              expiration: chain.expiration,
              optionType,
              volume: strike.volume,
              openInterest: strike.openInterest,
              volumeOIRatio: Math.round(volumeOIRatio * 100) / 100,
              premium: Math.round(strike.volume * ((strike.bid + strike.ask) / 2) * 100) / 100,
              timestamp: new Date().toISOString(),
            })
          }
        }
      }
    }

    unusual.sort((a, b) => b.volumeOIRatio - a.volumeOIRatio)
    return unusual.slice(0, 15)
  }

  static analyzeOpenInterestSwings(
    currentChain: OptionChain[],
    previousChain: OptionChain[]
  ): OpenInterestSwing[] {
    const swings: OpenInterestSwing[] = []

    for (const current of currentChain) {
      const previous = previousChain.find((p) => p.expiration === current.expiration)
      if (!previous) continue

      const allStrikes = [...current.calls, ...current.puts]

      for (const strike of allStrikes) {
        const optionType = current.calls.includes(strike) ? 'call' : 'put'
        const prevStrike = previous[optionType === 'call' ? 'calls' : 'puts'].find(
          (s) => s.strike === strike.strike
        )

        if (prevStrike) {
          const oiChange = strike.openInterest - prevStrike.openInterest
          const oiChangePercent = prevStrike.openInterest > 0
            ? (oiChange / prevStrike.openInterest) * 100
            : 0

          if (Math.abs(oiChangePercent) > 20 || Math.abs(oiChange) > 500) {
            swings.push({
              symbol: current.symbol,
              strike: strike.strike,
              expiration: current.expiration,
              optionType,
              oiChange,
              oiChangePercent: Math.round(oiChangePercent * 10) / 10,
              direction: optionType === 'call' && oiChange > 0 ? 'bullish' :
                         optionType === 'put' && oiChange > 0 ? 'bearish' :
                         optionType === 'call' && oiChange < 0 ? 'bearish' : 'bullish',
              timestamp: new Date().toISOString(),
            })
          }
        }
      }
    }

    swings.sort((a, b) => Math.abs(b.oiChangePercent) - Math.abs(a.oiChangePercent))
    return swings.slice(0, 10)
  }

  static calculatePutCallRatio(optionChain: OptionChain[]): PutCallRatio {
    let totalCallVolume = 0
    let totalPutVolume = 0
    let totalCallOI = 0
    let totalPutOI = 0

    for (const chain of optionChain) {
      for (const call of chain.calls) {
        totalCallVolume += call.volume
        totalCallOI += call.openInterest
      }
      for (const put of chain.puts) {
        totalPutVolume += put.volume
        totalPutOI += put.openInterest
      }
    }

    const volumeRatio = totalCallVolume > 0 ? totalPutVolume / totalCallVolume : 1
    const oiRatio = totalCallOI > 0 ? totalPutOI / totalCallOI : 1

    const avgRatio = (volumeRatio + oiRatio) / 2

    let interpretation: 'bullish' | 'bearish' | 'neutral' = 'neutral'
    if (avgRatio < 0.7) interpretation = 'bullish'
    else if (avgRatio > 1.3) interpretation = 'bearish'

    return {
      value: Math.round(avgRatio * 100) / 100,
      interpretation,
      timestamp: new Date().toISOString(),
    }
  }

  static detectBlockOrders(trades: Array<{ symbol: string; side: string; size: number; price: number; timestamp: string }>, minSize: number = 10000): BlockOrder[] {
    return trades
      .filter((trade) => trade.size >= minSize)
      .map((trade) => ({
        symbol: trade.symbol,
        side: trade.side as 'buy' | 'sell',
        size: trade.size,
        price: Math.round(trade.price * 100) / 100,
        timestamp: trade.timestamp,
      }))
      .sort((a, b) => b.size - a.size)
      .slice(0, 20)
  }
}
