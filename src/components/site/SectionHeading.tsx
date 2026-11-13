import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionLabel } from "./PageHero";

/** Numbered micro-label + oversized headline + optional intro. */
export function SectionHeading({
  n,
  label,
  title,
  intro,
  className,
  size = "lg",
  as: Tag = "h2",
}: {
  n?: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  size?: "lg" | "md";
  as?: "h1" | "h2";
}) {
  return (
    <div className={cn("max-w-5xl", className)}>
      <Reveal>
        <SectionLabel n={n}>{label}</SectionLabel>
        <Tag className={size === "lg" ? "display-lg" : "display-md"}>{title}</Tag>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <div className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">{intro}</div>
        </Reveal>
      )}
    </div>
  );
}

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto max-w-[1440px] px-5 md:px-10", className)}>{children}</div>;
}
