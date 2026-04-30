import React, { useEffect, useState } from 'react'
import { Settings, Shield, Zap, Eye, TrendingUp, Bell, ListPlus, Plus } from 'lucide-react'
import { useBroker, useMarketData, useSignals } from '@/hooks'
import { SignalsTable } from './SignalsTable'
import { WatchlistPanel } from './WatchlistPanel'
import { StrategyManager } from './StrategyManager'
import { WatchlistManager } from './WatchlistManager'
import { SignalConfiguration } from './SignalConfiguration'
import { RiskManagement } from './RiskManagement'
import { StrategyBuilder } from './StrategyBuilder'
import { OptionsChainViewer } from './OptionsChainViewer'
import { OrderBuilder } from './OrderBuilder'
import { formatPrice, formatPercent } from '@/utils/format'
import { useStrategyStore } from '@/store/strategyStore'
import { OrderRequest } from '@/types/broker.types'

export const Dashboard: React.FC = () => {
  const { connected, account, connect } = useBroker()
  const { quotes, loading: marketLoading } = useMarketData(['AAPL', 'GOOGL', 'MSFT', 'TSLA'])
  const { signals } = useSignals()
  const { activeStrategy, setActiveStrategy, saveStrategy } = useStrategyStore()

  const [showWatchlistManager, setShowWatchlistManager] = useState(false)
  const [showSignalConfig, setShowSignalConfig] = useState(false)
  const [showRiskManagement, setShowRiskManagement] = useState(false)
  const [showStrategyBuilder, setShowStrategyBuilder] = useState(false)
  const [showOptionsChain, setShowOptionsChain] = useState(false)
  const [showOrderBuilder, setShowOrderBuilder] = useState(false)

  const [watchlistSymbols, setWatchlistSymbols] = useState<string[]>(Array.from(quotes.keys()))

  useEffect(() => {
    if (!connected) {
      connect('mock')
    }
  }, [connected, connect])

  const totalSignals = signals.length
  const buySignals = signals.filter((s) => s.signal === 'BUY').length
  const sellSignals = signals.filter((s) => s.signal === 'SELL').length

  const handleOrderSubmit = (order: OrderRequest) => {
    console.log('Order submitted:', order)
    setShowOrderBuilder(false)
  }

  const handleSaveStrategy = (strategy: any) => {
    saveStrategy(strategy)
    setActiveStrategy(strategy)
  }

  const handleWatchlistChange = (symbols: string[]) => {
    setWatchlistSymbols(symbols)
  }

  const ToolbarButton = ({ icon: Icon, label, onClick, active }: { icon: any; label: string; onClick: () => void; active?: boolean }) => (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? 'bg-accent-primary/20 text-accent-primary border border-accent-primary/50'
          : 'bg-dark-surface/50 text-dark-border hover:text-white border border-dark-border hover:border-dark-border/80'
      }`}
    >
      <Icon className="w-4 h-4" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-bg to-dark-surface p-6">
      {/* Header */}
      <div className="mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-1">PWA Inversions</h1>
            <p className="text-dark-border">Phase 1 - Technical Analysis Engine</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <ToolbarButton icon={ListPlus} label="Watchlist" onClick={() => setShowWatchlistManager(true)} />
            <ToolbarButton icon={Settings} label="Signals" onClick={() => setShowSignalConfig(true)} />
            <ToolbarButton icon={Shield} label="Risk" onClick={() => setShowRiskManagement(true)} />
            <ToolbarButton icon={Zap} label="Strategy" onClick={() => setShowStrategyBuilder(true)} />
            <ToolbarButton icon={Eye} label="Options" onClick={() => setShowOptionsChain(true)} />
            <ToolbarButton icon={Plus} label="Order" onClick={() => setShowOrderBuilder(true)} active />
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-4 border border-dark-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-dark-border">Status</span>
            <div className={`w-3 h-3 rounded-full ${connected ? 'bg-green-400' : 'bg-gray-500'}`} />
          </div>
          <p className="text-lg font-semibold text-white mt-1">
            {connected ? 'Connected' : 'Disconnected'}
          </p>
        </div>

        <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-4 border border-dark-border">
          <span className="text-sm text-dark-border">Balance</span>
          <p className="text-lg font-semibold text-white mt-1">
            {account ? formatPrice(account.buyingPower) : '$0.00'}
          </p>
        </div>

        <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-4 border border-dark-border">
          <span className="text-sm text-dark-border">Signals</span>
          <p className="text-lg font-semibold text-white mt-1">{totalSignals}</p>
        </div>

        <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-4 border border-dark-border">
          <span className="text-sm text-dark-border">Distribution</span>
          <div className="flex gap-2 mt-1">
            <span className="text-green-400 font-medium">{buySignals} Buy</span>
            <span className="text-red-400 font-medium">{sellSignals} Sell</span>
          </div>
        </div>
      </div>

      {/* Strategy Info Bar */}
      <div className="mb-6 p-4 bg-dark-surface/30 border border-dark-border rounded-xl">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <span className="text-sm text-dark-border">Active Strategy:</span>
            <span className="ml-2 text-white font-semibold">{activeStrategy.name}</span>
            <span className="ml-2 text-xs text-dark-border">({activeStrategy.description})</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-dark-border">
            <span>Min Confidence: {formatPercent(activeStrategy.minConfidenceThreshold * 100)}</span>
            <span className="text-dark-border">|</span>
            <span>Timeframes: {activeStrategy.recommendedTimeframes.join(', ')}</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="lg:col-span-1">
          <WatchlistPanel symbols={watchlistSymbols} loading={marketLoading} />
        </div>

        <div className="lg:col-span-1">
          <StrategyManager />
        </div>

        <div className="lg:col-span-1">
          <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-6 border border-dark-border h-full">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-dark-border">Total Signals</span>
                <span className="text-white font-semibold">{totalSignals}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-border">Buy Signals</span>
                <span className="text-green-400 font-semibold">{buySignals}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-border">Sell Signals</span>
                <span className="text-red-400 font-semibold">{sellSignals}</span>
              </div>
              <div className="border-t border-dark-border pt-3 flex justify-between">
                <span className="text-dark-border">Win Ratio</span>
                <span className="text-white font-semibold">
                  {totalSignals > 0 ? formatPercent((buySignals / totalSignals) * 100) : '0%'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signals Table */}
      <SignalsTable signals={signals} />

      {/* Modals */}
      <WatchlistManager
        isOpen={showWatchlistManager}
        onClose={() => setShowWatchlistManager(false)}
        onChange={handleWatchlistChange}
      />
      <SignalConfiguration
        isOpen={showSignalConfig}
        onClose={() => setShowSignalConfig(false)}
        strategy={activeStrategy}
        onSave={handleSaveStrategy}
      />
      <RiskManagement
        isOpen={showRiskManagement}
        onClose={() => setShowRiskManagement(false)}
      />
      <StrategyBuilder
        isOpen={showStrategyBuilder}
        onClose={() => setShowStrategyBuilder(false)}
        activeStrategy={activeStrategy}
      />
      <OptionsChainViewer
        isOpen={showOptionsChain}
        onClose={() => setShowOptionsChain(false)}
        symbol="AAPL"
      />
      <OrderBuilder
        isOpen={showOrderBuilder}
        onClose={() => setShowOrderBuilder(false)}
        onSubmit={handleOrderSubmit}
        watchlistSymbols={watchlistSymbols}
      />
    </div>
  )
}
