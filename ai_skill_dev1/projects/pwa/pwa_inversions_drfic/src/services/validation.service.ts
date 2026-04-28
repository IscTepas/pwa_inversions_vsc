import { Strategy, IndicatorConfig } from '@/types/strategy.types';
import { SignalTableRow } from '@/types/signal.types';
import { OrderRequest } from '@/types/broker.types';

export class ValidationService {
  /**
   * Valida una estrategia
   */
  static validateStrategy(strategy: Strategy): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!strategy.name || strategy.name.trim() === '') {
      errors.push('Strategy name is required');
    }

    if (!strategy.indicators || strategy.indicators.length === 0) {
      errors.push('At least one indicator is required');
    }

    // Validar cada indicador
    for (const indicator of strategy.indicators || []) {
      const indicatorErrors = this.validateIndicatorConfig(indicator);
      errors.push(...indicatorErrors);
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Valida configuración de indicador
   */
  private static validateIndicatorConfig(config: IndicatorConfig): string[] {
    const errors: string[] = [];

    if (!config.name || !['RSI', 'MACD', 'BB', 'EMA', 'ATR', 'VOLUME'].includes(config.name)) {
      errors.push(`Invalid indicator: ${config.name}`);
    }

    if (config.enabled && config.weight && (config.weight < 0 || config.weight > 1)) {
      errors.push(`Indicator weight must be between 0 and 1, got ${config.weight}`);
    }

    return errors;
  }

  /**
   * Valida una orden
   */
  static validateOrder(order: OrderRequest): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!order.symbol || order.symbol.trim() === '') {
      errors.push('Symbol is required');
    }

    if (order.qty <= 0) {
      errors.push('Quantity must be greater than 0');
    }

    if (order.side && !['buy', 'sell'].includes(order.side)) {
      errors.push('Order side must be "buy" or "sell"');
    }

    if (order.type && !['market', 'limit', 'stop', 'stop_limit'].includes(order.type)) {
      errors.push('Invalid order type');
    }

    if (order.type === 'limit' && !order.limit_price) {
      errors.push('Limit price required for limit orders');
    }

    if (order.type === 'stop' && !order.stop_price) {
      errors.push('Stop price required for stop orders');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Valida una señal
   */
  static validateSignal(signal: SignalTableRow): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    if (!signal.symbol) {
      errors.push('Signal must have a symbol');
    }

    if (!['BUY', 'SELL', 'HOLD'].includes(signal.signal)) {
      errors.push('Invalid signal type');
    }

    if (signal.confluenceCores < 0 || signal.confluenceCores > 6) {
      errors.push('Confluence cores must be between 0 and 6');
    }

    if (signal.coreScore < 0 || signal.coreScore > 100) {
      errors.push('Core score must be between 0 and 100');
    }

    if (signal.entryPrice <= 0) {
      errors.push('Entry price must be positive');
    }

    if (signal.stopLoss < 0) {
      errors.push('Stop loss must be non-negative');
    }

    if (signal.takeProfit <= signal.entryPrice) {
      errors.push('Take profit must be greater than entry price');
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }

  /**
   * Valida riesgo de posición
   */
  static validateRiskManagement(
    positionSize: number,
    accountBalance: number,
    maxRiskPercent: number = 2
  ): { valid: boolean; errors: string[] } {
    const errors: string[] = [];
    const riskPercent = (positionSize / accountBalance) * 100;

    if (riskPercent > maxRiskPercent) {
      errors.push(`Position size exceeds max risk of ${maxRiskPercent}% (current: ${riskPercent.toFixed(2)}%)`);
    }

    return {
      valid: errors.length === 0,
      errors,
    };
  }
}
