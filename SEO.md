# 📊 REPORTE SEO 2026 - CalcU

## 📋 ANÁLISIS ACTUAL

### Estado del Proyecto
- **Propósito**: Proyecto educativo/práctica
- **Dominio**: calcualeatoria.org
- **Entorno**: Desarrollo local (sin despliegue)
- **Stack**: HTML5 + ES6 Modules + CSS Grid

### Condiciones Actuales
- ✅ Semantic HTML5 básico
- ✅ Responsive design (CSS Grid)
- ✅ Mobile-first friendly
- ❌ Sin metadatos SEO completos
- ❌ Sin structured data (Schema)
- ❌ Sin optimización Core Web Vitals
- ❌ Sin accessibility (A11y) completo
- ❌ Sin robots.txt ni sitemap
- ❌ Sin HTTPS configuration

---

## 🎯 CAMBIOS REQUERIDOS

### 1. **METADATOS SEO** (Prioridad: 🔴 Alta)

#### Cambios en `index.html`
```html
<!-- ANTES -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>CalcU</title>

<!-- DESPUÉS -->
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
<meta name="description" content="Calculadora web interactiva que genera números aleatorios (0-100) y permite realizar operaciones matemáticas básicas: suma, resta, multiplicación y división." />
<meta name="keywords" content="calculadora, números aleatorios, matemáticas, suma, resta, multiplicación, división, calculadora online" />
<meta name="author" content="CalcU - calcualeatoria.org" />
<meta name="robots" content="index, follow" />
<meta name="theme-color" content="#e0e0e0" />
<link rel="canonical" href="https://calcualeatoria.org/" />

<!-- Favicon -->
<link rel="icon" type="image/svg+xml" href="favicon.svg">
<link rel="icon" type="image/png" href="favicon.png">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://calcualeatoria.org/" />
<meta property="og:title" content="CalcU - Calculadora de Números Aleatorios" />
<meta property="og:description" content="Genera números aleatorios (0-100) y realiza operaciones matemáticas básicas de forma interactiva." />
<meta property="og:image" content="https://calcualeatoria.org/og-image.png" />
<meta property="og:site_name" content="CalcU" />
<meta property="og:locale" content="es_ES" />

<!-- Twitter Cards -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://calcualeatoria.org/" />
<meta name="twitter:title" content="CalcU - Calculadora de Números Aleatorios" />
<meta name="twitter:description" content="Genera números aleatorios (0-100) y realiza operaciones matemáticas básicas de forma interactiva." />
<meta name="twitter:image" content="https://calcualeatoria.org/twitter-image.png" />

<!-- Title optimizado (50-60 caracteres) -->
<title>CalcU - Calculadora de Números Aleatorios Online</title>
```

---

### 2. **STRUCTURED DATA - SCHEMA MARKUP** (Prioridad: 🔴 Alta)

#### Añadir en `index.html` (dentro de `<head>`)
```html
<!-- JSON-LD Schema para WebSite -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "CalcU",
  "url": "https://calcualeatoria.org",
  "description": "Calculadora web interactiva que genera números aleatorios y realiza operaciones matemáticas básicas",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://calcualeatoria.org/?q={search_term_string}",
    "query-input": "required name=search_term_string"
  },
  "author": {
    "@type": "Person",
    "name": "CalcU Team"
  },
  "inLanguage": "es"
}
</script>

<!-- JSON-LD Schema para SoftwareApplication -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CalcU - Calculadora de Números Aleatorios",
  "applicationCategory": "EducationalApplication",
  "operatingSystem": "Any",
  "description": "Calculadora web interactiva que genera dos números aleatorios (0-100) y permite realizar operaciones de suma, resta, multiplicación y división",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Generación de números aleatorios (0-100)",
    "Operación de suma",
    "Operación de resta",
    "Operación de multiplicación",
    "Operación de división con manejo de errores",
    "Diseño responsive",
    "Interfaz de usuario intuitiva"
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "1"
  }
}
</script>

<!-- JSON-LD Schema para Organization (opcional) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "CalcU",
  "url": "https://calcualeatoria.org",
  "logo": "https://calcualeatoria.org/logo.png",
  "description": "Herramientas educativas interactivas para matemáticas básicas",
  "sameAs": [
    "https://github.com/usuario/calculadora-aleatoria"
  ]
}
</script>
```

---

### 3. **ACCESSIBILITY & A11Y** (Prioridad: 🔴 Alta)

