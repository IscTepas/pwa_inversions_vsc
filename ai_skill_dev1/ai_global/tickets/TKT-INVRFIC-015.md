# TKT-INVRFIC-015: Testing (Unit + E2E) + Cierre de Fase 1

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-015 |
| **Tipo** | QA / Testing |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | Todos los tickets 001-014 ✅ Completados |

---

## 📝 Descripción

### Contexto
Validación final de toda la Fase 1 antes de cierre.

### Propósito
**Unit Tests**:
- Indicadores: RSI vs TradingView (< 0.1% error)
- MACD vs TradingView (< 0.1% error)
- Bollinger Bands vs TradingView (< 0.1% error)
- Position Size calculation
- Risk validation

**E2E Tests**:
- Flujo completo: conexión → data → signal → orden
- Tabla de señales muestra datos correctamente
- Modal de señal abre/cierra
- Cambiar estrategia recalcula

**Manual Validation**:
- Dashboard visualmente correcto (dark theme)
- Señales de prueba conocidas generan scores esperados
- Sin console errors
- Performance: señal generada < 2 segundos

---

## 🔍 Análisis de Impacto

**Archivos a Crear**:
- tests/unit/indicators/*.test.ts
- tests/unit/signals/*.test.ts
- tests/e2e/dashboard.spec.ts
- tests/fixtures/market-data.ts (datos de prueba)

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] Unit tests: indicadores vs TradingView dataset
- [ ] Unit tests: confluencia y IA advisor
- [ ] E2E: flujo completo dashboard
- [ ] Fixtures: datos históricos para testing

### Vegeta optimiza:
- [ ] Coverage: mínimo 70%
- [ ] Performance benchmarks

### Bulma valida:
- [ ] `npm run test` pasa todos los tests
- [ ] `npm run test:e2e` pasa sin errores
- [ ] Dashboard funciona sin errores
- [ ] Performance satisfactorio

---

## ✅ Criterios de Aceptación

1. ✅ Unit tests: RSI precision < 0.1% vs TradingView
2. ✅ Unit tests: MACD precision < 0.1%
3. ✅ Unit tests: Bollinger Bands precision < 0.1%
4. ✅ E2E: flujo completo sin errores
5. ✅ Coverage >= 70%
6. ✅ No console errors

---

## 🧾 Evidencia de Validación

- [ ] Screenshot: `npm run test` output: ALL TESTS PASS
- [ ] Screenshot: `npm run test:e2e` output: ALL PASS
- [ ] Screenshot: Coverage report >= 70%
- [ ] Screenshot: Dashboard sin console errors
- [ ] Video o GIF: Flujo completo de señal

---

## 📌 CIERRE DE FASE 1

Cuando este ticket sea ✅ Completado:
1. Todos los tickets TKT-INVRFIC-001 a 015 estarán cerrados
2. Especificación v1.0 será considerada implementada
3. Proyecto estará listo para Fase 2 (expansiones y nuevos cores)
4. Estado: 🟢 **FASE 1 COMPLETA**

---

## 🚀 Próximos Pasos (Fase 2, fuera de alcance v1.0)

- [ ] Integración real con brokers (credenciales reales)
- [ ] Datos reales de mercado (sin mock)
- [ ] Core de opciones más sofisticado
- [ ] Machine learning para predicción
- [ ] Mobile app (React Native)

