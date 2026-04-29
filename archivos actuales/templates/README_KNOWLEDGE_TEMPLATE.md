# ðŸ“š Knowledge - [Nombre del Proyecto]

> Template para README principal de knowledge de proyectos.  
> UbicaciÃ³n: `ai_skill_dev1/projects/<category>/<project_code>/knowledge/README.md`

---

## ðŸ“‹ Estado Actual

| Aspecto | Estado | Ãšltima ActualizaciÃ³n |
|---------|--------|----------------------|
| **InvestigaciÃ³n Local** | ðŸš§ Pendiente / âœ… Generado | YYYY-MM-DD HH:MM |
| **Referencias Externas** | ðŸš§ Pendiente / âœ… Generado | YYYY-MM-DD HH:MM |
| **Tickets Generados** | â³ No iniciado / âœ… Completado | YYYY-MM-DD HH:MM |
| **Fase del Proyecto** | FASE 1 / FASE 2 / FASE 3 | - |

**PropÃ³sito**: El estado actual permite a IA y desarrolladores saber rÃ¡pidamente en quÃ© fase estÃ¡ el proyecto.

---

## ðŸ“– DescripciÃ³n del Proyecto

**CÃ³digo**: `<project_code>`  
**CategorÃ­a**: `<rpa|web|data|ai>`  
**DescripciÃ³n**: [DescripciÃ³n breve de 1-2 lÃ­neas]

**Objetivo del Knowledge**: Documentar decisiones tÃ©cnicas, patrones, investigaciones y referencias que informan la implementaciÃ³n del proyecto.

---

## ðŸ—ï¸ Estructura de Conocimiento

```
knowledge/
â”œâ”€â”€ README.md (este archivo)
â”œâ”€â”€ local/
â”‚   â”œâ”€â”€ README.md
â”‚   â”œâ”€â”€ 01_<topic>_research.md
â”‚   â”œâ”€â”€ 02_<topic>_patterns.md
â”‚   â”œâ”€â”€ 03_<topic>_decisions.md
â”‚   â”œâ”€â”€ 04_<topic>_strategy.md
â”‚   â”œâ”€â”€ 05_<topic>_approach.md
â”‚   â””â”€â”€ lesson_*.md (durante desarrollo)
â””â”€â”€ remote/
    â”œâ”€â”€ README.md
    â”œâ”€â”€ internal_reference_*.md
    â”œâ”€â”€ <library>_documentation.md
    â”œâ”€â”€ <api>_reference.md
    â””â”€â”€ notebooklm_*.md (opcional)
```

---

## ðŸ“Š MÃ©tricas de Conocimiento

| MÃ©trica | Valor |
|---------|-------|
| Archivos de investigaciÃ³n | 0 |
| Lecciones aprendidas | 0 |
| Referencias externas | 0 |
| NotebookLM creados | 0 |
| Tickets informados | 0 |

**Actualizar**: DespuÃ©s de cada generaciÃ³n de conocimiento

---

## ðŸ“… Historial de Estado

| Fecha | Hora | Estado Anterior | Estado Nuevo | Evento | Notas |
|-------|------|-----------------|--------------|--------|-------|
| YYYY-MM-DD | HH:MM | - | ðŸš§ Estructura creada | Setup inicial | Directorios knowledge/ creados |
| YYYY-MM-DD | HH:MM | ðŸš§ Estructura | âœ… Knowledge generado | InvestigaciÃ³n completada | X archivos local/ + Y archivos remote/ |
| YYYY-MM-DD | HH:MM | âœ… Knowledge | â³ Tickets generados | PlanificaciÃ³n completada | Z tickets creados informados por knowledge |

**CÃ³mo interpretar**:
- **Estado Actual** (arriba): Para que IA/metodologÃ­a sepan fase actual del proyecto
- **Historial**: AuditorÃ­a completa de cambios con contexto temporal
- **Eventos importantes**: Setup, generaciÃ³n de knowledge, tickets, inicio desarrollo

**Convenciones**:
- ðŸš§ Pendiente: Trabajo no iniciado o en progreso
- âœ… Generado/Completado: Trabajo finalizado y validado
- â³ En proceso: Trabajo activo en este momento
- âŒ Bloqueado: Trabajo detenido por dependencias

---

## ðŸ“ Contenido del Conocimiento

### ðŸ” Knowledge Local (Investigaciones)

Ver: [knowledge/local/README.md](./local/README.md)

**PropÃ³sito**: InvestigaciÃ³n profunda generada por IA **ANTES** de implementaciÃ³n

**Archivos Generados**:
- [ ] `01_<topic>_research.md` - InvestigaciÃ³n tÃ©cnica de opciones
- [ ] `02_<topic>_patterns.md` - Patrones y mejores prÃ¡cticas
- [ ] `03_<topic>_decisions.md` - Decisiones arquitectÃ³nicas justificadas
- [ ] `04_<topic>_strategy.md` - Estrategia de implementaciÃ³n
- [ ] `05_<topic>_approach.md` - Enfoque tÃ©cnico recomendado

**Estado**: ðŸš§ Pendiente de generaciÃ³n / âœ… X archivos generados

