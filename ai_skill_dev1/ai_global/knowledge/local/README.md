# 📚 Knowledge Local

Investigaciones internas generadas por Picoro.

---

## 🎯 Propósito

Investigación profunda realizada ANTES de implementación para informar decisiones técnicas.

---

## 📋 Contenido Esperado

### Investigaciones por Proyecto de Inversiones

Cuando Picoro analiza el proyecto `pwa_inversions_drfic`, genera:

```
01_broker_api_research.md
   - Investigación de IBKR vs Alpaca
   - APIs disponibles, métodos principales
   - Pros/contras de cada broker
   
02_charting_patterns.md
   - Patrones de renderizado de gráficas
   - TradingView Lightweight Charts vs Plotly vs Recharts
   - Recomendación: TradingView
   
03_technical_indicators_decisions.md
   - Investigación de librerías: TA-Lib, Pandas, NumPy
   - Implementación de RSI, MACD, Bollinger Bands
   - Decisión: TA-Lib + NumPy para performance
   
04_options_strategies_approach.md
   - Estrategias de opciones: Iron Condor, Straddle, Strangle
   - Cálculo de Greeks: delta, gamma, theta, vega
   - Riesgo y gestión de posiciones
   
05_ai_analysis_strategy.md
   - Cuándo usar Claude API para análisis
   - Contexto a pasar a Claude
   - Indicadores de confianza

lesson_market_data_latency.md
   - Durante TKT-INVRFIC-007: latencia en updates
   - Solución: throttling a máx 2 updates/sec
   - Aplicable a todos los streams
```

---

## 📝 Estructura de Archivo

**Mínimo requerido**:
- [ ] Título y fecha
- [ ] Contexto/justificación
- [ ] Opciones investigadas
- [ ] Pros y contras
- [ ] Decisión y razón
- [ ] Aplicación en proyecto

**Formato típico**:
```markdown
# 01_broker_api_research.md

**Fecha**: 2026-03-03  
**Investigador**: Picoro  
**Proyecto**: pwa_inversions_drfic

## Contexto
Necesitamos integrar un broker para trading automático...

## Opciones Investigadas

### Opción 1: Interactive Brokers (IBKR)
- Pros: ✅ API completa, datos reales, confiable
- Contras: ❌ TWS requiere software local

### Opción 2: Alpaca
- Pros: ✅ API REST moderna, sin software local
- Contras: ❌ Menos funcionalidades que IBKR

## Decisión
Usar IBKR como primario + Alpaca para paper trading

## Aplicación
- Ubicar código en: src/services/broker/IBKRConnector.ts
- Tarea: TKT-INVRFIC-001
```

---

## 🔗 Convención de Referencias

Los archivos de knowledge/local/ se referencian en:
- Tickets: `📄 knowledge: knowledge/local/03_technical_indicators_decisions.md`
- Especificaciones: Referencias en arquitectura
- Código: Comentarios `FIC` pueden citar lecciones

---

## ✅ Checklist de Contenido

Cuando Picoro completa FASE 2.3, debe tener:

- [ ] 5+ archivos de investigación (01_ a 05_)
- [ ] Cada archivo con contexto → opciones → decisión
- [ ] Aplicación clara a componentes/servicios del proyecto
- [ ] Ninguna investigación debe quedar en "borrador"
- [ ] Trazabilidad a SPECIFICATION.md
