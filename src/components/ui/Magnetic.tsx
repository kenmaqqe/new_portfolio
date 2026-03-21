"use client";

import { useRef } from "react";
import { gsap } from "@/lib/gsap";

interface MagneticProps {
  children: React.ReactNode;
  className?: string;
  as?: "a" | "button" | "div";
  href?: string;
  onClick?: () => void;
}

export default function Magnetic({
  children,
  className = "",
  as: Tag = "div",
  href,
  onClick,
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(el, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const onMouseLeave = () => {
    const el = ref.current;
    if (!el) return;

    gsap.to(el, {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={className}
      href={Tag === "a" ? href : undefined}
      onClick={onClick}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </Tag>
  );
}
