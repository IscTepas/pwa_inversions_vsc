# TKT-INVRFIC-002: IntegraciÃ³n Broker Connector (IBKR + Alpaca)

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-002 |
| **Tipo** | Feature / Broker Integration |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-001 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
El proyecto necesita conexiÃ³n dual a brokers para data histÃ³rica, datos de mercado en tiempo real y ejecuciÃ³n de Ã³rdenes.

### PropÃ³sito
Implementar servicio `broker_connector` que:
- Detecta broker activo (IBKR o Alpaca segÃºn .env)
- Establece conexiÃ³n con reintentos automÃ¡ticos
- Obtiene datos de cuenta y posiciones
- Mantiene heartbeat

### SoluciÃ³n Propuesta

**Interfaz comÃºn `IBroker`**:
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

## ðŸ” AnÃ¡lisis de Impacto

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

## ðŸ¤– Workflow de Agentes

### Picoro analiza:
- [ ] Apis de IBKR y Alpaca revisadas
- [ ] Requisitos de autenticaciÃ³n documentados
- [ ] Sin dependencias internas bloqueantes

### Goku implementa:
- [ ] Interfaz IBroker definida
- [ ] IBKR connector con retry y heartbeat
- [ ] Alpaca connector con retry y heartbeat
- [ ] Zustand brokerStore con estado (connected, account, positions)
- [ ] Hook useBrokerConnection para componentes
- [ ] Manejo de errores: CONNECTION_LOST, INVALID_CREDENTIALS, etc.

### Vegeta optimiza:
- [ ] MÃ©todos de conexiÃ³n reutilizan cÃ³digo
- [ ] GestiÃ³n de suscripciones (sin memory leaks)
- [ ] Timeouts configurados razonablemente
- [ ] Errores descriptivos para UI

### Bulma valida:
- [ ] ConexiÃ³n IBKR simulada/mockeada sin credenciales reales
- [ ] ConexiÃ³n Alpaca probada en paper trading
- [ ] ReconexiÃ³n automÃ¡tica funciona tras simular desconexiÃ³n
- [ ] Account info se carga correctamente

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Conecta a Alpaca paper-api sin errores
2. âœ… Obtiene account info correctamente
3. âœ… Mantiene heartbeat activo (se ve en logs)
4. âœ… Reconecta automÃ¡ticamente tras error
5. âœ… brokerStore actualiza state correctamente

---

## ðŸ§¾ Evidencia de ValidaciÃ³n

- [ ] Screenshot: Console log mostrando "Connected to Alpaca"
- [ ] Screenshot: Dashboard mostrando Account Balance correcto
- [ ] Log: Heartbeat events cada 30s
- [ ] Test: Mock connection + disconnect funciona

---

## ðŸ“Œ Notas

- No usar credenciales hardcodeadas
- Variables en .env obligatorias
- Mock de IBKR para desarrollo (sin TWS instalado)

