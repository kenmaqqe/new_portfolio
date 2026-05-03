"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useTranslations, useLocale } from "next-intl";
import CodeAvatar from "@/components/ui/CodeAvatar";

export default function About() {
  const t = useTranslations("about");
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();

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
  }, [locale]);

  const paragraphs = t.raw("paragraphs") as string[];

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
            {t("title")}
          </h2>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className={`text-foreground-muted text-lg leading-relaxed ${
                i === paragraphs.length - 1 ? "mb-6" : "mb-4"
              }`}
            >
              {text}
            </p>
          ))}
          <div className="flex gap-4">
            <div
              className="px-4 py-2 bg-surface rounded-lg border border-border"
            >
              <span className="text-foreground font-mono text-sm">
                2+
              </span>
              <span className="text-foreground-muted text-sm ml-2">
                {t("stats.years")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
