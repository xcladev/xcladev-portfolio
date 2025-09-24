"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

function AnimatedBackgroundContent() {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    // const points = 5;
    // const max = 6.4;
    const speed = 0.002;

    const colors =
      theme === "dark"
        ? [
            "rgba(99, 102, 241, 0.25)",
            "rgba(79, 70, 229, 0.2)",
            "rgba(59, 130, 246, 0.15)",
          ]
        : [
            "rgba(59, 130, 246, 0.5)",
            "rgba(99, 102, 241, 0.4)",
            "rgba(79, 70, 229, 0.3)",
          ];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const draw = () => {
      if (!ctx) return;

      time += speed;
      const width = canvas.width;
      const height = canvas.height;

      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(0, height);

        for (let x = 0; x < width; x += 10) {
          const waveHeight = theme === "dark" ? 45 : 60;
          const frequency = theme === "dark" ? 0.0025 : 0.0018;
          const y =
            Math.sin(x * frequency + time + i * 1.5) * waveHeight * (i + 1) +
            Math.cos(x * (frequency - 0.0005) - time * 1.2 + i) *
              (waveHeight * 1.2) +
            height * 0.7 -
            i * 12;

          ctx.lineTo(x, y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, colors[i]);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.fillStyle = gradient;
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-screen -z-10">
      <canvas
        ref={canvasRef}
        style={{
          display: "block",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          zIndex: -1,
          opacity: theme === "dark" ? 0.8 : 0.9,
          mixBlendMode: theme === "dark" ? "multiply" : "hard-light",
          transition:
            "opacity 0.3s ease-in-out, background-color 0.3s ease-in-out",
          backgroundColor:
            theme === "dark" ? "transparent" : "rgba(245, 245, 245, 0.2)",
        }}
      />
    </div>
  );
}

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <AnimatedBackgroundContent />;
}
