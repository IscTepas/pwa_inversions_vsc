# TKT-INVRFIC-006: Core de Flujo Institucional (Unusual Options)

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-006 |
| **Tipo** | Feature / Institutional Flow |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-003 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
Core #3 de anÃ¡lisis: Detecta actividad institucional que precede movimientos de precios.

### PropÃ³sito
Detectar:
- Unusual options activity (volumen anormalmente alto en strikes especÃ­ficos)
- Cambios abruptos en open interest
- RelaciÃ³n actividad â†” precio/volumen/expiraciones

### SoluciÃ³n Propuesta

**Estructura**:
- src/services/institutional/unusualOptions.service.ts
- src/services/institutional/openInterest.service.ts
- src/services/institutional/institutionalFlow.service.ts (orquestador)
- src/types/institutional.types.ts

**SimplificaciÃ³n v1.0**: 
- Usar Alpaca unusual activity si disponible
- Mock de datos para desarrollo
- Base para expansiÃ³n futura

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 4 archivos nuevos

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] Servicio unusualOptions: detecta vol > 2Ïƒ en strikes
- [ ] Servicio openInterest: detecta cambios significativos
- [ ] Orquestador: score de actividad institucional
- [ ] Salida estÃ¡ndar: { side, confidence, score, institutionalEvents, reasons }

### Bulma valida:
- [ ] Genera seÃ±ales sin falsos positivos (testing con datos mock)

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Detecta unusual options activity en strikes ATM
2. âœ… Identifica cambios significativos en open interest
3. âœ… Genera seÃ±ales correlacionadas con movimientos posteriores


