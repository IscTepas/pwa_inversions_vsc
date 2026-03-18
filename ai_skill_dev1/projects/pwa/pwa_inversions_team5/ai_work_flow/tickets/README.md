# 🎫 README - Tickets Internos

> Tareas y tickets del proyecto generados por MEMO en FASE 2.4

---

## 📖 Propósito

Este directorio contiene **tickets internos** (TKT-INVT5-###) que se generarán por MEMO en **FASE 2.4 - Diseño**.

Cada ticket representa:
- Una tarea específica y acotada
- Requisitos explícitos
- Criterios de aceptación
- Links a conocimiento base
- Asignación de agente responsable

---

## 📋 Tickets Planificados

Se generarán en FASE 2.4 cuando investigación de MEMO esté completa:

**Cantidad**: 8-12 tickets
**Formato**: TKT-INVT5-001 hasta TKT-INVT5-012

### Categorías de Tickets Esperadas:

**1. Setup de Infraestructura**:
- TKT-INVT5-001: Setup inicial Vite + React + TypeScript
- TKT-INVT5-002: Configuración de variables de entorno
- TKT-INVT5-003: Conexión a bases de datos (Supabase + MongoDB)

**2. Servicios de Connectors**:
- TKT-INVT5-004: Implementar BrokerConnector (IBKR)
- TKT-INVT5-005: Implementar BrokerConnector (Alpaca)
- TKT-INVT5-006: Implementar MarketDataFeeder

**3. Análisis Técnico**:
- TKT-INVT5-007: Implementar IndicatorCalculator (RSI, MACD, Bollinger)
- TKT-INVT5-008: Validación de indicadores vs TradingView

**4. Detección de Señales**:
- TKT-INVT5-009: Implementar SignalDetector
- TKT-INVT5-010: Implementar gestión de riesgo (SL/TP)

**5. API Backend**:
- TKT-INVT5-011: REST endpoints para signals
- TKT-INVT5-012: REST endpoints para strategies

**6. Frontend**:
- TKT-INVT5-013: Dashboard component
- TKT-INVT5-014: SignalsPanel component
- TKT-INVT5-015: PortfolioPanel component

---

## 📊 Estructura de Ticket Esperado

Cada archivo TKT-INVT5-###.md contendrá:

```markdown
# TKT-INVT5-001: Setup Vite + React + TypeScript

## Descripción
Configurar proyecto React + TypeScript con Vite y structure...

## Requisitos
- Node.js 18+
- npm/yarn
- VSCode

## Criteria de Aceptación
- [ ] Proyecto inicializado
- [ ] Carpetas src/ creadas
- [ ] package.json con deps configurado
- [ ] npm run dev funciona

## Asignación
- **Responsable**: 👨‍💻 BERNA
- **Skill**: react_code_generator, vite_code_generator
- **Duración**: 1-2 horas
- **Bloquea**: Todos los tickets siguientes

## Conocimiento Base
- [framework_documentation.md](../knowledge/remote/05_framework_documentation.md)

## Implementación
[Link a código o notas de implementación]

## Review
- [ ] OVER: Code review (seguridad/performance)
- [ ] MEPU: Testing (si aplica)

## Sign-off
Pendiente completar ticket

Status: ⏳ Pendiente
```

---

## 🔄 Flujo de Ticket

```
MEMO genera ticket (FASE 2.4)
    ↓
BERNA/BANDA inicia trabajo (FASE 3)
    ↓
BERNA/BANDA completa implementación
    ↓
OVER revisa (code review)
    ↓
MEPU testa (testing)
    ↓
Ticket completed
```

---

## 📊 Estado de Tickets

| Ticket | Descripción | Status | Responsable |
|--------|-------------|--------|------------|
| TKT-INVT5-001 | Setup Vite + React + TS | ⏳ Pendiente | BERNA |
| TKT-INVT5-002 | Variables de entorno | ⏳ Pendiente | BANDA |
| TKT-INVT5-003 | Conexión BD | ⏳ Pendiente | BANDA |
| TKT-INVT5-004 | BrokerConnector IBKR | ⏳ Pendiente | BERNA |
| TKT-INVT5-005 | BrokerConnector Alpaca | ⏳ Pendiente | BERNA |
| TKT-INVT5-006 | MarketDataFeeder | ⏳ Pendiente | BERNA |
| TKT-INVT5-007 | IndicatorCalculator | ⏳ Pendiente | BERNA |
| TKT-INVT5-008 | Validación indicadores | ⏳ Pendiente | MEPU |
| TKT-INVT5-009 | SignalDetector | ⏳ Pendiente | BERNA |
| TKT-INVT5-010 | Risk Management (SL/TP) | ⏳ Pendiente | BERNA |
| (más tickets) | ... | ⏳ Pendiente | ... |

---

## 📞 Próximo Paso

1. MEMO completa investigación (FASE 2.3)
2. MEMO genera estos 8-12 tickets (FASE 2.4)
3. Este directorio se llena con TKT-INVT5-###.md
4. BERNA/BANDA inician implementación (FASE 3)

---

## 💡 Referencia

- [workflow_agents.yaml](../development/workflow_agents.yaml) - Configuración de tareas
- [SPECIFICATION.md](../docs/specs/SPECIFICATION.md) - Requerimientos del proyecto
- [knowledge/local/](../knowledge/local/) - Investigación realizada
