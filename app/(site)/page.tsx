import { AnimatedBackground } from "@/components/site/animated-background";
import { Separator } from "@/components/ui/separator";

import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ContactSection } from "@/components/sections/contact-section";

export default function Page() {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <div className="relative z-10">
        <HeroSection />
        <Separator />
        <AboutSection />
        <Separator />
        <ProjectsSection />
        <Separator />
        <ContactSection />
      </div>
    </div>
  );
}