import { create } from 'zustand'
import { AccountInfo, Position } from '@types/broker.types'

interface BrokerStore {
  connected: boolean
  account: AccountInfo | null
  positions: Position[]
  selectedBroker: 'alpaca' | 'ibkr'
  setConnected: (connected: boolean) => void
  setAccount: (account: AccountInfo) => void
  setPositions: (positions: Position[]) => void
  setSelectedBroker: (broker: 'alpaca' | 'ibkr') => void
}

export const useBrokerStore = create<BrokerStore>((set) => ({
  connected: false,
  account: null,
  positions: [],
  selectedBroker: 'alpaca',
  setConnected: (connected) => set({ connected }),
  setAccount: (account) => set({ account }),
  setPositions: (positions) => set({ positions }),
  setSelectedBroker: (selectedBroker) => set({ selectedBroker }),
}))
