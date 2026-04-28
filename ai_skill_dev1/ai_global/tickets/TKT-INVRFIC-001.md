# TKT-INVRFIC-001: Setup Base del Proyecto + Estructura SRC

## 📋 Metadata

| Campo | Valor |
|-------|-------|
| **ID** | TKT-INVRFIC-001 |
| **Tipo** | Infrastructure / Setup |
| **Prioridad** | 🔴 Crítica |
| **Estado** | 🆕 Abierto |
| **Proyecto** | pwa_inversions_drfic (v1.0) |
| **Creado** | 2026-04-28 |
| **Asignado a** | Ciclo: Picoro → Goku → Vegeta → Bulma |

---

## 📝 Descripción

### Contexto
Base del proyecto PWA de inversiones. Debe estar 100% operativo antes de implementar cualquier feature.

### Propósito
Crear estructura base completa: React 18 + TypeScript + Vite + TailwindCSS + Zustand, con directorios organizados según especificación.

### Solución Propuesta
1. Crear directorio `/pwa_inversions_drfic` bajo `projects/pwa/`
2. Inicializar `package.json` con dependencias específicadas en spec v1.0
3. Configurar `vite.config.ts`, `tsconfig.json`, `tailwind.config.ts`
4. Crear estructura SRC según especificación (assets, components, features, services, store, types, utils, styles)
5. Crear `index.html`, `main.tsx`, `App.tsx` básicos
6. Crear `.env.example` con todas las variables necesarias

---

## 🔍 Análisis de Impacto

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

## 🤖 Workflow de Agentes

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
- [ ] Configuración verificada contra spec
- [ ] No hay imports circulares
- [ ] TypeScript strict mode habilitado
- [ ] Paths alias configurados (src/*)

### Bulma valida:
- [ ] `npm install` ejecuta sin errores
- [ ] `npm run dev` lanza servidor Vite correctamente
- [ ] Estructura de carpetas completa según spec

---

## ✅ Criterios de Aceptación

1. ✅ Proyecto corre sin errores: `npm install && npm run dev`
2. ✅ Todos los directorios base existen según estructura SRC
3. ✅ TypeScript compila sin errores en strict mode
4. ✅ TailwindCSS funciona: clase `dark:` aplicable
5. ✅ .env.example tiene todas las variables de spec

---

## 🧾 Evidencia de Validación (Requerida para ✅ Completado)

- [ ] Screenshot: `npm run dev` servidor activo
- [ ] Screenshot: navegador mostrando "Hello PWA Inversions v1.0"
- [ ] Output: `npm run build` completa exitosamente
- [ ] Archivo: `.env.example` completo con todas las vars

---

## 📌 Notas

- Stack fijo: No cambiar React version, Vite, TypeScript sin aprobación
- Dark theme por defecto: CSS vars para colores
- Compatible con metodología AI Skill Development

