# Casa Dorada Antigüedades - Web

## Descripción
Página web estática para Casa Dorada Antigüedades, negocio español de antigüedades.
Single-page con secciones: Hero, Servicios, Contacto. Sin e-commerce.

## Tech Stack
- HTML5 + CSS3 + Vanilla JavaScript (sin frameworks ni build tools)
- Google Fonts: Cormorant Garamond, Lato, Cinzel
- Abrir `index.html` directamente en el navegador

## Paleta de colores
- Primario oscuro: `#1A1A1A`
- Oro antiguo: `#B8860B`
- Burdeos: `#6B1024`
- Pergamino (fondo): `#FAF6F0`
- Crema cálido: `#F0E6D4`
- Gris cálido: `#5C5650`
- Oro suave: `#D4AF37`

## Tipografía
- Títulos: `Cormorant Garamond` (serif)
- Cuerpo: `Lato` (sans-serif)
- Decorativo: `Cinzel` (serif, mayúsculas)

## Convenciones
- Todo el contenido en español
- CSS: usar custom properties (variables) para colores y tipografía
- HTML: semántico (header, nav, main, section, footer)
- Mobile-first responsive design
- Breakpoints: 768px (tablet), 1200px (desktop)
- BEM-like naming para clases CSS

## Estructura
```
index.html          # Página principal (single-page)
css/styles.css      # Estilos completos
js/main.js          # Interactividad (nav, scroll, form)
assets/             # Logo SVG, favicon, iconos
specs/              # Especificaciones del proyecto
```

## Comandos útiles
- Abrir en navegador: `start index.html` (Windows)
- Servidor local: `npx serve .` o `python -m http.server 8000`
