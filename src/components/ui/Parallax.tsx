"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function Parallax({
  children,
  speed = 0.3,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: -50 * speed,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
