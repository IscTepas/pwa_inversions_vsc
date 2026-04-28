import React from 'react';
import { Quote } from '@/types/broker.types';
import { useMarketDataStore } from '@/store/marketDataStore';
import { formatPrice, formatPercent, formatChange } from '@/utils/format';

interface WatchlistPanelProps {
  symbols: string[];
  loading?: boolean;
}

export const WatchlistPanel: React.FC<WatchlistPanelProps> = ({ symbols, loading = false }) => {
  const quotes = useMarketDataStore((state) => state.quotes);

  return (
    <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-6 border border-dark-border">
      <h3 className="text-lg font-semibold text-white mb-4">Watchlist</h3>

      {loading && (
        <div className="text-center text-dark-border py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-accent-primary mx-auto"></div>
        </div>
      )}

      {!loading && symbols.length === 0 && (
        <div className="text-center text-dark-border py-8">No symbols in watchlist</div>
      )}

      {!loading && (
        <div className="space-y-3">
          {symbols.map((symbol) => {
            const quote = quotes.get(symbol);
            if (!quote) return null;

            const change = ((quote.last - 100) / 100) * 100; // Mock change
            const isUp = change >= 0;

            return (
              <div
                key={symbol}
                className="flex items-center justify-between p-3 rounded-lg bg-dark-bg/50 hover:bg-dark-bg transition-colors cursor-pointer border border-transparent hover:border-dark-border"
              >
                <div>
                  <p className="font-semibold text-white">{symbol}</p>
                  <p className="text-sm text-dark-border">{formatPrice(quote.last)}</p>
                </div>
                <div className="text-right">
                  <p className={`font-semibold ${isUp ? 'text-signal-up' : 'text-signal-down'}`}>
                    {formatChange(change)}
                  </p>
                  <p className="text-xs text-dark-border">
                    Vol: {formatVolume(quote.volume)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

/**
 * Formatea volumen (helper)
 */
function formatVolume(volume: number): string {
  if (volume >= 1e6) {
    return `${(volume / 1e6).toFixed(1)}M`;
  }
  if (volume >= 1e3) {
    return `${(volume / 1e3).toFixed(1)}K`;
  }
  return volume.toString();
}
