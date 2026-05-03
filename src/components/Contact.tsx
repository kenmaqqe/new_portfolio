"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useTranslations, useLocale } from "next-intl";
import TextReveal from "@/components/ui/TextReveal";
import { ArrowUpRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { Link } from "@/i18n/navigation";

const contactHrefs = {
  email: "mailto:tymoshenko.d.o@tuta.io",
  github: "https://github.com/kenmaqqe",
  linkedin: "https://linkedin.com/in/kenmaqqe",
  telegram: "https://t.me/kenmaqqe",
};

export default function Contact() {
  const t = useTranslations("contact");
  const locale = useLocale();
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const children = contentRef.current.children;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [locale]);

  const contactItems = [
    { key: "email", label: t("items.email.label"), value: t("items.email.value") },
    { key: "github", label: t("items.github.label"), value: t("items.github.value") },
    { key: "linkedin", label: t("items.linkedin.label"), value: t("items.linkedin.value") },
    { key: "telegram", label: t("items.telegram.label"), value: t("items.telegram.value") },
  ];

  const currentYear = new Date().getFullYear();
  const copyright = t("copyright", { year: currentYear.toString() });

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24 bg-surface/20"
    >
      <div ref={contentRef} className="max-w-4xl w-full">
        <div className="mb-20">
          <TextReveal tag="h2" className="text-5xl md:text-8xl font-black mb-8 tracking-tighter">
            {t("heading")}
          </TextReveal>
          <p className="text-foreground-muted text-xl max-w-xl">
            {t("description")}
          </p>
        </div>

        <div className="flex flex-col gap-0 border-t border-border">
          {contactItems.map((contact) => (
            <a
              key={contact.key}
              href={contactHrefs[contact.key as keyof typeof contactHrefs]}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between py-10 border-b border-border hover:px-6 transition-all duration-500 ease-expo"
            >
              <div className="flex items-baseline gap-4 md:gap-6 min-w-0">
                <span className="text-[10px] uppercase font-mono text-foreground-subtle group-hover:text-foreground transition-colors shrink-0">
                  {contact.label}
                </span>
                <span className="text-xl sm:text-3xl md:text-5xl font-medium text-foreground tracking-tight group-hover:translate-x-4 transition-transform duration-500 break-all sm:break-normal">
                  {contact.value}
                </span>
              </div>
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-foreground group-hover:border-foreground group-hover:text-background transition-all duration-500 rotate-[-45deg] group-hover:rotate-0 shrink-0">
                <ArrowUpRight size={24} />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-24 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-mono text-foreground-subtle uppercase tracking-widest">
            {copyright}
          </p>
          <div className="flex gap-8">
            <Magnetic>
              <a href="#hero" className="text-xs font-mono text-foreground-muted hover:text-foreground uppercase tracking-widest transition-colors cursor-pointer">
                {t("backToTop")}
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
