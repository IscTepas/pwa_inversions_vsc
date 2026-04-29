# AI SKILL DEVELOPMENT - Sistema Global

**VersiÃ³n**: 2.2  
**Fecha**: 2026-02-10  
**Estado**: âœ… FASE 0 y FASE 1 Completadas  

MetodologÃ­a hÃ­brida para desarrollo asistido por IA con agentes, skills, conocimiento y tickets trazables.

---

## ðŸŽ¯ Estado del Sistema

| Componente | Estado | Ãšltima ActualizaciÃ³n |
|-----------|--------|----------------------|
| **Estructura ai_global/** | âœ… Creada | 2026-02-10 |
| **Agentes (5)** | âœ… Documentados | 2026-02-10 |
| **Skills Globales** | âœ… CatÃ¡logo listo | 2026-02-10 |
| **Templates (9)** | âœ… Completos | 2026-02-10 |
| **Knowledge Management** | âœ… Estructura lista | 2026-02-10 |
| **Tickets System** | âœ… Sistema implementado | 2026-02-10 |
| **FASE 0** | âœ… Completada | 2026-02-10 |
| **FASE 1** | âœ… Completada | 2026-02-10 |

---

## ðŸ¤– Equipo de Agentes (5)

| Agente | Rol | Fases | Entrada | Salida |
|--------|-----|-------|---------|--------|
| ðŸ§  **Picoro** | Analista/Arquitecto | 2.3, 2.4, 3 | Tickets, Specs | Knowledge, Arquitectura, Tickets |
| ðŸ‘¨â€ðŸ’» **Goku** | Dev Senior | 2.4, 3 | Tickets, Knowledge | CÃ³digo funcional |
| ðŸ¥· **Vegeta** | Optimizador/Seguridad | 3 | CÃ³digo | CÃ³digo optimizado |
| ðŸ§ª **Bulma** | QA/Tester | 3 | CÃ³digo | CÃ³digo validado |
| ðŸ—„ï¸ **Krillin** | Especialista BD | 2.4, 3 | Specs, Models | Persistencia, REST API |

**Ver**: [agents/README.md](./agents/README.md)

---

## ðŸŽ¯ Skills Disponibles

**Total**: 40+ skills globales reutilizables

**CategorÃ­as**:
- ðŸ” AnÃ¡lisis y DiseÃ±o (5 skills)
- ðŸ’» Desarrollo React/TypeScript (10 skills)
- ðŸ”Œ IntegraciÃ³n APIs (4 skills)
- ðŸ“Š Indicadores TÃ©cnicos (4 skills)
- ðŸ“š DocumentaciÃ³n (3 skills)
- âš¡ OptimizaciÃ³n y Seguridad (5 skills)
- ðŸ§ª Testing y ValidaciÃ³n (7 skills)
- ðŸ—„ï¸ Base de Datos (5 skills)

**Ver**: [skills/README.md](./skills/README.md)

---

## ðŸ“š Knowledge Management

### ðŸ” Local (`knowledge/local/`)
Investigaciones internas generadas por Picoro ANTES de implementaciÃ³n.

### ðŸŒ Remote (`knowledge/remote/`)
Referencias externas a documentaciÃ³n oficial, APIs, tutoriales.

**Ver**: [knowledge/README.md](./knowledge/README.md)

---

## ðŸ“‹ Templates Disponibles (9)

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

## ðŸŽ« Sistema de Tickets

- ðŸ†• **TKT-GLOBAL-###**: Tickets globales (metodologÃ­a, skills)
- ðŸŽ¯ **TKT-<CODIGO>-###**: Tickets de proyecto (ej: TKT-INVRFIC-###)

**Estados**: Open â†’ In Progress â†’ In Review â†’ Blocked â†’ Closed âœ…

**Criterio para Cerrar**: Solo con evidencia de ejecuciÃ³n/validaciÃ³n

**Ver**: [tickets/README.md](./tickets/README.md)

---

## ðŸ“Š Estructura del Directorio

```
ai_skill_dev1/
â””â”€â”€ ai_global/
    â”œâ”€â”€ AI_SKILL_DEVELOPMENT_METHODOLOGY.md  # MetodologÃ­a completa
    â”œâ”€â”€ README.md (este archivo)
    â”‚
    â”œâ”€â”€ agents/                              # ðŸ¤– Agentes
    â”‚   â”œâ”€â”€ README.md
    â”‚   â”œâ”€â”€ fic_picoro_agent_orchestrator.md
    â”‚   â”œâ”€â”€ fic_goku_agent_dev1.md
    â”‚   â”œâ”€â”€ fic_vegeta_agent_dev2.md
    â”‚   â”œâ”€â”€ fic_bulma_agent_tester1.md
    â”‚   â””â”€â”€ fic_krillin_agent_db.md
    â”‚
    â”œâ”€â”€ skills/                              # ðŸŽ¯ Skills
    â”‚   â””â”€â”€ README.md (catÃ¡logo de 40+ skills)
    â”‚
    â”œâ”€â”€ knowledge/                           # ðŸ“š Knowledge
    â”‚   â”œâ”€â”€ README.md
    â”‚   â”œâ”€â”€ local/
    â”‚   â”‚   â””â”€â”€ README.md (investigaciones)
    â”‚   â””â”€â”€ remote/
    â”‚       â””â”€â”€ README.md (referencias)
    â”‚
    â”œâ”€â”€ tickets/                             # ðŸŽ« Tickets
    â”‚   â””â”€â”€ README.md
    â”‚
    â”œâ”€â”€ templates/                           # ðŸ“‹ Templates
    â”‚   â”œâ”€â”€ README.md
    â”‚   â”œâ”€â”€ SPECIFICATION_TEMPLATE.md
    â”‚   â”œâ”€â”€ SPEC_INCREMENTAL_TEMPLATE.md
    â”‚   â”œâ”€â”€ AGENT_TEMPLATE.md
    â”‚   â”œâ”€â”€ SKILL_TEMPLATE.md
    â”‚   â”œâ”€â”€ TICKET_TEMPLATE.md
    â”‚   â”œâ”€â”€ KNOWLEDGE_NOTE_TEMPLATE.md
    â”‚   â”œâ”€â”€ README_KNOWLEDGE_TEMPLATE.md
    â”‚   â”œâ”€â”€ PROJECT_CONFIG_TEMPLATE.yaml
    â”‚   â””â”€â”€ DATABASE_CONFIG_TEMPLATE.yaml
    â”‚
    â”œâ”€â”€ prompts/                             # ðŸ“ Prompts
    â”‚   â””â”€â”€ README.md
    â”‚
    â””â”€â”€ development/                         # ðŸš€ Base
        â””â”€â”€ workflow_agents.yaml (workflow base)
```

---

## ðŸš€ CÃ³mo Usar el Sistema

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

## ðŸ“Š EstadÃ­sticas del Sistema

| MÃ©trica | Valor |
|---------|-------|
| **Agentes Activos** | 5 |
| **Skills Globales** | 40+ |
| **Templates** | 9 |
| **Fases de Desarrollo** | 4 (0, 1, 2, 3) |
| **Sub-fases** | 10+ (2.1-2.4, 3.1-3.3) |
| **Gates de ValidaciÃ³n** | 8+ (DATABASE, SPEC, MODEL, etc.) |
| **Protocolos de Visibilidad** | 3 (AGENT HEADER, COMPLETION, TRANSITION) |

---

## âœ… Checklist de FASE 0/1

- [x] Estructura `ai_global/` creada
- [x] 5 agentes documentados
- [x] 40+ skills catalogados
- [x] 9 templates creados
- [x] Sistema de knowledge implementado
- [x] Sistema de tickets implementado
- [x] READMEs completados
- [x] Workflow base definido
- [x] FASE 0 completada âœ…
- [x] FASE 1 completada âœ…

---

## ðŸ“š DocumentaciÃ³n Completa

- ðŸ“– [MetodologÃ­a Completa (v2.2)](./AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- ðŸ¤– [Agentes](./agents/README.md)
- ðŸŽ¯ [Skills](./skills/README.md)
- ðŸ“š [Knowledge](./knowledge/README.md)
- ðŸŽ« [Tickets](./tickets/README.md)
- ðŸ“‹ [Templates](./templates/README.md)
- ðŸ“ [Prompts por Fase](./prompts/README.md)

---

## ðŸŽ¯ PrÃ³ximos Pasos

### Para iniciar FASE 2 (Nuevo Proyecto)

```
1. Copiar: templates/SPECIFICATION_TEMPLATE.md
2. Llenar: Con requisitos del nuevo proyecto
3. Guardar: En projects/pwa/<proyecto>/ai_work_flow/docs/specs/SPECIFICATION.md
4. Ejecutar: DATABASE SELECTION GATE + SPECIFICATION GATE
5. Llamar: Picoro para FASE 2.3 (InvestigaciÃ³n)
```

---

## ðŸ”— Enlaces RÃ¡pidos

- [Agentes](./agents/)
- [Skills](./skills/)
- [Knowledge](./knowledge/)
- [Tickets](./tickets/)
- [Templates](./templates/)
- [Prompts](./prompts/)
- [MetodologÃ­a](./AI_SKILL_DEVELOPMENT_METHODOLOGY.md)

---

**VersiÃ³n**: 2.2  
**Ãšltima actualizaciÃ³n**: 2026-02-10  
**Estado**: âœ… Operativo - FASE 0 y FASE 1 Completadas

