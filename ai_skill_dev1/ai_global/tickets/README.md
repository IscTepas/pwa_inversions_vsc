# ðŸŽ« Tickets - Sistema de Trazabilidad

Tickets de trabajo trazables para control de cambios.

---

## ðŸ“‹ Tipos de Tickets

### 1. Tickets Globales (`TKT-GLOBAL-###`)
Mejoras a la metodologÃ­a, skills nuevos globales, cambios arquitectÃ³nicos generales.

**Ejemplo**:
```
TKT-GLOBAL-001: Mejorar skill de testing
TKT-GLOBAL-002: Agregar soporte para Firebase
```

### 2. Tickets de Proyecto (`TKT-<CODIGO>-###`)
Tareas de implementaciÃ³n dentro de un proyecto especÃ­fico.

**Ejemplo**:
```
TKT-INVRFIC-001: Implementar Broker Connector
TKT-INVRFIC-002: Integrar TradingView Widgets
TKT-INVRFIC-003: Implementar Indicadores TÃ©cnicos
```

---

## ðŸš¦ Estados de un Ticket

- ðŸ†• **Abierto** (Open): ReciÃ©n creado, en backlog
- ðŸŸ¡ **En Desarrollo** (In Progress): Agente actualmente trabajando
- ðŸ”µ **En RevisiÃ³n** (In Review): CÃ³digo listo, pendiente validaciÃ³n
- ðŸš« **Bloqueado** (Blocked): Esperando dependencia externa
- âœ… **Completado** (Closed): Validado y cerrado

**âš ï¸ REGLA CRÃTICA**: No se permite marcar âœ… sin evidencia de ejecuciÃ³n/validaciÃ³n.

---

## ðŸ“‹ Estructura MÃ­nima

```yaml
ID: TKT-INVRFIC-001
TÃ­tulo: Implementar Broker Connector
Tipo: Feature
Prioridad: ðŸ”´ Alta
Estado: ðŸŸ¡ En Desarrollo
Asignado a: Goku
Creado: 2026-02-10
Relacionado: SPECIFICATION.md

## DescripciÃ³n
Implementar conexiÃ³n con Interactive Brokers usando @stoqey/ib

## AceptaciÃ³n
- [ ] ConexiÃ³n exitosa a IBKR
- [ ] Lectura de posiciones
- [ ] Tests unitarios en verde

## Workflow de Agentes
- Picoro: Analizar requisitos âœ…
- Goku: Implementar cÃ³digo ðŸŸ¡
- Vegeta: Optimizar seguridad â³
- Bulma: Validar tests â³
```

---

## ðŸ“Š Ciclo de Vida de un Ticket

```
1. CreaciÃ³n (Picoro)
   ðŸ“ Ticket detallado desde SPECIFICATION
   
2. En Desarrollo (Goku)
   ðŸ‘¨â€ðŸ’» ImplementaciÃ³n de cÃ³digo
   
3. OptimizaciÃ³n (Vegeta)
   ðŸ¥· Performance + Seguridad
   
4. Testing (Bulma)
   ðŸ§ª ValidaciÃ³n y cierre
   
5. Completado (Evidencia)
   âœ… Evidencia registrada
```

---

## âœ… Criterios para Marcar âœ… Completado

**OBLIGATORIO tener**:
- [ ] CÃ³digo implementado y comprometido
- [ ] Tests ejecutados exitosamente (GREEN)
- [ ] ValidaciÃ³n manual (si aplica)
- [ ] DocumentaciÃ³n completada
- [ ] Fecha y responsable de validaciÃ³n
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

## ðŸ” Template

Ver: [../templates/TICKET_TEMPLATE.md](../templates/TICKET_TEMPLATE.md)

---

## ðŸ“š Referencias

- [MetodologÃ­a de Tickets](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md#34--tickets)
- [Workflow de Agentes](./agents/README.md)

