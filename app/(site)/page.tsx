"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { animations, hoverEffects } from "@/lib/utils";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        id="home"
        className={`min-h-screen flex items-center justify-center ${animations.fadeInUp}`}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
            <Avatar
              className={`w-32 h-32 lg:w-40 lg:h-40 ${hoverEffects.cardHover}`}
            >
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/202400088?v=4"
                alt="avatar-sergi"
              />
              <AvatarFallback className="text-3xl lg:text-4xl">
                SC
              </AvatarFallback>
            </Avatar>
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Hola, soy <span className="text-primary">Sergi</span>.
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
                Desarrollador backend apasionado por crear experiencias
                digitales excepcionales. Especializado en tecnologías modernas y
                soluciones innovadoras.
              </p>
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
                  Soy un desarrollador backend con experiencia en la creación de
                  aplicaciones web modernas y escalables. Mi pasión por la
                  tecnología me impulsa a estar constantemente aprendiendo y
                  adoptando las mejores prácticas del desarrollo.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Me especializo en el ecosistema PHP/Laravel, con experiencia
                  en Python, Javascript y bases de datos modernas. Creo en la
                  importancia de escribir código limpio, mantenible y bien
                  documentado.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Javascript</Badge>
                  <Badge variant="secondary">Git</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">PostgreSQL</Badge>
                  <Badge variant="secondary">Tailwind CSS</Badge>
                </div>
              </div>
              <div className="space-y-6">
                <Card className={hoverEffects.cardHover}>
                  <CardHeader>
                    <CardTitle>Experiencia</CardTitle>
                    <CardDescription>
                      Desarrollo de aplicaciones web full-stack
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Más de 3 años desarrollando soluciones digitales para
                      empresas y startups, con enfoque en backend y rendimiento.
                    </p>
                  </CardContent>
                </Card>
                <Card className={hoverEffects.cardHover}>
                  <CardHeader>
                    <CardTitle>Educación</CardTitle>
                    <CardDescription>
                      Formación continua en tecnologías emergentes
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      CFGS en desarrollo de aplicaciones multiplataforma.
                    </p>
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
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center mb-12">
              Proyectos Destacados
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className={`group ${hoverEffects.cardHover}`}>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    E-commerce Platform
                  </CardTitle>
                  <CardDescription>
                    Plataforma completa de comercio electrónico con gestión de
                    inventario
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">TypeScript</Badge>
                    <Badge variant="outline">Stripe</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Sistema completo con carrito de compras, pagos, panel de
                    administración y API REST.
                  </p>
                </CardContent>
              </Card>

              <Card className={`group ${hoverEffects.cardHover}`}>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Task Management App
                  </CardTitle>
                  <CardDescription>
                    Aplicación de gestión de tareas con colaboración en tiempo
                    real
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">React</Badge>
                    <Badge variant="outline">Socket.io</Badge>
                    <Badge variant="outline">MongoDB</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Interfaz intuitiva con drag & drop, notificaciones y
                    sincronización en tiempo real.
                  </p>
                </CardContent>
              </Card>

              <Card className={`group ${hoverEffects.cardHover}`}>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    Portfolio Website
                  </CardTitle>
                  <CardDescription>
                    Sitio web personal con diseño moderno y responsive
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline">Next.js</Badge>
                    <Badge variant="outline">Tailwind CSS</Badge>
                    <Badge variant="outline">Framer Motion</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Diseño elegante con animaciones suaves y optimización SEO
                    completa.
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
              ¿Trabajamos juntos?
            </h2>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Estoy siempre abierto a nuevas oportunidades y proyectos
              interesantes. Si tienes una idea o proyecto en mente, me
              encantaría escucharte.
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
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      sergicladera@gmail.com
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-muted-foreground">
                      <Link href="https://www.linkedin.com/in/sergi-cladera-bennasar-517729235/">
                        https://www.linkedin.com/in/sergi-cladera-bennasar-517729235/
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className={hoverEffects.cardHover}>
                <CardHeader>
                  <CardTitle>Disponibilidad</CardTitle>
                  <CardDescription>
                    Actualmente trabajando para Sidetous S.L
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">Estado</p>
                    <Badge variant="default">Disponible</Badge>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Tipo de proyectos</p>
                    <p className="text-muted-foreground">
                      Freelance, Contratos, Colaboraciones
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
