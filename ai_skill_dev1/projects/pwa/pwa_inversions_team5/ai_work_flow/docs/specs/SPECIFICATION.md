# ESPECIFICACIÓN TÉCNICA

## Proyecto: Plataforma de Inversiones IA - Signals de Trading

**Código del Proyecto**: `pwa_inversions_team5`  
**Ticket Externo**: REQ-INVT5-001 (Referencia interna)  
**Solicitante**: Equipo 5  
**Transacción SAP**: N/A  
**Fecha**: 2026-03-17  
**Estado**: 🟡 En Especificación  

**Nota**: Este es el TEMPLATE. Completa las secciones marcadas con [COMPLETAR].

---

## 1. Visión General

### Contexto
[COMPLETAR: Describe la situación actual del mercado de valores EU y por qué se necesita una plataforma de inversiones IA]

**Situación actual**:
- [COMPLETAR: ¿Cuál es el problema que se quiere resolver?]

### Objetivo
[COMPLETAR: ¿Qué se quiere lograr con esta plataforma?]

**Ejemplo**: Automatizar la detección de señales de compra y venta en opciones de la bolsa EU usando indicadores técnicos (RSI, MACD, Bollinger Bands) y análisis de IA, permitiendo a traders identificar oportunidades en tiempo real.

### Flujo Principal

```
[COMPLETAR: Describe el flujo end-to-end con diagrama ASCII]

Mercado Actual (EUROSTOXX, DAX, etc.)
    ↓ [Feed de datos en tiempo real]
Motor de Análisis (Indicadores + IA)
    ↓ [Cálculo de indicadores + análisis]
Detector de Señales
    ↓ [Señales de compra/venta]
Notificación al Usuario
    ↓ [Alert + recomendación]
Ejecución Manual/Automática
```

### Resultado Esperado

- **Input**: Feed de datos OHLCV en tiempo real de brokers (IBKR, Alpaca)
- **Output**: Señales de compra/venta con confianza >= 75%
- **Frecuencia**: Actualización cada 1-5 minutos (configurable)
- **Usuarios**: Traders retail + profesionales
- **Disponibilidad**: 24/7 en horario de mercado

### Beneficios
- [COMPLETAR: Beneficio 1]
- [COMPLETAR: Beneficio 2]
- [COMPLETAR: Beneficio 3]

---

## 2. Entrada (Input)

### 2.1 Parámetros de Ejecución

**Parámetros Requeridos**:
```yaml
simbolo:
  tipo: string
  descripción: "Símbolo de trading (ej. EUR/USD, ES=F para opciones)"
  valores_posibles: "Símbolos válidos de EUREX"
  requerido: true
  ejemplo: "ES=F"

tipo_signal:
  tipo: string
  descripción: "Tipo de señal a generar"
  valores_posibles: "compra, venta, neutral"
  requerido: false
  default: "compra|venta"
  ejemplo: "compra"

confianza_minima:
  tipo: float
  descripción: "Confianza mínima para generar señal (0-1)"
  requerido: false
  default: 0.75
  ejemplo: 0.80

timeframe:
  tipo: string
  descripción: "Marco temporal del análisis"
  valores_posibles: "1m, 5m, 15m, 1h, 4h, 1d"
  requerido: false
  default: "5m"
  ejemplo: "5m"
```

**Preguntas para el Usuario**:
- [ ] ¿Qué símbolos de EU deseas monitorear?
- [ ] ¿Cuál es el timeframe preferido?
- [ ] ¿Cuál es el threshold de confianza mínima?
- [ ] ¿Qué brokers usarás para obtener datos (IBKR, Alpaca)?
- [ ] ¿Se ejecutarán órdenes automáticamente o solo alertas?

### 2.2 Archivos de Entrada (si aplica)

**Configuración de estrategias** (opcional):
- **Ubicación**: [COMPLETAR: ruta o URL]
- **Formato**: JSON / YAML
- **Estructura**:
  - Estrategia: nombre
  - Indicadores: lista
  - Umbrales de entrada/salida
  - Gestión de riesgo (stop-loss, take-profit)
- **Validaciones**:
  - [ ] Archivo debe existir
  - [ ] Formato válido
  - [ ] Umbrales dentro de rangos permitidos

### 2.3 Credenciales y Conexiones

**Broker: Interactive Brokers**
- **Tipo**: API
- **Credenciales**: Account ID, API Key, Secret Key
- **Ambiente**: Paper trading (TEST), Production (PRD)
- **Timeout**: 5 segundos
- **Permisos Requeridos**: Market data, Order placement, Account info

