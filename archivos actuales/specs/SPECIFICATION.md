# ESPECIFICACIÃ“N TÃ‰CNICA â€” v1.0

## Proyecto: Plataforma de Inversiones con IA

**CÃ³digo del Proyecto**: `pwa_inversions_team5`
**CategorÃ­a**: PWA (Progressive Web App)
**Tech Stack Principal**: React + TypeScript + Vite + TailwindCSS
**VersiÃ³n**: 1.2
**Fecha**: 2026-03-11
**Autor**: Dr. Francisco Ibarra Carlos
**Estado**: ðŸŸ¡ En EspecificaciÃ³n
**Cambios v1.2**: Arquitectura por cores independientes, ranking diario de oportunidades, anÃ¡lisis fundamental/eventos, confluencia configurable y motor de estrategias sobre opciones

---

## 1. VisiÃ³n General

### 1.1 Objetivo

Desarrollar una **Plataforma Web de Inversiones asistida por Inteligencia Artificial** que permita detectar seÃ±ales de compra y venta de alta confianza en el mercado de acciones y opciones de EE.UU. (S&P 500 / SPY / QQQ y sus derivados), combinando anÃ¡lisis tÃ©cnico multicapa (RSI, MACD, Bollinger Bands, EMA/SMA, Volume), anÃ¡lisis de la cadena de opciones, monitoreo de flujo institucional, y confirmaciÃ³n mediante IA (Claude API), todo integrado con Interactive Brokers (IBKR) como broker primario y Alpaca como entorno de desarrollo y paper trading.

### 1.2 FilosofÃ­a de la Plataforma

La plataforma opera bajo el modelo **semi-automÃ¡tico**: el cerebro de decisiÃ³n vive dentro del proyecto como un conjunto de **cores programados y desacoplados**, cada uno especializado en una fuente de verdad distinta. La IA no reemplaza la lÃ³gica base; actÃºa como un core adicional de anÃ¡lisis y sugerencia.

Cada core debe generar seÃ±ales de compra y venta de forma independiente para el instrumento seleccionado, con su propio score, confianza, razones y contexto. El usuario decide quÃ© cores participan en la decisiÃ³n final y el sistema solo combina las coincidencias entre los cores activados.

No existe ejecuciÃ³n automÃ¡tica sin intervenciÃ³n humana en v1.0. La plataforma debe:

- descubrir oportunidades diarias de mayor prioridad
- analizar en profundidad el instrumento seleccionado
- combinar coincidencias entre indicadores, estructura tÃ©cnica, institucionales, noticias, fundamentales e IA
- sugerir la mejor estrategia de opciones para el contexto actual
- permitir la ejecuciÃ³n manual asistida en el broker elegido

```
Mercado + Noticias + Fundamentales + Opciones + Eventos
  â†“ [Data ingestion unificado]
Cores independientes del proyecto
  â†“ [Indicadores | Estructura | Institucionales | Noticias | Fundamentales | IA]
Core de Ranking Diario de Oportunidades
  â†“ [QuÃ© empresas/instrumentos conviene vigilar hoy]
Core de Confluencia
  â†“ [Coincidencias entre cores seleccionados por el usuario]
Core de Estrategias y Opciones
  â†“ [Prioriza estrategias y propone calls/puts]
Dashboard de Oportunidades + SeÃ±ales
  â†“ [Trader evalÃºa â†’ Aprueba con 1 click]
EjecuciÃ³n Asistida en Broker
  â†“ [ConfirmaciÃ³n + Log + Alertas + HistÃ³rico]
```

### 1.3 Resultado Esperado de v1.0

- **Input**: Watchlist configurable, universos de anÃ¡lisis, instrumentos seleccionados y configuraciÃ³n de cores/estrategias
- **Output**: Ranking diario de oportunidades + seÃ±ales BUY/SELL/HOLD por core + seÃ±al combinada + estrategias sugeridas + propuesta de ejecuciÃ³n en opciones
- **Modo de OperaciÃ³n**: Semi-automÃ¡tico (seÃ±al generada por IA â†’ aprobaciÃ³n manual â†’ ejecuciÃ³n)
- **Mercados**: Acciones US + Opciones sobre acciones (cadena de opciones)
- **Broker Primario**: Interactive Brokers (TWS API / IB Gateway)
- **Broker Desarrollo**: Alpaca (paper trading y validaciÃ³n de seÃ±ales)
- **Timeframes**: 1m, 5m, 15m, 1h, 4h, 1D, 1W, 1M, 1Y (9 timeframes completos)
- **Capacidad Clave**: El sistema puede crecer incorporando mÃ¡s indicadores, mÃ¡s estrategias, mÃ¡s fuentes de noticias y mÃ¡s reglas de institucionales sin rehacer el nÃºcleo existente

---

## 2. Entrada (Input)

### 2.1 Fuentes de Datos de Mercado

#### Fuente Primaria: Interactive Brokers TWS API
```
LibrerÃ­a: @stoqey/ib (Node.js wrapper oficial)
ConexiÃ³n: TWS local (puerto 7497) o IB Gateway (puerto 4001)
Datos disponibles:
  - Cotizaciones en tiempo real (Bid/Ask/Last/Volume)
  - Datos histÃ³ricos OHLCV (velas)
  - Cadena de opciones (strikes, expirations, IV, delta, gamma, theta, vega)
  - Nivel 2 (profundidad de mercado)
  - Open Interest
Variables de entorno:
  - IBKR_HOST=127.0.0.1
  - IBKR_PORT=7497          (TWS) | 4001 (Gateway)
  - IBKR_CLIENT_ID=1
  - IBKR_ACCOUNT_ID=<cuenta>
```

#### Fuente Secundaria/Desarrollo: Alpaca Markets API
```
LibrerÃ­a: @alpacahq/alpaca-trade-api + WebSocket nativo
Tipo: REST + WebSocket streaming
Datos disponibles:
  - Cotizaciones en tiempo real (paper + live)
  - Datos histÃ³ricos OHLCV
  - Noticias del mercado
Variables de entorno:
  - ALPACA_API_KEY=<key>
  - ALPACA_SECRET_KEY=<secret>
  - ALPACA_BASE_URL=https://paper-api.alpaca.markets  (dev)
  - ALPACA_DATA_URL=https://data.alpaca.markets
```

### 2.2 Watchlist (Input del Usuario)

```
ConfiguraciÃ³n: JSON editable desde la UI (Settings > Watchlist)
Estructura:
  {
    "watchlist": [
      { "symbol": "SPY",  "type": "ETF",    "sector": "Index", "active": true },
      { "symbol": "QQQ",  "type": "ETF",    "sector": "Tech",  "active": true },
      { "symbol": "AAPL", "type": "Stock",  "sector": "Tech",  "active": true },
      { "symbol": "TSLA", "type": "Stock",  "sector": "Auto",  "active": true },
      ...
    ]
  }
LÃ­mite v1.0: 20 sÃ­mbolos activos simultÃ¡neos
Almacenamiento: localStorage + exportable a JSON
```

### 2.3 ParÃ¡metros de ConfiguraciÃ³n de SeÃ±ales

```
ConfiguraciÃ³n: Editable desde UI (Settings > Signal Config)
ParÃ¡metros por defecto:

  Cores habilitables por el usuario:
    technical_indicators: true
    technical_structure: true
    institutional_flow: true
    news_events: true
    fundamentals: true
    ai_advisor: true

  Pesos base por core:
    technical_indicators: 1.0
    technical_structure: 1.0
    institutional_flow: 1.0
    news_events: 0.9
    fundamentals: 0.8
    ai_advisor: 0.7

  RSI:
    period: 14
    oversold_threshold: 30        (seÃ±al BUY)
    overbought_threshold: 70      (seÃ±al SELL)
  
  MACD:
    fast_period: 12
    slow_period: 26
    signal_period: 9
  
  Bollinger Bands:
    period: 20
    std_dev: 2
  
  EMA:
    fast: 9
    slow: 21
    trend: 50
  
  ATR:
    period: 14
    volatility_threshold: 0.02    (2% = alta volatilidad)
  
  Signal Confidence:
    min_confirmation_cores: 2        (mÃ­nimo de cores alineados)
    high_confidence_threshold: 0.75  (â‰¥75% = seÃ±al de alta confianza)
    medium_confidence_threshold: 0.50

  Opportunity Ranking:
    enabled: true
    refresh_interval_minutes: 5
    top_n_daily_candidates: 25
    minimum_opportunity_score: 0.60

  Eventos y noticias:
    lookahead_hours: 72
    macro_events_enabled: true
    earnings_events_enabled: true
    analyst_updates_enabled: true

  Fundamentales:
    use_earnings_surprise: true
    use_guidance: true
    use_revenue_growth: true
    use_profitability: true
    use_valuation_multiples: true
  
  Timeframes disponibles: ["1m", "5m", "15m", "1h", "4h", "1D", "1W", "1M", "1Y"]
  Timeframe principal UI: "15m"
  
  Nota de datos histÃ³ricos por timeframe:
    1m  â†’ Ãºltimas 500 velas  (~8 horas de mercado)
    5m  â†’ Ãºltimas 500 velas  (~2 dÃ­as)
    15m â†’ Ãºltimas 500 velas  (~5 dÃ­as)
    1h  â†’ Ãºltimas 500 velas  (~3 meses)
    4h  â†’ Ãºltimas 500 velas  (~10 meses)
    1D  â†’ Ãºltimas 500 velas  (~2 aÃ±os)
    1W  â†’ Ãºltimas 260 velas  (~5 aÃ±os)
    1M  â†’ Ãºltimas 120 velas  (~10 aÃ±os)
    1Y  â†’ Ãºltimas 30 velas   (~30 aÃ±os â€” disponibilidad segÃºn broker)
```

### 2.4 ParÃ¡metros de GestiÃ³n de Riesgo

```
ConfiguraciÃ³n: Editable desde UI (Settings > Risk Management)
ParÃ¡metros por defecto:

  max_position_size_pct: 5        (mÃ¡ximo 5% del portafolio por posiciÃ³n)
  max_daily_loss_pct: 2           (stop total del dÃ­a al -2%)
  default_stop_loss_pct: 1.5      (stop loss automÃ¡tico sugerido)
  default_take_profit_pct: 3.0    (take profit sugerido = 2:1 R/R)
  max_concurrent_positions: 5     (mÃ¡ximo 5 posiciones abiertas)
  
  Opciones:
    max_iv_percentile: 80         (no entrar si IV > percentil 80)
    preferred_dte_range: [7, 45]  (dÃ­as a expiraciÃ³n preferidos)
    max_option_premium_pct: 2     (mÃ¡ximo 2% del portafolio por prima)
```

### 2.5 Sistema de Estrategias (Strategy Manager)

