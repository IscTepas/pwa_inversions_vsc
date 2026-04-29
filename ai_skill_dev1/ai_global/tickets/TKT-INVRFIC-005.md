# TKT-INVRFIC-005: Core de Estructura TÃ©cnica (Soportes/Resistencias/Tendencias)

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-005 |
| **Tipo** | Feature / Technical Structure |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-003 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
Core #2 de anÃ¡lisis: Estructura tÃ©cnica. Identifica zonas de soporte/resistencia y sesgos de tendencia.

### PropÃ³sito
Detectar:
- Pivots relevantes por timeframe (multi-timeframe analysis)
- Zonas de soporte/resistencia (no lÃ­neas rÃ­gidas)
- Fuerza de zona (# rechazos, volumen, recencia)
- Tendencia bias: bullish/bearish/sideways
- Cambios de estructura (BOS / CHoCH)

### SoluciÃ³n Propuesta

**Estructura**:
- src/services/structure/supportResistance.service.ts
- src/services/structure/trendBias.service.ts
- src/services/structure/technicalStructure.service.ts (orquestador)
- src/types/structure.types.ts

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**: 4 archivos nuevos

**Componentes Afectados**: Core de estructura tÃ©cnica

---

## ðŸ¤– Workflow de Agentes

### Picoro analiza:
- [ ] DefiniciÃ³n de pivot points revisada
- [ ] Concepto de zonas vs lÃ­neas entendido
- [ ] Multi-timeframe analysis (1m, 5m, 15m, 1h, 4h, 1D) confirmado

### Goku implementa:
- [ ] Detecta pivots usando high/low de N velas (swing lookback)
- [ ] Agrupa pivots cercanos en zonas (tolerance band)
- [ ] Calcula fuerza: rechazos + volumen + recencia
- [ ] Detecta tendencia por timeframe
- [ ] Detecta BOS (Break of Structure) / CHoCH (Change of Character)
- [ ] Salida estÃ¡ndar: { side, confidence, score, supportResistanceZones, trendBiasByTimeframe, reasons }

### Vegeta optimiza:
- [ ] CÃ¡lculos reutilizan datos de candles
- [ ] Zonas se actualizan solo cuando hay cambio estructura
- [ ] Performance < 200ms

### Bulma valida:
- [ ] Pivots detectados correctamente en chart manual
- [ ] Zonas de soporte se confirman en rebotes
- [ ] Tendencia detectada consistente con vista visual

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Detecta mÃ­nimo 3 zonas de soporte/resistencia en 200 velas
2. âœ… Fuerza de zona: 0-100% segÃºn rechazos y volumen
3. âœ… Tendencia: bullish/bearish/sideways identificada correctamente
4. âœ… BOS/CHoCH detectados en cambios de estructura
5. âœ… Multi-timeframe bias coherente (1h > 15m > 5m)

---

## ðŸ§¾ Evidencia de ValidaciÃ³n

- [ ] Screenshot: Chart con zonas dibujadas
- [ ] Test: Detecta zonas conocidas (SPY soporte $587, resistencia $601)
- [ ] Validation: Tendencia visual vs algoritmo coinciden


