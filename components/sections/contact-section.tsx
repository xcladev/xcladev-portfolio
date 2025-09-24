"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Copy, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { animations, hoverEffects } from "@/lib/utils";

export function ContactSection() {
  return (
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
  );
}