**Broker: Alpaca** (alternativo)
- **Tipo**: API REST
- **Credenciales**: API Key, Secret Key
- **Ambiente**: Paper trading (TEST)
- **Permisos Requeridos**: Stocks, Options, Market data

**Feed de Datos Externo**:
- **Proveedor**: TradingView / Polygon.io / Futu
- **Tipo**: WebSocket / REST API
- **Credenciales**: API Key
- **Timeout**: 3 segundos

---

## 3. Proceso (Lógica de Negocio)

### 3.1 Paso 1: Obtener Datos de Mercado en Tiempo Real

```
PASO 1: Conectar al broker y obtener datos OHLCV
├─ Acción 1: Autenticar con broker (IBKR o Alpaca)
├─ Acción 2: Suscribirse a velas en tiempo real para símbolo
│  ├─ Sub-acción 2.1: Esperar velas de 1 minuto
│  └─ Sub-acción 2.2: Agregar a buffer histórico (últimas 100 velas)
├─ Acción 3: Validar integridad de datos
│  ├─ Sub-acción 3.1: ¿Precio > 0?
│  ├─ Sub-acción 3.2: ¿Volume > 0?
│  └─ Sub-acción 3.3: ¿Timestamp válido?
└─ Error handling: Si conexión falla, reintentar 3 veces con backoff exponencial
```

**Detalles Técnicos**:
- Input: Símbolo + Timeframe
- Proceso: WebSocket/REST API al broker
- Output: Vela OHLCV completada
- Tiempo estimado: < 500ms

### 3.2 Paso 2: Calcular Indicadores Técnicos

```
PASO 2: Calcular RSI(14), MACD(12,26,9), Bollinger Bands(20,2)
├─ Acción 1: Calcular RSI(14) sobre últimas 14-30 velas
│  ├─ Sub-acción 1.1: Calcular ganancias/pérdidas
│  ├─ Sub-acción 1.2: Smooth gains/losses (Wilder's method)
│  └─ Sub-acción 1.3: Resultado: RSI value 0-100
├─ Acción 2: Calcular MACD(12,26,9)
│  ├─ Sub-acción 2.1: EMA(12) - EMA(26)
│  ├─ Sub-acción 2.2: Signal line = EMA(9) del MACD
│  └─ Sub-acción 2.3: Histogram = MACD - Signal
├─ Acción 3: Calcular Bollinger Bands(20,2)
│  ├─ Sub-acción 3.1: SMA(20) = Media móvil 20 periodos
│  ├─ Sub-acción 3.2: Desviación estándar 20 periodos
│  └─ Sub-acción 3.3: Bandas = SMA ± (2 × Std Dev)
└─ Validación: Comparar vs TradingView (precisión >= 99%)
```

**Detalles Técnicos**:
- Input: Velas OHLCV (buffer de 100+)
- Proceso: Cálculos numéricos concurrentes
- Output: RSI, MACD, Bollinger Bands
- Tiempo estimado: < 50ms

### 3.3 Paso 3: Generar Señales de Entrada/Salida

```
PASO 3: Detectar señales de compra/venta basado en cruces de indicadores
├─ Acción 1: Criterios COMPRA (Confianza Score)
│  ├─ Si RSI(14) < 30 (oversold) → +0.30 puntos
│  ├─ Si MACD cruza arriba signal line → +0.25 puntos
│  ├─ Si precio toca banda inferior Bollinger → +0.20 puntos
│  └─ Score COMPRA = suma (mín 0.75 para generar señal)
├─ Acción 2: Criterios VENTA (Confianza Score)
│  ├─ Si RSI(14) > 70 (overbought) → +0.30 puntos
│  ├─ Si MACD cruza abajo signal line → +0.25 puntos
│  ├─ Si precio toca banda superior Bollinger → +0.20 puntos
│  └─ Score VENTA = suma (mín 0.75 para generar señal)
├─ Acción 3: Consolidación de señales (no spam)
│  ├─ Si hay múltiples señales en 5 min → tomar la de mayor confianza
│  └─ Esperar confirmación en vela siguiente
└─ Output: Signal object {tipo, confianza, timestamp, indicadores}
```

**Detalles Técnicos**:
- Input: Indicadores calculados + última vela
- Proceso: Lógica de scoring
- Output: Signal {buy|sell|none, confidence 0-1}
- Tiempo estimado: < 10ms

### 3.4 Paso 4: Validación de Riesgo (Stop Loss / Take Profit)

```
PASO 4: Calcular niveles de riesgo
├─ Acción 1: Stop Loss (2% bajo entrada)
│  └─ Stop = Precio entrada × 0.98
├─ Acción 2: Take Profit (3% arriba entrada)
│  └─ TP = Precio entrada × 1.03
├─ Acción 3: Risk / Reward Ratio
│  └─ RRR = (TP - Entrada) / (Entrada - Stop) = min 1.5 requerido
└─ Validación: Si RRR < 1.5, no generar señal
```