```
PropÃ³sito: Permitir al usuario definir QUÃ‰ combinaciÃ³n de cores,
        filtros y reglas activa una seÃ±al y cuÃ¡l estrategia de opciones
        debe priorizarse para el contexto actual.

TIPOS DE ESTRATEGIA:

A. PRESETS PREDEFINIDOS (incluidos en v1.0):
   â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
  â”‚ ID  â”‚ Nombre                    â”‚ Cores principales         â”‚
   â”œâ”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
  â”‚ P01 â”‚ RSI + MACD Crossover      â”‚ RSI + MACD                â”‚
  â”‚ P02 â”‚ Bollinger Breakout        â”‚ Bollinger + Volume        â”‚
  â”‚ P03 â”‚ Triple EMA Trend          â”‚ EMA + Structure           â”‚
  â”‚ P04 â”‚ Full Confluence (default) â”‚ Technical + Structure + IAâ”‚
  â”‚ P05 â”‚ Institutional Momentum    â”‚ Technical + Institutional â”‚
  â”‚ P06 â”‚ Earnings Event Trader     â”‚ News + Events + Structure â”‚
  â”‚ P07 â”‚ Value + Catalyst Swing    â”‚ Fundamentals + News       â”‚
   â””â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

B. SELECTOR MANUAL (personalizaciÃ³n libre):
  El usuario activa/desactiva CADA core individualmente:
  â˜‘ Indicadores tÃ©cnicos
  â˜‘ Soportes / Resistencias / Tendencias
  â˜‘ Flujo institucional
  â˜‘ Noticias y eventos
  â˜‘ Fundamentales
  â˜‘ IA de sugerencia

  Dentro de cada core, el usuario activa/desactiva elementos especÃ­ficos:
   â˜‘ RSI         period: [_14_]   oversold: [_30_]  overbought: [_70_]
   â˜‘ MACD        fast: [_12_]     slow: [_26_]      signal: [_9_]
   â˜‘ Bollinger   period: [_20_]   stdDev: [_2_]
   â˜‘ EMA         fast: [_9_]      slow: [_21_]      trend: [_50_]
   â˜ ATR         period: [_14_]
   â˜‘ Volume      avgPeriod: [_20_]  ratio_threshold: [_1.5_]
  â˜‘ Support/Resistance  swing_lookback: [_50_]
  â˜‘ Trend Bias          multi_tf: [_15m_][_1h_][_1D_]
  â˜‘ Institutional       UOA: [on]   OI sweeps: [on]
  â˜‘ News                real_time_feeds: [on]
  â˜‘ Fundamentals        earnings + guidance + valuation
  â˜‘ IA Advisor          suggest_buy_sell: [on]
   
  Cada core e indicador puede tener su PESO en el score ajustado.

C. GUARDAR ESTRATEGIA PERSONALIZADA:
   El usuario puede guardar su configuraciÃ³n con nombre propio:
   Nombre: [Mi Estrategia SPY Intraday____________]
   DescripciÃ³n: [RSI oversold + MACD cross en 15m___]
   Timeframes: â˜‘15m  â˜‘1h  â˜otros
   [ðŸ’¾ GUARDAR COMO ESTRATEGIA]
   
   Almacenamiento: localStorage â†’ strategies[]
   LÃ­mite: 20 estrategias personalizadas guardadas

ESTRUCTURA DE DATOS:
  interface Strategy {
    id: string                          // UUID o "preset_P01"
    name: string                        // "RSI + MACD Crossover"
    description: string
    isPreset: boolean
    enabledCores: {
      technicalIndicators: boolean
      technicalStructure: boolean
      institutionalFlow: boolean
      newsEvents: boolean
      fundamentals: boolean
      aiAdvisor: boolean
    }
    indicators: {
      rsi:       { active: boolean, period: number, oversold: number, overbought: number, weight: number }
      macd:      { active: boolean, fast: number, slow: number, signal: number, weight: number }
      bollinger: { active: boolean, period: number, stdDev: number, weight: number }
      ema:       { active: boolean, fast: number, slow: number, trend: number, weight: number }
      atr:       { active: boolean, period: number, weight: number }
      volume:    { active: boolean, avgPeriod: number, ratioThreshold: number, weight: number }
    }
    structure: {
      supportsResistances: { active: boolean, weight: number }
      trends:              { active: boolean, weight: number }
    }
    institutional: {
      unusualOptions: { active: boolean, weight: number }
      openInterest:   { active: boolean, weight: number }
    }
    news: {
      realTimeNews: { active: boolean, weight: number }
      eventRisk:    { active: boolean, weight: number }
    }
    fundamentals: {
      earnings:     { active: boolean, weight: number }
      valuation:    { active: boolean, weight: number }
      growth:       { active: boolean, weight: number }
    }
    aiAdvisor: {
      active: boolean
      weight: number
    }
    optionStrategies: string[]          // ["long_call", "bull_call_spread"]
    recommendedTimeframes: string[]     // ["15m", "1h"]
    minConfidenceThreshold: number      // 0.50
    createdAt: ISO8601
    lastUsed: ISO8601
  }

SELECTOR EN UI (barra sobre la grÃ¡fica):
  [Estrategia: Full Confluence â–¼]  [âš™ï¸ Personalizar]  [ðŸ’¾ Guardar]
  Timeframe: [1m][5m][15m][1h][4h][1D][1W][1M][1Y]
```

---

### 3.1 Servicio de ConexiÃ³n con Broker (`broker_connector`)

```typescript
PASO 1: Inicializar ConexiÃ³n al Broker
â”œâ”€ Detectar broker activo (IBKR o Alpaca segÃºn .env)
â”œâ”€ Intentar conexiÃ³n con timeout de 30 segundos
â”œâ”€ Retry automÃ¡tico: mÃ¡ximo 3 intentos, backoff exponencial
â”œâ”€ Emitir evento: CONNECTION_STATUS (connected/disconnected/error)
â””â”€ Registrar en log: timestamp, broker, status

PASO 2: AutenticaciÃ³n y ValidaciÃ³n de Cuenta
â”œâ”€ IBKR: verificar que TWS/Gateway estÃ¡ activo y autenticado
â”œâ”€ Alpaca: validar API Key + Secret con endpoint /v2/account
â”œâ”€ Obtener datos de cuenta: balance, buying_power, positions
â””â”€ Emitir evento: ACCOUNT_LOADED

PASO 3: Mantener ConexiÃ³n (Heartbeat)
â”œâ”€ Ping cada 30 segundos
â”œâ”€ ReconexiÃ³n automÃ¡tica si se pierde la conexiÃ³n
â””â”€ Notificar al usuario si la reconexiÃ³n falla
```

### 3.2 Servicio de Datos de Mercado (`market_data`)

```typescript
PASO 4: Suscribir a Datos en Tiempo Real
â”œâ”€ Para cada sÃ­mbolo en watchlist activa:
â”‚  â”œâ”€ Suscribir a quotes (Bid/Ask/Last/Volume)
â”‚  â”œâ”€ Suscribir a trade ticks (Ãºltimas transacciones)
â”‚  â””â”€ Throttle de actualizaciÃ³n: mÃ¡ximo 2 updates/segundo por sÃ­mbolo
â”œâ”€ Emitir evento: QUOTE_UPDATE(symbol, quote)
â””â”€ Actualizar store global: marketData[symbol]

PASO 5: Obtener Datos HistÃ³ricos (Velas OHLCV)
â”œâ”€ Por cada sÃ­mbolo + timeframe activo:
â”‚  â”œâ”€ Solicitar Ãºltimas 200 velas histÃ³ricas al iniciar
â”‚  â”œâ”€ Actualizar vela actual en tiempo real (sin re-request completo)
â”‚  â””â”€ Mantener buffer circular de 500 velas por sÃ­mbolo/timeframe
â”œâ”€ ValidaciÃ³n: verificar que datos no estÃ¡n stale (>5 min sin update)
â””â”€ Emitir evento: CANDLES_UPDATED(symbol, timeframe, candles[])

PASO 6: Obtener Cadena de Opciones
â”œâ”€ Trigger: cuando usuario selecciona sÃ­mbolo en detalle
â”œâ”€ Solicitar expirations disponibles
â”œâ”€ Filtrar por DTE dentro de rango configurado (7-45 dÃ­as)
â”œâ”€ Obtener strikes ATM Â±10% para expirations filtradas
â”œâ”€ Datos por strike: bid, ask, last, volume, OI, IV, delta, gamma, theta, vega
â””â”€ Actualizar cada 60 segundos (no tiempo real para evitar saturaciÃ³n)
```

### 3.3 Core de Indicadores TÃ©cnicos (`technical_indicators`)

```typescript
PASO 7: Calcular Indicadores por SÃ­mbolo y Timeframe
â””â”€ Para cada sÃ­mbolo Ã— timeframe cuando llegan nuevas velas:

    RSI(14):
    â”œâ”€ Input: close prices[], period=14
    â”œâ”€ Output: { value: number, signal: "oversold"|"neutral"|"overbought" }
    â””â”€ SeÃ±al BUY si RSI < 30, SELL si RSI > 70

    MACD(12, 26, 9):
    â”œâ”€ Input: close prices[], fastPeriod=12, slowPeriod=26, signalPeriod=9
    â”œâ”€ Output: { macdLine, signalLine, histogram, crossover: "bullish"|"bearish"|null }
    â””â”€ SeÃ±al BUY si crossover bullish (MACD cruza sobre signal line)

    Bollinger Bands(20, 2):
    â”œâ”€ Input: close prices[], period=20, stdDev=2
    â”œâ”€ Output: { upper, middle, lower, width, percentB, signal: "squeeze"|"breakout"|"normal" }
    â””â”€ SeÃ±al BUY si precio toca lower band, SELL si toca upper band

    EMA(9, 21, 50):
    â”œâ”€ Input: close prices[]
    â”œâ”€ Output: { ema9, ema21, ema50, trend: "bullish"|"bearish"|"sideways" }
    â””â”€ Trend bullish si EMA9 > EMA21 > EMA50

    ATR(14):
    â”œâ”€ Input: OHLC candles[], period=14
    â”œâ”€ Output: { value: number, volatility: "high"|"medium"|"low" }
    â””â”€ Usado para cÃ¡lculo dinÃ¡mico de stop loss sugerido

    Volume Analysis:
    â”œâ”€ Input: volume[], close[], period=20
    â”œâ”€ Output: { avgVolume, currentVolume, ratio, signal: "high"|"normal"|"low" }
    â””â”€ SeÃ±al de confirmaciÃ³n si volumen actual > 1.5Ã— promedio

    MÃ­nimo requerido para calcular: 50 velas
    Si insuficientes: retornar null con flag "insufficient_data"

  SALIDA ESTÃNDAR DEL CORE:
  â”œâ”€ side: BUY | SELL | HOLD
  â”œâ”€ confidence: number
  â”œâ”€ score: number
  â”œâ”€ reasons: string[]
  â”œâ”€ timeframe: string
  â””â”€ indicatorBreakdown: object
```

  ### 3.4 Core de Estructura TÃ©cnica (`technical_structure`)

