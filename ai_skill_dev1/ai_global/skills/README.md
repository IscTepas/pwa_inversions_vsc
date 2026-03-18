# 🎯 Skills de Desarrollo - Catálogo Global

> Catálogo centralizado de skills (habilidades) de IA reutilizables entre proyectos.

---

## 📖 Propósito

Los **skills** son capacidades especializadas que los agentes de IA aplican para completar tareas. Cada skill está documentado una sola vez en `ai_global/skills/` y puede ser reutilizado por múltiples agentes y proyectos.

**Ventaja**: Evita reinventar la rueda; cada skill se define, prueba y optimiza una sola vez.

---

## 📋 Catálogo de Skills (Estado: FASE 1)

### Estructura de Organización

Los skills se organizan por agente responsable y categoría:

```
skills/
├── README.md (este archivo)
├── memo_skills/                    # Skills de MEMO
│   ├── ticket_analyzer.md
│   ├── architecture_designer.md
│   ├── requirement_validator.md
│   └── knowledge_synthesizer.md
├── berna_skills/                   # Skills de BERNA
│   ├── react_code_generator.md
│   ├── typescript_code_generator.md
│   ├── vite_code_generator.md
│   ├── tradingview_widgets_integrator.md
│   ├── broker_api_integrator.md
│   ├── documentation_writer.md
│   ├── dependency_manager.md
│   └── code_structure_organizer.md
├── over_skills/                    # Skills de OVER
│   ├── code_optimizer.md
│   ├── performance_analyzer.md
│   ├── security_auditor.md
│   └── pattern_refactorer.md
├── mepu_skills/                    # Skills de MEPU
│   ├── test_case_generator.md
│   ├── bug_detector.md
│   ├── quality_validator.md
│   └── regression_tester.md
├── banda_skills/                   # Skills de BANDA
│   ├── database_schema_designer.md
│   ├── database_migrator.md
│   ├── database_connector.md
│   ├── credential_manager.md
│   └── api_service_generator.md
└── shared_skills/                  # Skills compartidos entre agentes
    └── [skills reutilizables por múltiples agentes]
```

---

## 🎯 Skills por Agente

### MEMO Skills (Analista/Arquitecto)

| Skill | Descripción | Estado |
|-------|-------------|--------|
| **ticket_analyzer** | Analiza tickets externos, los desglosa en componentes y requisitos claros | 📋 Pendiente |
| **architecture_designer** | Diseña arquitectura de sistemas de trading: broker, market data, signals, portfolio | 📋 Pendiente |
| **requirement_validator** | Valida que SPECIFICATION.md cumple criterios de completitud y viabilidad | 📋 Pendiente |
| **knowledge_synthesizer** | Sintetiza investigación técnica en documentación de decisiones `knowledge/local/` | 📋 Pendiente |

---

### BERNA Skills (Programador Senior)

| Skill | Descripción | Estado |
|-------|-------------|--------|
| **react_code_generator** | Genera componentes React funcionales, hooks custom, gestión de estado | 📋 Pendiente |
| **typescript_code_generator** | Implementa tipos, interfaces, servicios y lógica de negocio en TypeScript | 📋 Pendiente |
| **vite_code_generator** | Configura proyecto Vite, optimiza builds, maneja importaciones | 📋 Pendiente |
| **tradingview_widgets_integrator** | Integra gráficas TradingView Lightweight Charts, indicadores, temas | 📋 Pendiente |
| **broker_api_integrator** | Conecta con IBKR, Alpaca; maneja órdenes y datos de mercado | 📋 Pendiente |
| **documentation_writer** | Redacta comentarios inline con estándar TEAM5 (EN/ES), README, jsdoc | 📋 Pendiente |
| **dependency_manager** | Maneja package.json, instalación de librerías, resolución de conflictos | 📋 Pendiente |
| **code_structure_organizer** | Estructura directorios, archivos, sigue convenciones de layout src-first | 📋 Pendiente |

---

### OVER Skills (Optimizador/Seguridad)

| Skill | Descripción | Estado |
|-------|-------------|--------|
| **code_optimizer** | Optimiza algoritmos, reduce complexity, mejora performance | 📋 Pendiente |
| **performance_analyzer** | Analiza latencia, profiling, identifica bottlenecks | 📋 Pendiente |
| **security_auditor** | Audita credenciales, validación de entrada, autenticación | 📋 Pendiente |
| **pattern_refactorer** | Refactoriza patrones comunes, aplica design patterns | 📋 Pendiente |

---

### MEPU Skills (QA Tester)

