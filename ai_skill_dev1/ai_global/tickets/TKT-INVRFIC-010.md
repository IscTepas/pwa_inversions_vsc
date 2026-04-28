# TKT-INVRFIC-010: Dashboard UI + Tabla de Señales Detallada

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-010 |
| **Tipo** | Feature / UI/UX |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-009 ✅ Completado |

---

## 📝 Descripción

### Contexto
UI es la interfaz usuario para todas las señales y cores.

### Propósito
Crear:
- Dashboard layout principal (dark theme)
- Watchlist panel izq
- Gráfica TradingView Lightweight Charts derecha
- Tabla de señales detallada abajo (expandible)
- Modal de señal con desglose completo

### Solución Propuesta

**Componentes**:
- src/features/dashboard/components/DashboardLayout.tsx
- src/features/dashboard/components/MarketStatusBar.tsx
- src/features/watchlist/components/WatchlistPanel.tsx
- src/features/trading/components/TradingChart.tsx
- src/features/signals/components/SignalsTable.tsx (ultra-detallada)
- src/features/signals/components/SignalDetailModal.tsx
- src/features/signals/components/IndicatorBreakdown.tsx

**Tabla de Señales**: Mostrará:
- Symbol, Signal (🟢/🔴/⚪), Confidence%, Timeframe
- Desglose por indicador: ✅/❌ con razón
- Histórico del símbolo (últimas 5 señales + win rate)
- Botones: Expandir / Ejecutar / Descartar

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 7+ componentes React

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] DashboardLayout: grid 3-panel (watchlist, chart, signals)
- [ ] TradingChart: integra TradingView Lightweight Charts
- [ ] SignalsTable: tabla con filas expandibles
- [ ] IndicatorBreakdown: muestra ✅/❌ por cada indicador
- [ ] SignalDetailModal: modal completo con todos los datos
- [ ] Dark theme: TailwindCSS + CSS vars

### Vegeta optimiza:
- [ ] Performance: tabla no re-renders innecesariamente
- [ ] Responsive design: funciona en mobile (básico)
- [ ] Accesibilidad: colores contrastados, roles ARIA

### Bulma valida:
- [ ] Dashboard carga sin errores
- [ ] Tabla muestra señales correctamente
- [ ] Modal abre y cierra sin problemas
- [ ] Dark theme visual validado

---

## ✅ Criterios de Aceptación

1. ✅ Dashboard layout cargable sin errores
2. ✅ Tabla de señales muestra mínimo 3 señales mock
3. ✅ Modal de señal abre/cierra correctamente
4. ✅ Dark theme aplicado globalmente
5. ✅ Indicadores de color: 🟢🔴⚪ visibles

