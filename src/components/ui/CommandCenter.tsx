"use client";

import { useEffect, useState, useCallback } from "react";
import { gsap } from "@/lib/gsap";
import { Search, ExternalLink, Mail, User, Briefcase, Terminal } from "lucide-react";

const commands = [
  { icon: User, label: "About Me", href: "#about" },
  { icon: Briefcase, label: "View Projects", href: "#projects" },
  { icon: Mail, label: "Contact Me", href: "#contact" },
  { icon: ExternalLink, label: "GitHub Profile", href: "https://github.com/kenmaqqe", external: true },
  { icon: Terminal, label: "Resume (PDF)", href: "#", external: true },
];

export default function CommandCenter() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        toggleOpen();
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleOpen]);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        ".cmd-overlay",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ".cmd-modal",
        { scale: 0.9, y: 20, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 0.4, ease: "power4.out" }
      );
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="cmd-overlay fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-md px-4">
      <div className="absolute inset-0" onClick={() => setIsOpen(false)} />
      
      <div className="cmd-modal relative w-full max-w-xl bg-surface border border-border rounded-3xl shadow-2xl overflow-hidden">
        <div className="flex items-center gap-3 px-6 py-4 border-b border-border">
          <Search size={20} className="text-foreground-subtle" />
          <input 
            autoFocus
            type="text" 
            placeholder="Type a command or search..." 
            className="flex-1 bg-transparent border-none outline-none text-foreground placeholder:text-foreground-subtle py-2"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded-md border border-border bg-foreground/5 text-[10px] text-foreground-subtle">
            ESC
          </kbd>
        </div>

        <div className="px-3 py-4 max-h-[60vh] overflow-y-auto">
          <p className="px-3 text-[10px] font-mono text-foreground-subtle uppercase tracking-widest mb-2">
            Suggested Commands
          </p>
          <div className="space-y-1">
            {commands.map((cmd) => (
              <a
                key={cmd.label}
                href={cmd.href}
                target={cmd.external ? "_blank" : undefined}
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-foreground/5 group transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-foreground/5 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors">
                  <cmd.icon size={16} />
                </div>
                <span className="text-sm font-medium text-foreground-muted group-hover:text-foreground">
                  {cmd.label}
                </span>
                {cmd.external && <ArrowTopRightIcon />}
              </a>
            ))}
          </div>
        </div>

        <div className="px-6 py-4 bg-foreground/5 border-t border-border flex justify-between items-center">
          <p className="text-[10px] text-foreground-subtle">
            Tip: Use <span className="font-mono text-foreground">↑↓</span> to navigate
          </p>
          <p className="text-[10px] text-foreground-subtle">
            Powered by Antigravity
          </p>
        </div>
      </div>
    </div>
  );
}

function ArrowTopRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto text-foreground-subtle">
      <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6464L10.2929 4L7 4C6.72386 4 6.5 3.77614 6.5 3.5C6.5 3.22386 6.72386 3 7 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24021 12 3.36739 12 3.5L12 8C12 8.27614 11.7761 8.5 11.5 8.5C11.2239 8.5 11 8.27614 11 8L11 4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
    </svg>
  );
}