#### Cambios en `index.html`
```html
<!-- ANTES -->
<button class="calculator__button calculator__button--sum" id="btnSumar">
  Sumar
</button>

<!-- DESPUÉS -->
<button 
  class="calculator__button calculator__button--sum" 
  id="btnSumar"
  aria-label="Sumar los dos números aleatorios"
  type="button"
>
  Sumar
</button>

<!-- Añadir a todos los botones -->
<button 
  class="calculator__button calculator__button--sub" 
  id="btnRestar"
  aria-label="Restar los dos números aleatorios"
  type="button"
>
  Restar
</button>

<button 
  class="calculator__button calculator__button--mul" 
  id="btnMultiplicar"
  aria-label="Multiplicar los dos números aleatorios"
  type="button"
>
  Multiplicar
</button>

<button 
  class="calculator__button calculator__button--div" 
  id="btnDividir"
  aria-label="Dividir los dos números aleatorios"
  type="button"
>
  Dividir
</button>

<button 
  class="calculator__button--new" 
  id="btnNuevosNumeros"
  aria-label="Generar nuevos números aleatorios"
  type="button"
>
  Generar nuevos
</button>

<!-- Añadir a los spans de resultados -->
<span 
  class="calculator__result calculator__result--sum" 
  id="resultadoSuma"
  aria-live="polite"
  aria-atomic="true"
  role="status"
></span>

<span 
  class="calculator__result calculator__result--sub" 
  id="resultadoResta"
  aria-live="polite"
  aria-atomic="true"
  role="status"
></span>

<span 
  class="calculator__result calculator__result--mul" 
  id="resultadoMulti"
  aria-live="polite"
  aria-atomic="true"
  role="status"
></span>

<span 
  class="calculator__result calculator__result--div" 
  id="resultadoDiv"
  aria-live="polite"
  aria-atomic="true"
  role="status"
></span>

<!-- Añadir a los números aleatorios -->
<span 
  class="calculator__random-number calculator__random-number--left" 
  id="numIzq"
  aria-label="Número aleatorio izquierdo"
></span>

<span 
  class="calculator__random-number calculator__random-number--right" 
  id="numDer"
  aria-label="Número aleatorio derecho"
></span>
```

#### Cambios en `css/index.css`
```css
/* Añadir al final del archivo */

/* Focus visible para keyboard navigation */
*:focus-visible {
  outline: 3px solid #4a90e2;
  outline-offset: 2px;
}

/* Touch targets mínimo 44x44px para móviles */
@media (max-width: 768px) {
  .calculator__button,
  .calculator__button--new {
    min-width: 44px;
    min-height: 44px;
    padding: 12px 24px;
  }
}

/* Mejorar contraste de colores */
.calculator__button:hover,
.calculator__button--new:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

/* Animaciones suaves para evitar CLS */
.calculator__button {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

/* Skip link para screen readers */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #4a90e2;
  color: white;
  padding: 8px 16px;
  z-index: 100;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 0;
}
```

---

### 4. **CORE WEB VITALS OPTIMIZATION** (Prioridad: 🔴 Alta)

#### Cambios en `index.html`
```html
<!-- Añadir al inicio del <head> -->
<link rel="preconnect" href="https://cdnjs.cloudflare.com" crossorigin>
<link rel="dns-prefetch" href="https://cdnjs.cloudflare.com">

<!-- Inline critical CSS (mover desde css/index.css los estilos críticos) -->
<style>
  /* Critical CSS - Above the fold */
  .calculator {
    height: 100dvh;
    padding: 30px;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(3, auto) repeat(4, 1fr);
    gap: 25px;
  }
  
  html {
    font-family: system-ui, -apple-system, sans-serif;
    background: #e0e0e0;
    color: #333;
  }
  
  .calculator__title {
    text-align: center;
    font-size: 1.8rem;
  }
  
  .calculator__random-numbers {
    display: flex;
    justify-content: center;
    gap: 30px;
  }
</style>

<!-- Cargar CSS de forma asíncrona -->
<link 
  rel="preload" 
  href="css/index.css" 
  as="style" 
  onload="this.onload=null;this.rel='stylesheet'"
>
<noscript><link rel="stylesheet" href="css/index.css"></noscript>

<!-- Cargar JS con defer -->
<script defer src="js/index.js"></script>
```

#### Cambios en `css/index.css`
```css
/* Eliminar reset duplicado (normalize.css ya lo hace) */
/* Eliminar: margin, padding, box-sizing reset */

/* Optimizar CSS */
html {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
  background: #e0e0e0;
  color: #333;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
}

/* Usar will-change con precaución */
.calculator__random-number {
  /* ... estilos existentes ... */
  will-change: transform; /* Solo si hay animaciones */
}

/* Evitar CLS - definir dimensiones explícitas */
.calculator__random-number {
  width: 130px;
  height: 130px;
  contain: layout; /* Ayuda al browser a optimizar */
}
```

