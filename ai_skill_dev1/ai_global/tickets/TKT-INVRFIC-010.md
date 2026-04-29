# TKT-INVRFIC-010: Dashboard UI + Tabla de SeÃ±ales Detallada

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-010 |
| **Tipo** | Feature / UI/UX |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-009 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
UI es la interfaz usuario para todas las seÃ±ales y cores.

### PropÃ³sito
Crear:
- Dashboard layout principal (dark theme)
- Watchlist panel izq
- GrÃ¡fica TradingView Lightweight Charts derecha
- Tabla de seÃ±ales detallada abajo (expandible)
- Modal de seÃ±al con desglose completo

### SoluciÃ³n Propuesta

**Componentes**:
- src/features/dashboard/components/DashboardLayout.tsx
- src/features/dashboard/components/MarketStatusBar.tsx
- src/features/watchlist/components/WatchlistPanel.tsx
- src/features/trading/components/TradingChart.tsx
- src/features/signals/components/SignalsTable.tsx (ultra-detallada)
- src/features/signals/components/SignalDetailModal.tsx
- src/features/signals/components/IndicatorBreakdown.tsx

**Tabla de SeÃ±ales**: MostrarÃ¡:
- Symbol, Signal (ðŸŸ¢/ðŸ”´/âšª), Confidence%, Timeframe
- Desglose por indicador: âœ…/âŒ con razÃ³n
- HistÃ³rico del sÃ­mbolo (Ãºltimas 5 seÃ±ales + win rate)
- Botones: Expandir / Ejecutar / Descartar

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 7+ componentes React

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] DashboardLayout: grid 3-panel (watchlist, chart, signals)
- [ ] TradingChart: integra TradingView Lightweight Charts
- [ ] SignalsTable: tabla con filas expandibles
- [ ] IndicatorBreakdown: muestra âœ…/âŒ por cada indicador
- [ ] SignalDetailModal: modal completo con todos los datos
- [ ] Dark theme: TailwindCSS + CSS vars

### Vegeta optimiza:
- [ ] Performance: tabla no re-renders innecesariamente
- [ ] Responsive design: funciona en mobile (bÃ¡sico)
- [ ] Accesibilidad: colores contrastados, roles ARIA

### Bulma valida:
- [ ] Dashboard carga sin errores
- [ ] Tabla muestra seÃ±ales correctamente
- [ ] Modal abre y cierra sin problemas
- [ ] Dark theme visual validado

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Dashboard layout cargable sin errores
2. âœ… Tabla de seÃ±ales muestra mÃ­nimo 3 seÃ±ales mock
3. âœ… Modal de seÃ±al abre/cierra correctamente
4. âœ… Dark theme aplicado globalmente
5. âœ… Indicadores de color: ðŸŸ¢ðŸ”´âšª visibles


