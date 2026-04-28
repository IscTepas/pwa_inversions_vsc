# AI SKILL DEVELOPMENT AND SPEC DRIVEN ASSISTANCE AI - Metodología Híbrida
## Sistema Multi-Proyecto con Agentes, Skills, Conocimientos, Especificaciones y Tickets

**Versión**: 2.2  
**Fecha**: 11 de Marzo 2026  
**Autor**: Dr. Francisco Ibarra Carlos  
**Nota**: v2.2 - Soporte multi-base de datos, gates obligatorios de selección/modelado y separación formal PWA vs REST API

---

## 1. Introducción

La metodología **AI SKILL DEVELOPMENT** y **SPEC DRIVEN ASSISTANCE AI** permite gestionar múltiples proyectos PWA de manera profesional, modular, reutilizable y trazable mediante:

- 🤖 **Agentes**: Entidades autónomas que ejecutan tareas
- 🎯 **Skills**: Capacidades reutilizables entre proyectos  
- 📚 **Knowledge**: Cuadernos de conocimiento local y remoto
- 🎫 **Tickets**: Control de cambios trazable
- 📋 **Specifications**: Especificaciones detalladas básica (inicial) e incrementales

---

## 2. Estructura del Folder ai_skill_dev1

```
ai_skill_dev1/
├── ai_global/                              # Recursos globales reutilizables
│   ├── AI_SKILL_DEVELOPMENT_METHODOLOGY.md
│   ├── README.md
│   ├── agents/                             # 🤖 Agentes de IA de Desarrollo
│   ├── skills/                             # 🎯 Skills de IA (documentación)
│   ├── knowledge/                          # 📚 Conocimiento global
│   ├── templates/                          # 📋 Templates
│   ├── tickets/                            # 🎫 Tickets globales
│   └── prompts/                            # 📝 Prompts por fase
│
├── packages/                    # Librerías compartidas (design system, utils, etc.)
│   ├── ui-library/
│   ├── utils/
│   └── types/
│
└── projects/                              # Proyectos organizados por categoría
    ├── pwa/
    │   └── pwa_inversions_drfic/          # Proyecto: Plataforma de Inversiones IA
    └── api/
        └── rest_api_inversions_drfic/     # Persistencia real
```

---

## 3. Componentes Core

### 3.1 🤖 Agentes (Agents)

**Definición**: Entidad autónoma que ejecuta tareas usando uno o más skills.

**Los 5 Agentes de Desarrollo** (en `ai_global/agents/`):

| Agente | Rol | Fases | Skills | Función |
|--------|-----|-------|--------|---------|
| 🧠 **Picoro** | Analista/Arquitecto | 2.3, 2.4 | ticket_analyzer, architecture_designer, requirement_validator, knowledge_synthesizer | Analiza specs, diseña arquitectura, genera knowledge |
| 👨‍💻 **Goku** | Dev Senior | 2.4, 3 | react_code_generator, typescript_code_generator, ... (8 skills) | Implementa código React/TypeScript, APIs, integra brokers |
| 🥷 **Vegeta** | Optimizador/Seguridad | 3 | code_optimizer, performance_analyzer, security_auditor, pattern_refactorer | Optimiza latencia, audita seguridad, refactoriza |
| 🧪 **Bulma** | QA/Tester | 3 | test_case_generator, bug_detector, quality_validator, regression_tester | Crea tests, valida indicadores, cierra tickets |
| 🗄️ **Krillin** | Especialista BD | 2.4, 3 | database_schema_designer, database_migrator, database_connector | Diseña persistencia, ejecuta migraciones, REST API |

---

### 3.2 🎯 Skills de IA

**Definición**: Capacidades específicas de los agentes para ejecutar tareas.

**Catálogo Global**: 40+ skills registradas en `ai_global/skills/`

**Categorías**: Análisis, React/TypeScript, APIs, Indicadores, Documentación, Optimización, Testing, Base de Datos

**Referencia**: Ver `ai_global/skills/README.md`

---

### 3.3 📚 Knowledge

**Sistema Híbrido**: Combina investigación local (`.md` interna) con referencias remotas (documentación oficial, APIs, NotebookLM).

**Knowledge Local** (`knowledge/local/`):
- Investigaciones internas generadas por Picoro ANTES de implementación
- Lecciones aprendidas durante desarrollo
- Comparativas de tecnologías y decisiones arquitectónicas

**Knowledge Remote** (`knowledge/remote/`):
- Referencias a documentación oficial de APIs
- URLs de brokers, feeds de datos, librerías
- NotebookLM con análisis profundo

