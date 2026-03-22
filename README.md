# Portfolio Personal — Juan Antonio

Portfolio web desarrollado con **Next.js (App Router)**, **React**, **TypeScript** y **Tailwind CSS**, con diseño responsive, modo claro/oscuro y secciones para proyectos web, apps móviles y contacto.

## Características

- Landing con presentación personal y enlaces a redes.
- Navegación por anclas con menú responsive.
- Modo oscuro/claro (`next-themes`).
- Sección “Sobre mí” con stack tecnológico.
- Secciones de proyectos (`Webs` y `Apps`) con tarjetas reutilizables.
- Formulario de contacto (actualmente con lógica local en cliente).
- Integración de analítica con Vercel Analytics.

## Stack técnico

- **Framework:** Next.js 16
- **UI:** React 19 + Tailwind CSS 4
- **Lenguaje:** TypeScript
- **Componentes:** shadcn/ui + Radix UI
- **Iconos:** lucide-react
- **Tema:** next-themes
- **Animaciones:** framer-motion (disponible en dependencias)

## Requisitos

- Node.js 20+ recomendado
- npm, pnpm o yarn

## Instalación y ejecución

```bash
# 1) Instalar dependencias
npm install

# 2) Levantar entorno de desarrollo
npm run dev

# 3) Build de producción
npm run build

# 4) Ejecutar build
npm run start
```

Por defecto, la app se abre en:

- http://localhost:3000

## Estructura del proyecto

```text
src/
	app/
		layout.tsx      # Layout raíz, metadata, ThemeProvider, Analytics
		page.tsx        # Página principal que compone todas las secciones
		globals.css     # Estilos globales

components/
	portfolio/
		header.tsx      # Navbar + menú móvil + toggle tema
		hero.tsx        # Portada principal
		about.tsx       # Sobre mí + skills
		webs-section.tsx
		apps-section.tsx
		contact.tsx
		footer.tsx
	ui/               # Componentes base (shadcn/ui)

public/
	profile.jpg
	projects/         # Imágenes de proyectos
```

## Personalización rápida

### 1) Datos personales

Edita:

- `components/portfolio/hero.tsx`
- `components/portfolio/about.tsx`
- `components/portfolio/contact.tsx`
- `components/portfolio/footer.tsx`

### 2) Proyectos

Edita los arrays:

- `webProjects` en `components/portfolio/webs-section.tsx`
- `appProjects` en `components/portfolio/apps-section.tsx`

Cada proyecto usa:

- `title`
- `description`
- `image`
- `technologies`
- `demoUrl`
- `repoUrl`

### 3) Imágenes

- Foto principal: `public/profile.jpg`
- Imágenes de proyectos: `public/projects/*`

### 4) Metadata / iconos

Configurable en:

- `src/app/layout.tsx`

## Scripts disponibles

- `npm run dev` → entorno local
- `npm run build` → build producción
- `npm run start` → servir build
- `npm run lint` → lint del proyecto

## Estado actual del formulario de contacto

El formulario en `components/portfolio/contact.tsx` actualmente:

- valida campos en cliente,
- hace `console.log` en `handleSubmit`,
- limpia el formulario.

Si quieres hacerlo funcional, puedes conectarlo a:

- una API Route de Next.js (`src/app/api/...`),
- Formspree / Resend / EmailJS,
- o backend propio.

## Despliegue

Se puede desplegar directamente en Vercel.

Pasos mínimos:

1. Subir el repositorio a GitHub.
2. Importarlo en Vercel.
3. Configurar variables de entorno (si más adelante añades backend/email).
4. Deploy.

---

Hecho con Next.js + Tailwind CSS + mucho cariño 💜
