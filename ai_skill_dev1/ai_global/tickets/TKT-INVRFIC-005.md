# TKT-INVRFIC-005: Core de Estructura Técnica (Soportes/Resistencias/Tendencias)

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-005 |
| **Tipo** | Feature / Technical Structure |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-003 ✅ Completado |

---

## 📝 Descripción

### Contexto
Core #2 de análisis: Estructura técnica. Identifica zonas de soporte/resistencia y sesgos de tendencia.

### Propósito
Detectar:
- Pivots relevantes por timeframe (multi-timeframe analysis)
- Zonas de soporte/resistencia (no líneas rígidas)
- Fuerza de zona (# rechazos, volumen, recencia)
- Tendencia bias: bullish/bearish/sideways
- Cambios de estructura (BOS / CHoCH)

### Solución Propuesta

**Estructura**:
- src/services/structure/supportResistance.service.ts
- src/services/structure/trendBias.service.ts
- src/services/structure/technicalStructure.service.ts (orquestador)
- src/types/structure.types.ts

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 4 archivos nuevos

**Componentes Afectados**: Core de estructura técnica

---

## 🤖 Workflow de Agentes

### Picoro analiza:
- [ ] Definición de pivot points revisada
- [ ] Concepto de zonas vs líneas entendido
- [ ] Multi-timeframe analysis (1m, 5m, 15m, 1h, 4h, 1D) confirmado

### Goku implementa:
- [ ] Detecta pivots usando high/low de N velas (swing lookback)
- [ ] Agrupa pivots cercanos en zonas (tolerance band)
- [ ] Calcula fuerza: rechazos + volumen + recencia
- [ ] Detecta tendencia por timeframe
- [ ] Detecta BOS (Break of Structure) / CHoCH (Change of Character)
- [ ] Salida estándar: { side, confidence, score, supportResistanceZones, trendBiasByTimeframe, reasons }

### Vegeta optimiza:
- [ ] Cálculos reutilizan datos de candles
- [ ] Zonas se actualizan solo cuando hay cambio estructura
- [ ] Performance < 200ms

### Bulma valida:
- [ ] Pivots detectados correctamente en chart manual
- [ ] Zonas de soporte se confirman en rebotes
- [ ] Tendencia detectada consistente con vista visual

---

## ✅ Criterios de Aceptación

1. ✅ Detecta mínimo 3 zonas de soporte/resistencia en 200 velas
2. ✅ Fuerza de zona: 0-100% según rechazos y volumen
3. ✅ Tendencia: bullish/bearish/sideways identificada correctamente
4. ✅ BOS/CHoCH detectados en cambios de estructura
5. ✅ Multi-timeframe bias coherente (1h > 15m > 5m)

---

## 🧾 Evidencia de Validación

- [ ] Screenshot: Chart con zonas dibujadas
- [ ] Test: Detecta zonas conocidas (SPY soporte $587, resistencia $601)
- [ ] Validation: Tendencia visual vs algoritmo coinciden

