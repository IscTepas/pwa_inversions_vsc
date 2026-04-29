/**
 * Formateadores para valores numéricos, monetarios, etc.
 */

/**
 * Formatea número con decimales
 */
export const formatNumber = (value: number, decimals: number = 2): string => {
  return value.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

/**
 * Formatea como precio
 */
export const formatPrice = (price: number): string => {
  return `$${formatNumber(price, 2)}`;
};

/**
 * Formatea porcentaje
 */
export const formatPercent = (value: number, decimals: number = 2): string => {
  return `${formatNumber(value, decimals)}%`;
};

/**
 * Formatea cambio porcentual con color
 */
export const formatChange = (change: number, decimals: number = 2): string => {
  const sign = change > 0 ? '+' : '';
  return `${sign}${formatNumber(change, decimals)}%`;
};

/**
 * Formatea volumen
 */
export const formatVolume = (volume: number): string => {
  if (volume >= 1e9) {
    return `${formatNumber(volume / 1e9, 1)}B`;
  }
  if (volume >= 1e6) {
    return `${formatNumber(volume / 1e6, 1)}M`;
  }
  if (volume >= 1e3) {
    return `${formatNumber(volume / 1e3, 1)}K`;
  }
  return formatNumber(volume, 0);
};

/**
 * Formatea cantidad de dinero
 */
export const formatCurrency = (value: number, currency: string = 'USD'): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
};

/**
 * Formatea fecha/hora
 */
export const formatDate = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Formatea fecha y hora
 */
export const formatDateTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
};

/**
 * Formatea tiempo relativo ("hace 5 minutos")
 */
export const formatRelativeTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffSecs = Math.floor(diffMs / 1000);
  const diffMins = Math.floor(diffSecs / 60);
  const diffHours = Math.floor(diffMins / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffSecs < 60) return 'just now';
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  
  return formatDate(d);
};

/**
 * Formatea hora sin fecha (HH:MM:SS)
 */
export const formatTime = (date: Date | string): string => {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });
};

/**
 * Formatea nivel RSI con descripción
 */
export const formatRSI = (rsi: number): { value: string; label: string } => {
  if (rsi < 30) return { value: formatNumber(rsi, 1), label: 'Oversold' };
  if (rsi > 70) return { value: formatNumber(rsi, 1), label: 'Overbought' };
  return { value: formatNumber(rsi, 1), label: 'Neutral' };
};

/**
 * Trunca texto
 */
export const truncateText = (text: string, maxLength: number = 50): string => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

/**
 * Formatea símbolo (AAPL → AAPL)
 */
export const formatSymbol = (symbol: string): string => {
  return symbol.toUpperCase();
};