```typescript
  PASO 8: Detectar Soportes, Resistencias y Tendencias

    SOPORTES Y RESISTENCIAS:
    â”œâ”€ Identificar pivots relevantes por timeframe
    â”œâ”€ Detectar zonas en lugar de lÃ­neas rÃ­gidas
    â”œâ”€ Calcular fuerza de zona por nÃºmero de rechazos, volumen y recencia
    â””â”€ Emitir seÃ±al BUY cerca de soporte fuerte y SELL cerca de resistencia fuerte

    TENDENCIAS:
    â”œâ”€ Calcular bias por timeframe (1m, 5m, 15m, 1h, 4h, 1D)
    â”œâ”€ Clasificar como bullish, bearish o sideways
    â”œâ”€ Detectar cambios de estructura (BOS / CHoCH si aplica)
    â””â”€ Emitir confirmaciÃ³n o invalidaciÃ³n para BUY/SELL

  SALIDA ESTÃNDAR DEL CORE:
  â”œâ”€ side: BUY | SELL | HOLD
  â”œâ”€ confidence: number
  â”œâ”€ score: number
  â”œâ”€ supportResistanceZones: object[]
  â”œâ”€ trendBiasByTimeframe: object
  â””â”€ reasons: string[]
  ```

  ### 3.5 Core de Flujo Institucional (`institutional_flow`)

  ```typescript
  PASO 9: Detectar Actividad Institucional Relevante

    â”œâ”€ Analizar unusual options activity
    â”œâ”€ Analizar cambios abruptos en open interest
    â”œâ”€ Analizar bloques y sweeps cuando la fuente lo permita
    â”œâ”€ Relacionar la actividad con precio, volumen y expiraciones
    â””â”€ Emitir sesgo institucional BUY/SELL/HOLD

  SALIDA ESTÃNDAR DEL CORE:
  â”œâ”€ side: BUY | SELL | HOLD
  â”œâ”€ confidence: number
  â”œâ”€ score: number
  â”œâ”€ institutionalEvents: object[]
  â””â”€ reasons: string[]
  ```

  ### 3.6 Core de Noticias y Eventos (`news_events`)

  ```typescript
  PASO 10: Analizar Noticias, Reportes y Eventos PrÃ³ximos

    â”œâ”€ Ingerir noticias financieras en tiempo real del instrumento
    â”œâ”€ Clasificar sentimiento y relevancia
    â”œâ”€ Detectar earnings, guidance, dividendos, splits y eventos macro
    â”œâ”€ Evaluar riesgo de evento dentro de la ventana configurada
    â””â”€ Emitir sesgo BUY/SELL/HOLD y nivel de riesgo

  SALIDA ESTÃNDAR DEL CORE:
  â”œâ”€ side: BUY | SELL | HOLD
  â”œâ”€ confidence: number
  â”œâ”€ score: number
  â”œâ”€ sentiment: bullish | bearish | neutral
  â”œâ”€ nextRelevantEvents: object[]
  â””â”€ reasons: string[]
  ```

  ### 3.7 Core Fundamental y Ranking Diario (`fundamentals` + `opportunity_ranking`)

  ```typescript
  PASO 11: Analizar Estado Actual de la Empresa

    FUNDAMENTALES:
    â”œâ”€ Revisar revenue growth, EPS, mÃ¡rgenes y guidance
    â”œâ”€ Revisar valuaciÃ³n relativa si la fuente lo permite
    â”œâ”€ Detectar earnings surprise y revisiones de analistas
    â””â”€ Emitir bias de calidad/contexto para el instrumento

    RANKING DIARIO DE OPORTUNIDADES:
    â”œâ”€ Evaluar universo definido por el usuario (watchlist, sectores, ETFs, etc.)
    â”œâ”€ Calcular opportunityScore por instrumento
    â”œâ”€ Clasificar mejores candidatos BUY, SELL, WATCH y AVOID
    â””â”€ Ordenar de mayor a menor prioridad diaria

  SALIDA ESTÃNDAR DEL RANKING:
  â”œâ”€ symbol: string
  â”œâ”€ priorityRank: number
  â”œâ”€ opportunityScore: number
  â”œâ”€ recommendedAction: BUY | SELL | WATCH | AVOID
  â”œâ”€ whyNow: string[]
  â”œâ”€ whyNot: string[]
  â””â”€ nextRelevantEvent: object | null
  ```

  ### 3.8 Core de Confluencia (`confluence_engine`)

  ```typescript
  PASO 12: Generar SeÃ±al Combinada por SÃ­mbolo (usando Estrategia Activa)

    ALGORITMO DE CONFLUENCIA (dinÃ¡mico segÃºn estrategia seleccionada):
    â”œâ”€ Obtener estrategia activa del settingsStore
    â”œâ”€ Filtrar: solo considerar los cores habilitados en la estrategia
    â”œâ”€ Tomar la salida estandarizada de cada core activo
    â”œâ”€ Calcular scores parciales:
    â”‚   technicalScore
    â”‚   structureScore
    â”‚   institutionalScore
    â”‚   newsScore
    â”‚   eventRiskScore
    â”‚   fundamentalScore
    â”‚   aiScore
    â”œâ”€ Combinar por pesos configurados
    â”œâ”€ Separar el anÃ¡lisis de BUY y SELL para evitar ambigÃ¼edad
    â”œâ”€ Detectar coincidencias obligatorias y conflictos entre cores
    â”œâ”€ Calcular scoreFinal y confidenceFinal
    â””â”€ Emitir evento: SIGNAL_GENERATED(symbol, signal, confidence, selectedCores, strategyId)

  REGLAS:
  â”œâ”€ Si 2 o mÃ¡s cores seleccionados coinciden en BUY, generar BUY candidate
  â”œâ”€ Si 2 o mÃ¡s cores seleccionados coinciden en SELL, generar SELL candidate
  â”œâ”€ Si hay conflicto fuerte entre cores, clasificar como HOLD o WATCH
  â””â”€ La estrategia puede definir requisitos mÃ­nimos por core
  ```

  ### 3.9 Core de Sugerencia IA (`ai_advisor`)

  ```typescript
  PASO 13: ConfirmaciÃ³n y Sugerencia por IA (Claude API)

  â”œâ”€ Trigger: cuando signal = BUY o SELL con confidence â‰¥ minConfidenceThreshold
â”œâ”€ Construir prompt con:
â”‚   - Symbol, timeframe, precio actual
  â”‚   - Estrategia activa y sus parÃ¡metros
  â”‚   - Resumen de todos los cores activos con sus valores exactos
  â”‚   - Noticias, eventos y fundamentales relevantes
  â”‚   - Contexto del mercado general (SPY trend)
â”‚   - ParÃ¡metros de riesgo configurados
â”œâ”€ Solicitar a Claude:
â”‚   { confirmed: boolean, confidence_adjustment: number,
â”‚     reasoning: string, risk_notes: string,
  â”‚     suggested_entry: number, suggested_stop: number,
  â”‚     suggested_target: number, preferred_strategy: string[] }
  â””â”€ Combinar: confidence_final = (signal_confidence + ai_confidence) / 2
```

  ### 3.10 Core de Estrategias y Cadena de Opciones (`strategy_engine`)

  ```typescript
  PASO 14: Priorizar Estrategias para la SituaciÃ³n Actual

    â”œâ”€ Recibir seÃ±al final del core de confluencia
    â”œâ”€ Recibir sesgo de IA y contexto de riesgo
    â”œâ”€ Analizar cadena de opciones (DTE, IV, delta, liquidez, spread)
    â”œâ”€ Evaluar quÃ© estrategia aplica mejor:
    â”‚   long_call, long_put, bull_call_spread, bear_put_spread,
    â”‚   covered_call, protective_put, iron_condor, straddle, strangle
    â”œâ”€ Ordenar estrategias de mayor a menor prioridad
    â””â”€ Proponer la mejor implementaciÃ³n posible segÃºn el contexto actual

  SALIDA:
  â”œâ”€ rankedStrategies: object[]
  â”œâ”€ preferredContracts: object[]
  â”œâ”€ recommendedExecutionType: CALL | PUT | STOCK | NO_TRADE
  â””â”€ reasons: string[]
  ```

  ### 3.11 GestiÃ³n de Ã“rdenes (`order_manager`)

```typescript
  PASO 15: Preparar Orden (cuando trader aprueba seÃ±al)
â”œâ”€ Calcular tamaÃ±o de posiciÃ³n:
â”‚   position_size = (account_balance * max_position_size_pct) / entry_price
â”œâ”€ Aplicar reglas de riesgo:
â”‚   - Verificar que daily_loss no supere lÃ­mite
â”‚   - Verificar que concurrent_positions < mÃ¡ximo
â”‚   - Verificar que buying_power es suficiente
â”œâ”€ Construir orden:
â”‚   { symbol, action: BUY/SELL, quantity, orderType: LIMIT/MARKET,
â”‚     limitPrice, stopLoss, takeProfit, timeInForce: DAY,
â”‚     assetType: STOCK | OPTION, strategyId, contractSelection }
â””â”€ Mostrar confirmaciÃ³n al trader (modal de revisiÃ³n)

PASO 16: Ejecutar Orden (tras confirmaciÃ³n explÃ­cita del trader)
â”œâ”€ Enviar orden al broker activo (IBKR o Alpaca)
â”œâ”€ Monitorear estado: PENDING â†’ FILLED / PARTIAL / CANCELLED
â”œâ”€ Registrar en historial local: timestamp, symbol, side, qty, price, P&L
â”œâ”€ Actualizar posiciones abiertas en store
â””â”€ Emitir alerta: notificaciÃ³n visual + sonido (configurable)

PASO 17: Monitoreo de Posiciones Abiertas
â”œâ”€ Por cada posiciÃ³n abierta, verificar cada minuto:
â”‚   - Si precio alcanzÃ³ stop loss â†’ alertar para cerrar
â”‚   - Si precio alcanzÃ³ take profit â†’ alertar para cerrar
â”‚   - Si seÃ±al original se revirtiÃ³ â†’ alertar como advertencia
â””â”€ Emitir evento: POSITION_ALERT(symbol, type, currentPrice, targetPrice)
```

### 3.12 Sistema de Alertas (`alerts`)