---

### ðŸŒ Knowledge Remote (Referencias)

Ver: [knowledge/remote/README.md](./remote/README.md)

**PropÃ³sito**: Referencias externas + cÃ³digo interno que sustenta decisiones

**Tipos de Referencias**:
- ðŸ“˜ DocumentaciÃ³n oficial (APIs, librerÃ­as)
- ðŸ“„ CÃ³digo interno reutilizable (internal_reference_*.md)
- ðŸ§  NotebookLM (anÃ¡lisis profundo opcional)

**Estado**: ðŸš§ Pendiente / âœ… Y archivos generados

---

## ðŸŽ¯ AplicaciÃ³n del Conocimiento

### Principio: Knowledge Before Implementation

El conocimiento generado en este directorio **informa** la creaciÃ³n de tickets:

1. **IA analiza** SPECIFICATION.md
2. **IA genera** investigaciones profundas (knowledge/local/)
3. **IA documenta** referencias externas/internas (knowledge/remote/)
4. **IA crea** tickets informados por el conocimiento
5. **Equipo implementa** siguiendo decisiones documentadas

**Beneficios**:
- âœ… Evita re-investigar durante desarrollo
- âœ… Decisiones tÃ©cnicas pre-justificadas
- âœ… Tickets con contexto completo
- âœ… Onboarding rÃ¡pido de nuevos desarrolladores
- âœ… Trazabilidad de decisiones arquitectÃ³nicas

---

## ðŸ”— Enlaces RÃ¡pidos

### DocumentaciÃ³n del Proyecto
- [SPECIFICATION.md](../docs/specs/SPECIFICATION.md) - EspecificaciÃ³n tÃ©cnica completa
- [README del Proyecto](../README.md) - InformaciÃ³n general
- [Tickets](../tickets/README.md) - Plan de implementaciÃ³n

### Knowledge
- [Local Knowledge](./local/README.md) - Investigaciones internas
- [Remote Knowledge](./remote/README.md) - Referencias externas

### MetodologÃ­a
- [AI Skill Development](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md) - MetodologÃ­a completa
- [Master Guide](../../../_team5_ai_skill_dev_teaching/MASTER_GUIDE.md) - GuÃ­a de uso

---

## ðŸš€ PrÃ³ximos Pasos

### Si Knowledge NO estÃ¡ generado (ðŸš§)
**AcciÃ³n**: Ejecutar investigaciÃ³n profunda con IA

**Prompt sugerido**:
```
Lee SPECIFICATION.md del proyecto <project_code> y genera:
1. Investigaciones profundas en knowledge/local/
2. Referencias externas en knowledge/remote/
3. Actualiza este README con mÃ©tricas y historial

Usa templates de KNOWLEDGE_NOTE_TEMPLATE.md
```

**Ver**: [MASTER_GUIDE.md - Paso 4.2.5](../../_team5_ai_skill_dev_teaching/MASTER_GUIDE.md)

---

### Si Knowledge estÃ¡ generado (âœ…)
**AcciÃ³n**: Generar tickets informados por el conocimiento

**Prompt sugerido**:
```
Tengo knowledge completo generado. Ahora crea tickets
en tickets/ informados por las investigaciones.

Cada ticket debe referenciar:
- Archivos de knowledge/local/ relevantes
- Referencias de knowledge/remote/ aplicables
- Decisiones tÃ©cnicas ya tomadas
```

---

## ðŸ“ Notas de Mantenimiento

### CuÃ¡ndo Actualizar este README

**Obligatorio**:
- âœ… DespuÃ©s de generar archivos de investigaciÃ³n
- âœ… Al completar referencias externas
- âœ… Cuando se generan tickets del proyecto
- âœ… Al cambiar de FASE (1 â†’ 2 â†’ 3)

**Opcional**:
- Durante desarrollo si surgen insights importantes
- Al agregar NotebookLM
- Para documentar decisiones arquitectÃ³nicas mayores

### Formato del Historial

**Estructura**:
```
| Fecha      | Hora  | Anterior     | Nuevo        | Evento         | Notas                    |
|------------|-------|--------------|--------------|----------------|--------------------------|
| 2026-02-23 | 15:20 | ðŸš§ Pendiente | âœ… Generado  | InvestigaciÃ³n  | 6 local + 9 remote       |
```

**Campo "Evento"**: Describe QUÃ‰ pasÃ³ (Setup, InvestigaciÃ³n, Tickets, etc.)  
**Campo "Notas"**: Contexto adicional relevante (cantidad archivos, decisiones tomadas, etc.)

---

## ðŸ¤ ContribuciÃ³n

Este knowledge es colaborativo:
- **IA**: Genera investigaciÃ³n inicial automatizada
- **Equipo**: Agrega lecciones durante desarrollo
- **Ambos**: Mantienen referencias actualizadas

**Principio**: Documentar **mientras** se trabaja, no despuÃ©s.

---

**Proyecto**: `<project_code>`  
**Ãšltima actualizaciÃ³n**: `YYYY-MM-DD HH:MM`  
**Mantenido por**: [Nombre del responsable]  
**Template version**: 1.0.0

