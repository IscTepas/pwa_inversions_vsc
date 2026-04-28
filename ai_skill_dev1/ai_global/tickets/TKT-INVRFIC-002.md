# TKT-INVRFIC-002: Integración Broker Connector (IBKR + Alpaca)

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-002 |
| **Tipo** | Feature / Broker Integration |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-001 ✅ Completado |

---

## 📝 Descripción

### Contexto
El proyecto necesita conexión dual a brokers para data histórica, datos de mercado en tiempo real y ejecución de órdenes.

### Propósito
Implementar servicio `broker_connector` que:
- Detecta broker activo (IBKR o Alpaca según .env)
- Establece conexión con reintentos automáticos
- Obtiene datos de cuenta y posiciones
- Mantiene heartbeat

### Solución Propuesta

**Interfaz común `IBroker`**:
```typescript
interface IBroker {
  connect(): Promise<void>
  disconnect(): Promise<void>
  getAccount(): Promise<AccountInfo>
  getPositions(): Promise<Position[]>
  getQuote(symbol: string): Promise<Quote>
  getHistoricalCandles(symbol: string, timeframe: string, limit: number): Promise<Candle[]>
  submitOrder(order: OrderRequest): Promise<OrderResponse>
  cancelOrder(orderId: string): Promise<void>
  getOptionChain(symbol: string, expiration?: string): Promise<OptionChain>
}
```

**IBKR Connector (`ibkr.connector.ts`)**:
- Usar `@stoqey/ib`
- Conectar a TWS (puerto 7497) o IB Gateway (puerto 4001)
- Implementar retry con backoff exponencial (3 intentos)
- Heartbeat cada 30 segundos

**Alpaca Connector (`alpaca.connector.ts`)**:
- Usar `@alpacahq/alpaca-trade-api`
- REST API + WebSocket para streaming
- Soportar paper trading (desarrollo)
- Heartbeat cada 30 segundos

---

## 🔍 Análisis de Impacto

**Archivos a Crear**:
- src/services/broker/broker.interface.ts
- src/services/broker/ibkr.connector.ts
- src/services/broker/alpaca.connector.ts
- src/store/brokerStore.ts (Zustand)
- src/hooks/useBrokerConnection.ts
- src/types/broker.types.ts

**Archivos a Modificar**:
- src/App.tsx (agregar hook useBrokerConnection)
- .env.example (agregar IBKR_* y ALPACA_*)

**Componentes Afectados**:
- Market Data Service (depende de broker activo)
- Order Manager (depende de broker)

---

## 🤖 Workflow de Agentes

### Picoro analiza:
- [ ] Apis de IBKR y Alpaca revisadas
- [ ] Requisitos de autenticación documentados
- [ ] Sin dependencias internas bloqueantes

### Goku implementa:
- [ ] Interfaz IBroker definida
- [ ] IBKR connector con retry y heartbeat
- [ ] Alpaca connector con retry y heartbeat
- [ ] Zustand brokerStore con estado (connected, account, positions)
- [ ] Hook useBrokerConnection para componentes
- [ ] Manejo de errores: CONNECTION_LOST, INVALID_CREDENTIALS, etc.

### Vegeta optimiza:
- [ ] Métodos de conexión reutilizan código
- [ ] Gestión de suscripciones (sin memory leaks)
- [ ] Timeouts configurados razonablemente
- [ ] Errores descriptivos para UI

### Bulma valida:
- [ ] Conexión IBKR simulada/mockeada sin credenciales reales
- [ ] Conexión Alpaca probada en paper trading
- [ ] Reconexión automática funciona tras simular desconexión
- [ ] Account info se carga correctamente

---

## ✅ Criterios de Aceptación

1. ✅ Conecta a Alpaca paper-api sin errores
2. ✅ Obtiene account info correctamente
3. ✅ Mantiene heartbeat activo (se ve en logs)
4. ✅ Reconecta automáticamente tras error
5. ✅ brokerStore actualiza state correctamente

---

## 🧾 Evidencia de Validación

- [ ] Screenshot: Console log mostrando "Connected to Alpaca"
- [ ] Screenshot: Dashboard mostrando Account Balance correcto
- [ ] Log: Heartbeat events cada 30s
- [ ] Test: Mock connection + disconnect funciona

---

## 📌 Notas

- No usar credenciales hardcodeadas
- Variables en .env obligatorias
- Mock de IBKR para desarrollo (sin TWS instalado)
