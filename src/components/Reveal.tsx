import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** "rise" = fade + translateY (default), "veil" = clip-path curtain, "soft" = fade only */
  variant?: "rise" | "veil" | "soft";
  as?: "div" | "section" | "li" | "figure" | "header" | "article" | "p";
};

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
  as = "div",
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const Tag = as as ElementType;

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        variant === "veil" ? "reveal-veil" : variant === "soft" ? "reveal-soft" : "reveal",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
