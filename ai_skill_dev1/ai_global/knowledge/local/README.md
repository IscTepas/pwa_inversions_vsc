# ðŸ“š Knowledge Local

Investigaciones internas generadas por Picoro.

---

## ðŸŽ¯ PropÃ³sito

InvestigaciÃ³n profunda realizada ANTES de implementaciÃ³n para informar decisiones tÃ©cnicas.

---

## ðŸ“‹ Contenido Esperado

### Investigaciones por Proyecto de Inversiones

Cuando Picoro analiza el proyecto `pwa_inversions_team5`, genera:

```
01_broker_api_research.md
   - InvestigaciÃ³n de IBKR vs Alpaca
   - APIs disponibles, mÃ©todos principales
   - Pros/contras de cada broker
   
02_charting_patterns.md
   - Patrones de renderizado de grÃ¡ficas
   - TradingView Lightweight Charts vs Plotly vs Recharts
   - RecomendaciÃ³n: TradingView
   
03_technical_indicators_decisions.md
   - InvestigaciÃ³n de librerÃ­as: TA-Lib, Pandas, NumPy
   - ImplementaciÃ³n de RSI, MACD, Bollinger Bands
   - DecisiÃ³n: TA-Lib + NumPy para performance
   
04_options_strategies_approach.md
   - Estrategias de opciones: Iron Condor, Straddle, Strangle
   - CÃ¡lculo de Greeks: delta, gamma, theta, vega
   - Riesgo y gestiÃ³n de posiciones
   
05_ai_analysis_strategy.md
   - CuÃ¡ndo usar Claude API para anÃ¡lisis
   - Contexto a pasar a Claude
   - Indicadores de confianza

lesson_market_data_latency.md
   - Durante TKT-INVRFIC-007: latencia en updates
   - SoluciÃ³n: throttling a mÃ¡x 2 updates/sec
   - Aplicable a todos los streams
```

---

## ðŸ“ Estructura de Archivo

**MÃ­nimo requerido**:
- [ ] TÃ­tulo y fecha
- [ ] Contexto/justificaciÃ³n
- [ ] Opciones investigadas
- [ ] Pros y contras
- [ ] DecisiÃ³n y razÃ³n
- [ ] AplicaciÃ³n en proyecto

**Formato tÃ­pico**:
```markdown
# 01_broker_api_research.md

**Fecha**: 2026-03-03  
**Investigador**: Picoro  
**Proyecto**: pwa_inversions_team5

## Contexto
Necesitamos integrar un broker para trading automÃ¡tico...

## Opciones Investigadas

### OpciÃ³n 1: Interactive Brokers (IBKR)
- Pros: âœ… API completa, datos reales, confiable
- Contras: âŒ TWS requiere software local

### OpciÃ³n 2: Alpaca
- Pros: âœ… API REST moderna, sin software local
- Contras: âŒ Menos funcionalidades que IBKR

## DecisiÃ³n
Usar IBKR como primario + Alpaca para paper trading

## AplicaciÃ³n
- Ubicar cÃ³digo en: src/services/broker/IBKRConnector.ts
- Tarea: TKT-INVRFIC-001
```

---

## ðŸ”— ConvenciÃ³n de Referencias

Los archivos de knowledge/local/ se referencian en:
- Tickets: `ðŸ“„ knowledge: knowledge/local/03_technical_indicators_decisions.md`
- Especificaciones: Referencias en arquitectura
- CÃ³digo: Comentarios `FIC` pueden citar lecciones

---

## âœ… Checklist de Contenido

Cuando Picoro completa FASE 2.3, debe tener:

- [ ] 5+ archivos de investigaciÃ³n (01_ a 05_)
- [ ] Cada archivo con contexto â†’ opciones â†’ decisiÃ³n
- [ ] AplicaciÃ³n clara a componentes/servicios del proyecto
- [ ] Ninguna investigaciÃ³n debe quedar en "borrador"
- [ ] Trazabilidad a SPECIFICATION.md

