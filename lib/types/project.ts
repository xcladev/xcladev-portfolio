export type TechId =
  | "laravel"
  | "python"
  | "fastapi"
  | "react"
  | "next"
  | "tailwind"
  | "mysql"
  | "postgres"
  | "django"
  | "stripe"
  | "seo"
  | "mcp"
  | "langchain";

export type Project = {
  slug: string;
  title: string;
  description: string;
  isPrivate?: boolean;
  repoUrl?: string;
  demoUrl?: string;
  stack: TechId[];
  notes?: string;
};
