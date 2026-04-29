# ðŸ“‹ Templates

Templates para crear agentes, skills, tickets, conocimiento y configuraciones de proyectos.

---

## ðŸ“– PropÃ³sito

Los templates aseguran:
- âœ… Consistencia en la documentaciÃ³n
- âœ… Calidad estandarizada
- âœ… Onboarding mÃ¡s rÃ¡pido
- âœ… Nada importante se olvida
- âœ… ReutilizaciÃ³n de mejores prÃ¡cticas

---

## ðŸ“‚ Templates Disponibles

### ðŸ“„ SPECIFICATION_TEMPLATE.md
**Uso**: Crear la especificaciÃ³n tÃ©cnica ORIGINAL de un proyecto nuevo

**Incluye**:
- Metadata (cÃ³digo proyecto, ticket externo, solicitante, estado)
- VisiÃ³n general (contexto, objetivo, flujo, resultado esperado)
- Entradas (parÃ¡metros, archivos, credenciales)
- Proceso completo paso a paso (lÃ³gica de negocio)
- Salidas (archivos generados, notificaciones)
- Requisitos tÃ©cnicos (tecnologÃ­as, configuraciÃ³n, infraestructura)
- Casos de uso detallados
- Casos de prueba (criterios de aceptaciÃ³n)
- Arquitectura de componentes
- Skills de IA necesarios
- Decisiones tÃ©cnicas pendientes
- Dependencias y restricciones
- Plan de implementaciÃ³n
- Riesgos y mitigaciÃ³n
- Aprobaciones y control de cambios

**CuÃ¡ndo usar**: 
- Al iniciar un proyecto NUEVO desde cero
- Cuando el usuario te da un ticket externo para un nuevo desarrollo
- ANTES de que Picoro comience la investigaciÃ³n (FASE 2.1)

**UbicaciÃ³n**: [SPECIFICATION_TEMPLATE.md](./SPECIFICATION_TEMPLATE.md)

**Nota**: Este es el documento que TÃš (desarrollador) creas despuÃ©s de recibir el ticket externo del usuario

---

### ðŸ¤– AGENT_TEMPLATE.md
**Uso**: Documentar agentes (globales o de proyecto)

**Incluye**:
- Metadata del agente (nombre, versiÃ³n, skills requeridos)
- DescripciÃ³n y responsabilidades
- ConfiguraciÃ³n
- Ejemplos de uso
- API del agente
- Testing
- Troubleshooting

**CuÃ¡ndo usar**: Al crear cualquier agente nuevo

**UbicaciÃ³n**: [AGENT_TEMPLATE.md](./AGENT_TEMPLATE.md)

---

### ðŸŽ¯ SKILL_TEMPLATE.md
**Uso**: Documentar skills (globales o de proyecto)

**Incluye**:
- Metadata del skill (versiÃ³n, dependencias, I/O)
- PropÃ³sito y funcionalidad
- InstalaciÃ³n
- Ejemplos bÃ¡sicos y avanzados
- API completa
- Testing y performance
- Troubleshooting

**CuÃ¡ndo usar**: Al crear cualquier skill nuevo

**UbicaciÃ³n**: [SKILL_TEMPLATE.md](./SKILL_TEMPLATE.md)

---

### ðŸŽ« TICKET_TEMPLATE.md
**Uso**: Crear tickets internos de desarrollo

**Incluye**:
- Metadata (ID, ticket externo, solicitante, prioridad, estado)
- DescripciÃ³n y justificaciÃ³n
- AnÃ¡lisis de impacto
- Workflow de agentes (Picoro â†’ Goku â†’ Vegeta â†’ Bulma)
- Criterios de aceptaciÃ³n
- Plan de testing
- DocumentaciÃ³n requerida
- SecciÃ³n de cierre con commit y ticket externo

**CuÃ¡ndo usar**: 
- Para cada tarea de implementaciÃ³n derivada del diseÃ±o de Picoro
- Para cambios menores sobre proyectos existentes
- Para correcciones de bugs

**UbicaciÃ³n**: [TICKET_TEMPLATE.md](./TICKET_TEMPLATE.md)

---

### ðŸ“„ SPEC_INCREMENTAL_TEMPLATE.md
**Uso**: Crear especificaciones para cambios GRANDES sobre proyectos existentes

**Incluye**:
- Metadata (ticket externo, solicitante, relaciÃ³n con SPEC original)
- VisiÃ³n general y justificaciÃ³n
- Alcance del cambio e impacto
- Arquitectura (nuevos componentes, modificaciones)
- Input/Output nuevos
- Flujo de proceso modificado
- Requisitos tÃ©cnicos y dependencias
- InvestigaciÃ³n requerida
- Casos de uso y prueba
- EstimaciÃ³n de esfuerzo y tickets a generar
- Riesgos y mitigaciÃ³n
- Criterios de aceptaciÃ³n
- Aprobaciones

**CuÃ¡ndo usar**: 
- Feature nueva que requiere nuevos servicios/mÃ³dulos
- Cambios que afectan arquitectura existente
- EstimaciÃ³n > 20 horas
- Requiere investigaciÃ³n tÃ©cnica nueva

