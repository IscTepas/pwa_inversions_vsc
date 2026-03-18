# REST API - Inversiones Team 5

> Backend API REST para persistencia de datos, autenticación y lógica de negocio del proyecto de inversiones.

**Estado Proyecto**: 🟡 FASE 2.1 - Pre-Gates Obligatorios  
**Fecha Inicio**: 2026-03-17  
**Equipo**: Equipo 5 (BANDA - Especialista BD)

---

## 📊 Información del Proyecto

```yaml
project:
  code: "rest_api_inversions_team5"
  name: "REST API - Plataforma de Inversiones"
  category: "api"
  description: "Backend que expone endpoints REST para la PWA, gestiona persistencia en BD real, migraciones versionadas y servicios de datos"
  owner_email: "equipo5@empresa.com"
  status: "development"
```

---

## 📂 Estructura del Proyecto

```
projects/api/rest_api_inversions_team5/
├── DATABASE_CONFIG.yaml            # Config multi-BD (FASE 2.1)
├── .env.example                    # Variables sin valores (FASE 2.4)
├── .env                            # [NO en git] Valores reales (FASE 2.4)
│
├── src/
│   ├── config/
│   │   ├── database.config.ts
│   │   └── env.config.ts
│   ├── models/
│   │   ├── supabase/
│   │   ├── mongodb/
│   │   └── index.ts
│   ├── migrations/
│   │   ├── supabase/
│   │   └── mongodb/
│   ├── services/
│   │   ├── supabase/
│   │   ├── mongodb/
│   │   └── index.ts
│   ├── controllers/
│   ├── routes/
│   │   ├── strategies.routes.ts
│   │   ├── portfolios.routes.ts
│   │   ├── trades.routes.ts
│   │   └── index.ts
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   ├── types/
│   │   └── database.types.ts       # Tipos exportados para PWA
│   ├── App.ts
│   └── index.ts
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── seeds/
│
├── package.json                    # [Pendiente generar]
├── tsconfig.json                   # [Pendiente generar]
├── vite.config.ts                  # [Pendiente generar]
└── README.md (este archivo)
```

---

## 🔗 Enlaces Relacionados

### Proyecto Frontend (PWA)
- **Ubicación**: `projects/pwa/pwa_inversions_team5/`
- **Propósito**: Interfaz de usuario, consumo de endpoints REST
- **Responsable**: BERNA agent

### Configuración Centralizada
- **DATABASE_CONFIG.yaml**: Define motores de BD, metadata, estrategia de modelos
- **Documentación BD**: Sección 3.5 de metodología

---

## 📋 Estado Actual

| Componente | Estado | Última Actualización |
|-----------|--------|----------------------|
| **Estructura de carpetas** | ✅ Creada | 2026-03-17 |
| **DATABASE_CONFIG.yaml** | 🚧 Pendiente | - |
| **.env.example** | 🚧 Pendiente | - |
| **Modelos de datos** | ⏳ En gate MODEL | - |
| **Migraciones** | 🚧 No iniciadas | - |
| **Servicios de datos** | 🚧 No iniciados | - |
| **Endpoints REST** | 🚧 No iniciados | - |

---

## 🎯 Próximos Pasos

### FASE 2.1: Gates
- [ ] DATABASE SELECTION GATE (¿Qué BD?)
- [ ] DATABASE MODEL GATE (¿Quién define modelo?)
- [ ] METADATA CHECK (proveedor, región, proyecto)

### FASE 2.2: Setup
- [ ] Generar DATABASE_CONFIG.yaml global
- [ ] Crear .env.example por motor

### FASE 2.4: Implementación
- [ ] Solicitar credenciales reales (.env)
- [ ] Crear migraciones versionadas
- [ ] Implementar servicios de datos
- [ ] Exponer endpoints REST

### FASE 3: Validación
- [ ] Ejecutar migraciones en DEV
- [ ] Validar endpoints con PWA
- [ ] Tests de integración

---

## 📞 Contacto

- **Responsable**: 🗄️ @banda · Especialista BD
- **Equipo**: Equipo 5
- **Metodología**: AI Skill Development + Spec Driven Assistance IA
