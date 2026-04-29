# Agent Template

## Metadata
```yaml
agent:
  name: <agent_name>_agent
  version: 1.0.0
  description: Breve descripciÃ³n de lo que hace este agente
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
  # Otros parÃ¡metros especÃ­ficos
```

---

## 1. DescripciÃ³n

### PropÃ³sito
[Describe el propÃ³sito principal de este agente]

### Responsabilidades
- Responsabilidad 1
- Responsabilidad 2
- Responsabilidad 3

### Casos de Uso
1. **Caso de uso 1**: DescripciÃ³n
2. **Caso de uso 2**: DescripciÃ³n

---

## 2. Skills Requeridos

### Skill 1: <skill_name>
- **UbicaciÃ³n**: `ai_global/skills/<skill_name>` o `<project>/skills/<skill_name>`
- **VersiÃ³n mÃ­nima**: X.X.X
- **Uso**: DescripciÃ³n de cÃ³mo el agente usa este skill

### Skill 2: <skill_name>
- **UbicaciÃ³n**: `ai_global/skills/<skill_name>` o `<project>/skills/<skill_name>`
- **VersiÃ³n mÃ­nima**: X.X.X
- **Uso**: DescripciÃ³n de cÃ³mo el agente usa este skill

---

## 3. ConfiguraciÃ³n

### ParÃ¡metros de Entrada
```python
{
    "param1": "value1",  # DescripciÃ³n de param1
    "param2": "value2",  # DescripciÃ³n de param2
    "param3": 123,       # DescripciÃ³n de param3 (numÃ©rico)
}
```

### Variables de Entorno
```bash
# Archivo .env requerido
AGENT_VAR_1=value
AGENT_VAR_2=value
```

### Archivos de ConfiguraciÃ³n
- `agent.yaml`: ConfiguraciÃ³n principal
- `config/<env>.yaml`: ConfiguraciÃ³n por ambiente (dev, prod)

---

## 4. Flujo de EjecuciÃ³n

```
Entrada â†’ ValidaciÃ³n â†’ Procesamiento â†’ Salida
```

