import React, { useEffect } from 'react';
import { useBroker, useMarketData, useSignals } from '@/hooks';
import { SignalsTable } from './SignalsTable';
import { WatchlistPanel } from './WatchlistPanel';
import { StrategyManager } from './StrategyManager';
import { formatPrice, formatPercent } from '@/utils/format';

export const Dashboard: React.FC = () => {
  const { connected, account, connect } = useBroker();
  const { quotes, loading: marketLoading } = useMarketData(['AAPL', 'GOOGL', 'MSFT', 'TSLA']);
  const { signals } = useSignals();

  useEffect(() => {
    if (!connected) {
      connect('mock');
    }
  }, [connected, connect]);

  const watchlistSymbols = Array.from(quotes.keys());
  const totalSignals = signals.length;
  const buySignals = signals.filter((s) => s.signal === 'BUY').length;
  const sellSignals = signals.filter((s) => s.signal === 'SELL').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-bg to-dark-surface p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2">PWA Inversions</h1>
        <p className="text-dark-border">Phase 1 - Technical Analysis Engine</p>
      </div>

      {/* Status Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Connection Status */}
        <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-4 border border-dark-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-dark-border">Status</span>
            <div className={`w-3 h-3 rounded-full ${connected ? 'bg-signal-up' : 'bg-signal-neutral'}`} />
          </div>
          <p className="text-lg font-semibold text-white mt-2">
            {connected ? 'Connected' : 'Disconnected'}
          </p>
        </div>

        {/* Account Balance */}
        <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-4 border border-dark-border">
          <span className="text-sm text-dark-border">Balance</span>
          <p className="text-lg font-semibold text-white mt-2">
            {account ? formatPrice(account.buying_power) : '$0.00'}
          </p>
        </div>

        {/* Active Signals */}
        <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-4 border border-dark-border">
          <span className="text-sm text-dark-border">Signals</span>
          <p className="text-lg font-semibold text-white mt-2">{totalSignals}</p>
        </div>

        {/* Signal Distribution */}
        <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-4 border border-dark-border">
          <span className="text-sm text-dark-border">Distribution</span>
          <div className="flex gap-2 mt-2">
            <span className="text-signal-up">{buySignals}B</span>
            <span className="text-signal-down">{sellSignals}S</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Watchlist Panel */}
        <div className="lg:col-span-1">
          <WatchlistPanel symbols={watchlistSymbols} loading={marketLoading} />
        </div>

        {/* Strategy Manager */}
        <div className="lg:col-span-1">
          <StrategyManager />
        </div>

        {/* Stats Summary */}
        <div className="lg:col-span-1">
          <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-6 border border-dark-border h-full">
            <h3 className="text-lg font-semibold text-white mb-4">Quick Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-dark-border">Total Signals</span>
                <span className="text-white font-semibold">{totalSignals}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-border">Buy Signals</span>
                <span className="text-signal-up font-semibold">{buySignals}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-dark-border">Sell Signals</span>
                <span className="text-signal-down font-semibold">{sellSignals}</span>
              </div>
              <div className="border-t border-dark-border pt-3 mt-3 flex justify-between">
                <span className="text-dark-border">Win Ratio</span>
                <span className="text-white font-semibold">
                  {totalSignals > 0 ? formatPercent((buySignals / totalSignals) * 100) : '0%'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Signals Table */}
      <SignalsTable signals={signals} />
    </div>
  );
};
