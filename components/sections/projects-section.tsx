import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/site/project-card";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center fade-in-up"
    >
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
              Proyectos Destacados
            </h2>
            <p className="text-muted-foreground">
              Estos son algunos de mis proyectos personales, desarrollados para
              seguir aprendiendo y experimentar con nuevas tecnologías. Si
              quieres más información sobre los proyectos privados y trabajos
              realizados en entorno laboral, no dudes en contactarme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <ProjectCard
                key={p.slug}
                project={p}
                className="hover:shadow-lg transition"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
