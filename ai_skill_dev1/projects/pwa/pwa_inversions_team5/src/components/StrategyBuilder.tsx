import React, { useState, useEffect, useCallback } from 'react'
import { Plus, Save, Copy, Trash2, Zap, ChevronDown, ChevronUp } from 'lucide-react'
import { Modal } from './ui/Modal'
import { Strategy } from '@/types/strategy.types'
import { useStrategyStore } from '@/store/strategyStore'

const PRESET_STRATEGIES: Strategy[] = [
  {
    id: 'P01', name: 'RSI + MACD', description: 'Classic RSI oversold/overbought with MACD crossover',
    isPreset: true, enabledCores: { technicalIndicators: true, technicalStructure: false, institutionalFlow: false, newsEvents: false, fundamentals: false, aiAdvisor: false },
    indicators: {
      rsi: { active: true, period: 14, oversold: 30, overbought: 70, weight: 1.0 },
      macd: { active: true, fast: 12, slow: 26, signal: 9, weight: 1.0 },
      bollinger: { active: false, weight: 0 }, ema: { active: false, weight: 0 }, atr: { active: false, weight: 0 }, volume: { active: false, weight: 0 },
    },
    minConfidenceThreshold: 0.5, recommendedTimeframes: ['15m', '1h', '4h'], createdAt: new Date().toISOString(),
  },
  {
    id: 'P02', name: 'Bollinger Breakout', description: 'BB squeeze detection with volume confirmation',
    isPreset: true, enabledCores: { technicalIndicators: true, technicalStructure: false, institutionalFlow: false, newsEvents: false, fundamentals: false, aiAdvisor: false },
    indicators: {
      rsi: { active: false, weight: 0 }, macd: { active: false, weight: 0 },
      bollinger: { active: true, period: 20, stdDev: 2, weight: 1.0 },
      ema: { active: false, weight: 0 }, atr: { active: false, weight: 0 },
      volume: { active: true, weight: 0.8 },
    },
    minConfidenceThreshold: 0.6, recommendedTimeframes: ['15m', '1h'], createdAt: new Date().toISOString(),
  },
  {
    id: 'P03', name: 'EMA Trend Follow', description: 'Multi-timeframe EMA alignment strategy',
    isPreset: true, enabledCores: { technicalIndicators: true, technicalStructure: true, institutionalFlow: false, newsEvents: false, fundamentals: false, aiAdvisor: false },
    indicators: {
      rsi: { active: false, weight: 0 }, macd: { active: false, weight: 0 },
      bollinger: { active: false, weight: 0 }, ema: { active: true, weight: 1.0 },
      atr: { active: true, weight: 0.5 }, volume: { active: false, weight: 0 },
    },
    minConfidenceThreshold: 0.5, recommendedTimeframes: ['1h', '4h', '1D'], createdAt: new Date().toISOString(),
  },
  {
    id: 'P04', name: 'Full Confluence', description: 'All indicators + structure + AI confirmation',
    isPreset: true, enabledCores: { technicalIndicators: true, technicalStructure: true, institutionalFlow: false, newsEvents: false, fundamentals: false, aiAdvisor: true },
    indicators: {
      rsi: { active: true, period: 14, oversold: 30, overbought: 70, weight: 1.0 },
      macd: { active: true, fast: 12, slow: 26, signal: 9, weight: 1.0 },
      bollinger: { active: true, period: 20, stdDev: 2, weight: 1.0 },
      ema: { active: true, weight: 1.0 }, atr: { active: true, weight: 0.8 }, volume: { active: true, weight: 0.9 },
    },
    minConfidenceThreshold: 0.6, recommendedTimeframes: ['15m', '1h', '4h', '1D'], createdAt: new Date().toISOString(),
  },
  {
    id: 'P05', name: 'Institutional Flow', description: 'Options flow + institutional activity detection',
    isPreset: true, enabledCores: { technicalIndicators: true, technicalStructure: false, institutionalFlow: true, newsEvents: false, fundamentals: false, aiAdvisor: true },
    indicators: {
      rsi: { active: true, period: 14, oversold: 30, overbought: 70, weight: 0.5 },
      macd: { active: false, weight: 0 }, bollinger: { active: false, weight: 0 },
      ema: { active: true, weight: 0.8 }, atr: { active: false, weight: 0 }, volume: { active: true, weight: 1.0 },
    },
    minConfidenceThreshold: 0.65, recommendedTimeframes: ['15m', '1h', '4h'], createdAt: new Date().toISOString(),
  },
  {
    id: 'P06', name: 'News Driven', description: 'Sentiment analysis + earnings events + fundamentals',
    isPreset: true, enabledCores: { technicalIndicators: false, technicalStructure: false, institutionalFlow: false, newsEvents: true, fundamentals: true, aiAdvisor: true },
    indicators: {
      rsi: { active: false, weight: 0 }, macd: { active: false, weight: 0 },
      bollinger: { active: false, weight: 0 }, ema: { active: false, weight: 0 },
      atr: { active: false, weight: 0 }, volume: { active: false, weight: 0 },
    },
    minConfidenceThreshold: 0.7, recommendedTimeframes: ['1D'], createdAt: new Date().toISOString(),
  },
  {
    id: 'P07', name: 'Scalper', description: 'Fast RSI + MACD on short timeframes',
    isPreset: true, enabledCores: { technicalIndicators: true, technicalStructure: false, institutionalFlow: false, newsEvents: false, fundamentals: false, aiAdvisor: false },
    indicators: {
      rsi: { active: true, period: 7, oversold: 25, overbought: 75, weight: 1.0 },
      macd: { active: true, fast: 6, slow: 13, signal: 4, weight: 1.0 },
      bollinger: { active: false, weight: 0 }, ema: { active: false, weight: 0 }, atr: { active: false, weight: 0 }, volume: { active: false, weight: 0 },
    },
    minConfidenceThreshold: 0.4, recommendedTimeframes: ['1m', '5m'], createdAt: new Date().toISOString(),
  },
]

