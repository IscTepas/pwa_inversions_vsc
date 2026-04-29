# TKT-<CODIGO>-###: [TÃ­tulo Corto y Descriptivo]

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-<CODIGO>-### |
| **Ticket Externo** | REQ-XXXX-YYYY (si aplica) |
| **Solicitante** | Nombre (Ãrea) |
| **Tipo** | Nuevo Proyecto / Feature / Bug / Refactor / Mejora / CorrecciÃ³n |
| **Prioridad** | ðŸ”´ Alta / ðŸŸ¡ Media / ðŸŸ¢ Baja |
| **Estado** | ðŸ†• Abierto / ðŸŸ¡ En Desarrollo / ðŸ”µ En RevisiÃ³n / ðŸš« Bloqueado / âœ… Completado |
| **Proyecto** | <nombre_proyecto> o GLOBAL |
| **CategorÃ­a** | <categoria_del_proyecto> |
| **Creado** | YYYY-MM-DD |
| **Actualizado** | YYYY-MM-DD |
| **Asignado a** | <nombre> |
| **EstimaciÃ³n** | X horas/dÃ­as |
| **Sprint/Milestone** | Sprint ## / Milestone X |
| **Relacionado con** | SPECIFICATION.md o incremental/SPEC_00X.md |

---

## ðŸš¦ Gate de Estado (Obligatorio)

- âœ… **Completado**: solo si hay evidencia de ejecuciÃ³n y validaciÃ³n.
- ðŸ”µ **En RevisiÃ³n**: cÃ³digo listo, pero pendiente de ejecutar/validar.
- ðŸš« **Bloqueado**: dependencia externa impide validar.

**No permitido**: mover a âœ… Completado sin pruebas ejecutadas y registradas.

## ðŸ—„ï¸ Gate de Modelo de Datos (Solo si aplica)

Completar esta seccion cuando el ticket modifica esquema/modelo/persistencia:

| Campo | Valor |
|-------|-------|
| **Motor(es)** | Supabase / MongoDB / Otro |
| **Estado del modelo** | draft / candidate / approved |
| **Trazabilidad SPEC -> datos** | Ruta del archivo de trazabilidad |
| **Knowledge relacionado** | Rutas knowledge/local y knowledge/remote |
| **Aprobacion humana** | Nombre + fecha |

Regla:
- Un ticket de datos no puede cerrarse en âœ… Completado si el modelo queda en `draft`.

---

## ðŸ“ DescripciÃ³n

### Contexto
[Describe el contexto o situaciÃ³n que motiva este ticket]

**JustificaciÃ³n**: [Por quÃ© es necesario este cambio]

### Problema/Necesidad
[Si es un bug, describe el problema. Si es feature, describe la necesidad]

### SoluciÃ³n Propuesta
[Describe cÃ³mo se resolverÃ¡ o implementarÃ¡]

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Modificar/Crear**:
- `ruta/archivo1.py`
- `ruta/archivo2.py`

**Componentes Afectados**:
- MÃ³dulo X
- Servicio Y

**Riesgos**:
- [Identificar riesgos potenciales]

---

## ðŸ¤– Workflow de Agentes

### Picoro analiza:
- [ ] Ticket revisado y entendido
- [ ] Impacto identificado
- [ ] Plan de implementaciÃ³n definido
- [ ] Skills necesarios confirmados
- [ ] AprobaciÃ³n para continuar

### Goku implementa:
- [ ] CÃ³digo implementado
- [ ] DocumentaciÃ³n inline agregada con estÃ¡ndar `FIC` bilingÃ¼e (EN/ES)
- [ ] README actualizado (si aplica)
- [ ] Listo para optimizaciÃ³n

### Vegeta optimiza (si aplica):
- [ ] Performance revisado
- [ ] Seguridad auditada
- [ ] Patrones refactorizados
- [ ] Code review completado

### Bulma valida:
- [ ] Tests unitarios creados
- [ ] Tests de integraciÃ³n creados (si aplica)
- [ ] Tests ejecutados exitosamente
- [ ] Bugs detectados y reportados
- [ ] ValidaciÃ³n funcional completada

---

## âœ… Criterios de AceptaciÃ³n

1. **Criterio 1**
   - Dada [condiciÃ³n inicial]
   - Cuando [acciÃ³n]
   - Entonces [resultado esperado]

2. **Criterio 2**
   - Dada [condiciÃ³n inicial]
   - Cuando [acciÃ³n]
   - Entonces [resultado esperado]

3. **Criterio 3**
   - Dada [condiciÃ³n inicial]
   - Cuando [acciÃ³n]
   - Entonces [resultado esperado]

---

## ðŸ§ª Plan de Testing

### Unit Tests
- [ ] Test para funcionalidad A
- [ ] Test para funcionalidad B
- [ ] Test para casos edge

### Integration Tests
- [ ] Test de integraciÃ³n X
- [ ] Test de integraciÃ³n Y

