# TKT-INVRFIC-013: Sistema de Alertas + Notificaciones

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-013 |
| **Tipo** | Feature / Alerts |
| **Prioridad** | ðŸŸ¡ Alta |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |
| **Bloqueador** | TKT-INVRFIC-009 + TKT-INVRFIC-012 âœ… Completados |

---

## ðŸ“ DescripciÃ³n

### Contexto
Usuario debe ser notificado cuando ocurren eventos crÃ­ticos.

### PropÃ³sito
Tipos de alerta:
- ðŸ”´ SIGNAL_HIGH_CONFIDENCE: seÃ±al â‰¥75% â†’ popup + sonido + badge
- ðŸŸ¡ SIGNAL_MEDIUM: seÃ±al 50-74% â†’ badge en UI + log
- ðŸ“Š DAILY_OPPORTUNITY: ranking diario actualizado
- âš ï¸ EVENT_RISK: earnings o evento macro cercano
- ðŸ“Œ POSITION_STOP_LOSS: posiciÃ³n alcanzÃ³ stop â†’ popup urgente
- ðŸ“Œ POSITION_TAKE_PROFIT: posiciÃ³n alcanzÃ³ target â†’ popup
- ðŸ”Œ CONNECTION_LOST: broker desconectado â†’ banner
- ðŸ¤– AI_CONFIRMATION: IA validÃ³ seÃ±al â†’ integrado en tarjeta

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**:
- src/services/alerts/alerts.service.ts
- src/components/ui/AlertBanner.tsx
- src/components/ui/ModalAlert.tsx
- src/hooks/useAlerts.ts
- src/store/alertsStore.ts

---

## ðŸ¤– Workflow de Agentes

### Goku implementa:
- [ ] alertsService: maneja queue de alertas
- [ ] UI: banner persistent (conexiÃ³n), popup modales, badges
- [ ] Audio: sonido configurable (on/off)
- [ ] Email: integraciÃ³n con EmailJS o nodemailer
- [ ] Persistencia: historial Ãºltimas 100 alertas

### Bulma valida:
- [ ] Alertas aparecen sin retrasos
- [ ] Sonido toca al configurarse
- [ ] Modal alerta desaparece tras timeout

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Alerta alta confianza genera popup + sonido
2. âœ… Banner conexiÃ³n perdida persiste
3. âœ… Email alerta se envÃ­a (si configurado)
4. âœ… Historial de alertas guardado


