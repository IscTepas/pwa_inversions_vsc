# 🎫 Tickets - Sistema de Trazabilidad

Tickets de trabajo trazables para control de cambios.

---

## 📋 Tipos de Tickets

### 1. Tickets Globales (`TKT-GLOBAL-###`)
Mejoras a la metodología, skills nuevos globales, cambios arquitectónicos generales.

**Ejemplo**:
```
TKT-GLOBAL-001: Mejorar skill de testing
TKT-GLOBAL-002: Agregar soporte para Firebase
```

### 2. Tickets de Proyecto (`TKT-<CODIGO>-###`)
Tareas de implementación dentro de un proyecto específico.

**Ejemplo**:
```
TKT-INVRFIC-001: Implementar Broker Connector
TKT-INVRFIC-002: Integrar TradingView Widgets
TKT-INVRFIC-003: Implementar Indicadores Técnicos
```

---

## 🚦 Estados de un Ticket

- 🆕 **Abierto** (Open): Recién creado, en backlog
- 🟡 **En Desarrollo** (In Progress): Agente actualmente trabajando
- 🔵 **En Revisión** (In Review): Código listo, pendiente validación
- 🚫 **Bloqueado** (Blocked): Esperando dependencia externa
- ✅ **Completado** (Closed): Validado y cerrado

**⚠️ REGLA CRÍTICA**: No se permite marcar ✅ sin evidencia de ejecución/validación.

---

## 📋 Estructura Mínima

```yaml
ID: TKT-INVRFIC-001
Título: Implementar Broker Connector
Tipo: Feature
Prioridad: 🔴 Alta
Estado: 🟡 En Desarrollo
Asignado a: Goku
Creado: 2026-02-10
Relacionado: SPECIFICATION.md

## Descripción
Implementar conexión con Interactive Brokers usando @stoqey/ib

## Aceptación
- [ ] Conexión exitosa a IBKR
- [ ] Lectura de posiciones
- [ ] Tests unitarios en verde

## Workflow de Agentes
- Picoro: Analizar requisitos ✅
- Goku: Implementar código 🟡
- Vegeta: Optimizar seguridad ⏳
- Bulma: Validar tests ⏳
```

---

## 📊 Ciclo de Vida de un Ticket

```
1. Creación (Picoro)
   📝 Ticket detallado desde SPECIFICATION
   
2. En Desarrollo (Goku)
   👨‍💻 Implementación de código
   
3. Optimización (Vegeta)
   🥷 Performance + Seguridad
   
4. Testing (Bulma)
   🧪 Validación y cierre
   
5. Completado (Evidencia)
   ✅ Evidencia registrada
```

---

## ✅ Criterios para Marcar ✅ Completado

**OBLIGATORIO tener**:
- [ ] Código implementado y comprometido
- [ ] Tests ejecutados exitosamente (GREEN)
- [ ] Validación manual (si aplica)
- [ ] Documentación completada
- [ ] Fecha y responsable de validación
- [ ] Evidencia verificable

**Formato de Evidencia**:
```
Fecha: YYYY-MM-DD
Entorno: DEV/QAS/PROD
Responsable: Nombre
Resultado: PASS/FAIL
Output: [comando ejecutado + resultado]
```

---

## 🔍 Template

Ver: [../templates/TICKET_TEMPLATE.md](../templates/TICKET_TEMPLATE.md)

---

## 📚 Referencias

- [Metodología de Tickets](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md#34--tickets)
- [Workflow de Agentes](./agents/README.md)
