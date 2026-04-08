"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { skillCategories } from "@/data";
import TextReveal from "@/components/ui/TextReveal";
import { Layout, Palette, Hammer, Zap } from "lucide-react";

const iconMap: Record<string, any> = {
  Frontend: Layout,
  Styling: Palette,
  Tools: Hammer,
  Other: Zap,
};

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = Array.from(cardsRef.current.children);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, scale: 0.9, y: 20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.4)",
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
      className="min-h-[70vh] flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <TextReveal tag="h2" className="text-3xl md:text-5xl font-bold mb-16 text-center">
          Skills & Expertise
        </TextReveal>
        <div
          ref={cardsRef}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {skillCategories.map((category) => {
            const Icon = iconMap[category.title] || Zap;
            return (
              <div
                key={category.title}
                className="group p-8 rounded-3xl bg-surface/30 backdrop-blur-md border border-border hover:border-foreground/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-12 h-12 rounded-2xl bg-foreground/5 flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-colors duration-500">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[12px] font-mono text-foreground-muted bg-foreground/5 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
