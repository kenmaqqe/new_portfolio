"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useTranslations, useLocale } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";

export default function Experience() {
  const t = useTranslations("experience");
  const sectionRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();

  useEffect(() => {
    if (!sectionRef.current || !itemsRef.current) return;

    const items = Array.from(itemsRef.current.children) as HTMLElement[];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [locale]);

  const experiences = t.raw("items") as Array<{
    company: string;
    role: string;
    period: string;
    points: string[];
    skills?: string[];
  }>;

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="min-h-[50vh] flex items-center justify-center px-6 py-24 bg-background"
    >
      <div className="max-w-4xl w-full">
        <SectionHeading>{t("heading")}</SectionHeading>
        <div ref={itemsRef} className="space-y-12 border-l border-border pl-8 relative ml-4">
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-border border-4 border-background group-hover:bg-foreground transition-colors duration-300" />
              <div className="flex flex-col md:flex-row md:justify-between mb-2">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                  <p className="text-foreground-muted font-medium">{exp.company}</p>
                </div>
                <span className="text-sm font-mono text-foreground-subtle md:text-right mt-1 md:mt-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 mb-4">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="text-foreground-muted text-sm leading-relaxed flex gap-2">
                    <span className="text-foreground-subtle shrink-0 mt-1.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              {exp.skills && (
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <Tag key={skill} className="text-[10px] py-0.5 px-2">
                      {skill}
                    </Tag>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
