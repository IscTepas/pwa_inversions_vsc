/**
 * Risk Calculator
 * Calculates position sizing, stop losses, and take profits
 */
export class RiskCalculator {
  /**
   * Calculate position size based on account balance and risk per trade
   */
  static calculatePositionSize(balance: number, entryPrice: number, riskPercent: number = 1.5): number {
    const riskAmount = (balance * riskPercent) / 100
    const positionSize = Math.floor(riskAmount / entryPrice)
    return Math.max(positionSize, 1) // Minimum 1 share
  }

  /**
   * Calculate stop loss based on ATR
   */
  static calculateStopLoss(entryPrice: number, atr: number, multiplier: number = 2): number {
    return Math.round((entryPrice - atr * multiplier) * 100) / 100
  }

  /**
   * Calculate take profit based on risk-reward ratio
   */
  static calculateTakeProfit(entryPrice: number, stopLoss: number, riskRewardRatio: number = 2): number {
    const riskAmount = entryPrice - stopLoss
    return Math.round((entryPrice + riskAmount * riskRewardRatio) * 100) / 100
  }

  /**
   * Validate if position meets risk requirements
   */
  static validatePosition(
    balance: number,
    positionSize: number,
    entryPrice: number,
    stopLoss: number,
    maxPositionSizePercent: number = 5,
    maxDailyLossPercent: number = 2,
  ): { valid: boolean; errors: string[] } {
    const errors: string[] = []

    // Check position size percentage
    const positionValue = positionSize * entryPrice
    const positionPercent = (positionValue / balance) * 100
    if (positionPercent > maxPositionSizePercent) {
      errors.push(`Position size ${positionPercent.toFixed(2)}% exceeds max ${maxPositionSizePercent}%`)
    }

    // Check buying power
    if (positionValue > balance * 4) {
      // 4x is typical for margin
      errors.push(`Insufficient buying power for position`)
    }

    // Check risk per trade
    const riskPerTrade = ((entryPrice - stopLoss) * positionSize) / balance
    if (riskPerTrade * 100 > maxDailyLossPercent) {
      errors.push(`Risk per trade exceeds max ${maxDailyLossPercent}%`)
    }

    return {
      valid: errors.length === 0,
      errors,
    }
  }
}
