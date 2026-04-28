import { ConfluenceEngine } from '@/services/confluence/confluence.engine';
import { IndicatorsCoreResult } from '@/types/indicators.types';

describe('ConfluenceEngine', () => {
  const mockIndicatorResult: IndicatorsCoreResult = {
    rsiCore: { signal: 'BUY', score: 80 },
    macdCore: { signal: 'BUY', score: 75 },
    bbCore: { signal: 'HOLD', score: 50 },
    emaCore: { signal: 'BUY', score: 70 },
    volumeCore: { signal: 'BUY', score: 85 },
  };

  describe('combineSignals', () => {
    it('should generate BUY signal when >=2 cores aligned', () => {
      const signal = ConfluenceEngine.combineSignals(
        mockIndicatorResult,
        'AAPL',
        new Date(),
        100
      );

      expect(signal.signal).toBe('BUY');
      expect(signal.confluenceCores).toBeGreaterThanOrEqual(2);
    });

    it('should generate SELL signal when cores aligned on sell', () => {
      const sellResult: IndicatorsCoreResult = {
        rsiCore: { signal: 'SELL', score: 80 },
        macdCore: { signal: 'SELL', score: 75 },
        bbCore: { signal: 'HOLD', score: 50 },
        emaCore: { signal: 'SELL', score: 70 },
        volumeCore: { signal: 'HOLD', score: 60 },
      };

      const signal = ConfluenceEngine.combineSignals(
        sellResult,
        'GOOGL',
        new Date(),
        150
      );

      expect(signal.signal).toBe('SELL');
      expect(signal.confluenceCores).toBeGreaterThanOrEqual(2);
    });

    it('should generate HOLD signal when cores misaligned', () => {
      const holdResult: IndicatorsCoreResult = {
        rsiCore: { signal: 'BUY', score: 80 },
        macdCore: { signal: 'SELL', score: 75 },
        bbCore: { signal: 'HOLD', score: 50 },
        emaCore: { signal: 'SELL', score: 70 },
        volumeCore: { signal: 'BUY', score: 60 },
      };

      const signal = ConfluenceEngine.combineSignals(
        holdResult,
        'MSFT',
        new Date(),
        200
      );

      expect(signal.signal).toBe('HOLD');
    });

    it('should calculate correct core score', () => {
      const signal = ConfluenceEngine.combineSignals(
        mockIndicatorResult,
        'AAPL',
        new Date(),
        100
      );

      expect(signal.coreScore).toBeGreaterThan(0);
      expect(signal.coreScore).toBeLessThanOrEqual(100);
    });

    it('should set proper entry/stop/target prices', () => {
      const signal = ConfluenceEngine.combineSignals(
        mockIndicatorResult,
        'AAPL',
        new Date(),
        100
      );

      if (signal.signal === 'BUY') {
        expect(signal.entryPrice).toBe(100);
        expect(signal.stopLoss).toBeLessThan(signal.entryPrice);
        expect(signal.takeProfit).toBeGreaterThan(signal.entryPrice);
      }
    });
  });
});
