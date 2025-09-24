# Sergi Cladera — Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

Portfolio personal de Sergi Cladera, desarrollador backend especializado en tecnologías modernas y soluciones innovadoras.

## 🚀 Características

- **Diseño Moderno**: Interfaz elegante y responsive con animaciones suaves
- **Tema Oscuro/Claro**: Soporte para modo oscuro y claro con detección automática del sistema
- **Fondo Animado**: Canvas reactivo al tema con ondas fluidas
- **Optimizado para SEO**: Metadata, Open Graph, Twitter Card, JSON-LD, `sitemap.xml` y `robots.txt`
- **Accesibilidad**: Diseño accesible siguiendo las mejores prácticas de WCAG
- **Performance**: Optimizado con Next.js 15 y Turbopack para máxima velocidad

## 🛠️ Tecnologías

### Frontend

- **Next.js 15.5.2** - Framework de React con App Router
- **React 19.1.0** - Biblioteca de interfaz de usuario
- **TypeScript 5.9** - Tipado estático para JavaScript
- **Tailwind CSS 4.1** - Framework CSS utility-first
- **Radix UI** - Componentes de interfaz accesibles

### Herramientas de Desarrollo

- **ESLint** - Linting de código
- **Turbopack** - Bundler rápido para desarrollo
- **pnpm** - Gestor de paquetes rápido y eficiente

## 📦 Instalación

1. **Clona el repositorio**

   ```bash
   git clone https://github.com/tu-usuario/xcladev-portfolio.git
   cd xcladev-portfolio
   ```

2. **Instala las dependencias**

   ```bash
   pnpm install
   ```

3. **Ejecuta el servidor de desarrollo**

   ```bash
   pnpm dev
   ```

4. **Abre tu navegador**
   Navega a [http://localhost:3000](http://localhost:3000)

## 🏗️ Scripts Disponibles

```bash
# Desarrollo
pnpm dev          # Inicia el servidor de desarrollo con Turbopack

# Producción
pnpm build        # Construye la aplicación para producción (Turbopack)
pnpm start        # Inicia el servidor de producción

# Linting
pnpm lint         # Ejecuta ESLint para verificar el código
```

## 📁 Estructura del Proyecto

```
xcladev-portfolio/
├── app/                     # App Router de Next.js
│   ├── (site)/              # Rutas del sitio principal
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── favicon.ico
│   ├── globals.css          # Estilos globales
│   ├── layout.tsx           # Layout raíz
│   ├── manifest.ts
│   ├── robots.ts
│   └── sitemap.ts
├── components/              # Componentes reutilizables
│   ├── sections/            # Secciones (hero, about, projects, contact)
│   ├── site/                # Navbar, fondo animado, etc.
│   ├── ui/                  # Componentes de UI base
│   └── theme-provider.tsx   # Proveedor de tema
├── data/
│   └── projects.ts
├── lib/                     # Utilidades y hooks
│   ├── hooks/
│   │   └── useScrollSpy.ts
│   ├── types/
│   │   └── project.ts
│   └── utils.ts
├── public/                  # Archivos estáticos
│   ├── CV_Sergi_Cladera.pdf
│   └── foto-portfolio.webp
├── styles/                  # Estilos adicionales
│   ├── components.css
│   └── index.css
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## 🎨 Secciones del Portfolio

### 🏠 Hero Section

- Presentación personal con avatar
- Descripción profesional
- Botones de acción para navegación

### 👨‍💻 Sobre Mí

- Información personal y profesional
- Stack tecnológico (PHP, Laravel, Python, JavaScript)
- Experiencia y educación

### 📂 Proyectos Destacados

- E-commerce Platform (Next.js, TypeScript, Stripe)
- Task Management App (React, Socket.io, MongoDB)
- Portfolio Website (Next.js, Tailwind CSS, Framer Motion)

### 📞 Contacto

- Información de contacto directo
- Estado de disponibilidad
- Enlaces a redes profesionales

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel
```

### Otros Proveedores

El proyecto es compatible con cualquier proveedor que soporte Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuración

### SEO y Metadatos

- `app/layout.tsx`: Define `metadata`, Open Graph, Twitter y JSON-LD (Person y WebSite).
- `app/manifest.ts`: PWA manifest (name, theme_color, íconos).
- `app/robots.ts`: Reglas de rastreo y `sitemap`.
- `app/sitemap.ts`: Sitemap principal.

Actualiza la URL base del sitio en los siguientes archivos cuando hagas un fork o despliegues en otro dominio:

- `app/layout.tsx` → `metadataBase`
- `app/robots.ts` → `baseUrl`
- `app/sitemap.ts` → `baseUrl`

### Personalización

- **Colores**: Modifica las variables CSS en `app/globals.css`
- **Contenido**: Actualiza secciones en `app/(site)/page.tsx` y componentes en `components/sections/*`
- **Barra de navegación**: Navegación con scroll suave en `components/site/navbar.tsx`
- **Tema**: Toggle de tema con `next-themes` en `components/mode-toggle.tsx`
- **Fondo animado**: Canvas reactivo al tema en `components/site/animated-background.tsx`
- **Metadatos**: Ajusta la información SEO en `app/layout.tsx`

## 📈 Performance

El portfolio está optimizado para:

- **Core Web Vitals**: LCP, FID, CLS optimizados
- **SEO**: Meta tags y estructura semántica
- **Accesibilidad**: Navegación por teclado y lectores de pantalla
- **Mobile-First**: Diseño responsive para todos los dispositivos

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

- **Email**: sergicladera@gmail.com
- **LinkedIn**: [Sergi Cladera Bennasar](https://www.linkedin.com/in/sergi-cladera-bennasar-517729235/)
- **GitHub**: [@xcladev](https://github.com/xcladev)

---

Desarrollado con ❤️ por Sergi Cladera
