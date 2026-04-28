# TKT-INVRFIC-008: Core de Fundamentales + Ranking Diario

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-008 |
| **Tipo** | Feature / Fundamentals |
| **Prioridad** | 🟡 Alta |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-003 ✅ Completado |

---

## 📝 Descripción

### Contexto
Core #5 de análisis: Estado fundamental de la empresa + ranking diario de oportunidades.

### Propósito
**Fundamentales**:
- Revenue growth, EPS, márgenes
- Guidance revisiones
- Earnings surprise
- Valuación multiples

**Ranking Diario**:
- Evaluar universo del usuario (watchlist, sectores, etc.)
- Calcular opportunityScore por instrumento
- Clasificar: BUY/SELL/WATCH/AVOID
- Top N candidates diarios (default 25)

### Solución Propuesta

**Estructura**:
- src/services/fundamentals/earnings.service.ts
- src/services/fundamentals/valuation.service.ts
- src/services/fundamentals/companySnapshot.service.ts
- src/services/opportunities/opportunityRanking.service.ts
- src/types/fundamentals.types.ts

**Simplificación v1.0**: Mock de datos financieros

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 5 archivos nuevos

**Componentes Afectados**: Dashboard (ranking diario mostrado)

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] Snapshot financiero: revenue, EPS, márgenes
- [ ] Earnings historical vs actual
- [ ] Ranking algoritmo: score = f(growth, valuation, momentum, sentiment)
- [ ] Refresh cada 5 minutos (configurable)
- [ ] Top 25 mostrables en UI
- [ ] Salida cores: { side, confidence, score, ...}
- [ ] Salida ranking: { symbol, priorityRank, opportunityScore, recommendedAction, whyNow, whyNot, nextEvent }

### Bulma valida:
- [ ] Ranking actualiza cada 5 min
- [ ] Top 3 oportunidades consistentes con volatilidad + sentimiento

---

## ✅ Criterios de Aceptación

1. ✅ Ranking se actualiza cada 5 minutos
2. ✅ Top 25 oportunidades con razones claras
3. ✅ Scores entre 0.0 y 1.0

