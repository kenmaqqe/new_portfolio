"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { navLinks } from "@/data";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";

export default function Navbar() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setProgress(scrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2px] bg-foreground/10 z-[60]">
        <div 
          className="h-full bg-foreground transition-all duration-150 ease-out" 
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-3xl rounded-full border border-transparent ${
          scrolled
            ? "bg-surface/60 backdrop-blur-xl border-border/50 py-2 shadow-2xl shadow-black/50"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto px-6 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="font-mono text-sm font-semibold text-foreground hover:text-foreground-muted transition-colors shrink-0"
            >
              DT
            </a>
            
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-foreground/5 border border-border/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] uppercase tracking-wider font-medium text-emerald-500/80">{t("available")}</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4 md:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-foreground-muted hover:text-foreground transition-colors duration-200 whitespace-nowrap"
              >
                {t(link.label.toLowerCase())}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <LanguageSwitcher />

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="sm:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[3.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-px bg-foreground transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[3.5px]" : ""
                }`}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="sm:hidden mt-2 bg-surface/90 backdrop-blur-xl border border-border/50 rounded-3xl mx-2 px-6 pb-4 overflow-hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-4 text-sm text-foreground-muted hover:text-foreground border-b border-border/10 last:border-none transition-colors"
              >
                {t(link.label.toLowerCase())}
              </a>
            ))}
          </div>
        )}
      </nav>
    </>
  );
}
