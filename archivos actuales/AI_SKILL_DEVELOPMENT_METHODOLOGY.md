# AI SKILL DEVELOPMENT AND SPEC DRIVEN ASSISTANCE AI - MetodologÃ­a HÃ­brida
## Sistema Multi-Proyecto con Agentes, Skills, Conocimientos, Especificaciones y Tickets

**VersiÃ³n**: 2.2  
**Fecha**: 11 de Marzo 2026  
**Autor**: Dr. Francisco Ibarra Carlos  
**Nota**: v2.2 - Soporte multi-base de datos, gates obligatorios de selecciÃ³n/modelado y separaciÃ³n formal PWA vs REST API

---

## 1. IntroducciÃ³n

La metodologÃ­a **AI SKILL DEVELOPMENT** y **SPEC DRIVEN ASSISTANCE AI** permite gestionar mÃºltiples proyectos PWA de manera profesional, modular, reutilizable y trazable mediante:

- ðŸ¤– **Agentes**: Entidades autÃ³nomas que ejecutan tareas
- ðŸŽ¯ **Skills**: Capacidades reutilizables entre proyectos  
- ðŸ“š **Knowledge**: Cuadernos de conocimiento local y remoto
- ðŸŽ« **Tickets**: Control de cambios trazable
- ðŸ“‹ **Specifications**: Especificaciones detalladas bÃ¡sica (inicial) e incrementales

---

## 2. Estructura del Folder ai_skill_dev1

```
ai_skill_dev1/
â”œâ”€â”€ ai_global/                              # Recursos globales reutilizables
|   â”œâ”€â”€ AI_SKILL_DEVELOPMENT_METHODOLOGY.md # Este documento
â”‚   â”œâ”€â”€ agents/                             # ðŸ¤– Agentes de IA de Desarrollo
â”‚   â”‚   â”œâ”€â”€ README.md
â”‚   â”‚   â”œâ”€â”€ fic_picoro_agent_orchestrator.md
â”‚   â”‚   â”œâ”€â”€ fic_goku_agent_dev1.md
â”‚   â”‚   â”œâ”€â”€ fic_vegeta_agent_dev2.md
â”‚   â”‚   â””â”€â”€ fic_bulma_agent_tester1.md
â”‚   â”‚
â”‚   â”œâ”€â”€ skills/                      # ðŸŽ¯ Skills de IA (documentaciÃ³n)
â”‚   â”‚   â”œâ”€â”€ README.md                # ðŸ› ï¸ Ãndice de skills (habilidades)
â”‚   â”œâ”€â”€ knowledge/                   # ðŸ“š Conocimiento global
â”‚   â”‚   â”œâ”€â”€ README.md
â”‚   â”‚   â”œâ”€â”€ remote/                  # Enlaces externos
â”‚   â”‚   â”‚   â”œâ”€â”€ README.md            # ðŸ§  Ãndice de conocimientos online
â”‚   â”‚   â”‚   â””â”€â”€ *.md
â”‚   â”‚   â””â”€â”€ local/                   # Conocimiento interno
â”‚   â”‚       â”œâ”€â”€ README.md            # ðŸ§  Ãndice de conocimientos local
â”‚   â”‚       â””â”€â”€ *.md
â”‚   â”‚
â”‚   â”œâ”€â”€ templates/                   # ðŸ“‹ Templates
â”‚   â”‚   â”œâ”€â”€ AGENT_TEMPLATE.md
â”‚   â”‚   â”œâ”€â”€ SKILL_TEMPLATE.md
â”‚   â”‚   â”œâ”€â”€ TICKET_TEMPLATE.md
â”‚   â”‚   â”œâ”€â”€ KNOWLEDGE_NOTE_TEMPLATE.md
â”‚   â”‚   â”œâ”€â”€ SPEC_INCREMENTAL_TEMPLATE.md
â”‚   â”‚   â””â”€â”€ PROJECT_CONFIG_TEMPLATE.yaml
â”‚   â”‚
â”‚   â””â”€â”€ tickets/                           # ðŸŽ« Tickets globales
â”‚       â”œâ”€â”€ README.md
â”‚       â””â”€â”€ TKT-GLOBAL-###.md
â”‚
â”œâ”€â”€ packages/                    # LibrerÃ­as compartidas (design system, utils, etc.)
â”‚   â”œâ”€â”€ ui-library/              # LibrerÃ­a interna de componentes UI
â”‚   â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ package.json
â”‚   â”‚   â””â”€â”€ tsconfig.json
â”‚   â”œâ”€â”€ utils/                   # Funciones utilitarias compartidas
â”‚   â”‚   â”œâ”€â”€ src/
â”‚   â”‚   â”œâ”€â”€ package.json
â”‚   â”‚   â””â”€â”€ tsconfig.json
â”‚   â””â”€â”€ types/                   # Tipos globales compartidos
â”‚       â”œâ”€â”€ src/
â”‚       â”œâ”€â”€ package.json
â”‚       â””â”€â”€ tsconfig.json
|
â””â”€â”€ projects/                              # Proyectos organizados por categorÃ­a
    â”œâ”€â”€ pwa/                               # Proyectos PWA
    â”‚   â”œâ”€â”€ pwa_inversions_team5/          # Proyecto: Plataforma de Inversiones IA
    â”‚   â”‚   â”œâ”€â”€ public/
    â”‚   â”‚   â”œâ”€â”€ data/                # Contratos/modelos de referencia por base de datos
    â”‚   â”‚   â”‚   â”œâ”€â”€ supabase/
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ models/
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ schema/
    â”‚   â”‚   â”‚   â”‚   â””â”€â”€ data/
    â”‚   â”‚   â”‚   â”œâ”€â”€ mongodb/
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ models/
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ schema/
    â”‚   â”‚   â”‚   â”‚   â””â”€â”€ data/
    â”‚   â”‚   â”‚   â””â”€â”€ ...
    â”‚   â”‚   â”œâ”€â”€ ai_work_flow/         # âœ… Estructura metodolÃ³gica del proyecto (fuera de src)
    â”‚   â”‚   â”‚   â”œâ”€â”€ development/      # Instrucciones para agentes
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ workflow_agents.yaml  # Tareas de Picoro/Goku/Vegeta/Bulma
    â”‚   â”‚   â”‚   â”‚   â””â”€â”€ README.md
    â”‚   â”‚   â”‚   â”œâ”€â”€ docs/             # DocumentaciÃ³n funcional/tÃ©cnica
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ specs/
    â”‚   â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ SPECIFICATION.md
    â”‚   â”‚   â”‚   â”‚   â”‚   â””â”€â”€ incremental/
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ templates/
    â”‚   â”‚   â”‚   â”‚   â””â”€â”€ scripts/
    â”‚   â”‚   â”‚   â”œâ”€â”€ knowledge/
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ README.md
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ remote/
    â”‚   â”‚   â”‚   â”‚   â””â”€â”€ local/
    â”‚   â”‚   â”‚   â””â”€â”€ tickets/          # Tickets internos de desarrollo
    â”‚   â”‚   â”‚       â”œâ”€â”€ README.md
    â”‚   â”‚   â”‚       â”œâ”€â”€ TKT-INVRFIC-001.md
    â”‚   â”‚   â”‚       â”œâ”€â”€ TKT-INVRFIC-002.md
    â”‚   â”‚   â”‚       â””â”€â”€ ...
    â”‚   â”‚   â”œâ”€â”€ src/                   # CÃ³digo ejecutable de la PWA
    â”‚   â”‚   â”‚   â”œâ”€â”€ assets/          # Recursos estÃ¡ticos (imÃ¡genes, fuentes, estilos globales)
    â”‚   â”‚   â”‚   â”œâ”€â”€ components/      # Componentes reutilizables
    â”‚   â”‚   â”‚   â”‚   â””â”€â”€ ui/          # Atomic design: atoms, molecules, organisms
    â”‚   â”‚   â”‚   â”œâ”€â”€ features/        # MÃ³dulos funcionales
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ dashboard/           # Dashboard principal
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ market-scanner/      # EscÃ¡ner de mercado
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ options-chain/       # Cadena de opciones
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ signals/             # Motor de seÃ±ales
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ portfolio/           # GestiÃ³n de portafolio
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ broker-connect/      # ConexiÃ³n con brokers
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ backtesting/         # Backtesting de estrategias
    â”‚   â”‚   â”‚   â”‚   â””â”€â”€ alerts/              # Sistema de alertas
    â”‚   â”‚   â”‚   â”œâ”€â”€ hooks/           # Hooks globales
    â”‚   â”‚   â”‚   â”œâ”€â”€ layouts/         # Layouts generales
    â”‚   â”‚   â”‚   â”œâ”€â”€ pages/           # PÃ¡ginas principales
    â”‚   â”‚   â”‚   â”œâ”€â”€ routes/          # ConfiguraciÃ³n de rutas
    â”‚   â”‚   â”‚   â”œâ”€â”€ services/        # Servicios externos
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ broker/              # IntegraciÃ³n con brokers (IBKR, etc.)
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ market-data/         # Feeds de datos (TradingView, etc.)
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ indicators/          # Motor de indicadores tÃ©cnicos
    â”‚   â”‚   â”‚   â”‚   â”œâ”€â”€ ai-analysis/         # AnÃ¡lisis con IA (Claude API)
    â”‚   â”‚   â”‚   â”‚   â””â”€â”€ news/                # Servicio de noticias financieras
    â”‚   â”‚   â”‚   â”œâ”€â”€ store/           # Estado global (Zustand/Redux)
    â”‚   â”‚   â”‚   â”œâ”€â”€ styles/          # Estilos globales
    â”‚   â”‚   â”‚   â”œâ”€â”€ utils/           # Funciones utilitarias
    â”‚   â”‚   â”‚   â”œâ”€â”€ types/           # Tipos globales
    â”‚   â”‚   â”‚   â”œâ”€â”€ App.tsx          # Componente raÃ­z
    â”‚   â”‚   â”‚   â”œâ”€â”€ main.tsx         # Punto de entrada
    â”‚   â”‚   â”‚   â””â”€â”€ vite-env.d.ts    # Tipos generados por Vite
    â”‚   â”‚   â”œâ”€â”€ tests/               # Pruebas unitarias e integraciÃ³n
    â”‚   â”‚   â”‚   â””â”€â”€ e2e/             # Pruebas end-to-end
    â”‚   â”‚   â”œâ”€â”€ index.html
    â”‚   â”‚   â”œâ”€â”€ package.json
    â”‚   â”‚   â”œâ”€â”€ tsconfig.json
    â”‚   â”‚   â””â”€â”€ vite.config.ts
    â”‚
    â””â”€â”€ api/                               # Proyectos backend / APIs REST
      â””â”€â”€ rest_api_inversions_team5/     # Persistencia real y exposiciÃ³n de endpoints
        â”œâ”€â”€ src/
        â”‚   â”œâ”€â”€ routes/
        â”‚   â”œâ”€â”€ controllers/
        â”‚   â”œâ”€â”€ services/
        â”‚   â”œâ”€â”€ models/
        â”‚   â”œâ”€â”€ migrations/
        â”‚   â””â”€â”€ config/
        â”œâ”€â”€ DATABASE_CONFIG.yaml
        â”œâ”€â”€ .env.example
        â”œâ”€â”€ package.json
        â””â”€â”€ tsconfig.json
```

### ConvenciÃ³n de CÃ³digo Fuente (SRC-First + Workflow-Root)

- Todo cÃ³digo React y TypeScript nuevo del proyecto se crea dentro de `src/`.
- Rutas vÃ¡lidas:
  - `packages/ui-library/src/...`
  - `packages/utils/src/...`
  - `packages/types/src/...`
  - `projects/pwa/pwa_inversions_team5/ai_work_flow/...`
  - `projects/pwa/pwa_inversions_team5/src/...`
  - `projects/api/rest_api_inversions_team5/src/...`
- `config.yaml` y `README.md` por componente son opcionales (modo Full), no obligatorios para ejecutar.
- Estandar operativo: todo nuevo desarrollo debe seguir la estructura oficial definida en esta metodologia.

---

## 3. Componentes Core

### 3.1 ðŸ¤– Agentes (Agents)

**DefiniciÃ³n**: Entidad autÃ³noma que ejecuta tareas usando uno o mÃ¡s skills.

**UbicaciÃ³n**:
- Globales: `ai_skill_dev1/ai_global/agents/`
- Proyecto especÃ­fico (workflow): `ai_skill_dev1/projects/pwa/pwa_inversions_team5/ai_work_flow/development/`
- Proyecto especÃ­fico (cÃ³digo ejecutable): `ai_skill_dev1/projects/pwa/pwa_inversions_team5/src/`

**Ejemplo de configuraciÃ³n de mÃ³dulo de inversiones**:
```yaml
# config.yaml
name: market_scanner_agent
version: 1.0.0
description: Agente para escaneo de mercado y detecciÃ³n de seÃ±ales de trading
skills_required:
  - broker_connector
  - technical_indicators
  - signal_detector
  - ai_market_analyzer
configuration:
  scan_interval_seconds: 60
  max_concurrent_symbols: 50
  signal_confidence_threshold: 0.75
```

#### 3.1.1 Agentes de Desarrollo (AI Skill Development)

Estos son **4 agentes de IA operativos** que trabajan juntos en el ciclo de desarrollo. No son usuarios, son entidades autÃ³nomas con skills especÃ­ficos.

**UbicaciÃ³n**: `ai_skill_dev1/ai_global/agents/` (archivos.md)

```
ðŸ§  fic_picoro_agent_orchestrator
- Rol: Analista/Arquitecto/Orquestador
- Skills: ticket_analyzer, architecture_designer, requirement_validator, knowledge_synthesizer
- CUÃNDO: FASE 2.3 (InvestigaciÃ³n) y FASE 2.4 (DiseÃ±o)
- FunciÃ³n: Analiza SPECIFICATION.md, diseÃ±a arquitectura financiera, genera config.yaml

ðŸ‘¨â€ðŸ’» fic_goku_agent_dev1
- Rol: Programador Senior #1
- Skills: react_code_generator, typescript_code_generator, vite_code_generator,
          tradingview_widgets_integrator, broker_api_integrator, documentation_writer,
          dependency_manager, code_structure_organizer
- CUÃNDO: FASE 2.4 (Estructura) y FASE 3 (ImplementaciÃ³n)
- FunciÃ³n: Implementa cÃ³digo Vite, React, TypeScript; servicios de brokers,
           indicadores tÃ©cnicos, mÃ³dulos de seÃ±ales, integraciÃ³n con APIs financieras
- EstÃ¡ndar de documentaciÃ³n: comentarios inline con prefijo FIC en inglÃ©s y espaÃ±ol

ðŸ¥· fic_vegeta_agent_dev2
- Rol: Optimizador/Desarrollador Senior #2
- Skills: code_optimizer, performance_analyzer, security_auditor, pattern_refactorer
- CUÃNDO: FASE 3 (durante/despuÃ©s de Goku)
- FunciÃ³n: Optimiza latencia en feeds de datos de mercado, audita seguridad de
           credenciales de broker, refactoriza patrones de gestiÃ³n de riesgo

ðŸ§ª fic_bulma_agent_tester1
- Rol: QA Tester/Guardiana de Calidad
- Skills: test_case_generator, bug_detector, quality_validator, regression_tester
- CUÃNDO: FASE 3 (despuÃ©s de Goku/Vegeta)
- FunciÃ³n: Crea tests para estrategias de trading, valida cÃ¡lculos de indicadores,
           verifica precisiÃ³n de seÃ±ales de compra/venta
```

```
ðŸ—„ï¸ fic_krillin_agent_db
- Rol: Especialista en Base de Datos
- Skills: database_schema_designer, database_migrator, database_connector
- CUÃNDO: FASE 2.4 (DiseÃ±o de BD) y FASE 3 (ImplementaciÃ³n de datos, paralelo a Goku)
- FunciÃ³n: DiseÃ±a o valida el modelo de datos, traduce contratos de datos del proyecto PWA
           a persistencia real en `rest_api_inversions_team5`, ejecuta migraciones versionadas,
           implementa capa de servicio de datos y gestiona credenciales de forma segura
- Motores: Supabase, MongoDB, PostgreSQL, MySQL, SQLite, Firebase
- Regla crÃ­tica: NUNCA credenciales en cÃ³digo â€” solo variables de entorno
```

**Ciclo Completo**:

