import React, { useState } from 'react';
import { useStrategies } from '@/hooks/useStrategies';
import { Strategy } from '@/types/strategy.types';

export const StrategyManager: React.FC = () => {
  const { activeStrategy, strategies, presets, switchStrategy } = useStrategies();
  const [isOpen, setIsOpen] = useState(false);

  const currentStrategy = strategies.find((s) => s.name === activeStrategy);

  return (
    <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-6 border border-dark-border h-full">
      <h3 className="text-lg font-semibold text-white mb-4">Strategy Manager</h3>

      {/* Current Strategy Display */}
      <div className="bg-dark-bg/50 rounded-lg p-4 mb-4 border border-dark-border">
        <p className="text-sm text-dark-border mb-2">Active Strategy</p>
        <p className="text-lg font-semibold text-white">{activeStrategy}</p>
        {currentStrategy && (
          <div className="mt-3 space-y-1 text-sm">
            <p className="text-dark-border">
              Indicators: {currentStrategy.indicators.length}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {currentStrategy.indicators.map((ind) => (
                <span
                  key={ind.name}
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    ind.enabled
                      ? 'bg-signal-up/20 text-signal-up'
                      : 'bg-signal-neutral/20 text-signal-neutral'
                  }`}
                >
                  {ind.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Strategy Selector */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 rounded-lg bg-accent-primary text-white font-medium hover:bg-accent-primary/80 transition-colors mb-4"
      >
        Switch Strategy
      </button>

      {isOpen && (
        <div className="bg-dark-bg/50 rounded-lg p-3 border border-dark-border space-y-2 mb-4 max-h-40 overflow-y-auto">
          {strategies.map((strategy) => (
            <button
              key={strategy.name}
              onClick={() => {
                switchStrategy(strategy.name);
                setIsOpen(false);
              }}
              className={`w-full text-left px-3 py-2 rounded transition-colors text-sm ${
                activeStrategy === strategy.name
                  ? 'bg-accent-primary text-white'
                  : 'text-white hover:bg-dark-border'
              }`}
            >
              {strategy.name}
            </button>
          ))}
        </div>
      )}

      {/* Presets Info */}
      <div className="text-xs text-dark-border">
        <p className="font-semibold mb-2">Available Presets</p>
        <ul className="space-y-1">
          {presets.map((preset) => (
            <li key={preset.name}>• {preset.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
