import { useCallback } from 'react';
import { useStrategyStore } from '@/store/strategyStore';
import { Strategy } from '@/types/strategy.types';

export const useStrategies = () => {
  const activeStrategy = useStrategyStore((state) => state.activeStrategy);
  const strategies = useStrategyStore((state) => state.strategies);
  const setActiveStrategy = useStrategyStore((state) => state.setActiveStrategy);
  const saveStrategy = useStrategyStore((state) => state.saveStrategy);
  const getPresets = useStrategyStore((state) => state.getPresets);

  const switchStrategy = useCallback(
    (name: string) => {
      const strategy = strategies.get(name);
      if (strategy) {
        setActiveStrategy(name);
      }
    },
    [strategies, setActiveStrategy]
  );

  const createStrategy = useCallback(
    (name: string, strategy: Strategy) => {
      if (strategies.size >= 20) {
        throw new Error('Maximum 20 strategies allowed');
      }
      saveStrategy(name, strategy);
    },
    [strategies, saveStrategy]
  );

  return {
    activeStrategy,
    strategies: Array.from(strategies.values()),
    presets: getPresets(),
    switchStrategy,
    createStrategy,
    saveStrategy,
    setActiveStrategy,
  };
};
