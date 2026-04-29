import { create } from 'zustand'
import { SignalTableRow, OpportunityRankRow } from '@types/signal.types'

interface SignalsStore {
  signals: SignalTableRow[]
  opportunities: OpportunityRankRow[]
  addSignal: (signal: SignalTableRow) => void
  updateSignal: (id: string, updates: Partial<SignalTableRow>) => void
  removeSignal: (id: string) => void
  setOpportunities: (opportunities: OpportunityRankRow[]) => void
  getSignalsBySymbol: (symbol: string) => SignalTableRow[]
}

export const useSignalsStore = create<SignalsStore>((set, get) => ({
  signals: [],
  opportunities: [],
  addSignal: (signal) => {
    set((state) => ({
      signals: [signal, ...state.signals].slice(0, 500), // Keep max 500
    }))
  },
  updateSignal: (id, updates) => {
    set((state) => ({
      signals: state.signals.map((s) => (s.id === id ? { ...s, ...updates } : s)),
    }))
  },
  removeSignal: (id) => {
    set((state) => ({
      signals: state.signals.filter((s) => s.id !== id),
    }))
  },
  setOpportunities: (opportunities) => {
    set({ opportunities })
  },
  getSignalsBySymbol: (symbol) => {
    return get().signals.filter((s) => s.symbol === symbol)
  },
}))
