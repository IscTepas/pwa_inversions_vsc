# TKT-INVRFIC-009: Motor de Confluencia + IA (Claude API)

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-009 |
| **Tipo** | Feature / Signal Generation |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-004 + TKT-INVRFIC-008 ✅ Completados |

---

## 📝 Descripción

### Contexto
Motor central: combina 6 cores en señal única. Confirmación IA como core adicional.

### Propósito
**Confluencia**:
- Toma outputs de cores seleccionados por estrategia
- Calcula scores parciales por core
- Combina por pesos configurados
- Detecta coincidencias y conflictos
- Genera señal BUY/SELL/HOLD con confidence final

**IA**:
- Claude API valida/ajusta señal
- Propone entry/stop/target
- Advierte riesgos
- Ajusta confidence score

### Solución Propuesta

**Estructura**:
- src/services/confluence/confluenceEngine.service.ts
- src/services/ai/aiAdvisor.service.ts
- src/types/signal.types.ts

**Reglas de confluencia**:
- ≥2 cores alineados en BUY → BUY candidate
- ≥2 cores alineados en SELL → SELL candidate
- Conflicto fuerte → HOLD o WATCH
- Min confidence threshold: configurable (default 50%)

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 2 archivos principales

**Componentes Afectados**: Todo el sistema de señales

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] confluenceEngine: orquesta cores, calcula scores, aplica pesos
- [ ] Detecta coincidencias/conflictos entre cores
- [ ] aiAdvisor: llama Claude API con prompt detallado
- [ ] Combina confidence: (signal_confidence + ai_confidence) / 2
- [ ] Salida: { signal, confidence, score, selectedCores, reasons, aiReasoning, suggestedEntry, suggestedStop, suggestedTarget }

### Bulma valida:
- [ ] 5 cores BUY → señal BUY 90%+
- [ ] 3 cores BUY + 2 SELL → HOLD
- [ ] Claude API funciona sin errores

---

## ✅ Criterios de Aceptación

1. ✅ Confluencia 5/6 cores BUY = BUY signal 90%+
2. ✅ Confluencia 2/6 cores alineados = confidence ≥50%
3. ✅ Claude API valida y ajusta correctamente
4. ✅ Suggested entry/stop/target recomendados