### 3.5 Paso 5: Enviar Notificación/Señal

```
PASO 5: Notificar al usuario y preparar para ejecución
├─ Acción 1: Generar mensaje de señal
│  └─ "COMPRA EUR/USD a X.XXX - Confianza 82% (RSI 28 + MACD cross)"
├─ Acción 2: Enviar notificación
│  ├─ Email
│  ├─ Push notification (app)
│  └─ WebSocket (dashboard en tiempo real)
├─ Acción 3: Guardar en base de datos
│  └─ Signal record + metadata (indicadores, confianza)
└─ Acción 4: Si ejecución automática habilitada
   └─ Enviar orden al broker (manual review recomendado)
```

---

## 4. Validaciones de Negocio

[COMPLETAR: Qué validaciones de negocio específicas aplican]

**Validaciones Críticas** (bloquean):
- RSI fuera de lógica (ej. RSI > 100 o < 0) → ERROR
- Precio <= 0 → ERROR
- Confianza < 0 o > 1 → ERROR
- Timestamp en el futuro → ERROR

**Validaciones de Advertencia** (alertan pero continúan):
- Latencia > 500ms → WARN
- Desconexión broker > 5 segundos → WARN
- Señal repetida en < 5 min → WARN

---

## 5. Salida (Output)

### 5.1 Directa: Señales en Tiempo Real

```json
{
  "signal": {
    "id": "SIG-2026-03-17-14-30-001",
    "timestamp": "2026-03-17T14:30:00Z",
    "symbol": "ES=F",
    "type": "buy",
    "confidence": 0.82,
    "price_entry": 4150.50,
    "stop_loss": 4067.49,
    "take_profit": 4275.02,
    "risk_reward_ratio": 1.75,
    "indicators": {
      "rsi_14": 28,
      "macd": 0.05,
      "macd_signal": -0.02,
      "macd_histogram": 0.07,
      "bollinger_upper": 4180.00,
      "bollinger_lower": 4120.00,
      "bollinger_ma": 4150.00
    },
    "notes": "RSI oversold + MACD cross above signal"
  }
}
```

### 5.2 Notificaciones

- **Email**: Enviar resumen de señales cada hora
- **Push**: Notificación instantánea en móvil (si app PWA)
- **WebSocket**: Dashboard actualiza en tiempo real
- **WebHook**: Endpoint externo (si usuario configura)

### 5.3 Reportes Periódicos

- **Diario**: Señales generadas, aciertos/fallos
- **Semanal**: Performance de estrategia, ROI
- **Mensual**: Análisis de estrategias, optimizaciones

---

## 6. Requisitos Técnicos

### 6.1 Stack Tecnológico

[COMPLETAR: Confirmar stack o proponer uno]

**Frontend**:
- React 18+
- TypeScript
- Vite (build tool)
- TradingView Lightweight Charts (gráficas)
- Zustand (state management)

**Backend API**:
- Node.js + Express
- TypeScript
- Supabase (PostgreSQL) + MongoDB (datos)
- Prisma / Mongoose (ORM/ODM)

**Integración Brokers**:
- @stoqey/ib (Interactive Brokers)
- alpaca-trade-api (Alpaca)

**Análisis de Datos**:
- ta-lib (indicadores técnicos)
- tech-indicators (alternativa)

### 6.2 Escalabilidad

- [ ] ¿Cuántos símbolos monitorear simultáneamente? (ej. 50, 500, 5000)
- [ ] ¿Qué frecuencia de actualización? (1m, 5m, 15m)
- [ ] ¿Cuántos usuarios concurrentes?

### 6.3 Disponibilidad

- [ ] ¿Uptime requerido? (99%, 99.9%)
- [ ] ¿Horario de operación? (24/7, solo horario mercado)
- [ ] ¿Recuperación ante fallos?

---

## 7. Casos de Uso Detallados

[COMPLETAR: Casos de uso específicos]

### Caso de Uso 1: Monitorear múltiples símbolos en EU
```
Actor: Trader
Precondición: PWA abierta, brokers configurados
1. Usuario abre dashboard
2. Sistema obtiene datos en tiempo real de 10 símbolos EU
3. Calcula indicadores cada 5 minutos
4. Genera señal cuando RSI < 30 + MACD cross
5. Usuario recibe notificación push
6. Usuario revisa señal y ejecuta orden manualmente
Postcondición: Orden enviada al broker
```

