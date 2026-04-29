# ðŸ¤– Agentes - Team AI Development

Equipo de 5 agentes IA especializados para desarrollo asistido.

---

## ðŸ“‹ Agentes Disponibles

| Agente | Rol | Fases | Entrada | Salida |
|--------|-----|-------|---------|--------|
| ðŸ§  **Picoro** | Analista/Arquitecto | 2.3, 2.4, 3 | Tickets, Specs | Knowledge, Arquitectura, Tickets |
| ðŸ‘¨â€ðŸ’» **Goku** | Dev Senior | 2.4, 3 | Tickets, Knowledge | CÃ³digo funcional, Documentado |
| ðŸ¥· **Vegeta** | Optimizador/Seguridad | 3 | CÃ³digo de Goku | CÃ³digo optimizado, Auditado |
| ðŸ§ª **Bulma** | QA/Tester | 3 | CÃ³digo de Vegeta | CÃ³digo validado, Bugs reportados |
| ðŸ—„ï¸ **Krillin** | Especialista BD | 2.4, 3 | Specs, Models | Persistencia, REST API |

---

## ðŸ§  Agente: Picoro (Orchestrator)

**Rol**: Analista / Arquitecto / Orquestador  
**Fases**: FASE 2.3 (InvestigaciÃ³n) â†’ FASE 2.4 (DiseÃ±o) â†’ FASE 3 (ValidaciÃ³n)

### Responsabilidades
- ðŸ“‹ Analizar especificaciones y tickets externos
- ðŸ—ï¸ DiseÃ±ar arquitectura de soluciones
- ðŸ” Investigar tecnologÃ­as, frameworks, APIs
- ðŸ“š Generar base de conocimiento profunda (local + remote)
- ðŸŽ¯ Validar requisitos y decisiones tÃ©cnicas
- ðŸ”„ Orquestar workflow entre Goku, Vegeta, Bulma, Krillin

### Output TÃ­pico
```
ðŸ“ knowledge/local/
â”œâ”€ 01_broker_api_research.md
â”œâ”€ 02_charting_patterns.md
â”œâ”€ 03_technical_indicators_decisions.md
â”œâ”€ 04_options_strategies.md
â””â”€ 05_ai_analysis_strategy.md

ðŸ“ knowledge/remote/
â”œâ”€ ibkr_api_reference.md
â”œâ”€ tradingview_reference.md
â”œâ”€ polygon_io_reference.md
â””â”€ notebooklm_research.md

ðŸ“‹ tickets/
â”œâ”€ TKT-INVRFIC-001.md
â”œâ”€ TKT-INVRFIC-002.md
â””â”€ TKT-INVRFIC-003.md

ðŸ“„ workflow_agents.yaml
```

**Ver**: [fic_picoro_agent_orchestrator.md](./fic_picoro_agent_orchestrator.md)

---

## ðŸ‘¨â€ðŸ’» Agente: Goku (Senior Developer)

**Rol**: Desarrollador Senior  
**Fases**: FASE 2.4 (Estructura) â†’ FASE 3 (ImplementaciÃ³n)

### Responsabilidades
- ðŸ’» Implementar componentes React + TypeScript
- ðŸ”§ Crear servicios y mÃ³dulos
- ðŸ”Œ Integrar APIs externas (brokers, market data, IA)
- ðŸ“š Documentar cÃ³digo con estÃ¡ndar `FIC` bilingÃ¼e (EN/ES)
- ðŸ“¦ Gestionar estructura y dependencias
- ðŸš€ Entregar cÃ³digo funcional y estructurado

### Tech Stack
- React + TypeScript + Vite + TailwindCSS
- Interactive Brokers API (@stoqey/ib)
- TradingView Lightweight Charts
- TA-Lib, Pandas (indicadores tÃ©cnicos)
- Claude API (anÃ¡lisis IA)

### Output TÃ­pico
```
src/
â”œâ”€ services/broker/IBKRConnector.ts
â”œâ”€ services/indicators/RSIService.ts
â”œâ”€ features/market-scanner/MarketScanner.tsx
â”œâ”€ hooks/useMarketData.ts
â”œâ”€ utils/calculateTechnicalIndicators.ts
â””â”€ types/Trading.ts
```

**Obligatorio**: Todo cÃ³digo con comentarios `FIC` EN/ES  
**Ver**: [fic_goku_agent_dev1.md](./fic_goku_agent_dev1.md)

---

## ðŸ¥· Agente: Vegeta (Optimizer/Security)

**Rol**: Optimizador / Especialista en Seguridad  
**Fases**: FASE 3 (OptimizaciÃ³n - Paralelo a Goku)

### Responsabilidades
- âš¡ Optimizar latencia en feeds de datos
- ðŸ”’ Auditar seguridad (credenciales, validaciones)
- ðŸ”„ Refactorizar patrones de cÃ³digo
- ðŸ“Š Analizar performance
- ðŸš€ Optimizar build y bundling

### Ãreas de Enfoque
- Performance en indicadores tÃ©cnicos
- Throttling de market data streams
- Manejo seguro de credenciales (solo .env)
- Refactoring de estrategias de trading
- AuditorÃ­a de dependencias

### Checklist
- [ ] Latencia broker < 500ms
- [ ] Stream throttled a mÃ¡x 10 updates/seg
- [ ] Cero credenciales en cÃ³digo
- [ ] npm audit limpio
- [ ] Indicadores validados vs TradingView

**Ver**: [fic_vegeta_agent_dev2.md](./fic_vegeta_agent_dev2.md)

---

## ðŸ§ª Agente: Bulma (QA/Tester)