#### Cambios en `js/index.js`
```javascript
// Añadir al inicio
// Prevenir layout thrashing
let lastTime = 0;
const animationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame;

// Optimizar event listeners
// Usar passive: true para scroll/touch events
document.addEventListener('DOMContentLoaded', () => {
  // ... código existente ...
  
  // Usar throttle para eventos frecuentes
  const throttledGenerate = throttle(() => {
    numeros = generarNumerosAleatorios();
    // Limpiar resultados
    resultadoSuma.textContent = "";
    resultadoResta.textContent = "";
    resultadoMulti.textContent = "";
    resultadoDiv.textContent = "";
  }, 100);
  
  btnNuevosNumeros.addEventListener('click', throttledGenerate, { passive: true });
}, { passive: true });

// Añadir función throttle
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
```

---

### 5. **SEO 2026 - GENERATIVE ENGINE OPTIMIZATION (GEO)** (Prioridad: 🟡 Media)

#### Añadir en `index.html`
```html
<!-- Añadir contenido optimizado para LLMs -->
<section class="calculator__description" aria-label="Descripción de la herramienta">
  <h2>¿Cómo funciona CalcU?</h2>
  <p>
    CalcU es una <strong>calculadora de números aleatorios</strong> que genera 
    dos números entre 0 y 100 de forma automática. Esta herramienta educativa 
    permite practicar operaciones matemáticas básicas:
  </p>
  <ul>
    <li><strong>Suma</strong>: Añade dos números aleatorios</li>
    <li><strong>Resta</strong>: Resta el segundo número del primero</li>
    <li><strong>Multiplicación</strong>: Multiplica ambos números</li>
    <li><strong>División</strong>: Divide el primer número entre el segundo (con manejo de división por cero)</li>
  </ul>
  <p>
    Cada vez que hagas clic en "Generar nuevos", CalcU producirá una nueva pareja 
    de números aleatorios para que practiques diferentes combinaciones.
  </p>
</section>

<!-- Añadir FAQ Schema para SEO -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es CalcU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CalcU es una calculadora web interactiva que genera dos números aleatorios (0-100) y permite realizar operaciones matemáticas básicas de suma, resta, multiplicación y división."
      }
    },
    {
      "@type": "Question",
      "name": "¿Cómo usar CalcU?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CalcU muestra automáticamente dos números aleatorios. Haz clic en los botones de Sumar, Restar, Multiplicar o Dividir para ver el resultado de cada operación. Puedes hacer clic en 'Generar nuevos' para obtener una nueva pareja de números."
      }
    },
    {
      "@type": "Question",
      "name": "¿Es gratuita?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sí, CalcU es una herramienta 100% gratuita y de código abierto."
      }
    }
  ]
}
</script>
```

---

### 6. **ARCHIVOS TÉCNICOS** (Prioridad: 🟡 Media)

#### Crear `robots.txt`
```txt
# robots.txt para calcualeatoria.org
User-agent: *
Allow: /

# Disallow si hay carpetas privadas
# Disallow: /node/
# Disallow: /.git/

# Sitemap
Sitemap: https://calcualeatoria.org/sitemap.xml
```

#### Crear `sitemap.xml`
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://calcualeatoria.org/</loc>
    <lastmod>2026-01-16</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
```

#### Crear `favicon.svg`
```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <rect width="100" height="100" fill="#e0e0e0" rx="20"/>
  <text x="50" y="60" font-family="Arial" font-size="40" font-weight="bold" text-anchor="middle" fill="#333">C+</text>
