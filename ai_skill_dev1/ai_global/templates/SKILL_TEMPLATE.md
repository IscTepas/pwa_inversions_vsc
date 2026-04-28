# Skill Template

## Metadata
```yaml
skill:
  name: <skill_name>
  version: 1.0.0
  description: Breve descripción de lo que hace este skill
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
  max_concurrent_instances: <número>
```

---

## 1. Descripción

### Propósito
[Describe en 2-3 oraciones qué hace este skill y por qué existe]

### Funcionalidad Principal
- Función 1
- Función 2
- Función 3

### Ventajas
- ✅ Ventaja 1
- ✅ Ventaja 2
- ✅ Reutilizable en múltiples contextos

---

## 2. Instalación

### Dependencias
```bash
# Instalar dependencias del skill
pip install package1>=version
pip install package2>=version
```

### Requisitos del Sistema
- Python >= 3.8
- Sistema operativo: Windows/Linux/Mac
- Otros requisitos específicos

---

## 3. Uso

### Ejemplo Básico
```python
from <path>.skill_core import <SkillName>

# Crear instancia del skill
skill = <SkillName>()

# Ejecutar skill con parámetros mínimos
result = skill.execute(
    input_param_1="value1",
    input_param_2="value2"
)

# Procesar resultado
print(result)
```

---

## 4. API

### Parámetros de Entrada

| Parámetro | Tipo | Requerido | Descripción |
|-----------|------|-----------|-------------|
| `input_param_1` | str | Sí | Descripción del parámetro 1 |
| `input_param_2` | int | Sí | Descripción del parámetro 2 |

### Salida

```python
{
    "output_1": "Descripción del output 1",
    "output_2": 123,
    "status": "success",
    "metadata": {
        "execution_time": 1.23,
        "timestamp": "2026-02-10T10:30:00"
    }
}
```
