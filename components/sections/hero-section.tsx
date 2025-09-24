"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code2, Terminal, GitPullRequest, Code, Database, GitBranch } from "lucide-react";
import { animations, hoverEffects } from "@/lib/utils";
import foto from "@/public/foto-portfolio.webp";

export function HeroSection() {
  return (
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
  );
}
