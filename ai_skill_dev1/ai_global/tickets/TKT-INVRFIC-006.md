# TKT-INVRFIC-006: Core de Flujo Institucional (Unusual Options)

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-006 |
| **Tipo** | Feature / Institutional Flow |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-003 ✅ Completado |

---

## 📝 Descripción

### Contexto
Core #3 de análisis: Detecta actividad institucional que precede movimientos de precios.

### Propósito
Detectar:
- Unusual options activity (volumen anormalmente alto en strikes específicos)
- Cambios abruptos en open interest
- Relación actividad ↔ precio/volumen/expiraciones

### Solución Propuesta

**Estructura**:
- src/services/institutional/unusualOptions.service.ts
- src/services/institutional/openInterest.service.ts
- src/services/institutional/institutionalFlow.service.ts (orquestador)
- src/types/institutional.types.ts

**Simplificación v1.0**: 
- Usar Alpaca unusual activity si disponible
- Mock de datos para desarrollo
- Base para expansión futura

---

## 🔍 Análisis de Impacto

**Archivos a Crear**: 4 archivos nuevos

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] Servicio unusualOptions: detecta vol > 2σ en strikes
- [ ] Servicio openInterest: detecta cambios significativos
- [ ] Orquestador: score de actividad institucional
- [ ] Salida estándar: { side, confidence, score, institutionalEvents, reasons }

### Bulma valida:
- [ ] Genera señales sin falsos positivos (testing con datos mock)

---

## ✅ Criterios de Aceptación

1. ✅ Detecta unusual options activity en strikes ATM
2. ✅ Identifica cambios significativos en open interest
3. ✅ Genera señales correlacionadas con movimientos posteriores

