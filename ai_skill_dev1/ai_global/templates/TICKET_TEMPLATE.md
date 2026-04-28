# TKT-<CODIGO>-###: [Título Corto y Descriptivo]

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-<CODIGO>-### |
| **Ticket Externo** | REQ-XXXX-YYYY (si aplica) |
| **Solicitante** | Nombre (Área) |
| **Tipo** | Nuevo Proyecto / Feature / Bug / Refactor / Mejora / Corrección |
| **Prioridad** | 🔴 Alta / 🟡 Media / 🟢 Baja |
| **Estado** | 🆕 Abierto / 🟡 En Desarrollo / 🔵 En Revisión / 🚫 Bloqueado / ✅ Completado |
| **Proyecto** | <nombre_proyecto> o GLOBAL |
| **Creado** | YYYY-MM-DD |
| **Actualizado** | YYYY-MM-DD |
| **Asignado a** | <nombre> |

---

## 🚦 Gate de Estado (Obligatorio)

- ✅ **Completado**: solo si hay evidencia de ejecución y validación.
- 🔵 **En Revisión**: código listo, pero pendiente de ejecutar/validar.
- 🚫 **Bloqueado**: dependencia externa impide validar.

**No permitido**: mover a ✅ Completado sin pruebas ejecutadas y registradas.

---

## 📝 Descripción

### Contexto
[Describe el contexto o situación que motiva este ticket]

**Justificación**: [Por qué es necesario este cambio]

### Problema/Necesidad
[Si es un bug, describe el problema. Si es feature, describe la necesidad]

### Solución Propuesta
[Describe cómo se resolverá o implementará]

---

## 🔍 Análisis de Impacto

**Archivos a Modificar/Crear**:
- `ruta/archivo1.py`
- `ruta/archivo2.py`

**Componentes Afectados**:
- Módulo X
- Servicio Y

---

## 🤖 Workflow de Agentes

### Picoro analiza:
- [ ] Ticket revisado y entendido
- [ ] Impacto identificado
- [ ] Skills necesarios confirmados

### Goku implementa:
- [ ] Código implementado
- [ ] Documentación inline agregada (estándar `FIC` bilingüe)

### Vegeta optimiza (si aplica):
- [ ] Performance revisado
- [ ] Seguridad auditada

### Bulma valida:
- [ ] Tests ejecutados exitosamente
- [ ] Validación funcional completada

---

## ✅ Criterios de Aceptación

1. **Criterio 1**
   - Dada [condición inicial]
   - Cuando [acción]
   - Entonces [resultado esperado]

---

## 🧾 Evidencia de Validación (Requerida para ✅ Completado)

- [ ] Fecha de ejecución registrada
- [ ] Entorno registrado (DEV/QAS/PROD)
- [ ] Responsable de validación registrado
- [ ] Resultado registrado (PASS/FAIL)