```typescript
PASO 18: Gestionar Alertas
â”œâ”€ Tipos de alerta:
â”‚   SIGNAL_HIGH_CONFIDENCE  â†’ popup + sonido + log (confidence â‰¥ 75%)
â”‚   SIGNAL_MEDIUM           â†’ badge en UI + log (confidence 50-74%)
â”‚   DAILY_OPPORTUNITY       â†’ ranking diario actualizado
â”‚   EVENT_RISK              â†’ earnings / macro evento cercano
â”‚   POSITION_STOP_LOSS      â†’ popup urgente + sonido
â”‚   POSITION_TAKE_PROFIT    â†’ popup + sonido
â”‚   CONNECTION_LOST         â†’ banner persistente
â”‚   AI_CONFIRMATION         â†’ integrado en tarjeta de seÃ±al
â”œâ”€ Canales de entrega: UI (siempre) + Email (configurable)
â””â”€ Email de notificaciones: ojosdragon@gmail.com (configurable en .env)
    Variable: ALERT_EMAIL=ojosdragon@gmail.com
```

---

## 4. Salida (Output)

### 4.1 Dashboard Principal (UI)

```
ðŸ“Š LAYOUT PRINCIPAL (Dark Theme â€” Inspirado en plataformas profesionales)

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ HEADER                                                                        â”‚
â”‚ ðŸ”´ Logo  â”‚  Market: OPEN â— NYSE 09:32  â”‚  Balance: $54,320  â”‚  IBKR â— LIVE  â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  WATCHLIST / SCANNER    â”‚  TOOLBAR                                            â”‚
â”‚  [ðŸ” Buscar sÃ­mbolo]    â”‚  [Estrategia: Full Confluence â–¼] [âš™ï¸] [ðŸ’¾]         â”‚
â”‚  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€  â”‚  TF: [1m][5m][15mâœ“][1h][4h][1D][1W][1M][1Y]       â”‚
â”‚  TOP BUY #1 NVDA  91   â”‚ â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€  â”‚
â”‚  TOP BUY #2 META  87   â”‚  CHART PANEL (TradingView Lightweight Charts)       â”‚
â”‚  TOP SELL #1 TSLA 84   â”‚                                                     â”‚
â”‚  WATCH     AAPL   73   â”‚                                                     â”‚
â”‚  SPY   $589.40  â†‘2.1%  â”‚                                                     â”‚
â”‚  QQQ   $478.22  â†‘1.8%  â”‚                                                     â”‚
â”‚  AAPL  $224.10  â†“0.3%  â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”  â”‚
â”‚  TSLA  $312.55  â†‘4.2%  â”‚  â”‚  Velas OHLCV + Bollinger Bands overlay       â”‚  â”‚
â”‚  NVDA  $875.20  â†‘3.1%  â”‚  â”‚  + EMA 9 / 21 / 50 overlay                  â”‚  â”‚
â”‚  MSFT  $412.80  â†‘0.9%  â”‚  â”‚                                              â”‚  â”‚
â”‚  AMZN  $198.40  â†‘1.2%  â”‚  â”‚  [Marcadores de seÃ±ales sobre velas:        â”‚  â”‚
â”‚  META  $565.30  â†‘2.7%  â”‚  â”‚   ðŸ”º BUY  ðŸ”» SELL en el punto exacto]      â”‚  â”‚
â”‚  â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€  â”‚  â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤  â”‚
â”‚  [+ Agregar sÃ­mbolo]    â”‚  â”‚  Sub-panel 1: MACD (lÃ­nea + seÃ±al + histo.) â”‚  â”‚
â”‚                         â”‚  â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤  â”‚
â”‚                         â”‚  â”‚  Sub-panel 2: RSI (lÃ­nea + zonas 30/70)     â”‚  â”‚
â”‚                         â”‚  â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤  â”‚
â”‚                         â”‚  â”‚  Sub-panel 3: Volume (barras + avg line)    â”‚  â”‚
â”‚                         â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  ðŸ“‹ TABLA DE OPORTUNIDADES Y SEÃ‘ALES â€” ANÃLISIS ULTRA-DETALLADO               â”‚
â”‚  [Filtro: Todas â–¼]  [Solo BUY]  [Solo SELL]  [Alta confianza â‰¥75%]           â”‚
â”‚  [Estrategia: Full Confluence]  [TF: 15m]  [ðŸ”„ Auto-refresh ON]              â”‚
â”‚  [Cores: Tech][Structure][Institutional][News][Fundamental][IA]             â”‚
â”‚                                                                                â”‚
â”‚ â”Œâ”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”â”‚
â”‚ â”‚SÃ­mb. â”‚SeÃ±al â”‚Conf.% â”‚TF     â”‚  DESGLOSE DE INDICADORES Y RAZONES          â”‚â”‚
â”‚ â”œâ”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤â”‚
â”‚ â”‚ SPY  â”‚ðŸŸ¢BUY â”‚ 82%   â”‚ 15m   â”‚ âœ…RSI 28.4 â€” Oversold (umbral <30)          â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âœ…MACD â€” Crossover alcista (MACD cruzÃ³ â†‘    â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚    sobre signal line hace 2 velas)          â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âœ…Bollinger â€” Precio toca lower band ($587) â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âœ…EMA Trend â€” Bullish: EMA9>EMA21>EMA50     â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âœ…Volume â€” 1.8Ã— promedio (confirma fuerza)  â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ ðŸ¤–IA: "SeÃ±al sÃ³lida. Soporte en EMA50.      â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚    Riesgo: reporte Fed maÃ±ana."             â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ ðŸ“ˆEntrada: $589.40 | Stop: $580.50 | T: $607â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ ðŸ“…SeÃ±al anterior: BUY 2026-02-28 (+2.3%)   â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚ [â–¼Historial SPY] [âš¡Ejecutar] [âœ•Descartar]         â”‚â”‚
â”‚ â”œâ”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤â”‚
â”‚ â”‚ AAPL â”‚ðŸ”´SELLâ”‚ 71%   â”‚ 15m   â”‚ âœ…RSI 73.2 â€” Overbought (umbral >70)        â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âœ…MACD â€” Crossover bajista (MACD cruzÃ³ â†“)  â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âœ…Bollinger â€” Precio toca upper band ($226) â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âŒEMA Trend â€” Neutral (no confirmado)       â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âœ…Volume â€” 1.5Ã— promedio (confirma seÃ±al)   â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ ðŸ¤–IA: "Sobrecompra tÃ©cnica confirmada.      â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚    Cuidado: earnings en 3 dÃ­as."            â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ ðŸ“ˆEntrada: $224.10 | Stop: $227.50 | T: $217â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ ðŸ“…Sin seÃ±al previa esta semana             â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚ [â–¼Historial AAPL] [âš¡Ejecutar] [âœ•Descartar]        â”‚â”‚
â”‚ â”œâ”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤â”‚
â”‚ â”‚ QQQ  â”‚âšªHOLDâ”‚ 38%   â”‚ 15m   â”‚ âŒRSI 51.3 â€” Neutral (zona 30-70)           â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âŒMACD â€” Sin crossover activo               â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âŒBollinger â€” Precio en zona media          â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âœ…EMA Trend â€” Bullish (confirmaciÃ³n parcial)â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ âŒVolume â€” Normal (0.9Ã— promedio)           â”‚â”‚
â”‚ â”‚      â”‚      â”‚       â”‚       â”‚ ðŸ“ŠConfluencia insuficiente: 1/5 indicadores â”‚â”‚
â”‚ â””â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜â”‚
â”‚                                                                                â”‚
â”‚  SUB-PANEL: HISTORIAL DE SEÃ‘ALES DEL SÃMBOLO SELECCIONADO (expandible)        â”‚
â”‚  SPY â€” Ãšltimas 10 seÃ±ales:                                                    â”‚
â”‚  â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”   â”‚
â”‚  â”‚ Fecha/Hora   â”‚SeÃ±al â”‚ Conf. â”‚TF      â”‚Resultadoâ”‚ Razones clave        â”‚   â”‚
â”‚  â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤  â”‚
â”‚  â”‚2026-02-28 14:32â”‚ðŸŸ¢BUYâ”‚ 79% â”‚15m     â”‚+2.3% âœ… â”‚RSI+MACD+BB alineados â”‚   â”‚
â”‚  â”‚2026-02-25 10:15â”‚ðŸ”´SELLâ”‚68% â”‚15m     â”‚+1.1% âœ… â”‚RSI overbought+MACDâ†“  â”‚   â”‚
â”‚  â”‚2026-02-20 15:47â”‚ðŸŸ¢BUYâ”‚ 55% â”‚15m     â”‚-0.8% âŒ â”‚RSI+MACD (sin Volume) â”‚   â”‚
â”‚  â”‚ ...           â”‚      â”‚      â”‚        â”‚         â”‚                      â”‚   â”‚
â”‚  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”´â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚  PANEL INFERIOR: POSICIONES ABIERTAS                                           â”‚
â”‚  SPY 5 shares @ $589.40 | P&L: +$14.20 (+0.48%) | Stop: $580.50 | T: $607.00 â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 4.2 Estructura de Datos de la Tabla de SeÃ±ales (Ultra)

```typescript
interface CoreSignalResult {
  coreId: string
  symbol: string
  timeframe: string
  side: "BUY" | "SELL" | "HOLD"
  confidence: number
  score: number
  reasons: string[]
  risks: string[]
  timestamp: ISO8601
}

interface OpportunityRankRow {
  symbol: string
  priorityRank: number
  opportunityScore: number
  recommendedAction: "BUY" | "SELL" | "WATCH" | "AVOID"
  whyNow: string[]
  whyNot: string[]
  nextRelevantEvent: string | null
}

// Estructura completa de cada fila de la tabla de seÃ±ales enriquecida
interface SignalTableRow {
  // â”€â”€ IDENTIFICACIÃ“N â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  id:           string           // UUID de la seÃ±al
  symbol:       string           // "SPY"
  timestamp:    ISO8601          // CuÃ¡ndo se generÃ³ la seÃ±al
  timeframe:    string           // "15m"
  strategyId:   string           // ID de la estrategia usada
  strategyName: string           // "Full Confluence"

  // â”€â”€ CLASIFICACIÃ“N DE SEÃ‘AL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  signal:       "BUY" | "SELL" | "HOLD"
  confidence:   number           // 0-100 %
  score:        number           // score numÃ©rico crudo
  scoreMax:     number           // score mÃ¡ximo posible con esta estrategia

  // â”€â”€ PRECIO AL MOMENTO DE LA SEÃ‘AL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  priceAtSignal: number
  bid:           number
  ask:           number
  volume:        number

  // â”€â”€ DESGLOSE POR CORE (el corazÃ³n de la tabla) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  selectedCores: string[]
  coreResults: CoreSignalResult[]

