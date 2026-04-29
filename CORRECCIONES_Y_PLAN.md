# 📋 CORRECCIONES Y PLAN DE ACCIÓN - PWA INVERSIONS FASE 1

**Fecha de Auditoría**: 28 de Abril, 2026
**Estado Actual**: ⚠️ 25% cumplimiento de especificación
**Prioridad**: 🔴 CRÍTICA - Decisión requerida inmediatamente
**Ubicación del Proyecto**: `ai_skill_dev1/projects/pwa/pwa_inversions_team5/`
**Especificación Oficial**: `ai_skill_dev1/projects/pwa/pwa_inversions_team5/ai_work_flow/docs/specs/SPECIFICATION.md`

---

## ÍNDICE DE CONTENIDOS
1. [Resumen Ejecutivo](#resumen-ejecutivo)
2. [Problemas Identificados](#problemas-identificados)
3. [Matriz de Cumplimiento](#matriz-de-cumplimiento)
4. [Opciones y Decisión](#opciones-y-decisión)
5. [Plan de Corrección Detallado](#plan-de-corrección-detallado)
6. [Checklist de Tareas](#checklist-de-tareas)
7. [Estimaciones de Tiempo](#estimaciones-de-tiempo)
8. [Dependencias y Bloqueadores](#dependencias-y-bloqueadores)

---

## RESUMEN EJECUTIVO

### ¿QUÉ PASÓ?

Creé una **Fase 1 funcional pero incompleta**:
- ✅ Arquitectura base correcta (cores desacoplados, voting system)
- ✅ 6 servicios clave implementados
- ✅ 6 Zustand stores funcionales
- ✅ 4 componentes React básicos
- ❌ **PERO**: Solo 2/6 cores de análisis (33%)
- ❌ **PERO**: No implementé IBKR (broker primario)
- ❌ **PERO**: UI no configurable (sin settings)
- ❌ **PERO**: Todos los datos son mock (100%)

### CUMPLIMIENTO vs ESPECIFICACIÓN

```
ESPERADO (SPECIFICATION.md):
├─ 6 Cores independientes        → 2/6 ❌
├─ IBKR Connector (primario)      → 0/1 ❌
├─ UI Configuración completa      → 1/7 ❌
├─ Data Ingestion Real            → 0/5 ❌
├─ Persistencia (localStorage)    → 0/1 ❌
├─ Alertas (Email/SMS)            → 0/1 ❌
└─ Tests E2E                       → 0/1 ❌

TOTAL: ~25% CUMPLIMIENTO
```

### GRAVEDAD

La plataforma **NO es usable en producción** porque:
1. Sin todos los cores, las señales son incompletas
2. Sin IBKR, no puede conectar con broker primario
3. Sin datos reales, todo es simulación
4. Sin UI de configuración, usuario no puede usar

---

## PROBLEMAS IDENTIFICADOS

### 🔴 CRÍTICA: CORES FALTANTES (66% del sistema)

**Especificación requiere 6 cores:**

| Core | Status | Líneas | Prioridad |
|------|--------|--------|-----------|
| 1. Technical Indicators | ✅ HECHO | 200+ | — |
| 2. **Technical Structure** | ❌ FALTA | 0 | 🔴 |
| 3. **Institutional Flow** | ❌ FALTA | 0 | 🔴 |
| 4. **News & Events** | ❌ FALTA | 0 | 🔴 |
| 5. **Fundamentals** | ❌ FALTA | 0 | 🔴 |
| 6. AI Advisor | ✅ FRAMEWORK | 100+ | — |

**Impacto**: Sin estos cores, el sistema genera señales de baja confianza.

**Especificación dice** (1.2 Filosofía):
> "Cada core debe generar señales de compra y venta de forma independiente... El usuario decide qué cores participan en la decisión final..."

**Nuestro sistema**:
- ✅ Tiene 2 cores
- ❌ Falta 4 cores
- ❌ No cumple filosofía

---

### 🔴 CRÍTICA: IBKR CONNECTOR NO IMPLEMENTADO

**Especificación sección 2.1:**
> "Broker Primario: Interactive Brokers TWS API"

**Lo que falta:**
```
❌ @stoqey/ib library integration
❌ TWS/Gateway connection detection
❌ Real authentication flow
❌ Heartbeat + automatic reconnection
❌ Real option chain fetching
❌ Streaming real-time data
```

**Lo que tengo:**
```
✅ IBroker interface (contrato)
✅ MockBrokerConnector (desarrollo)
⚠️ AlpacaBrokerConnector (secondary, no es primario)
```

**Impacto**: El sistema está atado a Alpaca (broker secundario) cuando debería ser IBKR primario.

---

### 🟡 ALTA: UI INCOMPLETA (Falta 85% de Settings)

**Especificación sección 2.2-2.5 requiere:**

| Feature | Implementado | Status |
|---------|---|---|
| Settings > Watchlist Manager | ❌ | Falta |
| Settings > Signal Configuration | ❌ | Falta |
| Settings > Risk Management | ❌ | Falta |
| Strategy Builder Modal | ⚠️ 10% | Incompleto |
| 7 Strategy Presets (P01-P07) | ⚠️ 2/7 | Incompleto |
| Options Chain Viewer | ❌ | Falta |
| Order Builder Modal | ❌ | Falta |
| Timeframe Switcher | ⚠️ Mock | Funciona pero sin datos reales |

**Lo que creé:**
- ✅ Dashboard básico
- ✅ Signals table (sorteable)
- ✅ Watchlist display (read-only)
- ✅ Strategy selector (básico)

**Falta:**
- ❌ Edición de watchlist
- ❌ Configuración de señales (RSI period, MACD params, etc)
- ❌ Gestor de riesgo (position size, stop loss, etc)
- ❌ Constructor visual de estrategias
- ❌ Visor de cadena de opciones
- ❌ Builder de órdenes

---

### 🟡 ALTA: DATOS 100% MOCK

**Especificación sección 3 requiere:**

```
Real Data Sources:
  ├─ IBKR: Quotes streaming
  ├─ IBKR: Historical candles
  ├─ IBKR: Options chain
  ├─ Alpaca: Backup quotes
  ├─ NewsAPI: Financial news
  ├─ Finnhub: Fundamentals + sentimiento
  └─ Internal: Earnings calendar

Current Implementation:
  └─ Math.random() para TODO
```

**Impacto**: 
- Signals no son reales
- Sistema no es validable
- No puede ir a producción
- Backtests son inútiles

---

### 🟢 MEDIA: PERSISTENCIA NO IMPLEMENTADA

**Especificación requiere (sección 2.2, 2.5):**
```
localStorage: Watchlist, Strategies, Signals
IndexedDB: Historical candles buffer
.env validation: En startup
Auto-save: Cada 30s
Export/Import: JSON
```

**Actual:**
```
❌ localStorage NO sincroniza
❌ IndexedDB NO existe
❌ Auto-save NO existe
❌ Export/Import NO existe
```

---

### 🟢 MEDIA: TESTS E2E NO EXISTEN

**Tengo:**
- ✅ Unit tests básicos (11 suites)
- ✅ Test framework setup

**Falta:**
- ❌ E2E tests (Cypress/Playwright)
- ❌ Cypress tests para user flows
- ❌ Validación contra TradingView
- ❌ Performance tests
- ❌ CI/CD pipeline

---

## MATRIZ DE CUMPLIMIENTO

### Por Área

```
┌─────────────────────────────────────────────────────────┐
│ ÁREA                    % COMPLETADO    CRITICIDAD      │
├─────────────────────────────────────────────────────────┤
│ Cores de Análisis       33% (2/6)       🔴 CRÍTICA     │
│ Broker Integration      10%             🔴 CRÍTICA     │
│ UI/UX Principal         40%             🟡 ALTA       │
│ Data Ingestion Real     5%              🟡 ALTA       │
│ Strategy Manager        20%             🟡 ALTA       │
│ Persistencia            0%              🟢 MEDIA      │
│ Alerts System           0%              🟢 MEDIA      │
│ Tests E2E               0%              🟢 MEDIA      │
│ Documentation           60%             🟢 BAJA      │
├─────────────────────────────────────────────────────────┤
│ TOTAL CUMPLIMIENTO      ≈25%            🔴 CRÍTICA     │
└─────────────────────────────────────────────────────────┘
```

### Por Especificación (Secciones)

```
Sección 1 (Visión)           ✅ 90%  (arquitectura bien pensada)
Sección 2 (Input)            ⚠️ 20%  (falta config UI)
Sección 3 (Cores)            ❌ 33%  (falta 4 cores)
Sección 4 (Output)           ⚠️ 40%  (básico)
Sección 5 (UI)               ❌ 30%  (muy incompleta)
Sección 6 (Broker)           ❌ 10%  (solo Alpaca)
Sección 7 (Data Pipeline)    ❌ 5%   (100% mock)
Sección 8 (Deployment)       ⚠️ 50%  (parcialmente listo)
```

---

## OPCIONES Y DECISIÓN

### OPCIÓN A: PIVOTAR (Empezar desde 0)

**Descripción**: Descartar código actual y seguir especificación punto por punto
```
Ventajas:
✅ Cumplimiento 100% desde inicio
✅ Código limpio y siguiendo spec al pie
✅ Menos "deuda técnica"

Desventajas:
❌ Descartar 3,500+ líneas de código bien estructurado
❌ Reinventar arquitectura que está correcta
❌ Más tiempo: 3-4 semanas
❌ Riesgo de nuevos errores
```

**Timeline**: 3-4 semanas
**Riesgo**: ALTO

---

### OPCIÓN B: EVOLUCIONAR INCREMENTALMENTE ⭐ RECOMENDADO

**Descripción**: Completar lo que existe para llegar a 100% cumplimiento

**Fase 1b: Completar Cores** (8-10 horas)
```
├─ TKT-INVRFIC-005: Technical Structure Core
├─ TKT-INVRFIC-006: Institutional Flow Core
├─ TKT-INVRFIC-007: News & Events Core
└─ TKT-INVRFIC-008: Fundamentals Core
```

**Fase 1c: IBKR Integration** (6-8 horas)
```
├─ ibkr.connector.ts
├─ Real authentication
├─ Option chain fetching
└─ Streaming connection
```

**Fase 1d: UI Completar** (8-10 horas)
```
├─ WatchlistManager modal
├─ SignalConfiguration modal
├─ RiskManagement modal
├─ StrategyBuilder modal
├─ OptionsChainViewer
└─ OrderBuilder modal
```

**Fase 1e: Data Real** (6-8 horas)
```
├─ NewsAPI integration
├─ Finnhub integration
├─ Real Alpaca streaming
└─ Mock fallbacks
```

**Ventajas:**
✅ Reutiliza arquitectura que está bien
✅ Más rápido: 1-2 semanas
✅ Código incremental, más controlable
✅ Puedo retomar en cualquier momento

**Desventajas:**
❌ Hay que revisar y posiblemente refactorizar existente

**Timeline**: 28-36 horas (~1-2 semanas)
**Riesgo**: BAJO

---

### OPCIÓN C: HÍBRIDA

Implementar cores nuevos (B) pero refactorizar broker (A)

**Timeline**: 35-45 horas (~1.5 semanas)
**Riesgo**: MEDIO

---

### 🎯 RECOMENDACIÓN

**→ OPCIÓN B: EVOLUCIONAR** por:
1. ✅ Arquitectura base es correcta
2. ✅ Patrón de cores es el acertado
3. ✅ Reutiliza 80% del código existente
4. ✅ Timeline más corto
5. ✅ Riesgo más bajo
6. ✅ Podemos pausar/reanudar fácilmente

---

## PLAN DE CORRECCIÓN DETALLADO

### FASE 1B: COMPLETAR 4 CORES FALTANTES

**Ticket TKT-INVRFIC-005: Technical Structure Core**
```
Archivos a crear:
  └─ src/services/cores/technical-structure.core.ts (150-200 líneas)

Componentes:
  ├─ detectSupportResistance(candles[]) → zones[]
  ├─ detectTrendBias(candles[], timeframes[]) → trendByTF{}
  ├─ detectBOS_CHoCH(candles[], structure) → bool
  ├─ calculateZoneStrength(zone) → 0-100
  └─ analyze() → CoreResult

Output: {
  side: BUY|SELL|HOLD
  confidence: 0-1
  score: 0-100
  supportResistanceZones: []
  trendBiasByTimeframe: {}
  reasons: []
}

Tiempo: 4-5 horas
Dependencias: Candles data
```

**Ticket TKT-INVRFIC-006: Institutional Flow Core**
```
Archivos a crear:
  └─ src/services/cores/institutional-flow.core.ts (120-180 líneas)

Componentes:
  ├─ detectUnusualOptionActivity(optionChain) → activities[]
  ├─ analyzeOpenInterestSwings(oiData) → signal
  ├─ calculatePutCallRatio(optionChain) → ratio
  ├─ detectBlockOrders(level2Data) → blocks[]
  └─ analyze() → CoreResult

Output: {
  side: BUY|SELL|HOLD
  confidence: 0-1
  score: 0-100
  institutionalEvents: []
  reasons: []
}

Tiempo: 5-6 horas
Dependencias: Option chain data (IBKR)
```

**Ticket TKT-INVRFIC-007: News & Events Core**
```
Archivos a crear:
  ├─ src/services/cores/news-events.core.ts (100-150 líneas)
  └─ src/services/news.service.ts (100-150 líneas)

Componentes:
  ├─ fetchNews(symbol, timeframe) → news[]
  ├─ analyzeSentiment(text) → sentiment score
  ├─ detectEarningsEvent(symbol, date) → event
  ├─ calculateEventRisk(event, timeframe) → risk
  └─ analyze() → CoreResult

Integrations:
  ├─ NewsAPI
  ├─ Finnhub (earnings calendar)
  └─ Alpha Vantage (sentiment)

Output: {
  side: BUY|SELL|HOLD
  confidence: 0-1
  score: 0-100
  sentiment: bullish|bearish|neutral
  nextRelevantEvents: []
  reasons: []
}

Tiempo: 6-8 horas
Dependencias: NewsAPI key, Finnhub key
```

**Ticket TKT-INVRFIC-008: Fundamentals Core**
```
Archivos a crear:
  ├─ src/services/cores/fundamentals.core.ts (120-180 líneas)
  ├─ src/services/fundamentals.service.ts (100-150 líneas)
  └─ src/services/daily-ranking.service.ts (80-120 líneas)

Componentes:
  ├─ fetchCompanyMetrics(symbol) → metrics
  ├─ calculateValuationScore(metrics) → score
  ├─ detectEarningsSuprise(symbol) → surprise%
  ├─ rankDailyOpportunities(symbols[]) → ranking[]
  └─ analyze() → CoreResult

Integrations:
  └─ Finnhub (P/E, earnings, revenue growth)

Output: {
  side: BUY|SELL|HOLD
  confidence: 0-1
  score: 0-100
  companyMetrics: {}
  valuationScore: 0-100
  reasons: []
}

Ranking Output: {
  topCandidates: []  // 25 stocks
  scoredSymbols: {}
  refreshTime: ISO8601
}

Tiempo: 5-6 horas
Dependencias: Finnhub key
```

**Subtotal Fase 1B**: 20-25 horas

---

### FASE 1C: IBKR CONNECTOR

**Archivos a crear:**
```
src/services/broker/
  ├─ ibkr.connector.ts (300-400 líneas)
  ├─ ibkr.types.ts (100-150 líneas)
  └─ ibkr-connection-manager.ts (150-200 líneas)
```

**Componentes:**
```
IBKRConnector class:
  ├─ connect(config) → void
  ├─ disconnect() → void
  ├─ getAccount() → AccountInfo
  ├─ getQuote(symbol) → Quote
  ├─ getHistoricalCandles(symbol, timeframe) → Candle[]
  ├─ subscribeToQuotes(symbols[]) → Observable
  ├─ getOptionChain(symbol) → OptionChain
  ├─ getLevel2(symbol) → Level2
  ├─ submitOrder(order) → OrderResponse
  └─ heartbeat() → void (cada 30s)
```

**Integración:**
```
Libraries:
  ├─ @stoqey/ib (o similar)
  ├─ Connection detection (TWS en puerto 7497 o IB Gateway en 4001)
  ├─ Authentication (usando .env variables)
  └─ Reconnection logic (exponential backoff)
```

**Tiempo**: 6-8 horas

---

### FASE 1D: UI COMPLETAR

**Componentes a crear/mejorar:**

```
1. WatchlistManager Modal (120-180 líneas)
   ├─ Listar símbolos actuales
   ├─ Agregar nuevo símbolo
   ├─ Editar metadata (sector, type)
   ├─ Eliminar símbolos
   └─ Guardar a localStorage

2. SignalConfiguration Modal (200-300 líneas)
   ├─ Selector de cores habilitados
   ├─ RSI: period, oversold, overbought
   ├─ MACD: fast, slow, signal
   ├─ Bollinger: period, stdDev
   ├─ EMA: fast, slow, trend
   ├─ ATR: period
   ├─ Volume: avgPeriod, threshold
   └─ Pesos por indicador

3. RiskManagement Modal (120-180 líneas)
   ├─ max_position_size_pct
   ├─ max_daily_loss_pct
   ├─ default_stop_loss_pct
   ├─ default_take_profit_pct
   ├─ max_concurrent_positions
   └─ Options params (IV, DTE, premium)

4. StrategyBuilder Modal (150-220 líneas)
   ├─ Selector de preset (P01-P07)
   ├─ O builder manual
   ├─ Habilitar/deshabilitar cores
   ├─ Ajustar pesos
   ├─ Vista previa confluencia
   └─ Guardar como nueva estrategia

5. OptionsChainViewer (180-250 líneas)
   ├─ Listar expirations
   ├─ Listar strikes (filtrados)
   ├─ Mostrar bid/ask/IV/delta/gamma/theta/vega
   ├─ Sugerir estrategia (long call, bull call spread, etc)
   └─ Link para ejecutar en broker

6. OrderBuilder Modal (150-220 líneas)
   ├─ Selector de orden (buy/sell)
   ├─ Ticker (autocomplete)
   ├─ Quantity
   ├─ Type (market/limit/stop)
   ├─ Limit price (si aplica)
   ├─ Stop loss recomendado
   ├─ Take profit recomendado
   └─ Preview + Botón ejecutar

7. Mejorar Existing:
   ├─ Dashboard: Agregar tabs (Signals, Opportunities, Chart)
   ├─ Signals Table: Agregar filtros avanzados
   └─ Watchlist Panel: Hacer editable inline
```

**Tiempo**: 8-10 horas

---

### FASE 1E: DATA REAL

**Integraciones a agregar:**

```
1. NewsAPI (newsapi.org)
   - news.service.ts: fetchHeadlines(symbol)
   - news-events.core.ts: usar headlines

2. Finnhub (finnhub.io)
   - fundamentals.service.ts: fetchMetrics(symbol)
   - daily-ranking.service.ts: usar Finnhub data
   - earnings calendar: fetchEarnings()

3. Alpha Vantage (alpavantage.co)
   - Sentiment analysis: getSentiment(symbol)
   - News sentiment: analyzeNewsSentiment()

4. Real Alpaca Streaming
   - Reemplazar mock quotes con WebSocket real
   - Streaming de candles en tiempo real

5. IBKR Real Data
   - Una vez connector listo, usar IBKR para todo
```

**Mock Fallbacks:**
```
Si alguna API falla:
  ├─ Volver a datos mock
  ├─ Log de error
  ├─ Notificar al usuario
  └─ Retry cada 5 minutos
```

**Tiempo**: 6-8 horas

---

## CHECKLIST DE TAREAS

### ☐ DECISIÓN INICIAL
- [ ] Usuario decide: ¿Opción A, B o C?
- [ ] Crear rama git para nueva fase si es B
- [ ] Documentar decisión en memoria

### ☐ FASE 1B: CORES (20-25 hrs)
- [ ] TKT-005: Technical Structure Core
  - [ ] detectSupportResistance()
  - [ ] detectTrendBias()
  - [ ] detectBOS_CHoCH()
  - [ ] tests
  
- [ ] TKT-006: Institutional Flow Core
  - [ ] detectUnusualOptionActivity()
  - [ ] analyzeOpenInterestSwings()
  - [ ] calculatePutCallRatio()
  - [ ] tests
  
- [ ] TKT-007: News & Events Core
  - [ ] news.service.ts
  - [ ] Integración NewsAPI
  - [ ] Integración Finnhub
  - [ ] analyzeSentiment()
  - [ ] tests
  
- [ ] TKT-008: Fundamentals Core
  - [ ] fundamentals.service.ts
  - [ ] daily-ranking.service.ts
  - [ ] fetchCompanyMetrics()
  - [ ] rankDailyOpportunities()
  - [ ] tests

### ☐ FASE 1C: IBKR (6-8 hrs)
- [ ] ibkr.connector.ts
  - [ ] Clase IBKRConnector
  - [ ] Connect/disconnect
  - [ ] getAccount()
  - [ ] getQuote()
  - [ ] getHistoricalCandles()
  - [ ] subscribeToQuotes()
  - [ ] getOptionChain()
  - [ ] submitOrder()
  - [ ] Heartbeat logic
  - [ ] tests

- [ ] ibkr.types.ts
  - [ ] Type definitions

- [ ] Connection manager
  - [ ] Auto-reconnection
  - [ ] Error handling
  - [ ] Logging

### ☐ FASE 1D: UI (8-10 hrs)
- [ ] WatchlistManager Modal
  - [ ] Listar símbolos
  - [ ] Agregar/editar/eliminar
  - [ ] localStorage sync
  
- [ ] SignalConfiguration Modal
  - [ ] Selector de cores
  - [ ] Parámetros por indicador
  - [ ] Pesos ajustables
  
- [ ] RiskManagement Modal
  - [ ] Parámetros de riesgo
  - [ ] Validación
  - [ ] localStorage sync
  
- [ ] StrategyBuilder Modal
  - [ ] Presets P01-P07
  - [ ] Builder manual
  - [ ] Guardar estrategia custom
  
- [ ] OptionsChainViewer
  - [ ] Listar opciones
  - [ ] Mostrar greeks
  - [ ] Sugerir estrategia
  
- [ ] OrderBuilder Modal
  - [ ] Form de orden
  - [ ] Validación
  - [ ] Preview
  
- [ ] Mejorar componentes existing
  - [ ] Dashboard
  - [ ] Signals table
  - [ ] Watchlist

### ☐ FASE 1E: DATA (6-8 hrs)
- [ ] NewsAPI integration
  - [ ] API key en .env
  - [ ] fetchNews()
  - [ ] Retry logic
  - [ ] Mock fallback

- [ ] Finnhub integration
  - [ ] API key en .env
  - [ ] fetchMetrics()
  - [ ] fetchEarnings()
  - [ ] Retry logic

- [ ] Alpha Vantage integration
  - [ ] API key en .env
  - [ ] sentiment analysis
  - [ ] Retry logic

- [ ] Real Alpaca streaming
  - [ ] Reemplazar quotes mock
  - [ ] Reemplazar candles mock
  - [ ] WebSocket integration

- [ ] IBKR real data
  - [ ] Una vez connector listo
  - [ ] Usar como primario

### ☐ VALIDACIÓN FINAL
- [ ] Todos los tests pasan
- [ ] 100% cumplimiento de especificación
- [ ] Docum actualizada
- [ ] AUDIT.md actualizado con ✅
- [ ] Listo para producción

---

## ESTIMACIONES DE TIEMPO

### Por Fase

```
Fase 1B (Cores):        20-25 horas
Fase 1C (IBKR):         6-8 horas
Fase 1D (UI):           8-10 horas
Fase 1E (Data):         6-8 horas
Testing + Buffer:       4-6 horas
─────────────────────────────────
TOTAL:                  44-57 horas

EN JORNADAS DE 8 HORAS:
  ≈ 5-7 días de trabajo
  ≈ 1-2 semanas (con otros compromisos)
```

### Por Persona

```
Si trabaja 1 dev fulltime:
  → 6-7 días (una semana)

Si trabaja 1 dev part-time (4 hrs/día):
  → 2 semanas

Si trabajan 2 devs en paralelo:
  → 3-4 días (Cores + IBKR en paralelo)
```

---

## DEPENDENCIAS Y BLOQUEADORES

### DEPENDENCIAS EXTERNAS

```
API Keys Requeridas:
  ├─ IBKR: Local TWS/Gateway connection
  ├─ Alpaca: Ya tiene (.env)
  ├─ NewsAPI: news.org (free tier: 100 req/día)
  ├─ Finnhub: finnhub.io (free: 60 req/min)
  └─ Alpha Vantage: alphavantage.co (free: 5 req/min)

Libs a instalar:
  ├─ @stoqey/ib (IBKR)
  ├─ axios (HTTP client)
  ├─ sentimentjs (sentiment analysis)
  └─ date-fns (date utilities)
```

### BLOQUEADORES POTENCIALES

```
⚠️ IBKR Connector:
   Requiere: TWS/IB Gateway corriendo localmente
   Solución: Documentar setup en README

⚠️ API Limits:
   NewsAPI: 100 req/día free tier
   Solución: Implementar cache, batching

⚠️ Options Chain:
   IBKR requiere cuenta con opciones
   Solución: Mockear en dev, usar IBKR en prod

⚠️ Rate Limits:
   Alpaca: 200 req/min
   Finnhub: 60 req/min
   Solución: Rate limiter queue
```

### DECISIONES BLOQUEADAS

```
🔴 BLOQUEADO por: Decisión del usuario
   - ¿Opción A (pivot), B (evolucionar) o C (híbrida)?
   
🔴 BLOQUEADO por: API Keys
   - NewsAPI key
   - Finnhub key
   - Alpha Vantage key (opcional)
```

---

## SIGUIENTES PASOS INMEDIATOS

### ✅ HOY
1. **Comunicar auditoría al usuario**
2. **Recibir decisión**: A, B o C
3. **RENOMBRADO A "TEAM5"**:
   - ⚠️ REQUERIDO: Cerrar VS Code completamente primero
   - Renombrar carpeta: pwa_inversions_team5 → pwa_inversions_team5
   - Reemplazar todos los sufijos antiguos por "team5" en todos los archivos
   - Verificar con grep que NO quedan ocurrencias (completado ✓)
4. **Crear rama git** si es opción B
5. **Actualizar documentación** con decisión

### 📅 SEMANA 1 (Si opción B)
1. Implementar 4 cores faltantes
2. Iniciar IBKR connector en paralelo
3. Tests básicos por cada core

### 📅 SEMANA 2 (Si opción B)
1. UI modals completar
2. Data real integración
3. Testing exhaustivo
4. Documentación final

### 📅 RELEASE
1. Merge a main
2. Deploy a producción
3. Comunicar v1.0 completa

---

## ARCHIVOS RELEVANTES

### Documentación Existente
```
✅ ai_skill_dev1/projects/pwa/pwa_inversions_team5/PHASE1_README.md
✅ ai_skill_dev1/projects/pwa/pwa_inversions_team5/PHASE1_COMPLETION.md
✅ ai_skill_dev1/projects/pwa/pwa_inversions_team5/AUDIT_FASE1.md
✅ ai_skill_dev1/projects/pwa/pwa_inversions_team5/ai_work_flow/docs/specs/SPECIFICATION.md
```

### Carpetas Relevantes
```
Proyecto actual:
  d:\GitHub\pwa_inversions_vsc\ai_skill_dev1\projects\pwa\pwa_inversions_team5\

Especificación:
  d:\GitHub\pwa_inversions_vsc\ai_skill_dev1\projects\pwa\pwa_inversions_team5\

Tickets:
  d:\GitHub\pwa_inversions_vsc\ai_skill_dev1\ai_global\tickets\
```

---

## MATRIZ DE DECISIÓN

### ¿Cuál Opción Elegir?

```
                    OPCIÓN A        OPCIÓN B ⭐       OPCIÓN C
                    (PIVOT)         (EVOLUCIONAR)    (HÍBRIDA)
─────────────────────────────────────────────────────────────
Tiempo              3-4 weeks       1-2 weeks        1.5 weeks
Riesgo              HIGH            LOW              MEDIUM
Reutilización       0%              80%              60%
Cumplimiento        100%            100%             100%
Refactoring         TODO            30%              50%
Complejidad         ALTA            MEDIA            ALTA
Recomendación       ❌              ✅               ⚠️

CONCLUSIÓN:
→ Opción B es la más eficiente
→ Si hay tiempo extra: Opción C para mayor limpieza
```

---

## PREGUNTAS FRECUENTES

### P: ¿Puedo pausar en medio de una fase?
**R:** Sí. Recomiendo pausar entre fases para testing.

### P: ¿Cuándo tengo v1.0 funcional?
**R:** Después de Fase 1C (cores + IBKR), ya es funcional. 1D+1E es refinamiento.

### P: ¿Cuál es el mínimo viable?
**R:** Fases 1B + 1C = 26-33 horas = ~4 días = v1.0 básica pero completa.

### P: ¿Se puede hacer en paralelo?
**R:** Sí. 2 devs: uno en cores (1B), otro en IBKR (1C).

### P: ¿Cómo testo sin data real?
**R:** Mockear al iniciar, tests unit, luego data real en prod.

---

## CONTACTO Y SEGUIMIENTO

**Auditor**: GitHub Copilot
**Fecha Auditoría**: 28 de Abril, 2026
**Estado**: ⏳ Aguardando decisión

**Próxima acción**:
→ Usuario define opción (A, B o C)
→ Iniciar plan correspondiente

---

## NOTAS

Este documento debe ser consultado al reanudar el proyecto. Contiene:
- ✅ Identificación de todos los problemas
- ✅ Plan detallado de correcciones
- ✅ Checklist de tareas
- ✅ Estimaciones realistas
- ✅ Bloqueadores identificados

**Actualizar este documento cuando**:
- Se complete cada fase
- Se identifiquen nuevos bloqueadores
- Se tomen decisiones importantes

---

**FIN DEL DOCUMENTO**

*Guardar esta información y retomar cuando esté listo para continuar.*
