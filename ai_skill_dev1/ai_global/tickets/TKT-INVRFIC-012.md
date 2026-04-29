# TKT-INVRFIC-012: Gestor de Ã“rdenes + Positions

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-012 |
| **Tipo** | Feature / Order Management |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-002 + TKT-INVRFIC-009 âœ… Completados |

---

## ï¿½7 DescripciÃ³n

### Contexto
ConstrucciÃ³n, validaciÃ³n y ejecuciÃ³n de Ã³rdenes en brokers.

### PropÃ³sito
**Order Builder**:
- Calcula position size segÃºn riesgo
- Sugiere entry/stop/target
- Valida reglas de riesgo (max position size, max daily loss, etc.)
- Construye orden con parÃ¡metros

**Order Manager**:
- EnvÃ­a orden al broker activo
- Monitorea estado (PENDING â†’ FILLED)
- Registra en historial
- Monitorea posiciones abiertas vs stop/target

### SoluciÃ³n Propuesta

**Estructura**:
- src/services/orders/orderManager.service.ts
- src/services/risk/riskCalculator.ts
- src/features/positions/components/PositionsPanel.tsx
- src/store/positionsStore.ts
- src/types/order.types.ts

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 5 archivos nuevos

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] riskCalculator: position_size = (balance Ã— max_pct) / entry_price
- [ ] ValidaciÃ³n: buying_power, concurrent positions, daily loss
- [ ] buildOrder: { symbol, side, qty, limitPrice, stopLoss, takeProfit }
- [ ] submitOrder: envÃ­a al broker
- [ ] positionsStore: lista de posiciones abiertas
- [ ] monitorPositions: alerta si alcanza stop/target

### Bulma valida:
- [ ] Position size calculada correctamente
- [ ] Stop/target sugeridos dentro de rango esperado
- [ ] Ã“rden ejecutada sin errores en Alpaca paper

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Position size = balance Ã— 5% / entry (default 5%)
2. âœ… Stop loss sugerido = entry - 2Ã—ATR
3. âœ… Take profit sugerido = entry + R/RÃ—stop (default 2:1)
4. âœ… Orden se envÃ­a y se registra en historial
5. âœ… PosiciÃ³n se muestra en PositionsPanel