| Skill | Descripción | Estado |
|-------|-------------|--------|
| **test_case_generator** | Genera test cases (happy path, edge cases, error scenarios) | 📋 Pendiente |
| **bug_detector** | Diseña pruebas para encontrar bugs, edge cases, off-by-one errors | 📋 Pendiente |
| **quality_validator** | Valida que outputs cumplen criterios de aceptación y tolerancias | 📋 Pendiente |
| **regression_tester** | Crea suite de regresión, ejecuta tests de cambios previos | 📋 Pendiente |

---

### BANDA Skills (Especialista BD)

| Skill | Descripción | Estado |
|-------|-------------|--------|
| **database_schema_designer** | Diseña schemas SQL/NoSQL, entidades, relaciones, constraints, índices | 📋 Pendiente |
| **database_migrator** | Crea migraciones versionadas, ejecuta en DEV, crea rollbacks | 📋 Pendiente |
| **database_connector** | Configura conexión a BD real usando ORM/ODM (Prisma, Mongoose) | 📋 Pendiente |
| **credential_manager** | Gestiona variables de entorno, `.env`, tokens de acceso | 📋 Pendiente |
| **api_service_generator** | Genera servicios de datos (repositories, DAOs), endpoints REST | 📋 Pendiente |

---

## 📊 Estado del Catálogo

| Métrica | Valor |
|---------|-------|
| **Total de skills** | 21 |
| **Skills documentados** | 0 |
| **Skills implementados** | 0 |
| **Fase actual** | FASE 1 (Setup) |
| **Próxima actividad** | Crear archivos `.md` para cada skill en FASE 2 |

---

## 🔄 Ciclo de Vida de un Skill

### Estado Draft (📋)
- Skill identificado por necesidad del proyecto
- Definición pendiente en archivo `.md`
- No está listo para uso

### Estado Candidate (🟡)
- Archivo `.md` creado con propósito, I/O, dependencias
- Ejemplos básicos documentados
- Listo para uso en desarrollo

### Estado Approved (✅)
- Skill probado en proyecto real
- Documentación completa y validada
- Puede ser asignado a múltiples agentes/proyectos

---

## 📝 Cómo Registrar un Nuevo Skill

**Regla de oro**: TODO skill nuevo se registra PRIMERO en `ai_global/skills/` antes de asignarse a agentes.

### Pasos

1. **Crear archivo `.md`** en la carpeta del agente:
   - Ubicación: `ai_global/skills/<agente>_skills/<nombre_skill>.md`
   - Template: Usar `templates/SKILL_TEMPLATE.md`

2. **Documentar**:
   - Propósito
   - Inputs/outputs
   - Dependencias
   - Ejemplos de uso
   - Agentes que lo utilizan

3. **Actualizar este README.md**:
   - Agregar skill a tabla correspondiente
   - Marcar estado como `📋 Pendiente`

4. **Asignar a agente**:
   - En archivo del agente (ej. `team5_memo_agent_orchestrator.md`)
   - Agregar al campo `skills_required` en metadata

5. **Asignar a proyecto** (si aplica):
   - En `workflow_agents.yaml` del proyecto
   - Agregar constraint de skill necesario para ticket

---

## 🎯 Próximos Pasos (FASE 2)

En FASE 2 (Inicio del proyecto de inversiones), se procederá a:

1. **Crear archivos `.md` para todos los 21 skills**
   - Seguir template base
   - Especializar para dominio de trading/inversiones

2. **Registrar en este README**
   - Cambiar estado de `📋 Pendiente` a `🟡 Candidate`

3. **Validar con agentes**
   - MEMO revisa skillset para investigación
   - BERNA revisa skillset para implementación
   - etc.

4. **Asignar a tickets**
   - Cada ticket referencia skills necesarios
   - MEPU valida que agente tiene skills requeridos

---

## 🔗 Referencias

- **Metodología de skills**: [AI_SKILL_DEVELOPMENT_METHODOLOGY_TEAM5.md](../AI_SKILL_DEVELOPMENT_METHODOLOGY_TEAM5.md) sección 3.2
- **Template de skill**: [SKILL_TEMPLATE.md](../templates/SKILL_TEMPLATE.md)
- **Agentes que usan skills**: [agents/README.md](../agents/README.md)

---

## 📌 Notas

- **Reutilización**: Un skill puede ser usado por múltiples agentes
- **Versionado**: Skills evolucionan; se versiona en metadata del `.md`
- **Documentación**: Todo skill debe tener ejemplos prácticos
- **Validación**: Skills se validan contra casos reales del proyecto
