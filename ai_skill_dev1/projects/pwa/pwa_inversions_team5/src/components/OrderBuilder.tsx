import React, { useState, useEffect } from 'react'
import { Send, AlertTriangle, DollarSign, TrendingUp, TrendingDown, Info } from 'lucide-react'
import { Modal } from './ui/Modal'
import { OrderRequest, Quote } from '@/types/broker.types'

interface OrderBuilderProps {
  isOpen: boolean
  onClose: () => void
  onSubmit: (order: OrderRequest) => void
  currentQuote?: Quote
  watchlistSymbols?: string[]
}

export const OrderBuilder: React.FC<OrderBuilderProps> = ({
  isOpen,
  onClose,
  onSubmit,
  currentQuote,
  watchlistSymbols = ['AAPL', 'MSFT', 'GOOGL', 'TSLA', 'NVDA', 'AMZN'],
}) => {
  const [form, setForm] = useState({
    action: 'BUY' as 'BUY' | 'SELL',
    symbol: '',
    quantity: 1,
    orderType: 'LIMIT' as 'MARKET' | 'LIMIT' | 'STOP' | 'STOP_LIMIT',
    limitPrice: '',
    stopPrice: '',
    timeInForce: 'DAY' as 'DAY' | 'GTC',
    stopLoss: '',
    takeProfit: '',
  })
  const [errors, setErrors] = useState<string[]>([])
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    if (isOpen) {
      if (currentQuote) {
        setForm((prev) => ({
          ...prev,
          symbol: currentQuote.symbol,
          limitPrice: currentQuote.last.toString(),
        }))
      } else {
        setForm((prev) => ({ ...prev, symbol: '', limitPrice: '', stopPrice: '', stopLoss: '', takeProfit: '' }))
      }
      setErrors([])
      setPreview(false)
    }
  }, [isOpen, currentQuote])

  const currentPrice = currentQuote?.last || parseFloat(form.limitPrice) || 0

  const estimatedCost = form.action === 'BUY'
    ? currentPrice * form.quantity
    : 0

  const stopLossPrice = form.stopLoss && currentPrice
    ? form.action === 'BUY'
      ? Math.round(currentPrice * (1 - parseFloat(form.stopLoss) / 100) * 100) / 100
      : Math.round(currentPrice * (1 + parseFloat(form.stopLoss) / 100) * 100) / 100
    : null

  const takeProfitPrice = form.takeProfit && currentPrice
    ? form.action === 'BUY'
      ? Math.round(currentPrice * (1 + parseFloat(form.takeProfit) / 100) * 100) / 100
      : Math.round(currentPrice * (1 - parseFloat(form.takeProfit) / 100) * 100) / 100
    : null

  const riskReward = stopLossPrice && takeProfitPrice && currentPrice
    ? form.action === 'BUY'
      ? Math.round(((takeProfitPrice - currentPrice) / (currentPrice - stopLossPrice)) * 10) / 10
      : Math.round(((currentPrice - takeProfitPrice) / (stopLossPrice - currentPrice)) * 10) / 10
    : null

  const validate = (): boolean => {
    const errs: string[] = []
    if (!form.symbol) errs.push('Symbol is required')
    if (form.quantity < 1) errs.push('Quantity must be at least 1')
    if (form.orderType !== 'MARKET' && !form.limitPrice) errs.push('Limit price is required for limit orders')
    if (form.orderType === 'STOP_LIMIT' && !form.stopPrice) errs.push('Stop price is required for stop-limit orders')
    setErrors(errs)
    return errs.length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return

    const order: OrderRequest = {
      symbol: form.symbol.toUpperCase(),
      action: form.action,
      quantity: form.quantity,
      orderType: form.orderType === 'MARKET' ? 'MARKET' : 'LIMIT',
      limitPrice: form.limitPrice ? parseFloat(form.limitPrice) : undefined,
      stopPrice: form.stopPrice ? parseFloat(form.stopPrice) : undefined,
      timeInForce: form.timeInForce,
    }

    onSubmit(order)
    onClose()
  }

  const showPreview = () => {
    if (validate()) setPreview(true)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Order Builder" size="lg">
      <div className="space-y-6">
        {errors.length > 0 && (
          <div className="p-3 bg-red-600/10 border border-red-600/30 rounded-lg space-y-1">
            {errors.map((err, i) => (
              <p key={i} className="text-sm text-red-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                {err}
              </p>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark-border mb-1">Action</label>
            <div className="flex gap-2">
              <button
                onClick={() => setForm((f) => ({ ...f, action: 'BUY' }))}
                className={`flex-1 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 ${
                  form.action === 'BUY'
                    ? 'bg-green-600/20 text-green-400 border border-green-600/50'
                    : 'bg-dark-bg text-dark-border border border-dark-border'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Buy
              </button>
              <button
                onClick={() => setForm((f) => ({ ...f, action: 'SELL' }))}
                className={`flex-1 py-2 rounded-lg font-medium text-sm flex items-center justify-center gap-2 ${
                  form.action === 'SELL'
                    ? 'bg-red-600/20 text-red-400 border border-red-600/50'
                    : 'bg-dark-bg text-dark-border border border-dark-border'
                }`}
              >
                <TrendingDown className="w-4 h-4" />
                Sell
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-border mb-1">Symbol</label>
            <input
              type="text"
              value={form.symbol}
              onChange={(e) => setForm((f) => ({ ...f, symbol: e.target.value.toUpperCase() }))}
              placeholder="AAPL"
              list="watchlist-options"
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white placeholder:text-dark-border focus:outline-none focus:border-accent-primary uppercase"
            />
            <datalist id="watchlist-options">
              {watchlistSymbols.map((s) => (
                <option key={s} value={s} />
              ))}
            </datalist>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-dark-border mb-1">Quantity</label>
            <input
              type="number"
              value={form.quantity}
              onChange={(e) => setForm((f) => ({ ...f, quantity: parseInt(e.target.value) || 1 }))}
              min={1}
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white text-center focus:outline-none focus:border-accent-primary"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-border mb-1">Order Type</label>
            <select
              value={form.orderType}
              onChange={(e) => setForm((f) => ({ ...f, orderType: e.target.value as typeof form.orderType }))}
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-primary"
            >
              <option value="MARKET">Market</option>
              <option value="LIMIT">Limit</option>
              <option value="STOP">Stop</option>
              <option value="STOP_LIMIT">Stop Limit</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-dark-border mb-1">Time in Force</label>
            <select
              value={form.timeInForce}
              onChange={(e) => setForm((f) => ({ ...f, timeInForce: e.target.value as typeof form.timeInForce }))}
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-primary"
            >
              <option value="DAY">Day</option>
              <option value="GTC">Good Till Cancel</option>
            </select>
          </div>
        </div>

        {form.orderType !== 'MARKET' && (
          <div>
            <label className="block text-sm font-medium text-dark-border mb-1">Limit Price</label>
            <input
              type="number"
              step="0.01"
              value={form.limitPrice}
              onChange={(e) => setForm((f) => ({ ...f, limitPrice: e.target.value }))}
              placeholder="0.00"
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white placeholder:text-dark-border focus:outline-none focus:border-accent-primary"
            />
          </div>
        )}

        {form.orderType === 'STOP_LIMIT' && (
          <div>
            <label className="block text-sm font-medium text-dark-border mb-1">Stop Price</label>
            <input
              type="number"
              step="0.01"
              value={form.stopPrice}
              onChange={(e) => setForm((f) => ({ ...f, stopPrice: e.target.value }))}
              placeholder="0.00"
              className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white placeholder:text-dark-border focus:outline-none focus:border-accent-primary"
            />
          </div>
        )}

        <div className="border-t border-dark-border pt-4 space-y-3">
          <h4 className="text-sm font-semibold text-dark-border flex items-center gap-2">
            <Info className="w-4 h-4" />
            Risk Management
          </h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs text-dark-border mb-1">Stop Loss (%)</label>
              <input
                type="number"
                step="0.5"
                value={form.stopLoss}
                onChange={(e) => setForm((f) => ({ ...f, stopLoss: e.target.value }))}
                placeholder="3"
                className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white placeholder:text-dark-border focus:outline-none focus:border-accent-primary"
              />
            </div>
            <div>
              <label className="block text-xs text-dark-border mb-1">Take Profit (%)</label>
              <input
                type="number"
                step="0.5"
                value={form.takeProfit}
                onChange={(e) => setForm((f) => ({ ...f, takeProfit: e.target.value }))}
                placeholder="6"
                className="w-full px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white placeholder:text-dark-border focus:outline-none focus:border-accent-primary"
              />
            </div>
          </div>
        </div>

        {currentPrice > 0 && (
          <div className="p-4 bg-dark-bg/50 border border-dark-border rounded-lg space-y-2">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-accent-primary" />
              Order Preview
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-dark-border">Estimated Cost</span>
                <span className="text-white font-medium">${estimatedCost.toFixed(2)}</span>
              </div>
              {stopLossPrice && (
                <div className="flex justify-between">
                  <span className="text-dark-border">Stop Loss</span>
                  <span className="text-red-400 font-medium">${stopLossPrice.toFixed(2)}</span>
                </div>
              )}
              {takeProfitPrice && (
                <div className="flex justify-between">
                  <span className="text-dark-border">Take Profit</span>
                  <span className="text-green-400 font-medium">${takeProfitPrice.toFixed(2)}</span>
                </div>
              )}
              {riskReward && (
                <div className="flex justify-between">
                  <span className="text-dark-border">Risk/Reward</span>
                  <span className={`font-medium ${riskReward >= 2 ? 'text-green-400' : riskReward >= 1 ? 'text-yellow-400' : 'text-red-400'}`}>
                    1:{riskReward}
                  </span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-4 border-t border-dark-border">
          <button onClick={showPreview} className="px-4 py-2 text-dark-border hover:text-white transition-colors">
            Preview
          </button>
          <button
            onClick={handleSubmit}
            disabled={!form.symbol}
            className="px-6 py-2 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-4 h-4" />
            Submit Order
          </button>
        </div>
      </div>
    </Modal>
  )
}
