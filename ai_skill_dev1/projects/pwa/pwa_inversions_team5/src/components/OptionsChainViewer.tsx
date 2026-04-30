import React, { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, DollarSign, Calendar } from 'lucide-react'
import { Modal } from './ui/Modal'

interface OptionStrike {
  strike: number
  bid: number
  ask: number
  last: number
  volume: number
  openInterest: number
  iv: number
  delta: number
  gamma: number
  theta: number
  vega: number
  bidSize: number
  askSize: number
}

interface OptionChainData {
  symbol: string
  expiration: string
  calls: OptionStrike[]
  puts: OptionStrike[]
}

interface OptionsChainViewerProps {
  isOpen: boolean
  onClose: () => void
  symbol: string
  chain?: OptionChainData
  onExecuteOrder?: (side: 'BUY' | 'SELL', type: 'CALL' | 'PUT', strike: number, expiration: string) => void
}

export const OptionsChainViewer: React.FC<OptionsChainViewerProps> = ({
  isOpen,
  onClose,
  symbol,
  chain,
  onExecuteOrder,
}) => {
  const [mockChain, setMockChain] = useState<OptionChainData | null>(null)
  const [selectedExpiration, setSelectedExpiration] = useState('')
  const [optionType, setOptionType] = useState<'calls' | 'puts'>('calls')
  const [data, setData] = useState<OptionChainData | null>(chain || null)

  useEffect(() => {
    if (isOpen) {
      const basePrice = symbol === 'AAPL' ? 175 : symbol === 'MSFT' ? 420 : 150
      const expirations = [
        new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        new Date(Date.now() + 60 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      ]

      const strikes = Array.from({ length: 11 }, (_, i) => Math.round((basePrice - 20 + i * 4) * 10) / 10)
      const calls = strikes.map((strike) => ({
        strike,
        bid: Math.max(0.01, Math.round((basePrice - strike + 2 + Math.random() * 3) * 100)) / 100,
        ask: Math.max(0.05, Math.round((basePrice - strike + 3 + Math.random() * 3) * 100)) / 100,
        last: 0,
        volume: Math.floor(Math.random() * 5000),
        openInterest: Math.floor(Math.random() * 10000) + 100,
        iv: Math.round((0.2 + Math.random() * 0.4) * 1000) / 1000,
        delta: Math.round(Math.random() * 100) / 100,
        gamma: Math.round(Math.random() * 5 * 100) / 100,
        theta: Math.round(-Math.random() * 10 * 100) / 100,
        vega: Math.round(Math.random() * 20 * 100) / 100,
        bidSize: Math.floor(Math.random() * 50) + 1,
        askSize: Math.floor(Math.random() * 50) + 1,
      }))
      const puts = strikes.map((strike) => ({
        strike,
        bid: Math.max(0.01, Math.round((strike - basePrice + 2 + Math.random() * 3) * 100)) / 100,
        ask: Math.max(0.05, Math.round((strike - basePrice + 3 + Math.random() * 3) * 100)) / 100,
        last: 0,
        volume: Math.floor(Math.random() * 5000),
        openInterest: Math.floor(Math.random() * 10000) + 100,
        iv: Math.round((0.2 + Math.random() * 0.4) * 1000) / 1000,
        delta: Math.round(-Math.random() * 100) / 100,
        gamma: Math.round(Math.random() * 5 * 100) / 100,
        theta: Math.round(-Math.random() * 10 * 100) / 100,
        vega: Math.round(Math.random() * 20 * 100) / 100,
        bidSize: Math.floor(Math.random() * 50) + 1,
        askSize: Math.floor(Math.random() * 50) + 1,
      }))

      setMockChain({
        symbol,
        expiration: expirations[2],
        calls,
        puts,
      })
      setSelectedExpiration(expirations[2])
    }
  }, [isOpen, symbol])

  useEffect(() => {
    setData(chain || mockChain)
  }, [chain, mockChain])

  const currentChain = data
  const strikes = currentChain?.[optionType] || []

  const suggestedStrategy = getSuggestedStrategy(strikes, symbol, optionType)

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`${symbol} Options Chain`} size="xl">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-dark-border" />
            <span className="text-sm text-dark-border">Expiration:</span>
            <select
              value={selectedExpiration}
              onChange={(e) => setSelectedExpiration(e.target.value)}
              className="px-3 py-1.5 bg-dark-surface border border-dark-border rounded text-white text-sm focus:outline-none focus:border-accent-primary"
            >
              {['2026-05-15', '2026-06-20', '2026-07-18', '2026-09-19', '2026-12-18'].map((exp) => (
                <option key={exp} value={exp}>{exp}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => setOptionType('calls')}
            className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 ${
              optionType === 'calls'
                ? 'bg-green-600/20 text-green-400 border border-green-600/50'
                : 'bg-dark-bg text-dark-border border border-dark-border'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            Calls
          </button>
          <button
            onClick={() => setOptionType('puts')}
            className={`px-4 py-2 rounded-lg font-medium text-sm flex items-center gap-2 ${
              optionType === 'puts'
                ? 'bg-red-600/20 text-red-400 border border-red-600/50'
                : 'bg-dark-bg text-dark-border border border-dark-border'
            }`}
          >
            <TrendingDown className="w-4 h-4" />
            Puts
          </button>
        </div>

        <div className="border border-dark-border rounded-lg overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-dark-bg/80">
                <th className="px-3 py-2 text-left text-xs font-semibold text-dark-border">Strike</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">Bid</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">Ask</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">Vol</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">OI</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">IV</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">Delta</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">Gamma</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">Theta</th>
                <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">Vega</th>
                {onExecuteOrder && <th className="px-3 py-2 text-right text-xs font-semibold text-dark-border">Action</th>}
              </tr>
            </thead>
            <tbody>
              {strikes.map((s, i) => {
                const isATM = Math.abs(s.delta) >= 0.45 && Math.abs(s.delta) <= 0.55
                return (
                  <tr key={i} className={`border-t border-dark-border hover:bg-dark-bg/30 ${isATM ? 'bg-accent-primary/5' : ''}`}>
                    <td className="px-3 py-2 font-mono text-white">{s.strike.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right text-green-400">{s.bid.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right text-red-400">{s.ask.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right text-dark-border">{s.volume.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right text-dark-border">{s.openInterest.toLocaleString()}</td>
                    <td className="px-3 py-2 text-right text-yellow-400">{(s.iv * 100).toFixed(1)}%</td>
                    <td className={`px-3 py-2 text-right ${s.delta > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {s.delta.toFixed(2)}
                    </td>
                    <td className="px-3 py-2 text-right text-dark-border">{s.gamma.toFixed(3)}</td>
                    <td className="px-3 py-2 text-right text-dark-border">{s.theta.toFixed(2)}</td>
                    <td className="px-3 py-2 text-right text-dark-border">{s.vega.toFixed(2)}</td>
                    {onExecuteOrder && (
                      <td className="px-3 py-2 text-right">
                        <button
                          onClick={() => onExecuteOrder('BUY', optionType === 'calls' ? 'CALL' : 'PUT', s.strike, selectedExpiration)}
                          className="px-2 py-1 text-xs bg-accent-primary/20 text-accent-primary rounded hover:bg-accent-primary/30"
                        >
                          Buy
                        </button>
                      </td>
                    )}
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {suggestedStrategy && (
          <div className="p-4 bg-dark-bg/50 border border-dark-border rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-4 h-4 text-accent-primary" />
              <h4 className="text-sm font-semibold text-white">Suggested Strategy</h4>
            </div>
            <p className="text-sm text-dark-border">{suggestedStrategy}</p>
          </div>
        )}
      </div>
    </Modal>
  )
}

function getSuggestedStrategy(strikes: OptionStrike[], symbol: string, type: 'calls' | 'puts'): string {
  const atmStrike = strikes.find((s) => Math.abs(s.delta) >= 0.45 && Math.abs(s.delta) <= 0.55)
  if (!atmStrike) return ''

  const avgIV = strikes.reduce((sum, s) => sum + s.iv, 0) / strikes.length

  if (avgIV > 0.5) {
    return `High IV environment (${(avgIV * 100).toFixed(1)}%). Consider selling ${type === 'calls' ? 'calls' : 'puts'} to collect premium. Bull Put Spread or Bear Call Spread recommended.`
  } else if (avgIV < 0.25) {
    return `Low IV environment (${(avgIV * 100).toFixed(1)}%). Consider buying ${type} for directional exposure. Long ${type === 'calls' ? 'Call' : 'Put'} or Debit Spread recommended.`
  }
  return `Neutral IV (${(avgIV * 100).toFixed(1)}%). ${type === 'calls' ? 'Bull Call' : 'Bear Put'} Spread at $${atmStrike.strike} strike offers good risk/reward.`
}