```
â”Œâ”€ FASE 2.3 (InvestigaciÃ³n) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Picoro: Investiga APIs financieras, brokers,   â”‚
â”‚         estrategias a implementar              â”‚
â”‚ Deliverable: Arquitectura documentada          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
â”Œâ”€ FASE 2.4 (Estructura) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Goku: Crea estructura base, skeletons de       â”‚
â”‚       features de inversiÃ³n                   â”‚
â”‚ Deliverable: Proyecto estructurado             â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
â”Œâ”€ FASE 3.1 (ImplementaciÃ³n) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ Goku: Implementa servicios/mÃ³dulos:            â”‚
â”‚  - broker_connector, market_data               â”‚
â”‚  - technical_indicators, signal_detector       â”‚
â”‚  - options_chain, backtesting_engine           â”‚
â”‚ Deliverable: CÃ³digo funcional                  â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
        â†“               â†“
    â”Œâ”€ VEGETA â”€â”€â”€â”€â”€â”€â”  â”Œâ”€ BULMA â”€â”€â”€â”€â”€â”€â”
    â”‚ Optimiza      â”‚  â”‚ Crea tests   â”‚
    â”‚ latencia feedsâ”‚  â”‚ Valida       â”‚
    â”‚ Seguridad API â”‚  â”‚ cÃ¡lculos     â”‚
    â”‚ credenciales  â”‚  â”‚ indicadores  â”‚
    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜  â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
          â†“                    â†“
        â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
        â†“
    â”Œâ”€ APROBACIÃ“N â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
    â”‚ CÃ¡lculos correctos?  â”‚
    â”‚ SeÃ±ales precisas?    â”‚
    â”‚ Seguridad OK?        â”‚
    â”‚ Bugs = 0?            â”‚
    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
          â†“ SÃ
    [MÃ“DULO LISTO]
```

**Regla de Oro**: Orden es **Picoro â†’ Goku â†’ (Vegeta âˆ¥ Bulma) â†’ AprobaciÃ³n** âœ…

**Regla de Oro (con Base de Datos)**: **Picoro â†’ (Krillin âˆ¥ Goku) â†’ (Vegeta âˆ¥ Bulma) â†’ AprobaciÃ³n** âœ…

**Nota**: Krillin trabaja en paralelo a Goku desde FASE 2.4. Goku integra los servicios de datos de Krillin en sus features.

**Regla de DocumentaciÃ³n Inline (Obligatoria)**:
- Todo archivo TypeScript/React implementado en FASE 3 debe incluir comentarios con prefijo `FIC`.
- Los comentarios `FIC` deben escribirse en inglÃ©s y espaÃ±ol (EN/ES).
- MÃ­nimo requerido: mÃ³dulo, clases, hooks pÃºblicos, servicios de broker y bloques de lÃ³gica crÃ­tica de seÃ±ales.
- La ausencia de este estÃ¡ndar bloquea el cierre del ticket hasta corregirse.

Ver: `ai_work_flow/development/workflow_agents.yaml` en cada proyecto para tareas especÃ­ficas.

**Precedencia Operativa de Workflow (Regla Oficial)**:
- `ai_skill_dev1/development/workflow_agents.yaml` define la base global de referencia.
- `projects/<categoria>/<proyecto>/ai_work_flow/development/workflow_agents.yaml` es la fuente operativa oficial del proyecto.
- En caso de diferencia, siempre prevalece el workflow del proyecto.

---

### 3.1.2 ðŸ“¢ Protocolo de Visibilidad de Agente (Agent Activity Protocol)

> **Contexto**: En esta metodologia, todos los agentes son roles del mismo modelo IA activo en la sesion (GitHub Copilot, Claude, GPT-4, Gemini u otro). La metodologia es agnÃ³stica al modelo: el modelo no cambia fisicamente â€” cambia de perspectiva y aplica las reglas del agente activo. Sin una senal explicita, el orquestador humano no sabe que agente esta actuando en cada momento.

> **Regla de oro**: Cada vez que el agente IA cambia de rol, inicia una tarea concreta o completa un bloque de trabajo, DEBE mostrar la cabecera de actividad correspondiente en el chat. No hacerlo es una violacion del protocolo.

#### Formato de cabecera obligatoria (AGENT HEADER)

Se muestra al **inicio** de cada bloque de trabajo de un agente:

```
---
ðŸ¤– @<id_agente> Â· <Rol> Â· FASE <X.X>
ðŸŽ¯ skill: <skill_activo>
ðŸ“‹ tarea: <descripcion breve de lo que va a hacer>
---
```

**Ejemplos reales**:

```
---
ðŸ§  @picoro Â· Analista/Arquitecto Â· FASE 2.3
ðŸŽ¯ skill: knowledge_synthesizer
ðŸ“‹ tarea: Generar knowledge base de dominio de persistencia desde SPEC
---
```

```
---
ðŸ—„ï¸ @krillin Â· Especialista BD Â· FASE 2.4
ðŸŽ¯ skill: database_schema_designer
ðŸ“‹ tarea: DiseÃ±ar schema SQL para Supabase cubriendo entidades de estrategias
---
```

```
---
ðŸ‘¨â€ðŸ’» @goku Â· Dev Senior Â· FASE 3
ðŸŽ¯ skill: react_code_generator
ðŸ“‹ tarea: Implementar componente WatchlistPanel con datos de Supabase
---
```

#### Formato de cierre de tarea (COMPLETION LINE)

Se muestra al **final** de cada bloque de trabajo completado:

```
âœ… @<id_agente> completÃ³ Â· <skill_activo> Â· output: <artefacto(s) generado(s)>
```

**Ejemplo**:
```
âœ… @picoro completÃ³ Â· knowledge_synthesizer Â· output: knowledge/local/01_persistence_domain_research.md
```

#### Formato de transicion entre agentes (AGENT TRANSITION)

Se muestra cuando el control pasa de un agente a otro:

```
---
âž¡ï¸ Transicion de agente
   @<agente_saliente> â”€â”€â†’ @<agente_entrante> Â· FASE <X.X>
   Contexto pasado: <que informacion se transfiere>
---
```

**Ejemplo**:
```
---
âž¡ï¸ Transicion de agente
   @picoro â”€â”€â†’ @krillin Â· FASE 2.4
   Contexto pasado: knowledge base + trazabilidad SPEC->datos + gaps documentados
---
```

#### Reglas operativas

| Situacion | Accion requerida |
|-----------|-----------------|
| Agente inicia cualquier tarea | Mostrar AGENT HEADER antes del primer output |
| Agente termina un bloque de trabajo | Mostrar COMPLETION LINE |
| Control pasa de un agente a otro | Mostrar AGENT TRANSITION |
| Agente ejecuta un gate (pre-gate review o preguntas) | Incluir en AGENT HEADER el gate activo en lugar de skill |
| Tarea muy corta (una sola linea de respuesta) | Basta con la primera linea del header: `ðŸ§  @picoro Â· ...` |

#### Cabeceras rapidas por agente (referencia)

| Agente | Primera linea | Emoji |
|--------|---------------|-------|
| `@picoro` | `ðŸ§  @picoro Â· Analista/Arquitecto Â· FASE X.X` | ðŸ§  |
| `@krillin` | `ðŸ—„ï¸ @krillin Â· Especialista BD Â· FASE X.X` | ðŸ—„ï¸ |
| `@goku` | `ðŸ‘¨â€ðŸ’» @goku Â· Dev Senior Â· FASE X.X` | ðŸ‘¨â€ðŸ’» |
| `@vegeta` | `ðŸ¥· @vegeta Â· Optimizador/Seguridad Â· FASE X.X` | ðŸ¥· |
| `@bulma` | `ðŸ§ª @bulma Â· QA Tester Â· FASE X.X` | ðŸ§ª |

---

### 3.2 ðŸŽ¯ Skills de IA (Habilidades de Desarrollo)

**DefiniciÃ³n**: Capacidades especÃ­ficas de los agentes de IA para ejecutar tareas en el desarrollo.

**Skills de cada Agente**:
- **Picoro**: ticket_analyzer, architecture_designer, requirement_validator, knowledge_synthesizer
- **Goku**: react_code_generator, typescript_code_generator, vite_code_generator, tradingview_widgets_integrator, broker_api_integrator, documentation_writer, dependency_manager, code_structure_organizer
- **Vegeta**: code_optimizer, performance_analyzer, security_auditor, pattern_refactorer
- **Bulma**: test_case_generator, bug_detector, quality_validator, regression_tester

**NO confundir con**:
- **assets**: Recursos estÃ¡ticos (logos brokers, Ã­conos de instrumentos financieros) â†’ `assets/<asset_name>.*`
- **components**: Componentes reutilizables de UI (CandlestickChart, IndicatorPanel) â†’ `components/<component_name>.tsx`
- **ui**: Atomic design: atoms (Badge, Chip), molecules (SignalCard), organisms (WatchlistTable) â†’ `components/ui/<ui_name>.tsx`
- **features**: MÃ³dulos funcionales de trading â†’ `features/<feature_name>/`
- **hooks**: Hooks globales (useMarketData, useBrokerConnection) â†’ `hooks/<hook_name>.tsx`
- **layouts**: Layouts generales (TradingLayout, DashboardLayout) â†’ `layouts/<layout_name>.tsx`
- **pages**: PÃ¡ginas principales (DashboardPage, SignalsPage) â†’ `pages/<page_name>.tsx`
- **routes**: ConfiguraciÃ³n de rutas â†’ `routes/<route_name>.tsx`
- **services**: Servicios externos (broker_connector, market_data_feed, ai_analysis) â†’ `services/<service_name>.tsx`
- **store**: Estado global de mercado y portafolio â†’ `store/<store_name>.tsx`
- **styles**: Estilos globales (tema dark trading) â†’ `styles/<style_name>.tsx`
- **utils**: Funciones utilitarias (calcularRSI, formatearPrecio) â†’ `utils/<util_name>.tsx`
- **types**: Tipos globales (Trade, Signal, Candle, OptionChain) â†’ `types/<type_name>.tsx`

**Los skills de IA viven en**:
- `ai_global/skills/` como archivos `.md` independientes
- Se asignan a uno o mÃ¡s agentes en `ai_global/agents/*.md`
- Pueden ser extendidos por proyecto en `ai_work_flow/development/workflow_agents.yaml`

**Regla**: Un skill es reutilizable y puede ser asignado a mÃºltiples agentes.

**Referencia**:
- Skills: [ai_global/skills/README.md](ai_global/skills/README.md)
- Agentes: [ai_global/agents/README.md](ai_global/agents/README.md)

#### 3.2.1 Registro de Skills (Locales y de Nube)

**Objetivo**: Mantener un catÃ¡logo Ãºnico de skills de IA, sin importar si fueron creados por el equipo o descargados de la nube.

**Regla**: TODO skill nuevo se registra primero en `ai_global/skills/` antes de asignarse a agentes o proyectos.

**Pasos**:
1. Crear archivo `.md` del skill en `ai_global/skills/`.
2. Documentar: propÃ³sito, inputs/outputs, agentes compatibles, fuente (local o nube), versiÃ³n y restricciones.
3. Asignar el skill en `ai_global/agents/<agente>.md`.
4. Si es por proyecto, agregar en `ai_work_flow/development/workflow_agents.yaml`.

**Skills de nube**:
- Se documentan igual que los skills locales.
- Se registra origen, versiÃ³n, proveedor y forma de integraciÃ³n.
- Si requiere instalaciÃ³n (ej. librerÃ­a TA-Lib, IBKR API), se documenta en el proyecto que lo use.

**Resultado**: Skills listos para ser asignados a uno o mÃ¡s agentes sin perder trazabilidad.

#### 3.2.2 Momento de Alta y AsignaciÃ³n de Skills por Proyecto

**Regla de oro**: Los skills nuevos se detectan por necesidad del proyecto durante FASE 2 y se formalizan antes de que el agente que los necesita empiece a ejecutar tickets de implementaciÃ³n.

**Secuencia obligatoria**:
1. **FASE 2.3 - Picoro detecta gaps**:
  - al analizar la SPEC, las bases de datos seleccionadas y las APIs externas requeridas,
  - identifica skills faltantes para Picoro, Krillin, Goku u otros agentes.
2. **Registro global del skill**:
  - crear o actualizar `ai_global/skills/<nuevo_skill>.md`
3. **AsignaciÃ³n metodolÃ³gica del skill**:
  - actualizar `ai_global/agents/<agente>.md`
4. **AsignaciÃ³n operativa por proyecto**:
  - actualizar `projects/.../ai_work_flow/development/workflow_agents.yaml`
5. **Solo entonces**:
  - el agente usa formalmente ese skill en FASE 2.4 o FASE 3

**Ejemplo tÃ­pico**:
- Picoro detecta que el proyecto requiere consumir una API nueva de noticias
- se crea `ai_global/skills/news_api_integrator.md`
- se asigna a Goku o Picoro segÃºn corresponda
- se agrega en `workflow_agents.yaml`
- luego se crean tickets que ya dependen de ese skill

**Regla adicional**:
- Si el skill es reusable entre proyectos, debe quedar en `ai_global/skills/`
- Si la necesidad nace por un proyecto concreto, igual se registra primero globalmente y luego se asigna localmente al workflow del proyecto

---

### 3.3 ðŸ“š Knowledge (Conocimiento)

**DefiniciÃ³n**: Sistema hÃ­brido de gestiÃ³n de conocimiento que combina documentaciÃ³n local (.md) con referencias a fuentes externas y herramientas de IA en la nube.

**Principio Fundamental**: El conocimiento se genera ANTES de los tickets para informar las decisiones de implementaciÃ³n.

**Regla de Oro (Knowledge Base)**:
1. **Siempre** se consulta primero la base de conocimiento **GLOBAL** (`ai_global/knowledge/`).
2. **Luego** se aplica la base de conocimiento **DEL PROYECTO** (`projects/pwa/pwa_inversions_team5/ai_work_flow/knowledge/`).
3. El conocimiento del proyecto **especializa** al global, no lo reemplaza.

---

#### 3.3.1 Knowledge Local (`knowledge/local/`)

**PropÃ³sito**: Conocimiento generado mediante investigaciÃ³n profunda realizada por IA durante la fase de planificaciÃ³n.

**Tipos de Contenido**:
- ðŸ” InvestigaciÃ³n tÃ©cnica de APIs de brokers y feeds de datos de mercado
- ðŸ“Š Patrones de implementaciÃ³n de indicadores tÃ©cnicos (RSI, MACD, Bollinger Bands)
- ðŸ§  Estrategias de opciones documentadas (Iron Condor, Straddle, Strangle, etc.)
- ðŸ’¡ Decisiones arquitectÃ³nicas sobre integraciÃ³n con Interactive Brokers / TradingView
- ðŸ“ Lecciones aprendidas durante el desarrollo de mÃ³dulos de trading
- ðŸ§ª Comparaciones de librerÃ­as de indicadores tÃ©cnicos

**UbicaciÃ³n**:
- Global: `ai_skill_dev1/ai_global/knowledge/local/`
- Proyecto: `ai_skill_dev1/projects/pwa/pwa_inversions_team5/knowledge/local/`

**ConvenciÃ³n de Nombres**:
```
01_<topic>_research.md         # InvestigaciÃ³n numerada
02_<topic>_patterns.md         # Secuencia clara
03_<topic>_decisions.md        # Orden de lectura
04_<topic>_strategy.md         # Estrategia de implementaciÃ³n
lesson_<description>.md        # Lecciones aprendidas
examples/                      # Carpeta para ejemplos de cÃ³digo (opcional)
```

**Ejemplos de CÃ³digo**:
El conocimiento local puede incluir cÃ³digo de tres formas:

1. **Snippets Embebidos** (< 30 lÃ­neas): Dentro de archivos .md de investigaciÃ³n
   ```markdown
   ## PatrÃ³n Recomendado: ConexiÃ³n a Interactive Brokers
   ```typescript
   import { IBApi, EventName } from "@stoqey/ib";
   const ib = new IBApi({ port: 7497, clientId: 1 });
   ib.connect();
   ```
   ```

2. **Ejemplos Medianos** (30-100 lÃ­neas): En archivos .tsx dentro de `examples/`
   ```
   knowledge/local/examples/
   â”œâ”€â”€ README.md
   â”œâ”€â”€ ibkr_connection_demo.tsx
   â”œâ”€â”€ rsi_calculation_example.tsx
   â”œâ”€â”€ iron_condor_builder.tsx
   â””â”€â”€ options_chain_parser.tsx
   ```

3. **Programas Completos**: Referenciados en `knowledge/remote/` (ver 3.3.2)

