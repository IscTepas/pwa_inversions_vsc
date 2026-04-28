# 📚 Knowledge - Base de Conocimiento Global

Sistema híbrido de gestión de conocimiento que combina investigación local e referencias remotas.

---

## 📋 Estado Actual

| Aspecto | Estado |
|---------|--------|
| **Investigación Local** | 🚧 Estructura lista para usar |
| **Referencias Externas** | 🚧 Estructura lista para usar |
| **Fase del Sistema** | ✅ FASE 0/1 completada |

---

## 🏗️ Estructura

```
knowledge/
├── README.md (este archivo)
├── local/
│   └── README.md (Investigaciones internas)
└── remote/
    └── README.md (Referencias externas)
```

---

## 🔍 Knowledge Local (`local/`)

**Propósito**: Investigación profunda realizada por Picoro ANTES de implementación.

**Cuándo se genera**: FASE 2.3 (Investigación)

**Tipos de contenido**:
- 📊 Investigación técnica de APIs y frameworks
- 📈 Patrones de implementación
- 💡 Decisiones arquitectónicas justificadas
- 📝 Lecciones aprendidas durante desarrollo
- 🧪 Comparativas de tecnologías

**Convención de nombres**:
```
01_<topic>_research.md        # Investigación inicial
02_<topic>_patterns.md        # Patrones y mejores prácticas
03_<topic>_decisions.md       # Decisiones técnicas
04_<topic>_strategy.md        # Estrategia de implementación
05_<topic>_approach.md        # Enfoque técnico
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

## 🌐 Knowledge Remote (`remote/`)

**Propósito**: Referencias externas a documentación oficial, APIs, tutoriales, y herramientas de IA.

**Cuándo se genera**: FASE 2.3 (paralelo a local)

**Tipos de referencias**:
- 📘 Documentación oficial de APIs
- 📄 Código interno referencial
- 🧠 NotebookLM (análisis profundo)
- 📊 Reportes y recursos educativos
- 🔗 URLs a documentación online

**Convención de nombres**:
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

## 🔄 Flujo de Generación

```
FASE 2.3: Picoro analiza SPEC
    ↓
Picoro genera knowledge/local/ (investigación profunda)
    ↓
Picoro genera knowledge/remote/ (referencias externas)
    ↓
Picoro crea tickets informados por knowledge
    ↓
FASE 3: Goku/Vegeta/Bulma/Krillin usan knowledge mientras implementan
    ↓
Si se descubren nuevos patrones → lesson_*.md en knowledge/local/
```

---

## 📊 Beneficios

- ✅ Evita re-investigación durante desarrollo
- ✅ Decisiones técnicas pre-justificadas
- ✅ Tickets con contexto completo
- ✅ Onboarding rápido de nuevos desarrolladores
- ✅ Trazabilidad de decisiones arquitectónicas
- ✅ Lecciones aprendidas documentadas

---

## 📚 Referencias

- [Knowledge Local - Template](./local/README.md)
- [Knowledge Remote - Template](./remote/README.md)
- [Ticket con Knowledge Relacionado](../tickets/README.md)
- [Metodología Completa](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
