import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  Lock,
  Code2,
  Cpu,
  Database as DatabaseIcon,
  FlaskConical,
  FileStack,
  CreditCard,
  Search,
  Server,
  Brain,
} from "lucide-react";
import type { Project, TechId } from "@/lib/types/project";
import type { LucideIcon } from "lucide-react";

const TECH_META: Record<TechId, { icon: LucideIcon; label: string }> = {
  laravel: { icon: Code2, label: "Laravel" },
  python: { icon: Code2, label: "Python" },
  fastapi: { icon: Code2, label: "FastAPI" },
  react: { icon: Cpu, label: "React" },
  next: { icon: FileStack, label: "Next.js" },
  tailwind: { icon: Code2, label: "Tailwind CSS" },
  mysql: { icon: DatabaseIcon, label: "MySQL" },
  postgres: { icon: DatabaseIcon, label: "PostgreSQL" },
  django: { icon: FlaskConical, label: "Django" },
  stripe: { icon: CreditCard, label: "Stripe" },
  seo: { icon: Search, label: "SEO" },
  mcp: { icon: Server, label: "MCP" },
  langchain: { icon: Brain, label: "LangChain" },
};

export function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <Card className={`group relative ${className}`}>
      {project.isPrivate ? (
        <div className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50">
          <Lock className="h-4 w-4 text-muted-foreground" />
        </div>
      ) : project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors"
          aria-label="Abrir repositorio en GitHub"
        >
          <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
        </a>
      ) : null}

      <CardHeader>
        <CardTitle className="group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((t) => {
            const meta = TECH_META[t];
            const Icon = meta.icon;
            return (
              <Badge
                key={t}
                variant="outline"
                className="flex items-center gap-1"
              >
                <Icon className="h-3 w-3" />
                <span>{meta.label}</span>
              </Badge>
            );
          })}
        </div>

        {project.notes ? (
          <p className="text-sm text-muted-foreground">{project.notes}</p>
        ) : null}

        {project.demoUrl ? (
          <div>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline underline-offset-4 hover:text-primary"
            >
              Ver demo
            </a>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
