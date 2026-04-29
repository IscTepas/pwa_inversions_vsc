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

---

## 4. API

### ParÃ¡metros de Entrada

| ParÃ¡metro | Tipo | Requerido | DescripciÃ³n |
|-----------|------|-----------|-------------|
| `input_param_1` | str | SÃ­ | DescripciÃ³n del parÃ¡metro 1 |
| `input_param_2` | int | SÃ­ | DescripciÃ³n del parÃ¡metro 2 |

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

