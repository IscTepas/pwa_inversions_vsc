# ðŸŽ¯ Skills - CatÃ¡logo Global

CatÃ¡logo de habilidades reutilizables asignadas a agentes.

---

## ðŸ“‹ Skills por CategorÃ­a

### ðŸ” AnÃ¡lisis y DiseÃ±o (Picoro)

| Skill | DescripciÃ³n | Agente |
|-------|-------------|--------|
| `ticket_analyzer` | Analizar tickets externos y crear especificaciones | Picoro |
| `architecture_designer` | DiseÃ±ar arquitectura de componentes y flujos | Picoro |
| `requirement_validator` | Validar requisitos vs especificaciÃ³n | Picoro |
| `knowledge_synthesizer` | Generar investigaciÃ³n profunda y base de conocimiento | Picoro |
| `spec_to_tickets_converter` | Convertir especificaciÃ³n en tickets internos | Picoro |

---

### ðŸ’» Desarrollo React/TypeScript (Goku)

| Skill | DescripciÃ³n | Agente |
|-------|-------------|--------|
| `react_code_generator` | Generar componentes React funcionales | Goku |
| `typescript_code_generator` | Escribir servicios en TypeScript | Goku |
| `vite_code_generator` | Configurar y optimizar build con Vite | Goku |
| `hook_creator` | Crear React hooks personalizados | Goku |
| `state_management_designer` | DiseÃ±ar estado global (Zustand/Redux) | Goku |

---

### ðŸ”Œ IntegraciÃ³n APIs (Goku)

| Skill | DescripciÃ³n | Agente |
|-------|-------------|--------|
| `broker_api_integrator` | Conectar con APIs de brokers (IBKR, Alpaca) | Goku |
| `tradingview_widgets_integrator` | Integrar grÃ¡ficas y widgets de TradingView | Goku |
| `market_data_connector` | Conectar con feeds de datos (Polygon.io, CBOE) | Goku |
| `news_api_integrator` | Integrar APIs de noticias financieras | Goku |

---

### ðŸ“Š Indicadores TÃ©cnicos (Goku)

| Skill | DescripciÃ³n | Agente |
|-------|-------------|--------|
| `technical_indicators_calculator` | Calcular RSI, MACD, Bollinger, EMA/SMA | Goku |
| `options_chain_analyzer` | Analizar cadena de opciones | Goku |
| `options_strategy_builder` | Construir estrategias de opciones (Iron Condor, etc.) | Goku |
| `signal_detector_engine` | Generar seÃ±ales BUY/SELL/HOLD | Goku |

---

### ðŸ“š DocumentaciÃ³n (Goku)

| Skill | DescripciÃ³n | Agente |
|-------|-------------|--------|
| `documentation_writer` | Crear comentarios FIC bilingÃ¼e (EN/ES) | Goku |
| `readme_generator` | Generar READMEs informativos | Goku |
| `api_documentation_generator` | Documentar endpoints y servicios | Goku |

---

### âš¡ OptimizaciÃ³n y Seguridad (Vegeta)

| Skill | DescripciÃ³n | Agente |
|-------|-------------|--------|
| `code_optimizer` | Optimizar cÃ³digo para performance | Vegeta |
| `performance_analyzer` | Analizar latencia, memory, CPU | Vegeta |
| `security_auditor` | Auditar seguridad y credenciales | Vegeta |
| `pattern_refactorer` | Refactorizar patrones de cÃ³digo | Vegeta |
| `dependency_auditor` | Auditar dependencias (npm audit) | Vegeta |

---

### ðŸ§ª Testing y ValidaciÃ³n (Bulma)

| Skill | DescripciÃ³n | Agente |
|-------|-------------|--------|
| `test_case_generator` | Crear casos de test exhaustivos | Bulma |
| `unit_test_creator` | Implementar tests unitarios | Bulma |
| `integration_test_creator` | Crear tests de integraciÃ³n | Bulma |
| `bug_detector` | Identificar bugs mediante testing | Bulma |
| `quality_validator` | Validar criterios de calidad | Bulma |
| `regression_tester` | Ejecutar tests de regresiÃ³n | Bulma |
| `trading_validator` | Validar cÃ¡lculos de indicadores vs TradingView | Bulma |

