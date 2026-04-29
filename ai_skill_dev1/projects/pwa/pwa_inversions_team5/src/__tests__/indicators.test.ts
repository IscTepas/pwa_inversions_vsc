import { IndicatorsService } from '@/services/indicators/indicators.service';

describe('IndicatorsService', () => {
  describe('calculateRSI', () => {
    it('should return undefined for insufficient data', () => {
      const prices = [100, 101];
      const result = IndicatorsService.calculateRSI(prices, 14);
      expect(result).toBeUndefined();
    });

    it('should calculate RSI for valid data', () => {
      const prices = Array.from({ length: 30 }, (_, i) => 100 + i);
      const result = IndicatorsService.calculateRSI(prices, 14);
      expect(result).toBeDefined();
      expect(result?.rsi).toBeGreaterThan(0);
      expect(result?.rsi).toBeLessThan(100);
    });

    it('should detect oversold condition (RSI < 30)', () => {
      // Generate downtrend
      const prices = Array.from({ length: 30 }, (_, i) => 100 - i * 2);
      const result = IndicatorsService.calculateRSI(prices, 14);
      expect(result?.rsi).toBeLessThan(30);
      expect(result?.status).toBe('oversold');
    });

    it('should detect overbought condition (RSI > 70)', () => {
      // Generate uptrend
      const prices = Array.from({ length: 30 }, (_, i) => 100 + i * 2);
      const result = IndicatorsService.calculateRSI(prices, 14);
      expect(result?.rsi).toBeGreaterThan(70);
      expect(result?.status).toBe('overbought');
    });
  });

  describe('calculateMACD', () => {
    it('should return undefined for insufficient data', () => {
      const prices = [100];
      const result = IndicatorsService.calculateMACD(prices);
      expect(result).toBeUndefined();
    });

    it('should calculate MACD for valid data', () => {
      const prices = Array.from({ length: 100 }, (_, i) => 100 + Math.sin(i / 10) * 5);
      const result = IndicatorsService.calculateMACD(prices);
      expect(result).toBeDefined();
      expect(result?.macd).toBeDefined();
      expect(result?.signal).toBeDefined();
      expect(result?.histogram).toBeDefined();
    });
  });

  describe('calculateBollingerBands', () => {
    it('should calculate Bollinger Bands', () => {
      const prices = Array.from({ length: 50 }, (_, i) => 100 + Math.random() * 10);
      const result = IndicatorsService.calculateBollingerBands(prices, 20);
      expect(result).toBeDefined();
      expect(result?.upper).toBeGreaterThan(result?.middle!);
      expect(result?.lower).toBeLessThan(result?.middle!);
    });
  });

  describe('calculateEMA', () => {
    it('should calculate EMA correctly', () => {
      const prices = Array.from({ length: 30 }, (_, i) => 100 + i);
      const ema9 = IndicatorsService.calculateEMA(prices, 9);
      const ema21 = IndicatorsService.calculateEMA(prices, 21);
      
      expect(ema9).toBeDefined();
      expect(ema21).toBeDefined();
      expect(ema9?.ema).toBeGreaterThan(100);
      expect(ema21?.ema).toBeGreaterThan(100);
    });
  });

  describe('calculateATR', () => {
    it('should calculate ATR for candles', () => {
      const candles = Array.from({ length: 30 }, (_, i) => ({
        h: 100 + i + Math.random() * 2,
        l: 99 + i - Math.random() * 2,
        c: 99.5 + i,
      }));
      
      const result = IndicatorsService.calculateATR(candles as any, 14);
      expect(result).toBeDefined();
      expect(result?.atr).toBeGreaterThan(0);
    });
  });

  describe('calculateVolume', () => {
    it('should analyze volume', () => {
      const volumes = Array.from({ length: 30 }, () => Math.floor(Math.random() * 1000000));
      const result = IndicatorsService.calculateVolume(volumes);
      expect(result).toBeDefined();
      expect(result?.avgVolume).toBeGreaterThan(0);
      expect(result?.volumeTrend).toMatch(/UP|DOWN|FLAT/);
    });
  });
});
