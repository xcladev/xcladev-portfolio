"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Dumbbell, GraduationCap } from "lucide-react";
import { SkillsDropdown } from "@/components/site/skills-dropdown";
import { animations, hoverEffects } from "@/lib/utils";

export function AboutSection() {
  return (
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
  );
}
