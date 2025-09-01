"use client";

import { useState, useEffect } from "react";

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const totalHeight = Math.max(docHeight - winHeight, 1);
      const currentProgress = Math.min(
        Math.max((scrollTop / totalHeight) * 100, 0),
        100
      );

      setScrollProgress(currentProgress);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-muted/30 z-[9999] pointer-events-none">
      <div
        className="h-full bg-primary transition-all duration-200 ease-out shadow-lg"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </div>
  );
}
