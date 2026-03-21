"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { contacts } from "@/data";
import TextReveal from "@/components/ui/TextReveal";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !contentRef.current) return;

    const children = contentRef.current.children;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        { opacity: 0, y: 40 },
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

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6 py-24"
    >
      <div ref={contentRef} className="max-w-2xl w-full text-center">
        <TextReveal tag="h2" className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Get in Touch
        </TextReveal>
        <p className="text-foreground-muted text-lg mb-12">
          Feel free to reach out for collaborations or just a friendly hello.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between bg-surface border border-border rounded-2xl px-6 py-4 hover:border-accent transition-colors duration-300"
            >
              <span className="text-sm text-foreground-muted">
                {contact.label}
              </span>
              <span className="text-sm font-mono text-foreground">
                {contact.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
