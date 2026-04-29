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

## 4. Uso

### InstalaciÃ³n
```bash
# Si tiene dependencias especÃ­ficas
pip install -r requirements.txt
```

### Ejemplo BÃ¡sico
```python
from <path>.agent_core import <AgentName>Agent

# Inicializar agente
agent = <AgentName>Agent(config={
    "param1": "value1",
    "param2": "value2"
})

# Ejecutar agente
result = agent.execute()

# Ver resultado
print(result)
```

### Ejemplo Avanzado
```python
# ConfiguraciÃ³n avanzada
config = {
    "param1": "value1",
    "max_retries": 5,
    "timeout": 600,
    "skills_config": {
        "skill_1": {"custom_param": "value"}
    }
}

agent = <AgentName>Agent(config=config)

# Ejecutar con callbacks
result = agent.execute(
    on_success=lambda r: print(f"Success: {r}"),
    on_error=lambda e: print(f"Error: {e}")
)
```

---

## 5. Estructura de Archivos

```
<agent_name>/
â”œâ”€â”€ README.md              # Este archivo
â”œâ”€â”€ agent.yaml             # ConfiguraciÃ³n del agente
â”œâ”€â”€ __init__.py
â”œâ”€â”€ agent_core.py          # LÃ³gica principal del agente
â”œâ”€â”€ utils.py               # Utilidades (opcional)
â”œâ”€â”€ config/
â”‚   â”œâ”€â”€ dev.yaml
â”‚   â””â”€â”€ prod.yaml
â”œâ”€â”€ tests/
â”‚   â”œâ”€â”€ test_agent_core.py
â”‚   â””â”€â”€ test_integration.py
â””â”€â”€ requirements.txt       # Dependencias especÃ­ficas (si las hay)
```

---

## 6. Flujo de EjecuciÃ³n

```mermaid
graph TD
    A[Inicializar Agente] --> B[Validar ConfiguraciÃ³n]
    B --> C[Cargar Skills]
    C --> D[Ejecutar Tarea Principal]
    D --> E{Â¿Ã‰xito?}
    E -->|SÃ­| F[Procesar Resultado]
    E -->|No| G[Manejo de Error]
    G --> H{Â¿Reintentar?}
    H -->|SÃ­| D
    H -->|No| I[Registrar Fallo]
    F --> J[Retornar Resultado]
    I --> J
```

---

## 7. Logs y Monitoreo

### UbicaciÃ³n de Logs
```
logs/<agent_name>/
â”œâ”€â”€ agent_YYYYMMDD.log
â””â”€â”€ errors_YYYYMMDD.log
```

### Eventos Registrados
- âœ… InicializaciÃ³n del agente
- âœ… Carga de skills
- âœ… Inicio de ejecuciÃ³n
- âœ… Resultados parciales
- âœ… Errores y excepciones
- âœ… Resultado final

---

## 8. Testing

### Unit Tests
```bash
pytest tests/test_agent_core.py -v
```

### Integration Tests
```bash
pytest tests/test_integration.py -v
```

### Coverage
```bash
pytest --cov=<agent_name> tests/
```

---

## 9. Troubleshooting

### Error ComÃºn 1
**SÃ­ntoma**: DescripciÃ³n del error  
**Causa**: Por quÃ© ocurre  
**SoluciÃ³n**: CÃ³mo resolverlo

### Error ComÃºn 2
**SÃ­ntoma**: DescripciÃ³n del error  
**Causa**: Por quÃ© ocurre  
**SoluciÃ³n**: CÃ³mo resolverlo

---

## 10. Changelog

### v1.0.0 (YYYY-MM-DD)
- VersiÃ³n inicial
- ImplementaciÃ³n de funcionalidad bÃ¡sica

---

## 11. Referencias

- **Skills usados**: 
  - [Skill 1](../skills/skill_1/README.md)
  - [Skill 2](../skills/skill_2/README.md)
- **Knowledge relacionado**:
  - [Documento 1](../../knowledge/local/doc1.md)
- **Tickets**:
  - [TKT-XXX-001](../../tickets/TKT-XXX-001.md)

---

**Mantenedor**: <Nombre>  
**Ãšltima actualizaciÃ³n**: YYYY-MM-DD