**Ejemplo â€” InvestigaciÃ³n TÃ©cnica**:
```markdown
# 01_broker_api_research.md
## InvestigaciÃ³n: MÃ©todos de ConexiÃ³n a Brokers con TypeScript

**Fecha**: 2026-03-03
**Investigador**: Claude AI (IA)
**Contexto**: Proyecto pwa_inversions_team5

### Objetivo
Determinar el mejor mÃ©todo para conectar la aplicaciÃ³n a brokers certificados
para ejecutar operaciones y obtener datos de mercado en tiempo real.

### Opciones Investigadas

#### OpciÃ³n 1: Interactive Brokers TWS API (@stoqey/ib)
**DescripciÃ³n**: LibrerÃ­a Node.js oficial para la API de IBKR
**Pros**:
- âœ… API oficial y certificada de Interactive Brokers
- âœ… Acceso completo a opciones, acciones, futuros
- âœ… Datos en tiempo real L1 y L2
- âœ… EjecuciÃ³n de Ã³rdenes algorÃ­tmicas

**Contras**:
- âŒ Requiere TWS o IB Gateway corriendo localmente
- âŒ ConfiguraciÃ³n inicial compleja

**CÃ³digo Ejemplo**:
```typescript
import { IBApi, EventName, Contract } from "@stoqey/ib";
const ib = new IBApi({ port: 7497, clientId: 1, host: "127.0.0.1" });
ib.on(EventName.connected, () => console.log("Broker conectado"));
ib.connect();
```

#### OpciÃ³n 2: Alpaca API (REST + WebSocket)
**DescripciÃ³n**: API REST moderna para trading de acciones y opciones
**Pros**:
- âœ… REST y WebSocket nativos
- âœ… Paper trading gratuito para desarrollo
- âœ… Sin software adicional local

**Contras**:
- âŒ Menor profundidad de mercado que IBKR
- âŒ Opciones con funcionalidades limitadas vs IBKR

### DecisiÃ³n Final
**SelecciÃ³n**: Interactive Brokers (@stoqey/ib) como broker primario + Alpaca para paper trading

**Razones**:
1. IBKR es el estÃ¡ndar de la industria para trading algorÃ­tmico profesional
2. Soporte completo para cadena de opciones y estrategias complejas
3. Alpaca facilita el desarrollo y testing sin capital real
4. Arquitectura modular permite cambiar de broker sin reescribir lÃ³gica

**AplicaciÃ³n**:
- Usar en servicio: `broker_connector`
- Implementar en: TKT-INVRFIC-001, TKT-INVRFIC-002

### Referencias
- [IBKR API Docs](knowledge/remote/ibkr_api_reference.md)
- [Alpaca API Docs](knowledge/remote/alpaca_api_reference.md)
```

**Ejemplo â€” LecciÃ³n Aprendida**:
```markdown
# lesson_options_chain_latency.md
## LecciÃ³n: Latencia en Streaming de Cadena de Opciones

**Fecha**: 2026-03-10
**Contexto**: Durante desarrollo de TKT-INVRFIC-007
**Problema**: Suscribir a todos los strikes de la cadena de opciones generaba
              demasiado trÃ¡fico y la UI se congelaba

### SituaciÃ³n
Al suscribirse a actualizaciones de precio en tiempo real de todos los strikes
y expiraciones del SPY, se recibÃ­an >500 mensajes/seg saturando el estado de React.

### SoluciÃ³n Encontrada
```typescript
// FIC: Throttle updates to max 2/sec per strike (EN)
// FIC: Limitar actualizaciones a mÃ¡x 2/seg por strike (ES)
const throttledUpdate = useMemo(() =>
  throttle((data: OptionQuote) => dispatch(updateOptionQuote(data)), 500),
  [dispatch]
);
```

### AplicaciÃ³n
- PatrÃ³n reutilizable en: todos los streams de datos de mercado
- Documentado en: TKT-INVRFIC-007
```

---

#### 3.3.2 Knowledge Remote (`knowledge/remote/`)

**PropÃ³sito**: Referencias a fuentes externas, documentaciÃ³n oficial de brokers y APIs financieras, herramientas cloud de anÃ¡lisis, y cÃ³digo interno de referencia.

**Tipos de Contenido**:
- ðŸ”— URLs a documentaciÃ³n oficial de brokers (IBKR, Alpaca, TDAmeritrade)
- ðŸ“š APIs de datos de mercado (TradingView, Polygon.io, Alpha Vantage)
- ðŸŒ Tutoriales de estrategias de opciones y anÃ¡lisis tÃ©cnico
- â˜ï¸ **NotebookLM** y otras herramientas de IA para investigaciÃ³n
- ðŸ“– EstÃ¡ndares regulatorios (SEC, FINRA) relevantes
- ðŸ  **Referencias internas** a cÃ³digo propio existente
- ðŸ“Š Recursos educativos de indicadores tÃ©cnicos (RSI, MACD, Bollinger, etc.)

**UbicaciÃ³n**:
- Global: `ai_skill_dev1/ai_global/knowledge/remote/`
- Proyecto: `ai_skill_dev1/projects/pwa/pwa_inversions_team5/knowledge/remote/`

**Estructura de Archivo Remote**:
```markdown
# <topic>_reference.md
## [TÃ­tulo de la Fuente]

**Tipo**: DocumentaciÃ³n Oficial / Tutorial / NotebookLM / API Reference / Otro
**URL**: <enlace directo>
**Fecha creaciÃ³n**: YYYY-MM-DD
**Ãšltima verificaciÃ³n**: YYYY-MM-DD
**Acceso**: PÃºblico / Requiere cuenta / Requiere API Key

### Resumen
[Breve descripciÃ³n del contenido y su relevancia para el proyecto]

### Puntos Clave
- Endpoint o concepto importante 1
- Endpoint o concepto importante 2
- Limitaciones o rate limits relevantes

### AplicaciÃ³n en Proyecto
[CÃ³mo se aplica en pwa_inversions_team5]

### Relacionado con
- Knowledge local: 01_topic_research.md
- Tickets: TKT-INVRFIC-001, TKT-INVRFIC-005
```

**Ejemplo â€” DocumentaciÃ³n Oficial IBKR**:
```markdown
# ibkr_api_reference.md
## Interactive Brokers TWS API Documentation

**Tipo**: DocumentaciÃ³n Oficial Interactive Brokers
**URL**: https://interactivebrokers.github.io/tws-api/
**Fecha creaciÃ³n**: 2026-03-03
**Ãšltima verificaciÃ³n**: 2026-03-03
**Acceso**: PÃºblico

### Resumen
DocumentaciÃ³n oficial de la API de IBKR para conexiÃ³n, obtenciÃ³n de datos
de mercado en tiempo real y ejecuciÃ³n de Ã³rdenes programÃ¡ticas.

### Puntos Clave
- reqMktData(): Suscribirse a precios en tiempo real
- placeOrder(): Enviar Ã³rdenes de compra/venta
- reqOptionChain(): Obtener cadena de opciones
- reqHistoricalData(): Obtener velas histÃ³ricas (OHLCV)
- Rate limits: 50 solicitudes de datos de mercado simultÃ¡neas (cuenta bÃ¡sica)

### AplicaciÃ³n en Proyecto
Base tÃ©cnica para implementaciÃ³n del servicio `broker_connector`
y el mÃ³dulo `options_chain` en pwa_inversions_team5.

### Relacionado con
- Knowledge local: 01_broker_api_research.md
- Tickets: TKT-INVRFIC-001 (Broker Connection), TKT-INVRFIC-007 (Options Chain)
```

**Ejemplo â€” TradingView Widgets**:
```markdown
# tradingview_widgets_reference.md
## TradingView Lightweight Charts & Widgets

**Tipo**: DocumentaciÃ³n Oficial / LibrerÃ­a Open Source
**URL**: https://tradingview.github.io/lightweight-charts/
**Fecha creaciÃ³n**: 2026-03-03
**Ãšltima verificaciÃ³n**: 2026-03-03
**Acceso**: PÃºblico (MIT License)

### Resumen
LibrerÃ­a oficial de TradingView para renderizar grÃ¡ficas financieras de alto
rendimiento en aplicaciones web: velas japonesas, lÃ­neas, indicadores superpuestos.

### Puntos Clave
- createChart(): Inicializa chart container con opciones de tema
- addCandlestickSeries(): Agrega serie de velas OHLCV
- addLineSeries(): Agrega indicadores como SMA, EMA, Bollinger
- update() en tiempo real: Actualiza Ãºltima vela sin re-render completo
- Soporte nativo para tema oscuro (ideal para plataformas de trading)

### AplicaciÃ³n en Proyecto
Principal librerÃ­a de visualizaciÃ³n para el mÃ³dulo `market-scanner`
y las pÃ¡ginas de detalle de sÃ­mbolo en pwa_inversions_team5.

### Relacionado con
- Knowledge local: 02_charting_patterns.md
- Tickets: TKT-INVRFIC-003 (Charting Module)
```

**Ejemplo â€” NotebookLM**:
```markdown
# notebooklm_main_research.md
## NotebookLM: InvestigaciÃ³n Profunda Proyecto pwa_inversions_team5

**Tipo**: NotebookLM (Google AI)
**URL**: https://notebooklm.google.com/notebook/<id_del_notebook>
**Fecha creaciÃ³n**: 2026-03-03
**Ãšltima actualizaciÃ³n**: 2026-03-03
**Acceso**: Requiere cuenta de Google (fibarrac@elnayar.com)

### DescripciÃ³n
Notebook de investigaciÃ³n con anÃ¡lisis profundo de todos los documentos del
proyecto de inversiones usando IA de Google.

### Fuentes Subidas a NotebookLM
- âœ… SPECIFICATION.md (especificaciÃ³n completa del proyecto)
- âœ… Knowledge local generado (01_*.md a 05_*.md)
- âœ… DocumentaciÃ³n de IBKR API
- âœ… DocumentaciÃ³n de TradingView Lightweight Charts
- âœ… Referencias de estrategias de opciones (Iron Condor, Straddle, etc.)

### Capacidades de Este Notebook
- ðŸ’¬ Responde preguntas sobre el proyecto de inversiones
- ðŸ“Š Genera resÃºmenes de estrategias de opciones
- ðŸ” Encuentra inconsistencias entre documentos de requerimientos
- ðŸ’¡ Sugiere mejoras en la lÃ³gica de seÃ±ales de trading
- ðŸ“ Crea guÃ­as para implementaciÃ³n de indicadores

### Preguntas Clave Ya Respondidas
1. **Â¿QuÃ© indicadores combinar para generar seÃ±ales de mayor confianza?**
   - Respuesta: RSI(14) + MACD(12,26,9) + Bollinger Bands(20,2) como confirmaciÃ³n triple
   
2. **Â¿CÃ³mo detectar cuÃ¡ndo los institucionales estÃ¡n posicionados?**
   - Respuesta: Analizar Open Interest + Volume en opciones ATM y analizar dark pool prints

3. **Â¿CuÃ¡l es la mejor frecuencia de actualizaciÃ³n para el scanner?**
   - Respuesta: 1 minuto para seÃ±ales intraday, 15 min para swing trading

### Hallazgos Adicionales del AnÃ¡lisis IA
[El usuario copia aquÃ­ los insights importantes que NotebookLM genere durante el desarrollo]

### CÃ³mo Usar Este Notebook
1. Acceder al URL con cuenta autorizada
2. Hacer preguntas especÃ­ficas durante el desarrollo de cada mÃ³dulo
3. Consultar antes de tomar decisiones sobre lÃ³gica de seÃ±ales
4. Actualizar con nuevo conocimiento generado durante el desarrollo

### Relacionado con
- Proyecto: pwa_inversions_team5
- Knowledge local: todos los archivos 01_*.md a 05_*.md
- Todos los tickets (contexto general)
```

---

#### 3.3.3 Flujo de GeneraciÃ³n de Conocimiento

**Momento**: ANTES de generar tickets (parte de FASE 2.3)

**Proceso**:

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ PASO 1: IA Analiza SPECIFICATION.md                 â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
         Identifica Ã¡reas que requieren investigaciÃ³n:
         - APIs de brokers a integrar (IBKR, Alpaca)
         - LibrerÃ­as de indicadores tÃ©cnicos
         - Estrategias de opciones a implementar
         - Fuentes de datos de mercado y noticias

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ PASO 2: IA Genera Knowledge Local (.md)             â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
         knowledge/local/
         â”œâ”€â”€ 01_broker_api_research.md
         â”œâ”€â”€ 02_charting_library_research.md
         â”œâ”€â”€ 03_technical_indicators_patterns.md
         â”œâ”€â”€ 04_options_strategies_decisions.md
         â””â”€â”€ 05_ai_signal_analysis_strategy.md

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ PASO 3: IA Genera Knowledge Remote (.md)            â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
         knowledge/remote/
         â”œâ”€â”€ ibkr_api_reference.md
         â”œâ”€â”€ alpaca_api_reference.md
         â”œâ”€â”€ tradingview_widgets_reference.md
         â”œâ”€â”€ polygon_io_market_data.md
         â”œâ”€â”€ talib_indicators_reference.md
         â””â”€â”€ notebooklm_placeholder.md  (usuario completa)

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ PASO 4: Usuario Crea NotebookLM (Opcional)          â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
         1. Accede a notebooklm.google.com
         2. Crea notebook del proyecto de inversiones
         3. Sube: SPECIFICATION.md + knowledge local + docs de APIs
         4. Hace preguntas sobre estrategias y lÃ³gica de seÃ±ales
         5. Obtiene URL del notebook

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ PASO 5: Usuario Completa Remote Reference           â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
         Actualiza knowledge/remote/notebooklm_*.md
         con URL y hallazgos clave de trading

â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚ PASO 6: IA Genera Tickets (Usa Knowledge)           â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
                        â†“
         Cada ticket referencia conocimiento necesario:
         
         # TKT-INVRFIC-001: Implementar Broker Connector
         ## Conocimiento Requerido
         - ðŸ“„ knowledge/local/01_broker_api_research.md
         - ðŸ”— knowledge/remote/ibkr_api_reference.md
         - â˜ï¸ knowledge/remote/notebooklm_main.md
```

**Resultado**: Desarrollador tiene contexto completo de las APIs financieras y estrategias ANTES de codificar.

**Momento exacto en la metodologÃ­a**:
- `knowledge/local/` y `knowledge/remote/` se generan en **FASE 2.3**
- ocurren **despuÃ©s** de `DATABASE SELECTION GATE`, `SPECIFICATION GATE` y `DATABASE MODEL GATE`
- ocurren **antes** de crear tickets internos y antes de la implementaciÃ³n funcional de FASE 2.4 / FASE 3

**Uso prÃ¡ctico**:
- `knowledge/local/`: investigaciÃ³n profunda, decisiones internas, patrones, comparativas, hallazgos de arquitectura
- `knowledge/remote/`: referencias oficiales, docs externas, endpoints, SDKs, NotebookLM, fuentes regulatorias y documentaciÃ³n de APIs

**Regla de dependencia**:
- Si un ticket depende de una API, librerÃ­a o motor no trivial, primero debe existir conocimiento suficiente en `knowledge/local/` y/o `knowledge/remote/`

---

#### 3.3.4 GestiÃ³n HÃ­brida durante Desarrollo

**Durante FASE 3 (desarrollo de tickets)**:

1. **Desarrollador lee conocimiento**
   - Revisa local/ para entender decisiones de indicadores y estrategias
   - Consulta remote/ para referencias de APIs de brokers y librerÃ­as
   - Usa NotebookLM para preguntas especÃ­ficas de lÃ³gica financiera

2. **Desarrollador implementa**
   - Sigue patrones documentados de conexiÃ³n a broker
   - Aplica decisiones arquitectÃ³nicas de cÃ¡lculo de indicadores
   - Implementa estrategias de opciones segÃºn especificaciÃ³n

3. **Desarrollador documenta lecciones**
   - Si encuentra latencia inesperada en feeds â†’ crea `lesson_market_data_latency.md`
   - Si descubre comportamiento de API no documentado â†’ actualiza knowledge
   - Si cambia librerÃ­a de indicadores â†’ documenta razÃ³n con benchmarks

**Beneficios**:
- âœ… Menos re-trabajo en lÃ³gica de seÃ±ales
- âœ… Decisiones informadas sobre brokers y feeds de datos
- âœ… Conocimiento de estrategias financieras preservado
- âœ… Equipo alineado en mÃ©tricas de riesgo y criterios de seÃ±ales

---

#### 3.3.5 Estructura de README y Trazabilidad Temporal

**PropÃ³sito**: Cada carpeta `knowledge/` (raÃ­z, local/, remote/) debe tener un README.md que proporciona:
1. **Estado Actual** visible para IA/metodologÃ­a
2. **Historial de Estado** para auditorÃ­a temporal
3. **MÃ©tricas** de contenido generado

**Template**: [README_KNOWLEDGE_TEMPLATE.md](ai_global/templates/README_KNOWLEDGE_TEMPLATE.md)

**Estructura EstÃ¡ndar del README**:

```markdown
## ðŸ“‹ Estado Actual

| Aspecto | Estado | Ãšltima ActualizaciÃ³n |
|---------|--------|----------------------|
| **InvestigaciÃ³n de Brokers** | âœ… Generado | 2026-03-03 10:00 |
| **LibrerÃ­as de Indicadores** | âœ… Generado | 2026-03-03 10:00 |
| **Estrategias de Opciones** | â³ En proceso | 2026-03-03 12:30 |
| **Fase del Proyecto** | FASE 2 | - |

## ðŸ“Š MÃ©tricas de Conocimiento

| MÃ©trica | Valor |
|---------|-------|
| Archivos de investigaciÃ³n (local) | 5 |
| Referencias externas (remote) | 9 |
| Tickets informados | 0 |
| Estrategias documentadas | 8 |

## ðŸ“… Historial de Estado