  // â”€â”€ DESGLOSE POR INDICADOR (cuando aplica) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  indicators: {
    rsi: {
      active:     boolean        // Â¿estaba activo en la estrategia?
      value:      number         // 28.4
      threshold:  { oversold: 30, overbought: 70 }
      signal:     "oversold" | "neutral" | "overbought"
      aligned:    boolean        // Â¿contribuye a la seÃ±al principal?
      score:      number         // puntos aportados (+1 / 0 / -1 Ã— peso)
      reason:     string         // "RSI 28.4 â€” Por debajo del umbral de sobreventa (30)"
    }
    macd: {
      active:     boolean
      macdLine:   number         // 1.23
      signalLine: number         // 0.98
      histogram:  number         // 0.25
      crossover:  "bullish" | "bearish" | null
      candlesAgo: number         // crossover ocurriÃ³ hace N velas
      aligned:    boolean
      score:      number
      reason:     string         // "MACD cruzÃ³ al alza sobre la lÃ­nea de seÃ±al hace 2 velas"
    }
    bollinger: {
      active:     boolean
      upper:      number         // 601.20
      middle:     number         // 589.40
      lower:      number         // 577.60
      bandwidth:  number         // % de amplitud
      percentB:   number         // 0.03 (precio cerca del lower)
      touch:      "upper" | "lower" | "middle" | "none"
      aligned:    boolean
      score:      number
      reason:     string         // "Precio ($587.10) tocando la banda inferior ($577.60)"
    }
    ema: {
      active:     boolean
      ema9:       number
      ema21:      number
      ema50:      number
      trend:      "bullish" | "bearish" | "sideways"
      aligned:    boolean
      score:      number
      reason:     string         // "EMA9 (591) > EMA21 (588) > EMA50 (582) â€” Tendencia alcista"
    }
    atr: {
      active:     boolean
      value:      number         // 3.20
      volatility: "high" | "medium" | "low"
      suggestedStop: number      // precio sugerido de stop loss basado en ATR
      reason:     string         // "ATR 3.20 â†’ stop sugerido a 2Ã—ATR = $6.40 bajo entrada"
    }
    volume: {
      active:        boolean
      current:       number
      average20:     number
      ratio:         number      // 1.8 (1.8Ã— el promedio)
      signal:        "high" | "normal" | "low"
      aligned:       boolean
      score:         number
      reason:        string      // "Volumen actual (2.1M) es 1.8Ã— el promedio de 20 perÃ­odos (1.17M)"
    }
  }

  technicalStructure?: {
    supportZones: object[]
    resistanceZones: object[]
    trendBias: object
  }

  institutionalFlow?: {
    events: object[]
  }

  newsEvents?: {
    sentiment: "bullish" | "bearish" | "neutral"
    catalysts: object[]
    eventRiskLevel: "low" | "medium" | "high"
  }

  fundamentals?: {
    earnings: object
    growth: object
    valuation: object
  }

  // â”€â”€ CONFIRMACIÃ“N IA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  aiConfirmation: {
    confirmed:           boolean
    confidenceAdjustment: number  // ajuste al % de confianza (-10 a +10)
    reasoning:           string   // texto completo del anÃ¡lisis de Claude
    riskNotes:           string   // advertencias especÃ­ficas
    availableAt:         ISO8601 | null
    error:               string | null  // si fallÃ³ la API
  }

  // â”€â”€ PARÃMETROS SUGERIDOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  suggested: {
    entry:         number        // $589.40
    stopLoss:      number        // $580.50
    takeProfit:    number        // $607.00
    riskReward:    number        // 2.0
    stopLossPct:   number        // -1.5%
    takeProfitPct: number        // +3.0%
    positionSize:  number        // 5 (shares calculadas por riesgo)
    capitalRequired: number      // $2,947.00
  }

  // â”€â”€ OPCIONES RELACIONADAS (si aplica) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  strategyRanking?: {
    id: string
    name: string
    priority: number
    score: number
    reason: string
  }[]

  relatedOptions?: {
    type:        "CALL" | "PUT"
    strike:      number
    expiration:  string
    premium:     number
    iv:          number          // Implied Volatility %
    delta:       number
    suggestion:  string          // "SPY 590 CALL â€” bajo IV (18%), dentro del DTE preferido"
  }[]

  // â”€â”€ HISTORIAL DEL SÃMBOLO â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  symbolHistory: {
    totalSignals:    number       // total de seÃ±ales generadas para este sÃ­mbolo
    winRate:         number       // % de seÃ±ales que resultaron ganadoras
    avgReturn:       number       // retorno promedio por seÃ±al
    lastSignals: {
      timestamp:    ISO8601
      signal:       "BUY" | "SELL"
      confidence:   number
      timeframe:    string
      result:       number | null  // % de retorno (null si aÃºn abierta o sin seguimiento)
      resultLabel:  "win" | "loss" | "open" | "unknown"
    }[]                           // Ãºltimas 10 seÃ±ales
  }

  // â”€â”€ ESTADO EN LA TABLA â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  status:     "active" | "executed" | "dismissed" | "expired"
  expiresAt:  ISO8601              // seÃ±al expira si no se actÃºa en N horas
}
```

### 4.3 Modal de SeÃ±al Detallada (al hacer click en una fila)

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ ðŸŸ¢ BUY SIGNAL â€” SPY Â· 15m Â· Full Confluence            Conf: 82%    â”‚
â”‚ Generada: 2026-03-04 09:47:23 EST    Expira en: 47 min              â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ DESGLOSE DE INDICADORES                                               â”‚
â”‚                                                                       â”‚
â”‚ âœ… RSI(14): 28.4                                                      â”‚
â”‚    Por debajo del umbral de sobreventa (30). HistÃ³ricamente,         â”‚
â”‚    este nivel en SPY ha precedido rebotes de +1.5% en promedio.      â”‚
â”‚                                                                       â”‚
â”‚ âœ… MACD(12,26,9): Crossover alcista                                   â”‚
â”‚    La lÃ­nea MACD (1.23) cruzÃ³ sobre la lÃ­nea de seÃ±al (0.98)        â”‚
â”‚    hace 2 velas. Histograma positivo y en expansiÃ³n (+0.25).         â”‚
â”‚                                                                       â”‚
â”‚ âœ… Bollinger Bands(20,2): Precio en lower band                        â”‚
â”‚    Precio actual ($587.10) tocando la banda inferior ($577.60).      â”‚
â”‚    %B = 0.03 (precio en percentil 3 del canal). Squeeze previo.     â”‚
â”‚                                                                       â”‚
â”‚ âœ… EMA Trend: Alcista (EMA9 > EMA21 > EMA50)                         â”‚
â”‚    EMA9: $591.20 Â· EMA21: $588.40 Â· EMA50: $582.10                  â”‚
â”‚    Estructura de tendencia alcista intacta.                          â”‚
â”‚                                                                       â”‚
â”‚ âœ… Volume: 1.8Ã— promedio (2.1M vs avg 1.17M)                         â”‚
â”‚    Volumen significativamente por encima del promedio de 20 velas.   â”‚
â”‚    Confirma presiÃ³n compradora detrÃ¡s del movimiento.                â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ ðŸ¤– CONFIRMACIÃ“N IA (Claude)                           âœ… Confirmada  â”‚
â”‚                                                                       â”‚
â”‚ "SeÃ±al tÃ©cnicamente sÃ³lida con 5/5 indicadores alineados en 15m.    â”‚
â”‚  El RSI en zona de sobreventa combinado con crossover MACD bullish   â”‚
â”‚  es una de las confluencias mÃ¡s confiables histÃ³ricamente en SPY.   â”‚
â”‚  EMA50 actÃºa como soporte dinÃ¡mico en $582. El volumen elevado      â”‚
â”‚  sugiere participaciÃ³n institucional en este nivel.                  â”‚
â”‚                                                                       â”‚
â”‚  âš ï¸ Riesgo: Reporte de empleo (NFP) maÃ±ana 8:30 AM EST. Considerar  â”‚
â”‚  reducir tamaÃ±o de posiciÃ³n al 50% o usar opciones para limitar     â”‚
â”‚  exposiciÃ³n al evento macro."                                        â”‚
â”‚                                         Ajuste confianza: +5% â†’ 87%â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ PARÃMETROS DE OPERACIÃ“N SUGERIDOS                                    â”‚
â”‚                                                                       â”‚
â”‚  Entrada:      $589.40     Stop Loss:   $580.50  (-1.5% Â· 2Ã—ATR)   â”‚
â”‚  Target:       $607.00     R/R Ratio:   2.0 : 1                     â”‚
â”‚  PosiciÃ³n:     5 shares    Capital:     $2,947.00  (5% portafolio)  â”‚
â”‚                                                                       â”‚
â”‚  Tipo orden:  [LIMIT â–¼]    Precio lÃ­mite: [$589.40]                 â”‚
â”‚  TIF:         [DAY  â–¼]                                               â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ OPCIONES RELACIONADAS                                                 â”‚
â”‚  SPY 590 CALL Â· Exp 21-Mar (17 DTE) Â· Prima: $3.20 Â· IV: 18% (bajo)â”‚
â”‚  SPY 585 CALL Â· Exp 21-Mar (17 DTE) Â· Prima: $5.10 Â· IV: 19%       â”‚
â”‚  Delta: 0.52 Â· Gamma: 0.08 Â· Theta: -0.18 Â· Vega: 0.31            â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚ HISTORIAL SPY (Ãºltimas 5 seÃ±ales con esta estrategia)               â”‚
â”‚  2026-02-28 14:32 ðŸŸ¢BUY 79%  â†’ +2.3% âœ… (cerrada)                  â”‚
â”‚  2026-02-25 10:15 ðŸ”´SELL 68% â†’ +1.1% âœ… (cerrada)                  â”‚
â”‚  2026-02-20 15:47 ðŸŸ¢BUY 55%  â†’ -0.8% âŒ (cerrada)                  â”‚
â”‚  Win Rate estrategia en SPY: 67% (8/12 seÃ±ales) Â· Avg: +1.4%       â”‚
â”œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¤
â”‚           [âœ• DESCARTAR]    [ðŸ“‹ COPIAR]    [âš¡ EJECUTAR ORDEN]       â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 4.4 Logs y Persistencia

```
ðŸ“ localStorage (browser):
â”œâ”€ watchlist.json          [Watchlist del usuario]
â”œâ”€ settings.json           [ConfiguraciÃ³n de indicadores y riesgo]
â”œâ”€ strategies.json         [Estrategias personalizadas guardadas (max 20)]
â”œâ”€ active_strategy.json    [ID de la estrategia actualmente seleccionada]
â”œâ”€ trade_history.json      [Historial de operaciones ejecutadas]
â””â”€ signal_log.json         [Log de seÃ±ales generadas (Ãºltimas 500)]

