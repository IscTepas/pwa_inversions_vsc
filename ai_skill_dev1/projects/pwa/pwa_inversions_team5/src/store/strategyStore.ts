import { create } from 'zustand'
import { Strategy, DEFAULT_STRATEGIES } from '@types/strategy.types'

interface StrategyStore {
  activeStrategy: Strategy
  strategies: Map<string, Strategy>
  setActiveStrategy: (strategy: Strategy) => void
  saveStrategy: (strategy: Strategy) => void
  loadStrategy: (id: string) => Strategy | undefined
  getPresets: () => Strategy[]
}

export const useStrategyStore = create<StrategyStore>((set, get) => ({
  activeStrategy: DEFAULT_STRATEGIES.P04,
  strategies: new Map(Object.entries(DEFAULT_STRATEGIES)),
  setActiveStrategy: (strategy) => set({ activeStrategy: strategy }),
  saveStrategy: (strategy) => {
    set((state) => {
      if (state.strategies.size >= 20) {
        console.warn('Max 20 custom strategies allowed')
        return state
      }
      const newStrategies = new Map(state.strategies)
      newStrategies.set(strategy.id, strategy)
      return { strategies: newStrategies }
    })
  },
  loadStrategy: (id) => {
    return get().strategies.get(id)
  },
  getPresets: () => {
    return Array.from(get().strategies.values()).filter((s) => s.isPreset)
  },
}))
