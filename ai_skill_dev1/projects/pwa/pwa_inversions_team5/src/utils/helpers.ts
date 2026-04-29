/**
 * Utilidades generales de la aplicación
 */

/**
 * Valida si un símbolo es válido
 */
export const isValidSymbol = (symbol: string): boolean => {
  return /^[A-Z]{1,5}$/.test(symbol.toUpperCase());
};

/**
 * Convierte un timeframe en milisegundos
 */
export const getTimeframeMs = (timeframe: string): number => {
  const map: Record<string, number> = {
    '1m': 60000,
    '5m': 300000,
    '15m': 900000,
    '30m': 1800000,
    '1h': 3600000,
    '4h': 14400000,
    '1d': 86400000,
    '1w': 604800000,
  };
  return map[timeframe] || 3600000;
};

/**
 * Calcula el tiempo desde hace X minutos
 */
export const minutesAgo = (minutes: number): Date => {
  return new Date(Date.now() - minutes * 60000);
};

/**
 * Agrupa un array por una propiedad
 */
export const groupBy = <T, K extends keyof T>(array: T[], key: K): Map<T[K], T[]> => {
  const grouped = new Map<T[K], T[]>();
  for (const item of array) {
    const k = item[key];
    if (!grouped.has(k)) {
      grouped.set(k, []);
    }
    grouped.get(k)!.push(item);
  }
  return grouped;
};

/**
 * Deduplica un array por una propiedad
 */
export const deduplicateBy = <T, K extends keyof T>(array: T[], key: K): T[] => {
  const seen = new Set<T[K]>();
  return array.filter((item) => {
    if (seen.has(item[key])) {
      return false;
    }
    seen.add(item[key]);
    return true;
  });
};

/**
 * Calcula el promedio de un array de números
 */
export const average = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
};

/**
 * Calcula la desviación estándar
 */
export const standardDeviation = (numbers: number[]): number => {
  if (numbers.length < 2) return 0;
  const avg = average(numbers);
  const squareDiffs = numbers.map((n) => Math.pow(n - avg, 2));
  const avgSquareDiff = average(squareDiffs);
  return Math.sqrt(avgSquareDiff);
};

/**
 * Delay asincrónico
 */
export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

/**
 * Retorna con reintentos
 */
export const retryAsync = async <T>(
  fn: () => Promise<T>,
  maxAttempts: number = 3,
  delayMs: number = 1000
): Promise<T> => {
  let lastError: Error | null = null;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error));
      if (attempt < maxAttempts) {
        await delay(delayMs * attempt);
      }
    }
  }

  throw lastError || new Error('Max retry attempts exceeded');
};

/**
 * Calcula el cambio porcentual
 */
export const percentageChange = (oldValue: number, newValue: number): number => {
  if (oldValue === 0) return 0;
  return ((newValue - oldValue) / oldValue) * 100;
};

/**
 * Detecta tendencia basada en precios
 */
export const detectTrend = (prices: number[]): 'UPTREND' | 'DOWNTREND' | 'FLAT' => {
  if (prices.length < 3) return 'FLAT';

  const recent = prices.slice(-5);
  const highPrice = Math.max(...recent);
  const lowPrice = Math.min(...recent);
  const change = percentageChange(lowPrice, highPrice);

  if (change > 2) return 'UPTREND';
  if (change < -2) return 'DOWNTREND';
  return 'FLAT';
};
