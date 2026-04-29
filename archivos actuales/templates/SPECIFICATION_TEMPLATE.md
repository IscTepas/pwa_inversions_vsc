# ESPECIFICACIÃ“N TÃ‰CNICA

## Proyecto: [Nombre Descriptivo del Proyecto]

**CÃ³digo del Proyecto**: `<project_code>`  
**Ticket Externo**: REQ-XXXX-YYYY (si aplica)  
**Solicitante**: [Nombre (Ãrea)]  
**TransacciÃ³n SAP**: [TransacciÃ³n] (si aplica)  
**Programa SAP**: [Programa] (si aplica)  
**Fecha**: YYYY-MM-DD  
**Estado**: ðŸŸ¡ En EspecificaciÃ³n / âœ… Aprobado / ðŸš§ En Desarrollo / âœ… Completado  

---

## 1. VisiÃ³n General

### Contexto
[Describe la situaciÃ³n actual y el problema que se quiere resolver]

### Objetivo
[QuÃ© se quiere lograr con este proyecto - debe ser claro y medible]

**Ejemplo**: Automatizar la extracciÃ³n de datos del Reporte de Paros desde SAP ECC, exportarlos a Excel y transformarlos segÃºn plantilla estÃ¡ndar para su distribuciÃ³n.

### Flujo Principal

```
[Describe el flujo end-to-end con diagrama ASCII]

Sistema Origen
    â†“ [AcciÃ³n 1]
Sistema/Archivo Intermedio
    â†“ [AcciÃ³n 2]
Sistema/Archivo Final
    â†“ [AcciÃ³n 3]
Resultado Final
```

### Resultado Esperado

- **Input**: [QuÃ© entra al sistema]
- **Output**: [QuÃ© sale del sistema]
- **Frecuencia**: Manual (on-demand) / Programada (diaria, semanal, etc.)
- **Usuarios**: [QuiÃ©nes usarÃ¡n este sistema]

### Beneficios
- Beneficio 1
- Beneficio 2
- Beneficio 3

---

## 2. Entrada (Input)

### 2.1 ParÃ¡metros de EjecuciÃ³n

**ParÃ¡metros Requeridos**:
```yaml
parametro_1:
  tipo: string
  descripciÃ³n: "DescripciÃ³n del parÃ¡metro"
  valores_posibles: "A, B, C"
  requerido: true
  ejemplo: "valor_ejemplo"

parametro_2:
  tipo: integer
  descripciÃ³n: "DescripciÃ³n del parÃ¡metro"
  requerido: false
  default: 10
  ejemplo: 15
```

**Preguntas para el Usuario**:
- [ ] Â¿QuÃ© filtros/parÃ¡metros se deben usar?
- [ ] Â¿Estos parÃ¡metros son fijos o variables por ejecuciÃ³n?
- [ ] Â¿QuiÃ©n proporciona estos valores?
- [ ] Â¿Hay validaciones especÃ­ficas?

### 2.2 Archivos de Entrada (si aplica)

**Archivo 1**: [Nombre del archivo]
- **UbicaciÃ³n**: [Ruta]
- **Formato**: Excel / CSV / JSON / XML
- **Estructura**:
  - Columna 1: [Nombre y tipo]
  - Columna 2: [Nombre y tipo]
  - ...
- **Validaciones**:
  - [ ] Archivo debe existir
  - [ ] Formato debe ser vÃ¡lido
  - [ ] Columnas requeridas presentes
  - [ ] Datos no vacÃ­os

**Plantillas** (si aplica):
- [ ] Â¿DÃ³nde estÃ¡ la plantilla? (ruta)
- [ ] Â¿Tiene fÃ³rmulas o solo estructura?
- [ ] Â¿QuÃ© campos mapean a quÃ© columnas?

### 2.3 Credenciales y Conexiones

**Sistema 1**: [Nombre del sistema]
- **Tipo**: SAP / API / Base de datos / Servicio web
- **Credenciales**: [DÃ³nde se obtienen]
- **Ambiente**: PRD / TEST / DEV
- **Timeout**: [segundos]
- **Permisos Requeridos**: [Listar permisos]

---

## 3. Proceso (LÃ³gica de Negocio)

