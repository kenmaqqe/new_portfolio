interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const base = "px-8 py-3 rounded-full font-medium transition-opacity";
  const styles =
    variant === "primary"
      ? "bg-foreground text-background hover:opacity-90"
      : "border border-border hover:border-accent transition-colors";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}
