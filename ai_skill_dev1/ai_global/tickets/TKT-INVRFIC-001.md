# TKT-INVRFIC-001: Setup Base del Proyecto + Estructura SRC

## ðŸ“‹ Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-001 |
| **Tipo** | Infrastructure / Setup |
| **Prioridad** | ðŸ”´ CrÃ­tica |
| **Estado** | ðŸ†• Abierto |
| **Proyecto** | pwa_inversions_team5 (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro â†’ Goku â†’ Vegeta â†’ Bulma |

---

## ðŸ“ DescripciÃ³n

### Contexto
Base del proyecto PWA de inversiones. Debe estar 100% operativo antes de implementar cualquier feature.

### PropÃ³sito
Crear estructura base completa: React 18 + TypeScript + Vite + TailwindCSS + Zustand, con directorios organizados segÃºn especificaciÃ³n.

### SoluciÃ³n Propuesta
1. Crear directorio `/pwa_inversions_team5` bajo `projects/pwa/`
2. Inicializar `package.json` con dependencias especÃ­ficadas en spec v1.0
3. Configurar `vite.config.ts`, `tsconfig.json`, `tailwind.config.ts`
4. Crear estructura SRC segÃºn especificaciÃ³n (assets, components, features, services, store, types, utils, styles)
5. Crear `index.html`, `main.tsx`, `App.tsx` bÃ¡sicos
6. Crear `.env.example` con todas las variables necesarias

---

## ðŸ” AnÃ¡lisis de Impacto

**Archivos a Crear**:
- package.json
- vite.config.ts, tsconfig.json, tailwind.config.ts, vitest.config.ts
- index.html, main.tsx, App.tsx, vite-env.d.ts
- .env.example
- Estructura de directorios: src/assets, src/components, src/features, src/services, src/store, src/types, src/utils, src/styles
- public/favicon.ico

**Archivos a Modificar**: Ninguno

**Componentes Afectados**: Infraestructura base del proyecto

---

## ðŸ¤– Workflow de Agentes

### Picoro analiza:
- [ ] Ticket revisado y estructura especificada entendida
- [ ] Requisitos de dependencias claros
- [ ] Sin dependencias externas bloqueantes

### Goku implementa:
- [ ] Estructura de directorios creada
- [ ] package.json con dependencias exactas de v1.0
- [ ] Configuraciones Vite, TypeScript, TailwindCSS aplicadas
- [ ] Archivos base (index.html, App.tsx, main.tsx) creados
- [ ] .env.example completado

### Vegeta optimiza:
- [ ] ConfiguraciÃ³n verificada contra spec
- [ ] No hay imports circulares
- [ ] TypeScript strict mode habilitado
- [ ] Paths alias configurados (src/*)

### Bulma valida:
- [ ] `npm install` ejecuta sin errores
- [ ] `npm run dev` lanza servidor Vite correctamente
- [ ] Estructura de carpetas completa segÃºn spec

---

## âœ… Criterios de AceptaciÃ³n

1. âœ… Proyecto corre sin errores: `npm install && npm run dev`
2. âœ… Todos los directorios base existen segÃºn estructura SRC
3. âœ… TypeScript compila sin errores en strict mode
4. âœ… TailwindCSS funciona: clase `dark:` aplicable
5. âœ… .env.example tiene todas las variables de spec

---

## ðŸ§¾ Evidencia de ValidaciÃ³n (Requerida para âœ… Completado)

- [ ] Screenshot: `npm run dev` servidor activo
- [ ] Screenshot: navegador mostrando "Hello PWA Inversions v1.0"
- [ ] Output: `npm run build` completa exitosamente
- [ ] Archivo: `.env.example` completo con todas las vars

---

## ðŸ“Œ Notas

- Stack fijo: No cambiar React version, Vite, TypeScript sin aprobaciÃ³n
- Dark theme por defecto: CSS vars para colores
- Compatible con metodologÃ­a AI Skill Development


