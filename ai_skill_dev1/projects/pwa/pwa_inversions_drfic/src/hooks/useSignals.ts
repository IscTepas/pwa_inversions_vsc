import { useCallback } from 'react';
import { useSignalsStore } from '@/store/signalsStore';
import { TechnicalIndicatorsCore } from '@/services/indicators/technical-indicators.core';
import { ConfluenceEngine } from '@/services/confluence/confluence.engine';
import { SignalTableRow } from '@/types/signal.types';

export const useSignals = () => {
  const signals = useSignalsStore((state) => state.signals);
  const addSignal = useSignalsStore((state) => state.addSignal);
  const updateSignal = useSignalsStore((state) => state.updateSignal);
  const getSignalsBySymbol = useSignalsStore((state) => state.getSignalsBySymbol);

  const generateSignal = useCallback(
    async (symbol: string, candles: any[], timeframe: string) => {
      try {
        // 1. Calcular indicadores técnicos
        const indicatorResult = TechnicalIndicatorsCore.analyze(candles, timeframe as any);

        // 2. Combinar señales con el motor de confluencia
        const signal = ConfluenceEngine.combineSignals(
          indicatorResult,
          symbol,
          new Date(),
          candles[candles.length - 1]?.c || 0
        );

        // 3. Guardar señal
        if (signal.signal !== 'HOLD') {
          addSignal(signal);
        }

        return signal;
      } catch (error) {
        console.error('Error generating signal:', error);
        throw error;
      }
    },
    [addSignal]
  );

  return {
    signals,
    addSignal,
    updateSignal,
    getSignalsBySymbol,
    generateSignal,
  };
};
