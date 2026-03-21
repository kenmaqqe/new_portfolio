import { ReactNode } from "react";

interface IconButtonProps {
  href: string;
  icon: ReactNode;
  children: ReactNode;
  variant?: "outline" | "filled";
}

export default function IconButton({
  href,
  icon,
  children,
  variant = "outline",
}: IconButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-4 py-2 text-sm font-mono rounded-full transition-all duration-300";
  const styles =
    variant === "filled"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border text-foreground-muted hover:text-foreground hover:border-accent";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles}`}
    >
      {icon}
      {children}
    </a>
  );
}
