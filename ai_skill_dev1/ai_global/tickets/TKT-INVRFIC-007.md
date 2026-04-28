# TKT-INVRFIC-007: Core de Noticias y Eventos

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-007 |
| **Tipo** | Feature / News & Events |
| **Prioridad** | 🟡 Alta |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-003 ✅ Completado |

---

## 📝 Descripción

### Contexto
Core #4 de análisis: Noticias, earnings, macro eventos y análisis de sentimiento.

### Propósito
Detectar:
- Noticias en tiempo real del instrumento
- Earnings próximos (días configurables: default 72h)
- Eventos macro (Fed, CPI, Jobs, etc.)
- Análisis de sentimiento
- Riesgo de evento dentro de ventana configurada

### Solución Propuesta

**Estructura**:
- src/services/news/newsFeed.service.ts
- src/services/news/eventsCalendar.service.ts
- src/services/news/newsEvents.service.ts (orquestador)
- src/types/news.types.ts

**Simplificación v1.0**: 
- Mock de datos para desarrollo
- API placeholder (integración real en v1.1)

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 4 archivos nuevos

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] Feed de noticias mock con sentimiento (bullish/bearish/neutral)
- [ ] Calendar de earnings: próximas 72h
- [ ] Calendar de eventos macro: próximas 72h
- [ ] Scoring: riesgo bajo/medio/alto
- [ ] Salida estándar: { side, confidence, score, sentiment, nextRelevantEvents, reasons }

---

## ✅ Criterios de Aceptación

1. ✅ Detecta earnings próximos correctamente
2. ✅ Clasifica sentimiento de noticias
3. ✅ Identifica riesgo de evento dentro de ventana

