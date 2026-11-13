import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Step = { title: string; text: string };

/** Numbered process: a row on desktop, a vertical list on mobile. */
export function StepTrack({ steps, className }: { steps: Step[]; className?: string }) {
  const cols = steps.length >= 7 ? "lg:grid-cols-4" : steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  return (
    <ol className={cn("grid gap-4 sm:grid-cols-2", cols, className)}>
      {steps.map((s, i) => (
        <li key={s.title}>
          <Reveal delay={i * 0.05} className="h-full rounded-2xl border border-border bg-card p-6">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-sm font-bold text-ink">{i + 1}</span>
            <h3 className="text-h3 mt-5">{s.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.text}</p>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
