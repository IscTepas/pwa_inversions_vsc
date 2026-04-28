# 📝 Prompts - Instrucciones por Fase

Prompts de entrada para cada fase del desarrollo.

---

## 📋 Fases de Desarrollo

### FASE 0: Configuración Inicial del Sistema ⚙️

**Objetivo**: Crear infraestructura base reutilizable por todos los proyectos.

**Entrada**: Metodología aprobada + Templates base

**Actividades**:
- [ ] Crear estructura `ai_global/`
- [ ] Documentar 5 agentes base
- [ ] Documentar 20+ skills
- [ ] Crear READMEs y templates
- [ ] Validar sistema

**Salida**: Sistema base listo ✅ FASE 0 COMPLETADA

---

### FASE 1: Agentes y Skills Globales 🤖

**Objetivo**: Validar y completar catálogo global de agentes y skills.

**Entrada**: FASE 0 completada

**Actividades**:
- [ ] Revisar y extender skills si es necesario
- [ ] Validar asignaciones skill-agente
- [ ] Crear workflow_agents.yaml base
- [ ] Documentar convenciones de uso
- [ ] Prueba con ticket dummy

**Salida**: Sistema activo ✅ FASE 1 COMPLETADA

---

### FASE 2: Inicio de Nuevo Proyecto 🚀

**Objetivo**: Preparar proyecto específico para implementación.

#### FASE 2.1-2.2: Selección y Configuración
- [ ] DATABASE SELECTION GATE
- [ ] Crear estructura del proyecto
- [ ] config.yaml del proyecto

#### FASE 2.3: Investigación
- [ ] Picoro investiga SPECIFICATION
- [ ] Picoro genera knowledge/local + knowledge/remote
- [ ] Detectar skills nuevos requeridos
- [ ] Diseño general

#### FASE 2.4: Estructura y Diseño
- [ ] Picoro diseña arquitectura
- [ ] Krillin diseña persistencia
- [ ] Goku prepara estructura base
- [ ] Crear workflow_agents.yaml del proyecto
- [ ] Generar tickets

**Salida**: Proyecto estructurado ✅ FASE 2 COMPLETADA

---

### FASE 3: Desarrollo Guiado por Tickets 💻

**Objetivo**: Implementación iterativa de funcionalidades.

#### Por cada ticket:

```
Picoro → Goku → Vegeta ∥ Bulma/Krillin
  ↓
Validación
  ↓
✅ Ticket Completado
```

**Salida**: Proyecto implementado ✅ FASE 3 COMPLETADA

---

## 🎯 Entrada a Cada Fase

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
- [ ] Arquitectura diseñada

Entonces: Procede con FASE 3
```

---

## ✅ Checklist Global

- [ ] FASE 0: Sistema creado ✅
- [ ] FASE 1: Sistema validado ✅
- [ ] FASE 2: Proyecto preparado ✅
- [ ] FASE 3: Proyecto implementado ✅

---

## 📚 Referencias

- [Metodología Completa](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- [Prompts de Entrada](./README.md)
