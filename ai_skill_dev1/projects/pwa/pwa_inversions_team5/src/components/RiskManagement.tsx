import React, { useState, useEffect } from 'react'
import { Save, RotateCcw, AlertTriangle, Shield } from 'lucide-react'
import { Modal } from './ui/Modal'
import { useSettingsStore } from '@/store/settingsStore'

interface RiskManagementProps {
  isOpen: boolean
  onClose: () => void
}

export const RiskManagement: React.FC<RiskManagementProps> = ({ isOpen, onClose }) => {
  const { settings, updateSetting, resetToDefaults } = useSettingsStore()
  const [form, setForm] = useState({
    maxPositions: settings.maxPositions,
    maxDailyLoss: settings.maxDailyLoss,
    riskPercentage: settings.riskPercentage,
    defaultStopLoss: 3,
    defaultTakeProfit: 6,
    maxConcurrentOptions: 5,
    minOptionIV: 20,
    maxOptionIV: 80,
    minOptionDTE: 14,
    maxOptionDTE: 90,
  })

  useEffect(() => {
    if (isOpen) {
      setForm({
        maxPositions: settings.maxPositions,
        maxDailyLoss: settings.maxDailyLoss,
        riskPercentage: settings.riskPercentage,
        defaultStopLoss: 3,
        defaultTakeProfit: 6,
        maxConcurrentOptions: 5,
        minOptionIV: 20,
        maxOptionIV: 80,
        minOptionDTE: 14,
        maxOptionDTE: 90,
      })
    }
  }, [isOpen, settings])

  const handleSave = () => {
    updateSetting('maxPositions', form.maxPositions)
    updateSetting('maxDailyLoss', form.maxDailyLoss)
    updateSetting('riskPercentage', form.riskPercentage)
    onClose()
  }

  const handleReset = () => {
    resetToDefaults()
    setForm({
      maxPositions: 10,
      maxDailyLoss: 500,
      riskPercentage: 2,
      defaultStopLoss: 3,
      defaultTakeProfit: 6,
      maxConcurrentOptions: 5,
      minOptionIV: 20,
      maxOptionIV: 80,
      minOptionDTE: 14,
      maxOptionDTE: 90,
    })
  }

  const Field = ({ label, value, onChange, unit, min, max, step, helpText }: {
    label: string
    value: number
    onChange: (val: number) => void
    unit?: string
    min?: number
    max?: number
    step?: number
    helpText?: string
  }) => (
    <div className="space-y-1">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-white">{label}</label>
        <div className="flex items-center gap-1.5">
          <input
            type="number"
            value={value}
            onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
            min={min}
            max={max}
            step={step || 1}
            className="w-24 px-2 py-1.5 bg-dark-surface border border-dark-border rounded-lg text-white text-center focus:outline-none focus:border-accent-primary text-sm"
          />
          {unit && <span className="text-dark-border text-sm w-8">{unit}</span>}
        </div>
      </div>
      {helpText && <p className="text-xs text-dark-border">{helpText}</p>}
    </div>
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Risk Management" size="lg">
      <div className="space-y-6">
        <div className="flex items-center gap-2 text-yellow-400">
          <Shield className="w-5 h-5" />
          <p className="text-sm">Configure your risk parameters to protect your portfolio</p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-semibold text-dark-border uppercase tracking-wider mb-3">Position Sizing</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Max Positions"
                value={form.maxPositions}
                onChange={(v) => setForm((f) => ({ ...f, maxPositions: v }))}
                min={1}
                max={50}
                helpText="Maximum concurrent positions"
              />
              <Field
                label="Risk Per Trade"
                value={form.riskPercentage}
                onChange={(v) => setForm((f) => ({ ...f, riskPercentage: v }))}
                unit="%"
                min={0.5}
                max={10}
                step={0.5}
                helpText="Max % of portfolio per trade"
              />
              <Field
                label="Max Daily Loss"
                value={form.maxDailyLoss}
                onChange={(v) => setForm((f) => ({ ...f, maxDailyLoss: v }))}
                unit="$"
                min={100}
                max={10000}
                step={50}
                helpText="Stop trading if loss exceeds this"
              />
              <Field
                label="Max Concurrent Options"
                value={form.maxConcurrentOptions}
                onChange={(v) => setForm((f) => ({ ...f, maxConcurrentOptions: v }))}
                min={1}
                max={20}
                helpText="Max open options positions"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark-border uppercase tracking-wider mb-3">Stop Loss / Take Profit</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Default Stop Loss"
                value={form.defaultStopLoss}
                onChange={(v) => setForm((f) => ({ ...f, defaultStopLoss: v }))}
                unit="%"
                min={1}
                max={20}
                step={0.5}
                helpText="Auto SL for suggested entries"
              />
              <Field
                label="Default Take Profit"
                value={form.defaultTakeProfit}
                onChange={(v) => setForm((f) => ({ ...f, defaultTakeProfit: v }))}
                unit="%"
                min={1}
                max={50}
                step={0.5}
                helpText="Auto TP for suggested entries"
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-dark-border uppercase tracking-wider mb-3">Options Parameters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field
                label="Min Implied Volatility"
                value={form.minOptionIV}
                onChange={(v) => setForm((f) => ({ ...f, minOptionIV: v }))}
                unit="%"
                min={5}
                max={100}
                helpText="Filter out low IV options"
              />
              <Field
                label="Max Implied Volatility"
                value={form.maxOptionIV}
                onChange={(v) => setForm((f) => ({ ...f, maxOptionIV: v }))}
                unit="%"
                min={10}
                max={200}
                helpText="Avoid overpriced premiums"
              />
              <Field
                label="Min DTE"
                value={form.minOptionDTE}
                onChange={(v) => setForm((f) => ({ ...f, minOptionDTE: v }))}
                unit="days"
                min={1}
                max={60}
                helpText="Minimum days to expiration"
              />
              <Field
                label="Max DTE"
                value={form.maxOptionDTE}
                onChange={(v) => setForm((f) => ({ ...f, maxOptionDTE: v }))}
                unit="days"
                min={7}
                max={365}
                helpText="Maximum days to expiration"
              />
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
          <AlertTriangle className="w-5 h-5 text-yellow-400 shrink-0 mt-0.5" />
          <p className="text-xs text-yellow-400/80">
            These settings are saved to localStorage and will persist across sessions. Make sure to test with paper trading first.
          </p>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-dark-border">
          <button onClick={handleReset} className="px-4 py-2 text-dark-border hover:text-white flex items-center gap-2 transition-colors">
            <RotateCcw className="w-4 h-4" />
            Reset Defaults
          </button>
          <button onClick={handleSave} className="px-6 py-2 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2">
            <Save className="w-4 h-4" />
            Save Risk Settings
          </button>
        </div>
      </div>
    </Modal>
  )
}
