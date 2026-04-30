import React, { useState, useEffect } from 'react'
import { Save, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react'
import { Modal } from './ui/Modal'
import { Strategy, IndicatorConfig } from '@/types/strategy.types'
import { useStrategyStore } from '@/store/strategyStore'

interface SignalConfigProps {
  isOpen: boolean
  onClose: () => void
  strategy: Strategy
  onSave: (strategy: Strategy) => void
}

const CORE_LABELS: Record<string, string> = {
  technicalIndicators: 'Technical Indicators',
  technicalStructure: 'Technical Structure',
  institutionalFlow: 'Institutional Flow',
  newsEvents: 'News & Events',
  fundamentals: 'Fundamentals',
  aiAdvisor: 'AI Advisor',
}

export const SignalConfiguration: React.FC<SignalConfigProps> = ({ isOpen, onClose, strategy, onSave }) => {
  const [config, setConfig] = useState<Strategy>(strategy)
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    cores: true,
    rsi: true,
    macd: true,
    bollinger: false,
    ema: false,
    atr: false,
    volume: false,
    thresholds: true,
  })

  useEffect(() => {
    if (isOpen) {
      setConfig(strategy)
    }
  }, [isOpen, strategy])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  const toggleCore = (core: keyof Strategy['enabledCores']) => {
    setConfig((prev) => ({
      ...prev,
      enabledCores: { ...prev.enabledCores, [core]: !prev.enabledCores[core] },
    }))
  }

  const updateIndicator = (indicator: keyof Strategy['indicators'], field: keyof IndicatorConfig, value: number | boolean) => {
    setConfig((prev) => ({
      ...prev,
      indicators: {
        ...prev.indicators,
        [indicator]: { ...prev.indicators[indicator], [field]: value },
      },
    }))
  }

  const toggleIndicator = (indicator: keyof Strategy['indicators']) => {
    setConfig((prev) => ({
      ...prev,
      indicators: {
        ...prev.indicators,
        [indicator]: { ...prev.indicators[indicator], active: !prev.indicators[indicator].active },
      },
    }))
  }

  const handleSave = () => {
    onSave(config)
    onClose()
  }

  const handleReset = () => {
    setConfig(strategy)
  }

  const activeCoresCount = Object.values(config.enabledCores).filter(Boolean).length
  const activeIndicatorsCount = Object.values(config.indicators).filter((i) => i.active).length

  const Section = ({ id, title, children }: { id: string; title: string; children: React.ReactNode }) => (
    <div className="border border-dark-border rounded-lg overflow-hidden">
      <button
        onClick={() => toggleSection(id)}
        className="w-full flex items-center justify-between p-4 bg-dark-bg/50 hover:bg-dark-bg/80 transition-colors"
      >
        <span className="font-semibold text-white">{title}</span>
        {expandedSections[id] ? <ChevronUp className="w-4 h-4 text-dark-border" /> : <ChevronDown className="w-4 h-4 text-dark-border" />}
      </button>
      {expandedSections[id] && <div className="p-4 space-y-3">{children}</div>}
    </div>
  )

  const IndicatorRow = ({
    label,
    indicator,
    fields,
  }: {
    label: string
    indicator: keyof Strategy['indicators']
    fields: { key: keyof IndicatorConfig; label: string }[]
  }) => {
    const ind = config.indicators[indicator]
    return (
      <div className="flex items-center gap-4">
        <button
          onClick={() => toggleIndicator(indicator)}
          className={`w-16 text-sm font-medium ${ind.active ? 'text-green-400' : 'text-dark-border'}`}
        >
          {ind.active ? 'ON' : 'OFF'}
        </button>
        <span className="text-white font-medium w-24">{label}</span>
        <div className="flex gap-3 flex-wrap">
          {fields.map((f) => (
            <label key={f.key} className="flex items-center gap-1.5 text-sm">
              <span className="text-dark-border">{f.label}</span>
              <input
                type="number"
                value={ind[f.key] as number}
                onChange={(e) => updateIndicator(indicator, f.key, parseFloat(e.target.value) || 0)}
                className="w-16 px-2 py-1 bg-dark-surface border border-dark-border rounded text-white text-center focus:outline-none focus:border-accent-primary"
                disabled={!ind.active}
              />
            </label>
          ))}
        </div>
      </div>
    )
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Signal Configuration" size="xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between text-sm text-dark-border pb-2 border-b border-dark-border">
          <span>{config.name}</span>
          <div className="flex gap-4">
            <span>{activeCoresCount}/6 cores active</span>
            <span>{activeIndicatorsCount}/6 indicators active</span>
          </div>
        </div>

        <Section id="cores" title="Cores">
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(CORE_LABELS).map(([key, label]) => (
              <label key={key} className="flex items-center gap-3 p-3 rounded-lg bg-dark-bg/50 cursor-pointer hover:bg-dark-bg/80">
                <input
                  type="checkbox"
                  checked={config.enabledCores[key as keyof Strategy['enabledCores']]}
                  onChange={() => toggleCore(key as keyof Strategy['enabledCores'])}
                  className="w-4 h-4 rounded border-dark-border text-accent-primary focus:ring-accent-primary bg-dark-surface"
                />
                <span className="text-white text-sm">{label}</span>
              </label>
            ))}
          </div>
        </Section>

        <Section id="rsi" title="RSI (Relative Strength Index)">
          <IndicatorRow label="RSI" indicator="rsi" fields={[
            { key: 'period', label: 'Period' },
            { key: 'oversold', label: 'Oversold' },
            { key: 'overbought', label: 'Overbought' },
            { key: 'weight', label: 'Weight' },
          ]} />
        </Section>

        <Section id="macd" title="MACD">
          <IndicatorRow label="MACD" indicator="macd" fields={[
            { key: 'fast', label: 'Fast' },
            { key: 'slow', label: 'Slow' },
            { key: 'signal', label: 'Signal' },
            { key: 'weight', label: 'Weight' },
          ]} />
        </Section>

        <Section id="bollinger" title="Bollinger Bands">
          <IndicatorRow label="BB" indicator="bollinger" fields={[
            { key: 'period', label: 'Period' },
            { key: 'stdDev', label: 'Std Dev' },
            { key: 'weight', label: 'Weight' },
          ]} />
        </Section>

        <Section id="ema" title="EMA Trend">
          <IndicatorRow label="EMA" indicator="ema" fields={[
            { key: 'weight', label: 'Weight' },
          ]} />
        </Section>

        <Section id="atr" title="ATR (Volatility)">
          <IndicatorRow label="ATR" indicator="atr" fields={[
            { key: 'weight', label: 'Weight' },
          ]} />
        </Section>

        <Section id="volume" title="Volume Analysis">
          <IndicatorRow label="Volume" indicator="volume" fields={[
            { key: 'weight', label: 'Weight' },
          ]} />
        </Section>

        <Section id="thresholds" title="Thresholds">
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2 text-sm">
              <span className="text-dark-border">Min Confidence</span>
              <input
                type="number"
                step="0.1"
                min="0"
                max="1"
                value={config.minConfidenceThreshold}
                onChange={(e) => setConfig((prev) => ({ ...prev, minConfidenceThreshold: parseFloat(e.target.value) || 0.5 }))}
                className="w-20 px-2 py-1 bg-dark-surface border border-dark-border rounded text-white text-center focus:outline-none focus:border-accent-primary"
              />
            </label>
            <span className="text-dark-border text-xs">({(config.minConfidenceThreshold * 100).toFixed(0)}%)</span>
          </div>
        </Section>

        <div className="flex justify-end gap-3 pt-4 border-t border-dark-border">
          <button onClick={handleReset} className="px-4 py-2 text-dark-border hover:text-white flex items-center gap-2 transition-colors">
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
          <button onClick={handleSave} className="px-6 py-2 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Configuration
          </button>
        </div>
      </div>
    </Modal>
  )
}
