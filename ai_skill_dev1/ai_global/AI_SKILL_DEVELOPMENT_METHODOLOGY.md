# AI SKILL DEVELOPMENT AND SPEC DRIVEN ASSISTANCE AI - MetodologÃ­a HÃ­brida
## Sistema Multi-Proyecto con Agentes, Skills, Conocimientos, Especificaciones y Tickets

**VersiÃ³n**: 2.2  
**Fecha**: 11 de Marzo 2026  
**Autor**: Dr. Francisco Ibarra Carlos  
**Nota**: v2.2 - Soporte multi-base de datos, gates obligatorios de selecciÃ³n/modelado y separaciÃ³n formal PWA vs REST API

---

## 1. IntroducciÃ³n

La metodologÃ­a **AI SKILL DEVELOPMENT** y **SPEC DRIVEN ASSISTANCE AI** permite gestionar mÃºltiples proyectos PWA de manera profesional, modular, reutilizable y trazable mediante:

- ðŸ¤– **Agentes**: Entidades autÃ³nomas que ejecutan tareas
- ðŸŽ¯ **Skills**: Capacidades reutilizables entre proyectos  
- ðŸ“š **Knowledge**: Cuadernos de conocimiento local y remoto
- ðŸŽ« **Tickets**: Control de cambios trazable
- ðŸ“‹ **Specifications**: Especificaciones detalladas bÃ¡sica (inicial) e incrementales

---

## 2. Estructura del Folder ai_skill_dev1

```
ai_skill_dev1/
â”œâ”€â”€ ai_global/                              # Recursos globales reutilizables
â”‚   â”œâ”€â”€ AI_SKILL_DEVELOPMENT_METHODOLOGY.md
â”‚   â”œâ”€â”€ README.md
â”‚   â”œâ”€â”€ agents/                             # ðŸ¤– Agentes de IA de Desarrollo
â”‚   â”œâ”€â”€ skills/                             # ðŸŽ¯ Skills de IA (documentaciÃ³n)
â”‚   â”œâ”€â”€ knowledge/                          # ðŸ“š Conocimiento global
â”‚   â”œâ”€â”€ templates/                          # ðŸ“‹ Templates
â”‚   â”œâ”€â”€ tickets/                            # ðŸŽ« Tickets globales
â”‚   â””â”€â”€ prompts/                            # ðŸ“ Prompts por fase
â”‚
â”œâ”€â”€ packages/                    # LibrerÃ­as compartidas (design system, utils, etc.)
â”‚   â”œâ”€â”€ ui-library/
â”‚   â”œâ”€â”€ utils/
â”‚   â””â”€â”€ types/
â”‚
â””â”€â”€ projects/                              # Proyectos organizados por categorÃ­a
    â”œâ”€â”€ pwa/
    â”‚   â””â”€â”€ pwa_inversions_team5/          # Proyecto: Plataforma de Inversiones IA
    â””â”€â”€ api/
        â””â”€â”€ rest_api_inversions_team5/     # Persistencia real
```

---

## 3. Componentes Core

### 3.1 ðŸ¤– Agentes (Agents)

**DefiniciÃ³n**: Entidad autÃ³noma que ejecuta tareas usando uno o mÃ¡s skills.

**Los 5 Agentes de Desarrollo** (en `ai_global/agents/`):

| Agente | Rol | Fases | Skills | FunciÃ³n |
|--------|-----|-------|--------|---------|
| ðŸ§  **Picoro** | Analista/Arquitecto | 2.3, 2.4 | ticket_analyzer, architecture_designer, requirement_validator, knowledge_synthesizer | Analiza specs, diseÃ±a arquitectura, genera knowledge |
| ðŸ‘¨â€ðŸ’» **Goku** | Dev Senior | 2.4, 3 | react_code_generator, typescript_code_generator, ... (8 skills) | Implementa cÃ³digo React/TypeScript, APIs, integra brokers |
| ðŸ¥· **Vegeta** | Optimizador/Seguridad | 3 | code_optimizer, performance_analyzer, security_auditor, pattern_refactorer | Optimiza latencia, audita seguridad, refactoriza |
| ðŸ§ª **Bulma** | QA/Tester | 3 | test_case_generator, bug_detector, quality_validator, regression_tester | Crea tests, valida indicadores, cierra tickets |
| ðŸ—„ï¸ **Krillin** | Especialista BD | 2.4, 3 | database_schema_designer, database_migrator, database_connector | DiseÃ±a persistencia, ejecuta migraciones, REST API |

---

### 3.2 ðŸŽ¯ Skills de IA

**DefiniciÃ³n**: Capacidades especÃ­ficas de los agentes para ejecutar tareas.

**CatÃ¡logo Global**: 40+ skills registradas en `ai_global/skills/`

**CategorÃ­as**: AnÃ¡lisis, React/TypeScript, APIs, Indicadores, DocumentaciÃ³n, OptimizaciÃ³n, Testing, Base de Datos

**Referencia**: Ver `ai_global/skills/README.md`

---

### 3.3 ðŸ“š Knowledge

**Sistema HÃ­brido**: Combina investigaciÃ³n local (`.md` interna) con referencias remotas (documentaciÃ³n oficial, APIs, NotebookLM).

