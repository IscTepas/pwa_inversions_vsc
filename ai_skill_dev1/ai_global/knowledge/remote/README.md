# ðŸŒ Knowledge Remote

Referencias externas a documentaciÃ³n oficial, APIs, y herramientas.

---

## ðŸŽ¯ PropÃ³sito

Mantener referencias organizadas a documentaciÃ³n oficial, APIs externas, y recursos de aprendizaje que sustentan las decisiones del proyecto.

---

## ðŸ“‹ Tipos de Referencias

### 1. DocumentaciÃ³n Oficial de APIs

**Ejemplo**:
```markdown
# ibkr_api_reference.md

**Tipo**: DocumentaciÃ³n Oficial
**URL**: https://interactivebrokers.github.io/tws-api/
**Acceso**: PÃºblico
**Ãšltima actualizaciÃ³n**: 2026-03-03

## Puntos Clave
- reqMktData(): Suscribirse a precios reales
- placeOrder(): Enviar Ã³rdenes
- reqOptionChain(): Obtener cadena de opciones
- Rate limits: 50 solicitudes simultÃ¡neas
```

### 2. CÃ³digo Interno Referencial

**Ejemplo**:
```markdown
# internal_reference_trading_strategy.md

**Tipo**: CÃ³digo Interno (de proyecto anterior similar)
**UbicaciÃ³n**: (si existe en repositorio)
**Relevancia**: PatrÃ³n de gestiÃ³n de riesgo reutilizable

## PatrÃ³n
```typescript
function manageTradingRisk(position, stop_loss, take_profit) {
  // LÃ³gica de riesgo comprobada
}
```

### 3. NotebookLM (AnÃ¡lisis Profundo)

**Ejemplo**:
```markdown
# notebooklm_trading_strategies.md

**Tipo**: NotebookLM (Google AI)
**URL**: https://notebooklm.google.com/notebook/<id>
**Acceso**: Requiere cuenta de Google

## Preguntas Respondidas
1. Â¿QuÃ© indicadores combinar para mÃ¡xima confianza?
2. Â¿CÃ³mo detectar posicionamiento institucional?
3. Â¿CuÃ¡l es la mejor frecuencia de escaneo?

## Hallazgos Clave
- RSI(14) + MACD + Bollinger como triple confirmaciÃ³n
- Analizar Open Interest + Volume en opciones
- Escaneo cada 1 minuto para intraday
```

### 4. Tutoriales y GuÃ­as

**Ejemplo**:
```markdown
# tradingview_widgets_setup_guide.md

**Tipo**: Tutorial / GuÃ­a Oficial
**URL**: https://tradingview.github.io/lightweight-charts/
**Fecha**: 2026-02-20

## InstalaciÃ³n
```bash
npm install lightweight-charts
```

## Pasos Clave
1. Crear chart container
2. Agregar series de datos
3. Actualizar en tiempo real
```

---

## ðŸ“ Estructura de Archivo Remote

**Template obligatorio**:
```markdown
# <nombre>_reference.md

**Tipo**: [DocumentaciÃ³n Oficial | Tutorial | NotebookLM | API Reference | CÃ³digo Interno]
**URL**: [enlace directo]
**Acceso**: [PÃºblico | Requiere cuenta | API Key]
**Fecha creaciÃ³n**: YYYY-MM-DD
**Ãšltima verificaciÃ³n**: YYYY-MM-DD

## Resumen
[Breve descripciÃ³n y relevancia para proyecto]

## Puntos Clave
- Punto 1
- Punto 2
- Punto 3

## AplicaciÃ³n en Proyecto
[CÃ³mo se usa en pwa_inversions_team5]

## Relacionado con
- Knowledge local: 01_*.md
- Tickets: TKT-INVRFIC-###
- EspecificaciÃ³n: SPECIFICATION.md
```

---

## ðŸ”— ConvenciÃ³n de Referencias

Se referencia en:
- **Tickets**: `knowledge/remote/ibkr_api_reference.md`
- **CÃ³digo**: Comentarios `FIC` pueden citar documentaciÃ³n
- **EspecificaciÃ³n**: Secciones de Arquitectura citan referencias

---

## âœ… Checklist de Contenido

Cuando Picoro completa FASE 2.3, debe tener:

- [ ] URLs oficiales de todas las APIs a usar
- [ ] Notas clave de cada API
- [ ] AplicaciÃ³n documentada
- [ ] NotebookLM creado (si aplica) y URL incluida
- [ ] CÃ³digo interno referencial incluido (si existe)
- [ ] Todos los archivos completos sin pendientes

