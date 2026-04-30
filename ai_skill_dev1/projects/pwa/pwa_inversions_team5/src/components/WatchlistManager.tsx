import React, { useState, useEffect, useCallback } from 'react'
import { Plus, Trash2, Edit2, Save, X, Search } from 'lucide-react'
import { Modal } from './ui/Modal'

interface WatchlistItem {
  symbol: string
  sector: string
  type: 'stock' | 'etf' | 'option'
  notes: string
}

const STORAGE_KEY = 'pwa_inversions_watchlist'

const DEFAULT_WATCHLIST: WatchlistItem[] = [
  { symbol: 'AAPL', sector: 'Technology', type: 'stock', notes: '' },
  { symbol: 'MSFT', sector: 'Technology', type: 'stock', notes: '' },
  { symbol: 'GOOGL', sector: 'Technology', type: 'stock', notes: '' },
  { symbol: 'TSLA', sector: 'Consumer Cyclical', type: 'stock', notes: '' },
  { symbol: 'NVDA', sector: 'Technology', type: 'stock', notes: '' },
]

interface WatchlistManagerProps {
  isOpen: boolean
  onClose: () => void
  onChange?: (symbols: string[]) => void
}

export const WatchlistManager: React.FC<WatchlistManagerProps> = ({ isOpen, onClose, onChange }) => {
  const [items, setItems] = useState<WatchlistItem[]>(DEFAULT_WATCHLIST)
  const [searchTerm, setSearchTerm] = useState('')
  const [editingId, setEditingId] = useState<string | null>(null)
  const [editForm, setEditForm] = useState<WatchlistItem>({ symbol: '', sector: '', type: 'stock', notes: '' })
  const [adding, setAdding] = useState(false)
  const [newSymbol, setNewSymbol] = useState('')
  const [newSector, setNewSector] = useState('')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch {
        setItems(DEFAULT_WATCHLIST)
      }
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        try {
          setItems(JSON.parse(stored))
        } catch {
          /* ignore */
        }
      }
    }
  }, [isOpen])

  const saveToStorage = useCallback((updated: WatchlistItem[]) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    onChange?.(updated.map((item) => item.symbol.toUpperCase()))
  }, [onChange])

  const handleAdd = () => {
    const symbol = newSymbol.trim().toUpperCase()
    if (!symbol || items.some((i) => i.symbol === symbol)) return

    const newItem: WatchlistItem = {
      symbol,
      sector: newSector || 'Unknown',
      type: 'stock',
      notes: '',
    }
    const updated = [...items, newItem]
    setItems(updated)
    saveToStorage(updated)
    setNewSymbol('')
    setNewSector('')
    setAdding(false)
  }

  const handleDelete = (symbol: string) => {
    const updated = items.filter((i) => i.symbol !== symbol)
    setItems(updated)
    saveToStorage(updated)
  }

  const startEdit = (item: WatchlistItem) => {
    setEditingId(item.symbol)
    setEditForm({ ...item })
  }

  const cancelEdit = () => {
    setEditingId(null)
    setEditForm({ symbol: '', sector: '', type: 'stock', notes: '' })
  }

  const saveEdit = () => {
    const updated = items.map((i) => (i.symbol === editingId ? { ...editForm, symbol: editForm.symbol.toUpperCase() } : i))
    setItems(updated)
    saveToStorage(updated)
    setEditingId(null)
  }

  const filtered = items.filter(
    (item) =>
      item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sector.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Watchlist Manager" size="lg">
      <div className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-dark-border" />
            <input
              type="text"
              placeholder="Search symbols or sectors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-dark-bg border border-dark-border rounded-lg text-white placeholder:text-dark-border focus:outline-none focus:border-accent-primary"
            />
          </div>
          <button
            onClick={() => setAdding(true)}
            className="px-4 py-2 bg-accent-primary text-dark-bg font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        {adding && (
          <div className="flex gap-2 p-4 bg-dark-bg/50 rounded-lg border border-dark-border">
            <input
              type="text"
              placeholder="Symbol (e.g. AAPL)"
              value={newSymbol}
              onChange={(e) => setNewSymbol(e.target.value.toUpperCase())}
              className="flex-1 px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-primary uppercase"
              autoFocus
            />
            <input
              type="text"
              placeholder="Sector"
              value={newSector}
              onChange={(e) => setNewSector(e.target.value)}
              className="flex-1 px-3 py-2 bg-dark-surface border border-dark-border rounded-lg text-white focus:outline-none focus:border-accent-primary"
            />
            <button onClick={handleAdd} className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500">
              <Save className="w-4 h-4" />
            </button>
            <button onClick={() => { setAdding(false); setNewSymbol(''); setNewSector('') }} className="px-4 py-2 bg-dark-border text-white rounded-lg hover:opacity-80">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="border border-dark-border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-dark-bg/80">
                <th className="text-left px-4 py-3 text-sm font-semibold text-dark-border">Symbol</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-dark-border">Sector</th>
                <th className="text-left px-4 py-3 text-sm font-semibold text-dark-border">Type</th>
                <th className="text-right px-4 py-3 text-sm font-semibold text-dark-border">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((item) => (
                <tr key={item.symbol} className="border-t border-dark-border hover:bg-dark-bg/30">
                  {editingId === item.symbol ? (
                    <>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={editForm.symbol}
                          onChange={(e) => setEditForm({ ...editForm, symbol: e.target.value.toUpperCase() })}
                          className="w-full px-2 py-1 bg-dark-surface border border-dark-border rounded text-white uppercase"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <input
                          type="text"
                          value={editForm.sector}
                          onChange={(e) => setEditForm({ ...editForm, sector: e.target.value })}
                          className="w-full px-2 py-1 bg-dark-surface border border-dark-border rounded text-white"
                        />
                      </td>
                      <td className="px-4 py-2">
                        <select
                          value={editForm.type}
                          onChange={(e) => setEditForm({ ...editForm, type: e.target.value as WatchlistItem['type'] })}
                          className="px-2 py-1 bg-dark-surface border border-dark-border rounded text-white"
                        >
                          <option value="stock">Stock</option>
                          <option value="etf">ETF</option>
                          <option value="option">Option</option>
                        </select>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={saveEdit} className="p-1.5 rounded bg-green-600 text-white hover:bg-green-500">
                            <Save className="w-4 h-4" />
                          </button>
                          <button onClick={cancelEdit} className="p-1.5 rounded bg-dark-border text-white hover:opacity-80">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="px-4 py-2 font-semibold text-white">{item.symbol}</td>
                      <td className="px-4 py-2 text-dark-border">{item.sector}</td>
                      <td className="px-4 py-2">
                        <span className="px-2 py-0.5 text-xs rounded-full bg-dark-bg border border-dark-border text-dark-border">
                          {item.type}
                        </span>
                      </td>
                      <td className="px-4 py-2 text-right">
                        <div className="flex justify-end gap-1">
                          <button onClick={() => startEdit(item)} className="p-1.5 rounded hover:bg-dark-border/50 text-dark-border hover:text-white transition-colors">
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(item.symbol)} className="p-1.5 rounded hover:bg-red-600/20 text-dark-border hover:text-red-400 transition-colors">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div className="text-center py-8 text-dark-border">No symbols found</div>
          )}
        </div>

        <div className="flex justify-between items-center text-sm text-dark-border pt-2 border-t border-dark-border">
          <span>{filtered.length} of {items.length} symbols</span>
          <span className="text-xs">Auto-saved to localStorage</span>
        </div>
      </div>
    </Modal>
  )
}
