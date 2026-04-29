# TKT-INVRFIC-011: Sistema de Estrategias (Presets + PersonalizaciÃ³n)

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-011 |
| **Tipo** | Feature / Strategies |
| **Prioridad** | ðŸŸ¡ Alta |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-010 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
Sistema flexible para definir quÃ© cores participan en decisiÃ³n de seÃ±al.

### PropÃ³sito
Permitir:
- **7 Presets** predefinidos (RSI+MACD, Bollinger Breakout, etc.)
- **Selector manual**: activar/desactivar cores individuales
- **Pesos**: ajustar peso de cada core en score final
- **Guardar estrategia**: hasta 20 personalizadas
- **Cambiar en runtime**: selector dropdown en toolbar

### SoluciÃ³n Propuesta

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

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 5 archivos nuevos

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] 7 presets definidos en strategyStore
- [ ] Modal builder: checkboxes para cores + sliders para pesos
- [ ] Persistencia: localStorage (20 mÃ¡ximo)
- [ ] Selector dropdown: cambiar estrategia en tiempo real
- [ ] Interfaz Strategy: id, name, enabledCores, indicators, weights

### Bulma valida:
- [ ] Presets cargables sin errores
- [ ] Cambiar estrategia recalcula seÃ±ales
- [ ] Guardar/cargar personalizadas funciona

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… 7 presets disponibles en dropdown
2. âœ… Selector manual activa/desactiva cores
3. âœ… Weights aplicados correctamente (0.5 - 2.0)
4. âœ… Guardar estrategia persiste en localStorage
5. âœ… Cambiar estrategia recalcula seÃ±al en < 500ms


