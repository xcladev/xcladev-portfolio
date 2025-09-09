"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { DownloadCvButton } from "@/components/site/download-cv-button";

export function Navbar() {
  const sectionIds = ["home", "about", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, 100);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto flex h-14 items-center px-4">
        <button
          onClick={() => scrollToSection("home")}
          className="font-semibold tracking-tight transition-colors duration-200 ease-in-out cursor-pointer hover:text-muted-foreground"
        >
          <span>Cla</span>
          <span className="text-muted-foreground">dev</span>
        </button>

        <div className="flex-1 flex justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-6">
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("home")}
                  className={`transition-colors duration-200 ease-in-out cursor-pointer hover:text-muted-foreground ${
                    activeSection === "home" ? "text-muted-foreground" : ""
                  }`}
                >
                  Inicio
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("about")}
                  className={`transition-colors duration-200 ease-in-out cursor-pointer hover:text-muted-foreground ${
                    activeSection === "about" ? "text-muted-foreground" : ""
                  }`}
                >
                  Sobre mí
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("projects")}
                  className={`transition-colors duration-200 ease-in-out cursor-pointer hover:text-muted-foreground ${
                    activeSection === "projects" ? "text-muted-foreground" : ""
                  }`}
                >
                  Proyectos
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button
                  onClick={() => scrollToSection("contact")}
                  className={`transition-colors duration-200 ease-in-out cursor-pointer hover:text-muted-foreground ${
                    activeSection === "contact" ? "text-muted-foreground" : ""
                  }`}
                >
                  Contacto
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-3">
          <DownloadCvButton />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
