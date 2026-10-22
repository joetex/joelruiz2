import type { ReactNode } from 'react';

interface SectionHeadingProps {
  index: string;
  label: string;
  children: ReactNode;
}

export function SectionHeading({ index, label, children }: SectionHeadingProps) {
  return (
    <div className="mb-10 sm:mb-12">
      <p className="font-mono text-sm text-accent mb-3">
        {index} <span className="text-muted-foreground">/ {label}</span>
      </p>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{children}</h2>
    </div>
  );
}
