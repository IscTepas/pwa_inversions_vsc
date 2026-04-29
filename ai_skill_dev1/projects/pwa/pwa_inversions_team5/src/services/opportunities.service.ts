import { SignalTableRow } from '@/types/signal.types';

export class OpportunitiesService {
  /**
   * Rankea oportunidades por puntuación y confluencia
   */
  static rankOpportunities(signals: SignalTableRow[]): SignalTableRow[] {
    return [...signals].sort((a, b) => {
      // Priorizar por confluencia primero (más cores = mejor)
      if (a.confluenceCores !== b.confluenceCores) {
        return b.confluenceCores - a.confluenceCores;
      }

      // Luego por score
      return b.coreScore - a.coreScore;
    });
  }

  /**
   * Filtra señales por criterios
   */
  static filterSignals(
    signals: SignalTableRow[],
    criteria: {
      minConfluence?: number;
      minScore?: number;
      signalType?: 'BUY' | 'SELL';
      maxAge?: number;
    }
  ): SignalTableRow[] {
    return signals.filter((signal) => {
      // Confluencia mínima
      if (criteria.minConfluence && signal.confluenceCores < criteria.minConfluence) {
        return false;
      }

      // Score mínimo
      if (criteria.minScore && signal.coreScore < criteria.minScore) {
        return false;
      }

      // Tipo de señal
      if (criteria.signalType && signal.signal !== criteria.signalType) {
        return false;
      }

      // Edad máxima (en minutos)
      if (criteria.maxAge) {
        const age = (Date.now() - new Date(signal.timestamp).getTime()) / 60000;
        if (age > criteria.maxAge) {
          return false;
        }
      }

      return true;
    });
  }

  /**
   * Agrupa señales por símbolo
   */
  static groupBySymbol(signals: SignalTableRow[]): Map<string, SignalTableRow[]> {
    const grouped = new Map<string, SignalTableRow[]>();

    for (const signal of signals) {
      if (!grouped.has(signal.symbol)) {
        grouped.set(signal.symbol, []);
      }
      grouped.get(signal.symbol)!.push(signal);
    }

    return grouped;
  }

  /**
   * Calcula estadísticas de oportunidades
   */
  static calculateStats(signals: SignalTableRow[]) {
    const total = signals.length;
    const buys = signals.filter((s) => s.signal === 'BUY').length;
    const sells = signals.filter((s) => s.signal === 'SELL').length;
    const holds = total - buys - sells;

    const avgScore = signals.length > 0 ? signals.reduce((sum, s) => sum + s.coreScore, 0) / total : 0;
    const avgConfluence =
      signals.length > 0 ? signals.reduce((sum, s) => sum + s.confluenceCores, 0) / total : 0;

    return {
      total,
      buys,
      sells,
      holds,
      avgScore,
      avgConfluence,
      buyRatio: buys / total || 0,
    };
  }
}
