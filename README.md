# Estibadores SM — Landing (versión desempaquetada)

Este es el mismo sitio, pero convertido de un único archivo HTML "empaquetado"
(con todo comprimido en base64 dentro de `<script>` tags) a una estructura de
carpetas normal que podés editar directamente.

## Estructura

```
index.html
assets/
  js/
    react.development.js       ← librería React (CDN, sin tocar)
    react-dom.development.js   ← librería ReactDOM (CDN, sin tocar)
    babel.min.js               ← Babel Standalone, transpila el JSX en el navegador
    tailwindcss-browser.js     ← runtime de Tailwind CSS v4 (genera las clases al vuelo)
    tweaks-panel.jsx           ← panel de edición en vivo ("Tweaks")
    icons.jsx                 ← íconos de línea usados en la página
    sections.jsx               ← secciones de la página (hero, etc.)
    sections-2.jsx             ← más secciones (servicios, por qué elegirnos, galería, CTA, footer)
    app.jsx                    ← punto de entrada, arma la página
  fonts/                        ← las tipografías (Teko, Montserrat, JetBrains Mono) en woff2
  images/                       ← todas las fotos (.webp), con nombre original
```

## Cómo editar

- **Textos, secciones, estructura:** editá `assets/js/sections.jsx` y
  `assets/js/sections-2.jsx`. Es JSX normal (React), se transpila en el
  navegador con Babel — no hace falta build ni npm.
- **Colores / estilos generales:** en `index.html`, buscá el bloque
  `<style type="text/tailwindcss"> @theme { ... }` (variables de color y
  fuentes) y el `<style>` de abajo (clases custom como `.hazard`, `.lift`, etc.).
- **Imágenes:** reemplazá los archivos en `assets/images/` manteniendo el mismo
  nombre, o agregá nuevas y referencialas por su `id` en `window.__resources`
  (definido al principio de `index.html`) o directamente con una ruta relativa.
- **Tipografías:** los `@font-face` están arriba de `index.html`, apuntando a
  `assets/fonts/*.woff2`.

## Cómo verlo en el navegador

Los scripts `text/babel` (Babel) hacen una petición para leer el JSX antes de
transformarlo, y algunos navegadores (Chrome sobre todo) bloquean esas
peticiones si abrís el archivo directo por doble clic (`file://`). Para
evitar problemas, levantá un servidor local simple desde esta carpeta:

```bash
python3 -m http.server 8000
```

y abrí `http://localhost:8000` en el navegador. También funciona con
`npx serve`, Live Server de VS Code, o cualquier servidor estático.

## Nota

No hay paso de build: es HTML + JSX que se transpila en vivo con Babel
Standalone, tal como estaba en el archivo original. Podés seguir editando así,
o migrarlo a un proyecto con Vite/Next si en algún momento querés un build
"de verdad" para producción (mejor rendimiento, sin descargar Babel en el
cliente).
