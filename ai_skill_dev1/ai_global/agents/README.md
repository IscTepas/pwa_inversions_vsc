# 🤖 Agentes - Team AI Development

Equipo de 5 agentes IA especializados para desarrollo asistido.

---

## 📋 Agentes Disponibles

| Agente | Rol | Fases | Entrada | Salida |
|--------|-----|-------|---------|--------|
| 🧠 **Picoro** | Analista/Arquitecto | 2.3, 2.4, 3 | Tickets, Specs | Knowledge, Arquitectura, Tickets |
| 👨‍💻 **Goku** | Dev Senior | 2.4, 3 | Tickets, Knowledge | Código funcional, Documentado |
| 🥷 **Vegeta** | Optimizador/Seguridad | 3 | Código de Goku | Código optimizado, Auditado |
| 🧪 **Bulma** | QA/Tester | 3 | Código de Vegeta | Código validado, Bugs reportados |
| 🗄️ **Krillin** | Especialista BD | 2.4, 3 | Specs, Models | Persistencia, REST API |

---

## 🧠 Agente: Picoro (Orchestrator)

**Rol**: Analista / Arquitecto / Orquestador  
**Fases**: FASE 2.3 (Investigación) → FASE 2.4 (Diseño) → FASE 3 (Validación)

### Responsabilidades
- 📋 Analizar especificaciones y tickets externos
- 🏗️ Diseñar arquitectura de soluciones
- 🔍 Investigar tecnologías, frameworks, APIs
- 📚 Generar base de conocimiento profunda (local + remote)
- 🎯 Validar requisitos y decisiones técnicas
- 🔄 Orquestar workflow entre Goku, Vegeta, Bulma, Krillin

### Output Típico
```
📁 knowledge/local/
├─ 01_broker_api_research.md
├─ 02_charting_patterns.md
├─ 03_technical_indicators_decisions.md
├─ 04_options_strategies.md
└─ 05_ai_analysis_strategy.md

📁 knowledge/remote/
├─ ibkr_api_reference.md
├─ tradingview_reference.md
├─ polygon_io_reference.md
└─ notebooklm_research.md

📋 tickets/
├─ TKT-INVRFIC-001.md
├─ TKT-INVRFIC-002.md
└─ TKT-INVRFIC-003.md

📄 workflow_agents.yaml
```

**Ver**: [fic_picoro_agent_orchestrator.md](./fic_picoro_agent_orchestrator.md)

---

## 👨‍💻 Agente: Goku (Senior Developer)

**Rol**: Desarrollador Senior  
**Fases**: FASE 2.4 (Estructura) → FASE 3 (Implementación)

### Responsabilidades
- 💻 Implementar componentes React + TypeScript
- 🔧 Crear servicios y módulos
- 🔌 Integrar APIs externas (brokers, market data, IA)
- 📚 Documentar código con estándar `FIC` bilingüe (EN/ES)
- 📦 Gestionar estructura y dependencias
- 🚀 Entregar código funcional y estructurado

### Tech Stack
- React + TypeScript + Vite + TailwindCSS
- Interactive Brokers API (@stoqey/ib)
- TradingView Lightweight Charts
- TA-Lib, Pandas (indicadores técnicos)
- Claude API (análisis IA)

### Output Típico
```
src/
├─ services/broker/IBKRConnector.ts
├─ services/indicators/RSIService.ts
├─ features/market-scanner/MarketScanner.tsx
├─ hooks/useMarketData.ts
├─ utils/calculateTechnicalIndicators.ts
└─ types/Trading.ts
```

**Obligatorio**: Todo código con comentarios `FIC` EN/ES  
**Ver**: [fic_goku_agent_dev1.md](./fic_goku_agent_dev1.md)

---

## 🥷 Agente: Vegeta (Optimizer/Security)

**Rol**: Optimizador / Especialista en Seguridad  
**Fases**: FASE 3 (Optimización - Paralelo a Goku)

### Responsabilidades
- ⚡ Optimizar latencia en feeds de datos
- 🔒 Auditar seguridad (credenciales, validaciones)
- 🔄 Refactorizar patrones de código
- 📊 Analizar performance
- 🚀 Optimizar build y bundling

### Áreas de Enfoque
- Performance en indicadores técnicos
- Throttling de market data streams
- Manejo seguro de credenciales (solo .env)
- Refactoring de estrategias de trading
- Auditoría de dependencias

### Checklist
- [ ] Latencia broker < 500ms
- [ ] Stream throttled a máx 10 updates/seg
- [ ] Cero credenciales en código
- [ ] npm audit limpio
- [ ] Indicadores validados vs TradingView

