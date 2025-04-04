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
        "px-5 py-12 md:px-10 md:py-16 lg:px-12 lg:py-20 xl:px-16 xl:py-24",
        bgColor,
        styles
      )}>
      {children}
    </section>
  );
}