ðŸ“ Variables de entorno (.env):
â”œâ”€ IBKR_HOST, IBKR_PORT, IBKR_CLIENT_ID, IBKR_ACCOUNT_ID
â”œâ”€ ALPACA_API_KEY, ALPACA_SECRET_KEY, ALPACA_BASE_URL
â”œâ”€ VITE_CLAUDE_API_KEY    (Claude API para confirmaciÃ³n de seÃ±ales)
â”œâ”€ ALERT_EMAIL            (Email para notificaciones crÃ­ticas)
â””â”€ ACTIVE_BROKER          (ibkr | alpaca)
```

### 4.5 Historial de Operaciones

```typescript
// Estructura de cada trade registrado
{
  id: string,              // UUID
  timestamp: ISO8601,      // Fecha/hora de ejecuciÃ³n
  symbol: string,          // "SPY"
  side: "BUY" | "SELL",
  quantity: number,
  entryPrice: number,
  exitPrice: number | null, // null si posiciÃ³n abierta
  stopLoss: number,
  takeProfit: number,
  status: "OPEN" | "CLOSED" | "CANCELLED",
  pnl: number | null,      // P&L realizado (si cerrada)
  pnlPct: number | null,
  signalConfidence: number, // % de confianza de la seÃ±al original
  aiReasoning: string,     // Razonamiento de Claude
  indicators: { rsi, macd, bb, ema, volume }, // Snapshot al momento de la seÃ±al
  broker: "ibkr" | "alpaca",
  orderId: string          // ID de orden en el broker
}
```

---

## 5. Requisitos TÃ©cnicos

### 5.1 Stack TecnolÃ³gico

```yaml
Frontend Framework:   React 18 + TypeScript 5 + Vite 5
UI Styling:           TailwindCSS 3 (dark theme por defecto)
Estado Global:        Zustand 4
GrÃ¡ficas Financieras: TradingView Lightweight Charts v4
Componentes UI:       shadcn/ui (base de componentes)
Iconos:               lucide-react
HTTP Client:          axios
WebSocket:            native browser WebSocket API
ValidaciÃ³n:           zod (schemas de datos)

Brokers:
  Primario:    @stoqey/ib (Interactive Brokers TWS API)
  Secundario:  @alpacahq/alpaca-trade-api (paper trading)

Indicadores TÃ©cnicos:
  LibrerÃ­a:    technicalindicators (npm)
  Alternativa: tulind (bindings C, mÃ¡s rÃ¡pido para cÃ¡lculos masivos)

IA / AnÃ¡lisis:
  Claude API:  @anthropic-ai/sdk
  Model:       claude-sonnet-4-20250514

Notificaciones Email:
  LibrerÃ­a:    nodemailer (vÃ­a backend proxy) | EmailJS (directo cliente)

Testing:
  Unit:        Vitest + Testing Library
  E2E:         Playwright
  Benchmark:   ComparaciÃ³n vs TradingView Pine Script

Linting/Format: ESLint + Prettier
```

### 5.2 Variables de Entorno (.env)

```bash
# â”€â”€ BROKER: Interactive Brokers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
IBKR_HOST=127.0.0.1
IBKR_PORT=7497
IBKR_CLIENT_ID=1
IBKR_ACCOUNT_ID=<tu_cuenta_ibkr>

# â”€â”€ BROKER: Alpaca (Paper Trading / Desarrollo) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
ALPACA_API_KEY=<key>
ALPACA_SECRET_KEY=<secret>
ALPACA_BASE_URL=https://paper-api.alpaca.markets
ALPACA_DATA_URL=https://data.alpaca.markets

# â”€â”€ IA: Claude API â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
VITE_CLAUDE_API_KEY=<anthropic_api_key>
VITE_CLAUDE_MODEL=claude-sonnet-4-20250514

# â”€â”€ ALERTAS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
ALERT_EMAIL=ojosdragon@gmail.com
EMAILJS_SERVICE_ID=<service_id>
EMAILJS_TEMPLATE_ID=<template_id>
EMAILJS_PUBLIC_KEY=<public_key>

# â”€â”€ CONFIGURACIÃ“N GENERAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
ACTIVE_BROKER=alpaca                # ibkr | alpaca
VITE_APP_ENV=development            # development | production
VITE_APP_VERSION=1.0.0
```

### 5.3 Versiones de Dependencias

```json
{
  "dependencies": {
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "vite": "^5.2.0",
    "tailwindcss": "^3.4.0",
    "zustand": "^4.5.0",
    "lightweight-charts": "^4.1.0",
    "technicalindicators": "^3.1.0",
    "@anthropic-ai/sdk": "^0.20.0",
    "@stoqey/ib": "^2.0.0",
    "@alpacahq/alpaca-trade-api": "^3.1.0",
    "axios": "^1.6.0",
    "zod": "^3.22.0",
    "lucide-react": "^0.263.0",
    "emailjs-com": "^3.2.0"
  },
  "devDependencies": {
    "vitest": "^1.4.0",
    "@testing-library/react": "^14.2.0",
    "playwright": "^1.43.0",
    "eslint": "^8.57.0",
    "prettier": "^3.2.0"
  }
}
```

### 5.4 Estructura del Proyecto (SRC-First)

```
projects/pwa/pwa_inversions_team5/
â”œâ”€â”€ public/
â”‚   â””â”€â”€ favicon.ico
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ ai_work_flow/                    # MetodologÃ­a AI Skill Development
â”‚   â”‚   â”œâ”€â”€ development/
â”‚   â”‚   â”‚   â”œâ”€â”€ workflow_agents.yaml
â”‚   â”‚   â”‚   â””â”€â”€ README.md
â”‚   â”‚   â”œâ”€â”€ docs/
â”‚   â”‚   â”‚   â””â”€â”€ specs/
â”‚   â”‚   â”‚       â”œâ”€â”€ SPECIFICATION.md     â† Este documento
â”‚   â”‚   â”‚       â””â”€â”€ incremental/
â”‚   â”‚   â”œâ”€â”€ knowledge/
â”‚   â”‚   â”‚   â”œâ”€â”€ remote/
â”‚   â”‚   â”‚   â””â”€â”€ local/
â”‚   â”‚   â””â”€â”€ tickets/
â”‚   â”‚       â”œâ”€â”€ TKT-INVRFIC-001.md
â”‚   â”‚       â””â”€â”€ ...
â”‚   â”‚
â”‚   â”œâ”€â”€ assets/
â”‚   â”‚   â”œâ”€â”€ icons/
â”‚   â”‚   â””â”€â”€ images/
â”‚   â”‚
â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â””â”€â”€ ui/
â”‚   â”‚       â”œâ”€â”€ Badge.tsx
â”‚   â”‚       â”œâ”€â”€ Button.tsx
â”‚   â”‚       â”œâ”€â”€ Card.tsx
â”‚   â”‚       â”œâ”€â”€ Modal.tsx
â”‚   â”‚       â”œâ”€â”€ Tooltip.tsx
â”‚   â”‚       â””â”€â”€ index.ts
â”‚   â”‚
â”‚   â”œâ”€â”€ features/
â”‚   â”‚   â”œâ”€â”€ dashboard/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ DashboardLayout.tsx
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ MarketStatusBar.tsx
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ AccountSummary.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ watchlist/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ WatchlistPanel.tsx
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ WatchlistRow.tsx
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ AddSymbolModal.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ useWatchlist.ts
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ strategy/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ StrategySelector.tsx      (dropdown en toolbar)
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ StrategyBuilder.tsx       (modal personalizaciÃ³n)
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ PresetStrategyCard.tsx
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ SaveStrategyModal.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ useStrategy.ts
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ TradingChart.tsx       (TradingView Lightweight Charts)
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ IndicatorPanel.tsx
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ TimeframeSelector.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ useTradingChart.ts
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ signals/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ SignalsTable.tsx            (tabla ultra-detallada)
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ SignalRow.tsx               (fila expandible con desglose)
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ IndicatorBreakdown.tsx      (âœ…/âŒ por indicador con razÃ³n)
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ SignalDetailModal.tsx        (modal de aprobaciÃ³n completo)
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ SignalHistoryPanel.tsx       (historial del sÃ­mbolo)
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ SignalFilters.tsx            (filtros: tipo, confianza, TF)
â”‚   â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ useSignals.ts
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ options-chain/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ OptionsChainTable.tsx
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ GreeksDisplay.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ useOptionsChain.ts
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ positions/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ PositionsPanel.tsx
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ PositionRow.tsx
â”‚   â”‚   â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ usePositions.ts
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â”œâ”€â”€ trade-history/
â”‚   â”‚   â”‚   â”œâ”€â”€ components/
â”‚   â”‚   â”‚   â”‚   â””â”€â”€ TradeHistoryTable.tsx
â”‚   â”‚   â”‚   â””â”€â”€ index.ts
â”‚   â”‚   â”‚
â”‚   â”‚   â””â”€â”€ settings/
â”‚   â”‚       â”œâ”€â”€ components/
â”‚   â”‚       â”‚   â”œâ”€â”€ SettingsPage.tsx
â”‚   â”‚       â”‚   â”œâ”€â”€ WatchlistConfig.tsx
â”‚   â”‚       â”‚   â”œâ”€â”€ SignalConfig.tsx
â”‚   â”‚       â”‚   â”œâ”€â”€ RiskConfig.tsx
â”‚   â”‚       â”‚   â””â”€â”€ BrokerConfig.tsx
â”‚   â”‚       â””â”€â”€ index.ts
â”‚   â”‚
â”‚   â”œâ”€â”€ hooks/
â”‚   â”‚   â”œâ”€â”€ useBrokerConnection.ts
â”‚   â”‚   â”œâ”€â”€ useMarketData.ts
â”‚   â”‚   â””â”€â”€ useAlerts.ts
â”‚   â”‚
â”‚   â”œâ”€â”€ services/
â”‚   â”‚   â”œâ”€â”€ broker/
â”‚   â”‚   â”‚   â”œâ”€â”€ ibkr.connector.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ alpaca.connector.ts
â”‚   â”‚   â”‚   â””â”€â”€ broker.interface.ts      (interface comÃºn IBroker)
â”‚   â”‚   â”œâ”€â”€ market-data/
â”‚   â”‚   â”‚   â”œâ”€â”€ marketData.service.ts
â”‚   â”‚   â”‚   â””â”€â”€ candles.service.ts
â”‚   â”‚   â”œâ”€â”€ indicators/
â”‚   â”‚   â”‚   â”œâ”€â”€ rsi.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ macd.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ bollinger.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ ema.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ atr.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ volume.service.ts
â”‚   â”‚   â”‚   â””â”€â”€ indicators.service.ts
â”‚   â”‚   â”œâ”€â”€ structure/
â”‚   â”‚   â”‚   â”œâ”€â”€ supportResistance.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ trendBias.service.ts
â”‚   â”‚   â”‚   â””â”€â”€ technicalStructure.service.ts
â”‚   â”‚   â”œâ”€â”€ institutional/
â”‚   â”‚   â”‚   â”œâ”€â”€ unusualOptions.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ openInterest.service.ts
â”‚   â”‚   â”‚   â””â”€â”€ institutionalFlow.service.ts
â”‚   â”‚   â”œâ”€â”€ news/
â”‚   â”‚   â”‚   â”œâ”€â”€ newsFeed.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ eventsCalendar.service.ts
â”‚   â”‚   â”‚   â””â”€â”€ newsEvents.service.ts
â”‚   â”‚   â”œâ”€â”€ fundamentals/
â”‚   â”‚   â”‚   â”œâ”€â”€ earnings.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ valuation.service.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ companySnapshot.service.ts
â”‚   â”‚   â”‚   â””â”€â”€ fundamentals.service.ts
â”‚   â”‚   â”œâ”€â”€ opportunities/
â”‚   â”‚   â”‚   â””â”€â”€ opportunityRanking.service.ts
â”‚   â”‚   â”œâ”€â”€ confluence/
â”‚   â”‚   â”‚   â””â”€â”€ confluenceEngine.service.ts
â”‚   â”‚   â”œâ”€â”€ ai/
â”‚   â”‚   â”‚   â””â”€â”€ aiAdvisor.service.ts
â”‚   â”‚   â”œâ”€â”€ strategies/
â”‚   â”‚   â”‚   â”œâ”€â”€ strategyEngine.service.ts
â”‚   â”‚   â”‚   â””â”€â”€ optionsStrategySelector.service.ts
â”‚   â”‚   â”œâ”€â”€ orders/
â”‚   â”‚   â”‚   â””â”€â”€ orderManager.service.ts
â”‚   â”‚   â””â”€â”€ alerts/
â”‚   â”‚       â””â”€â”€ alerts.service.ts
â”‚   â”‚
â”‚   â”œâ”€â”€ store/
â”‚   â”‚   â”œâ”€â”€ brokerStore.ts        (conexiÃ³n, cuenta, estado broker)
â”‚   â”‚   â”œâ”€â”€ marketDataStore.ts    (quotes, candles por sÃ­mbolo/timeframe)
â”‚   â”‚   â”œâ”€â”€ opportunityStore.ts   (ranking diario, top movers, watchlist priorizada)
â”‚   â”‚   â”œâ”€â”€ signalsStore.ts       (seÃ±ales activas, historial Ãºltimas 500)
â”‚   â”‚   â”œâ”€â”€ strategyStore.ts      (estrategia activa, presets, personalizadas)
â”‚   â”‚   â”œâ”€â”€ positionsStore.ts     (posiciones abiertas, historial)
â”‚   â”‚   â””â”€â”€ settingsStore.ts      (configuraciÃ³n del usuario)
â”‚   â”‚
â”‚   â”œâ”€â”€ types/
â”‚   â”‚   â”œâ”€â”€ broker.types.ts       (Account, Order, Position)
â”‚   â”‚   â”œâ”€â”€ market.types.ts       (Quote, Candle, OHLCV, Timeframe)
â”‚   â”‚   â”œâ”€â”€ indicators.types.ts   (RSIResult, MACDResult, BBResult, etc.)
â”‚   â”‚   â”œâ”€â”€ core.types.ts         (CoreSignalResult, OpportunityRankRow)
â”‚   â”‚   â”œâ”€â”€ signal.types.ts       (Signal, SignalTableRow, IndicatorBreakdown)
â”‚   â”‚   â”œâ”€â”€ strategy.types.ts     (Strategy, StrategyPreset, IndicatorConfig)
â”‚   â”‚   â”œâ”€â”€ fundamentals.types.ts (EarningsSnapshot, ValuationSummary)
â”‚   â”‚   â”œâ”€â”€ news.types.ts         (NewsItem, EventRisk, Catalyst)
â”‚   â”‚   â””â”€â”€ options.types.ts      (OptionChain, Greeks, Strike)
â”‚   â”‚
â”‚   â”œâ”€â”€ utils/
â”‚   â”‚   â”œâ”€â”€ formatters.ts         (formatPrice, formatPct, formatDate)
â”‚   â”‚   â”œâ”€â”€ riskCalculator.ts     (positionSize, stopLoss, R/R)
â”‚   â”‚   â””â”€â”€ candleUtils.ts        (normalizar datos OHLCV)
â”‚   â”‚
â”‚   â”œâ”€â”€ styles/
â”‚   â”‚   â””â”€â”€ globals.css           (TailwindCSS + dark theme vars)
â”‚   â”‚
â”‚   â”œâ”€â”€ App.tsx
â”‚   â”œâ”€â”€ main.tsx
â”‚   â””â”€â”€ vite-env.d.ts
â”‚
â”œâ”€â”€ tests/
â”‚   â”œâ”€â”€ unit/
â”‚   â”‚   â”œâ”€â”€ indicators/
â”‚   â”‚   â”‚   â”œâ”€â”€ rsi.test.ts
â”‚   â”‚   â”‚   â”œâ”€â”€ macd.test.ts
â”‚   â”‚   â”‚   â””â”€â”€ bollinger.test.ts
â”‚   â”‚   â””â”€â”€ signals/
â”‚   â”‚       â””â”€â”€ signalDetector.test.ts
â”‚   â””â”€â”€ e2e/
â”‚       â””â”€â”€ dashboard.spec.ts
â”‚
â”œâ”€â”€ .env.example
â”œâ”€â”€ .env
â”œâ”€â”€ index.html
â”œâ”€â”€ package.json
â”œâ”€â”€ tsconfig.json
â”œâ”€â”€ vite.config.ts
â”œâ”€â”€ tailwind.config.ts
â””â”€â”€ vitest.config.ts
```

---

## 6. Skills y Agentes

### 6.1 Skills Necesarios

```
ðŸŽ¯ SKILLS GLOBALES (Reutilizables en otros proyectos):
â”œâ”€ broker_connector          ConexiÃ³n a brokers financieros (IBKR, Alpaca)
â”œâ”€ market_data_feed          Streaming de datos OHLCV en tiempo real (9 timeframes)
â”œâ”€ technical_indicators      CÃ¡lculo de RSI, MACD, BB, EMA, ATR, Volume
â”œâ”€ technical_structure       Soportes, resistencias, tendencias y cambios de estructura
â”œâ”€ institutional_flow        DetecciÃ³n de actividad institucional y unusual flow
â”œâ”€ news_events_analyzer      Noticias en tiempo real y eventos corporativos/macro
â”œâ”€ fundamentals_analyzer     Snapshot financiero, earnings, guidance y valuaciÃ³n
â”œâ”€ opportunity_ranking       Ranking diario de empresas/instrumentos prioritarios
â”œâ”€ confluence_engine         Motor de coincidencias entre cores activos
â”œâ”€ ai_market_analyzer        ConfirmaciÃ³n de seÃ±ales con Claude API
â”œâ”€ options_chain_reader      Lectura y parsing de cadena de opciones
â””â”€ strategy_recommender      PriorizaciÃ³n de estrategias sobre opciones

