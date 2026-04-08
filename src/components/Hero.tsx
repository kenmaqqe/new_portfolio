"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { heroData } from "@/data";
import Magnetic from "@/components/ui/Magnetic";
import TextReveal from "@/components/ui/TextReveal";
import Parallax from "@/components/ui/Parallax";
import type { Particle } from "@/types";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const roleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas;
    const cx = ctx;

    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;
    const particles: Particle[] = [];
    const particleCount = 80;
    const colors = ["#333", "#555", "#777"];

    function resize() {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    }

    function createParticles() {
      particles.length = 0;
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * c.width,
          y: Math.random() * c.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    }

    function animate() {
      cx.clearRect(0, 0, c.width, c.height);

      for (const p of particles) {
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 150) {
          const force = (150 - dist) / 150;
          p.x -= dx * force * 0.02;
          p.y -= dy * force * 0.02;
        }

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0) p.x = c.width;
        if (p.x > c.width) p.x = 0;
        if (p.y < 0) p.y = c.height;
        if (p.y > c.height) p.y = 0;

        cx.beginPath();
        cx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        cx.fillStyle = p.color;
        cx.globalAlpha = p.opacity;
        cx.fill();
      }

      cx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    }

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    resize();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resize();
      createParticles();
    });
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  useEffect(() => {
    const elements = [subtitleRef.current, roleRef.current, ctaRef.current];
    const valid = elements.filter(Boolean);

    gsap.fromTo(
      valid,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6"
    >
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at center, black, transparent 80%)'
        }}
      />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ zIndex: 1 }}
      />
      <div className="relative z-10 text-center max-w-3xl">
        <Parallax speed={0.15}>
          <p
            ref={subtitleRef}
            className="font-mono text-foreground-muted text-sm tracking-widest uppercase mb-4 opacity-0"
          >
            {heroData.greeting}
          </p>
        </Parallax>

        <TextReveal
          tag="h1"
          className="text-4xl md:text-7xl font-bold tracking-tight mb-6 whitespace-nowrap"
        >
          {heroData.name}
        </TextReveal>

        <Parallax speed={0.1}>
          <p
            ref={roleRef}
            className="text-xl text-foreground-muted mb-8 opacity-0"
          >
            {heroData.role}
          </p>
        </Parallax>

        <div ref={ctaRef} className="flex gap-4 justify-center opacity-0">
          <Magnetic as="a" href={heroData.cta.primary.href}>
            <span className="px-8 py-3 bg-foreground text-background rounded-full font-medium hover:opacity-90 transition-opacity inline-block">
              {heroData.cta.primary.label}
            </span>
          </Magnetic>
          <Magnetic as="a" href={heroData.cta.secondary.href}>
            <span className="px-8 py-3 border border-border rounded-full font-medium hover:border-accent transition-colors inline-block">
              {heroData.cta.secondary.label}
            </span>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
