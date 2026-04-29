# TKT-INVRFIC-009: Motor de Confluencia + IA (Claude API)

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-009 |
| **Tipo** | Feature / Signal Generation |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-004 + TKT-INVRFIC-008 âœ… Completados |

---

## ðŸ“ DescripciÃ³n

### Contexto
Motor central: combina 6 cores en seÃ±al Ãºnica. ConfirmaciÃ³n IA como core adicional.

### PropÃ³sito
**Confluencia**:
- Toma outputs de cores seleccionados por estrategia
- Calcula scores parciales por core
- Combina por pesos configurados
- Detecta coincidencias y conflictos
- Genera seÃ±al BUY/SELL/HOLD con confidence final

**IA**:
- Claude API valida/ajusta seÃ±al
- Propone entry/stop/target
- Advierte riesgos
- Ajusta confidence score

### SoluciÃ³n Propuesta

**Estructura**:
- src/services/confluence/confluenceEngine.service.ts
- src/services/ai/aiAdvisor.service.ts
- src/types/signal.types.ts

**Reglas de confluencia**:
- â‰¥2 cores alineados en BUY â†’ BUY candidate
- â‰¥2 cores alineados en SELL â†’ SELL candidate
- Conflicto fuerte â†’ HOLD o WATCH
- Min confidence threshold: configurable (default 50%)

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 2 archivos principales

**Componentes Afectados**: Todo el sistema de seÃ±ales

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] confluenceEngine: orquesta cores, calcula scores, aplica pesos
- [ ] Detecta coincidencias/conflictos entre cores
- [ ] aiAdvisor: llama Claude API con prompt detallado
- [ ] Combina confidence: (signal_confidence + ai_confidence) / 2
- [ ] Salida: { signal, confidence, score, selectedCores, reasons, aiReasoning, suggestedEntry, suggestedStop, suggestedTarget }

### Bulma valida:
- [ ] 5 cores BUY â†’ seÃ±al BUY 90%+
- [ ] 3 cores BUY + 2 SELL â†’ HOLD
- [ ] Claude API funciona sin errores

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Confluencia 5/6 cores BUY = BUY signal 90%+
2. âœ… Confluencia 2/6 cores alineados = confidence â‰¥50%
3. âœ… Claude API valida y ajusta correctamente
4. âœ… Suggested entry/stop/target recomendados