### Manual Testing / UAT
- [ ] Escenario 1: [DescripciÃ³n]
- [ ] Escenario 2: [DescripciÃ³n]
- [ ] Usuario valida (si aplica)

---

## ðŸ§¾ Evidencia de ValidaciÃ³n (Requerida para âœ… Completado)

- [ ] Fecha de ejecuciÃ³n registrada
- [ ] Entorno registrado (DEV/QAS/PROD)
- [ ] Responsable de validaciÃ³n registrado
- [ ] Resultado registrado (PASS/FAIL)
- [ ] Comando(s) o pasos ejecutados documentados
- [ ] Evidencia adjunta (output/log/captura o resumen verificable)

---

## ðŸ“š DocumentaciÃ³n Requerida

- [ ] Actualizar README del proyecto
- [ ] Actualizar documentaciÃ³n tÃ©cnica
- [ ] Crear/actualizar knowledge note
  - UbicaciÃ³n: `knowledge/local/<nota>.md`
- [ ] Actualizar comentarios en cÃ³digo
- [ ] Actualizar CHANGELOG

### Consideraciones TÃ©cnicas
- ConsideraciÃ³n 1
- ConsideraciÃ³n 2
- ConsideraciÃ³n 3

### Skills/Agentes Involucrados
- **Skill**: `<skill_name>` (global/local)
  - Cambios requeridos: [descripciÃ³n]
- **Agente**: `<agent_name>` (global/local)
  - Cambios requeridos: [descripciÃ³n]

---

## âš ï¸ Riesgos y MitigaciÃ³n

| Riesgo | Probabilidad | Impacto | MitigaciÃ³n |
|--------|--------------|---------|------------|
| Riesgo 1 | Alta/Media/Baja | Alto/Medio/Bajo | Estrategia de mitigaciÃ³n |
| Riesgo 2 | Alta/Media/Baja | Alto/Medio/Bajo | Estrategia de mitigaciÃ³n |

---

## ðŸ” Notas de Desarrollo

### YYYY-MM-DD
**Autor**: <nombre>  
[Notas sobre decisiones tomadas, problemas encontrados, soluciones implementadas]

### YYYY-MM-DD
**Autor**: <nombre>  
[MÃ¡s notas...]

---

## ðŸ“Š Review Checklist

### CÃ³digo
- [ ] CÃ³digo sigue estÃ¡ndares del proyecto
- [ ] No hay cÃ³digo duplicado
- [ ] Manejo apropiado de errores
- [ ] Logging implementado correctamente
- [ ] Sin warnings del linter

### Testing
- [ ] Todos los tests pasan
- [ ] Coverage mÃ­nimo alcanzado (X%)
- [ ] Tests de casos edge incluidos
- [ ] Tests de regresiÃ³n considerados

### DocumentaciÃ³n
- [ ] CÃ³digo documentado (docstrings)
- [ ] Comentarios `FIC` en inglÃ©s/espaÃ±ol en bloques clave
- [ ] README actualizado
- [ ] Knowledge notes creadas/actualizadas
- [ ] Ejemplos de uso incluidos

### Performance
- [ ] Sin degradaciÃ³n de performance
- [ ] Optimizaciones implementadas (si aplica)
- [ ] Recursos liberados apropiadamente

---

## ðŸŽ‰ Cierre

**Fecha Cierre**: YYYY-MM-DD  
**Cerrado por**: [Nombre]

### Resumen del Trabajo Realizado
[Completar al cerrar el ticket]

### Archivos Modificados (Final)
- `archivo1.py`: [Cambios realizados]
- `archivo2.py`: [Cambios realizados]

### Knowledge Generado
- [Link a knowledge note](path/to/note.md)

### Commit
```bash
git commit -m "tipo(scope): descripciÃ³n (#TKT-XXX-###)"
```

**Ejemplo**: `feat(zpp007f): add shift filter to report (#TKT-ZPP007F-008)`

### Ticket Externo Cerrado
**REQ-XXXX-YYYY**: âœ… RESUELTO (si aplica)

### MÃ©tricas
- Tiempo estimado: X horas
- Tiempo real invertido: Y horas
- Tests creados: # tests
- Coverage: X%
- LÃ­neas de cÃ³digo: +X -Y

---

## ðŸ“Œ Referencias

### DocumentaciÃ³n
- [Documento 1](link)
- [Documento 2](link)

### Knowledge
- [Knowledge Note 1](../../knowledge/local/note1.md)
- [Knowledge Note 2](../../knowledge/remote/note2.md)

### Enlaces Externos
- [API Docs](url)
- [Stack Overflow](url)

---

## ðŸ·ï¸ Tags

`<tag1>` `<tag2>` `<tag3>` `python` `rpa` `automation`

---

**Estado Final**: [Closed/Rejected/Deferred]  
**RazÃ³n de Cierre**: [Completado exitosamente / Duplicado / No relevante / Pospuesto]  
**Fecha de Cierre**: YYYY-MM-DD

