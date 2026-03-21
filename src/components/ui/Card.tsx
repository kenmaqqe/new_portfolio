interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-surface border border-border rounded-2xl p-6 hover:border-accent transition-colors duration-300 ${className}`}
    >
      {children}
    </div>
  );
}
