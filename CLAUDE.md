# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Proposito
Repositorio de prototipos de paginas web. Cada prototipo es un sitio independiente dentro de su propia carpeta.

## Estructura del repositorio
```
Prototipos/
  CLAUDE.md               # Este archivo (instrucciones globales)
  .gitignore
  <NombrePrototipo>/      # Cada prototipo en su propia carpeta
    index.html             # Pagina principal
    css/                   # Estilos
    js/                    # Scripts
    assets/                # Imagenes, iconos, fuentes
    assets/images/         # Imagenes optimizadas para el sitio
    imagenes/              # Imagenes originales proporcionadas por el usuario
    specs/                 # Especificaciones del prototipo
    .github/workflows/     # Deploy especifico (si aplica)
```

## Convenciones globales para prototipos
- **Tech stack por defecto**: HTML5 + CSS3 + Vanilla JS (sin frameworks ni build tools)
- **Idioma del contenido**: Español. Todos los textos visibles DEBEN incluir tildes (á,é,í,ó,ú) y ñ. Excepciones: clases CSS, IDs, data-attributes y valores de formulario (value="") sin tildes por compatibilidad técnica. Codificación UTF-8.
- **HTML semantico**: header, nav, main, section, footer
- **CSS**: custom properties para colores y tipografia, BEM-like naming
- **Responsive**: mobile-first, breakpoints en 768px (tablet) y 1200px (desktop)
- **Graficos**: SVG preferido sobre imagenes raster
- **Imagenes**: cada prototipo tendra una carpeta `imagenes/` con fotos proporcionadas por el usuario. Al generar el sitio, optimizar (JPEG 82%, max 1200x800 con Pillow) y copiar a `assets/images/`. Usar `loading="lazy"` en imagenes debajo del fold.
- **Sin dependencias**: no npm, no build tools, abrir `index.html` directamente

## Comandos utiles
- Abrir prototipo: `start <NombrePrototipo>/index.html` (Windows)
- Servidor local: `npx serve <NombrePrototipo>` o `cd <NombrePrototipo> && python -m http.server 8000`
- No hay build, lint, ni tests configurados

## Como crear un nuevo prototipo
1. Crear carpeta con nombre descriptivo (PascalCase, sin espacios)
2. Dentro: `index.html`, `css/`, `js/`, `assets/`
3. Si hay especificaciones, crear `specs/` dentro de la carpeta
4. Cada prototipo debe ser autocontenido (todos sus archivos dentro de su carpeta)

## Prototipos activos

### Antiguedades/
Pagina web para G.A. Antiguedades, negocio espanol de antiguedades. Single-page con Hero, Servicios y Contacto. Paleta: tonos oscuros (#1A1A1A), oro (#B8860B, #D4AF37), burdeos (#6B1024), fondo pergamino (#FAF6F0). Tipografia: Cormorant Garamond (titulos), Lato (cuerpo), Cinzel (decorativo). Formulario de contacto solo valida en cliente (no envia datos). Deploy en GitHub Pages via Actions.

### VoltPro/
Pagina web para VoltPro Instalaciones, empresa argentina de servicios electricos y armado de tableros. Multi-seccion: Hero, Servicios (6), Galeria de Proyectos, Sobre Nosotros, Contacto. Paleta: azul electrico (#0056B3), azul oscuro (#002244), ambar (#F5A623), gris claro (#F4F6F8). Tipografia: Montserrat (titulos), Open Sans (cuerpo), Rajdhani (numeros/datos). Formulario con validacion de telefono argentino. Galeria usa gradientes CSS como placeholders.

### LuxMist/
Landing page B2B premium para LuxMist, empresa canadiense (Quebec) de maquinas automaticas de perfume para bares/pubs/discotecas. Objetivo: convertir duenos de locales en clientes (lead generation). Bilingue FR/EN con toggle sin recarga (data-attributes + JS). Estetica lujo oscuro: negro (#0A0A0A), dorado (#C9A84C), platino (#B8B8B8). Tipografia: Playfair Display (titulos), Inter (cuerpo), DM Sans (numeros). Secciones de conversion: Hero, Beneficios, Ingresos Potenciales ($2000/mes), Proceso, Contacto + WhatsApp. Formulario solo valida en cliente.

### ElRanchito/
Pagina web para restaurante El Ranchito. Diseno rustico-moderno: terracota (#BF5B21), crema (#FDF6EC), dorado (#C8A96E), marron (#3E2723). Tipografia: Playfair Display (titulos), Nunito (cuerpo), Josefin Sans (precios). Menu con tabs (5 categorias, 20 platos). Reservas de mesas (formulario con fecha/hora/comensales). Cotizador de eventos con calculo en tiempo real (tipo evento, invitados, servicios con checkboxes). WhatsApp flotante, CTAs en cada seccion.

### CieloSur/
Pagina web para CieloSur Viajes, agencia de viajes argentina. Paleta: azul profundo (#0C4A6E), naranja (#F97316), celeste (#0EA5E9), fondo claro (#F8FAFC). Tipografia: Poppins (titulos), Open Sans (cuerpo). Secciones: Hero con stats, Destinos (6 argentinos con precios), Servicios (6), Sobre Nosotros, Testimonios (carrusel), Contacto con formulario (validacion telefono argentino). Paginas legales: Terminos, Privacidad, Aviso Legal (legal/). WhatsApp flotante + boton en header. SEO basico: meta tags, Open Graph, Schema.org TravelAgency (JSON-LD). Animaciones con Intersection Observer.