### 3.1 Paso 1: [Nombre del Paso]

```python
PASO 1: [DescripciÃ³n breve]
â”œâ”€ AcciÃ³n 1: [Detalle]
â”œâ”€ AcciÃ³n 2: [Detalle]
â”‚  â”œâ”€ Sub-acciÃ³n 2.1
â”‚  â””â”€ Sub-acciÃ³n 2.2
â”œâ”€ ValidaciÃ³n: [QuÃ© validar]
â””â”€ Error handling: [QuÃ© hacer si falla]
```

**Detalles TÃ©cnicos**:
- Input: [QuÃ© recibe]
- Proceso: [QuÃ© hace]
- Output: [QuÃ© produce]
- Tiempo estimado: [segundos/minutos]

**Casos Especiales**:
- Si [condiciÃ³n], entonces [acciÃ³n alternativa]
- Si [error], entonces [manejo]

---

### 3.2 Paso 2: [Nombre del Paso]

[Repetir estructura del Paso 1]

---

### 3.3 Paso 3: [Nombre del Paso]

[Repetir estructura]

---

### 3.X Validaciones de Negocio

**ValidaciÃ³n 1**: [Nombre]
- **DescripciÃ³n**: [QuÃ© se valida]
- **Regla**: [CondiciÃ³n que debe cumplirse]
- **AcciÃ³n si falla**: [QuÃ© hacer]

**ValidaciÃ³n 2**: [Nombre]
- [Repetir estructura]

---

### 3.Y Manejo de Errores

| Tipo de Error | Causa | AcciÃ³n |
|---------------|-------|--------|
| Error Tipo 1 | [Causa] | [AcciÃ³n correctiva] |
| Error Tipo 2 | [Causa] | [AcciÃ³n correctiva] |
| Error Tipo 3 | [Causa] | [AcciÃ³n correctiva] |

---

## 4. Salida (Output)

### 4.1 Archivos Generados

```
ðŸ“ data/raw/                    # Datos brutos sin procesar
â””â”€ archivo_bruto_YYYYMMDD_HHMMSS.xlsx

ðŸ“ data/output/                 # Archivos finales procesados
â””â”€ archivo_final_YYYYMMDD_HHMMSS.xlsx

ðŸ“ logs/                        # Logs de ejecuciÃ³n
â”œâ”€ proceso_YYYYMMDD.log         # Log general
â””â”€ proceso_YYYYMMDD_errors.log  # Solo errores
```

### 4.2 Formato de Salida

**Archivo Principal**: [Nombre]
- **Formato**: Excel / CSV / PDF / JSON
- **UbicaciÃ³n**: [Ruta]
- **Nombre**: [PatrÃ³n de nombre]
- **Estructura**:
  - Sheet/SecciÃ³n 1: [Contenido]
  - Sheet/SecciÃ³n 2: [Contenido]

**Columnas/Campos**:
| Campo | Tipo | DescripciÃ³n | Obligatorio |
|-------|------|-------------|-------------|
| Campo1 | string | DescripciÃ³n | SÃ­ |
| Campo2 | integer | DescripciÃ³n | No |
| Campo3 | date | DescripciÃ³n | SÃ­ |

### 4.3 Notificaciones (si aplica)

- [ ] Â¿Se envÃ­a email al completar?
  - Destinatarios: [emails]
  - Asunto: [template]
  - Contenido: [quÃ© incluir]
- [ ] Â¿Se actualiza algÃºn sistema?
- [ ] Â¿Se genera algÃºn reporte adicional?

---

## 5. Requisitos TÃ©cnicos

### 5.1 TecnologÃ­as Requeridas

**Lenguaje**: Python 3.x (especificar versiÃ³n)

**LibrerÃ­as Python**:
```txt
# Requirements principales
libreria1>=2.0.0
libreria2>=1.5.0
pandas>=1.3.0
openpyxl>=3.0.0  # Si maneja Excel
pywin32>=301     # Si conecta a SAP GUI
requests>=2.25.0 # Si consume APIs
```

**Sistemas Externos**:
- Sistema 1: [Nombre y versiÃ³n]
- Sistema 2: [Nombre y versiÃ³n]