| Fecha | Hora | Estado Anterior | Estado Nuevo | Evento | Notas |
|-------|------|-----------------|--------------|--------|-------|
| 2026-03-03 | 10:00 | ðŸš§ Estructura | âœ… Generado | InvestigaciÃ³n brokers | 5 local + 9 remote |
| 2026-03-02 | 09:00 | - | ðŸš§ Estructura | Setup | Directorios creados |
```

**Principios del Historial**:
1. **Estado Actual arriba**: Para que IA pueda encontrar rÃ¡pidamente la fase actual
2. **Historial completo abajo**: Para auditorÃ­a y anÃ¡lisis de progreso
3. **Fechas/horas precisas**: Permite anÃ¡lisis temporal
4. **Eventos descriptivos**: Contexto de quÃ© pasÃ³ en cada cambio
5. **Notas con mÃ©tricas**: Cantidad de archivos, decisiones de estrategias tomadas

**Convenciones de Estado**:
- ðŸš§ **Pendiente**: Trabajo no iniciado o estructura bÃ¡sica
- âœ… **Generado/Completado**: Trabajo finalizado y validado
- â³ **En proceso**: Trabajo activo en este momento
- âŒ **Bloqueado**: Trabajo detenido por dependencias

---

### 3.4 ðŸŽ« Tickets

**ConvenciÃ³n de Nombres**:
- Global: `TKT-GLOBAL-###`
- Proyecto Inversiones: `TKT-INVRFIC-###`

**Estados**: Open â†’ In Progress â†’ Review â†’ Closed

**PolÃ­tica de Cierre (Obligatoria)**:
- `Closed` (o âœ… Completado) SOLO se permite con evidencia de prueba.
- Evidencia mÃ­nima: resultado de tests (unitarios/integraciÃ³n o validaciÃ³n manual documentada), fecha, entorno y responsable.
- Para mÃ³dulos de trading: incluir validaciÃ³n de cÃ¡lculos de indicadores vs. fuente de referencia (ej. TradingView).
- Si el cÃ³digo estÃ¡ implementado pero sin validaciÃ³n ejecutada, el estado correcto es `Review`.
- EstÃ¡ prohibido cerrar tickets por "cÃ³digo terminado" sin ejecuciÃ³n comprobada.

**Estructura MÃ­nima**:
```markdown
# TKT-INVRFIC-003: Implementar mÃ³dulo de indicadores tÃ©cnicos

## Metadata
- Tipo: Feature
- Prioridad: Alta
- Estado: In Progress
- Proyecto: pwa_inversions_team5

## DescripciÃ³n
Implementar cÃ¡lculo de RSI(14), MACD(12,26,9) y Bollinger Bands(20,2)
sobre datos OHLCV en tiempo real.

## Archivos Afectados
- src/services/indicators/rsi.service.ts
- src/services/indicators/macd.service.ts
- src/services/indicators/bollinger.service.ts

## Trazabilidad
- Relacionado: TKT-GLOBAL-005 (skill global de cÃ¡lculo de indicadores)
- Knowledge: knowledge/local/03_technical_indicators_patterns.md
```

---

## 4. FASE 0: ConfiguraciÃ³n Inicial del Sistema (Setup Ãšnico)
## 3.5 ðŸ—„ï¸ Base de Datos (Database Configuration)

**DefiniciÃ³n**: La arquitectura de datos se divide en dos capas obligatorias. La PWA documenta contratos y estructuras de referencia; la persistencia real, migraciones y acceso a base de datos viven en el proyecto backend `rest_api_inversions_team5`.

**Agente responsable**: `@krillin` â€” `ai_global/agents/fic_krillin_agent_db.md`

**Archivo de configuraciÃ³n por proyecto backend**: `DATABASE_CONFIG.yaml` en `projects/api/rest_api_inversions_team5/`  
**Template base**: `ai_global/templates/DATABASE_CONFIG_TEMPLATE.yaml`

---

### 3.5.1 Soporte Multi-Base de Datos

La metodologÃ­a asume desde el inicio que un proyecto puede trabajar con **una o mÃ¡s bases de datos**. La selecciÃ³n nunca se infiere por defecto; siempre se pregunta al responsable humano.

**Lista base recomendada para desarrollo asistido por IA**:

| Motor | Tipo | CuÃ¡ndo usarlo |
|-------|------|---------------|
| **Supabase** | PostgreSQL managed + Auth + Storage | App con autenticaciÃ³n, datos relacionales, MCP nativo |
| **MongoDB** | NoSQL document | Datos flexibles, documentos anidados, escala horizontal |
| **PostgreSQL directo** | SQL | Control total, sin SaaS overhead |
| **MySQL / MariaDB** | SQL | Proyectos en hosting propio o entornos existentes |
| **SQLite** | SQL embebido | Prototipos, testing local, utilidades internas |
| **Firebase Firestore** | NoSQL managed | SincronizaciÃ³n rÃ¡pida, escenarios mobile-first |
| **Otro** | Configurable | Documentar en `DATABASE_CONFIG.yaml` |

---

### 3.5.2 SeparaciÃ³n Formal: PWA vs REST API

**Regla de arquitectura**:

| Capa | Proyecto | Responsabilidad |
|------|----------|-----------------|
| Contrato de datos | `projects/pwa/pwa_inversions_team5/` | Documentar modelos de referencia, schema y datos seed de apoyo |
| Persistencia real | `projects/api/rest_api_inversions_team5/` | Conectar a BD real, ejecutar migraciones, exponer endpoints REST |

**En la PWA sÃ­ existe**:
- `data/<alias_db>/models/` para contratos de datos
- `data/<alias_db>/schema/` para definiciÃ³n documental del esquema
- `data/<alias_db>/data/` para seeds de ejemplo o fixtures

**En la PWA no existe**:
- conexiÃ³n real a base de datos
- migraciones ejecutables contra producciÃ³n/desarrollo
- credenciales de base de datos

**En `rest_api_inversions_team5` sÃ­ existe**:
- models reales de ORM/ODM
- migrations
- controllers, routes y services
- `.env.example` y variables de entorno reales

**Flujo obligatorio**:
```
PWA data/* = contrato y referencia
          â†“
Krillin traduce ese contrato
          â†“
rest_api_inversions_team5 = implementaciÃ³n real de persistencia y REST API
```

---

### 3.5.3 DATABASE SELECTION GATE

> **Regla de oro**: Antes de revisar la SPEC principal en FASE 2, la IA debe preguntar explÃ­citamente en quÃ© base o bases de datos trabajarÃ¡ la soluciÃ³n.

**Objetivo**: Confirmar si el proyecto usarÃ¡ 1, 2 o mÃ¡s motores y cuÃ¡les serÃ¡n.

**Pregunta obligatoria al responsable humano**:
```
ðŸ”“ DATABASE SELECTION GATE
Selecciona la(s) base(s) de datos del proyecto.

Opciones recomendadas:
- Supabase
- MongoDB
- PostgreSQL
- MySQL/MariaDB
- SQLite
- Firebase Firestore
- Otro

Puedes elegir una o varias.
Indica exactamente cuÃ¡les usarÃ¡s.
```

**Respuestas vÃ¡lidas**:
- `Supabase`
- `MongoDB`
- `Supabase + MongoDB`
- `PostgreSQL + SQLite`

**Reglas**:
- La IA no puede asumir un motor por defecto.
- Supabase y MongoDB deben aparecer siempre en el listado mostrado.
- La selecciÃ³n debe quedar documentada en la SPEC y en `DATABASE_CONFIG.yaml` del backend.

---

### 3.5.4 DATABASE MODEL GATE

> **Regla de oro**: DespuÃ©s de seleccionar las bases de datos y antes de que Krillin construya persistencia real, la IA debe preguntar quiÃ©n definirÃ¡ el modelo de datos de cada motor seleccionado.

**Pregunta obligatoria al responsable humano**:
```
ðŸ”“ DATABASE MODEL GATE
Ya seleccionaste las siguientes bases de datos: <lista>.

Para cada una, indica una de estas dos opciones:
1. Yo te pasarÃ© el modelo/schema ya construido.
2. Quiero que la IA proponga el modelo/schema.
```

**Si el usuario responde que entregarÃ¡ los modelos**:
- Debe colocarlos en la PWA como contrato de referencia:
  - `projects/pwa/pwa_inversions_team5/data/supabase/models/`
  - `projects/pwa/pwa_inversions_team5/data/supabase/schema/`
  - `projects/pwa/pwa_inversions_team5/data/supabase/data/`
  - `projects/pwa/pwa_inversions_team5/data/mongodb/models/`
  - `projects/pwa/pwa_inversions_team5/data/mongodb/schema/`
  - `projects/pwa/pwa_inversions_team5/data/mongodb/data/`

**Si el usuario responde que la IA debe crearlos**:
- `@picoro` define la propuesta conceptual desde la SPEC
- `@krillin` la aterriza a cada motor seleccionado
- No se ejecuta ninguna migraciÃ³n sin aprobaciÃ³n explÃ­cita del responsable

**Reglas**:
- La decisiÃ³n puede ser distinta por cada base de datos seleccionada.
- Los modelos en `data/` son contrato documental; la implementaciÃ³n real se crea en `rest_api_inversions_team5`.

### 3.5.4.1 MODEL MATURITY GATE (Draft -> Candidate -> Approved)

> **Regla de oro**: Un modelo de datos generado antes de completar conocimiento profundo es valido solo como borrador tecnico. No puede usarse para migraciones ni cierre de diseno.

**Estados obligatorios por motor**:

| Estado | Uso permitido | Uso prohibido |
|-------|---------------|---------------|
| `draft` | Prototipo, validacion temprana de estructura, contratos iniciales | Migraciones, cierre de fase, cierre de ticket de diseno |
| `candidate` | Revision tecnica contra SPEC y knowledge | Migraciones sin aprobacion formal |
| `approved` | Base oficial para migraciones en DEV y construccion de servicios | Saltar validaciones de credenciales o aprobaciones destructivas |

**Criterios minimos para pasar a `candidate`**:
- Knowledge local/remote generado para el dominio de datos
- Matriz de trazabilidad SPEC -> entidades/campos/reglas
- Gaps y riesgos documentados

**Criterios minimos para pasar a `approved`**:
- Revision humana explicita del responsable
- Decisiones entre motores seleccionados cerradas por entidad
- Confirmacion de que no hay conflictos abiertos con tickets incrementales activos

**Reglas operativas**:
- No ejecutar migraciones con estado `draft`.
- No cerrar tickets de modelado si algun motor activo no esta al menos en `candidate`.
- No marcar fase de diseno como completada si un motor activo no esta en `approved`.

---

### 3.5.5 Especificar Cuenta y Cluster

En `DATABASE_CONFIG.yaml` se definen:
- `account.provider`: proveedor cloud (supabase.com, mongodb.com/atlas, etc.)
- `account.owner_email`: cuenta/email owner del entorno (solo referencia, sin contraseÃ±as)
- `account.project_name`: nombre del proyecto en el proveedor
- `account.project_ref`: ID Ãºnico del proyecto (Supabase project ref, MongoDB cluster name)
- `account.region`: regiÃ³n del cluster
- `account.environment`: development | staging | production

**Momento en que la IA lo pide**:
- Inmediatamente despuÃ©s del `DATABASE SELECTION GATE` y antes de cerrar FASE 2.2.
- La solicitud se hace **por cada motor seleccionado**.
- En este punto solo se piden atributos **no secretos**: proveedor, proyecto/cluster, regiÃ³n, environment, owner y referencias del recurso.

**Pregunta obligatoria al responsable humano por cada motor habilitado**:
```text
Confirma los atributos de conexiÃ³n no secretos para <motor>:
- provider
- owner_email
- project_name
- project_ref o cluster_name
- region
- environment
```

**Ejemplo para Supabase**:
```yaml
account:
  provider: "supabase.com"
  owner_email: "fibarrac@elnayar.com"
  project_name: "rest-api-inversions-team5"
  project_ref: "abcdefghijklmnop"
  region: "us-east-1"
  environment: "development"
```

---

### 3.5.6 Protocolo de Credenciales (Regla de Oro)

```
âŒ NUNCA en:           âœ… SIEMPRE en:
  CÃ³digo fuente          .env (gitignored, llenado por owner)
  DATABASE_CONFIG.yaml   .env.example (nombres sin valores, commiteable)
  Archivos .md           Variables de entorno del sistema (CI/CD)
  Repositorio git
```

**Krillin solo genera `.env.example`** dentro de `projects/api/rest_api_inversions_team5/`. El responsable del proyecto llena el `.env` real localmente con las credenciales de la cuenta/cluster indicada en `DATABASE_CONFIG.yaml`.

**Momento en que la IA pide secretos reales**:
- Al inicio de FASE 2.4, cuando Krillin ya generÃ³ o completÃ³ `.env.example` para los motores habilitados.
- La solicitud se hace **por cada base de datos habilitada** y solo para las variables declaradas en `env_variables`.
- Si falta alguna variable real, Krillin **debe pausar** antes de conectar, validar vÃ­a MCP o ejecutar migraciones.

**Ejemplos de lo que sÃ­ se solicita en este momento**:
- Supabase: `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_DB_PASSWORD`
- MongoDB: `MONGODB_URI`, `MONGODB_DB_NAME`, `MONGODB_USER`, `MONGODB_PASSWORD`
- PostgreSQL: `DATABASE_URL` o `DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`

**Regla operativa**:
- FASE 2.2: se pide selecciÃ³n de motores y metadata no secreta por motor.
- FASE 2.3: se resuelve modelado por motor.
- FASE 2.4: se genera `.env.example` y reciÃ©n ahÃ­ se solicitan los secretos reales por motor.
- FASE 3 no inicia contra una base real si el `.env` de algÃºn motor activo estÃ¡ incompleto.

---

### 3.5.7 Plantillas Reutilizables de Preguntas (Por Motor)

Estas plantillas se usan literalmente para evitar ambigÃ¼edad y asegurar que la solicitud se hace por cada base habilitada.

**Plantilla A - FASE 2.2 (atributos no secretos, por motor)**

```text
DATABASE CONNECTION METADATA CHECK - <motor>

Confirma estos atributos no secretos para <motor>:
1) provider:
2) owner_email:
3) project_name:
4) project_ref o cluster_name:
5) region:
6) environment: (development | staging | production)

Nota: en esta fase NO se solicitan passwords, tokens ni connection strings.
```

**Plantilla B - FASE 2.4 (secretos reales, por motor activo)**

```text
DATABASE SECRETS CHECK - <motor>

Krillin ya generÃ³ .env.example para <motor>.
Comparte ahora los valores reales de estas variables para tu .env local:
- <VAR_1>
- <VAR_2>
- <VAR_3>

Si no deseas compartirlos por chat, confÃ­rmame Ãºnicamente:
1) "ya estÃ¡n cargadas en .env"
2) "pendiente cargar"

Bloqueo: no se ejecutarÃ¡n conexiÃ³n, migraciones ni validaciÃ³n MCP para <motor> hasta confirmar estado completo.
```

**Checklist de cierre por cada motor habilitado**:
- [ ] Metadata no secreta capturada en `DATABASE_CONFIG.yaml`
- [ ] Estrategia de modelo definida (`provided_by_user` o `generate_by_ai`)
- [ ] Variables requeridas listadas en `.env.example`
- [ ] Estado de secretos confirmado en `.env` local

---

### 3.5.8 CuÃ¡ndo se Ejecuta Krillin

| Fase | AcciÃ³n |
|------|--------|
| FASE 2.3 | DespuÃ©s del `DATABASE MODEL GATE`: valida contratos en `pwa/.../data/` o propone el modelo por motor seleccionado |
| FASE 2.4 | DiseÃ±a la persistencia real en `projects/api/rest_api_inversions_team5/` â†’ genera `.env.example` y solicita credenciales reales por cada motor activo |
| FASE 3 | ImplementaciÃ³n: ejecuta migrations en development solo si el `.env` por motor estÃ¡ completo â†’ implementa services/controllers/routes â†’ entrega a Goku contratos/endpoints para integrar en la PWA |

**Nota de control**:
- Si Krillin recibe un modelo en estado `draft`, debe tratarlo como insumo temporal y abrir/actualizar ticket para madurez de modelo antes de migrar.

---

### 3.5.9 PRE-GATE REVIEW PANEL â€” Protocolo de revision previa obligatoria

> **Regla de oro**: Antes de lanzar las preguntas formales de cualquier gate que involucre artefactos existentes, la IA debe presentar un panel de revision con **enlaces directos** a esos artefactos para que el responsable los consulte antes de responder.

**Motivacion**: El responsable humano no puede tomar decisiones informadas sin ver los documentos relevantes. Lanzar preguntas sin contexto visible obliga al usuario a buscar archivos por su cuenta, lo que rompe el flujo de revision.

**Protocolo obligatorio â€” dos pasos sin excepcion**:

| Paso | Accion | Herramienta |
|------|--------|-------------|
| 1 | Presentar PRE-GATE REVIEW PANEL con enlaces markdown a todos los artefactos involucrados | Mensaje de chat (markdown) |
| 2 | Lanzar las preguntas formales del gate | `vscode_askQuestions` |

