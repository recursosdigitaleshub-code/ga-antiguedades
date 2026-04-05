# Especificaciones del Proyecto: G.A. Antigüedades

## 1. Visión General
Página web estática para establecer la presencia online de G.A. Antigüedades, un negocio español de antigüedades. El sitio debe transmitir elegancia, confianza y profesionalismo.

## 2. Objetivos
- Establecer presencia online profesional
- Facilitar el contacto con clientes potenciales
- Transmitir confianza y experiencia en el sector
- Compatibilidad total con dispositivos móviles

## 3. Alcance
### Incluido
- Landing page con hero section impactante
- Sección de servicios (3 pilares de valor)
- Sección de contacto con formulario, datos y mapa
- Diseño responsive (móvil, tablet, desktop)
- Logo SVG y favicon
- SEO básico (meta tags, Schema.org)

### Excluido
- E-commerce / carrito de compras
- Sección "Sobre Nosotros"
- Galería de artículos / fotos
- Backend / base de datos
- Sistema de autenticación

## 4. Arquitectura
### Tech Stack
- HTML5 semántico
- CSS3 con custom properties
- Vanilla JavaScript (ES6+)
- Google Fonts (CDN)
- Sin frameworks, sin dependencias, sin build tools

### Estructura de la página
1. **Navbar** (sticky): Logo + navegación (Inicio, Servicios, Contacto)
2. **Hero** (100vh): Título, tagline, CTA
3. **Servicios** (3 columnas): Autenticidad, Tasación, Atención
4. **Contacto** (2 columnas): Formulario + Información/Mapa
5. **Footer**: Copyright, redes sociales

## 5. Diseño Visual
### Paleta
| Color | Hex | Uso |
|-------|-----|-----|
| Ebony | #1A1A1A | Texto, navbar, fondo contacto |
| Oro Antiguo | #B8860B | Títulos, bordes decorativos |
| Burdeos | #6B1024 | Botones, enlaces, acentos |
| Pergamino | #FAF6F0 | Fondo principal |
| Crema | #F0E6D4 | Fondo servicios |
| Gris Cálido | #5C5650 | Texto secundario |
| Oro Suave | #D4AF37 | Hovers, decoraciones |

### Tipografía
- Títulos: Cormorant Garamond (400, 500, 600, 700)
- Cuerpo: Lato (300, 400, 700)
- Decorativo: Cinzel (400, 700)

### Responsive Breakpoints
- Móvil: < 768px (diseño base, mobile-first)
- Tablet: 768px - 1199px
- Desktop: >= 1200px

## 6. Secciones Detalladas

### 6.1 Navbar
- Fija en la parte superior (sticky)
- Logo SVG + nombre "G.A. Antigüedades"
- Links: Inicio | Servicios | Contacto
- Menú hamburguesa en móvil (< 768px)
- Efecto de fondo al hacer scroll

### 6.2 Hero Section
- Altura completa (100vh)
- Fondo oscuro con gradiente elegante
- Título: "G.A. Antigüedades" (Cormorant Garamond)
- Subtítulo: "Elegancia que trasciende el tiempo" (Cinzel)
- Botón CTA: "Contáctenos" → smooth scroll a contacto
- Divider decorativo SVG (flourish)

### 6.3 Servicios
- Fondo crema cálido (#F0E6D4)
- Título de sección: "Nuestros Servicios"
- 3 tarjetas en fila (stack en móvil):
  - Autenticidad Garantizada (icono escudo/check)
  - Tasación Experta (icono lupa/documento)
  - Atención Personalizada (icono manos/corazón)
- Cada tarjeta: icono SVG + título + descripción breve

### 6.4 Contacto
- Fondo oscuro (#1A1A1A) para contraste
- Título: "Contacto"
- Layout 2 columnas (stack en móvil):
  - **Formulario**: Nombre, Email, Teléfono, Mensaje, Botón enviar
  - **Info**: Dirección, teléfono, email, horario, Google Maps embebido
- Validación de formulario en cliente (campos requeridos, formato email)

### 6.5 Footer
- Fondo oscuro
- "G.A. Antigüedades" + © 2026
- Iconos de redes sociales (placeholder links)
- Flourish decorativo

## 7. SEO y Metadatos
- Title tag: "G.A. Antigüedades | Elegancia que trasciende el tiempo"
- Meta description en español
- Open Graph tags para redes sociales
- Schema.org LocalBusiness structured data
- lang="es" en el HTML
- Favicon SVG

## 8. Accesibilidad
- Contraste mínimo 4.5:1 (WCAG AA)
- HTML semántico con landmarks (nav, main, section)
- ARIA labels donde sea necesario
- Navegación por teclado funcional
- Alt text en imágenes/iconos decorativos

## 9. Rendimiento
- Sin dependencias externas (excepto Google Fonts)
- SVGs inline o como archivos pequeños
- CSS optimizado con custom properties
- JavaScript mínimo y diferido (defer)
- Sin imágenes raster (todo SVG)
