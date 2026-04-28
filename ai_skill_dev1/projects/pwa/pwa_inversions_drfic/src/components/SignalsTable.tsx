import React, { useState } from 'react';
import { SignalTableRow } from '@/types/signal.types';
import { formatPrice, formatPercent, formatDateTime } from '@/utils/format';

interface SignalsTableProps {
  signals: SignalTableRow[];
}

export const SignalsTable: React.FC<SignalsTableProps> = ({ signals }) => {
  const [sortBy, setSortBy] = useState<'timestamp' | 'score' | 'confluence'>('timestamp');
  const [filterSignal, setFilterSignal] = useState<'ALL' | 'BUY' | 'SELL'>('ALL');

  const filteredSignals = signals
    .filter((s) => filterSignal === 'ALL' || s.signal === filterSignal)
    .sort((a, b) => {
      switch (sortBy) {
        case 'score':
          return b.coreScore - a.coreScore;
        case 'confluence':
          return b.confluenceCores - a.confluenceCores;
        case 'timestamp':
        default:
          return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
      }
    });

  return (
    <div className="bg-dark-surface/50 backdrop-blur rounded-xl p-6 border border-dark-border">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-white">Signals</h3>

        {/* Filters */}
        <div className="flex gap-3">
          {/* Signal Type Filter */}
          <div className="flex gap-2">
            {(['ALL', 'BUY', 'SELL'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilterSignal(type)}
                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                  filterSignal === type
                    ? 'bg-accent-primary text-white'
                    : 'bg-dark-bg text-dark-border hover:bg-dark-border'
                }`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Sort By */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="px-3 py-1 rounded text-sm font-medium bg-dark-bg text-white border border-dark-border focus:outline-none focus:border-accent-primary transition-colors"
          >
            <option value="timestamp">Latest</option>
            <option value="score">Score</option>
            <option value="confluence">Confluence</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-dark-border">
              <th className="text-left py-3 px-4 text-dark-border font-semibold">Symbol</th>
              <th className="text-left py-3 px-4 text-dark-border font-semibold">Signal</th>
              <th className="text-right py-3 px-4 text-dark-border font-semibold">Entry</th>
              <th className="text-right py-3 px-4 text-dark-border font-semibold">Stop</th>
              <th className="text-right py-3 px-4 text-dark-border font-semibold">Target</th>
              <th className="text-center py-3 px-4 text-dark-border font-semibold">Score</th>
              <th className="text-center py-3 px-4 text-dark-border font-semibold">Cores</th>
              <th className="text-left py-3 px-4 text-dark-border font-semibold">Time</th>
            </tr>
          </thead>
          <tbody>
            {filteredSignals.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-8 text-dark-border">
                  No signals found
                </td>
              </tr>
            ) : (
              filteredSignals.map((signal) => (
                <tr key={signal.timestamp} className="border-b border-dark-border/30 hover:bg-dark-bg/50 transition-colors">
                  <td className="py-3 px-4">
                    <span className="font-semibold text-white">{signal.symbol}</span>
                  </td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded font-semibold text-xs ${
                        signal.signal === 'BUY'
                          ? 'bg-signal-up/20 text-signal-up'
                          : signal.signal === 'SELL'
                          ? 'bg-signal-down/20 text-signal-down'
                          : 'bg-signal-neutral/20 text-signal-neutral'
                      }`}
                    >
                      {signal.signal}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-right text-white">{formatPrice(signal.entryPrice)}</td>
                  <td className="py-3 px-4 text-right text-signal-down">{formatPrice(signal.stopLoss)}</td>
                  <td className="py-3 px-4 text-right text-signal-up">{formatPrice(signal.takeProfit)}</td>
                  <td className="py-3 px-4 text-center">
                    <span className="font-semibold text-white">{signal.coreScore.toFixed(0)}</span>
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="font-semibold text-accent-primary">{signal.confluenceCores}</span>
                  </td>
                  <td className="py-3 px-4 text-dark-border text-xs">
                    {formatDateTime(signal.timestamp)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