### 5.2 ConfiguraciÃ³n

**Variables de Entorno** (`.env`):
```bash
# Conexiones
SISTEMA_URL=https://...
SISTEMA_USER=usuario
SISTEMA_PASSWORD=password

# Rutas
DIR_INPUT=C:\path\to\input
DIR_OUTPUT=C:\path\to\output
DIR_TEMPLATES=C:\path\to\templates

# ConfiguraciÃ³n
MAX_RETRIES=3
TIMEOUT_SECONDS=300
DEBUG_MODE=false
```

### 5.3 Infraestructura

**Servidor/MÃ¡quina**:
- SO: Windows / Linux
- RAM mÃ­nima: X GB
- Disco: Y GB disponible
- Acceso a red: [requisitos]

**Permisos Necesarios**:
- [ ] Lectura en [ruta/sistema]
- [ ] Escritura en [ruta/sistema]
- [ ] EjecuciÃ³n de [proceso]
- [ ] Acceso a [API/servicio]

---

## 6. Casos de Uso

### Caso de Uso 1: [Nombre]

**Actor**: [Usuario tipo X]

**Precondiciones**:
- CondiciÃ³n 1 debe estar cumplida
- CondiciÃ³n 2 debe estar cumplida

**Flujo Principal**:
1. Usuario hace X
2. Sistema valida Y
3. Sistema procesa Z
4. Sistema genera W
5. Sistema notifica resultado

**Postcondiciones**:
- Estado del sistema despuÃ©s
- Archivos generados
- Notificaciones enviadas

**Flujos Alternativos**:
- **3a. Si validaciÃ³n falla**:
  - Sistema muestra error
  - Sistema registra en log
  - Sistema termina ejecuciÃ³n

**Flujos de ExcepciÃ³n**:
- **2e. Si conexiÃ³n falla**:
  - Sistema reintenta 3 veces
  - Si falla despuÃ©s de 3 intentos, notifica error
  - Se registra en log de errores

---

### Caso de Uso 2: [Nombre]

[Repetir estructura]

---

## 7. Casos de Prueba (Criterios de AceptaciÃ³n)

### Test Case 1: [Escenario Normal - Happy Path]

**Objetivo**: Validar que el proceso completo funciona correctamente

**Precondiciones**:
- Sistema disponible
- Datos de prueba preparados
- Credenciales vÃ¡lidas

**Pasos**:
1. Ejecutar script con parÃ¡metros vÃ¡lidos
2. Verificar conexiÃ³n exitosa
3. Validar procesamiento de datos
4. Verificar archivo de salida generado
5. Validar contenido del archivo

**Resultado Esperado**:
- Proceso completa sin errores
- Archivo generado en ubicaciÃ³n correcta
- Datos en archivo son correctos
- Log no contiene errores

**Criterio de AceptaciÃ³n**: âœ… Todos los pasos se completan exitosamente

---

### Test Case 2: [Escenario con Error]

**Objetivo**: Validar manejo de error cuando [condiciÃ³n]

**Pasos**:
1. [Simular condiciÃ³n de error]
2. Ejecutar proceso
3. Verificar que error se maneja correctamente

**Resultado Esperado**:
- Sistema detecta el error
- Sistema registra error en log
- Sistema no genera archivo corrupto
- Sistema notifica error (si aplica)

**Criterio de AceptaciÃ³n**: âœ… Error se maneja sin crashes

---

### Test Case 3: [Escenario Edge Case]

[Repetir estructura]

---

## 8. Arquitectura de Componentes

### 8.1 Vista General