**Knowledge Local** (`knowledge/local/`):
- Investigaciones internas generadas por Picoro ANTES de implementaciÃ³n
- Lecciones aprendidas durante desarrollo
- Comparativas de tecnologÃ­as y decisiones arquitectÃ³nicas

**Knowledge Remote** (`knowledge/remote/`):
- Referencias a documentaciÃ³n oficial de APIs
- URLs de brokers, feeds de datos, librerÃ­as
- NotebookLM con anÃ¡lisis profundo

**Principio**: Conocimiento se genera en FASE 2.3, ANTES de crear tickets.

---

### 3.4 ðŸŽ« Tickets

**ConvenciÃ³n de Nombres**:
- Global: `TKT-GLOBAL-###` (metodologÃ­a, skills nuevos)
- Proyecto Inversiones: `TKT-INVRFIC-###`

**Estados**: Open â†’ In Progress â†’ Review â†’ Blocked â†’ Closed âœ…

**Regla de Cierre**: Solo con evidencia de prueba (tests, validaciÃ³n manual, fecha, responsable).

---

### 3.5 ðŸ—„ï¸ Base de Datos (Database Configuration)

**Agente**: `@krillin` â€” Especialista BD

**SeparaciÃ³n Formal**:
- PWA: Contrato de datos en `data/<motor>/models/` `data/<motor>/schema/`
- REST API: Persistencia real en `projects/api/rest_api_inversions_team5/`

**Motores Soportados**: Supabase, MongoDB, PostgreSQL, MySQL, SQLite, Firebase

**Gates Obligatorios**:
1. `DATABASE SELECTION GATE`: Â¿QuÃ© BD(s) usarÃ¡s?
2. `DATABASE MODEL GATE`: Â¿Entrega usuario o genera IA los modelos?
3. `MODEL MATURITY GATE`: draft â†’ candidate â†’ approved

**Regla de Credenciales (Oro)**: âŒ NUNCA en cÃ³digo â†’ âœ… SIEMPRE en `.env` (gitignored)

---

## 4. FASES DE DESARROLLO

### FASE 0: Setup Ãšnico del Sistema âš™ï¸

**Objetivo**: Crear `ai_global/` con agentes, skills, templates.

**Salida**: Sistema base listo âœ…

### FASE 1: Agentes y Skills Globales ðŸ¤–

**Objetivo**: Validar y completar catÃ¡logo global.

**Salida**: Sistema activo âœ…

### FASE 2: Inicio de Nuevo Proyecto ðŸš€

**Sub-fases**:
- **2.1-2.2**: SelecciÃ³n de BD, crear estructura, config
- **2.3**: Picoro investiga â†’ knowledge/local + knowledge/remote
- **2.4**: DiseÃ±o, Krillin persistencia, Goku estructura, crear tickets

**Salida**: Proyecto estructurado âœ…

### FASE 3: Desarrollo Guiado por Tickets ðŸ’»

**Ciclo por cada ticket**:
```
Picoro â†’ Goku â†’ Vegeta âˆ¥ Bulma â†’ ValidaciÃ³n â†’ âœ… Cerrado
```

**Salida**: Proyecto implementado âœ…

---

## 5. Protocolos Operativos

### 5.1 Protocolo de Visibilidad de Agente

**AGENT HEADER** (inicio de tarea):
```
---
ðŸ§  @picoro Â· Analista/Arquitecto Â· FASE 2.3
ðŸŽ¯ skill: knowledge_synthesizer
ðŸ“‹ tarea: Generar knowledge base desde SPEC
---
```

**COMPLETION LINE** (fin de tarea):
```
âœ… @picoro completÃ³ Â· knowledge_synthesizer Â· output: knowledge/local/01_research.md
```

**AGENT TRANSITION** (cambio de agente):
```
---
âž¡ï¸ Transicion de agente
   @picoro â”€â”€â†’ @goku Â· FASE 3
   Contexto pasado: knowledge base + tickets
---
```

---

## 6. Gates Obligatorios

### 6.1 DATABASE SELECTION GATE

> **Regla de oro**: Antes de revisar la SPEC, preguntar quÃ© base(s) de datos usarÃ¡ el proyecto.

**Pregunta obligatoria**:
```
ðŸ”“ DATABASE SELECTION GATE
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
projects/pwa/pwa_inversions_team5/ai_work_flow/docs/specs/SPECIFICATION.md
```

### 6.3 DATABASE MODEL GATE

> **Regla de oro**: DespuÃ©s de seleccionar BDs, preguntar si usuario entrega modelos o la IA los propone.

---

## 7. Referencias RÃ¡pidas

- **Agentes**: [ai_global/agents/README.md](./agents/README.md)
- **Skills**: [ai_global/skills/README.md](./skills/README.md)
- **Knowledge**: [ai_global/knowledge/README.md](./knowledge/README.md)
- **Tickets**: [ai_global/tickets/README.md](./tickets/README.md)
- **Templates**: [ai_global/templates/README.md](./templates/README.md)

---

**VersiÃ³n**: 2.2  
**Ãšltima actualizaciÃ³n**: 2026-03-11  
**Estado**: âœ… Operativo

