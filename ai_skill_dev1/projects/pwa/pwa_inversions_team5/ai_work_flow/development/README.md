# 📋 README - Desarrollo del Proyecto

> Documentación del flujo de trabajo, tareas de agentes y progreso del proyecto.

---

## 📖 Propósito

Este directorio contiene:
- **workflow_agents.yaml**: Tareas específicas de cada agente (MEMO, BERNA, OVER, MEPU, BANDA)
- **README.md**: Este archivo

---

## 🎯 Tareas por Agente

### MEMO - Analista/Arquitecto
**Responsable de**: Investigación, diseño de arquitectura, generación de tickets

| Tarea | Fase | Estado |
|-------|------|--------|
| DATABASE SELECTION GATE | 2.1 | ✅ Completado |
| DATABASE MODEL GATE | 2.1 | ✅ Completado |
| Investigación: Brokers APIs | 2.3 | ⏳ Pendiente |
| Investigación: Indicadores | 2.3 | ⏳ Pendiente |
| Investigación: Estrategias Opciones | 2.3 | ⏳ Pendiente |
| Generar referencias remotas | 2.3 | ⏳ Pendiente |
| Diseñar arquitectura Broker Connector | 2.4 | ⏳ Pendiente |
| Diseñar arquitectura Signal Detector | 2.4 | ⏳ Pendiente |
| Crear tickets internos (8-12) | 2.4 | ⏳ Pendiente |

---

### BANDA - Especialista BD
**Responsable de**: Configuración de BD, schemas, persistencia, endpoints REST

| Tarea | Fase | Estado |
|-------|------|--------|
| DATABASE SELECTION GATE | 2.1 | ✅ Completado |
| DATABASE MODEL GATE | 2.1 | ✅ Completado |
| Capturar metadata conexión | 2.1 | ✅ Completado |
| Validar/proponer schema Supabase | 2.3 | ⏳ Pendiente |
| Validar/proponer schema MongoDB | 2.3 | ⏳ Pendiente |
| Generar .env.example | 2.4 | ⏳ Pendiente |
| Solicitar credenciales reales | 2.4 | 🚫 Bloqueado |
| Crear migraciones Supabase | 3 | ⏳ Pendiente |
| Crear migraciones MongoDB | 3 | ⏳ Pendiente |
| Ejecutar migraciones en DEV | 3 | ⏳ Pendiente |

---

### BERNA - Programador Senior
**Responsable de**: Estructura React, servicios, componentes, lógica de trading

| Tarea | Fase | Estado |
|-------|------|--------|
| Crear estructura Vite + React + TS | 2.4 | ⏳ Pendiente |
| Crear tipos globales | 2.4 | ⏳ Pendiente |
| Implementar broker_connector | 3 | ⏳ Pendiente |
| Implementar indicadores técnicos | 3 | ⏳ Pendiente |
| Implementar signal_detector | 3 | ⏳ Pendiente |
| Crear componentes UI | 3 | ⏳ Pendiente |
| Integrar datos de API REST | 3 | ⏳ Pendiente |

---

### OVER - Optimizador/Seguridad
**Responsable de**: Code review, performance, seguridad, refactoring

| Tarea | Fase | Estado |
|-------|------|--------|
| Code review broker_connector | 3 | ⏳ Pendiente |
| Code review indicadores | 3 | ⏳ Pendiente |
| Code review signal_detector | 3 | ⏳ Pendiente |
| Auditoría de seguridad global | 3 | ⏳ Pendiente |

---

### MEPU - QA Tester
**Responsable de**: Testing, validación de precisión, quality assurance

| Tarea | Fase | Estado |
|-------|------|--------|
| Crear plan de testing | 3 | ⏳ Pendiente |
| Tests unitarios RSI(14) | 3 | ⏳ Pendiente |
| Tests unitarios MACD | 3 | ⏳ Pendiente |
| Tests integración E2E | 3 | ⏳ Pendiente |
| Error scenario testing | 3 | ⏳ Pendiente |
| Validación criterios aceptación | 3 | ⏳ Pendiente |

---

## 📊 Progreso General

```
FASE 2.1: Pre-Gates ✅ COMPLETADA
  ✅ DATABASE SELECTION GATE
  ✅ DATABASE MODEL GATE
  ✅ DATABASE CONNECTION METADATA
  ✅ DATABASE_CONFIG.yaml creado

FASE 2.2: Setup 🚧 EN PROGRESO
  🚧 workflow_agents.yaml (este archivo)
  🚧 SPECIFICATION.md (plantilla)
  ⏳ README proyectos (casi listo)

FASE 2.3: Investigación ⏳ PENDIENTE
  ⏳ MEMO: Investigación (5 archivos)
  ⏳ BANDA: Validación de schemas

FASE 2.4: Diseño ⏳ PENDIENTE
  ⏳ MEMO: Diseño arquitectura + tickets
  ⏳ BANDA: .env.example + solicitar creds

FASE 3: Implementación ⏳ NO INICIADA
  ⏳ BERNA: Implementación
  ⏳ OVER: Review y optimización
  ⏳ MEPU: Testing exhaustivo
```

---

## 🔗 Enlaces Rápidos

- [workflow_agents.yaml](workflow_agents.yaml) - Configuración detallada de todas las tareas
- [SPECIFICATION.md](../docs/specs/SPECIFICATION.md#L1) - Especificación técnica del proyecto (plantilla)
- [DATABASE_CONFIG.yaml](../../api/rest_api_inversions_team5/DATABASE_CONFIG.yaml) - Configuración multi-BD
- [Metodología](../../../../ai_global/AI_SKILL_DEVELOPMENT_METHODOLOGY_TEAM5.md) - FASE 2 completa

---

## ⚠️ Blockers Actuales

| Blocker | Impacto | Solución |
|---------|---------|----------|
| SPECIFICATION.md incompleto | Retrasa investigación MEMO | Usuario debe completar SPEC |
| Credenciales BD pendientes | Retrasa salida a FASE 3 | Usuario proporciona .env en FASE 2.4 |

---

## 📞 Próximo Paso

**FASE 2.2 continuará con**:
1. ✅ workflow_agents.yaml (HECHO)
2. ⏳ SPECIFICATION.md plantilla
3. ⏳ README actualizados

¿Confirmado que proceda?
