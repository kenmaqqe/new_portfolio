"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { skillCategories } from "@/data";
import TextReveal from "@/components/ui/TextReveal";
import Card from "@/components/ui/Card";

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = cardsRef.current.children;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <TextReveal tag="h2" className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Skills
        </TextReveal>
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category) => (
            <Card key={category.title}>
              <h3 className="text-lg font-semibold mb-4 text-foreground">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-foreground-muted text-sm font-mono"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
