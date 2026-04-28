# 📋 Convenciones Globales

**Versión**: 1.0.0  
**Fecha**: 28 Abril 2026  
**Estado**: ✅ Aprobado

---

## 1. Naming de Archivos y Carpetas

### Proyectos
```
pwa_<nombre>_<equipo>
api_<nombre>_<equipo>

Ejemplos:
- pwa_inversions_drfic
- api_inversions_drfic
```

### Agentes
```
fic_<nombre>_agent_<tipo>

Ejemplos:
- fic_picoro_agent_orchestrator
- fic_goku_agent_dev1
- fic_vegeta_agent_dev2
- fic_bulma_agent_tester1
- fic_krillin_agent_db
```

### Skills
```
<dominio>_<accion>_<tipo>

Ejemplos:
- ticket_analyzer
- react_code_generator
- broker_api_integrator
- database_schema_designer
- test_case_generator
```

### Tickets
```
TKT-<CODIGO>-###

Ejemplos:
- TKT-GLOBAL-001 (global, mejoras metodología)
- TKT-INVRFIC-001 (proyecto inversiones)
- TKT-INVRFIC-002
```

### Ramas Git
```
<tipo>/<descripcion>

Ejemplos:
- feature/TKT-INVRFIC-001-picoro
- feature/TKT-INVRFIC-001-goku
- bugfix/broker-connection-timeout
- hotfix/security-credentials-leak
```

### Archivos de Conocimiento
```
<numero>_<tema>_<tipo>.md

Ejemplos de local/:
- 01_broker_api_research.md
- 02_charting_patterns.md
- 03_technical_indicators_decisions.md
- lesson_market_data_latency.md

Ejemplos de remote/:
- ibkr_api_reference.md
- tradingview_widgets_reference.md
- talib_indicators_reference.md
```

---

## 2. Estándar de Documentación Inline (FIC Bilingüe)

**Obligatorio para**:
- Módulos principales (class, función top-level)
- Servicios de broker y market data
- Lógica de indicadores técnicos
- Bloques de lógica crítica (>5 líneas complejas)
- Hooks personalizados

**Formato**:
```typescript
// FIC: [Descripción en inglés] (EN)
// FIC: [Descripción en español] (ES)
function nombreFuncion(param1: Type): ReturnType {
  // FIC: Implementation details (EN)
  // FIC: Detalles de implementación (ES)
  
  return result;
}
```

**Ejemplo Real**:
```typescript
// FIC: Calculates RSI (Relative Strength Index) with customizable period (EN)
// FIC: Calcula RSI (Índice de Fuerza Relativa) con período personalizable (ES)
function calculateRSI(prices: number[], period: number = 14): number {
  // FIC: Calculate average gains and losses (EN)
  // FIC: Calcula ganancias y pérdidas promedio (ES)
  
  const gains: number[] = [];
  const losses: number[] = [];
  
  for (let i = 1; i < prices.length; i++) {
    const change = prices[i] - prices[i - 1];
    if (change > 0) {
      gains.push(change);
      losses.push(0);
    } else {
      gains.push(0);
      losses.push(Math.abs(change));
    }
  }
  
  const avgGain = gains.slice(-period).reduce((a, b) => a + b) / period;
  const avgLoss = losses.slice(-period).reduce((a, b) => a + b) / period;
  
  const rs = avgGain / avgLoss;
  const rsi = 100 - (100 / (1 + rs));
  
  return rsi;
}
```

---

## 3. Estados de Tickets

| Estado | Emoji | Descripción |
|--------|-------|-------------|
| Open | 🆕 | Recién creado, en backlog |
| In Progress | 🟡 | Agente actualmente trabajando |
| In Review | 🔵 | Código listo, pendiente validación |
| Blocked | 🚫 | Esperando dependencia externa |
| Closed | ✅ | Validado y cerrado con evidencia |

**Regla Crítica**: ✅ Solo con evidencia de validación/ejecución registrada

---

## 4. Validaciones Obligatorias por Agente

### Picoro (Analista)
```
✅ Ticket detallado y completo
✅ Requisitos claramente definidos
✅ Arquitectura documentada
✅ Skills necesarios identificados
✅ Dependencias mapeadas
```

### Goku (Developer)
```
✅ Código compilable sin errores
✅ Estándar FIC bilingüe en código crítico
✅ Tests unitarios básicos incluidos
✅ No hardcoded credentials (solo .env)
✅ Documentación inline
```

### Vegeta (Optimizer)
```
✅ Performance metrics registrados
✅ Latencia < umbral establecido
✅ Security audit sin issues críticos
✅ Código refactorizado sin cambio funcional
✅ npm audit limpio
```

