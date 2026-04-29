# TKT-INVRFIC-007: Core de Noticias y Eventos

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-007 |
| **Tipo** | Feature / News & Events |
| **Prioridad** | ðŸŸ¡ Alta |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-003 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
Core #4 de anÃ¡lisis: Noticias, earnings, macro eventos y anÃ¡lisis de sentimiento.

### PropÃ³sito
Detectar:
- Noticias en tiempo real del instrumento
- Earnings prÃ³ximos (dÃ­as configurables: default 72h)
- Eventos macro (Fed, CPI, Jobs, etc.)
- AnÃ¡lisis de sentimiento
- Riesgo de evento dentro de ventana configurada

### SoluciÃ³n Propuesta

**Estructura**:
- src/services/news/newsFeed.service.ts
- src/services/news/eventsCalendar.service.ts
- src/services/news/newsEvents.service.ts (orquestador)
- src/types/news.types.ts

**SimplificaciÃ³n v1.0**: 
- Mock de datos para desarrollo
- API placeholder (integraciÃ³n real en v1.1)

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 4 archivos nuevos

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] Feed de noticias mock con sentimiento (bullish/bearish/neutral)
- [ ] Calendar de earnings: prÃ³ximas 72h
- [ ] Calendar de eventos macro: prÃ³ximas 72h
- [ ] Scoring: riesgo bajo/medio/alto
- [ ] Salida estÃ¡ndar: { side, confidence, score, sentiment, nextRelevantEvents, reasons }

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Detecta earnings prÃ³ximos correctamente
2. âœ… Clasifica sentimiento de noticias
3. âœ… Identifica riesgo de evento dentro de ventana


