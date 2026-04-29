# Skill Template

## Metadata
```yaml
skill:
  name: <skill_name>
  version: 1.0.0
  description: Breve descripciÃ³n de lo que hace este skill
  category: data_processing | integration | validation | reporting | automation
  
author:
  name: <Tu nombre>
  created: YYYY-MM-DD
  last_updated: YYYY-MM-DD

dependencies:
  python_packages:
    - package1>=version
    - package2>=version
  system_requirements:
    - Sistema requerido (ej. SAP GUI, Office)
  other_skills:
    - skill_dependency_1

inputs:
  required:
    - input_param_1
    - input_param_2
  optional:
    - optional_param_1
    
outputs:
  - output_1
  - output_2

performance:
  avg_execution_time: <tiempo promedio>
  max_concurrent_instances: <nÃºmero>
```

---

## 1. DescripciÃ³n

### PropÃ³sito
[Describe en 2-3 oraciones quÃ© hace este skill y por quÃ© existe]

### Funcionalidad Principal
- FunciÃ³n 1
- FunciÃ³n 2
- FunciÃ³n 3

### Ventajas
- âœ… Ventaja 1
- âœ… Ventaja 2
- âœ… Reutilizable en mÃºltiples contextos

---

## 2. InstalaciÃ³n

### Dependencias
```bash
# Instalar dependencias del skill
pip install package1>=version
pip install package2>=version
```

### Requisitos del Sistema
- Python >= 3.8
- Sistema operativo: Windows/Linux/Mac
- Otros requisitos especÃ­ficos

---

## 3. Uso

### Ejemplo BÃ¡sico
```python
from <path>.skill_core import <SkillName>

# Crear instancia del skill
skill = <SkillName>()

# Ejecutar skill con parÃ¡metros mÃ­nimos
result = skill.execute(
    input_param_1="value1",
    input_param_2="value2"
)

# Procesar resultado
print(result)
```

### Ejemplo Avanzado
```python
from <path>.skill_core import <SkillName>

# ConfiguraciÃ³n avanzada
config = {
    "timeout": 300,
    "retries": 3,
    "log_level": "DEBUG"
}

skill = <SkillName>(config=config)

# Ejecutar con parÃ¡metros opcionales
result = skill.execute(
    input_param_1="value1",
    input_param_2="value2",
    optional_param_1="optional_value",
    on_progress=lambda p: print(f"Progreso: {p}%")
)

# Validar resultado
if skill.validate_output(result):
    print("Resultado vÃ¡lido")
```

### ParÃ¡metros de Entrada

| ParÃ¡metro | Tipo | Requerido | Default | DescripciÃ³n |
|-----------|------|-----------|---------|-------------|
| `input_param_1` | str | SÃ­ | - | DescripciÃ³n del parÃ¡metro 1 |
| `input_param_2` | int | SÃ­ | - | DescripciÃ³n del parÃ¡metro 2 |
| `optional_param_1` | bool | No | False | DescripciÃ³n del parÃ¡metro opcional |

### Salida

```python
{
    "output_1": "DescripciÃ³n del output 1",
    "output_2": 123,
    "status": "success",
    "metadata": {
        "execution_time": 1.23,
        "timestamp": "2026-02-10T10:30:00"
    }
}
```

---

## 4. Estructura de Archivos

```
<skill_name>/
â”œâ”€â”€ README.md              # Este archivo
â”œâ”€â”€ skill.yaml             # Metadata y configuraciÃ³n
â”œâ”€â”€ __init__.py
â”œâ”€â”€ skill_core.py          # ImplementaciÃ³n principal
â”œâ”€â”€ validators.py          # Validadores (opcional)
â”œâ”€â”€ utils.py               # Utilidades (opcional)
â”œâ”€â”€ config/
â”‚   â””â”€â”€ default.yaml       # ConfiguraciÃ³n por defecto
â”œâ”€â”€ tests/
â”‚   â”œâ”€â”€ test_skill_core.py
â”‚   â”œâ”€â”€ test_validators.py
â”‚   â””â”€â”€ fixtures/          # Datos de prueba
â””â”€â”€ requirements.txt       # Dependencias especÃ­ficas
```

---

## 5. API del Skill

### Clase Principal: `<SkillName>`

#### Constructor
```python
def __init__(self, config: dict = None):
    """
    Inicializa el skill.
    
    Args:
        config (dict): ConfiguraciÃ³n opcional
    """
```

