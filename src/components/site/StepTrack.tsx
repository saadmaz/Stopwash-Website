import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Step = { title: string; text: string };

/**
 * Numbered process. Compact rows on mobile (number beside text), cards on desktop.
 * `trailing` fills the final grid cell, e.g. a call to action after an odd number of steps.
 */
export function StepTrack({
  steps,
  className,
  trailing,
}: {
  steps: Step[];
  className?: string;
  trailing?: ReactNode;
}) {
  const cols = steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <ol className={cn("grid gap-3 sm:grid-cols-2 sm:gap-4", cols, className)}>
      {steps.map((s, i) => (
        <li key={s.title}>
          <Reveal
            delay={i * 0.04}
            className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5 lg:block lg:p-6"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime text-sm font-bold text-ink">
              {i + 1}
            </span>
            <div className="lg:mt-5">
              <h3 className="font-display text-lg font-bold leading-snug tracking-tight lg:text-xl">
                {s.title}
              </h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          </Reveal>
        </li>
      ))}
      {trailing && <li className="sm:col-span-2 lg:col-span-1">{trailing}</li>}
    </ol>
  );
}
