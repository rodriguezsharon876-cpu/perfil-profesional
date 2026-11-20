# Sede Digital de Sharon Rodríguez

Portafolio editorial y mobile-first construido con Next.js 16, React 19, TypeScript, Tailwind CSS 4 y Motion. Presenta el perfil profesional de Sharon, tres casos de estudio, capacidades técnicas y un canal de contacto directo.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Verificación

```bash
npm run lint
npm run typecheck
npm run build
```

## Actualizar contenido

El contenido editable está centralizado en `content/portfolio.json`. Allí se pueden cambiar:

- perfil y enlaces profesionales;
- descripción, reto, solución, resultados y stack de cada proyecto;
- grupos de habilidades.

La foto está en `public/images/sharon-rodriguez.jpg`.

## Arquitectura

- `app/`: layout, SEO, sitemap, robots y página principal.
- `components/`: bloques de interfaz independientes y casos de estudio.
- `content/`: fuente de datos desacoplada de los componentes.
- `public/`: activos estáticos optimizados por Next Image.

El formulario genera un correo prellenado mediante `mailto:` para funcionar sin almacenar datos ni requerir credenciales de un proveedor externo.

## Despliegue

Configura `NEXT_PUBLIC_SITE_URL` con el dominio final usando `.env.example` como referencia y despliega en Vercel o cualquier plataforma compatible con Next.js.