**UbicaciÃ³n**: [SPEC_INCREMENTAL_TEMPLATE.md](./SPEC_INCREMENTAL_TEMPLATE.md)

**Nota**: Para cambios pequeÃ±os (bug fix, mejora menor), crear ticket directo sin nueva SPEC

---

**UbicaciÃ³n**: [SKILL_TEMPLATE.md](./SKILL_TEMPLATE.md)

---

### ðŸŽ« TICKET_TEMPLATE.md
**Uso**: Crear tickets de control de cambios

**Incluye**:
- Metadata (tipo, prioridad, estado)
- DescripciÃ³n y contexto
- Objetivos
- Archivos afectados
- Trazabilidad
- Criterios de aceptaciÃ³n
- Plan de testing
- Notas de desarrollo
- Review checklist

**CuÃ¡ndo usar**: Para trackear cualquier cambio o feature

**UbicaciÃ³n**: [TICKET_TEMPLATE.md](./TICKET_TEMPLATE.md)

---

### ðŸ“š KNOWLEDGE_NOTE_TEMPLATE.md
**Uso**: Documentar conocimiento (local o remoto)

**Incluye**:
- Metadata y tags
- PropÃ³sito
- Contenido adaptable (lesson, solution, pattern, reference)
- Ejemplos de cÃ³digo
- Aplicabilidad
- Referencias
- Historial de cambios

**CuÃ¡ndo usar**: Al documentar lecciones, soluciones, patrones o referencias

**UbicaciÃ³n**: [KNOWLEDGE_NOTE_TEMPLATE.md](./KNOWLEDGE_NOTE_TEMPLATE.md)

---

### ðŸ“‹ README_KNOWLEDGE_TEMPLATE.md
**Uso**: Crear README para directorios knowledge/ de proyectos

**Incluye**:
- Estado actual del conocimiento (para IA/metodologÃ­a)
- MÃ©tricas de contenido generado
- Historial de estado con trazabilidad temporal
- Estructura de carpetas
- Enlaces a documentaciÃ³n relacionada
- GuÃ­a de prÃ³ximos pasos

**CuÃ¡ndo usar**: Al crear estructura de knowledge/ en nuevo proyecto

**Por quÃ© es importante**:
- âœ… IA/metodologÃ­a saben en quÃ© fase estÃ¡ el proyecto
- âœ… AuditorÃ­a temporal de cuÃ¡ndo se generÃ³ conocimiento
- âœ… Trazabilidad de decisiones arquitectÃ³nicas
- âœ… Facilita onboarding de nuevos desarrolladores

**UbicaciÃ³n**: [README_KNOWLEDGE_TEMPLATE.md](./README_KNOWLEDGE_TEMPLATE.md)

---

### âš™ï¸ PROJECT_CONFIG_TEMPLATE.yaml
**Uso**: Configurar nuevos proyectos

**Incluye**:
- InformaciÃ³n del proyecto
- Dependencias (skills, agentes, packages)
- ConfiguraciÃ³n de entornos
- EjecuciÃ³n y notificaciones
- Logging
- Paths
- Testing
- Versionado
- Integraciones

**CuÃ¡ndo usar**: Al iniciar cualquier proyecto nuevo

**UbicaciÃ³n**: [PROJECT_CONFIG_TEMPLATE.yaml](./PROJECT_CONFIG_TEMPLATE.yaml)

---

## ðŸš€ CÃ³mo Usar los Templates

### MÃ©todo 1: Copiar y Renombrar

```bash
# Para agente
cp ai_skill_dev1/ai_global/templates/AGENT_TEMPLATE.md ./mi_agente/README.md

# Para skill
cp ai_skill_dev1/ai_global/templates/SKILL_TEMPLATE.md ./mi_skill/README.md

# Para ticket
cp ai_skill_dev1/ai_global/templates/TICKET_TEMPLATE.md ./tickets/TKT-XXX-001.md

# Para knowledge note (archivo individual)
cp ai_skill_dev1/ai_global/templates/KNOWLEDGE_NOTE_TEMPLATE.md ./knowledge/local/lesson_algo.md

# Para README de knowledge (estructura del proyecto)
cp ai_skill_dev1/ai_global/templates/README_KNOWLEDGE_TEMPLATE.md ./knowledge/README.md

# Para config de proyecto
cp ai_skill_dev1/ai_global/templates/PROJECT_CONFIG_TEMPLATE.yaml ./config.yaml
```

### MÃ©todo 2: Referencias Directas

En tu editor, abre el template relevante y Ãºsalo como guÃ­a mientras creas tu documento.

---

## âœï¸ Personalizar Templates

Los templates son **guÃ­as flexibles**, no camisas de fuerza:

### âœ… EstÃ¡ bien:
- Agregar secciones especÃ­ficas a tu contexto
- Reorganizar para mayor claridad
- Omitir secciones no aplicables (marcÃ¡ndolas como "N/A")
- Adaptar ejemplos a tu caso de uso

### âŒ Evita:
- Eliminar metadata crÃ­tico (versiÃ³n, tipo, fecha)
- Omitir secciones importantes sin justificaciÃ³n
- Cambiar formatos de manera inconsistente
- No documentar decisiones de personalizaciÃ³n