**El paso 1 siempre precede al paso 2. No se lanzan preguntas sin panel previo.**

**Formato de panel requerido**:

```
ðŸ“‹ PRE-GATE REVIEW â€” <NOMBRE DEL GATE>

Antes de responder las preguntas formales, revisa los siguientes artefactos:

| Artefacto | Descripcion | Estado actual |
|-----------|-------------|---------------|
| [nombre.md](ruta/relativa/nombre.md) | Que contiene | draft / candidate / approved |
| ... | ... | ... |

Cuando hayas revisado los artefactos relevantes, responde las preguntas del gate a continuacion.
```

**Reglas operativas**:
- Los enlaces deben ser rutas relativas al workspace para que VS Code los resuelva como ficheros abribles con un click.
- Si un artefacto no existe aun, se indica como `pendiente` en lugar de enlace roto.
- El panel incluye **solo** los artefactos evaluados por ese gate especifico, no todos los del proyecto.
- Si el gate es `per_engine: true`, el panel agrupa los artefactos por motor.
- Si el gate no involucra ningun artefacto existente (ej. primer gate de una fase), se omite el panel.

**Artefactos obligatorios por tipo de gate**:

| Gate | Artefactos obligatorios en panel |
|------|----------------------------------|
| `DATABASE_SELECTION_GATE` | Ninguno (primer gate, sin artefactos previos) |
| `DATABASE_MODEL_GATE` | SPEC principal, `DATABASE_CONFIG.yaml` del backend |
| `MODEL_MATURITY_GATE` | Modelos por motor (`data/<motor>/models/`), schema (`data/<motor>/schema/`), trazabilidad (`knowledge/local/03_*`), gaps (`knowledge/local/04_*`) |
| `DATABASE_SECRETS_CHECK` | `.env.example` del backend |
| Gate de cierre de fase | Todos los outputs de esa fase que ya existen |

---

## 3.6 ðŸ”Œ MCP (Model Context Protocol) â€” IntegraciÃ³n de Agente con Base de Datos

**QuÃ© es MCP**: Protocolo que permite conectar el agente IA directamente a servicios externos (bases de datos, APIs) durante una sesiÃ³n de chat, sin necesidad de implementar cÃ³digo intermedio.

**Para quÃ© se usa en esta metodologÃ­a**:
- Krillin puede consultar el schema real de Supabase o MongoDB durante diseÃ±o
- Krillin puede ejecutar queries de validaciÃ³n sobre la BD real
- Copilot/modelo IA tiene contexto directo del estado de la base de datos

### 3.6.1 Servidores MCP disponibles

| Motor | Paquete MCP | Notas |
|-------|-------------|-------|
| Supabase | `@supabase/mcp-server-supabase` | Requiere Personal Access Token de supabase.com |
| MongoDB Atlas | `mongodb-mcp-server` | Requiere API Key pÃºblica y privada de Atlas |
| PostgreSQL | `@modelcontextprotocol/server-postgres` | Requiere cadena de conexiÃ³n |

### 3.6.2 DÃ³nde se configura el MCP

La configuraciÃ³n tÃ©cnica vive en:  
**`.vscode/mcp.json`** (a nivel workspace de VS Code)

```json
{
  "servers": {
    "supabase": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@supabase/mcp-server-supabase@latest", "--access-token", "${input:SUPABASE_ACCESS_TOKEN}"]
    }
  }
}
```

El template base estÃ¡ en: `.vscode/mcp.json` (ya creado en este proyecto).

### 3.6.3 Credenciales del MCP

- Se leen como `${input:NOMBRE_VARIABLE}` â€” VS Code los solicita interactivamente al activar el servidor
- No se almacenan en el repositorio
- El responsable del proyecto ingresa las credenciales manualmente en su sesiÃ³n local

### 3.6.4 RelaciÃ³n MCP con la metodologÃ­a

El MCP es una capa de **herramienta de sesiÃ³n**, no de metodologÃ­a:

```
Capa metodolÃ³gica (permanente):
  projects/api/rest_api_inversions_team5/DATABASE_CONFIG.yaml
  â†’ fic_krillin_agent_db.md â†’ skills/ â†’ migrations/

Capa MCP (opcional, por sesiÃ³n):
  .vscode/mcp.json â†’ activa acceso directo del agente a la BD en la sesiÃ³n actual
```

- La metodologÃ­a **referencia** el MCP a travÃ©s de `DATABASE_CONFIG.yaml` (`mcp.enabled`, `mcp.mcp_server`)
- La configuraciÃ³n tÃ©cnica del MCP **no es parte de la metodologÃ­a** â€” se gestiona por entorno/IDE

---

## 4. FASE 0: ConfiguraciÃ³n Inicial del Sistema (Setup Ãšnico)

âš ï¸ **IMPORTANTE**: Esta fase se ejecuta **UNA SOLA VEZ** al iniciar el sistema de desarrollo asistido por IA. No es necesario repetirla para nuevos proyectos.

**Objetivo**: Crear la infraestructura base del sistema `ai_skill_dev1/ai_global/` que serÃ¡ reutilizada por todos los proyectos futuros.

**Flujo de Fases**:
```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”    â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚  FASE 0     â”‚â”€â”€â”€â†’â”‚  FASE 1     â”‚â”€â”€â”€â†’â”‚  FASE 2      â”‚â”€â”€â”€â†’â”‚  FASE 3      â”‚
â”‚ Setup       â”‚    â”‚ Agentes/    â”‚    â”‚ Inicio de    â”‚    â”‚ Implement.   â”‚
â”‚ Sistema     â”‚    â”‚ Skills      â”‚    â”‚ Proyecto     â”‚    â”‚ y Testing    â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
  UNA VEZ            UNA VEZ           POR PROYECTO        POR PROYECTO
```

### 4.1 PreparaciÃ³n del Entorno de Trabajo

**Objetivo**: Validar que el entorno tenga las herramientas necesarias.

**Checklist**:
- [ ] Editor de cÃ³digo instalado (VS Code recomendado)
- [ ] Git instalado y configurado
- [ ] Node.js instalado (versiÃ³n 18+ recomendada)
- [ ] Terminal disponible (PowerShell, Bash, o Zsh)
- [ ] Acceso a Claude API o similar (para usar agentes IA)

**Resultado**: Entorno listo para crear estructura de archivos.

### 4.2 CreaciÃ³n de la Estructura `ai_global/`

**Objetivo**: Crear el Ã¡rbol de carpetas y archivos base.

**Comandos** (desde raÃ­z del workspace):
```bash
# Crear estructura base
mkdir -p ai_skill_dev1/ai_global/{agents,skills,knowledge/{local,remote},tickets,templates,prompts}

# Navegar a ai_global
cd ai_skill_dev1/ai_global
```

**Estructura esperada**:
```
ai_skill_dev1/
â””â”€â”€ ai_global/
    â”œâ”€â”€ AI_SKILL_DEVELOPMENT_METHODOLOGY.md  (este documento)
    â”œâ”€â”€ README.md
    â”œâ”€â”€ agents/
    â”‚   â””â”€â”€ README.md
    â”œâ”€â”€ skills/
    â”‚   â””â”€â”€ README.md
    â”œâ”€â”€ knowledge/
    â”‚   â”œâ”€â”€ README.md
    â”‚   â”œâ”€â”€ local/
    â”‚   â”‚   â””â”€â”€ README.md
    â”‚   â””â”€â”€ remote/
    â”‚       â””â”€â”€ README.md
    â”œâ”€â”€ tickets/
    â”‚   â””â”€â”€ README.md
    â”œâ”€â”€ templates/
    â”‚   â””â”€â”€ README.md
    â””â”€â”€ prompts/
        â””â”€â”€ README.md
```

**Resultado**: Estructura de carpetas creada.

### 4.3 DefiniciÃ³n del Equipo de Agentes Base

**Objetivo**: DiseÃ±ar el equipo de agentes IA que trabajarÃ¡ en todos los proyectos.

**Actividades**:
1. **Identificar roles necesarios** segÃºn tipo de proyectos:
   - Analista/Arquitecto
   - Desarrollador(es)
   - Optimizador/Seguridad
   - QA/Testing

2. **Definir responsabilidades** de cada agente:
   - Â¿QuÃ© hace?
   - Â¿CuÃ¡ndo actÃºa?
   - Â¿QuÃ© entrega?

3. **Asignar nombres** memorables:
   - Ejemplo: Picoro (Analista), Goku (Dev1), Vegeta (Optimizador), Bulma (QA)
   - Usar convenciÃ³n: `fic_<nombre>_agent_<rol>.md`

**Plantilla de definiciÃ³n** (para cada agente):
```yaml
Agente: <Nombre>
Rol: <Rol Principal>
Responsabilidades:
  - <Responsabilidad 1>
  - <Responsabilidad 2>
Skills Asignados: (se completan en FASE 1)
Entrada: <QuÃ© recibe>
Salida: <QuÃ© produce>
CUÃNDO: <En quÃ© fase actÃºa>
```

**Resultado**: Documento temporal con definiciÃ³n de 3-5 agentes base.

### 4.4 DocumentaciÃ³n de Agentes

**Objetivo**: Crear archivos `.md` formales para cada agente usando el template.

**Proceso**:
1. **Copiar template**: Usar `ai_global/templates/AGENT_TEMPLATE.md` como base
2. **Crear archivo** por agente:
   ```bash
   # Ejemplo
   touch ai_global/agents/fic_picoro_agent_orchestrator.md
   touch ai_global/agents/fic_goku_agent_dev1.md
   touch ai_global/agents/fic_vegeta_agent_dev2.md
   touch ai_global/agents/fic_bulma_agent_tester1.md
   ```

3. **Completar metadata** en cada archivo:
   - Nombre del agente
   - Rol y responsabilidades
   - Inputs/Outputs
   - Fase de activaciÃ³n
   - Skills asignados (lista vacÃ­a por ahora, se llena en FASE 1)

4. **Actualizar** `ai_global/agents/README.md`:
   - Listar todos los agentes
   - Agregar diagrama de flujo de trabajo

**Resultado**: Archivos de agentes documentados en `ai_global/agents/*.md`.

### 4.5 IdentificaciÃ³n y DocumentaciÃ³n de Skills

**Objetivo**: Crear el catÃ¡logo inicial de skills especÃ­ficas al dominio del proyecto.

**Proceso**:
1. **Identificar skills necesarias** segÃºn el proyecto:
   - Analizar `SPECIFICATION.md` (si existe)
   - Listar tecnologÃ­as clave (React, TypeScript, APIs, etc.)
   - Definir skills transversales (testing, optimizaciÃ³n, documentaciÃ³n)

2. **Crear archivo por skill**:
   ```bash
   # Ejemplo segÃºn proyecto de inversiones
   touch ai_global/skills/ticket_analyzer.md
   touch ai_global/skills/react_code_generator.md
   touch ai_global/skills/typescript_code_generator.md
   # ... continuar con todas las skills
   ```

3. **Documentar cada skill** usando `SKILL_TEMPLATE.md`:
   - **PropÃ³sito**: QuÃ© hace la skill
   - **Inputs**: QuÃ© necesita
   - **Outputs**: QuÃ© produce
   - **Agentes compatibles**: QuÃ© agente(s) la usan
   - **Dependencias**: Otras skills necesarias
   - **VersiÃ³n**: 1.0.0 inicial

4. **Asignar skills a agentes**:
   - Editar cada archivo de agente (`ai_global/agents/*.md`)
   - Agregar lista de skills en secciÃ³n correspondiente

5. **Actualizar** `ai_global/skills/README.md`:
   - Tabla con todas las skills
   - Mapping skill â†’ agente

**Resultado**: 
- Archivos de skills en `ai_global/skills/*.md`
- Skills asignadas a agentes
- CatÃ¡logo completo documentado

### 4.6 VerificaciÃ³n de Templates

**Objetivo**: Asegurar que todos los templates necesarios existen y estÃ¡n completos.

**Templates requeridos**:
- [ ] `SPECIFICATION_TEMPLATE.md`
- [ ] `SPEC_INCREMENTAL_TEMPLATE.md`
- [ ] `AGENT_TEMPLATE.md`
- [ ] `SKILL_TEMPLATE.md`
- [ ] `TICKET_TEMPLATE.md`
- [ ] `KNOWLEDGE_NOTE_TEMPLATE.md`
- [ ] `README_KNOWLEDGE_TEMPLATE.md`
- [ ] `PROJECT_CONFIG_TEMPLATE.yaml`

**Proceso**:
1. Verificar existencia de cada template en `ai_global/templates/`
2. Si faltan, crearlos segÃºn ejemplos de esta metodologÃ­a
3. Actualizar `ai_global/templates/README.md` con lista completa

**Resultado**: Todos los templates disponibles y documentados.

### 4.7 InicializaciÃ³n de `knowledge/` y `tickets/`

**Objetivo**: Preparar espacios para conocimiento y tickets globales.

**Para Knowledge**:
1. Crear `ai_global/knowledge/README.md`:
   - Explicar diferencia entre conocimiento local vs. remoto
   - Definir convenciones de nomenclatura
   - Agregar secciÃ³n de Ã­ndice (vacÃ­a por ahora)

2. Crear `ai_global/knowledge/local/README.md`:
   - Explicar: "Investigaciones internas del equipo"
   - Template de nombre: `YYYY-MM-DD_<tema>.md`

3. Crear `ai_global/knowledge/remote/README.md`:
   - Explicar: "Referencias externas (docs, APIs, etc.)"
   - Template de nombre: `<fuente>_<categoria>.md`

