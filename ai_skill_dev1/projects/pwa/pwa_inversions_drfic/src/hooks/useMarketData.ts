import { useEffect, useState, useCallback } from 'react';
import { useMarketDataStore } from '@/store/marketDataStore';
import { MarketDataService } from '@/services/market-data.service';

export const useMarketData = (symbols: string[], timeframe: string = '1h') => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const quotes = useMarketDataStore((state) => state.quotes);
  const candles = useMarketDataStore((state) => state.candles);
  const addQuote = useMarketDataStore((state) => state.addQuote);
  const addCandles = useMarketDataStore((state) => state.addCandles);

  const fetchMarketData = useCallback(async () => {
    if (symbols.length === 0) return;

    setLoading(true);
    setError(null);

    try {
      // Simular fetch de datos del mercado
      for (const symbol of symbols) {
        const mockQuote = MarketDataService.generateMockQuote(symbol);
        addQuote(symbol, mockQuote);

        const mockCandles = MarketDataService.generateMockCandles(symbol, timeframe);
        addCandles(`${symbol}_${timeframe}`, mockCandles);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  }, [symbols, timeframe, addQuote, addCandles]);

  useEffect(() => {
    fetchMarketData();
    
    // Poll cada 5 segundos (en producción sería con WebSocket)
    const interval = setInterval(fetchMarketData, 5000);
    return () => clearInterval(interval);
  }, [fetchMarketData]);

  return {
    quotes,
    candles,
    loading,
    error,
    refetch: fetchMarketData,
  };
};
