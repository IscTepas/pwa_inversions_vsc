# TKT-INVRFIC-014: Persistencia (localStorage + .env)

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-014 |
| **Tipo** | Infrastructure / Persistence |
| **Prioridad** | 🟡 Alta |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-001 ✅ Completado |

---

## 📝 Descripción

### Contexto
Datos del usuario, historial, configuración y credenciales deben persistir.

### Propósito
**localStorage** (browser):
- watchlist.json: símbolos activos
- settings.json: parámetros indicadores + riesgo
- strategies.json: estrategias personalizadas (20 máximo)
- active_strategy.json: ID de estrategia actual
- trade_history.json: historial de trades (últimos 500)
- signal_log.json: log de señales (últimas 500)

**.env** (servidor):
- IBKR_HOST, IBKR_PORT, IBKR_CLIENT_ID, IBKR_ACCOUNT_ID
- ALPACA_API_KEY, ALPACA_SECRET_KEY, etc.
- VITE_CLAUDE_API_KEY
- ALERT_EMAIL
- ACTIVE_BROKER

---

## 🔍 Análisis de Impacto

**Archivos a Crear**:
- src/utils/localStorage.utils.ts (helpers)
- .env (con valores por defecto)
- .env.example (template)

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] Helpers: saveToStorage, loadFromStorage, clearStorage
- [ ] Sincronización: Zustand stores → localStorage
- [ ] Validación: schemas con zod
- [ ] .env: plantilla completada
- [ ] Migración: versionamiento de schema

### Bulma valida:
- [ ] localStorage persiste entre recargas
- [ ] .env válido no causa errores

---

## ✅ Criterios de Aceptación

1. ✅ Watchlist persiste tras reload
2. ✅ Estrategia activa se restaura
3. ✅ Historial de trades accesible
4. ✅ .env válido carga sin errores

