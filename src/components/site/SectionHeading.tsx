import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-[1240px] px-5 md:px-8", className)}>{children}</div>;
}

/** Eyebrow + headline + optional intro. */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  className,
  center,
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  center?: boolean;
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      <Tag className={Tag === "h1" ? "text-h1" : "text-h2"}>{title}</Tag>
      {intro && <div className="text-lead mt-5 text-muted-foreground">{intro}</div>}
    </Reveal>
  );
}
