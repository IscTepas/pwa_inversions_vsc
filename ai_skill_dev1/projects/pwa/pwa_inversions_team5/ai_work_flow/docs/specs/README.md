# 📚 README - Documentación y Especificaciones

> Documentación técnica, especificaciones y requerimientos del proyecto

---

## 📖 Propósito

Este directorio contiene:
- **SPECIFICATION.md**: Especificación técnica completa del proyecto (TEMPLATE)
- **Documentación técnica** generada por MEMO
- **Diagrama de arquitectura**

---

## 📋 Especificación del Proyecto

**Archivo**: [SPECIFICATION.md](SPECIFICATION.md)

**Estado**: 🟡 EN ESPECIFICACIÓN

**Estructura**:
1. Visión General
2. Entrada (Input + Parámetros)
3. Proceso (Flujos de negocio detallados)
4. Validaciones
5. Salida (Output + Notificaciones)
6. Requisitos Técnicos
7. Casos de uso detallados
8. Criterios de aceptación
9. Arquitectura de componentes
10. Skills necesarios
11. Decisiones técnicas pendientes
12. Riesgos y mitigación
13. Plan de implementación

**Completación**: 
- [ ] Usuario completa todas las secciones [COMPLETAR]
- [ ] MEMO revisa y valida
- [ ] Entra en FASE 2.3

---

## 🔗 Documentación Generada por MEMO (FASE 2.3)

Estos archivos se generarán en FASE 2.3 investigación:

**knowledge/local/**:
- `01_broker_api_research.md` - Comparativa IBKR vs Alpaca
- `02_technical_indicators_research.md` - Algoritmos RSI, MACD, Bollinger
- `03_options_strategies_research.md` - Iron Condor, Straddle, Strangle
- `04_market_data_research.md` - Feeds TradingView, Polygon.io
- `05_signal_detection_strategy.md` - Lógica de detección y scoring

**knowledge/remote/**:
- `api_references.md` - Links a documentación de APIs
- `libraries.md` - Links a librerías (ta-lib, ib-api, etc.)
- `market_data_sources.md` - Links a feeds de datos
- `trading_resources.md` - Links a recursos educativos

---

## 📊 Arquitectura Propuesta

```
┌─ PWA Frontend (React + Vite) ─────────────────────┐
│  Dashboard │ Signals │ Portfolio │ Backtest       │
└─────────────────┬─────────────────────────────────┘
                  │ REST API
┌─────────────────▼──────────────────────────────────┐
│ Backend API (Express + Node)                       │
│ /api/signals │ /api/strategies │ /api/trades       │
├──────────────────────────────────────────────────────┤
│   BrokerConnector    IndicatorCalc    SignalDetector │
│   (IBKR/Alpaca)      (TA-LIB)        (Logic)        │
└──────┬──────────────┬──────────────┬────────────────┘
       │              │              │
    ┌──▼───────────┬──▼────────────┬─▼────────────┐
    ▼              ▼               ▼              ▼
  Supabase     MongoDB          IBKR API      Alpaca API
 (PG Rela)    (NoSQL)          Market Data   Market Data
```

---

## 🎯 Checkpoints de FASE 2.2

- [x] ✅ workflow_agents.yaml creado
- [x] ✅ README.md en development/ creado
- [x] ✅ SPECIFICATION.md template creado
- [ ] ⏳ README.md en docs/specs/ (este archivo)
- [ ] ⏳ README.md en knowledge/local/
- [ ] ⏳ README.md en knowledge/remote/
- [ ] ⏳ README.md en tickets/
- [ ] ⏳ Actualizar README principal del proyecto

**⚠️ Blocker**: SPECIFICATION.md debe ser completado por el usuario en esta FASE 2.2, antes de pasar a FASE 2.3.

---

## 📞 Próximo Paso

1. **Ahora**: Usuario completa [SPECIFICATION.md](SPECIFICATION.md)
2. **FASE 2.3**: MEMO investigación (basada en SPEC completado)
3. **FASE 2.4**: BANDA diseña schemas + MEMO genera tickets
