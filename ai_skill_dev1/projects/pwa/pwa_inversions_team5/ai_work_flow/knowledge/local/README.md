# 🧠 README - Conocimiento Local

> Investigación y análisis generado por MEMO (Agente de investigación)

---

## 📖 Propósito

Este directorio contiene la investigación realizada por **MEMO** durante **FASE 2.3 - Investigación**.

La investigación es el **fundamento de conocimiento** que sustenta toda la implementación posterior.

---

## 📚 Documentos de Investigación (FASE 2.3)

Se generarán en FASE 2.3 cuando SPECIFICATION.md esté completado:

### 1️⃣ `01_broker_api_research.md`
**Tema**: Integración con brokers de trading

**Contenido esperado**:
- Comparativa: Interactive Brokers vs Alpaca vs otros
- Análisis de APIs (autenticación, endpoints, rate limits)
- Flujo de obtención de datos OHLCV
- Latencia y confiabilidad
- Recomendaciones de implementación

**Generador**: 🧠 MEMO (knowledge_synthesizer)
**Dependencias**: SPECIFICATION.md completado
**Duración estimada**: 2-3 horas

---

### 2️⃣ `02_technical_indicators_research.md`
**Tema**: Indicadores técnicos de trading

**Contenido esperado**:
- Definición matemática: RSI(14), MACD(12,26,9), Bollinger Bands(20,2)
- Algoritmos e implementaciones
- Librerías disponibles (ta-lib, CCI-Calculations, etc.)
- Validación vs TradingView (precisión 99%+)
- Cálculo de señales basadas en indicadores
- Ejemplos prácticos con datos reales

**Generador**: 🧠 MEMO (knowledge_synthesizer)
**Dependencias**: SPECIFICATION.md completado
**Duración estimada**: 2 horas

---

### 3️⃣ `03_options_strategies_research.md`
**Tema**: Estrategias de opciones financieras

**Contenido esperado**:
- Iron Condor (estructura, entrada, salida, gestión de riesgo)
- Straddle (cuándo usarla, limitaciones)
- Strangle (diferencias con Straddle)
- Otras estrategias opcionales
- Análisis de riesgo/recompensa
- Reglas de entrada y salida
- Casos de uso del proyecto

**Generador**: 🧠 MEMO (knowledge_synthesizer, architecture_designer)
**Dependencias**: SPECIFICATION.md completado
**Duración estimada**: 2 horas

---

### 4️⃣ `04_market_data_research.md`
**Tema**: Fuentes de datos de mercado en tiempo real

**Contenido esperado**:
- Feed de TradingView (disponibilidad, latencia, costos)
- Polygon.io (cobertura, precisión, rate limits)
- Datos diretos de broker (IBKR, Alpaca)
- Fuentes alternativas
- Latencia comparativa
- Confiabilidad y uptime
- Recomendación para el proyecto

**Generador**: 🧠 MEMO (knowledge_synthesizer)
**Dependencias**: SPECIFICATION.md completado
**Duración estimada**: 1-2 horas

---

### 5️⃣ `05_signal_detection_strategy.md`
**Tema**: Estrategia de detección de señales

**Contenido esperado**:
- Lógica de scoring de señales
- Pesos de cada indicador
- Umbrales de confianza (mínimo 75%)
- Validación de riesgo/recompensa
- Consolidación de señales (evitar spam)
- Gestión de falsos positivos
- Algoritmo pseudocódigo
- Ejemplos de ejecución

**Generador**: 🧠 MEMO (knowledge_synthesizer, architecture_designer)
**Dependencias**: 02, 03, 04 completados
**Duración estimada**: 2-3 horas

---

## 🔗 Relación con Otros Documentos

```
SPECIFICATION.md (usuario completa)
    ↓
FASE 2.3 investigación MEMO
    ├─ 01_broker_api_research.md → Usado por BERNA (broker_connector)
    ├─ 02_technical_indicators_research.md → Usado por BERNA (indicadores)
    ├─ 03_options_strategies_research.md → Usado por BANDA (modelos)
    ├─ 04_market_data_research.md → Usado por BERNA (data feed)
    └─ 05_signal_detection_strategy.md → Usado por BERNA + BANDA (lógica)
    ↓
FASE 2.4 diseño
    └─ Genera tickets TKT-INVT5-### basados en conocimiento
    ↓
FASE 3 implementación
    └─ BERNA/BANDA usan conocimiento para codificación
```

---

## 📊 Estado de Documentos

| Documento | Estado | Generador | Fase | Dependencia |
|-----------|--------|-----------|------|------------|
| 01_broker_api_research.md | ⏳ Pendiente | MEMO | 2.3 | SPEC ✅ |
| 02_technical_indicators_research.md | ⏳ Pendiente | MEMO | 2.3 | SPEC ✅ |
| 03_options_strategies_research.md | ⏳ Pendiente | MEMO | 2.3 | SPEC ✅ |
| 04_market_data_research.md | ⏳ Pendiente | MEMO | 2.3 | SPEC ✅ |
| 05_signal_detection_strategy.md | ⏳ Pendiente | MEMO | 2.3 | 02+03+04 |

---

## 📞 Próximo Paso

**Acción requerida**:
1. Usuario completa SPECIFICATION.md
2. MEMO ejecuta FASE 2.3 investigación
3. Estos 5 documentos se generan

**Cuando esté listo**: Los documentos se usarán en FASE 3 para implementación.
