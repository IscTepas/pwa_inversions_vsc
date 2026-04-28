# 🌐 Knowledge Remote

Referencias externas a documentación oficial, APIs, y herramientas.

---

## 🎯 Propósito

Mantener referencias organizadas a documentación oficial, APIs externas, y recursos de aprendizaje que sustentan las decisiones del proyecto.

---

## 📋 Tipos de Referencias

### 1. Documentación Oficial de APIs

**Ejemplo**:
```markdown
# ibkr_api_reference.md

**Tipo**: Documentación Oficial
**URL**: https://interactivebrokers.github.io/tws-api/
**Acceso**: Público
**Última actualización**: 2026-03-03

## Puntos Clave
- reqMktData(): Suscribirse a precios reales
- placeOrder(): Enviar órdenes
- reqOptionChain(): Obtener cadena de opciones
- Rate limits: 50 solicitudes simultáneas
```

### 2. Código Interno Referencial

**Ejemplo**:
```markdown
# internal_reference_trading_strategy.md

**Tipo**: Código Interno (de proyecto anterior similar)
**Ubicación**: (si existe en repositorio)
**Relevancia**: Patrón de gestión de riesgo reutilizable

## Patrón
```typescript
function manageTradingRisk(position, stop_loss, take_profit) {
  // Lógica de riesgo comprobada
}
```

### 3. NotebookLM (Análisis Profundo)

**Ejemplo**:
```markdown
# notebooklm_trading_strategies.md

**Tipo**: NotebookLM (Google AI)
**URL**: https://notebooklm.google.com/notebook/<id>
**Acceso**: Requiere cuenta de Google

## Preguntas Respondidas
1. ¿Qué indicadores combinar para máxima confianza?
2. ¿Cómo detectar posicionamiento institucional?
3. ¿Cuál es la mejor frecuencia de escaneo?

## Hallazgos Clave
- RSI(14) + MACD + Bollinger como triple confirmación
- Analizar Open Interest + Volume en opciones
- Escaneo cada 1 minuto para intraday
```

### 4. Tutoriales y Guías

**Ejemplo**:
```markdown
# tradingview_widgets_setup_guide.md

**Tipo**: Tutorial / Guía Oficial
**URL**: https://tradingview.github.io/lightweight-charts/
**Fecha**: 2026-02-20

## Instalación
```bash
npm install lightweight-charts
```

## Pasos Clave
1. Crear chart container
2. Agregar series de datos
3. Actualizar en tiempo real
```

---

## 📝 Estructura de Archivo Remote

**Template obligatorio**:
```markdown
# <nombre>_reference.md

**Tipo**: [Documentación Oficial | Tutorial | NotebookLM | API Reference | Código Interno]
**URL**: [enlace directo]
**Acceso**: [Público | Requiere cuenta | API Key]
**Fecha creación**: YYYY-MM-DD
**Última verificación**: YYYY-MM-DD

## Resumen
[Breve descripción y relevancia para proyecto]

## Puntos Clave
- Punto 1
- Punto 2
- Punto 3

## Aplicación en Proyecto
[Cómo se usa en pwa_inversions_drfic]

## Relacionado con
- Knowledge local: 01_*.md
- Tickets: TKT-INVRFIC-###
- Especificación: SPECIFICATION.md
```

---

## 🔗 Convención de Referencias

Se referencia en:
- **Tickets**: `knowledge/remote/ibkr_api_reference.md`
- **Código**: Comentarios `FIC` pueden citar documentación
- **Especificación**: Secciones de Arquitectura citan referencias

---

## ✅ Checklist de Contenido

Cuando Picoro completa FASE 2.3, debe tener:

- [ ] URLs oficiales de todas las APIs a usar
- [ ] Notas clave de cada API
- [ ] Aplicación documentada
- [ ] NotebookLM creado (si aplica) y URL incluida
- [ ] Código interno referencial incluido (si existe)
- [ ] Todos los archivos completos sin pendientes
