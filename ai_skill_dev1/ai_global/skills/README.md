# 🎯 Skills - Catálogo Global

Catálogo de habilidades reutilizables asignadas a agentes.

---

## 📋 Skills por Categoría

### 🔍 Análisis y Diseño (Picoro)

| Skill | Descripción | Agente |
|-------|-------------|--------|
| `ticket_analyzer` | Analizar tickets externos y crear especificaciones | Picoro |
| `architecture_designer` | Diseñar arquitectura de componentes y flujos | Picoro |
| `requirement_validator` | Validar requisitos vs especificación | Picoro |
| `knowledge_synthesizer` | Generar investigación profunda y base de conocimiento | Picoro |
| `spec_to_tickets_converter` | Convertir especificación en tickets internos | Picoro |

---

### 💻 Desarrollo React/TypeScript (Goku)

| Skill | Descripción | Agente |
|-------|-------------|--------|
| `react_code_generator` | Generar componentes React funcionales | Goku |
| `typescript_code_generator` | Escribir servicios en TypeScript | Goku |
| `vite_code_generator` | Configurar y optimizar build con Vite | Goku |
| `hook_creator` | Crear React hooks personalizados | Goku |
| `state_management_designer` | Diseñar estado global (Zustand/Redux) | Goku |

---

### 🔌 Integración APIs (Goku)

| Skill | Descripción | Agente |
|-------|-------------|--------|
| `broker_api_integrator` | Conectar con APIs de brokers (IBKR, Alpaca) | Goku |
| `tradingview_widgets_integrator` | Integrar gráficas y widgets de TradingView | Goku |
| `market_data_connector` | Conectar con feeds de datos (Polygon.io, CBOE) | Goku |
| `news_api_integrator` | Integrar APIs de noticias financieras | Goku |

---

### 📊 Indicadores Técnicos (Goku)

| Skill | Descripción | Agente |
|-------|-------------|--------|
| `technical_indicators_calculator` | Calcular RSI, MACD, Bollinger, EMA/SMA | Goku |
| `options_chain_analyzer` | Analizar cadena de opciones | Goku |
| `options_strategy_builder` | Construir estrategias de opciones (Iron Condor, etc.) | Goku |
| `signal_detector_engine` | Generar señales BUY/SELL/HOLD | Goku |

---

### 📚 Documentación (Goku)

| Skill | Descripción | Agente |
|-------|-------------|--------|
| `documentation_writer` | Crear comentarios FIC bilingüe (EN/ES) | Goku |
| `readme_generator` | Generar READMEs informativos | Goku |
| `api_documentation_generator` | Documentar endpoints y servicios | Goku |

---

### ⚡ Optimización y Seguridad (Vegeta)

| Skill | Descripción | Agente |
|-------|-------------|--------|
| `code_optimizer` | Optimizar código para performance | Vegeta |
| `performance_analyzer` | Analizar latencia, memory, CPU | Vegeta |
| `security_auditor` | Auditar seguridad y credenciales | Vegeta |
| `pattern_refactorer` | Refactorizar patrones de código | Vegeta |
| `dependency_auditor` | Auditar dependencias (npm audit) | Vegeta |

---

### 🧪 Testing y Validación (Bulma)

| Skill | Descripción | Agente |
|-------|-------------|--------|
| `test_case_generator` | Crear casos de test exhaustivos | Bulma |
| `unit_test_creator` | Implementar tests unitarios | Bulma |
| `integration_test_creator` | Crear tests de integración | Bulma |
| `bug_detector` | Identificar bugs mediante testing | Bulma |
| `quality_validator` | Validar criterios de calidad | Bulma |
| `regression_tester` | Ejecutar tests de regresión | Bulma |
| `trading_validator` | Validar cálculos de indicadores vs TradingView | Bulma |

---

### 🗄️ Base de Datos (Krillin)

| Skill | Descripción | Agente |
|-------|-------------|--------|
| `database_schema_designer` | Diseñar esquemas para Supabase/MongoDB/PostgreSQL | Krillin |
| `database_migrator` | Crear migraciones versionadas | Krillin |
| `database_connector` | Implementar conectores a BD | Krillin |
| `rest_api_builder` | Construir endpoints REST (GET/POST/PUT/DELETE) | Krillin |
| `orm_odm_implementer` | Implementar modelos ORM/ODM | Krillin |

---

## 📊 Matriz de Asignación

| Skill | Versión | Picoro | Goku | Vegeta | Bulma | Krillin |
|-------|---------|--------|------|--------|-------|---------|
| ticket_analyzer | 1.0.0 | ✅ | | | | |
| architecture_designer | 1.0.0 | ✅ | | | | |
| react_code_generator | 1.0.0 | | ✅ | | | |
| typescript_code_generator | 1.0.0 | | ✅ | | | |
| broker_api_integrator | 1.0.0 | | ✅ | | | |
| code_optimizer | 1.0.0 | | | ✅ | | |
| security_auditor | 1.0.0 | | | ✅ | | |
| test_case_generator | 1.0.0 | | | | ✅ | |
| trading_validator | 1.0.0 | | | | ✅ | |
| database_schema_designer | 1.0.0 | | | | | ✅ |
| rest_api_builder | 1.0.0 | | | | | ✅ |

---

## 🔄 Dependencias Entre Skills

```
┌─ ticket_analyzer
│  └─ architecture_designer
│     └─ knowledge_synthesizer
│        ├─ broker_api_integrator
│        ├─ technical_indicators_calculator
│        ├─ options_strategy_builder
│        └─ signal_detector_engine
│
├─ database_schema_designer
│  └─ database_migrator
│     └─ rest_api_builder
│
├─ react_code_generator
│  ├─ typescript_code_generator
│  ├─ tradingview_widgets_integrator
│  └─ hook_creator
│
├─ code_optimizer
│  ├─ performance_analyzer
│  └─ security_auditor
│
└─ test_case_generator
   ├─ unit_test_creator
   ├─ integration_test_creator
   └─ trading_validator
```

---

## 📌 Convención de Nombres

**Formato**: `<dominio>_<accion>_<tipo>`

**Ejemplos**:
- `broker_api_integrator` (dominio: broker, acción: integrar, tipo: skill de integración)
- `technical_indicators_calculator` (dominio: indicators, acción: calcular)
- `database_schema_designer` (dominio: database, acción: diseñar schema)
- `test_case_generator` (dominio: testing, acción: generar casos)

---

## 🚀 Cómo Crear un Nuevo Skill

1. **Detectar necesidad** → Picoro identifica durante análisis de SPEC
2. **Registrar skill** → Crear `ai_global/skills/<skill_name>.md` usando template
3. **Documentar** → Propósito, inputs, outputs, dependencias
4. **Asignar a agente** → Agregar en `ai_global/agents/<agente>.md`
5. **Registrar en proyecto** → Agregar en `workflow_agents.yaml` del proyecto

---

## 📚 Referencias

- [Skill Template](../templates/SKILL_TEMPLATE.md)
- [Agentes](./agents/README.md)
- [Metodología](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
