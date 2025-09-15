"use client";

import { useState } from "react";
import { Navbar } from "@/components/site/navbar";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { ScrollToTop } from "@/components/site/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Toaster />
      <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} />
      <main>{children}</main>
      <ScrollToTop isMenuOpen={isMenuOpen} />
      <footer className="border-t py-8 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Sergi Cladera
      </footer>
    </div>
  );
}
