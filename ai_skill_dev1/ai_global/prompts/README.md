# ðŸ“ Prompts - Instrucciones por Fase

Prompts de entrada para cada fase del desarrollo.

---

## ðŸ“‹ Fases de Desarrollo

### FASE 0: ConfiguraciÃ³n Inicial del Sistema âš™ï¸

**Objetivo**: Crear infraestructura base reutilizable por todos los proyectos.

**Entrada**: MetodologÃ­a aprobada + Templates base

**Actividades**:
- [ ] Crear estructura `ai_global/`
- [ ] Documentar 5 agentes base
- [ ] Documentar 20+ skills
- [ ] Crear READMEs y templates
- [ ] Validar sistema

**Salida**: Sistema base listo âœ… FASE 0 COMPLETADA

---

### FASE 1: Agentes y Skills Globales ðŸ¤–

**Objetivo**: Validar y completar catÃ¡logo global de agentes y skills.

**Entrada**: FASE 0 completada

**Actividades**:
- [ ] Revisar y extender skills si es necesario
- [ ] Validar asignaciones skill-agente
- [ ] Crear workflow_agents.yaml base
- [ ] Documentar convenciones de uso
- [ ] Prueba con ticket dummy

**Salida**: Sistema activo âœ… FASE 1 COMPLETADA

---

### FASE 2: Inicio de Nuevo Proyecto ðŸš€

**Objetivo**: Preparar proyecto especÃ­fico para implementaciÃ³n.

#### FASE 2.1-2.2: SelecciÃ³n y ConfiguraciÃ³n
- [ ] DATABASE SELECTION GATE
- [ ] Crear estructura del proyecto
- [ ] config.yaml del proyecto

#### FASE 2.3: InvestigaciÃ³n
- [ ] Picoro investiga SPECIFICATION
- [ ] Picoro genera knowledge/local + knowledge/remote
- [ ] Detectar skills nuevos requeridos
- [ ] DiseÃ±o general

#### FASE 2.4: Estructura y DiseÃ±o
- [ ] Picoro diseÃ±a arquitectura
- [ ] Krillin diseÃ±a persistencia
- [ ] Goku prepara estructura base
- [ ] Crear workflow_agents.yaml del proyecto
- [ ] Generar tickets

**Salida**: Proyecto estructurado âœ… FASE 2 COMPLETADA

---

### FASE 3: Desarrollo Guiado por Tickets ðŸ’»

**Objetivo**: ImplementaciÃ³n iterativa de funcionalidades.

#### Por cada ticket:

```
Picoro â†’ Goku â†’ Vegeta âˆ¥ Bulma/Krillin
  â†“
ValidaciÃ³n
  â†“
âœ… Ticket Completado
```

**Salida**: Proyecto implementado âœ… FASE 3 COMPLETADA

---

## ðŸŽ¯ Entrada a Cada Fase

### Para iniciar FASE 1
```
Prompt: "Iniciar FASE 1: Agentes y Skills Globales"

Verificar:
- [ ] FASE 0 completada
- [ ] Estructura ai_global/ creada
- [ ] Agentes documentados
- [ ] Templates disponibles

Entonces: Procede con FASE 1
```

### Para iniciar FASE 2
```
Prompt: "Iniciar FASE 2: Inicio de Nuevo Proyecto [nombre]"

Verificar:
- [ ] FASE 0/1 completadas
- [ ] SPECIFICATION.md existe en ruta oficial
- [ ] DATABASE SELECTION GATE respondido

Entonces: Procede con FASE 2
```

### Para iniciar FASE 3
```
Prompt: "Iniciar FASE 3: Desarrollo de Proyecto [nombre]"

Verificar:
- [ ] FASE 2 completada
- [ ] Tickets creados
- [ ] Knowledge base generada
- [ ] Arquitectura diseÃ±ada

Entonces: Procede con FASE 3
```

---

## âœ… Checklist Global

- [ ] FASE 0: Sistema creado âœ…
- [ ] FASE 1: Sistema validado âœ…
- [ ] FASE 2: Proyecto preparado âœ…
- [ ] FASE 3: Proyecto implementado âœ…

---

## ðŸ“š Referencias

- [MetodologÃ­a Completa](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- [Prompts de Entrada](./README.md)