---

## ðŸŽ¯ QuÃ© Template Usar

### Creando un Agente
â†’ **AGENT_TEMPLATE.md**

### Creando un Skill
â†’ **SKILL_TEMPLATE.md**

### Trackeando un Cambio
â†’ **TICKET_TEMPLATE.md**

### Documentando Conocimiento Individual
â†’ **KNOWLEDGE_NOTE_TEMPLATE.md** (lecciones, patrones, referencias)

### Creando Estructura de Knowledge
â†’ **README_KNOWLEDGE_TEMPLATE.md** (README de proyecto con historial)

### Configurando un Proyecto
â†’ **PROJECT_CONFIG_TEMPLATE.yaml**

---

## ðŸ“Š Secciones Clave por Template

### AGENT_TEMPLATE.md
```
1. Metadata (yaml)
2. DescripciÃ³n
3. Skills Requeridos â­
4. ConfiguraciÃ³n
5. Uso (ejemplos)
6. Estructura de archivos
7. Flujo de ejecuciÃ³n
8. Testing
9. Troubleshooting
```

### SKILL_TEMPLATE.md
```
1. Metadata (yaml)
2. DescripciÃ³n
3. InstalaciÃ³n
4. Uso (bÃ¡sico y avanzado) â­
5. API del skill â­
6. Testing
7. Performance
8. IntegraciÃ³n
9. Versionado
```

### TICKET_TEMPLATE.md
```
1. Metadata
2. DescripciÃ³n
3. Objetivos â­
4. Archivos afectados
5. Criterios de aceptaciÃ³n â­
6. Plan de testing
7. DocumentaciÃ³n requerida
8. Notas de desarrollo
9. Review checklist
```

### KNOWLEDGE_NOTE_TEMPLATE.md
```
1. Metadata y tags
2. PropÃ³sito
3. Contenido principal â­
4. Ejemplos de cÃ³digo
5. Aplicabilidad â­
6. Referencias
7. Casos de uso reales
8. FAQ
```

â­ = Secciones mÃ¡s crÃ­ticas

---

## ðŸ’¡ Best Practices

### Al Usar Templates

1. **Lee primero todo el template** antes de empezar a llenar
2. **Completa metadata desde el inicio** (versiÃ³n, fecha, autor)
3. **No dejes secciones vacÃ­as** - Usa "N/A" o "Pendiente"
4. **SÃ© especÃ­fico** en descripciones y ejemplos
5. **MantÃ©n consistencia** con otros documentos del mismo tipo

### Al Mantener Templates

- âœ… Revisa templates cada trimestre
- âœ… Incorpora mejoras de experiencia real
- âœ… Documenta cambios importantes
- âœ… MantÃ©n versionado de templates
- âœ… Comunica cambios al equipo

---

## ðŸ”„ EvoluciÃ³n de Templates

Los templates evolucionan. Cuando encuentres mejoras:

### Paso 1: Crear Ticket
```markdown
# TKT-GLOBAL-XXX: Mejorar template de [tipo]

Propuesta de mejora: [descripciÃ³n]
RazÃ³n: [por quÃ© es mejor]
Impacto: [quÃ© documentos se afectan]
```

### Paso 2: Implementar
- Actualiza el template
- Documenta cambios en CHANGELOG
- Incrementa versiÃ³n si es significativo

### Paso 3: Comunicar
- Notifica al equipo
- Actualiza READMEs relevantes
- Considera migrar docs existentes

---

## ðŸ“ˆ MÃ©tricas de Uso

| Template | Usos | Ãšltima ActualizaciÃ³n |
|----------|------|---------------------|
| AGENT_TEMPLATE.md | 0 | 2026-02-10 |
| SKILL_TEMPLATE.md | 0 | 2026-02-10 |
| TICKET_TEMPLATE.md | 0 | 2026-02-10 |
| KNOWLEDGE_NOTE_TEMPLATE.md | 0 | 2026-02-10 |
| PROJECT_CONFIG_TEMPLATE.yaml | 0 | 2026-02-10 |

---

## ðŸ”— Ver TambiÃ©n

- **MetodologÃ­a**: [AI_SKILL_DEVELOPMENT_METHODOLOGY.md](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- **Agentes**: [../agents/README.md](../agents/README.md)
- **Skills**: [../skills/README.md](../skills/README.md)
- **Knowledge**: [../knowledge/README.md](../knowledge/README.md)
- **Tickets**: [../tickets/README.md](../tickets/README.md)

---

## ðŸ“ CHANGELOG

### v1.0.0 (2026-02-10)
- âœ¨ Templates iniciales creados
  - AGENT_TEMPLATE.md
  - SKILL_TEMPLATE.md
  - TICKET_TEMPLATE.md
  - KNOWLEDGE_NOTE_TEMPLATE.md
  - PROJECT_CONFIG_TEMPLATE.yaml

---

**VersiÃ³n actual**: 1.0.0  
**Ãšltima actualizaciÃ³n**: 2026-02-10  
**Mantenedor**: Dr. Francisco Ibarra Carlos

