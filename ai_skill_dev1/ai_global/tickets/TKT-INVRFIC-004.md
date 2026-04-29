# TKT-INVRFIC-004: Indicadores TÃ©cnicos (RSI, MACD, Bollinger, EMA, ATR, Volume)

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-004 |
| **Tipo** | Feature / Indicators |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-003 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
Core de indicadores tÃ©cnicos es el primero de 6 cores de anÃ¡lisis. Base de todas las seÃ±ales.

### PropÃ³sito
Implementar cÃ¡lculo de 6 indicadores tÃ©cnicos con salida estÃ¡ndar:
- RSI(14): Oversold/Overbought
- MACD(12,26,9): Crossovers bullish/bearish
- Bollinger Bands(20,2): Squeeze/Breakout
- EMA(9,21,50): Trend bullish/bearish/sideways
- ATR(14): Volatilidad
- Volume: ConfirmaciÃ³n

### SoluciÃ³n Propuesta

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

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 8 archivos nuevos

**Archivos a Modificar**: Ninguno

**Componentes Afectados**: Core de indicadores tÃ©cnicos

---

## ðŸ¤– Workflow de Agentes

### Picoro analiza:
- [ ] 6 indicadores especificados en detail
- [ ] ParÃ¡metros por defecto en spec v1.0
- [ ] Sin dependencias internas bloqueantes

### Goku implementa:
- [ ] Cada indicador: servicio independiente
- [ ] Orquestador: calcula los 6 en paralelo
- [ ] Salida estÃ¡ndar: { side: BUY|SELL|HOLD, confidence, score, reasons, indicatorBreakdown }
- [ ] ValidaciÃ³n: retornar null si < 50 velas

### Vegeta optimiza:
- [ ] CÃ¡lculos reutilizan valores previos (sin recalcular todo)
- [ ] Performance: cÃ¡lculo completo < 100ms
- [ ] NÃºmeros redondeados correctamente

### Bulma valida:
- [ ] RSI calculado vs TradingView: diferencia < 0.1%
- [ ] MACD line vs TradingView: diferencia < 0.1%
- [ ] Bollinger Bands vs TradingView: diferencia < 0.1%
- [ ] SeÃ±ales correctas: RSI 28 = BUY, RSI 72 = SELL

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… RSI(14) calcula correctamente oversold < 30 / overbought > 70
2. âœ… MACD detecta crossovers bullish y bearish
3. âœ… Bollinger Bands identifica squeeze y breakouts
4. âœ… EMA trend: bullish si EMA9 > EMA21 > EMA50
5. âœ… ATR mide volatilidad (high/medium/low)
6. âœ… Volume compara contra promedio de 20 perÃ­odos

---

## ðŸ§¾ Evidencia de ValidaciÃ³n

- [ ] CSV de datos: SPY histÃ³rico
- [ ] Screenshot: Comparativa TradingView vs nuestros cÃ¡lculos
- [ ] Test: 10 casos de RSI, MACD, BB
- [ ] Performance: cÃ¡lculo < 100ms para 200 velas

---

## ðŸ“Œ Notas

- Usar `technicalindicators` npm package
- Validar precisiÃ³n vs TradingView Pine Script
- Documentar fÃ³rmulas exactas en cÃ³digo

