# 🌐 README - Referencias Remotas

> Enlaces y referencias externas a documentación, APIs y recursos

---

## 📖 Propósito

Este directorio contiene **referencias remotas** (links a documentación externa) generadas por MEMO durante FASE 2.3.

Estos enlaces son consulta rápida para:
- Documentación oficial de APIs
- Librerías y frameworks
- Tutoriales y recursos
- Feeds de datos
- Cursos y referencias

---

## 📚 Documentos de Referencias (FASE 2.3)

Se generarán en FASE 2.3:

### 1️⃣ `01_broker_api_references.md`
**Tema**: Documentación oficial de brokers

**Contenido esperado**:
- Interactive Brokers (IBKR)
  - API Docs: https://www.interactivebrokers.com/en/software/api/
  - Python Client: https://github.com/InteractiveBrokers/twsapi
  - Rate limits, autenticación, endpoints
- Alpaca
  - API Docs: https://alpaca.markets/docs/
  - Python SDK: https://github.com/alpacahq/alpaca-trade-api-python
  - Rate limits, paper trading

**Generador**: 🧠 MEMO
**Fase**: 2.3

---

### 2️⃣ `02_technical_indicators_libraries.md`
**Tema**: Librerías para cálculo de indicadores

**Contenido esperado**:
- TA-Lib (Python/C++)
  - GitHub: https://github.com/mrjbq7/ta-lib
  - Documentación: https://ta-lib.org/
  - Soporte: RSI, MACD, Bollinger Bands, etc.
  - Precisión: ✅ Validado vs TradingView
- Tech-Indicators (NPM)
  - NPM: https://www.npmjs.com/package/tech-indicators
  - GitHub: https://github.com/anandanand84/technicalindicators
  - Para JavaScript/TypeScript
- Pandas TA
  - GitHub: https://github.com/twopirllc/pandas-ta
  - Alternativa a TA-Lib

**Generador**: 🧠 MEMO
**Fase**: 2.3

---

### 3️⃣ `03_market_data_sources.md`
**Tema**: Fuentes de datos de mercado en tiempo real

**Contenido esperado**:
- TradingView
  - Charting Library: https://www.tradingview.com/pine-script-reference/
  - WebSocket: https://www.tradingview.com/charting-library/
- Polygon.io
  - Docs: https://polygon.io/docs/stocks
  - API: Real-time y histórico
  - Rate limits, pricing
- Yahoo Finance
  - Datos históricos
  - API no oficial pero documentada
- Alpha Vantage
  - Stocks, forex, crypto data
  - Free + enterprise tiers

**Generador**: 🧠 MEMO
**Fase**: 2.3

---

### 4️⃣ `04_trading_resources.md`
**Tema**: Recursos educativos y documentación de trading

**Contenido esperado**:
- Investopedia (definiciones)
- TradingView Community (estrategias)
- European market regulations
  - ESMA (European Securities and Markets Authority)
  - MiFID II compliance
- Books recomendados
- Cursos online

**Generador**: 🧠 MEMO
**Fase**: 2.3

---

### 5️⃣ `05_framework_documentation.md`
**Tema**: Documentación de frameworks usados en el proyecto

**Contenido esperado**:
- React 18: https://react.dev/
- TypeScript: https://www.typescriptlang.org/
- Vite: https://vitejs.dev/
- Express.js: https://expressjs.com/
- Supabase: https://supabase.com/docs
- MongoDB: https://docs.mongodb.com/
- Zustand: https://github.com/pmndrs/zustand
- TradingView Lightweight Charts: https://www.npmjs.com/package/lightweight-charts

**Generador**: 🧠 MEMO
**Fase**: 2.3

---

## 🔗 Estructura de Archivos

```
knowledge/remote/
├─ 01_broker_api_references.md
├─ 02_technical_indicators_libraries.md
├─ 03_market_data_sources.md
├─ 04_trading_resources.md
├─ 05_framework_documentation.md
└─ README.md (este archivo)
```

---

## 📊 Estado de Documentos

| Documento | Estado | Fase |
|-----------|--------|------|
| 01_broker_api_references.md | ⏳ Pendiente | 2.3 |
| 02_technical_indicators_libraries.md | ⏳ Pendiente | 2.3 |
| 03_market_data_sources.md | ⏳ Pendiente | 2.3 |
| 04_trading_resources.md | ⏳ Pendiente | 2.3 |
| 05_framework_documentation.md | ⏳ Pendiente | 2.3 |

---

## 📞 Consejo de Uso

**Durante FASE 3 (Implementación)**:
- BERNA consulta estos links para implementar servicios
- MEPU usa estos links para validar precisión
- BANDA consulta para migraciones y API design

**Durante troubleshooting**:
- Usa estos links como referencia rápida
- Documentación oficial > Tutoriales
- Valida en comunidades oficiales si tienes dudas

---

## 📝 Actualización

Estos documentos se actualizarán si hay cambios tecnológicos o deprecaciones en librerías.

**Próximo Paso**: MEMO genera estos 5 documentos en FASE 2.3.
