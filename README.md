# 🍽️ Comida Gallega — Galería de Platos con React + Vite ⚡️

**Descripción**

Este proyecto es una **galería interactiva de platos típicos de Galicia** desarrollada con **React** y **Vite**. Presenta una colección de tarjetas (cards) con información sobre la gastronomía gallega tradicional, demostrando buenas prácticas en React moderno y herramientas de construcción rápida con Vite.

---

## 🚀 Características

- Proyecto creado con Vite (arranque ultrarrápido, HMR y build optimizado).
- Arquitectura modular basada en componentes React reutilizables.
- Componente `Tarjeta` para mostrar platos de forma estilizada.
- Estilos CSS moderno y responsive.
- Fácil de extender con nuevos platos y categorías.

---

## 📦 Tecnologías

- React 19
- Vite
- ESLint (configuración básica)

---

## 🛠️ Instalación y uso

Requisitos: Node.js (16+ recomendado) y npm o yarn.

1. Instalar dependencias:

```bash
npm install
# o
# yarn
```

2. Ejecutar en modo desarrollo:

```bash
npm run dev
```

Abre http://localhost:5173 (o la dirección que indique Vite) para ver la app.

3. Compilar para producción:

```bash
npm run build
```

4. Previsualizar la build:

```bash
npm run preview
```

5. Ejecutar linter:

```bash
npm run lint
```

---

## 📁 Estructura del proyecto (resumen)

- `index.html` — entrada HTML de la aplicación
- `src/main.jsx` — punto de entrada React
- `src/App.jsx` — componente raíz de la aplicación
- `src/components/tarjeta/Tarjeta.jsx` — componente reutilizable de tarjeta de plato
- `src/components/tarjeta/Tarjeta.css` — estilos del componente Tarjeta
- `src/styles/` — estilos compartidos y globales
- `src/assets/img/` — imágenes de platos gallegos
- `src/index.css` — estilos globales
- `src/App.css` — estilos específicos de App
- `package.json` — dependencias y scripts npm


## ✏️ Cómo extender el proyecto

- **Agregar nuevos platos:** Crea instancias adicionales del componente `Tarjeta` en `App.jsx` con diferentes props (nombre, descripción, imagen).
- **Añadir imágenes:** Coloca nuevas imágenes en `src/assets/img/` y referenciarlas en los componentes.
- **Personalizar estilos:** Modifica `Tarjeta.css`, `App.css` o `index.css` según tus necesidades de diseño.
- **Crear categorías:** Agrupa platos por categorías (entrantes, platos principales, postres, bebidas).

## ✅ Convenciones y buenas prácticas

- Los nombres de componentes están en **PascalCase** (ej.: `Tarjeta.jsx`).
- Los estilos CSS están colocalizados con sus componentes.
- Se usa **ESLint** para mantener consistencia de código.
- Considera agregar **testing** (Vitest/React Testing Library) para componentes críticos.
- Mantén componentes pequeños, simples y reutilizables.

## 📄 Licencia
CC BY
