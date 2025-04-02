import { ReactNode } from "react";

import { cn } from "@/lib/utils";

interface TitleProps {
  children: ReactNode;
  level?: "h1" | "h2" | "h3";
  className?: string;
}

export default function Title({
  children,
  level = "h2",
  className,
}: TitleProps) {
  const Heading = level;
  return (
    <Heading
      className={cn("text-4xl font-semibold tracking-wider", `${className}`)}>
      {children}
    </Heading>
  );
}