```
â”Œâ”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚         MÃ“DULO ORQUESTADOR              â”‚
â”‚    (modules/main_processor/)            â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚                    â”‚
    â”Œâ”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”         â”Œâ”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”
    â”‚ Servicio1â”‚         â”‚ Servicio2â”‚
    â”‚ (connect)â”‚         â”‚ (extract)â”‚
    â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜         â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”˜
         â”‚                    â”‚
    â”Œâ”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”
    â”‚   Servicio3 (transform)       â”‚
    â””â”€â”€â”€â”€â”¬â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
         â”‚
    â”Œâ”€â”€â”€â”€â–¼â”€â”€â”€â”€â”€â”
    â”‚ Servicio4â”‚
    â”‚ (output) â”‚
    â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

### 8.2 Componentes Principales

#### MÃ³dulo: [Nombre del MÃ³dulo]
- **UbicaciÃ³n**: `modules/<nombre>/`
- **Responsabilidad**: [QuÃ© hace]
- **Servicios que usa**:
  - Servicio 1
  - Servicio 2
  - ...

#### Servicio: [Nombre del Servicio]
- **UbicaciÃ³n**: `services/<nombre>/`
- **Responsabilidad**: [QuÃ© hace]
- **Inputs**: [QuÃ© recibe]
- **Outputs**: [QuÃ© produce]
- **Dependencias**: [LibrerÃ­as externas]

---

### 8.3 Skills de IA Necesarios

**Skills del Proyecto** (a documentar en `ai_global/skills/` si no existen):
- `<dominio>_<accion>_skill`: [DescripciÃ³n]
- `<dominio>_<accion>_skill`: [DescripciÃ³n]
- ...

**Agentes que los usarÃ¡n**:
- Picoro: [skills para anÃ¡lisis/diseÃ±o]
- Goku: [skills para implementaciÃ³n]
- Vegeta: [skills para optimizaciÃ³n]
- Bulma: [skills para testing]

---

## 9. Decisiones TÃ©cnicas Pendientes

### DecisiÃ³n 1: [Tema a decidir]

**Opciones**:

**OpciÃ³n A**: [Nombre]
- **Pros**:
  - âœ… Ventaja 1
  - âœ… Ventaja 2
- **Contras**:
  - âŒ Desventaja 1
  - âŒ Desventaja 2
- **Esfuerzo**: Alto / Medio / Bajo

**OpciÃ³n B**: [Nombre]
- **Pros**:
  - âœ… Ventaja 1
  - âœ… Ventaja 2
- **Contras**:
  - âŒ Desventaja 1
  - âŒ Desventaja 2
- **Esfuerzo**: Alto / Medio / Bajo

**RecomendaciÃ³n Inicial**: [OpciÃ³n X] por [razones]

**InvestigaciÃ³n Requerida**: [QuÃ© necesita Picoro investigar]

---

### DecisiÃ³n 2: [Tema a decidir]

[Repetir estructura]

---

## 10. Dependencias y Restricciones

### Dependencias
- **Sistemas Externos**:
  - Sistema X debe estar disponible
  - API Y debe responder en < 5 segundos
  
- **Archivos/Datos**:
  - Archivo plantilla debe existir en [ubicaciÃ³n]
  - Datos de entrada deben estar actualizados
  
- **Otros Proyectos**:
  - [Si depende de otro proyecto, especificar]

### Restricciones
- **TÃ©cnicas**:
  - Debe ejecutarse en Windows (por SAP GUI)
  - No puede usar mÃ¡s de X GB de RAM
  
- **Negocio**:
  - Debe completarse en menos de Y minutos
  - No puede ejecutarse entre [horario]
  
- **Seguridad**:
  - Credenciales deben estar en .env (no hardcoded)
  - Logs no deben contener informaciÃ³n sensible

---

## 11. Plan de ImplementaciÃ³n

### EstimaciÃ³n de Esfuerzo

| Fase | Tareas | EstimaciÃ³n | Asignado |
|------|--------|-----------|----------|
| FASE 2.3 (InvestigaciÃ³n) | Picoro investiga tecnologÃ­as | X horas | Picoro |
| FASE 2.4 (DiseÃ±o) | Picoro diseÃ±a arquitectura | Y horas | Picoro |
| FASE 3 (ImplementaciÃ³n) | Goku implementa servicios | Z horas | Goku |
| FASE 3 (OptimizaciÃ³n) | Vegeta optimiza cÃ³digo | W horas | Vegeta |
| FASE 3 (Testing) | Bulma crea tests | V horas | Bulma |
| **TOTAL** | | **## horas** | |

### Tickets a Generar (Provisionales)

Una vez que Picoro complete el diseÃ±o, se generarÃ¡n aproximadamente:

- TKT-<CODE>-001: Setup inicial del proyecto
- TKT-<CODE>-002: Implementar servicio [nombre]
- TKT-<CODE>-003: Implementar servicio [nombre]
- TKT-<CODE>-004: Implementar servicio [nombre]
- TKT-<CODE>-005: Implementar mÃ³dulo orquestador
- TKT-<CODE>-006: Crear tests de integraciÃ³n
- TKT-<CODE>-007: DocumentaciÃ³n y deployment

---

## 12. Riesgos

| Riesgo | Probabilidad | Impacto | MitigaciÃ³n |
|--------|--------------|---------|------------|
| Sistema externo no disponible | Media | Alto | Implementar retry logic + notificaciones |
| Cambio en estructura de datos | Baja | Alto | ValidaciÃ³n robusta de estructura + tests |
| Performance insuficiente | Media | Medio | OptimizaciÃ³n + procesamiento por lotes |
| Credenciales invÃ¡lidas | Baja | Alto | ValidaciÃ³n previa + manejo de errores |

---

## 13. DocumentaciÃ³n de Referencia

### Scripts Existentes (si aplica)
- `docs/scripts/script_referencia.vbs`: [DescripciÃ³n de quÃ© hace]
- [Otro script]: [DescripciÃ³n]

### DocumentaciÃ³n Externa
- [Sistema X API Docs](url): DocumentaciÃ³n del API
- [LibrerÃ­a Y Docs](url): Manual de uso
- [SAP TransacciÃ³n Z](url): DocumentaciÃ³n SAP

### Knowledge Base (a generar por Picoro)
Picoro deberÃ¡ crear durante FASE 2.3:
- `knowledge/local/01_<tema>_research.md`
- `knowledge/local/02_<tema>_patterns.md`
- `knowledge/local/03_<tema>_decisions.md`
- `knowledge/remote/<sistema>_api_reference.md`

---

## 14. Aprobaciones

### Desarrollador
- **Nombre**: [Nombre]
- **Fecha**: YYYY-MM-DD
- **Comentarios**: [Comentarios tÃ©cnicos]
- **AprobaciÃ³n**: âœ… / â³ Pendiente / âŒ Rechazado

### Tech Lead / Arquitecto
- **Nombre**: [Nombre]
- **Fecha**: YYYY-MM-DD
- **Comentarios**: [Comentarios de arquitectura]
- **AprobaciÃ³n**: âœ… / â³ Pendiente / âŒ Rechazado

### Usuario / Cliente / Product Owner
- **Nombre**: [Nombre]
- **Fecha**: YYYY-MM-DD
- **Comentarios**: [Feedback de negocio]
- **AprobaciÃ³n**: âœ… / â³ Pendiente / âŒ Rechazado

---

## 15. Control de Cambios

| VersiÃ³n | Fecha | Autor | Cambios |
|---------|-------|-------|---------|
| 1.0 | YYYY-MM-DD | [Nombre] | CreaciÃ³n inicial |
| 1.1 | YYYY-MM-DD | [Nombre] | [DescripciÃ³n de cambios] |

---

## 16. Notas Adicionales

### Observaciones del Desarrollador
[Cualquier observaciÃ³n tÃ©cnica importante que no encaje en otras secciones]

### Preguntas Pendientes al Usuario
- [ ] Pregunta 1
- [ ] Pregunta 2
- [ ] Pregunta 3

### Decisiones Tomadas Durante EspecificaciÃ³n
- **[Fecha]**: DecidiÃ³ usar X en lugar de Y porque [razÃ³n]
- **[Fecha]**: AcordÃ³ con usuario que [decisiÃ³n]

---

**PrÃ³ximos Pasos**:
1. âœ… Aprobar esta especificaciÃ³n
2. â³ Picoro investiga y crea knowledge base (FASE 2.3)
3. â³ Picoro diseÃ±a arquitectura y crea workflow_agents.yaml (FASE 2.4)
4. â³ Crear tickets internos de desarrollo
5. â³ Iniciar FASE 3 (ImplementaciÃ³n)

---

**Creado por**: [Nombre]  
**Fecha**: YYYY-MM-DD  
**Ãšltima actualizaciÃ³n**: YYYY-MM-DD  
**VersiÃ³n**: 1.0

