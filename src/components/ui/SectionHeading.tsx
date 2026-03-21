interface SectionHeadingProps {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      {children}
    </h2>
  );
}
