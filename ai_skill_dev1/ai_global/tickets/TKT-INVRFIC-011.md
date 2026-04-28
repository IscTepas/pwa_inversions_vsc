# TKT-INVRFIC-011: Sistema de Estrategias (Presets + Personalización)

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-011 |
| **Tipo** | Feature / Strategies |
| **Prioridad** | 🟡 Alta |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-010 ✅ Completado |

---

## 📝 Descripción

### Contexto
Sistema flexible para definir qué cores participan en decisión de señal.

### Propósito
Permitir:
- **7 Presets** predefinidos (RSI+MACD, Bollinger Breakout, etc.)
- **Selector manual**: activar/desactivar cores individuales
- **Pesos**: ajustar peso de cada core en score final
- **Guardar estrategia**: hasta 20 personalizadas
- **Cambiar en runtime**: selector dropdown en toolbar

### Solución Propuesta

**Estructura**:
- src/features/strategy/components/StrategySelector.tsx
- src/features/strategy/components/StrategyBuilder.tsx (modal)
- src/features/strategy/hooks/useStrategy.ts
- src/store/strategyStore.ts
- src/types/strategy.types.ts

**7 Presets**:
1. RSI + MACD Crossover
2. Bollinger Breakout
3. Triple EMA Trend
4. Full Confluence (default)
5. Institutional Momentum
6. Earnings Event Trader
7. Value + Catalyst Swing

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 5 archivos nuevos

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] 7 presets definidos en strategyStore
- [ ] Modal builder: checkboxes para cores + sliders para pesos
- [ ] Persistencia: localStorage (20 máximo)
- [ ] Selector dropdown: cambiar estrategia en tiempo real
- [ ] Interfaz Strategy: id, name, enabledCores, indicators, weights

### Bulma valida:
- [ ] Presets cargables sin errores
- [ ] Cambiar estrategia recalcula señales
- [ ] Guardar/cargar personalizadas funciona

---

## ✅ Criterios de Aceptación

1. ✅ 7 presets disponibles en dropdown
2. ✅ Selector manual activa/desactiva cores
3. ✅ Weights aplicados correctamente (0.5 - 2.0)
4. ✅ Guardar estrategia persiste en localStorage
5. ✅ Cambiar estrategia recalcula señal en < 500ms

