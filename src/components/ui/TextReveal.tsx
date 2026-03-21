"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

interface TextRevealProps {
  children: string;
  className?: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
}

export default function TextReveal({
  children,
  className = "",
  tag: Tag = "h2",
  delay = 0,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const chars = ref.current.querySelectorAll("span");

    gsap.fromTo(
      chars,
      { opacity: 0, y: 20, rotateX: -40 },
      {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.5,
        stagger: 0.03,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [delay]);

  return (
    <div ref={ref} className="perspective-[800px]">
      <Tag className={className}>
        {children.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block"
            style={{ transformStyle: "preserve-3d" }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </Tag>
    </div>
  );
}