ðŸŽ¯ SKILLS LOCALES (EspecÃ­ficos de pwa_inversions_team5):
â”œâ”€ strategy_manager          Sistema de presets + personalizaciÃ³n + guardado
â”œâ”€ opportunity_scanner_ui    Scanner diario de oportunidades
â”œâ”€ signal_table_builder      Tabla ultra-detallada con desglose por indicador
â”œâ”€ risk_calculator           CÃ¡lculo de tamaÃ±o de posiciÃ³n y R/R
â”œâ”€ order_builder             ConstrucciÃ³n de Ã³rdenes con parÃ¡metros de riesgo
â””â”€ trade_logger              Registro y persistencia del historial de operaciones
```

### 6.2 Agentes de Desarrollo

```
ðŸ¤– fic_picoro_agent_orchestrator
   FASE 2.3: Investiga APIs de brokers, fuentes de noticias, fundamentales,
       institutional flow, TradingView Lightweight Charts, Claude API
   FASE 2.4: DiseÃ±a arquitectura por cores, ranking diario y workflow_agents.yaml

ðŸ‘¨â€ðŸ’» fic_goku_agent_dev1
   FASE 3: Implementa los cores, ranking diario, motor de estrategias,
     integraciÃ³n Claude API, servicios de broker y UI/UX completa

ðŸ¥· fic_vegeta_agent_dev2
   FASE 3: Optimiza latencia de feeds, escaneo diario, confluencia,
     audita seguridad de API keys y performance en streams de datos

ðŸ§ª fic_bulma_agent_tester1
   FASE 3: Valida cÃ¡lculos de indicadores vs TradingView, precisiÃ³n de ranking,
     tests de seÃ±ales, noticias, eventos y estrategias con datos conocidos
