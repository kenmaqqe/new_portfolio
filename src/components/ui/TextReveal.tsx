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

    const chars = ref.current.querySelectorAll(".reveal-char");

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
  }, [delay, children]);

  const words = children.split(" ");

  return (
    <div ref={ref} className="perspective-midrange">
      <Tag className={className}>
        {words.map((word, wordIndex) => (
          <span key={wordIndex} className="inline-block whitespace-nowrap">
            {word.split("").map((char, charIndex) => (
              <span
                key={charIndex}
                className="inline-block reveal-char"
                style={{ transformStyle: "preserve-3d" }}
              >
                {char}
              </span>
            ))}
            {wordIndex < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </Tag>
    </div>
  );
}
