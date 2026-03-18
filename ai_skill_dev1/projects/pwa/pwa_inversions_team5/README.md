# PWA Inversiones Team 5

> Aplicación Progressive Web App para detección de señales de compra/venta en mercado de opciones de la bolsa EU.

**Estado Proyecto**: 🟡 FASE 2.2 - Setup del Proyecto (COMPLETADA ✅)  
**Fase Actual**: 2.3 - Investigación ⏳  
**Fecha Inicio**: 2026-03-17  
**Equipo**: Equipo 5 (IA + Desarrollo)

---

## 📊 Información del Proyecto

```yaml
project:
  code: "pwa_inversions_team5"
  name: "Plataforma de Inversiones IA - Signals de Trading"
  category: "pwa"
  description: "PWA enfocada en detección automática de señales de compra y venta en opciones EU usando indicadores técnicos e IA"
  owner_email: "equipo5@empresa.com"
  status: "development"
```

---

## 📂 Estructura del Proyecto

```
projects/pwa/pwa_inversions_team5/
├── ai_work_flow/                   # Workflow de desarrollo (fuera de src/)
│   ├── development/
│   │   ├── workflow_agents.yaml
│   │   └── README.md
│   ├── docs/
│   │   ├── specs/
│   │   │   └── SPECIFICATION.md    # [Pendiente completar]
│   ├── knowledge/
│   │   ├── local/                  # Investigación (FASE 2.3)
│   │   └── remote/                 # Referencias (FASE 2.3)
│   └── tickets/
│       └── [Tickets de desarrollo - FASE 2.4]
│
├── data/                           # Contratos de datos por BD
│   ├── supabase/
│   │   ├── models/
│   │   ├── schema/
│   │   └── data/
│   ├── mongodb/
│   │   ├── models/
│   │   ├── schema/
│   │   └── data/
│   └── README.md
│
├── src/                            # Código ejecutable de la PWA
│   ├── components/
│   ├── features/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── types/
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
│
├── tests/
├── package.json                    # [Pendiente generar]
├── tsconfig.json                   # [Pendiente generar]
├── vite.config.ts                  # [Pendiente generar]
├── index.html                      # [Pendiente generar]
└── README.md (este archivo)
```

---

## 🔗 Enlaces Relacionados

### Proyecto Backend (REST API)
- **Ubicación**: `projects/api/rest_api_inversions_team5/`
- **Propósito**: Base de datos real, migraciones, endpoints REST
- **Responsable**: BANDA agent

### Documentación Global
- **Metodología**: `ai_global/AI_SKILL_DEVELOPMENT_METHODOLOGY_TEAM5.md`
- **Agentes**: `ai_global/agents/README.md`
- **Skills**: `ai_global/skills/README.md`

---

## 📋 Estado Actual

| Componente | Estado | Última Actualización |
|-----------|--------|----------------------|
| **Estructura de carpetas** | ✅ Creada | 2026-03-17 |
| **workflow_agents.yaml** | ✅ Creado | 2026-03-17 |
| **SPECIFICATION.md (template)** | ✅ Creado | 2026-03-17 |
| **README.md (development)** | ✅ Creado | 2026-03-17 |
| **README.md (docs/specs)** | ✅ Creado | 2026-03-17 |
| **README.md (knowledge/local)** | ✅ Creado | 2026-03-17 |
| **README.md (knowledge/remote)** | ✅ Creado | 2026-03-17 |
| **README.md (tickets)** | ✅ Creado | 2026-03-17 |
| **DATABASE_CONFIG.yaml** | ✅ Creado | 2026-03-17 |
| **Investigación (FASE 2.3)** | ⏳ Pendiente | - |
| **Tickets internos (FASE 2.4)** | ⏳ Pendiente | - |

---

## 🚀 Cómo Usar Este Proyecto (Próximas Fases)

### FASE 2.2: Setup del Proyecto (✅ COMPLETADA)
1. ✅ workflow_agents.yaml generado (42 tareas, dependencies)
2. ✅ SPECIFICATION.md template creado (15 secciones)
3. ✅ Estructura de investigación (FASE 2.3) - 5 docs pendientes
4. ✅ Estructura de tickets (FASE 2.4) - 8-12 tickets pendientes
5. ✅ README en all ai_work_flow/ subdirectories

### FASE 2.3: Investigación (🚧 PRÓXIMA)
1. Usuario completa SPECIFICATION.md con datos específicos
2. MEMO investiga APIs, indicadores, estrategias (5 documentos)
3. BANDA valida/propone schemas Supabase + MongoDB
4. Ver documentación: [development/README.md](ai_work_flow/development/README.md)

### FASE 2.4: Diseño
1. BANDA genera .env.example (ambos motores)
2. MEMO diseña arquitectura (diagrama + specs técnicos)
3. MEMO genera 8-12 tickets TKT-INVT5-###
4. Usuario proporciona credenciales reales .env

### FASE 3: Implementación
1. BERNA implementa módulos React + servicios
2. BANDA implementa modelos + migraciones + endpoints
3. OVER optimiza performance y audita seguridad
4. MEPU crea tests exhaustivos (unitarios + E2E)
5. Código integrado y aprobado

---

## 📞 Contacto

- **Equipo**: Equipo 5
- **Canal**: Chat con agentes (MEMO, BERNA, OVER, MEPU, BANDA)
- **Metodología**: AI Skill Development + Spec Driven Assistance IA
