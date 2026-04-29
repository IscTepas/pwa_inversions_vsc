# TKT-INVRFIC-003: Market Data Service (Streaming OHLCV + Quotes)

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-003 |
| **Tipo** | Feature / Market Data |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-002 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
Sistema de indicadores y cores dependen de datos OHLCV en 9 timeframes + quotes en tiempo real.

### PropÃ³sito
Implementar servicio que:
- Suscribe a quotes en tiempo real
- Obtiene datos histÃ³ricos (200 velas por timeframe)
- Actualiza vela actual sin re-request
- Mantiene buffer circular de mÃ¡ximo 500 velas por sÃ­mbolo/timeframe

### SoluciÃ³n Propuesta

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

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**:
- src/services/market-data/marketData.service.ts
- src/services/market-data/candles.service.ts
- src/store/marketDataStore.ts
- src/types/market.types.ts

**Archivos a Modificar**:
- src/App.tsx (inicializar subscripciones)

**Componentes Afectados**:
- Todos los cores de anÃ¡lisis (dependen de quotes + candles)
- Dashboard (actualiza grÃ¡fica en tiempo real)

---

## ðŸ¤– Workflow de Agentes

### Picoro analiza:
- [ ] Timeframes (1m, 5m, 15m, 1h, 4h, 1D, 1W, 1M, 1Y) especificados
- [ ] Requisito de 50 velas mÃ­nimas para cÃ¡lculos confirmado
- [ ] Sin dependencias internas bloqueantes

### Goku implementa:
- [ ] Quote subscription + WebSocket handling
- [ ] Candles histÃ³rico: 200 velas al iniciar
- [ ] ActualizaciÃ³n incremental: nueva vela = close anterior
- [ ] Buffer circular: mÃ¡ximo 500 velas por sÃ­mbolo/timeframe
- [ ] ValidaciÃ³n: rechazar datos stale (>5 min)
- [ ] marketDataStore: estado por sÃ­mbolo/timeframe

### Vegeta optimiza:
- [ ] Throttle: mÃ¡ximo 2 updates/segundo por sÃ­mbolo
- [ ] Memory: buffer circular evita fugas
- [ ] Timeframe conversion: calcular 4h desde 1h si necesario
- [ ] CachÃ©: reutilizar datos para mÃºltiples consumers

### Bulma valida:
- [ ] Quotes llegan < 500ms desde mercado
- [ ] 200 velas cargadas correctamente
- [ ] Buffer no excede 500 velas
- [ ] Nuevas velas se crean cada cierre de perÃ­odo

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Quotes para SPY/QQQ/AAPL actualizan en tiempo real
2. âœ… Candles de 200 velas cargan en < 2 segundos
3. âœ… Timeframes 1m, 5m, 15m, 1h, 4h, 1D funcionan
4. âœ… Buffer no crece indefinidamente
5. âœ… Datos stale son rechazados

---

## ðŸ§¾ Evidencia de ValidaciÃ³n

- [ ] Screenshot: Dashboard mostrando quotes actualizadas
- [ ] Screenshot: GrÃ¡fica con 200 velas cargadas
- [ ] Log: Quote events llegando cada 1-2 segundos
- [ ] Memory monitor: buffer estable en 500 velas

---

## ðŸ“Œ Notas

- Usar Alpaca data en desarrollo
- Implementar mock de datos para testing