---

### ðŸ—„ï¸ Base de Datos (Krillin)

| Skill | DescripciÃ³n | Agente |
|-------|-------------|--------|
| `database_schema_designer` | DiseÃ±ar esquemas para Supabase/MongoDB/PostgreSQL | Krillin |
| `database_migrator` | Crear migraciones versionadas | Krillin |
| `database_connector` | Implementar conectores a BD | Krillin |
| `rest_api_builder` | Construir endpoints REST (GET/POST/PUT/DELETE) | Krillin |
| `orm_odm_implementer` | Implementar modelos ORM/ODM | Krillin |

---

## ðŸ“Š Matriz de AsignaciÃ³n

| Skill | VersiÃ³n | Picoro | Goku | Vegeta | Bulma | Krillin |
|-------|---------|--------|------|--------|-------|---------|
| ticket_analyzer | 1.0.0 | âœ… | | | | |
| architecture_designer | 1.0.0 | âœ… | | | | |
| react_code_generator | 1.0.0 | | âœ… | | | |
| typescript_code_generator | 1.0.0 | | âœ… | | | |
| broker_api_integrator | 1.0.0 | | âœ… | | | |
| code_optimizer | 1.0.0 | | | âœ… | | |
| security_auditor | 1.0.0 | | | âœ… | | |
| test_case_generator | 1.0.0 | | | | âœ… | |
| trading_validator | 1.0.0 | | | | âœ… | |
| database_schema_designer | 1.0.0 | | | | | âœ… |
| rest_api_builder | 1.0.0 | | | | | âœ… |

---

## ðŸ”„ Dependencias Entre Skills

```
â”Œâ”€ ticket_analyzer
â”‚  â””â”€ architecture_designer
â”‚     â””â”€ knowledge_synthesizer
â”‚        â”œâ”€ broker_api_integrator
â”‚        â”œâ”€ technical_indicators_calculator
â”‚        â”œâ”€ options_strategy_builder
â”‚        â””â”€ signal_detector_engine
â”‚
â”œâ”€ database_schema_designer
â”‚  â””â”€ database_migrator
â”‚     â””â”€ rest_api_builder
â”‚
â”œâ”€ react_code_generator
â”‚  â”œâ”€ typescript_code_generator
â”‚  â”œâ”€ tradingview_widgets_integrator
â”‚  â””â”€ hook_creator
â”‚
â”œâ”€ code_optimizer
â”‚  â”œâ”€ performance_analyzer
â”‚  â””â”€ security_auditor
â”‚
â””â”€ test_case_generator
   â”œâ”€ unit_test_creator
   â”œâ”€ integration_test_creator
   â””â”€ trading_validator
```

---

## ðŸ“Œ ConvenciÃ³n de Nombres

**Formato**: `<dominio>_<accion>_<tipo>`

**Ejemplos**:
- `broker_api_integrator` (dominio: broker, acciÃ³n: integrar, tipo: skill de integraciÃ³n)
- `technical_indicators_calculator` (dominio: indicators, acciÃ³n: calcular)
- `database_schema_designer` (dominio: database, acciÃ³n: diseÃ±ar schema)
- `test_case_generator` (dominio: testing, acciÃ³n: generar casos)

---

## ðŸš€ CÃ³mo Crear un Nuevo Skill

1. **Detectar necesidad** â†’ Picoro identifica durante anÃ¡lisis de SPEC
2. **Registrar skill** â†’ Crear `ai_global/skills/<skill_name>.md` usando template
3. **Documentar** â†’ PropÃ³sito, inputs, outputs, dependencias
4. **Asignar a agente** â†’ Agregar en `ai_global/agents/<agente>.md`
5. **Registrar en proyecto** â†’ Agregar en `workflow_agents.yaml` del proyecto

---

## ðŸ“š Referencias

- [Skill Template](../templates/SKILL_TEMPLATE.md)
- [Agentes](./agents/README.md)
- [MetodologÃ­a](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)

