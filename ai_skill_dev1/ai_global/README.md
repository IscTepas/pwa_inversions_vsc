# AI SKILL DEVELOPMENT - Sistema Global

**Versión**: 2.2  
**Fecha**: 2026-02-10  
**Estado**: ✅ FASE 0 y FASE 1 Completadas  

Metodología híbrida para desarrollo asistido por IA con agentes, skills, conocimiento y tickets trazables.

---

## 🎯 Estado del Sistema

| Componente | Estado | Última Actualización |
|-----------|--------|----------------------|
| **Estructura ai_global/** | ✅ Creada | 2026-02-10 |
| **Agentes (5)** | ✅ Documentados | 2026-02-10 |
| **Skills Globales** | ✅ Catálogo listo | 2026-02-10 |
| **Templates (9)** | ✅ Completos | 2026-02-10 |
| **Knowledge Management** | ✅ Estructura lista | 2026-02-10 |
| **Tickets System** | ✅ Sistema implementado | 2026-02-10 |
| **FASE 0** | ✅ Completada | 2026-02-10 |
| **FASE 1** | ✅ Completada | 2026-02-10 |

---

## 🤖 Equipo de Agentes (5)

| Agente | Rol | Fases | Entrada | Salida |
|--------|-----|-------|---------|--------|
| 🧠 **Picoro** | Analista/Arquitecto | 2.3, 2.4, 3 | Tickets, Specs | Knowledge, Arquitectura, Tickets |
| 👨‍💻 **Goku** | Dev Senior | 2.4, 3 | Tickets, Knowledge | Código funcional |
| 🥷 **Vegeta** | Optimizador/Seguridad | 3 | Código | Código optimizado |
| 🧪 **Bulma** | QA/Tester | 3 | Código | Código validado |
| 🗄️ **Krillin** | Especialista BD | 2.4, 3 | Specs, Models | Persistencia, REST API |

**Ver**: [agents/README.md](./agents/README.md)

---

## 🎯 Skills Disponibles

**Total**: 40+ skills globales reutilizables

**Categorías**:
- 🔍 Análisis y Diseño (5 skills)
- 💻 Desarrollo React/TypeScript (10 skills)
- 🔌 Integración APIs (4 skills)
- 📊 Indicadores Técnicos (4 skills)
- 📚 Documentación (3 skills)
- ⚡ Optimización y Seguridad (5 skills)
- 🧪 Testing y Validación (7 skills)
- 🗄️ Base de Datos (5 skills)

**Ver**: [skills/README.md](./skills/README.md)

---

## 📚 Knowledge Management

### 🔍 Local (`knowledge/local/`)
Investigaciones internas generadas por Picoro ANTES de implementación.

### 🌐 Remote (`knowledge/remote/`)
Referencias externas a documentación oficial, APIs, tutoriales.

**Ver**: [knowledge/README.md](./knowledge/README.md)

---

## 📋 Templates Disponibles (9)

| Template | Uso |
|----------|-----|
| SPECIFICATION_TEMPLATE | Proyecto nuevo desde cero |
| SPEC_INCREMENTAL_TEMPLATE | Cambios grandes |
| AGENT_TEMPLATE | Documentar agentes |
| SKILL_TEMPLATE | Documentar skills |
| TICKET_TEMPLATE | Crear tickets |
| KNOWLEDGE_NOTE_TEMPLATE | Lecciones y patrones |
| README_KNOWLEDGE_TEMPLATE | Knowledge README |
| PROJECT_CONFIG_TEMPLATE | Config de proyecto |
| DATABASE_CONFIG_TEMPLATE | Config de bases de datos |

**Ver**: [templates/README.md](./templates/README.md)

---

## 🎫 Sistema de Tickets

- 🆕 **TKT-GLOBAL-###**: Tickets globales (metodología, skills)
- 🎯 **TKT-<CODIGO>-###**: Tickets de proyecto (ej: TKT-INVRFIC-###)

**Estados**: Open → In Progress → In Review → Blocked → Closed ✅

**Criterio para Cerrar**: Solo con evidencia de ejecución/validación

**Ver**: [tickets/README.md](./tickets/README.md)

---

## 📊 Estructura del Directorio

```
ai_skill_dev1/
└── ai_global/
    ├── AI_SKILL_DEVELOPMENT_METHODOLOGY.md  # Metodología completa
    ├── README.md (este archivo)
    │
    ├── agents/                              # 🤖 Agentes
    │   ├── README.md
    │   ├── fic_picoro_agent_orchestrator.md
    │   ├── fic_goku_agent_dev1.md
    │   ├── fic_vegeta_agent_dev2.md
    │   ├── fic_bulma_agent_tester1.md
    │   └── fic_krillin_agent_db.md
    │
    ├── skills/                              # 🎯 Skills
    │   └── README.md (catálogo de 40+ skills)
    │
    ├── knowledge/                           # 📚 Knowledge
    │   ├── README.md
    │   ├── local/
    │   │   └── README.md (investigaciones)
    │   └── remote/
    │       └── README.md (referencias)
    │
    ├── tickets/                             # 🎫 Tickets
    │   └── README.md
    │
    ├── templates/                           # 📋 Templates
    │   ├── README.md
    │   ├── SPECIFICATION_TEMPLATE.md
    │   ├── SPEC_INCREMENTAL_TEMPLATE.md
    │   ├── AGENT_TEMPLATE.md
    │   ├── SKILL_TEMPLATE.md
    │   ├── TICKET_TEMPLATE.md
    │   ├── KNOWLEDGE_NOTE_TEMPLATE.md
    │   ├── README_KNOWLEDGE_TEMPLATE.md
    │   ├── PROJECT_CONFIG_TEMPLATE.yaml
    │   └── DATABASE_CONFIG_TEMPLATE.yaml
    │
    ├── prompts/                             # 📝 Prompts
    │   └── README.md
    │
    └── development/                         # 🚀 Base
        └── workflow_agents.yaml (workflow base)
```

---

## 🚀 Cómo Usar el Sistema

### Iniciar FASE 2 (Proyecto Nuevo)

```bash
1. Leer: AI_SKILL_DEVELOPMENT_METHODOLOGY.md
2. Usar: templates/ para crear estructura
3. Activar: agents/README.md para flujo
4. Crear: proyecto en projects/pwa/ o projects/api/
```

### Crear Nuevo Skill

```
1. Documentar en: ai_global/skills/<skill_name>.md
2. Usar: SKILL_TEMPLATE.md
3. Asignar a agente(s) en: agents/<agente>.md
4. Registrar en proyecto: workflow_agents.yaml
```

### Crear Nuevo Agente (Raro)

```
1. Documentar en: ai_global/agents/fic_<nombre>_agent_<rol>.md
2. Usar: AGENT_TEMPLATE.md
3. Asignar skills
4. Agregar en matriz de workflows
```

---

## 📊 Estadísticas del Sistema

| Métrica | Valor |
|---------|-------|
| **Agentes Activos** | 5 |
| **Skills Globales** | 40+ |
| **Templates** | 9 |
| **Fases de Desarrollo** | 4 (0, 1, 2, 3) |
| **Sub-fases** | 10+ (2.1-2.4, 3.1-3.3) |
| **Gates de Validación** | 8+ (DATABASE, SPEC, MODEL, etc.) |
| **Protocolos de Visibilidad** | 3 (AGENT HEADER, COMPLETION, TRANSITION) |

---

## ✅ Checklist de FASE 0/1

- [x] Estructura `ai_global/` creada
- [x] 5 agentes documentados
- [x] 40+ skills catalogados
- [x] 9 templates creados
- [x] Sistema de knowledge implementado
- [x] Sistema de tickets implementado
- [x] READMEs completados
- [x] Workflow base definido
- [x] FASE 0 completada ✅
- [x] FASE 1 completada ✅

---

## 📚 Documentación Completa

- 📖 [Metodología Completa (v2.2)](./AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- 🤖 [Agentes](./agents/README.md)
- 🎯 [Skills](./skills/README.md)
- 📚 [Knowledge](./knowledge/README.md)
- 🎫 [Tickets](./tickets/README.md)
- 📋 [Templates](./templates/README.md)
- 📝 [Prompts por Fase](./prompts/README.md)

---

## 🎯 Próximos Pasos

### Para iniciar FASE 2 (Nuevo Proyecto)

```
1. Copiar: templates/SPECIFICATION_TEMPLATE.md
2. Llenar: Con requisitos del nuevo proyecto
3. Guardar: En projects/pwa/<proyecto>/ai_work_flow/docs/specs/SPECIFICATION.md
4. Ejecutar: DATABASE SELECTION GATE + SPECIFICATION GATE
5. Llamar: Picoro para FASE 2.3 (Investigación)
```

---

## 🔗 Enlaces Rápidos

- [Agentes](./agents/)
- [Skills](./skills/)
- [Knowledge](./knowledge/)
- [Tickets](./tickets/)
- [Templates](./templates/)
- [Prompts](./prompts/)
- [Metodología](./AI_SKILL_DEVELOPMENT_METHODOLOGY.md)

---

**Versión**: 2.2  
**Última actualización**: 2026-02-10  
**Estado**: ✅ Operativo - FASE 0 y FASE 1 Completadas
