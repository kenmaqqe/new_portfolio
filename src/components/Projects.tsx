"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useTranslations, useLocale } from "next-intl";
import SectionHeading from "@/components/ui/SectionHeading";
import Tag from "@/components/ui/Tag";
import IconButton from "@/components/ui/IconButton";
import { projects } from "@/data";

const GitHubIcon = (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = (
  <svg
    className="w-4 h-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-4.5-6H18m0 0v4.5m0-4.5L10.5 13.5"
    />
  </svg>
);

export default function Projects() {
  const t = useTranslations("projects");
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const locale = useLocale();

  useEffect(() => {
    if (!sectionRef.current || !cardsRef.current) return;

    const cards = Array.from(cardsRef.current.children) as HTMLElement[];

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    cards.forEach((card) => {
      const enter = () => {
        gsap.to(card, {
          scale: 1.03,
          borderColor: "#444",
          duration: 0.3,
          ease: "power2.out",
        });
      };
      const leave = () => {
        gsap.to(card, {
          scale: 1,
          borderColor: "#222",
          duration: 0.3,
          ease: "power2.out",
        });
      };
      card.addEventListener("mouseenter", enter);
      card.addEventListener("mouseleave", leave);
    });

    return () => ctx.revert();
  }, [locale]);

  const translatedProjects = t.raw("items") as Array<{
    title: string;
    description: string;
  }>;

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div className="max-w-5xl w-full">
        <SectionHeading>{t("heading")}</SectionHeading>
        <div ref={cardsRef} className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.title}
              data-cursor-text={t("view")}
              data-cursor-img={project.image}
              className={`bg-surface/50 backdrop-blur-md border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-foreground/5 hover:border-foreground/20 group ${
                i === 0 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-white transition-colors">
                  {translatedProjects[i].title}
                </h3>
                <span className="text-[10px] font-mono text-foreground-subtle border border-border px-2 py-0.5 rounded-full uppercase tracking-tighter">
                  2024
                </span>
              </div>
              <p className="text-foreground-muted text-sm leading-relaxed mb-4 min-h-[3rem]">
                {translatedProjects[i].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <IconButton href={project.github} icon={GitHubIcon}>
                    {t("github")}
                  </IconButton>
                )}
                <IconButton href={project.live} icon={ExternalIcon} variant="filled">
                  {t("live")}
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
