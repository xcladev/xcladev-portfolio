"use client";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "@/components/mode-toggle";
import { useScrollSpy } from "@/lib/hooks/useScrollSpy";
import { DownloadCvButton } from "@/components/site/download-cv-button";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  isMenuOpen: boolean;
  onMenuOpenChange: (isOpen: boolean) => void;
}

export function Navbar({ isMenuOpen, onMenuOpenChange }: NavbarProps) {
  const sectionIds = ["home", "about", "projects", "contact"];
  const activeSection = useScrollSpy(sectionIds, 100);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onMenuOpenChange(false);
    }
  };

  return (
    <>
      {/* Overlay when menu is open */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm"
          onClick={() => onMenuOpenChange(false)}
        />
      )}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("home")}
              className="font-semibold tracking-tight transition-colors duration-200 ease-in-out cursor-pointer hover:text-muted-foreground"
            >
              <span>Cla</span>
              <span className="text-muted-foreground">dev</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-6">
                {sectionIds.map((section) => {
                  const label = {
                    home: "Inicio",
                    about: "Sobre mí",
                    projects: "Proyectos",
                    contact: "Contacto",
                  }[section];

                  return (
                    <NavigationMenuItem key={section}>
                      <button
                        onClick={() => scrollToSection(section)}
                        className={`transition-colors duration-200 ease-in-out cursor-pointer hover:text-muted-foreground ${
                          activeSection === section
                            ? "text-muted-foreground"
                            : ""
                        }`}
                      >
                        {label}
                      </button>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => onMenuOpenChange(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-3">
            <DownloadCvButton />
            <ModeToggle />
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg md:hidden">
              <div className="container mx-auto px-4 py-2 flex flex-col space-y-3 pb-4">
                {sectionIds.map((section) => {
                  const label = {
                    home: "Inicio",
                    about: "Sobre mí",
                    projects: "Proyectos",
                    contact: "Contacto",
                  }[section];

                  return (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`w-full text-left py-2.5 px-4 transition-colors duration-200 font-medium border-l-2 ${
                        activeSection === section
                          ? "border-primary text-foreground bg-muted/30"
                          : "border-transparent text-foreground/90 hover:bg-muted/30 hover:text-foreground"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
                <div className="pt-3 border-t border-border/50 mt-2 flex justify-end items-center gap-3">
                  <DownloadCvButton />
                  <ModeToggle />
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