### Caso de Uso 2: Backtesting de estrategia
```
Actor: Trader
Precondición: Datos históricos disponibles
1. Usuario configura estrategia (ej. RSI oversold + MAC cross)
2. Sistema ejecuta simulación en datos 2025-2026
3. Calcula métricas: winrate, ROI, max drawdown
4. Usuario valida si estrategia es viable
Postcondición: Reporte de backtesting descargado
```

---

## 8. Casos de Prueba (Criterios de Aceptación)

[COMPLETAR: Casos de prueba específicos]

**Test 1: Precisión de indicadores**
```
Given: Velas EUROSTOXX últimas 30 min
When: Calculo RSI(14), MACD, Bollinger
Then: Valores deben coincidir con TradingView ≥ 99%
```

**Test 2: Generación de señal**
```
Given: RSI = 28, MACD cruza arriba signal
When: Sistema genera señal
Then: Confidence ≥ 0.75 y signal.type = "buy"
```

**Test 3: Error handling**
```
Given: Broker desconectado
When: Sistema intenta conectar
Then: Reintentos 3×, con backoff exponencial, luego alert
```

---

## 9. Arquitectura de Componentes

[COMPLETAR: Descripción detallada o aportar diagrama]

```
┌─────────────────────────────────────────────────────────┐
│                   PWA Frontend                          │
│  Dashboard │ WatchlistPanel │ SignalsPage │ PortfolioPage │
└──────────────────┬──────────────────────────────────────┘
                   │ REST API
┌──────────────────▼──────────────────────────────────────┐
│               Backend API REST                          │
│   /api/signals │ /api/strategies │ /api/trades         │
└──────────────────┬──────────────────────────────────────┘
       ├─────────┬──────────┬──────────┬────────────┐
       ▼         ▼          ▼          ▼            ▼
   Supabase  MongoDB    IBKR API   Alpaca API  TradingView
  (Strategies) (Trades)  (Market)   (Paper)     (Charts)
```

---

## 10. Skills de IA Necesarios (del Equipo 5)

| Agente | Skills Necesarios |
|--------|------------------|
| MEMO | ticket_analyzer, architecture_designer, requirement_validator, knowledge_synthesizer |
| BERNA | react_code_generator, typescript_code_generator, broker_api_integrator, |
| OVER | code_optimizer, performance_analyzer, security_auditor |
| MEPU | test_case_generator, bug_detector, quality_validator |
| BANDA | database_schema_designer, database_migrator, api_service_generator |

---

## 11. Decisiones Técnicas Pendientes

[COMPLETAR: Decisiones que aún no se han tomado]

- [ ] ¿IBKR vs Alpaca como broker primario?
- [ ] ¿Supabase vs MongoDB como BD principal?
- [ ] ¿WebSocket vs REST polling para datos en tiempo real?
- [ ] ¿Ejecución automática de órdenes o solo alertas?
- [ ] ¿Validar signals con análisis de IA (Claude API)?

---

## 12. Dependencias y Restricciones

[COMPLETAR]

**Restricciones**:
- [ ] ¿Debe cumplir regulaciones ESMA/FINRA?
- [ ] ¿Hay límites de capitales mínimos?
- [ ] ¿Restricciones horarias (mercado EU)?

**Dependencias**:
- [ ] Credenciales broker (IBKR/Alpaca)
- [ ] API keys para feeds de datos
- [ ] Acceso a Supabase/MongoDB

---

## 13. Plan de Implementación

[COMPLETAR: Fechas realistas]

- **FASE 2.3**: Investigación (1 semana)
- **FASE 2.4**: Diseño + tickets generados (3 días)
- **FASE 3**: Implementación (2-3 semanas)
- **Testing**: 1 semana
- **Launch**: [FECHA OBJETIVO]

---

## 14. Riesgos y Mitigación

[COMPLETAR]

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|--------|-----------|
| Latencia en feed de datos | Media | Alto | Usar múltiples fuentes data + caché |
| Falso positivo en señales | Alta | Medio | Backtesting exhaustivo + validación manual |
| Crash del broker API | Baja | Alto | Reconexión automática + fallback |

---

## 15. Aprobaciones y Control de Cambios

| Rol | Nombre | Fecha | Firma |
|-----|--------|-------|-------|
| Responsable Proyecto | [COMPLETAR] | [FECHA] | [ ] |
| Arquitecto (MEMO) | Equipo 5 | 2026-03-17 | ⏳ Pendiente |
| QA (MEPU) | Equipo 5 | - | ⏳ Pendiente |

---

**Estado**: 🟡 EN ESPECIFICACIÓN - Pendiente completar secciones marcadas [COMPLETAR]

**Próximo paso**: Usuario completa todas las secciones [COMPLETAR], luego MEMO revisa y valida en FASE 2.3.
