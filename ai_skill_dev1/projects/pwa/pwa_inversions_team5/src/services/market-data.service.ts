import { Quote, Candle } from '@/types/broker.types';

export class MarketDataService {
  /**
   * Genera una cotización mock de mercado
   */
  static generateMockQuote(symbol: string): Quote {
    const basePrice = Math.random() * 300 + 50;
    const bid = basePrice - Math.random() * 0.5;
    const ask = basePrice + Math.random() * 0.5;

    return {
      symbol,
      bid,
      ask,
      last: (bid + ask) / 2,
      volume: Math.floor(Math.random() * 1000000),
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Genera velas mock para análisis técnico
   */
  static generateMockCandles(symbol: string, timeframe: string, count: number = 100): Candle[] {
    const candles: Candle[] = [];
    let price = Math.random() * 300 + 50;
    const now = Date.now();
    const interval = this.getTimeframeMs(timeframe);

    for (let i = count - 1; i >= 0; i--) {
      const change = (Math.random() - 0.5) * 5;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 2;
      const low = Math.min(open, close) - Math.random() * 2;

      candles.push({
        t: new Date(now - i * interval).toISOString(),
        o: open,
        h: high,
        l: low,
        c: close,
        v: Math.floor(Math.random() * 100000),
      });

      price = close;
    }

    return candles;
  }

  /**
   * Convierte timeframe a milisegundos
   */
  private static getTimeframeMs(timeframe: string): number {
    const map: Record<string, number> = {
      '1m': 60000,
      '5m': 300000,
      '15m': 900000,
      '1h': 3600000,
      '4h': 14400000,
      '1d': 86400000,
    };
    return map[timeframe] || 3600000;
  }

  /**
   * Calcula el precio promedio ponderado por volumen
   */
  static calculateVWAP(candles: Candle[]): number {
    let pv = 0;
    let v = 0;

    for (const candle of candles) {
      const tp = (candle.h + candle.l + candle.c) / 3;
      pv += tp * candle.v;
      v += candle.v;
    }

    return v > 0 ? pv / v : 0;
  }

  /**
   * Detecta niveles de soporte/resistencia básicos
   */
  static detectLevels(candles: Candle[]): { support: number; resistance: number } {
    const closes = candles.map((c) => c.c);
    const support = Math.min(...closes);
    const resistance = Math.max(...closes);

    return { support, resistance };
  }
}
