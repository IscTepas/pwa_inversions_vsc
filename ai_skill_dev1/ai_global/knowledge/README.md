# ðŸ“š Knowledge - Base de Conocimiento Global

Sistema hÃ­brido de gestiÃ³n de conocimiento que combina investigaciÃ³n local e referencias remotas.

---

## ðŸ“‹ Estado Actual

| Aspecto | Estado |
|---------|--------|
| **InvestigaciÃ³n Local** | ðŸš§ Estructura lista para usar |
| **Referencias Externas** | ðŸš§ Estructura lista para usar |
| **Fase del Sistema** | âœ… FASE 0/1 completada |

---

## ðŸ—ï¸ Estructura

```
knowledge/
â”œâ”€â”€ README.md (este archivo)
â”œâ”€â”€ local/
â”‚   â””â”€â”€ README.md (Investigaciones internas)
â””â”€â”€ remote/
    â””â”€â”€ README.md (Referencias externas)
```

---

## ðŸ” Knowledge Local (`local/`)

**PropÃ³sito**: InvestigaciÃ³n profunda realizada por Picoro ANTES de implementaciÃ³n.

**CuÃ¡ndo se genera**: FASE 2.3 (InvestigaciÃ³n)

**Tipos de contenido**:
- ðŸ“Š InvestigaciÃ³n tÃ©cnica de APIs y frameworks
- ðŸ“ˆ Patrones de implementaciÃ³n
- ðŸ’¡ Decisiones arquitectÃ³nicas justificadas
- ðŸ“ Lecciones aprendidas durante desarrollo
- ðŸ§ª Comparativas de tecnologÃ­as

**ConvenciÃ³n de nombres**:
```
01_<topic>_research.md        # InvestigaciÃ³n inicial
02_<topic>_patterns.md        # Patrones y mejores prÃ¡cticas
03_<topic>_decisions.md       # Decisiones tÃ©cnicas
04_<topic>_strategy.md        # Estrategia de implementaciÃ³n
05_<topic>_approach.md        # Enfoque tÃ©cnico
lesson_<description>.md       # Lecciones aprendidas (durante FASE 3)
```

**Ejemplo - Proyecto de Inversiones**:
```
01_broker_api_research.md
02_charting_patterns.md
03_technical_indicators_decisions.md
04_options_strategies_approach.md
lesson_market_data_latency.md
```

---

## ðŸŒ Knowledge Remote (`remote/`)

**PropÃ³sito**: Referencias externas a documentaciÃ³n oficial, APIs, tutoriales, y herramientas de IA.

**CuÃ¡ndo se genera**: FASE 2.3 (paralelo a local)

**Tipos de referencias**:
- ðŸ“˜ DocumentaciÃ³n oficial de APIs
- ðŸ“„ CÃ³digo interno referencial
- ðŸ§  NotebookLM (anÃ¡lisis profundo)
- ðŸ“Š Reportes y recursos educativos
- ðŸ”— URLs a documentaciÃ³n online

**ConvenciÃ³n de nombres**:
```
<fuente>_<categoria>_reference.md
<api_name>_documentation.md
<tool>_setup_guide.md
notebooklm_<tema>.md
```

**Ejemplo - Proyecto de Inversiones**:
```
ibkr_api_reference.md
alpaca_api_reference.md
tradingview_widgets_reference.md
polygon_io_market_data.md
talib_indicators_reference.md
notebooklm_trading_strategies.md
```

---

## ðŸ”„ Flujo de GeneraciÃ³n

```
FASE 2.3: Picoro analiza SPEC
    â†“
Picoro genera knowledge/local/ (investigaciÃ³n profunda)
    â†“
Picoro genera knowledge/remote/ (referencias externas)
    â†“
Picoro crea tickets informados por knowledge
    â†“
FASE 3: Goku/Vegeta/Bulma/Krillin usan knowledge mientras implementan
    â†“
Si se descubren nuevos patrones â†’ lesson_*.md en knowledge/local/
```

---

## ðŸ“Š Beneficios

- âœ… Evita re-investigaciÃ³n durante desarrollo
- âœ… Decisiones tÃ©cnicas pre-justificadas
- âœ… Tickets con contexto completo
- âœ… Onboarding rÃ¡pido de nuevos desarrolladores
- âœ… Trazabilidad de decisiones arquitectÃ³nicas
- âœ… Lecciones aprendidas documentadas

---

## ðŸ“š Referencias

- [Knowledge Local - Template](./local/README.md)
- [Knowledge Remote - Template](./remote/README.md)
- [Ticket con Knowledge Relacionado](../tickets/README.md)
- [MetodologÃ­a Completa](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)

