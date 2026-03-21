"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { aboutData } from "@/data";
import CodeAvatar from "@/components/ui/CodeAvatar";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
        <div ref={imageRef} className="flex justify-center ">
          <CodeAvatar />
        </div>

        <div ref={textRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {aboutData.title}
          </h2>
          {aboutData.paragraphs.map((text, i) => (
            <p
              key={i}
              className={`text-foreground-muted text-lg leading-relaxed ${
                i === aboutData.paragraphs.length - 1 ? "mb-6" : "mb-4"
              }`}
            >
              {text}
            </p>
          ))}
          <div className="flex gap-4">
            {aboutData.stats.map((stat) => (
              <div
                key={stat.label}
                className="px-4 py-2 bg-surface rounded-lg border border-border"
              >
                <span className="text-foreground font-mono text-sm">
                  {stat.value}
                </span>
                <span className="text-foreground-muted text-sm ml-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