**Principio**: Conocimiento se genera en FASE 2.3, ANTES de crear tickets.

---

### 3.4 🎫 Tickets

**Convención de Nombres**:
- Global: `TKT-GLOBAL-###` (metodología, skills nuevos)
- Proyecto Inversiones: `TKT-INVRFIC-###`

**Estados**: Open → In Progress → Review → Blocked → Closed ✅

**Regla de Cierre**: Solo con evidencia de prueba (tests, validación manual, fecha, responsable).

---

### 3.5 🗄️ Base de Datos (Database Configuration)

**Agente**: `@krillin` — Especialista BD

**Separación Formal**:
- PWA: Contrato de datos en `data/<motor>/models/` `data/<motor>/schema/`
- REST API: Persistencia real en `projects/api/rest_api_inversions_drfic/`

**Motores Soportados**: Supabase, MongoDB, PostgreSQL, MySQL, SQLite, Firebase

**Gates Obligatorios**:
1. `DATABASE SELECTION GATE`: ¿Qué BD(s) usarás?
2. `DATABASE MODEL GATE`: ¿Entrega usuario o genera IA los modelos?
3. `MODEL MATURITY GATE`: draft → candidate → approved

**Regla de Credenciales (Oro)**: ❌ NUNCA en código → ✅ SIEMPRE en `.env` (gitignored)

---

## 4. FASES DE DESARROLLO

### FASE 0: Setup Único del Sistema ⚙️

**Objetivo**: Crear `ai_global/` con agentes, skills, templates.

**Salida**: Sistema base listo ✅

### FASE 1: Agentes y Skills Globales 🤖

**Objetivo**: Validar y completar catálogo global.

**Salida**: Sistema activo ✅

### FASE 2: Inicio de Nuevo Proyecto 🚀

**Sub-fases**:
- **2.1-2.2**: Selección de BD, crear estructura, config
- **2.3**: Picoro investiga → knowledge/local + knowledge/remote
- **2.4**: Diseño, Krillin persistencia, Goku estructura, crear tickets

**Salida**: Proyecto estructurado ✅

### FASE 3: Desarrollo Guiado por Tickets 💻

**Ciclo por cada ticket**:
```
Picoro → Goku → Vegeta ∥ Bulma → Validación → ✅ Cerrado
```

**Salida**: Proyecto implementado ✅

---

## 5. Protocolos Operativos

### 5.1 Protocolo de Visibilidad de Agente

**AGENT HEADER** (inicio de tarea):
```
---
🧠 @picoro · Analista/Arquitecto · FASE 2.3
🎯 skill: knowledge_synthesizer
📋 tarea: Generar knowledge base desde SPEC
---
```

**COMPLETION LINE** (fin de tarea):
```
✅ @picoro completó · knowledge_synthesizer · output: knowledge/local/01_research.md
```

**AGENT TRANSITION** (cambio de agente):
```
---
➡️ Transicion de agente
   @picoro ──→ @goku · FASE 3
   Contexto pasado: knowledge base + tickets
---
```

---

## 6. Gates Obligatorios

### 6.1 DATABASE SELECTION GATE

> **Regla de oro**: Antes de revisar la SPEC, preguntar qué base(s) de datos usará el proyecto.

**Pregunta obligatoria**:
```
🔓 DATABASE SELECTION GATE
Selecciona la(s) base(s) de datos del proyecto.
- Supabase
- MongoDB
- PostgreSQL
- MySQL/MariaDB
- SQLite
- Firebase Firestore
```

### 6.2 SPECIFICATION GATE

> **Regla de oro**: La IA nunca avanza sin confirmar que SPECIFICATION.md existe en ruta oficial.

**Ruta oficial**:
```
projects/pwa/pwa_inversions_drfic/ai_work_flow/docs/specs/SPECIFICATION.md
```

### 6.3 DATABASE MODEL GATE

> **Regla de oro**: Después de seleccionar BDs, preguntar si usuario entrega modelos o la IA los propone.

---

## 7. Referencias Rápidas

- **Agentes**: [ai_global/agents/README.md](./agents/README.md)
- **Skills**: [ai_global/skills/README.md](./skills/README.md)
- **Knowledge**: [ai_global/knowledge/README.md](./knowledge/README.md)
- **Tickets**: [ai_global/tickets/README.md](./tickets/README.md)
- **Templates**: [ai_global/templates/README.md](./templates/README.md)

---

**Versión**: 2.2  
**Última actualización**: 2026-03-11  
**Estado**: ✅ Operativo
