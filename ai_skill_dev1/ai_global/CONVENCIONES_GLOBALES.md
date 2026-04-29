# ðŸ“‹ Convenciones Globales

**VersiÃ³n**: 1.0.0  
**Fecha**: 28 Abril 2026  
**Estado**: âœ… Aprobado

---

## 1. Naming de Archivos y Carpetas

### Proyectos
```
pwa_<nombre>_<equipo>
api_<nombre>_<equipo>

Ejemplos:
- pwa_inversions_team5
- api_inversions_team5
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
- TKT-GLOBAL-001 (global, mejoras metodologÃ­a)
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

## 2. EstÃ¡ndar de DocumentaciÃ³n Inline (FIC BilingÃ¼e)

**Obligatorio para**:
- MÃ³dulos principales (class, funciÃ³n top-level)
- Servicios de broker y market data
- LÃ³gica de indicadores tÃ©cnicos
- Bloques de lÃ³gica crÃ­tica (>5 lÃ­neas complejas)
- Hooks personalizados

**Formato**:
```typescript
// FIC: [DescripciÃ³n en inglÃ©s] (EN)
// FIC: [DescripciÃ³n en espaÃ±ol] (ES)
function nombreFuncion(param1: Type): ReturnType {
  // FIC: Implementation details (EN)
  // FIC: Detalles de implementaciÃ³n (ES)
  
  return result;
}
```

**Ejemplo Real**:
```typescript
// FIC: Calculates RSI (Relative Strength Index) with customizable period (EN)
// FIC: Calcula RSI (Ãndice de Fuerza Relativa) con perÃ­odo personalizable (ES)
function calculateRSI(prices: number[], period: number = 14): number {
  // FIC: Calculate average gains and losses (EN)
  // FIC: Calcula ganancias y pÃ©rdidas promedio (ES)
  
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

| Estado | Emoji | DescripciÃ³n |
|--------|-------|-------------|
| Open | ðŸ†• | ReciÃ©n creado, en backlog |
| In Progress | ðŸŸ¡ | Agente actualmente trabajando |
| In Review | ðŸ”µ | CÃ³digo listo, pendiente validaciÃ³n |
| Blocked | ðŸš« | Esperando dependencia externa |
| Closed | âœ… | Validado y cerrado con evidencia |

**Regla CrÃ­tica**: âœ… Solo con evidencia de validaciÃ³n/ejecuciÃ³n registrada

---

## 4. Validaciones Obligatorias por Agente

### Picoro (Analista)
```
âœ… Ticket detallado y completo
âœ… Requisitos claramente definidos
âœ… Arquitectura documentada
âœ… Skills necesarios identificados
âœ… Dependencias mapeadas
```

### Goku (Developer)
```
âœ… CÃ³digo compilable sin errores
âœ… EstÃ¡ndar FIC bilingÃ¼e en cÃ³digo crÃ­tico
âœ… Tests unitarios bÃ¡sicos incluidos
âœ… No hardcoded credentials (solo .env)
âœ… DocumentaciÃ³n inline
```

### Vegeta (Optimizer)
```
âœ… Performance metrics registrados
âœ… Latencia < umbral establecido
âœ… Security audit sin issues crÃ­ticos
âœ… CÃ³digo refactorizado sin cambio funcional
âœ… npm audit limpio
```

### Bulma (Tester)
```
âœ… Tests 100% pasando
âœ… Indicadores vs TradingView validados (tolerance 0.5%)
âœ… Cero bugs bloqueantes
âœ… Criterios de aceptaciÃ³n cumplidos
âœ… Evidencia de ejecuciÃ³n registrada
```

### Krillin (Database)
```
âœ… Schema validado contra SPEC
âœ… Migraciones versionadas
âœ… Conectores testeados
âœ… REST API documentada
âœ… Credenciales en .env (jamÃ¡s en cÃ³digo)
```

---

## 5. Gates Obligatorios

### GATE 1: DATABASE SELECTION GATE
**CuÃ¡ndo**: Antes de revisar SPEC  
**QuiÃ©n**: Usuario  
**QuÃ©**: Selecciona motor(es) de BD  
**Opciones**:
- Supabase (PostgreSQL managed)
- MongoDB (NoSQL)
- PostgreSQL
- MySQL/MariaDB
- SQLite
- Firebase Firestore

### GATE 2: SPECIFICATION GATE
**CuÃ¡ndo**: Antes de iniciar FASE 2.3  
**QuiÃ©n**: Sistema  
**QuÃ©**: Verifica que SPECIFICATION.md existe  
**UbicaciÃ³n oficial**:
```
projects/<categoria>/<nombre>/ai_work_flow/docs/specs/SPECIFICATION.md
```

### GATE 3: DATABASE MODEL GATE
**CuÃ¡ndo**: DespuÃ©s de DATABASE SELECTION GATE  
**QuiÃ©n**: Usuario  
**QuÃ©**: Define si usuario entrega modelos o IA propone  
**Opciones**:
- provided_by_user
- generate_by_ai

### GATE 4: VALIDATION GATE (por ticket)
**CuÃ¡ndo**: Antes de marcar ticket âœ…  
**QuiÃ©n**: Bulma  
**QuÃ©**: Verifica evidencia de validaciÃ³n  
**Evidencia Requerida**:
- Fecha de ejecuciÃ³n
- Entorno (DEV/QAS/PROD)
- Responsable
- Resultado (PASS/FAIL)
- Comando/logs ejecutados

---

## 6. Directorios Globales (ai_global/)

```
ai_global/
â”œâ”€â”€ agents/              # 5 agentes documentados
â”œâ”€â”€ skills/              # 40+ skills catalogados
â”œâ”€â”€ knowledge/           # Base de conocimiento global
â”‚   â”œâ”€â”€ local/          # Investigaciones internas
â”‚   â””â”€â”€ remote/         # Referencias externas
â”œâ”€â”€ templates/          # 11 templates
â”œâ”€â”€ tickets/            # TKT-GLOBAL-###
â”œâ”€â”€ prompts/            # Por fase
â”œâ”€â”€ README.md           # Maestro
â””â”€â”€ AI_SKILL_DEVELOPMENT_METHODOLOGY.md
```

---

## 7. Directorios de Proyecto (projects/<categoria>/<nombre>/ai_work_flow/)

```
ai_work_flow/
â”œâ”€â”€ development/        # Instrucciones para agentes
â”‚   â”œâ”€â”€ workflow_agents.yaml
â”‚   â””â”€â”€ README.md
â”œâ”€â”€ docs/              # DocumentaciÃ³n funcional/tÃ©cnica
â”‚   â”œâ”€â”€ specs/
â”‚   â”‚   â”œâ”€â”€ SPECIFICATION.md
â”‚   â”‚   â””â”€â”€ incremental/
â”‚   â”œâ”€â”€ templates/
â”‚   â””â”€â”€ scripts/
â”œâ”€â”€ knowledge/         # InvestigaciÃ³n del proyecto
â”‚   â”œâ”€â”€ local/
â”‚   â””â”€â”€ remote/
â””â”€â”€ tickets/          # Tickets del proyecto
    â”œâ”€â”€ TKT-INVRFIC-001.md
    â”œâ”€â”€ TKT-INVRFIC-002.md
    â””â”€â”€ README.md
```

---

## 8. Protocolo de Visibilidad de Agentes

### Header de Inicio
```
---
ðŸ§  @picoro Â· Analista/Arquitecto Â· FASE 2.3
ðŸŽ¯ skill: knowledge_synthesizer
ðŸ“‹ tarea: Generar knowledge base desde SPECIFICATION.md
---
```

### LÃ­nea de CompletaciÃ³n
```
âœ… @picoro completÃ³ Â· knowledge_synthesizer
   output: knowledge/local/01_broker_api_research.md
   siguiente: @goku inicia FASE 2.4
```

### TransiciÃ³n de Agente
```
---
âž¡ï¸ TRANSICIÃ“N DE AGENTE
   @picoro â”€â”€â†’ @goku Â· FASE 2.4
   Input: knowledge base + workflow_agents.yaml
   Output esperado: Estructura base + PR
---
```

---

## 9. Credenciales y Seguridad

### âŒ JAMÃS
```
- API keys en cÃ³digo
- Database URLs en repositorio
- Passwords en archivos
- Secrets en commits
```

### âœ… SIEMPRE
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

- [MetodologÃ­a](../AI_SKILL_DEVELOPMENT_METHODOLOGY.md)
- [Agentes](./agents/README.md)
- [Skills](./skills/README.md)
- [Templates](./templates/README.md)

