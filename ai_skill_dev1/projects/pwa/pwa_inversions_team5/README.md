# PWA Inversiones Team 5

> Aplicación Progressive Web App para detección de señales de compra/venta en mercado de opciones de la bolsa EU.

**Estado Proyecto**: 🟡 FASE 2.1 - Pre-Gates Obligatorios  
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
| **SPECIFICATION.md** | 🚧 Pendiente | - |
| **DATABASE_SELECTION** | ⏳ En gate | 2026-03-17 |
| **DATABASE_MODEL** | ⏳ En gate | - |
| **Conocimiento** | 🚧 No iniciado | - |
| **Tickets internos** | 🚧 No iniciados | - |

---

## 🚀 Cómo Usar Este Proyecto (Próximas Fases)

### FASE 2: Setup + Investigación
1. Completar SPECIFICATION.md con requisitos
2. Ejecutar gates de selección de BD
3. MEMO investiga APIs y arquitectura
4. BANDA diseña persistencia
5. Se generan 8-12 tickets para FASE 3

### FASE 3: Implementación
1. BERNA implementa módulos
2. OVER optimiza y audita seguridad
3. MEPU crea tests exhaustivos
4. Código se valida y aprueba

---

## 📞 Contacto

- **Equipo**: Equipo 5
- **Canal**: Chat con agentes (MEMO, BERNA, OVER, MEPU, BANDA)
- **Metodología**: AI Skill Development + Spec Driven Assistance IA