**Rol**: QA Tester / GarantÃ­a de Calidad  
**Fases**: FASE 3 (Testing - Final)

### Responsabilidades
- ðŸ§ª Crear tests unitarios, integraciÃ³n, regresiÃ³n
- ðŸ› Detectar y reportar bugs
- âœ… Validar criterios de aceptaciÃ³n
- ðŸ“Š Validar cÃ¡lculos de indicadores vs TradingView
- âœ”ï¸ Verificar precisiÃ³n de seÃ±ales de trading

### Testing EspecÃ­fico Trading
- RSI(14) vs TradingView (tolerance 0.5%)
- MACD(12,26,9): LÃ­nea signal y histograma
- Bollinger Bands(20,2): Bandas upper/lower
- SeÃ±ales BUY/SELL: LÃ³gica correcta
- ConexiÃ³n broker: IBKR y Alpaca

### Criterio de Cierre
```
âœ… Completado SOLO si:
- Tests 100% pasando
- Indicadores validados
- Cero bugs bloqueantes
- Evidencia de ejecuciÃ³n registrada
```

**Ver**: [fic_bulma_agent_tester1.md](./fic_bulma_agent_tester1.md)

---

## ðŸ—„ï¸ Agente: Krillin (Database Specialist)

**Rol**: Especialista en Base de Datos  
**Fases**: FASE 2.4 (DiseÃ±o) â†’ FASE 3 (ImplementaciÃ³n - Paralelo a Goku)

### Responsabilidades
- ðŸ“Š DiseÃ±ar esquemas de datos
- ðŸ”„ Crear migraciones versionadas
- ðŸ”Œ Implementar conectores a BD
- ðŸš€ Exponer REST API para PWA
- ðŸ”’ Gestionar credenciales seguramente
- ðŸŒ Soporte multi-base de datos

### Motores Soportados
- Supabase (PostgreSQL managed)
- MongoDB (NoSQL)
- PostgreSQL, MySQL, SQLite
- Firebase Firestore

### Regla CrÃ­tica: Credenciales
```
âŒ CÃ³digo fuente     âœ… .env (user-filled, gitignored)
âŒ DATABASE_CONFIG   âœ… .env.example (committed, sin valores)
âŒ Repositorio      âœ… Variables de entorno
```

### OUTPUT TÃ­pico
```
src/models/supabase/User.ts
src/migrations/001_initial_schema.sql
src/services/UserService.ts
src/controllers/UserController.ts
src/routes/users.routes.ts
src/types/database.types.ts (para PWA)

.env.example (SUPABASE_URL, MONGODB_URI, etc.)
```

**Ver**: [fic_krillin_agent_db.md](./fic_krillin_agent_db.md)

---

## ðŸ”„ Flujo de Trabajo (Ciclo Completo)

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ FASE 2.3: InvestigaciÃ³n                 â”‚
â”‚ ðŸ§  Picoro analiza SPEC y genera Knowledge
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ FASE 2.4: DiseÃ±o/Estructura             â”‚
â”‚ ðŸ§  Picoro diseÃ±a arquitectura            â”‚
â”‚ ðŸ—„ï¸ Krillin diseÃ±a persistencia           â”‚
â”‚ ðŸ‘¨â€ðŸ’» Goku prepara estructura base         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â†“
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ FASE 3: ImplementaciÃ³n (PARALELO)        â”‚
â”‚                                          â”‚
â”‚ ðŸ‘¨â€ðŸ’» Goku â†’ ðŸ¥· Vegeta â†’ ðŸ§ª Bulma         â”‚
â”‚                 â†“                        â”‚
â”‚ ðŸ—„ï¸ Krillin (servicios de datos)         â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
               â†“
        âœ… MÃ“DULO LISTO
```

---

## ðŸ“Š Matriz de Skills por Agente

### ðŸ§  Picoro
- ticket_analyzer
- architecture_designer
- requirement_validator
- knowledge_synthesizer

### ðŸ‘¨â€ðŸ’» Goku
- react_code_generator
- typescript_code_generator
- vite_code_generator
- tradingview_widgets_integrator
- broker_api_integrator
- documentation_writer
- dependency_manager
- code_structure_organizer

### ðŸ¥· Vegeta
- code_optimizer
- performance_analyzer
- security_auditor
- pattern_refactorer

### ðŸ§ª Bulma
- test_case_generator
- bug_detector
- quality_validator
- regression_tester

### ðŸ—„ï¸ Krillin
- database_schema_designer
- database_migrator
- database_connector

---

## ðŸŽ¯ InvocaciÃ³n de Agentes

### En MetodologÃ­a (Roles)
Referirse como: **`@picoro`, `@goku`, `@vegeta`, `@bulma`, `@krillin`**

### En Chat (InvocaciÃ³n TÃ©cnica)
Usar notaciÃ³n: **`@picoro`, `@goku`, `@vegeta`, `@bulma`, `@krillin`** + skill especÃ­fico

### Ejemplo de ActivaciÃ³n
```
---
ðŸ§  @picoro Â· Analista/Arquitecto Â· FASE 2.3
ðŸŽ¯ skill: knowledge_synthesizer
ðŸ“‹ tarea: Generar investigaciÃ³n de brokers y APIs financieras
---

[Picoro ejecuta la tarea...]

âœ… @picoro completÃ³ Â· knowledge_synthesizer Â· output: knowledge/local/01_broker_api_research.md
```

---

## ðŸ“š Referencias

- [MetodologÃ­a Completa](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- [Skills Disponibles](../skills/README.md)
- [Workflow Base](../development/workflow_agents.yaml)