### Bulma (Tester)
```
✅ Tests 100% pasando
✅ Indicadores vs TradingView validados (tolerance 0.5%)
✅ Cero bugs bloqueantes
✅ Criterios de aceptación cumplidos
✅ Evidencia de ejecución registrada
```

### Krillin (Database)
```
✅ Schema validado contra SPEC
✅ Migraciones versionadas
✅ Conectores testeados
✅ REST API documentada
✅ Credenciales en .env (jamás en código)
```

---

## 5. Gates Obligatorios

### GATE 1: DATABASE SELECTION GATE
**Cuándo**: Antes de revisar SPEC  
**Quién**: Usuario  
**Qué**: Selecciona motor(es) de BD  
**Opciones**:
- Supabase (PostgreSQL managed)
- MongoDB (NoSQL)
- PostgreSQL
- MySQL/MariaDB
- SQLite
- Firebase Firestore

### GATE 2: SPECIFICATION GATE
**Cuándo**: Antes de iniciar FASE 2.3  
**Quién**: Sistema  
**Qué**: Verifica que SPECIFICATION.md existe  
**Ubicación oficial**:
```
projects/<categoria>/<nombre>/ai_work_flow/docs/specs/SPECIFICATION.md
```

### GATE 3: DATABASE MODEL GATE
**Cuándo**: Después de DATABASE SELECTION GATE  
**Quién**: Usuario  
**Qué**: Define si usuario entrega modelos o IA propone  
**Opciones**:
- provided_by_user
- generate_by_ai

### GATE 4: VALIDATION GATE (por ticket)
**Cuándo**: Antes de marcar ticket ✅  
**Quién**: Bulma  
**Qué**: Verifica evidencia de validación  
**Evidencia Requerida**:
- Fecha de ejecución
- Entorno (DEV/QAS/PROD)
- Responsable
- Resultado (PASS/FAIL)
- Comando/logs ejecutados

---

## 6. Directorios Globales (ai_global/)

```
ai_global/
├── agents/              # 5 agentes documentados
├── skills/              # 40+ skills catalogados
├── knowledge/           # Base de conocimiento global
│   ├── local/          # Investigaciones internas
│   └── remote/         # Referencias externas
├── templates/          # 11 templates
├── tickets/            # TKT-GLOBAL-###
├── prompts/            # Por fase
├── README.md           # Maestro
└── AI_SKILL_DEVELOPMENT_METHODOLOGY.md
```

---

## 7. Directorios de Proyecto (projects/<categoria>/<nombre>/ai_work_flow/)

```
ai_work_flow/
├── development/        # Instrucciones para agentes
│   ├── workflow_agents.yaml
│   └── README.md
├── docs/              # Documentación funcional/técnica
│   ├── specs/
│   │   ├── SPECIFICATION.md
│   │   └── incremental/
│   ├── templates/
│   └── scripts/
├── knowledge/         # Investigación del proyecto
│   ├── local/
│   └── remote/
└── tickets/          # Tickets del proyecto
    ├── TKT-INVRFIC-001.md
    ├── TKT-INVRFIC-002.md
    └── README.md
```

---

## 8. Protocolo de Visibilidad de Agentes

### Header de Inicio
```
---
🧠 @picoro · Analista/Arquitecto · FASE 2.3
🎯 skill: knowledge_synthesizer
📋 tarea: Generar knowledge base desde SPECIFICATION.md
---
```

### Línea de Completación
```
✅ @picoro completó · knowledge_synthesizer
   output: knowledge/local/01_broker_api_research.md
   siguiente: @goku inicia FASE 2.4
```

### Transición de Agente
```
---
➡️ TRANSICIÓN DE AGENTE
   @picoro ──→ @goku · FASE 2.4
   Input: knowledge base + workflow_agents.yaml
   Output esperado: Estructura base + PR
---
```

---

## 9. Credenciales y Seguridad

### ❌ JAMÁS
```
- API keys en código
- Database URLs en repositorio
- Passwords en archivos
- Secrets en commits
```

### ✅ SIEMPRE
```
- Variables de entorno (.env)
- .env en .gitignore
- .env.example con placeholders
- Credenciales en gestor seguro
```

### Ejemplo .env.example
```env
# Brokers
IBKR_HOST=127.0.0.1
IBKR_PORT=7497
IBKR_CLIENT_ID=
ALPACA_API_KEY=
ALPACA_SECRET_KEY=

# Databases
SUPABASE_URL=
SUPABASE_ANON_KEY=
MONGODB_URI=
POSTGRES_URL=

# IA
CLAUDE_API_KEY=
```

---

## 10. Referencias

- [Metodología](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- [Agentes](./agents/README.md)
- [Skills](./skills/README.md)
- [Templates](./templates/README.md)