**Ver**: [fic_vegeta_agent_dev2.md](./fic_vegeta_agent_dev2.md)

---

## 🧪 Agente: Bulma (QA/Tester)

**Rol**: QA Tester / Garantía de Calidad  
**Fases**: FASE 3 (Testing - Final)

### Responsabilidades
- 🧪 Crear tests unitarios, integración, regresión
- 🐛 Detectar y reportar bugs
- ✅ Validar criterios de aceptación
- 📊 Validar cálculos de indicadores vs TradingView
- ✔️ Verificar precisión de señales de trading

### Testing Específico Trading
- RSI(14) vs TradingView (tolerance 0.5%)
- MACD(12,26,9): Línea signal y histograma
- Bollinger Bands(20,2): Bandas upper/lower
- Señales BUY/SELL: Lógica correcta
- Conexión broker: IBKR y Alpaca

### Criterio de Cierre
```
✅ Completado SOLO si:
- Tests 100% pasando
- Indicadores validados
- Cero bugs bloqueantes
- Evidencia de ejecución registrada
```

**Ver**: [fic_bulma_agent_tester1.md](./fic_bulma_agent_tester1.md)

---

## 🗄️ Agente: Krillin (Database Specialist)

**Rol**: Especialista en Base de Datos  
**Fases**: FASE 2.4 (Diseño) → FASE 3 (Implementación - Paralelo a Goku)

### Responsabilidades
- 📊 Diseñar esquemas de datos
- 🔄 Crear migraciones versionadas
- 🔌 Implementar conectores a BD
- 🚀 Exponer REST API para PWA
- 🔒 Gestionar credenciales seguramente
- 🌐 Soporte multi-base de datos

### Motores Soportados
- Supabase (PostgreSQL managed)
- MongoDB (NoSQL)
- PostgreSQL, MySQL, SQLite
- Firebase Firestore

### Regla Crítica: Credenciales
```
❌ Código fuente     ✅ .env (user-filled, gitignored)
❌ DATABASE_CONFIG   ✅ .env.example (committed, sin valores)
❌ Repositorio      ✅ Variables de entorno
```

### OUTPUT Típico
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

## 🔄 Flujo de Trabajo (Ciclo Completo)

```
┌─────────────────────────────────────────┐
│ FASE 2.3: Investigación                 │
│ 🧠 Picoro analiza SPEC y genera Knowledge
└──────────────┬──────────────────────────┘
               ↓
┌─────────────────────────────────────────┐
│ FASE 2.4: Diseño/Estructura             │
│ 🧠 Picoro diseña arquitectura            │
│ 🗄️ Krillin diseña persistencia           │
│ 👨‍💻 Goku prepara estructura base         │
└──────────────┬──────────────────────────┘
               ↓
┌──────────────────────────────────────────┐
│ FASE 3: Implementación (PARALELO)        │
│                                          │
│ 👨‍💻 Goku → 🥷 Vegeta → 🧪 Bulma         │
│                 ↓                        │
│ 🗄️ Krillin (servicios de datos)         │
└──────────────┬───────────────────────────┘
               ↓
        ✅ MÓDULO LISTO
```

---

## 📊 Matriz de Skills por Agente

### 🧠 Picoro
- ticket_analyzer
- architecture_designer
- requirement_validator
- knowledge_synthesizer

### 👨‍💻 Goku
- react_code_generator
- typescript_code_generator
- vite_code_generator
- tradingview_widgets_integrator
- broker_api_integrator
- documentation_writer
- dependency_manager
- code_structure_organizer

### 🥷 Vegeta
- code_optimizer
- performance_analyzer
- security_auditor
- pattern_refactorer

### 🧪 Bulma
- test_case_generator
- bug_detector
- quality_validator
- regression_tester

### 🗄️ Krillin
- database_schema_designer
- database_migrator
- database_connector

---

## 🎯 Invocación de Agentes

### En Metodología (Roles)
Referirse como: **`@picoro`, `@goku`, `@vegeta`, `@bulma`, `@krillin`**

### En Chat (Invocación Técnica)
Usar notación: **`@picoro`, `@goku`, `@vegeta`, `@bulma`, `@krillin`** + skill específico

### Ejemplo de Activación
```
---
🧠 @picoro · Analista/Arquitecto · FASE 2.3
🎯 skill: knowledge_synthesizer
📋 tarea: Generar investigación de brokers y APIs financieras
---

[Picoro ejecuta la tarea...]

✅ @picoro completó · knowledge_synthesizer · output: knowledge/local/01_broker_api_research.md
```

---

## 📚 Referencias

- [Metodología Completa](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- [Skills Disponibles](../skills/README.md)
- [Workflow Base](../development/workflow_agents.yaml)
