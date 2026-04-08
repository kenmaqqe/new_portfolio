interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className = "" }: TagProps) {
  return (
    <span className={`px-3 py-1 text-xs font-mono bg-background rounded-full border border-border text-foreground-subtle ${className}`}>
      {children}
    </span>
  );
}