interface StrategyBuilderProps {
  isOpen: boolean
  onClose: () => void
  activeStrategy: Strategy
}

export const StrategyBuilder: React.FC<StrategyBuilderProps> = ({ isOpen, onClose, activeStrategy }) => {
  const { activeStrategy: storeStrategy, setActiveStrategy, saveStrategy } = useStrategyStore()
  const [selectedPreset, setSelectedPreset] = useState<string>(activeStrategy.id)
  const [customStrategies, setCustomStrategies] = useState<Strategy[]>([])
  const [editing, setEditing] = useState(false)
  const [draft, setDraft] = useState<Strategy>(activeStrategy)
  const [strategyName, setStrategyName] = useState('')
  const [expandedCores, setExpandedCores] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setSelectedPreset(activeStrategy.id)
      setDraft(activeStrategy)
      setStrategyName(activeStrategy.name)

      const stored = localStorage.getItem('pwa_inversions_custom_strategies')
      if (stored) {
        try { setCustomStrategies(JSON.parse(stored)) } catch { /* ignore */ }
      }
    }
  }, [isOpen, activeStrategy])

  const allStrategies = [...PRESET_STRATEGIES, ...customStrategies]
  const selected = allStrategies.find((s) => s.id === selectedPreset) || PRESET_STRATEGIES[3]

  const selectPreset = (strategy: Strategy) => {
    setSelectedPreset(strategy.id)
    setDraft({ ...strategy })
    setStrategyName(strategy.name)
    setEditing(false)
    setActiveStrategy(strategy)
  }

  const toggleCore = (core: keyof Strategy['enabledCores']) => {
    setDraft((prev) => ({
      ...prev,
      enabledCores: { ...prev.enabledCores, [core]: !prev.enabledCores[core] },
    }))
  }

  const saveCustom = () => {
    const custom: Strategy = {
      ...draft,
      id: `custom_${Date.now()}`,
      name: strategyName || 'Custom Strategy',
      isPreset: false,
      createdAt: new Date().toISOString(),
    }
    const updated = [...customStrategies, custom]
    setCustomStrategies(updated)
    localStorage.setItem('pwa_inversions_custom_strategies', JSON.stringify(updated))
    saveStrategy(custom)
    setActiveStrategy(custom)
    setSelectedPreset(custom.id)
    setEditing(false)
  }

  const deleteCustom = (id: string) => {
    const updated = customStrategies.filter((s) => s.id !== id)
    setCustomStrategies(updated)
    localStorage.setItem('pwa_inversions_custom_strategies', JSON.stringify(updated))
    if (selectedPreset === id) {
      setSelectedPreset(PRESET_STRATEGIES[3].id)
      setDraft(PRESET_STRATEGIES[3])
    }
  }

  const coreCount = Object.values(draft.enabledCores).filter(Boolean).length
  const indicatorCount = Object.values(draft.indicators).filter((i) => i.active).length
  const confluenceScore = Math.round(((coreCount + indicatorCount) / 12) * 100)

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Strategy Builder" size="xl">
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-sm font-semibold text-dark-border uppercase tracking-wider mb-3">Presets</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
              {PRESET_STRATEGIES.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => selectPreset(preset)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selectedPreset === preset.id
                      ? 'border-accent-primary bg-accent-primary/10'
                      : 'border-dark-border hover:bg-dark-bg/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Zap className={`w-4 h-4 ${selectedPreset === preset.id ? 'text-accent-primary' : 'text-dark-border'}`} />
                    <span className="font-medium text-white text-sm">{preset.name}</span>
                  </div>
                  <p className="text-xs text-dark-border mt-1 ml-6">{preset.description}</p>
                </button>
              ))}
              {customStrategies.map((custom) => (
                <div key={custom.id} className={`p-3 rounded-lg border ${selectedPreset === custom.id ? 'border-accent-primary bg-accent-primary/10' : 'border-dark-border'}`}>
                  <div className="flex items-center justify-between">
                    <button onClick={() => selectPreset(custom)} className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-400" />
                      <span className="font-medium text-white text-sm">{custom.name}</span>
                    </button>
                    <button onClick={() => deleteCustom(custom.id)} className="p-1 hover:bg-red-600/20 rounded text-dark-border hover:text-red-400">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                  <p className="text-xs text-dark-border mt-1 ml-6">{custom.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark-border uppercase tracking-wider mb-3">Current Strategy</h3>
            <div className="p-4 bg-dark-bg/50 rounded-lg border border-dark-border space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={strategyName}
                  onChange={(e) => setStrategyName(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-dark-surface border border-dark-border rounded text-white focus:outline-none focus:border-accent-primary"
                />
                <button
                  onClick={() => setEditing(!editing)}
                  className="px-3 py-1.5 text-sm text-dark-border hover:text-white border border-dark-border rounded hover:bg-dark-bg/50"
                >
                  {editing ? 'Cancel' : 'Edit'}
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-2 bg-dark-surface rounded">
                  <p className="text-lg font-bold text-white">{coreCount}</p>
                  <p className="text-xs text-dark-border">Cores</p>
                </div>
                <div className="p-2 bg-dark-surface rounded">
                  <p className="text-lg font-bold text-white">{indicatorCount}</p>
                  <p className="text-xs text-dark-border">Indicators</p>
                </div>
                <div className="p-2 bg-dark-surface rounded">
                  <p className={`text-lg font-bold ${confluenceScore >= 60 ? 'text-green-400' : confluenceScore >= 40 ? 'text-yellow-400' : 'text-dark-border'}`}>
                    {confluenceScore}%
                  </p>
                  <p className="text-xs text-dark-border">Confluence</p>
                </div>
              </div>

              <button
                onClick={() => setExpandedCores(!expandedCores)}
                className="w-full flex items-center justify-between p-2 bg-dark-surface rounded text-sm text-dark-border hover:text-white"
              >
                <span>Cores ({coreCount}/6)</span>
                {expandedCores ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>

              {expandedCores && (
                <div className="grid grid-cols-2 gap-1.5">
                  {Object.entries(draft.enabledCores).map(([key, enabled]) => (
                    <label key={key} className="flex items-center gap-2 text-xs text-dark-border">
                      {editing ? (
                        <input
                          type="checkbox"
                          checked={enabled}
                          onChange={() => toggleCore(key as keyof Strategy['enabledCores'])}
                          className="w-3 h-3 rounded border-dark-border text-accent-primary bg-dark-surface"
                        />
                      ) : (
                        <div className={`w-2 h-2 rounded-full ${enabled ? 'bg-green-400' : 'bg-dark-border'}`} />
                      )}
                      <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    </label>
                  ))}
                </div>
              )}

              {editing && (
                <button onClick={saveCustom} className="w-full py-2 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:opacity-90 flex items-center justify-center gap-2">
                  <Save className="w-4 h-4" />
                  Save as Custom Strategy
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="text-xs text-dark-border text-center">
          Select a preset to load it, or click Edit to customize and save as your own strategy
        </div>
      </div>
    </Modal>
  )
}