```

---

## 7. Casos de Prueba (AceptaciÃ³n)

### 7.1 Caso Feliz â€” SeÃ±al BUY de Alta Confianza

**Escenario**: SPY en zona de sobreventa con mÃºltiples indicadores alineados

- [ ] DADO: RSI < 30, MACD crossover bullish, precio en lower Bollinger, EMA trend bullish, volumen alto
- [ ] CUANDO: El motor de seÃ±ales procesa los indicadores
- [ ] ENTONCES:
  - âœ… Score de confluencia â‰¥ +2.0
  - âœ… Confidence â‰¥ 75%
  - âœ… Claude API confirma seÃ±al con reasoning
  - âœ… SeÃ±al aparece en SignalsPanel con badge ðŸŸ¢ BUY
  - âœ… Modal de detalle muestra todos los indicadores y parÃ¡metros sugeridos
  - âœ… Al aprobar, orden se envÃ­a al broker y aparece en Positions

### 7.2 Caso â€” SeÃ±al Rechazada por Baja Confianza

**Escenario**: Solo 1 indicador alineado

- [ ] DADO: Solo RSI < 30, el resto neutral
- [ ] CUANDO: El motor procesa los indicadores
- [ ] ENTONCES:
  - âœ… Score < +2.0
  - âœ… SeÃ±al clasificada como HOLD
  - âœ… No se genera alerta
  - âœ… Estado en watchlist: âšª HOLD

### 7.3 Caso â€” Broker Desconectado

**Escenario**: TWS de IBKR no estÃ¡ activo

- [ ] DADO: IB Gateway no estÃ¡ corriendo
- [ ] CUANDO: La app intenta conectar al iniciar
- [ ] ENTONCES:
  - âœ… Retry automÃ¡tico 3 veces con backoff
  - âœ… Banner de error persistente: "Broker desconectado"
  - âœ… OpciÃ³n de cambiar a Alpaca (paper trading)
  - âœ… Dashboard sigue funcionando en modo lectura (sin datos live)

### 7.4 Caso â€” Sin Datos Suficientes para Indicadores

**Escenario**: SÃ­mbolo reciÃ©n agregado al watchlist, < 50 velas disponibles

- [ ] DADO: SÃ­mbolo con menos de 50 velas histÃ³ricas cargadas
- [ ] CUANDO: Motor de indicadores intenta calcular
- [ ] ENTONCES:
  - âœ… Retorna null con flag "insufficient_data"
  - âœ… UI muestra "Cargando datos..." en lugar de seÃ±al
  - âœ… No genera seÃ±al falsa

### 7.5 Caso â€” Error en Claude API

**Escenario**: La API de Claude no estÃ¡ disponible o hay error de red

- [ ] DADO: Claude API timeout o error 5xx
- [ ] CUANDO: signalDetector intenta confirmaciÃ³n IA
- [ ] ENTONCES:
  - âœ… SeÃ±al se emite sin confirmaciÃ³n IA (flag: ai_confirmed = false)
  - âœ… Modal de seÃ±al muestra advertencia: "Sin confirmaciÃ³n IA disponible"
  - âœ… Trader puede igualmente aprobar o rechazar
  - âœ… Error registrado en log

### 7.6 Caso â€” ValidaciÃ³n de Indicadores vs TradingView

**Escenario de Testing**: Verificar precisiÃ³n de cÃ¡lculos

- [ ] DADO: Dataset histÃ³rico de SPY (Ãºltimos 200 dÃ­as, diario)
- [ ] CUANDO: Se calcula RSI(14), MACD(12,26,9), BB(20,2) con los mismos datos
- [ ] ENTONCES:
  - âœ… RSI final difiere < 0.1% respecto a TradingView Pine Script
  - âœ… MACD line difiere < 0.1%
  - âœ… Bollinger Upper/Lower difieren < 0.1%

---

## 8. Requisitos No Funcionales

### 8.1 Performance

```
- Latencia de actualizaciÃ³n de quotes: < 500ms desde mercado hasta UI
- Tiempo de cÃ¡lculo de indicadores (20 sÃ­mbolos Ã— 9 timeframes): < 500ms
- Tiempo de respuesta de Claude API: < 10 segundos (timeout configurado)
- Render del chart al cambiar sÃ­mbolo: < 300ms
- Throttle de actualizaciones de precios en UI: mÃ¡ximo 2/seg por sÃ­mbolo
```

### 8.2 Seguridad

```
- API keys NUNCA en cÃ³digo fuente ni en repositorio git
- API keys en .env (ignorado en .gitignore)
- IBKR: credenciales manejadas solo en TWS local, nunca en cliente web
- Alpaca keys: acceso solo desde variables de entorno del servidor
- VITE_CLAUDE_API_KEY: prefijo VITE_ expone al cliente â€” usar proxy en producciÃ³n
- .env.example en repositorio con valores de placeholder Ãºnicamente
```

### 8.3 Usabilidad

```
- Dark theme por defecto (estÃ¡ndar en plataformas de trading)
- Responsive: desktop first (mÃ­nimo 1280px), con vista compacta en tablet
- Tiempo de carga inicial: < 3 segundos
- Acceso offline: mostrar Ãºltimos datos en cachÃ©, indicar modo offline
- Atajos de teclado para acciones frecuentes (configurable en v2.0)
```

---

## 9. Tickets de ImplementaciÃ³n (Primera GeneraciÃ³n)

Los siguientes tickets serÃ¡n creados automÃ¡ticamente a partir de esta especificaciÃ³n:

```
TKT-INVRFIC-001: Setup inicial del proyecto (estructura, Vite, deps, .env)
TKT-INVRFIC-002: Implementar broker_connector â€” Alpaca paper trading
TKT-INVRFIC-003: Implementar market_data â€” quotes, velas OHLCV y cadena de opciones
TKT-INVRFIC-004: Implementar technical_indicators â€” RSI, MACD, BB, EMA, ATR, Volume
TKT-INVRFIC-005: Implementar technical_structure â€” soportes, resistencias y tendencias
TKT-INVRFIC-006: Implementar institutional_flow â€” UOA, OI y actividad institucional
TKT-INVRFIC-007: Implementar news_events â€” noticias en tiempo real, earnings y eventos macro
TKT-INVRFIC-008: Implementar fundamentals â€” snapshot financiero, guidance y valuaciÃ³n
TKT-INVRFIC-009: Implementar opportunity_ranking â€” ranking diario de empresas prioritarias
TKT-INVRFIC-010: Implementar strategy_manager â€” presets + selector manual + guardar
TKT-INVRFIC-011: Implementar confluence_engine â€” coincidencias entre cores activos
TKT-INVRFIC-012: Implementar ai_advisor â€” integraciÃ³n Claude API y sugerencia contextual
TKT-INVRFIC-013: Implementar strategy_engine â€” priorizaciÃ³n de estrategias y opciones
TKT-INVRFIC-014: Implementar Dashboard UI principal (scanner + chart + TF selector)
TKT-INVRFIC-015: Implementar SignalsTable ultra-detallada (desglose por core + historial)
TKT-INVRFIC-016: Implementar SignalDetailModal (anÃ¡lisis completo + aprobaciÃ³n de operaciÃ³n)
TKT-INVRFIC-017: Implementar PositionsPanel + order_manager (ejecuciÃ³n de acciones/opciones)
TKT-INVRFIC-018: Implementar alerts_service (notificaciones UI + email)
TKT-INVRFIC-019: Tests unitarios â€” validaciÃ³n indicadores, estructura y ranking diario
TKT-INVRFIC-020: IntegraciÃ³n IBKR TWS API (broker primario â€” post paper-trading)
```

---

## 10. Roadmap: Especificaciones Incrementales Planeadas

Una vez completada la v1.0, las siguientes funcionalidades se especificarÃ¡n en documentos incrementales:

```
SPEC_002: MÃ³dulo de Backtesting de Estrategias
  - Motor de backtesting sobre datos histÃ³ricos (Polygon.io)
  - SimulaciÃ³n de Iron Condor, Straddle, Strangle
  - MÃ©tricas: Sharpe Ratio, Max Drawdown, Win Rate, Profit Factor

SPEC_003: Scanner Avanzado de Flujo Institucional
  - Dark pool prints detection
  - Unusual Options Activity (UOA) scanner
  - Open Interest sweeps y block trades
  - CorrelaciÃ³n con precio, IV y eventos

SPEC_004: MÃ³dulo de Noticias, Eventos y Fundamentales Avanzado
  - IntegraciÃ³n multi-feed de noticias financieras
  - Earnings intelligence y guidance tracker
  - Motor de score fundamental y catalyst heatmap

SPEC_005: MÃ³dulo de Opciones Avanzado
  - Builder visual de estrategias (Iron Condor, Straddle, Butterfly)
  - Simulador de P&L por precio y volatilidad (payoff diagram)
  - Greeks dashboard en tiempo real

SPEC_006: IntegraciÃ³n IBKR Completa
  - MigraciÃ³n de Alpaca paper trading a IBKR como primario
  - Soporte para Ã³rdenes de opciones complejas (multi-leg)
  - Portfolio margin y cÃ¡lculo de margen en tiempo real

SPEC_007: Dashboard de Performance
  - EstadÃ­sticas completas de trading (Win Rate, Avg. Return, etc.)
  - Equity curve y drawdown chart
  - ComparaciÃ³n de performance vs SPY benchmark
```

---

## 11. Preguntas Pendientes (A resolver antes de TKT-001)

### Broker y Cuenta

- [ ] **Â¿Tienes una cuenta activa en Interactive Brokers?**
      Si sÃ­: confirmar si usarÃ¡s TWS (port 7497) o IB Gateway (port 4001)
- [ ] **Â¿Tienes una cuenta en Alpaca?**
      Si sÃ­: confirmar si usarÃ¡s paper trading o live trading para desarrollo

### API Keys

- [ ] **Â¿Tienes API Key de Anthropic (Claude)?**
      Necesaria para el servicio de confirmaciÃ³n IA de seÃ±ales
- [ ] **Â¿Tienes cuenta y API Key en Alpaca?**
      Necesaria para el broker de desarrollo

### ConfiguraciÃ³n Inicial

- [ ] **Â¿QuÃ© sÃ­mbolos quieres en la watchlist inicial?**
      Sugerencia: SPY, QQQ, AAPL, TSLA, NVDA, MSFT, AMZN, META
- [ ] **Â¿Quieres comenzar con Alpaca (paper trading) o directo con IBKR?**
      RecomendaciÃ³n: iniciar con Alpaca para desarrollo y testing de seÃ±ales

---

## 12. PrÃ³ximos Pasos

Una vez validada esta especificaciÃ³n:

1. âœ… **Picoro generarÃ¡ automÃ¡ticamente**:
  - Knowledge base inicial (brokers, indicadores, noticias, fundamentales, institucionales y estrategias)
  - `workflow_agents.yaml` con tareas especÃ­ficas por agente
  - `config.yaml` del proyecto con tech stack completo y arquitectura por cores

2. âœ… **Goku implementarÃ¡ ticket por ticket**:
  - TKT-INVRFIC-001: Setup â†’ estructura + Vite + deps + .env
  - TKT-INVRFIC-002 en adelante: core por core

3. âœ… **TÃº validarÃ¡s**:
  - Ranking diario de oportunidades
  - SeÃ±ales contra TradingView (benchmark visual)
  - PrecisiÃ³n de indicadores y estructura con datasets conocidos
  - UX del dashboard de oportunidades y seÃ±ales

4. âœ… **Vegeta y Bulma asegurarÃ¡n**:
   - Latencia de feeds < 500ms
   - CÃ¡lculos de indicadores con < 0.1% de error vs referencia
   - Seguridad de API keys sin exposiciÃ³n en cliente

---

**Esta es la metodologÃ­a real con IA aplicada a inversiones**:  
TÃº especificas el mercado y las reglas, la IA genera la arquitectura y el cÃ³digo, tÃº validas la lÃ³gica financiera y ejecutas con criterio propio.

---

**Ãšltima actualizaciÃ³n**: 2026-03-11  
**Estado**: ðŸŸ¡ En EspecificaciÃ³n â€” Pendiente validaciÃ³n de preguntas SecciÃ³n 11  
**VersiÃ³n**: 1.2.0  
**Cambios v1.2**:
- âœ… Arquitectura por cores independientes dentro del proyecto
- âœ… Core de indicadores, estructura, institucionales, noticias, fundamentales e IA
- âœ… Ranking diario de oportunidades por empresa/instrumento
- âœ… Sistema de confluencia configurable por cores seleccionados por el usuario
- âœ… Estrategias ampliadas con prioridad dinÃ¡mica y sugerencia sobre opciones
- âœ… Scanner diario + tabla enriquecida por core
- âœ… Estructura tÃ©cnica del proyecto alineada con los nuevos cores
- âœ… Tickets TKT-INVRFIC-001 al 020 reorganizados por nÃºcleo funcional
**PrÃ³xima revisiÃ³n**: Tras respuesta a preguntas pendientes â†’ generar TKT-INVRFIC-001

