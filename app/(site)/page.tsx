"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronDown,
  ChevronUp,
  Code2,
  Code,
  GitBranch,
  Database,
  Terminal,
  GitPullRequest,
  GraduationCap,
  Dumbbell,
  Lock,
  Github,
  Database as DatabaseIcon,
  FlaskConical,
  CreditCard,
  FileJson,
  FileCode2,
  Search,
  Server,
  Cpu,
  FileStack,
  Brain,
  Mail,
  Copy,
  Link2,
  Linkedin,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { SkillsDropdown } from "@/components/site/skills-dropdown";
import Link from "next/link";
import { animations, hoverEffects } from "@/lib/utils";
import { AnimatedBackground } from "@/components/site/animated-background";
import Typewriter from "typewriter-effect";
import { toast } from "sonner";
import foto from "@/public/foto-portfolio.webp";

export default function Page() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        {/* Hero Section */}
        <section
          id="home"
          className={`min-h-screen flex items-center justify-center ${animations.fadeInUp}`}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
              <Avatar
                className={`relative w-48 h-48 lg:w-64 lg:h-64 shadow-lg ${hoverEffects.cardHover}`}
              >
                <Image
                  src={foto}
                  alt="Foto de perfil de Sergi"
                  fill
                  sizes="(max-width: 1024px) 192px, 256px"
                  priority
                  placeholder="blur"
                  className="rounded-full object-cover"
                />
                <AvatarFallback className="text-3xl lg:text-4xl">
                  SC
                </AvatarFallback>
              </Avatar>
              <div className="space-y-6 text-center lg:text-left">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <Typewriter
                    options={{
                      strings: ["Hola, soy Sergi", "Desarrollador Backend"],
                      autoStart: true,
                      loop: true,
                      cursor: "_",
                      deleteSpeed: 40,
                    }}
                  />
                </h1>
                <p className="text-lg md:text-xl italic text-muted-foreground">
                  Transformando ideas en soluciones digitales escalables y
                  eficientes.
                </p>
                <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                  Especializado en{" "}
                  <span className="font-semibold">Laravel y Python</span>, con
                  experiencia en la creación de{" "}
                  <span className="font-semibold">
                    plataformas web y APIs REST
                  </span>
                  . <br /> Actualmente amplío mi perfil hacia{" "}
                  <span className="font-semibold">Full Stack</span> con{" "}
                  <span className="font-semibold">JavaScript y React</span>.
                </p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 h-7"
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    Laravel
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 h-7"
                  >
                    <Terminal className="h-3.5 w-3.5" />
                    Python
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 h-7"
                  >
                    <GitPullRequest className="h-3.5 w-3.5" />
                    APIs REST
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 h-7"
                  >
                    <Code className="h-3.5 w-3.5" />
                    JavaScript
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 h-7"
                  >
                    <Database className="h-3.5 w-3.5" />
                    SQL
                  </Badge>
                  <Badge
                    variant="outline"
                    className="flex items-center gap-1.5 h-7"
                  >
                    <GitBranch className="h-3.5 w-3.5" />
                    Git
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button
                    className="cursor-pointer"
                    size="lg"
                    onClick={() =>
                      document
                        .getElementById("projects")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Ver Proyectos
                  </Button>
                  <Button
                    className="cursor-pointer"
                    size="lg"
                    variant="outline"
                    onClick={() =>
                      document
                        .getElementById("contact")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Contactar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* About Section */}
        <section
          id="about"
          className={`min-h-screen flex items-center ${animations.fadeInUp}`}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-12">
                Sobre mí
              </h2>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Mi trayectoria se ha centrado principalmente en el
                    ecosistema{" "}
                    <span className="font-semibold">PHP/Laravel</span>,
                    desarrollando plataformas a medida e integrando{" "}
                    <span className="font-semibold">APIs internacionales</span>{" "}
                    para mejorar procesos y la experiencia de usuario en el
                    sector turístico.
                    <br /> Además, he trabajado con{" "}
                    <span className="font-semibold">Python</span> para la
                    creación de APIs REST, proyectos de análisis de datos,
                    soluciones IA, y actualmente amplío mi perfil hacia el{" "}
                    <span className="font-semibold">desarrollo full stack</span>{" "}
                    con{" "}
                    <span className="font-semibold">JavaScript y React.</span>{" "}
                    <br /> Creo firmemente en la importancia de aplicar{" "}
                    <span className="font-semibold">
                      buenas prácticas de desarrollo
                    </span>
                    : escribir código limpio, aplicar principios SOLID y diseñar
                    arquitecturas escalables y fáciles de mantener.
                  </p>
                  <div className="mt-4">
                    <SkillsDropdown />
                  </div>
                </div>
                <div className="space-y-6">
                  <Card className={hoverEffects.cardHover}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Dumbbell />
                        <span>Experiencia</span>
                      </CardTitle>
                      <CardDescription>
                        Desarrollo de plataformas web
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Más de 3 años desarrollando soluciones digitales para
                        empresas y startups, con enfoque en backend,
                        integraciones y optimización de procesos.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className={hoverEffects.cardHover}>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <GraduationCap />
                        <span>Educación</span>
                      </CardTitle>
                      <CardDescription>
                        Formación continua en tecnologías emergentes
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 list-disc pl-5 text-muted-foreground">
                        <li>
                          CFGS en Desarrollo de Aplicaciones Web (en curso)
                        </li>
                        <li>Curso de Especialización en IA y Big Data</li>
                        <li>
                          CFGS en Desarrollo de Aplicaciones Multiplataforma
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Projects Section */}
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
                  Estos son algunos de mis proyectos personales, desarrollados
                  para seguir aprendiendo y experimentar con nuevas tecnologías.
                  Si quieres más información sobre los proyectos privados y
                  trabajos realizados en entorno laboral, no dudes en
                  contactarme, estaré encantado de compartir más detalles.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className={`group relative ${hoverEffects.cardHover}`}>
                  <div className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Kore Labs (en desarrollo)
                    </CardTitle>
                    <CardDescription>
                      Plataforma completa de gestión de entrenamientos
                      personales, creada en colaboración con un entrenador.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Code2 className="h-3 w-3" />
                        <span>Python</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Cpu className="h-3 w-3" />
                        <span>React</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <DatabaseIcon className="h-3 w-3" />
                        <span>PostgreSQL</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <FlaskConical className="h-3 w-3" />
                        <span>Django</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <FileStack className="h-3 w-3" />
                        <span>Next.js</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <CreditCard className="h-3 w-3" />
                        <span>Stripe</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Backend hecho con Django y Frontend independiente con
                      React, Backend diseñado para ser reutilizable como API
                      para aplicaciones móviles.
                    </p>
                  </CardContent>
                </Card>

                <Card className={`group relative ${hoverEffects.cardHover}`}>
                  <div className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50">
                    <Lock className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Buro Bot (en desarrollo)
                    </CardTitle>
                    <CardDescription>
                      Plataforma de gestión de citas para gestorías, en un
                      sistema multi-tenant y chatbot IA integrado con Whatsapp.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Code2 className="h-3 w-3" />
                        <span>Laravel</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Cpu className="h-3 w-3" />
                        <span>Filament</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Database className="h-3 w-3" />
                        <span>MySQL</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Code2 className="h-3 w-3" />
                        <span>Python</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Code2 className="h-3 w-3" />
                        <span>FastAPI</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Brain className="h-3 w-3" />
                        <span>LangChain</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Multiproyecto hecho con Laravel y Filament (gestión solo
                      para admins) y API de chatbot IA hecho con FastApi y
                      Langchain para gestión inteligente de conversaciones.
                    </p>
                  </CardContent>
                </Card>

                <Card className={`group relative ${hoverEffects.cardHover}`}>
                  <a
                    href="https://github.com/xcladev/json-xml-comparator"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      JSON & XML Comparator
                    </CardTitle>
                    <CardDescription>
                      Herramienta web desarrollada con Next.js para comparar
                      estructuras de JSON y XML, mostrando diferencias de forma
                      clara y visual.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <FileStack className="h-3 w-3" />
                        <span>Next.js</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Cpu className="h-3 w-3" />
                        <span>React</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Search className="h-3 w-3" />
                        <span>SEO</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Testing de hacer una herramienta optimizada para SEO y
                      despliegue en producción para observar como se comporta
                      con mucha competencia.
                      <br />
                      Actúa 100% en el cliente, sin backend.
                    </p>
                  </CardContent>
                </Card>

                <Card className={`group relative ${hoverEffects.cardHover}`}>
                  <a
                    href="https://github.com/xcladev/mcp-mysql"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      MCP MySql
                    </CardTitle>
                    <CardDescription>
                      Model Context Protocol server para MySql desarrollado para
                      dar contexto a modelos de IA sobre una base de datos
                      MySql.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Code2 className="h-3 w-3" />
                        <span>Python</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Server className="h-3 w-3" />
                        <span>MCP</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Herramienta para uso personal y abierto a la comunidad
                      ante la falta de un MCP para integrar MySql con modelos de
                      IA.
                    </p>
                  </CardContent>
                </Card>

                <Card className={`group relative ${hoverEffects.cardHover}`}>
                  <a
                    href="https://github.com/xcladev/xcladev-portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 p-1.5 rounded-full bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <Github className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                  </a>
                  <CardHeader>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      Portfolio Website
                    </CardTitle>
                    <CardDescription>
                      Sitio web personal con diseño minimalista, creado para
                      mostrar proyectos y experiencia profesional.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Cpu className="h-3 w-3" />
                        <span>React</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <FileStack className="h-3 w-3" />
                        <span>Next.js</span>
                      </Badge>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1"
                      >
                        <Code2 className="h-3 w-3" />
                        <span>Tailwind CSS</span>
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Landing responsive con integración de animaciones y uso de
                      componentes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Separator />

        {/* Contact Section */}
        <section
          id="contact"
          className={`min-h-screen flex items-center ${animations.fadeInUp}`}
        >
          <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-12">
                Contacto
              </h2>
              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                Estoy abierto a nuevas oportunidades profesionales y
                colaboraciones en proyectos innovadores. Si buscas un
                desarrollador backend con experiencia en Laravel, Python y APIs,
                y en crecimiento hacia Full Stack, estaré encantado de hablar
                contigo.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                <Card className={hoverEffects.cardHover}>
                  <CardHeader>
                    <CardTitle>Contacto Directo</CardTitle>
                    <CardDescription>
                      Métodos de contacto preferidos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <p className="font-medium flex items-center gap-2">
                        <Mail className="h-5 w-5" /> Email
                      </p>
                      <div className="flex items-center gap-2">
                        <a
                          href="mailto:sergicladera@gmail.com"
                          className="text-muted-foreground hover:underline"
                          title="Enviar email a sergicladera@gmail.com"
                        >
                          sergicladera@gmail.com
                        </a>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={async (e) => {
                            e.preventDefault();
                            await navigator.clipboard.writeText(
                              "sergicladera@gmail.com"
                            );
                            toast.success("Email copiado al portapapeles");
                          }}
                          title="Copiar email"
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium flex items-center gap-2">
                        <Linkedin className="h-5 w-5" /> LinkedIn
                      </p>
                      <Link
                        href="https://www.linkedin.com/in/sergi-cladera-bennasar-517729235/"
                        className="text-muted-foreground hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        linkedin.com/in/sergi-cladera-bennasar
                      </Link>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium flex items-center gap-2">
                        <Github className="h-5 w-5" /> GitHub
                      </p>
                      <Link
                        href="https://github.com/xcladev"
                        className="text-muted-foreground hover:underline flex items-center gap-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        github.com/xcladev
                      </Link>
                    </div>
                  </CardContent>
                </Card>
                <Card className={hoverEffects.cardHover}>
                  <CardHeader>
                    <CardTitle>Disponibilidad</CardTitle>
                    <CardDescription>
                      Actualmente trabajando en Sidetours S.L., pero abierto a
                      freelance, colaboraciones y nuevas oportunidades
                      profesionales.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 text-center">
                      <p className="font-medium">Estado</p>
                      <div className="flex justify-center">
                        <Badge variant="outline">
                          <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                          </span>
                          Disponible
                        </Badge>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <p className="font-medium">Tipo de proyectos</p>
                      <p className="text-muted-foreground">
                        Backend / Full Stack · Freelance · Colaboraciones
                        tecnológicas
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
