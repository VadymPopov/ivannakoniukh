import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  bgColor?: string;
  styles?: string;
  id?: string;
}

export function Section({ children, bgColor, styles, id }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "px-6 py-10 md:px-16 md:py-12 lg:px-20 lg:py-24",
        bgColor,
        styles
      )}>
      {children}
    </section>
  );
}
