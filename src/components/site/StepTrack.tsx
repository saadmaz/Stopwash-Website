import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Step = { title: string; text: string };

/**
 * Numbered process. Compact rows on mobile (number beside text), cards on desktop.
 * `trailing` fills the final grid cell, e.g. a call to action after an odd number of steps.
 */
export function StepTrack({ steps, className, trailing }: { steps: Step[]; className?: string; trailing?: ReactNode }) {
  const cols = steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <ol className={cn("grid gap-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10", cols, className)}>
      {steps.map((s, i) => (
        <li key={s.title}>
          <Reveal delay={i * 0.04} className="flex h-full gap-4 border-t border-border pt-5 lg:block">
            <span className="mt-0.5 text-xs font-medium tabular-nums text-moss lg:mt-0">{String(i + 1).padStart(2, "0")}</span>
            <div className="lg:mt-4">
              <h3 className="text-h3">{s.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          </Reveal>
        </li>
      ))}
      {trailing && <li className="sm:col-span-2 lg:col-span-1">{trailing}</li>}
    </ol>
  );
}
