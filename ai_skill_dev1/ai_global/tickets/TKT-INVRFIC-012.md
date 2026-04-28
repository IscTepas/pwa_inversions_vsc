# TKT-INVRFIC-012: Gestor de Órdenes + Positions

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-012 |
| **Tipo** | Feature / Order Management |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-002 + TKT-INVRFIC-009 ✅ Completados |

---

## �7 Descripción

### Contexto
Construcción, validación y ejecución de órdenes en brokers.

### Propósito
**Order Builder**:
- Calcula position size según riesgo
- Sugiere entry/stop/target
- Valida reglas de riesgo (max position size, max daily loss, etc.)
- Construye orden con parámetros

**Order Manager**:
- Envía orden al broker activo
- Monitorea estado (PENDING → FILLED)
- Registra en historial
- Monitorea posiciones abiertas vs stop/target

### Solución Propuesta

**Estructura**:
- src/services/orders/orderManager.service.ts
- src/services/risk/riskCalculator.ts
- src/features/positions/components/PositionsPanel.tsx
- src/store/positionsStore.ts
- src/types/order.types.ts

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 5 archivos nuevos

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] riskCalculator: position_size = (balance × max_pct) / entry_price
- [ ] Validación: buying_power, concurrent positions, daily loss
- [ ] buildOrder: { symbol, side, qty, limitPrice, stopLoss, takeProfit }
- [ ] submitOrder: envía al broker
- [ ] positionsStore: lista de posiciones abiertas
- [ ] monitorPositions: alerta si alcanza stop/target

### Bulma valida:
- [ ] Position size calculada correctamente
- [ ] Stop/target sugeridos dentro de rango esperado
- [ ] Órden ejecutada sin errores en Alpaca paper

---

## ✅ Criterios de Aceptación

1. ✅ Position size = balance × 5% / entry (default 5%)
2. ✅ Stop loss sugerido = entry - 2×ATR
3. ✅ Take profit sugerido = entry + R/R×stop (default 2:1)
4. ✅ Orden se envía y se registra en historial
5. ✅ Posición se muestra en PositionsPanel

