# Bamba Valores — sitio web (React + Vite)

Misma estructura que la web de Bamba: Vite + React, un solo stylesheet, una sección por componente.
Solo lleva lo de Valores: hero, Inversiones (fondos en pesos, otros fondos, Dólar MEP, mercado de capitales), contacto y footer.

## Arrancar

```bash
npm install
npm run dev
```

Build de producción: `npm run build` → carpeta `dist/`, lista para un hosting estático (S3 + CloudFront, Amplify, etc.).

## Estructura

```
index.html                punto de entrada (fuente Figtree + #root)
src/main.jsx              monta App
src/App.jsx               orden de las secciones
src/styles/styles.css     el CSS del sitio (único stylesheet)
src/components/           una sección por archivo
src/content/              contenido editable sin tocar componentes
public/assets/img/        logos (Bamba Valores y CNV)
```

### Componentes

| Archivo | Sección |
| --- | --- |
| `Nav.jsx` | header + menú móvil |
| `Hero.jsx` | "Tu Puente del Campo al Mercado de Capitales" |
| `Inversiones.jsx` | sección completa, igual que Bamba: pestañas, tarjetas de fondos, bloque Dólar MEP (usa los dos de abajo) |
| `FondosCarrusel.jsx` | carrusel Pesos / Dólares (ya no se usa en la página; queda por si se quiere volver a usar) |
| `OtrosFondos.jsx` | administradoras y sus fondos |
| `MercadoCapitales.jsx` | acciones, bonos y cedears |
| `Contacto.jsx` | bloque de contacto |
| `Footer.jsx` | pie con texto legal (CNV, membresías, dirección), logo de la CNV y links a documentos |

### Dónde editar contenido

- Hero, contacto y footer: `src/content/home.js`. En el footer, los links "Tabla de Aranceles" y "Personal Idóneo" aparecen solo cuando les cargás `href` (por ejemplo, poné los PDFs en `public/docs/` y usá `/docs/tabla-de-aranceles.pdf`). El logo de la CNV acepta un `href` opcional. Lo que quede vacío en contacto no se muestra.
- Menú: `src/content/navegacion.js`.
- Títulos de Inversiones y fondos destacados: `src/content/site.js`. Los grupos (`En pesos`, `En dólares`) aparecen como pestaña solo si tienen fondos cargados; también el bloque Dólar MEP.
- Administradoras y fondos: `src/content/fondos.js`.
- Acciones, bonos y cedears: `src/content/mercado.js`. **Son datos de ejemplo: reemplazar por los reales antes de publicar.**
- Colores y tipografía: variables al principio de `src/styles/styles.css`.
