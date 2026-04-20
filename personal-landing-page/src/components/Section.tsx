interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-4xl px-6 py-24 ${className}`}
    >
      {children}
    </section>
  );
}
