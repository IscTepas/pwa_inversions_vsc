# TKT-INVRFIC-014: Persistencia (localStorage + .env)

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-014 |
| **Tipo** | Infrastructure / Persistence |
| **Prioridad** | ðŸŸ¡ Alta |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-001 âœ… Completado |

---

## ðŸ“ DescripciÃ³n

### Contexto
Datos del usuario, historial, configuraciÃ³n y credenciales deben persistir.

### PropÃ³sito
**localStorage** (browser):
- watchlist.json: sÃ­mbolos activos
- settings.json: parÃ¡metros indicadores + riesgo
- strategies.json: estrategias personalizadas (20 mÃ¡ximo)
- active_strategy.json: ID de estrategia actual
- trade_history.json: historial de trades (Ãºltimos 500)
- signal_log.json: log de seÃ±ales (Ãºltimas 500)

**.env** (servidor):
- IBKR_HOST, IBKR_PORT, IBKR_CLIENT_ID, IBKR_ACCOUNT_ID
- ALPACA_API_KEY, ALPACA_SECRET_KEY, etc.
- VITE_CLAUDE_API_KEY
- ALERT_EMAIL
- ACTIVE_BROKER

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**:
- src/utils/localStorage.utils.ts (helpers)
- .env (con valores por defecto)
- .env.example (template)

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] Helpers: saveToStorage, loadFromStorage, clearStorage
- [ ] SincronizaciÃ³n: Zustand stores â†’ localStorage
- [ ] ValidaciÃ³n: schemas con zod
- [ ] .env: plantilla completada
- [ ] MigraciÃ³n: versionamiento de schema

### Bulma valida:
- [ ] localStorage persiste entre recargas
- [ ] .env vÃ¡lido no causa errores

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Watchlist persiste tras reload
2. âœ… Estrategia activa se restaura
3. âœ… Historial de trades accesible
4. âœ… .env vÃ¡lido carga sin errores


