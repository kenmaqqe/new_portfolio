"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useState, useEffect } from "react";

const locales = [
  { code: "en", label: "EN" },
  { code: "uk", label: "UK" },
] as const;

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleSwitch = (code: string) => {
    router.push(pathname, { locale: code });
  };

  return (
    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-foreground/5 border border-border/50">
      {locales.map(({ code, label }) => {
        const isActive = locale === code;
        return (
          <button
            key={code}
            onClick={() => handleSwitch(code)}
            className={`text-xs font-mono px-2 py-0.5 rounded-md transition-all duration-200 ${
              isActive
                ? "bg-foreground text-background font-semibold"
                : "text-foreground-muted hover:text-foreground"
            }`}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}
