# Agent Template

## Metadata
```yaml
agent:
  name: <agent_name>_agent
  version: 1.0.0
  description: Breve descripción de lo que hace este agente
  category: automation | data_processing | reporting | integration
  
author:
  name: <Tu nombre>
  created: YYYY-MM-DD
  last_updated: YYYY-MM-DD

skills_required:
  - skill_name_1
  - skill_name_2
  - skill_name_3

configuration:
  max_retries: 3
  timeout: 300
  log_level: INFO
  # Otros parámetros específicos
```

---

## 1. Descripción

### Propósito
[Describe el propósito principal de este agente]

### Responsabilidades
- Responsabilidad 1
- Responsabilidad 2
- Responsabilidad 3

### Casos de Uso
1. **Caso de uso 1**: Descripción
2. **Caso de uso 2**: Descripción

---

## 2. Skills Requeridos

### Skill 1: <skill_name>
- **Ubicación**: `ai_global/skills/<skill_name>` o `<project>/skills/<skill_name>`
- **Versión mínima**: X.X.X
- **Uso**: Descripción de cómo el agente usa este skill

### Skill 2: <skill_name>
- **Ubicación**: `ai_global/skills/<skill_name>` o `<project>/skills/<skill_name>`
- **Versión mínima**: X.X.X
- **Uso**: Descripción de cómo el agente usa este skill

---

## 3. Configuración

### Parámetros de Entrada
```python
{
    "param1": "value1",  # Descripción de param1
    "param2": "value2",  # Descripción de param2
    "param3": 123,       # Descripción de param3 (numérico)
}
```

### Variables de Entorno
```bash
# Archivo .env requerido
AGENT_VAR_1=value
AGENT_VAR_2=value
```

### Archivos de Configuración
- `agent.yaml`: Configuración principal
- `config/<env>.yaml`: Configuración por ambiente (dev, prod)

---

## 4. Flujo de Ejecución

```
Entrada → Validación → Procesamiento → Salida
```
