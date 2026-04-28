# TKT-INVRFIC-004: Indicadores Técnicos (RSI, MACD, Bollinger, EMA, ATR, Volume)

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-004 |
| **Tipo** | Feature / Indicators |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-003 ✅ Completado |

---

## 📝 Descripción

### Contexto
Core de indicadores técnicos es el primero de 6 cores de análisis. Base de todas las señales.

### Propósito
Implementar cálculo de 6 indicadores técnicos con salida estándar:
- RSI(14): Oversold/Overbought
- MACD(12,26,9): Crossovers bullish/bearish
- Bollinger Bands(20,2): Squeeze/Breakout
- EMA(9,21,50): Trend bullish/bearish/sideways
- ATR(14): Volatilidad
- Volume: Confirmación

### Solución Propuesta

**Estructura**:
- src/services/indicators/rsi.service.ts
- src/services/indicators/macd.service.ts
- src/services/indicators/bollinger.service.ts
- src/services/indicators/ema.service.ts
- src/services/indicators/atr.service.ts
- src/services/indicators/volume.service.ts
- src/services/indicators/indicators.service.ts (orquestador)
- src/types/indicators.types.ts

**Usar**: `technicalindicators` npm package

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 8 archivos nuevos

**Archivos a Modificar**: Ninguno

**Componentes Afectados**: Core de indicadores técnicos

---

## 🤖 Workflow de Agentes

### Picoro analiza:
- [ ] 6 indicadores especificados en detail
- [ ] Parámetros por defecto en spec v1.0
- [ ] Sin dependencias internas bloqueantes

### Goku implementa:
- [ ] Cada indicador: servicio independiente
- [ ] Orquestador: calcula los 6 en paralelo
- [ ] Salida estándar: { side: BUY|SELL|HOLD, confidence, score, reasons, indicatorBreakdown }
- [ ] Validación: retornar null si < 50 velas

### Vegeta optimiza:
- [ ] Cálculos reutilizan valores previos (sin recalcular todo)
- [ ] Performance: cálculo completo < 100ms
- [ ] Números redondeados correctamente

### Bulma valida:
- [ ] RSI calculado vs TradingView: diferencia < 0.1%
- [ ] MACD line vs TradingView: diferencia < 0.1%
- [ ] Bollinger Bands vs TradingView: diferencia < 0.1%
- [ ] Señales correctas: RSI 28 = BUY, RSI 72 = SELL

---

## ✅ Criterios de Aceptación

1. ✅ RSI(14) calcula correctamente oversold < 30 / overbought > 70
2. ✅ MACD detecta crossovers bullish y bearish
3. ✅ Bollinger Bands identifica squeeze y breakouts
4. ✅ EMA trend: bullish si EMA9 > EMA21 > EMA50
5. ✅ ATR mide volatilidad (high/medium/low)
6. ✅ Volume compara contra promedio de 20 períodos

---

## 🧾 Evidencia de Validación

- [ ] CSV de datos: SPY histórico
- [ ] Screenshot: Comparativa TradingView vs nuestros cálculos
- [ ] Test: 10 casos de RSI, MACD, BB
- [ ] Performance: cálculo < 100ms para 200 velas

---

## 📌 Notas

- Usar `technicalindicators` npm package
- Validar precisión vs TradingView Pine Script
- Documentar fórmulas exactas en código