#### MÃ©todo Principal: `execute()`
```python
def execute(self, 
            input_param_1: str,
            input_param_2: int,
            **kwargs) -> dict:
    """
    Ejecuta la funcionalidad principal del skill.
    
    Args:
        input_param_1: DescripciÃ³n
        input_param_2: DescripciÃ³n
        **kwargs: ParÃ¡metros opcionales
        
    Returns:
        dict: Resultado de la ejecuciÃ³n
        
    Raises:
        SkillException: Si ocurre un error
    """
```

#### MÃ©todos Auxiliares
```python
def validate_input(self, **inputs) -> bool:
    """Valida los parÃ¡metros de entrada."""
    
def validate_output(self, output: dict) -> bool:
    """Valida el resultado de la ejecuciÃ³n."""
    
def cleanup(self):
    """Limpieza de recursos."""
```

---

## 6. ConfiguraciÃ³n

### Archivo skill.yaml
```yaml
skill:
  name: <skill_name>
  version: 1.0.0

settings:
  timeout: 300
  max_retries: 3
  log_level: INFO
  
validation:
  strict_mode: true
  validate_inputs: true
  validate_outputs: true
```

### Variables de Entorno
```bash
# .env
SKILL_<NAME>_PARAM1=value
SKILL_<NAME>_PARAM2=value
```

---

## 7. Testing

### Unit Tests
```bash
# Ejecutar todos los tests
pytest tests/ -v

# Test especÃ­fico
pytest tests/test_skill_core.py::test_execute_basic -v
```

### Coverage
```bash
pytest --cov=<skill_name> --cov-report=html tests/
```

### Casos de Prueba

1. **Test BÃ¡sico**: EjecuciÃ³n exitosa con inputs mÃ­nimos
2. **Test ValidaciÃ³n**: Inputs invÃ¡lidos deben fallar
3. **Test Timeout**: Manejo de timeout
4. **Test Retry**: Reintentos ante falla temporal
5. **Test Edge Cases**: Casos lÃ­mite

---

## 8. Performance

### Benchmarks
- **Promedio de ejecuciÃ³n**: X segundos
- **Casos simples**: Y segundos
- **Casos complejos**: Z segundos

### Optimizaciones
- OptimizaciÃ³n 1 implementada
- OptimizaciÃ³n 2 implementada

### Limitaciones
- LimitaciÃ³n 1: DescripciÃ³n y workaround
- LimitaciÃ³n 2: DescripciÃ³n y workaround

---

## 9. Troubleshooting

### Error: "Input validation failed"
**Causa**: ParÃ¡metros de entrada no cumplen validaciÃ³n  
**SoluciÃ³n**: Verificar que los inputs cumplan con el schema esperado

### Error: "Timeout exceeded"
**Causa**: La operaciÃ³n tomÃ³ mÃ¡s tiempo del configurado  
**SoluciÃ³n**: Incrementar el valor de `timeout` en la configuraciÃ³n

### Error: "Dependency not found"
**Causa**: Falta instalar una dependencia  
**SoluciÃ³n**: `pip install -r requirements.txt`

---

## 10. IntegraciÃ³n

### Uso en Agentes
```python
# En un agente
from general.skills.<skill_name>.skill_core import <SkillName>

class MyAgent:
    def __init__(self):
        self.skill = <SkillName>()
        
    def run(self):
        result = self.skill.execute(param1="value")
        return result
```

### Uso en Otros Skills
```python
# ComposiciÃ³n de skills
from general.skills.<skill_name>.skill_core import <SkillName>

class CompositeSkill:
    def __init__(self):
        self.dependency_skill = <SkillName>()
```

---

## 11. Versionado

### Changelog

#### v1.0.0 (YYYY-MM-DD)
- âœ¨ Funcionalidad inicial
- âœ… Tests bÃ¡sicos implementados

#### v1.1.0 (YYYY-MM-DD)
- âœ¨ Nueva caracterÃ­stica X
- ðŸ› Fix: CorrecciÃ³n de bug Y
- ðŸ“š DocumentaciÃ³n mejorada

### Breaking Changes
Ninguno en la versiÃ³n actual.

---

## 12. Referencias

### Knowledge Relacionado
- [Documento tÃ©cnico 1](../../knowledge/local/doc1.md)
- [API Reference externa](../../knowledge/remote/api_ref.md)

### Tickets
- [TKT-GLOBAL-001](../../tickets/TKT-GLOBAL-001.md): CreaciÃ³n del skill
- [TKT-GLOBAL-005](../../tickets/TKT-GLOBAL-005.md): Mejoras de performance

### Proyectos que Usan este Skill
- `zpp007f_line_dt_rep`
- `otro_proyecto`

---

**Mantenedor**: <Nombre>  
**Ãšltima actualizaciÃ³n**: YYYY-MM-DD  
**PrÃ³xima revisiÃ³n**: YYYY-MM-DD

