# TKT-INVRFIC-003: Market Data Service (Streaming OHLCV + Quotes)

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-003 |
| **Tipo** | Feature / Market Data |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-002 ✅ Completado |

---

## 📝 Descripción

### Contexto
Sistema de indicadores y cores dependen de datos OHLCV en 9 timeframes + quotes en tiempo real.

### Propósito
Implementar servicio que:
- Suscribe a quotes en tiempo real
- Obtiene datos históricos (200 velas por timeframe)
- Actualiza vela actual sin re-request
- Mantiene buffer circular de máximo 500 velas por símbolo/timeframe

### Solución Propuesta

**Estructura**:
- src/services/market-data/marketData.service.ts
- src/services/market-data/candles.service.ts
- src/store/marketDataStore.ts (Zustand)
- src/types/market.types.ts

**Interfaz**:
```typescript
interface Quote {
  symbol: string
  bid: number
  ask: number
  last: number
  volume: number
  timestamp: ISO8601
}

interface Candle {
  timestamp: ISO8601
  open: number
  high: number
  low: number
  close: number
  volume: number
}

// Service
class MarketDataService {
  subscribeToQuotes(symbol: string): void
  unsubscribeFromQuotes(symbol: string): void
  getHistoricalCandles(symbol: string, timeframe: string, limit: number): Promise<Candle[]>
  getCurrentCandles(symbol: string, timeframe: string): Candle[]
}
```

---

## 🔍 Análisis de Impacto

**Archivos a Crear**:
- src/services/market-data/marketData.service.ts
- src/services/market-data/candles.service.ts
- src/store/marketDataStore.ts
- src/types/market.types.ts

**Archivos a Modificar**:
- src/App.tsx (inicializar subscripciones)

**Componentes Afectados**:
- Todos los cores de análisis (dependen de quotes + candles)
- Dashboard (actualiza gráfica en tiempo real)

---

## 🤖 Workflow de Agentes

### Picoro analiza:
- [ ] Timeframes (1m, 5m, 15m, 1h, 4h, 1D, 1W, 1M, 1Y) especificados
- [ ] Requisito de 50 velas mínimas para cálculos confirmado
- [ ] Sin dependencias internas bloqueantes

### Goku implementa:
- [ ] Quote subscription + WebSocket handling
- [ ] Candles histórico: 200 velas al iniciar
- [ ] Actualización incremental: nueva vela = close anterior
- [ ] Buffer circular: máximo 500 velas por símbolo/timeframe
- [ ] Validación: rechazar datos stale (>5 min)
- [ ] marketDataStore: estado por símbolo/timeframe

### Vegeta optimiza:
- [ ] Throttle: máximo 2 updates/segundo por símbolo
- [ ] Memory: buffer circular evita fugas
- [ ] Timeframe conversion: calcular 4h desde 1h si necesario
- [ ] Caché: reutilizar datos para múltiples consumers

### Bulma valida:
- [ ] Quotes llegan < 500ms desde mercado
- [ ] 200 velas cargadas correctamente
- [ ] Buffer no excede 500 velas
- [ ] Nuevas velas se crean cada cierre de período

---

## ✅ Criterios de Aceptación

1. ✅ Quotes para SPY/QQQ/AAPL actualizan en tiempo real
2. ✅ Candles de 200 velas cargan en < 2 segundos
3. ✅ Timeframes 1m, 5m, 15m, 1h, 4h, 1D funcionan
4. ✅ Buffer no crece indefinidamente
5. ✅ Datos stale son rechazados

---

## 🧾 Evidencia de Validación

- [ ] Screenshot: Dashboard mostrando quotes actualizadas
- [ ] Screenshot: Gráfica con 200 velas cargadas
- [ ] Log: Quote events llegando cada 1-2 segundos
- [ ] Memory monitor: buffer estable en 500 velas

---

## 📌 Notas

- Usar Alpaca data en desarrollo
- Implementar mock de datos para testing