**Para Tickets**:
1. Crear `ai_global/tickets/README.md`:
   - Explicar quÃ© son tickets globales (TKT-GLOBAL-###)
   - CuÃ¡ndo crearlos (mejoras metodologÃ­a, skills nuevos)
   - ConvenciÃ³n de ID

**Resultado**: 
- Carpetas inicializadas con READMEs
- Listas para recibir contenido en futuros proyectos

### 4.8 ActualizaciÃ³n de READMEs

**Objetivo**: Crear documentaciÃ³n de navegaciÃ³n del sistema.

**Archivos a actualizar/crear**:

1. **`ai_global/README.md`** (principal):
```markdown
# AI Skill Development - Global

Sistema de desarrollo asistido por IA usando metodologÃ­a hÃ­brida.

## Estado del Sistema

- âœ… FASE 0: ConfiguraciÃ³n completada
- â³ FASE 1: Pending (crear skills especÃ­ficas de proyecto)

## Estructura

- `agents/` - Equipo de 4 agentes IA
- `skills/` - CatÃ¡logo de X skills
- `knowledge/` - Base de conocimiento
- `tickets/` - Tickets globales
- `templates/` - Templates reutilizables
- `prompts/` - Prompts del sistema

## Agentes Disponibles

1. **Picoro** - Analista/Arquitecto (X skills)
2. **Goku** - Desarrollador Senior (X skills)
3. **Vegeta** - Optimizador/Seguridad (X skills)
4. **Bulma** - QA/Testing (X skills)

Ver: [agents/README.md](agents/README.md)

## Skills Registradas

Total: X skills
Ver catÃ¡logo completo: [skills/README.md](skills/README.md)

## PrÃ³ximos Pasos

Completar FASE 1 para activar el sistema.
```

2. **Otros READMEs**: Ya creados en fases anteriores (agents, skills, knowledge, tickets)

**Resultado**: DocumentaciÃ³n completa y navegable.

### 4.9 ValidaciÃ³n Final del Setup

**Objetivo**: Verificar que FASE 0 estÃ¡ completa antes de continuar.

**Checklist Final**:
- [ ] Estructura de carpetas creada
- [ ] 3-5 agentes documentados en `ai_global/agents/*.md`
- [ ] 10-20 skills documentadas en `ai_global/skills/*.md`
- [ ] Skills asignadas a agentes
- [ ] Templates verificados (8 templates mÃ­nimo)
- [ ] READMEs creados en todas las carpetas
- [ ] `ai_global/README.md` refleja estado actual
- [ ] Knowledge y tickets inicializados

**Comando de validaciÃ³n**:
```bash
# Verificar estructura
tree ai_skill_dev1/ai_global/

# Contar archivos
find ai_global/agents/ -name "*.md" | wc -l  # Debe ser >= 4
find ai_global/skills/ -name "*.md" | wc -l  # Debe ser >= 10
```

**Resultado**: âœ… FASE 0 COMPLETADA - Sistema listo para FASE 1

---

## 5. FASE 1: Agentes y Skills Globales (Setup Ãšnico)

âš ï¸ **IMPORTANTE**: Esta fase se ejecuta **UNA SOLA VEZ** despuÃ©s de completar FASE 0. Extiende y valida el catÃ¡logo de agentes y skills creado.

**Objetivo**: Completar, validar y activar el sistema de agentes y skills para que estÃ© listo para proyectos reales.

**Prerequisito**: FASE 0 completada (estructura `ai_global/` creada y poblada)

### 5.1 RevisiÃ³n y ExtensiÃ³n del CatÃ¡logo de Skills

**Objetivo**: Validar que todas las skills necesarias estÃ¡n documentadas.

**Proceso**:
1. **Revisar lista actual** de skills en `ai_global/skills/`
2. **Identificar gaps**:
   - Â¿Falta alguna tecnologÃ­a clave del stack?
   - Â¿Hay skills transversales faltantes? (logging, error handling, etc.)
   - Â¿Se cubrieron todos los roles de agentes?

3. **Crear skills faltantes**:
   ```bash
   # Si faltan skills
   touch ai_global/skills/<nueva_skill>.md
   # Documentar usando SKILL_TEMPLATE.md
   ```

4. **Actualizar `skills/README.md`** con catalog completo

**Resultado**: CatÃ¡logo de skills completo y validado.

### 5.2 ValidaciÃ³n de Asignaciones Skill-Agente

**Objetivo**: Asegurar que cada skill estÃ¡ correctamente asignada a agente(s).

**Checklist**:
- [ ] Cada skill lista agente(s) compatible(s)
- [ ] Cada agente tiene al menos 3-5 skills asignadas
- [ ] No hay skills huÃ©rfanas (sin agente)
- [ ] No hay agentes sin skills
- [ ] Skills compartidas estÃ¡n marcadas claramente

**Proceso de validaciÃ³n**:
1. Leer cada `ai_global/skills/<skill>.md`
2. Verificar campo "Agentes compatibles"
3. Leer `ai_global/agents/<agente>.md`
4. Verificar que lista skills coincide

**Correcciones**:
- Actualizar archivos de skills o agentes segÃºn sea necesario
- Documentar decisiones de asignaciÃ³n

**Resultado**: Matriz skill-agente consistente y validada.

### 5.3 CreaciÃ³n de `workflow_agents.yaml` Base

**Objetivo**: Configurar el flujo de trabajo base de agentes.

**Archivo**: `ai_skill_dev1/development/workflow_agents.yaml`

**Contenido base**:
```yaml
# Workflow de Agentes - ConfiguraciÃ³n Base
version: "1.0"
project: "base_workflow"

agents:
  - id: picoro
    name: "Picoro (Analyst/Architect)"
    role: orchestrator
    phase: ["2.3", "2.4"]
    skills:
      - ticket_analyzer
      - architecture_designer
      - requirement_validator
      - knowledge_synthesizer

  - id: goku
    name: "Goku (Senior Developer)"
    role: developer
    phase: ["2.4", "3"]
    skills:
      - react_code_generator
      - typescript_code_generator
      # ... (listar todas las skills)

  - id: vegeta
    name: "Vegeta (Optimizer/Security)"
    role: optimizer
    phase: ["3"]
    skills:
      - code_optimizer
      - performance_analyzer
      # ... (listar todas)

  - id: bulma
    name: "Bulma (QA/Tester)"
    role: tester
    phase: ["3"]
    skills:
      - test_case_generator
      - bug_detector
      # ...

workflow:
  phases:
    - id: "2.3"
      name: "InvestigaciÃ³n"
      agents: [picoro]
      output: "knowledge/*.md"

    - id: "2.4"
      name: "DiseÃ±o/Estructura"
      agents: [picoro, goku]
      input: "knowledge/*.md"
      output: "tickets/*.md, architecture.md"

    - id: "3"
      name: "ImplementaciÃ³n"
      agents: [goku, vegeta, bulma]
      input: "tickets/*.md"
      output: "cÃ³digo, tests, docs"
      parallel:
        - goku
        - [vegeta, bulma]  # Vegeta y Bulma actÃºan en paralelo despuÃ©s de Goku
```

**Nota**: Este archivo serÃ¡ copiado/adaptado por cada nuevo proyecto.

**Resultado**: Workflow base documentado y reutilizable.

### 5.4 DocumentaciÃ³n de Convenciones de Uso

**Objetivo**: Crear guÃ­a de cÃ³mo usar el sistema de agentes y skills.

**Crear documento**: `ai_global/USAGE_GUIDE.md`

**Secciones**:
1. **CÃ³mo asignar un ticket a un agente**
2. **CÃ³mo solicitar uso de una skill especÃ­fica**
3. **Formato de prompts para agentes**
4. **Convenciones de nombres de archivos**
5. **Workflow tÃ­pico por proyecto**

**Ejemplo de contenido**:
```markdown
## Asignar Ticket a Agente

En el archivo de ticket (`TKT-XXX-###.md`), agregar metadata:

```yaml
assigned_agent: goku
required_skills:
  - react_code_generator
  - typescript_code_generator
priority: high
```

El agente Goku usarÃ¡ las skills especificadas para resolver el ticket.
```

**Resultado**: GuÃ­a de uso del sistema documentada.

### 5.5 Prueba del Sistema con Ticket Dummy

**Objetivo**: Validar que el sistema funciona end-to-end.

**Proceso**:
1. **Crear ticket de prueba**: `ai_global/tickets/TKT-GLOBAL-001_test_system.md`
   ```yaml
   id: TKT-GLOBAL-001
   title: "Prueba del sistema de agentes"
   type: test
   assigned_agent: goku
   required_skills:
     - react_code_generator
   description: |
     Crear un componente React simple para validar el workflow.
   ```

2. **Simular workflow**:
   - Picoro: Analiza el ticket (skill: ticket_analyzer)
   - Goku: Implementa soluciÃ³n (skill: react_code_generator)
   - Vegeta: Revisa cÃ³digo (skill: code_optimizer)
   - Bulma: Valida (skill: quality_validator)

3. **Documentar resultado** en el ticket

4. **Archivar** ticket de prueba

**Resultado**: ValidaciÃ³n prÃ¡ctica del sistema.

### 5.6 ActualizaciÃ³n de Estado en README Principal

**Objetivo**: Marcar FASE 1 como completada.

**Editar**: `ai_global/README.md`

**Cambiar**:
```markdown
## Estado del Sistema

- âœ… FASE 0: ConfiguraciÃ³n completada (YYYY-MM-DD)
- âœ… FASE 1: Agentes y Skills Globales completados (YYYY-MM-DD)
- â³ FASE 2: Listo para iniciar proyectos

## EstadÃ­sticas

- **Agentes**: 4 (Picoro, Goku, Vegeta, Bulma)
- **Skills**: 20 skills globales
- **Templates**: 8 templates disponibles
- **Ãšltimo Update**: YYYY-MM-DD
```

**Resultado**: README actualizado con estado correcto.

### 5.7 ImplementaciÃ³n TÃ©cnica de Agentes (Opcional - EspecÃ­fica por Entorno)

**Objetivo**: Adaptar los agentes documentados a capacidades tÃ©cnicas del entorno usado (IDE + modelo IA), sin acoplar la metodologÃ­a a una sola herramienta.

âš ï¸ **IMPORTANTE - Arquitectura AgnÃ³stica**:

**Principio fundamental**: La metodologÃ­a NO depende de un IDE ni de un modelo IA especÃ­fico.

**Dos capas complementarias**:
1. **Capa metodolÃ³gica (obligatoria y universal)**
  - Fuente de verdad: `ai_global/agents/*.md`
  - Define roles, responsabilidades, skills y flujo de trabajo
  - Es vÃ¡lida para cualquier IDE/modelo
2. **Capa tÃ©cnica (opcional y especÃ­fica por entorno)**
  - Implementa agentes invocables segÃºn capacidades del entorno
  - Ejemplos: `.github/copilot/agents/`, reglas de Cursor/Windsurf, prompts persistentes en web
  - Nunca reemplaza la capa metodolÃ³gica

#### 5.7.1 Ejemplos por entorno

- VS Code + GitHub Copilot: `.github/copilot/agents/*.agent.md`
- Cursor/Windsurf/otros IDEs: formato de reglas/prompts del entorno
- Web (ChatGPT/Claude/Gemini): proyectos o prompts persistentes

#### 5.7.1.1 ConvenciÃ³n de nombres (recomendada)

Para diferenciar claramente la capa metodolÃ³gica de la capa tÃ©cnica, se recomienda:

- **Agentes documentados (roles)**: mantener nombre descriptivo completo en `ai_global/agents/*.md`
- **Agentes tÃ©cnicos (invocaciÃ³n)**: usar nombres base cortos para chat

Nombres base sugeridos:
- `@picoro`
- `@goku`
- `@vegeta`
- `@bulma`

#### 5.7.1.2 RelaciÃ³n 1:1 rol -> tÃ©cnico

- `fic_picoro_agent_orchestrator.md` -> `picoro.agent.md` (`@picoro`)
- `fic_goku_agent_dev1.md` -> `goku.agent.md` (`@goku`)
- `fic_vegeta_agent_dev2.md` -> `vegeta.agent.md` (`@vegeta`)
- `fic_bulma_agent_tester1.md` -> `bulma.agent.md` (`@bulma`)

#### 5.7.2 DecisiÃ³n formal (con o sin agentes tÃ©cnicos)

âœ… **Implementar agentes tÃ©cnicos** cuando:
- El equipo trabaja con entorno estable
- Se requiere invocaciÃ³n repetible/automatizada
- El proyecto tiene continuidad (mediano/largo plazo)

âŒ **No implementar agentes tÃ©cnicos** cuando:
- Hay mÃºltiples IDE/modelos en paralelo sin estÃ¡ndar
- El flujo manual es suficiente
- El proyecto es corto o exploratorio

**Nota**: Sin capa tÃ©cnica, la metodologÃ­a sigue operativa usando agentes documentados como roles.

#### 5.7.3 Punto de autorizaciÃ³n y ejecuciÃ³n

La autorizaciÃ³n para crear agentes tÃ©cnicos se solicita **al finalizar FASE 1**, despuÃ©s de validar el checklist final (SecciÃ³n 5.8) y **antes** de iniciar FASE 2 del proyecto.

**Secuencia recomendada**:
1. Completar FASE 1 (skills, asignaciones, workflow base, guÃ­a y ticket dummy).
2. Tomar decisiÃ³n formal de la SecciÃ³n 5.7.2.
3. Si la decisiÃ³n es "sÃ­": solicitar autorizaciÃ³n explÃ­cita del responsable.
4. Crear agentes tÃ©cnicos mapeando 1:1 desde `ai_global/agents/*.md`.
5. Documentar su invocaciÃ³n en el README del entorno.

### 5.8 Checklist Final FASE 1

**ValidaciÃ³n antes de considerar FASE 1 completa**:

- [ ] CatÃ¡logo de skills revisado y extendido si era necesario
- [ ] Todas las skills tienen agente(s) asignado(s)
- [ ] Todos los agentes tienen skills documentadas
- [ ] `workflow_agents.yaml` creado con configuraciÃ³n base
- [ ] `USAGE_GUIDE.md` creado con convenciones
- [ ] Prueba con ticket dummy ejecutada exitosamente
- [ ] README principal actualizado con estado âœ… FASE 1
- [ ] DecisiÃ³n formal sobre capa tÃ©cnica: con/sin agentes tÃ©cnicos
- [ ] Si aplica, autorizaciÃ³n registrada para crear agentes tÃ©cnicos
- [ ] Sistema listo para crear primer proyecto real

**Comando de validaciÃ³n**:
```bash
# Verificar archivos clave
ls ai_skill_dev1/development/workflow_agents.yaml
ls ai_global/USAGE_GUIDE.md
grep "âœ… FASE 1" ai_global/README.md
```

**Resultado**: âœ… **FASE 1 COMPLETADA** - Sistema activo; si aplica, autorizado para crear agentes tÃ©cnicos y listo para FASE 2

---

**TransiciÃ³n a FASE 2**: Una vez completadas FASE 0 y FASE 1 (setup Ãºnico), y resuelta la decisiÃ³n/autorizaciÃ³n de la SecciÃ³n 5.7 cuando aplique, el sistema estÃ¡ listo para FASE 2 (Inicio de Nuevo Proyecto) y FASE 3 (ImplementaciÃ³n). Ver SecciÃ³n 6 para detalles del flujo de trabajo estÃ¡ndar por proyecto.

---

## 6. Flujo de Trabajo EstÃ¡ndar

### 6.1 FASE 2: Inicio de Nuevo Proyecto

```bash
# NOTA: FASE 0 y FASE 1 ya completadas (setup Ãºnico del sistema)

# Paso 1: Crear estructura del proyecto
ai_skill_dev1/projects/pwa/pwa_inversions_team5/
â”œâ”€â”€ README.md
â”œâ”€â”€ config.yaml
â”œâ”€â”€ data/
â”‚   â”œâ”€â”€ supabase/
â”‚   â”‚   â”œâ”€â”€ models/
â”‚   â”‚   â”œâ”€â”€ schema/
â”‚   â”‚   â””â”€â”€ data/
â”‚   â”œâ”€â”€ mongodb/
â”‚   â”‚   â”œâ”€â”€ models/
â”‚   â”‚   â”œâ”€â”€ schema/
â”‚   â”‚   â””â”€â”€ data/
â”‚   â””â”€â”€ ...
â”œâ”€â”€ src/
â”œâ”€â”€ ai_work_flow/
â”‚   â”œâ”€â”€ development/
â”‚   â”‚   â”œâ”€â”€ workflow_agents.yaml
â”‚   â”‚   â””â”€â”€ README.md
â”‚   â”œâ”€â”€ docs/
â”‚   â”‚   â””â”€â”€ specs/
â”‚   â”‚       â”œâ”€â”€ SPECIFICATION.md
â”‚   â”‚       â””â”€â”€ incremental/
â”‚   â”œâ”€â”€ knowledge/
â”‚   â”‚   â”œâ”€â”€ remote/
â”‚   â”‚   â””â”€â”€ local/
â”‚   â””â”€â”€ tickets/
â”œâ”€â”€ src/
â”œâ”€â”€ tests/
â””â”€â”€ docs/

ai_skill_dev1/projects/api/rest_api_inversions_team5/
â”œâ”€â”€ DATABASE_CONFIG.yaml
â”œâ”€â”€ .env.example
â”œâ”€â”€ src/
â”‚   â”œâ”€â”€ routes/
â”‚   â”œâ”€â”€ controllers/
â”‚   â”œâ”€â”€ services/
â”‚   â”œâ”€â”€ models/
â”‚   â”œâ”€â”€ migrations/
â”‚   â””â”€â”€ config/
â””â”€â”€ package.json

# Nota de ejecuciÃ³n:
# En este paso se crea el esqueleto/directorio base del backend REST.
# La implementaciÃ³n real de persistencia (models, migrations, services,
# controllers y routes funcionales) la realiza Krillin en FASE 2.4.

# Paso 2: DATABASE SELECTION GATE
# Preguntar al usuario quÃ© base(s) de datos usarÃ¡ el proyecto

# Paso 3: Configurar proyecto
# Editar config.yaml con metadata del proyecto de inversiones

# Paso 4: Generar knowledge base inicial
# Picoro investiga y genera knowledge/local y knowledge/remote
# con base en SPEC, bases seleccionadas, modelos y APIs requeridas

# Paso 5: Asignar skills por proyecto
# Editar ai_work_flow/development/workflow_agents.yaml
# (Si hay skills nuevos: broker_api_integrator, options_analyzer, etc.,
#  primero documentarlos en ai_global/skills/*.md,
#  luego asignarlos en ai_global/agents/*.md,
#  y despues agregarlos al workflow del proyecto)

# Paso 6: Crear ticket inicial
TKT-INVRFIC-001: Setup inicial + Broker Connector

# Paso 7: Desarrollar
# Implementar en features/ y services/
# Documentar decisiones de indicadores/estrategias en knowledge/local/
```

#### 6.1.1 Checklist de Inicio de Proyecto (FASE 2.1-2.4)

- [ ] DATABASE SELECTION GATE ejecutado y documentado
- [ ] SPECIFICATION.md creado y validado
- [ ] DATABASE MODEL GATE ejecutado y documentado por cada motor seleccionado
- [ ] Knowledge base inicial generada antes de tickets
- [ ] Skills nuevos detectados, registrados y asignados antes de implementaciÃ³n
- [ ] Skills globales documentados en `ai_global/skills/`
- [ ] Skills asignados en `ai_global/agents/*.md`
- [ ] `ai_work_flow/development/workflow_agents.yaml` creado con tareas por agente
- [ ] `projects/api/rest_api_inversions_team5/` creado para persistencia real
- [ ] `data/` creado en la PWA como contrato de referencia por base de datos
- [ ] `features/` y `services/` definidos con sus `config.yaml`
- [ ] Knowledge base inicial creada (`knowledge/local` y `knowledge/remote`)
  - [ ] InvestigaciÃ³n de brokers documentada
  - [ ] LibrerÃ­as de indicadores tÃ©cnicos comparadas
  - [ ] Estrategias de opciones especificadas
- [ ] Ticket inicial creado (`TKT-INVRFIC-001`)

#### 6.1.1.1 Checkpoint de Continuidad (Anti-Interrupcion)

Cuando la ejecucion cambia de prioridad en medio de FASE 2 (por ejemplo, pasar de Supabase a MongoDB antes de terminar), el agente debe aplicar este checkpoint obligatorio antes de avanzar:

- [ ] Confirmar motores activos seleccionados en DATABASE SELECTION GATE
- [ ] Verificar que cada motor activo tenga modelo y schema en `projects/pwa/pwa_inversions_team5/data/<motor>/`
- [ ] Verificar que cada motor activo tenga artefacto tecnico inicial en `projects/api/rest_api_inversions_team5/src/models/`
- [ ] Actualizar `projects/api/rest_api_inversions_team5/DATABASE_CONFIG.yaml` con la estrategia final por motor (`generate_by_ai` o `provided_by_user`)
- [ ] Bloquear avance a FASE 2.4 si falta cualquier artefacto de algun motor activo

Regla operativa:
- Si un paso queda incompleto por interrupcion, el estado del ticket se mantiene en `In Progress`.
- Solo se marca `Review` cuando ambos motores activos cumplen el checkpoint de continuidad.

---

#### 6.1.2 DATABASE SELECTION GATE â€” Barrera obligatoria antes de revisar la SPEC

> **Regla de oro**: La IA no revisa ni ejecuta FASE 2.3 sin antes preguntar quÃ© base o bases de datos se usarÃ¡n en el proyecto.

**Comportamiento requerido del agente**:

| SituaciÃ³n | AcciÃ³n del agente |
|-----------|-------------------|
| El usuario ya indicÃ³ una o varias bases de datos | âœ… Documentar y continuar |
| El usuario no ha indicado bases de datos | â›” **STOP** â€” Preguntar y esperar respuesta |
| La IA quiere asumir una base por defecto | âŒ **PROHIBIDO** |

**Mensaje de parada estÃ¡ndar**:
```
â›” DATABASE SELECTION GATE
Antes de continuar necesito saber quÃ© base o bases de datos usarÃ¡ el proyecto.

Opciones recomendadas:
- Supabase
- MongoDB
- PostgreSQL
- MySQL/MariaDB
- SQLite
- Firebase Firestore
- Otro

Puedes elegir una o varias. IndÃ­came exactamente cuÃ¡les usarÃ¡s.
```

---

#### 6.1.3 SPECIFICATION GATE â€” Barrera obligatoria antes de FASE 2.3

> **Regla de oro**: La IA **nunca avanza a FASE 2.3** sin confirmaciÃ³n explÃ­cita del usuario de que la SPEC estÃ¡ en la ruta oficial.

**Ruta oficial Ãºnica**:
```
{proyecto}/ai_work_flow/docs/specs/SPECIFICATION.md
```

**Comportamiento requerido del agente @picoro:**

| SituaciÃ³n | AcciÃ³n del agente |
|-----------|-------------------|
| `SPECIFICATION.md` existe en ruta oficial | âœ… Continuar normalmente con FASE 2.3 |
| `SPECIFICATION.md` NO existe en ruta oficial | â›” **STOP** â€” Pedir al usuario que la coloque |
| Spec encontrada en otra ruta del workspace | â›” **STOP** â€” NO copiarla; pedir al usuario que la mueva |
| Spec autogenerada o inventada por IA | âŒ **PROHIBIDO** â€” Nunca bajo ninguna circunstancia |

**Mensaje de parada estÃ¡ndar** (copiar tal cual cuando se active la barrera):
```
â›” SPECIFICATION GATE
No se encontrÃ³: ai_work_flow/docs/specs/SPECIFICATION.md

Por favor coloca tu especificaciÃ³n en esa ruta y confirma
cuando estÃ© lista para continuar con FASE 2.3.

No continuarÃ© ni buscarÃ© la especificaciÃ³n en otras ubicaciones.
```

**RazÃ³n de esta regla**: La especificaciÃ³n es el contrato del proyecto. Si el agente la busca y copia automÃ¡ticamente desde cualquier ruta, no hay garantÃ­a de que sea la versiÃ³n correcta ni de que el usuario la haya revisado. La colocaciÃ³n manual en la ruta oficial es un acto deliberado de confirmaciÃ³n.

---

#### 6.1.4 DATABASE MODEL GATE â€” Barrera obligatoria antes de diseÃ±o de persistencia

> **Regla de oro**: DespuÃ©s de la selecciÃ³n de bases y antes de que Krillin construya el backend de persistencia, la IA debe preguntar si el modelo de datos serÃ¡ entregado por el usuario o propuesto por la IA.

**Comportamiento requerido del agente**:

| SituaciÃ³n | AcciÃ³n del agente |
|-----------|-------------------|
| El usuario entregarÃ¡ modelos/schemas | âœ… Indicar rutas oficiales dentro de `projects/pwa/pwa_inversions_team5/data/` |
| El usuario quiere que la IA proponga modelos | âœ… Activar flujo `Picoro â†’ Krillin` con aprobaciÃ³n posterior |
| No se ha definido origen del modelo | â›” **STOP** â€” No continuar |

**Mensaje de parada estÃ¡ndar**:
```
â›” DATABASE MODEL GATE
Indica cÃ³mo se definirÃ¡ el modelo de datos para cada base seleccionada:

1. Yo te pasarÃ© los modelos/schemas ya construidos.
2. Quiero que la IA proponga los modelos/schemas.

Si eliges la opciÃ³n 1, coloca los archivos en:
projects/pwa/pwa_inversions_team5/data/<alias_db>/models/
projects/pwa/pwa_inversions_team5/data/<alias_db>/schema/
projects/pwa/pwa_inversions_team5/data/<alias_db>/data/
```

---

#### 6.1.5 Arquitectura de Datos: PWA vs REST API

**Regla de implementaciÃ³n**:

```text
projects/pwa/pwa_inversions_team5/data/*
  = contrato documental y referencia de datos

projects/api/rest_api_inversions_team5/*
  = implementaciÃ³n real de base de datos, migraciones y endpoints REST
```

**DecisiÃ³n metodolÃ³gica**:
- La PWA no construye la base de datos real.
- La REST API sÃ­ construye la base de datos real y su capa de acceso.
- Goku consume endpoints o contratos expuestos por `rest_api_inversions_team5`.
- Krillin construye models, services, controllers y routes en el backend.
- El directorio base de `rest_api_inversions_team5` nace en FASE 2, Paso 1.
- La construcciÃ³n funcional del backend ocurre en FASE 2.4 por Krillin.

---

### 6.2 FASE 3: Desarrollo Guiado por Tickets

#### 6.2.1 Tipos de Tickets

**A. Ticket Externo** (del usuario/cliente):
- **Origen**: Usuario final, Product Owner, Trader/Inversionista
- **Ejemplos**: REQ-INV-001: "Necesito seÃ±ales de compra de opciones en SPY basadas en RSI"
- **QuÃ© contiene**: Solicitud de negocio (nuevo mÃ³dulo, estrategia, mejora)
- **QuiÃ©n lo procesa**: TÃš (el desarrollador)

**B. Specification (SPEC)**:
- **Origen**: TraducciÃ³n tÃ©cnica del ticket externo
- **QuiÃ©n lo crea**: TÃš (desarrollador)
- **Base**: SPECIFICATION.md (original) o incremental/SPEC_00X.md (cambios grandes)

**C. Tickets Internos de Desarrollo**:
- **Origen**: Derivados del diseÃ±o de Picoro
- **Formato**: `TKT-INVRFIC-###`
- **QuiÃ©n los crea**: TÃš (basÃ¡ndote en workflow_agents.yaml)
- **QuÃ© contienen**: Tarea especÃ­fica de implementaciÃ³n

---

#### 6.2.2 Flujo de Tickets: Proyecto Nuevo vs Cambios

**ESCENARIO 1: Proyecto NUEVO desde cero**

```
Ticket Externo: REQ-INV-001
"Necesito una plataforma web que detecte seÃ±ales de trading
 con RSI, MACD y Bollinger, integrada con IBKR"
    â†“
DATABASE SELECTION GATE
  â†“
TÃš creas: docs/specs/SPECIFICATION.md
    â†“
DATABASE MODEL GATE
  â†“
Picoro investiga â†’ knowledge/local/*.md
  (brokers, indicadores, estrategias, feeds de datos)
Picoro diseÃ±a â†’ workflow_agents.yaml + config.yaml
  â†“
Krillin crea persistencia real en `rest_api_inversions_team5`
  (models, migrations, services, controllers, routes)
    â†“
TÃš creas tickets internos:
    - TKT-INVRFIC-001: Implementar broker_connector (IBKR)
    - TKT-INVRFIC-002: Implementar market_data_feed
    - TKT-INVRFIC-003: Implementar technical_indicators service
    - TKT-INVRFIC-004: Implementar signal_detector engine
    - TKT-INVRFIC-005: Implementar dashboard UI
    - TKT-INVRFIC-006: Implementar options_chain viewer
    - TKT-INVRFIC-007: Implementar alerts system
    - ...
    â†“
Por cada ticket: Picoro â†’ Goku â†’ Vegeta â†’ Bulma
    â†“
Cierras ticket externo REQ-INV-001
```

**ESCENARIO 2: Proyecto EXISTENTE - Cambio PEQUEÃ‘O**

```
Ticket Externo: REQ-INV-015
"Agregar el indicador ATR al scanner de mercado"
    â†“
TÃš creas DIRECTAMENTE ticket interno:

tickets/TKT-INVRFIC-025.md
---
Ticket Externo: REQ-INV-015
Solicitante: Dr. FIC
Tipo: Mejora

DescripciÃ³n: Agregar Average True Range (ATR) como indicador de volatilidad
             al servicio de indicadores tÃ©cnicos y al scanner.
Archivos Afectados:
- src/services/indicators/atr.service.ts
- src/features/market-scanner/components/ScannerRow.tsx
    â†“
Picoro â†’ Goku â†’ Vegeta â†’ Bulma
    â†“
Cierras ticket externo REQ-INV-015
```

**ESCENARIO 3: Proyecto EXISTENTE - Cambio GRANDE**

```
Ticket Externo: REQ-INV-030
"Agregar mÃ³dulo completo de backtesting para estrategias de opciones"
    â†“
TÃš creas especificaciÃ³n incremental:

docs/specs/incremental/SPEC_002_backtesting_module.md
---
Ticket Externo: REQ-INV-030
Relacionado con: SPECIFICATION.md (original)

Nueva Funcionalidad: Motor de backtesting para Iron Condor, Straddle, Strangle
Fuente de datos histÃ³ricos: Polygon.io / CBOE
...
    â†“
Picoro analiza spec incremental
Picoro diseÃ±a â†’ actualiza workflow_agents.yaml
    â†“
TÃš creas nuevos tickets internos:
    - TKT-INVRFIC-040: Integrar histÃ³rico de opciones (Polygon.io)
    - TKT-INVRFIC-041: Motor de backtesting para estrategias
    - TKT-INVRFIC-042: Dashboard de resultados de backtesting
    - TKT-INVRFIC-043: MÃ©tricas de rendimiento (Sharpe, Max Drawdown)
    - ...
    â†“
Por cada ticket: Picoro â†’ Goku â†’ Vegeta â†’ Bulma
    â†“
Cierras ticket externo REQ-INV-030
```

---

#### 6.2.3 Regla de DecisiÃ³n: Â¿CuÃ¡ndo crear nueva SPEC?

| Tipo de Cambio | Â¿Nueva SPECIFICATION? | Â¿QuÃ© crear? |
|----------------|----------------------|-------------|
| **Proyecto nuevo** | âœ… SÃ | `docs/specs/SPECIFICATION.md` completo |
| **Fix de cÃ¡lculo de indicador** | âŒ NO | Ticket interno directo |
| **Nuevo indicador tÃ©cnico** | âŒ NO | Ticket interno directo |
| **Nueva estrategia de opciones GRANDE** | âœ… SÃ | `docs/specs/incremental/SPEC_00X.md` |
| **MÃ³dulo de backtesting** | âœ… SÃ | `docs/specs/incremental/SPEC_00X.md` |
| **Nuevo broker a integrar** | âœ… SÃ | `docs/specs/incremental/SPEC_00X.md` |
| **Refactoring completo de seÃ±ales** | âš ï¸ DEPENDE | Evaluar alcance del cambio |

**Criterios para "Cambio GRANDE"**:
- Requiere nuevos servicios/mÃ³dulos (ej. backtesting engine, paper trading)
- Cambia arquitectura de datos de mercado
- Integra nuevo broker o nueva fuente de datos
- EstimaciÃ³n > 20 horas de desarrollo
- Necesita nueva investigaciÃ³n de APIs o estrategias financieras

---

#### 6.2.4 Estructura de Ticket Interno (con referencia externa)

```markdown
# TKT-INVRFIC-###: <TÃ­tulo>

**Metadata**:
- **Ticket Externo**: REQ-INV-XXXX (si aplica)
- **Solicitante**: Nombre (Ãrea / Trader)
- **Fecha Solicitud**: YYYY-MM-DD
- **Tipo**: Nuevo MÃ³dulo / Estrategia / Indicador / Mejora / CorrecciÃ³n / Refactoring
- **Prioridad**: Alta / Media / Baja
- **Estado**: ðŸŸ¡ En Desarrollo / âœ… Completado
- **Relacionado con**: SPECIFICATION.md o incremental/SPEC_00X.md

---

## DescripciÃ³n del Cambio
[QuÃ© se necesita implementar: indicador, estrategia, integraciÃ³n con broker, etc.]

**JustificaciÃ³n**: [Por quÃ© es necesario para la estrategia de inversiÃ³n]

---

## AnÃ¡lisis de Impacto

**Archivos a Modificar/Crear**:
- `src/services/indicators/<indicador>.service.ts`
- `src/features/<feature>/components/<Component>.tsx`
- `src/store/<store_slice>.ts`

**EstimaciÃ³n**: X horas

---

## ImplementaciÃ³n

### Picoro analiza:
- [ ] Ticket revisado
- [ ] Impacto en lÃ³gica de seÃ±ales identificado
- [ ] Plan aprobado

### Goku implementa:
- [ ] CÃ³digo implementado (TypeScript/React)
- [ ] Comentarios FIC en inglÃ©s/espaÃ±ol
- [ ] IntegraciÃ³n con broker verificada (si aplica)

### Vegeta optimiza:
- [ ] Latencia de feed de datos revisada (si aplica)
- [ ] Seguridad de credenciales de broker auditada (si aplica)

### Bulma valida:
- [ ] Tests unitarios creados/actualizados
- [ ] CÃ¡lculos de indicador validados vs. TradingView (si aplica)
- [ ] SeÃ±ales de trading verificadas con datos histÃ³ricos

---

## Criterios de AceptaciÃ³n

- [ ] Indicador/estrategia calculado correctamente
- [ ] SeÃ±al generada con nivel de confianza correcto
- [ ] Tests pasan (cobertura >80%)
- [ ] ValidaciÃ³n manual en paper trading (si aplica)

---

## Cierre

**Fecha Cierre**: YYYY-MM-DD
**Commit**: `tipo(scope): descripciÃ³n (#TKT-INVRFIC-###)`
**Ticket Externo Cerrado**: REQ-INV-XXXX âœ…
```

---

#### 6.2.5 Workflow de Desarrollo por Ticket

```mermaid
graph LR
    A[Crear Ticket Interno] --> B[Picoro Analiza]
    B --> C[Goku Implementa]
    C --> D[Vegeta Optimiza]
    D --> E[Bulma Valida]
    E --> F[Review]
    F --> G[Cerrar Ticket]
```

1. **Crear Ticket Interno**: Basado en diseÃ±o de Picoro o necesidad del trader
2. **Picoro Analiza**: Confirma plan tÃ©cnico, identifica impacto en seÃ±ales/estrategias
3. **Goku Implementa**: Escribe cÃ³digo TypeScript/React, integra APIs financieras
4. **Vegeta Optimiza**: Revisa latencia de datos de mercado, seguridad de API keys
5. **Bulma Valida**: Crea tests, valida cÃ¡lculos de indicadores, prueba seÃ±ales
6. **Review**: AprobaciÃ³n de cÃ³digo y lÃ³gica financiera
7. **Cerrar**: Marcar ticket como completado con evidencia

#### 6.2.6 Checklist por Ticket (FASE 3)

- [ ] Ticket definido con alcance claro
- [ ] Ticket externo referenciado (si aplica)
- [ ] Picoro analiza y define plan tÃ©cnico/financiero
- [ ] Skills necesarios confirmados o agregados
- [ ] Goku implementa y documenta (comentarios FIC obligatorios)
- [ ] Vegeta optimiza (latencia, seguridad, si aplica)
- [ ] Bulma crea tests y valida cÃ¡lculos financieros
- [ ] Evidencia de pruebas adjunta (incluyendo validaciÃ³n vs. TradingView si aplica)
- [ ] Ticket cerrado con aprobaciÃ³n
- [ ] Ticket externo cerrado (si aplica)

---

### 6.3 GestiÃ³n de Conocimiento

**CuÃ¡ndo crear una nota de conocimiento**:
- âœ… SoluciÃ³n a problema complejo de latencia en feeds de datos descubierta
- âœ… Regla de negocio o criterio de seÃ±al de trading importante documentada
- âœ… PatrÃ³n reutilizable de integraciÃ³n con broker identificado
- âœ… Comportamiento inesperado de API de broker documentado

**Proceso**:
1. Crear en `knowledge/local/` (interno) o `knowledge/remote/` (referencia externa)
2. Usar template `KNOWLEDGE_NOTE_TEMPLATE.md`
3. Vincular desde README o tickets relevantes
4. Tagear con keywords: `RSI`, `MACD`, `options`, `IBKR`, `signal`, etc.

---

## 7. Convenciones

### 7.1 Nomenclatura

| Elemento | Formato | Ejemplo |
|----------|---------|---------|
| Proyecto | `pwa_<nombre>_<autor>` | `pwa_inversions_team5` |
| API REST | `rest_api_<nombre>_<autor>` | `rest_api_inversions_team5` |
| Agente | `fic_<nombre>_agent` | `fic_goku_agent_dev1` |
| Skill | `<dominio>_<acciÃ³n>` | `broker_connector`, `signal_detector`, `options_analyzer` |
| Ticket | `TKT-INVRFIC-###` | `TKT-INVRFIC-001` |
| Knowledge | `<tipo>_<tema>.md` | `lesson_options_chain_latency.md`, `ref_ibkr_api.md` |

### 7.2 Archivos de ConfiguraciÃ³n

#### config.yaml (Proyecto - Nivel RaÃ­z)
```yaml
project:
  code: pwa_inversions_team5
  name: Investment Platform AI
  version: 1.0.0
  category: pwa
  description: Plataforma de inversiones con detecciÃ³n de seÃ±ales por IA,
               anÃ¡lisis tÃ©cnico y gestiÃ³n de estrategias de opciones

agents_involved:
  - fic_picoro_agent_orchestrator    # FASE 2.3-2.4
  - fic_goku_agent_dev1              # FASE 2.4-3
  - fic_vegeta_agent_dev2            # FASE 3
  - fic_bulma_agent_tester1          # FASE 3

tech_stack:
  frontend: React + TypeScript + Vite
  charting: TradingView Lightweight Charts
  state_management: Zustand
  styling: TailwindCSS (dark theme)
  broker_primary: Interactive Brokers (IBKR)
  broker_secondary: Alpaca (paper trading)
  market_data: Polygon.io / TradingView
  ai_analysis: Claude API (Anthropic)
  indicators_lib: technicalindicators (npm)

metadata:
  owner: Dr.FIC. Francisco Ibarra Carlos
  created: 2026-03-03
  last_updated: 2026-03-03
```

#### ai_work_flow/development/workflow_agents.yaml
```yaml
# Define tareas ESPECÃFICAS para agentes en el proyecto de inversiones
agents_tasks:
  picoro:
    - task_id: PICORO_001
      name: Analizar SPECIFICATION.md del proyecto de inversiones
      description: InvestigaciÃ³n profunda de APIs financieras, estrategias y arquitectura
      inputs: SPECIFICATION.md, knowledge/
      outputs: Arquitectura diseÃ±ada, config.yaml, lista de servicios/features

  goku:
    - task_id: GOKU_001
      name: Implementar broker_connector service (IBKR)
      description: ConexiÃ³n a Interactive Brokers TWS API
      inputs: config.yaml, knowledge/local/01_broker_api_research.md
      outputs: src/services/broker/ibkr.connector.ts

    - task_id: GOKU_002
      name: Implementar technical_indicators service
      description: RSI, MACD, Bollinger Bands, ATR sobre datos OHLCV
      inputs: config.yaml, knowledge/local/03_technical_indicators_patterns.md
      outputs: src/services/indicators/*.service.ts

    - task_id: GOKU_003
      name: Implementar signal_detector engine
      description: Motor de detecciÃ³n de seÃ±ales de compra/venta
      inputs: Servicios de indicadores, knowledge/local/04_options_strategies_decisions.md
      outputs: src/services/signals/signal_detector.service.ts

    - task_id: GOKU_004
      name: Implementar dashboard UI principal
      description: Vista principal con watchlist, seÃ±ales y grÃ¡ficas
      inputs: TradingView widgets, store global
      outputs: src/features/dashboard/

  vegeta:
    - task_id: VEGETA_001
      name: Optimizar latencia de market data feed
      description: Asegurar actualizaciones <100ms en seÃ±ales crÃ­ticas
      inputs: CÃ³digo final de Goku (servicios de datos)
      outputs: CÃ³digo optimizado con throttling/debouncing

    - task_id: VEGETA_002
      name: Auditar seguridad de API keys y credenciales de broker
      description: Verificar que ninguna credencial quede expuesta en cliente
      inputs: CÃ³digo completo del proyecto
      outputs: Reporte de seguridad + cÃ³digo corregido

  bulma:
    - task_id: BULMA_001
      name: Tests unitarios de indicadores tÃ©cnicos
      description: Validar RSI, MACD, BB contra datos de referencia de TradingView
      inputs: src/services/indicators/*.service.ts
      outputs: tests/indicators/*.test.ts

    - task_id: BULMA_002
      name: Tests del motor de seÃ±ales
      description: Validar precisiÃ³n de seÃ±ales con datos histÃ³ricos conocidos
      inputs: src/services/signals/signal_detector.service.ts
      outputs: tests/signals/*.test.ts

execution_order: picoro â†’ goku â†’ (vegeta âˆ¥ bulma) â†’ final_review
```

#### features/`<feature>`/config.yaml
```yaml
feature:
  name: market_scanner
  description: EscÃ¡ner de mercado en tiempo real con detecciÃ³n de seÃ±ales

services_required:
  - broker_connector
  - market_data_feed
  - technical_indicators
  - signal_detector
  - ai_market_analyzer

workflow:
  - step1: broker_connector.subscribeMarketData(symbols)
  - step2: market_data_feed.streamOHLCV()
  - step3: technical_indicators.calculate(RSI, MACD, BB)
  - step4: signal_detector.analyze(indicators)
  - step5: ai_market_analyzer.confirm(signal)
  - step6: alerts.notify(confirmedSignal)
```

#### services/`<service>`/config.yaml
```yaml
service:
  name: technical_indicators
  version: 1.0.0
  description: Servicio de cÃ¡lculo de indicadores tÃ©cnicos en tiempo real

dependencies:
  - technicalindicators@3.x
  - ta-lib (opcional, para cÃ¡lculos avanzados)

inputs:
  - symbol: string           # Ej: "SPY", "AAPL"
  - period: string           # Ej: "1m", "5m", "1h", "1d"
  - ohlcv: OHLCV[]           # Array de velas histÃ³ricas

outputs:
  - rsi: number              # RSI(14) actual
  - macd: MACDResult         # MACD line, signal line, histogram
  - bollingerBands: BBResult # Upper, middle, lower bands
  - atr: number              # ATR(14) actual

error_handling:
  - insufficient_data: "MÃ­nimo 30 velas requeridas para cÃ¡lculo confiable"
  - stale_data_threshold_seconds: 60
  - fail_mode: return_null_with_warning
```

---

## 8. IntegraciÃ³n entre Componentes

### 8.1 Usar Servicios en un Feature

```typescript
// En src/features/market-scanner/hooks/useMarketScanner.ts

// FIC: Import trading services for market analysis (EN)
// FIC: Importar servicios de trading para anÃ¡lisis de mercado (ES)
import { useBrokerConnection } from "@/services/broker/useBrokerConnection";
import { useTechnicalIndicators } from "@/services/indicators/useTechnicalIndicators";
import { useSignalDetector } from "@/services/signals/useSignalDetector";

export const useMarketScanner = (symbols: string[]) => {
  const { subscribeMarketData } = useBrokerConnection();
  const { calculateIndicators } = useTechnicalIndicators();
  const { detectSignals } = useSignalDetector();

  // FIC: Core scanning logic - combines data feed + indicators + signals (EN)
  // FIC: LÃ³gica principal del scanner - combina feed + indicadores + seÃ±ales (ES)
  const scanMarket = async () => {
    const data = await subscribeMarketData(symbols);
    const indicators = calculateIndicators(data);
    return detectSignals(indicators);
  };

  return { scanMarket };
};
```

### 8.2 Referenciar Knowledge Global

```markdown
<!-- En un README de feature del proyecto de inversiones -->

## Recursos de Conocimiento

### Knowledge Global
- [Indicadores TÃ©cnicos](../../ai_global/knowledge/local/technical_indicators_guide.md)
- [Brokers Certificados](../../ai_global/knowledge/remote/brokers_reference.md)

### Knowledge del Proyecto
- [Decisiones de Broker](knowledge/local/01_broker_api_research.md)
- [Estrategias de Opciones](knowledge/local/04_options_strategies_decisions.md)
- [Lecciones Aprendidas](knowledge/local/lesson_options_chain_latency.md)
```

---

## 9. Checklist: Empezar con la MetodologÃ­a

âš ï¸ **NOTA**: Si es tu primera vez usando esta metodologÃ­a, completa primero **FASE 0** (SecciÃ³n 4) y **FASE 1** (SecciÃ³n 5) antes de iniciar un proyecto.

- [ ] 1. Leer este documento completo
- [ ] 2. Revisar estructura de `ai_skill_dev1/`
- [ ] 3. Explorar templates en `ai_global/templates/`
- [ ] 4. Revisar proyecto ejemplo de referencia en `projects/pwa/`
- [ ] 5. Identificar quÃ© skills globales necesitas (broker, indicators, signals)
- [ ] 6. Crear estructura de `pwa_inversions_team5/`
- [ ] 7. Configurar `config.yaml` del proyecto con tech stack de inversiones
- [ ] 8. Generar knowledge base inicial (brokers, indicadores, estrategias)
- [ ] 9. Crear ticket inicial `TKT-INVRFIC-001`
- [ ] 10. Comenzar desarrollo por mÃ³dulo (broker â†’ data â†’ indicadores â†’ seÃ±ales â†’ UI)
- [ ] 11. Documentar aprendizajes de APIs financieras en `knowledge/local/`

---

## 10. Preguntas Frecuentes

**P: Â¿CuÃ¡ndo crear un skill global vs. local?**  
R: Global si es reutilizable en mÃºltiples proyectos (ej. `broker_connector` podrÃ­a usarse en otro proyecto de trading). Local si es muy especÃ­fico de `pwa_inversions_team5` (ej. una estrategia de seÃ±ales propia).

**P: Â¿Debo crear siempre agentes tÃ©cnicos?**  
R: No es obligatorio. Siempre debes mantener agentes documentados (roles) en `ai_global/agents/*.md`. Los agentes tÃ©cnicos se crean solo si la decisiÃ³n formal de la SecciÃ³n 5.7.2 es "sÃ­".

**P: Â¿En quÃ© momento se solicita autorizaciÃ³n para crear agentes tÃ©cnicos?**  
R: Al cierre de FASE 1, despuÃ©s del checklist final (SecciÃ³n 5.8) y antes de iniciar FASE 2. Ese es el punto de control recomendado para aprobar o rechazar la implementaciÃ³n tÃ©cnica.

**P: Â¿QuÃ© va en knowledge/remote vs local?**  
R: Remote son referencias externas (docs de IBKR, TradingView, Polygon.io). Local es conocimiento generado internamente (investigaciÃ³n de decisiones, lecciones aprendidas, patrones de implementaciÃ³n).

**P: Â¿CÃ³mo versiono mis skills?**  
R: Usa SemVer en `config.yaml`. Major.Minor.Patch (ej. 2.1.3).

**P: Â¿CÃ³mo valido que un indicador tÃ©cnico estÃ¡ bien calculado?**  
R: Usa TradingView Pine Script como referencia. Ejecuta el mismo cÃ¡lculo sobre los mismos datos histÃ³ricos y compara resultados. Documenta la validaciÃ³n en el ticket de cierre.

**P: Â¿CÃ³mo manejo las API keys de brokers de forma segura?**  
R: Nunca en cÃ³digo fuente ni en archivos de conocimiento. Usar variables de entorno (`.env`) y documentar en `knowledge/local/` solo la estructura esperada (sin valores reales). Vegeta audita esto en cada mÃ³dulo de broker.

---

## 11. Recursos del Proyecto de Inversiones

### DocumentaciÃ³n de Referencia (Remote Knowledge)
- **IBKR TWS API**: https://interactivebrokers.github.io/tws-api/
- **Alpaca API**: https://docs.alpaca.markets/
- **TradingView Lightweight Charts**: https://tradingview.github.io/lightweight-charts/
- **Polygon.io Market Data**: https://polygon.io/docs/
- **technicalindicators (npm)**: https://github.com/anandanand84/technicalindicators

### Herramientas de ValidaciÃ³n
- **TradingView**: ValidaciÃ³n visual de indicadores y seÃ±ales
- **Interactive Brokers Paper Account**: Testing de Ã³rdenes sin capital real
- **Alpaca Paper Trading**: Backtesting y testing de seÃ±ales

### Templates del Proyecto
- **Templates**: `ai_skill_dev1/ai_global/templates/`
- **Skills Globales**: `ai_skill_dev1/ai_global/skills/`
- **Knowledge Global**: `ai_skill_dev1/ai_global/knowledge/`

---

**Ãšltima actualizaciÃ³n**: 2026-03-11 (v2.2 â€” Multi-base de datos, gates y separaciÃ³n PWA vs REST API)  
**Status**: âœ… MetodologÃ­a reorganizada con soporte multi-base, gates obligatorios y separaciÃ³n formal de persistencia  
**Cambios v2.2**:
- âœ… Soporte explÃ­cito para una o mÃ¡s bases de datos por proyecto
- âœ… `DATABASE SELECTION GATE` agregado antes de revisar la SPEC
- âœ… `DATABASE MODEL GATE` agregado antes del diseÃ±o de persistencia real
- âœ… SeparaciÃ³n formal entre contrato de datos en PWA y persistencia real en `rest_api_inversions_team5`
- âœ… Ruta oficial para backend REST confirmada como `projects/api/rest_api_inversions_team5/`

**Cambios v2.1**:
- âœ… SecciÃ³n 5.7 agregada: implementaciÃ³n tÃ©cnica opcional de agentes por entorno
- âœ… DefiniciÃ³n de arquitectura en dos capas: metodolÃ³gica (obligatoria) y tÃ©cnica (opcional)
- âœ… Punto formal de autorizaciÃ³n incorporado al cierre de FASE 1
- âœ… Checklist final actualizado (SecciÃ³n 5.8) con decisiÃ³n/autorizaciÃ³n tÃ©cnica
- âœ… FAQ ampliada con cuÃ¡ndo y cÃ³mo autorizar creaciÃ³n de agentes tÃ©cnicos

**Cambios v2.0**:
- âœ… **FASE 0**: ConfiguraciÃ³n Inicial del Sistema (SecciÃ³n 4) â€” Setup Ãºnico de `ai_global/`
- âœ… **FASE 1**: Agentes y Skills Globales (SecciÃ³n 5) â€” ValidaciÃ³n y activaciÃ³n del sistema
- âœ… ReorganizaciÃ³n de secciones (ex-SecciÃ³n 4 â†’ 6, ex-SecciÃ³n 5 â†’ 7, etc.)
- âœ… Flujo de trabajo clarificado: Setup Ãºnico (FASE 0-1) vs. Por proyecto (FASE 2-3)
- âœ… Checklist de SecciÃ³n 9 actualizado con referencia a FASE 0 y FASE 1

**Cambios v1.0 (respecto a versiÃ³n RPA)**:
- âœ… Estructura de proyecto adaptada a features de trading (scanner, signals, options, backtesting)
- âœ… Ejemplos de agentes orientados a APIs de brokers e indicadores financieros
- âœ… Skills de Goku extendidos con `tradingview_widgets_integrator` y `broker_api_integrator`
- âœ… Knowledge base con referencias a IBKR, TradingView, Polygon.io, etc.
- âœ… Tickets ejemplificados con lÃ³gica de inversiones (indicadores, seÃ±ales, opciones)
- âœ… config.yaml con tech stack de la plataforma de inversiones
- âœ… workflow_agents.yaml con tareas especÃ­ficas de trading
- âœ… ConvenciÃ³n de nomenclatura `TKT-INVRFIC-###`
- âœ… FAQ ampliada con preguntas especÃ­ficas de APIs financieras y seguridad de credenciales

**Referencias actualizadas**:
- Agentes: [ai_global/agents/README.md](ai_global/agents/README.md)
- Nomenclatura: [_team5_ai_skill_dev_teaching/NAMING_STANDARDS.md](_team5_ai_skill_dev_teaching/NAMING_STANDARDS.md)
- GuÃ­a rÃ¡pida: [_team5_ai_skill_dev_teaching/QUICK_START_GUIDE.md](_team5_ai_skill_dev_teaching/QUICK_START_GUIDE.md)

