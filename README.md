# Portafolio — Next.js + three.js

Tu portafolio personal con fondo 3D (three.js), animaciones (framer-motion) y
fotos optimizadas (next/image). Tema ámbar-terminal oscuro.

## Cómo correrlo (primera vez)

Necesitas **Node.js 18.17 o superior** instalado ([descárgalo aquí](https://nodejs.org)).

En la carpeta del proyecto, abre una terminal y ejecuta:

```bash
npm install      # instala las dependencias (solo la primera vez)
npm run dev      # arranca el servidor de desarrollo
```

Luego abre **http://localhost:3000** en tu navegador. Los cambios que guardes
se ven al instante.

## Qué editar (busca los comentarios `[EDITA]`)

| Qué | Dónde |
|-----|-------|
| Tu nombre, rol y bio corta | `components/Hero.jsx` |
| Tu foto y biografía larga | `components/About.jsx` (foto: `public/me.jpg`) |
| Tus tecnologías | `components/Skills.jsx` |
| Tus proyectos y sus fotos | `components/Work.jsx` (fotos: `public/projects/`) |
| Correo y redes | `components/Contact.jsx` |
| Título de la pestaña / SEO | `app/layout.jsx` |
| Colores del tema | `tailwind.config.js` y `app/globals.css` |

### Cambiar las fotos

Reemplaza los archivos dentro de `public/` por los tuyos, **manteniendo los
mismos nombres** (o actualiza la ruta en el componente):

- `public/me.jpg` → tu foto (cuadrada se ve mejor)
- `public/projects/proyecto-1.jpg`, `-2.jpg`, `-3.jpg` → capturas de tus proyectos

Para **agregar más proyectos**, añade un objeto al array `projects` en
`components/Work.jsx` y su imagen en `public/projects/`.

## Publicarlo gratis

La opción más fácil es **Vercel** (los creadores de Next.js):

1. Sube el proyecto a un repositorio de GitHub.
2. Entra a [vercel.com](https://vercel.com), conecta tu repo y dale *Deploy*.

Listo, tendrás una URL pública en un par de minutos.

## Estructura

```
app/
  layout.jsx      → fuentes, metadata, estructura raíz
  page.jsx        → ensambla todas las secciones
  globals.css     → estilos base y del cursor
components/
  Background3D.jsx → fondo 3D con three.js
  Reveal.jsx       → animación al hacer scroll (framer-motion)
  Nav, Hero, About, Skills, Work, Contact → secciones
public/
  me.jpg, projects/ → tus imágenes
```
