# Especificaciones de Despliegue: G.A. Antigüedades

## 1. Plataforma de Hosting
- **Servicio**: GitHub Pages (gratuito)
- **Tipo**: Sitio estático (HTML/CSS/JS sin build)
- **HTTPS**: Incluido automáticamente
- **CDN**: Fastly (incluido en GitHub Pages)

## 2. Repositorio
- **Nombre**: `ga-antiguedades`
- **Visibilidad**: Público (requerido para GitHub Pages gratuito)
- **Rama de producción**: `main`
- **Método de despliegue**: GitHub Actions (artifact-based)

## 3. URL Pública
```
https://<usuario>.github.io/ga-antiguedades/
```

### Dominio personalizado (opcional)
Para usar un dominio propio (ej: `www.ga-antiguedades.es`):
1. Crear archivo `CNAME` en la raíz con el dominio
2. Configurar DNS:
   - Registro A apuntando a:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Registro CNAME: `www` → `<usuario>.github.io`
3. Activar "Enforce HTTPS" en Settings > Pages

## 4. Workflow de Despliegue
Archivo: `.github/workflows/deploy.yml`
- **Trigger**: Push a rama `main`
- **Proceso**: Checkout → Upload artifact → Deploy to Pages
- **Sin build step**: El sitio se sirve directamente desde los archivos

## 5. Checklist Pre-Despliegue
- [ ] Verificar que `index.html` carga correctamente en navegador local
- [ ] Comprobar responsive en 375px, 768px y 1200px+
- [ ] Verificar todos los links de navegación (smooth scroll)
- [ ] Validar formulario de contacto (campos requeridos, formato email)
- [ ] Confirmar que el favicon se muestra correctamente
- [ ] Verificar meta tags SEO (title, description, OG tags)
- [ ] Comprobar Schema.org structured data
- [ ] Verificar que todos los SVGs cargan correctamente
- [ ] Revisar contraste de colores (WCAG AA, ratio 4.5:1)
- [ ] Probar menú hamburguesa en viewport móvil

## 6. Checklist Post-Despliegue
- [ ] Confirmar que la URL pública carga el sitio completo
- [ ] Verificar HTTPS activo (candado en navegador)
- [ ] Probar navegación y scroll en el sitio desplegado
- [ ] Verificar que Google Maps embed funciona
- [ ] Comprobar que el favicon aparece en la pestaña
- [ ] Verificar tiempos de carga (< 3 segundos)
- [ ] Ejecutar audit de Lighthouse (objetivo: 90+ en todas las categorías)

## 7. Formulario de Contacto
**Estado actual**: Solo validación en el cliente (JavaScript). El formulario NO envía datos a ningún servidor.

**Para habilitar envío real** (futuro):
- **Opción 1**: [Formspree](https://formspree.io) — Cambiar `<form>` action a `https://formspree.io/f/XXXX`
- **Opción 2**: [Netlify Forms](https://www.netlify.com/products/forms/) — Migrar a Netlify
- **Opción 3**: Google Forms embed

## 8. SEO Post-Despliegue (opcional)
- Crear `robots.txt` en la raíz permitiendo indexación
- Crear `sitemap.xml` con la URL del sitio
- Registrar sitio en Google Search Console
- Verificar Open Graph con herramientas de depuración de redes sociales

## 9. Mantenimiento
- Los cambios se despliegan automáticamente al hacer push a `main`
- GitHub Pages tiene caché de ~10 minutos; cambios pueden tardar en reflejarse
- Para forzar actualización de caché del navegador: añadir query string a CSS/JS (ej: `styles.css?v=2`)
