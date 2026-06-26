# Boutik Le Parfum — Sitio Web

Proyecto final de Programación. Sitio web de una tienda de perfumería familiar.

##  Descripción

Sitio de una sola página (SPA-like) con cuatro secciones:
- **Inicio**: hero con presentación de la marca
- **Catálogo**: grilla de productos con filtro por categoría
- **Nosotros**: historia y valores de la tienda
- **Contacto**: formulario con validación

##  Cómo correrlo

No requiere instalación. Abrí `index.html` directamente en tu navegador, o usá la extensión **Live Server** de VS Code para verlo con recarga automática.

##  Tecnologías

| Tecnología | Uso |
|---|---|
| HTML5 semántico | Estructura (`header`, `nav`, `main`, `section`, `footer`) |
| CSS3 | Estilos propios con variables, Flexbox, Grid, animaciones |
| Bootstrap 5 | Sistema de grid responsivo y componente navbar |
| Google Fonts | Tipografía: Cormorant Garamond + Lato |
| JavaScript (vanilla) | DOM, eventos, validación, filtros de catálogo |

##  Estructura

```
boutik/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Hoja de estilos externa
├── js/
│   ├── catalogo.js     # Renderizado y filtrado de productos
│   ├── formulario.js   # Validación del formulario de contacto
│   └── navegacion.js   # Link activo en navbar según scroll
├── img/
│   └── logo.jpeg       # Logo de la marca
└── README.md
```

##  Requisitos cumplidos

**HTML**
- [x] Etiquetas semánticas (`header`, `nav`, `main`, `section`, `footer`, `article`)
- [x] Formulario con múltiples tipos de input (`text`, `email`, `tel`, `select`, `textarea`, `checkbox`)
- [x] Atributos de accesibilidad (`alt`, `label`, `aria-*`, `role`)

**CSS**
- [x] Hoja de estilos externa (`css/styles.css`)
- [x] Diseño responsive con media queries + Flexbox + Grid
- [x] Transiciones (hover en cards y botones) y animación (fade en hero)
- [x] Consistencia visual con variables CSS (colores, tipografía, espaciados)
- [x] Bootstrap 5

**JavaScript**
- [x] Manipulación del DOM (crear cards dinámicamente, mostrar/ocultar elementos)
- [x] Manejo de eventos (`addEventListener` en formulario, filtros y scroll)
- [x] Validación de formulario por JS (además de la nativa HTML)
- [x] Código modularizado en funciones con responsabilidad única

##  Decisiones de diseño

- **Paleta**: Navy (#1a1f3c) + Dorado (#c9a96e) + Crema (#f5f0e8), extraída del logo de la marca
- **Tipografía**: Cormorant Garamond para títulos (elegante, serif) y Lato para el cuerpo (legible)
- **Interacción principal**: Al hacer click en "Consultar" de un producto, el formulario se pre-completa automáticamente con ese perfume
