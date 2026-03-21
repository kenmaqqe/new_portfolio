interface TagProps {
  children: React.ReactNode;
}

export default function Tag({ children }: TagProps) {
  return (
    <span className="px-3 py-1 text-xs font-mono bg-background rounded-full border border-border text-foreground-subtle">
      {children}
    </span>
  );
}