</svg>
```

#### Crear `manifest.json` (para PWA)
```json
{
  "name": "CalcU - Calculadora de Números Aleatorios",
  "short_name": "CalcU",
  "description": "Calculadora web interactiva con números aleatorios",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#e0e0e0",
  "theme_color": "#e0e0e0",
  "orientation": "portrait-primary",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

#### Añadir en `index.html` (dentro de `<head>`)
```html
<link rel="manifest" href="manifest.json">
<link rel="apple-touch-icon" href="icon-192.png">
```

---

### 7. **HTTPS & SECURITY** (Prioridad: 🔴 Alta - Solo al desplegar)

#### Configuración para Apache (`.htaccess`)
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header always set X-Content-Type-Options "nosniff"
  Header always set X-Frame-Options "SAMEORIGIN"
  Header always set X-XSS-Protection "1; mode=block"
  Header always set Referrer-Policy "strict-origin-when-cross-origin"
  Header always set Permissions-Policy "geolocation=(), microphone=(), camera=()"
</IfModule>

# Cache control
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
</IfModule>
```

#### Configuración para Nginx
```nginx
server {
    listen 80;
    server_name calcualeatoria.org;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name calcualeatoria.org;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Security headers
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;
    
    # Cache static files
    location ~* \.(css|js|png|jpg|jpeg|gif|svg|ico)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

---

### 8. **PERFORMANCE MONITORING** (Prioridad: 🟡 Media)

#### Añadir en `index.html` (antes de cerrar `</body>`)
```html
<!-- Lighthouse CI - Opcional para desarrollo -->
<script>
  // Web Vitals monitoring
  import('https://unpkg.com/web-vitals?module').then(({onCLS, onFID, onFCP, onLCP, onTTFB}) => {
    onCLS(console.log);
    onFID(console.log);
    onFCP(console.log);
    onLCP(console.log);
    onTTFB(console.log);
  });
</script>

<!-- Google Analytics (opcional) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 📊 RESUMEN DE CAMBIOS

### Archivos a Modificar:
1. ✏️ `index.html` - Metadatos, schema, accessibility, performance
2. ✏️ `css/index.css` - Accessibility, performance, responsive
3. ✏️ `js/index.js` - Performance optimization

### Archivos Nuevos a Crear:
4. 📄 `robots.txt` - Control de crawlers
5. 📄 `sitemap.xml` - Mapa del sitio
6. 📄 `favicon.svg` - Icono del sitio
7. 📄 `manifest.json` - PWA manifest
8. 📄 `.htaccess` o `nginx.conf` - HTTPS y security headers
9. 📄 `icon-192.png`, `icon-512.png` - PWA icons

---

## 🎯 METRICAS OBJETIVO (Core Web Vitals 2026)

| Métrica | Objetivo | Estado Actual |
|---------|----------|----------------|
| LCP (Largest Contentful Paint) | < 2.5s | ⚠️ No optimizado |
| INP (Interaction to Next Paint) | < 200ms | ⚠️ No optimizado |
| CLS (Cumulative Layout Shift) | < 0.1 | ✅ Aceptable |
| TTFB (Time to First Byte) | < 800ms | ⚠️ No medido |

---

## 🚀 ORDEN DE IMPLEMENTACIÓN RECOMENDADO

1. **Fase 1 - Crítica** (Implementar primero):
   - Metadatos SEO completos
   - Structured Data (Schema)
   - Accessibility improvements
   - Core Web Vitals optimization

2. **Fase 2 - Técnica** (Implementar después):
   - robots.txt y sitemap.xml
   - Favicon y PWA manifest
   - Performance monitoring

3. **Fase 3 - Despliegue** (Al poner en producción):
   - HTTPS configuration
   - Security headers
   - Caching configuration

---

## ✅ CHECKLIST DE COMPLECIÓN

### Metadatos SEO
- [ ] Title optimizado (50-60 chars)
- [ ] Meta description (140-160 chars)
- [ ] Meta keywords
- [ ] Canonical tag
- [ ] Open Graph tags
- [ ] Twitter Cards
- [ ] Favicon
- [ ] Theme color

### Structured Data
- [ ] WebSite schema
- [ ] SoftwareApplication schema
- [ ] Organization schema
- [ ] FAQPage schema

### Accessibility
- [ ] ARIA labels en botones
- [ ] aria-live en resultados
- [ ] Focus visible styles
- [ ] Touch targets 44x44px
- [ ] Skip link
- [ ] Semantic HTML5

### Performance
- [ ] Critical CSS inline
- [ ] CSS async loading
- [ ] JS defer loading
- [ ] Preconnect hints
- [ ] Font optimization
- [ ] CLS prevention

### Technical SEO
- [ ] robots.txt
- [ ] sitemap.xml
- [ ] PWA manifest
- [ ] HTTPS config
- [ ] Security headers
- [ ] Caching strategy

---

## 📚 REFERENCIAS

- [Google Search Central - SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Technical SEO That Works: 2026 Best Practices](https://www.seosolved.com/blog/technical-seo-2026-best-practices-playbook)
- [Accessibility as a Ranking Factor 2026](https://searchatlas.com/blog/accessibility-a11y-seo-ranking-factor-2026/)
- [Core Web Vitals - web.dev](https://web.dev/explore/learn-core-web-vitals)
- [AI Search & LLMs Changing SEO 2026](https://webtrek.io/blog/how-ai-search-llms-are-changing-seo-in-2026)
- [Schema.org](https://schema.org/)
