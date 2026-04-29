# TKT-INVRFIC-008: Core de Fundamentales + Ranking Diario

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-008 |
| **Tipo** | Feature / Fundamentals |
| **Prioridad** | ðŸŸ¡ Alta |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-003 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
Core #5 de anÃ¡lisis: Estado fundamental de la empresa + ranking diario de oportunidades.

### PropÃ³sito
**Fundamentales**:
- Revenue growth, EPS, mÃ¡rgenes
- Guidance revisiones
- Earnings surprise
- ValuaciÃ³n multiples

**Ranking Diario**:
- Evaluar universo del usuario (watchlist, sectores, etc.)
- Calcular opportunityScore por instrumento
- Clasificar: BUY/SELL/WATCH/AVOID
- Top N candidates diarios (default 25)

### SoluciÃ³n Propuesta

**Estructura**:
- src/services/fundamentals/earnings.service.ts
- src/services/fundamentals/valuation.service.ts
- src/services/fundamentals/companySnapshot.service.ts
- src/services/opportunities/opportunityRanking.service.ts
- src/types/fundamentals.types.ts

**SimplificaciÃ³n v1.0**: Mock de datos financieros

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 5 archivos nuevos

**Componentes Afectados**: Dashboard (ranking diario mostrado)

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] Snapshot financiero: revenue, EPS, mÃ¡rgenes
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

## âœ… Criterios de AceptaciÃ³n

1. âœ… Ranking se actualiza cada 5 minutos
2. âœ… Top 25 oportunidades con razones claras
3. âœ… Scores entre 0.0 y 1.0


