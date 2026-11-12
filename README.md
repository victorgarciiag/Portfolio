# Portfolio — Víctor García

Web personal construida con [Astro](https://astro.build): genera HTML estático, rápido y con buen SEO, y solo usa JavaScript donde hace falta (las pestañas de "¿En qué te puedo ayudar?").

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # genera la web en dist/
npm run preview    # sirve dist/ para revisarla
```

## Dónde se cambia cada cosa

| Qué | Dónde |
| --- | --- |
| **Todos los textos, casos y enlaces** | `src/data/site.ts` |
| Colores, tipografías y botones | `src/styles/global.css` (variables en `:root`) |
| Cada sección de la página | `src/components/*.astro` |
| Ilustraciones de los casos | `src/components/visuals/` |
| Meta tags / SEO | `src/layouts/Base.astro` y `site` en `astro.config.mjs` |
| Foto, CV e imágenes | `public/` (p. ej. `public/images/victor.jpg`, `public/cv.pdf`) |

Los textos entre `[corchetes]` son huecos pendientes de rellenar con datos reales.

## Despliegue

La salida es una carpeta estática (`dist/`), así que se puede servir desde cualquier sitio.

**Con Docker + Nginx (servidor propio / VPS):**

```bash
docker build -t portfolio .
docker run -d -p 80:80 --name portfolio portfolio
```

Para HTTPS, lo más sencillo es poner delante un proxy con certificados automáticos (Caddy, Traefik o Nginx + Certbot).

**Alternativas sin servidor:** Vercel, Netlify o Cloudflare Pages detectan Astro solos (build `npm run build`, salida `dist`).

Antes de publicar, cambia `site` en `astro.config.mjs` por tu dominio real.

## Estructura

```
src/
├── data/site.ts          # contenido
├── styles/global.css     # tokens de diseño
├── layouts/Base.astro    # <head>, fuentes, SEO
├── components/           # secciones de la página
│   └── visuals/          # maquetas de los casos
└── pages/                # index y 404
```
