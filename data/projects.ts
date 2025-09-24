import type { Project } from "@/lib//types/project";

export const projects: Project[] = [
  {
    slug: "kore-labs",
    title: "Kore Labs (en desarrollo)",
    description:
      "Plataforma completa de gestión de entrenamientos personales, creada en colaboración con un entrenador.",
    isPrivate: true,
    stack: ["python", "react", "postgres", "django", "next", "stripe"],
    notes:
      "Backend con Django y frontend independiente con React/Next. API reutilizable para apps móviles.",
  },
  {
    slug: "buro-bot",
    title: "Buro Bot (en desarrollo)",
    description:
      "Gestión de citas para gestorías (multi-tenant) y chatbot IA integrado con WhatsApp.",
    isPrivate: true,
    stack: ["laravel", "mysql", "python", "fastapi", "langchain"],
    notes:
      "Multiproyecto hecho con Laravel y Filament (gestión solo para admins) y API de chatbot IA hecho con FastApi y Langchain para gestión inteligente de conversaciones.",
  },
  {
    slug: "json-xml-comparator",
    title: "JSON & XML Comparator",
    description:
      "Herramienta web desarrollada con Next.js para comparar estructuras de JSON y XML, mostrando diferencias de forma clara y visual.",
    repoUrl: "https://github.com/xcladev/json-xml-comparator",
    stack: ["next", "react", "seo"],
    notes:
      "Testing de hacer una herramienta optimizada para SEO y despliegue en producción para observar como se comporta con mucha competencia. Actúa 100% en el cliente, sin backend.",
  },
  {
    slug: "mcp-mysql",
    title: "MCP MySQL",
    description:
      "Servidor MCP para dar contexto a modelos de IA sobre una base de datos MySQL.",
    repoUrl: "https://github.com/xcladev/mcp-mysql",
    stack: ["python", "mcp"],
    notes:
      "Herramienta para uso personal y abierto a la comunidad ante la falta de un MCP para integrar MySql con modelos de IA.",
  },
  {
    slug: "portfolio",
    title: "Portfolio Website",
    description:
      "Sitio web personal con diseño minimalista, creado para mostrar proyectos y experiencia profesional.",
    repoUrl: "https://github.com/xcladev/xcladev-portfolio",
    stack: ["react", "next", "tailwind"],
    notes:
      "Landing responsive con integración de animaciones y uso de componentes.",
  },
];
