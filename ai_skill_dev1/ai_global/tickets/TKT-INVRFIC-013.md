# TKT-INVRFIC-013: Sistema de Alertas + Notificaciones

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-013 |
| **Tipo** | Feature / Alerts |
| **Prioridad** | 🟡 Alta |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |
| **Bloqueador** | TKT-INVRFIC-009 + TKT-INVRFIC-012 ✅ Completados |

---

## 📝 Descripción

### Contexto
Usuario debe ser notificado cuando ocurren eventos críticos.

### Propósito
Tipos de alerta:
- 🔴 SIGNAL_HIGH_CONFIDENCE: señal ≥75% → popup + sonido + badge
- 🟡 SIGNAL_MEDIUM: señal 50-74% → badge en UI + log
- 📊 DAILY_OPPORTUNITY: ranking diario actualizado
- ⚠️ EVENT_RISK: earnings o evento macro cercano
- 📌 POSITION_STOP_LOSS: posición alcanzó stop → popup urgente
- 📌 POSITION_TAKE_PROFIT: posición alcanzó target → popup
- 🔌 CONNECTION_LOST: broker desconectado → banner
- 🤖 AI_CONFIRMATION: IA validó señal → integrado en tarjeta

---

## 🔍 Análisis de Impacto

**Archivos a Crear**:
- src/services/alerts/alerts.service.ts
- src/components/ui/AlertBanner.tsx
- src/components/ui/ModalAlert.tsx
- src/hooks/useAlerts.ts
- src/store/alertsStore.ts

---

## 🤖 Workflow de Agentes

### Goku implementa:
- [ ] alertsService: maneja queue de alertas
- [ ] UI: banner persistent (conexión), popup modales, badges
- [ ] Audio: sonido configurable (on/off)
- [ ] Email: integración con EmailJS o nodemailer
- [ ] Persistencia: historial últimas 100 alertas

### Bulma valida:
- [ ] Alertas aparecen sin retrasos
- [ ] Sonido toca al configurarse
- [ ] Modal alerta desaparece tras timeout

---

## ✅ Criterios de Aceptación

1. ✅ Alerta alta confianza genera popup + sonido
2. ✅ Banner conexión perdida persiste
3. ✅ Email alerta se envía (si configurado)
4. ✅ Historial de alertas guardado

