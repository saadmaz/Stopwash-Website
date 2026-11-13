import { cn } from "@/lib/utils";

/**
 * Typographic brand composition used wherever real photography is not yet available.
 * Purely decorative: no fake imagery, no implied facilities.
 */
export function BrandPanel({ word, label, className, tone = "navy" }: { word: string; label?: string | undefined; className?: string | undefined; tone?: "navy" | "lime" | "ink" }) {
  const toneCls =
    tone === "lime" ? "bg-lime text-ink" : tone === "ink" ? "bg-ink text-snow" : "bg-navy text-snow";
  return (
    <div aria-hidden className={cn("relative isolate overflow-hidden rounded-md [container-type:inline-size]", toneCls, className)}>
      <div className="grid-lines absolute inset-0 opacity-70" />
      <div className={cn("absolute -right-1/4 top-0 h-full w-3/4", tone === "lime" ? "opacity-20 [background-image:repeating-linear-gradient(-60deg,var(--ink)_0_2px,transparent_2px_22px)]" : "motion-lines")} />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" preserveAspectRatio="none" fill="none">
        <path d="M-10 250 C 90 250, 120 120, 210 130 S 330 40, 420 30" stroke="currentColor" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="6 8" vectorEffect="non-scaling-stroke" />
      </svg>
      <span className="absolute left-4 top-4 micro opacity-70">STOPWASH</span>
      {label && <span className="absolute right-4 top-4 micro opacity-70">{label}</span>}
      <span
        className={cn(
          "absolute -bottom-[0.12em] left-3 font-display font-bold uppercase leading-none tracking-[-0.06em]",
          tone === "lime" ? "text-ink" : "text-outline text-lime",
        )}
        style={{ fontSize: "clamp(4rem, 14cqw, 11rem)" }}
      >
        {word}
      </span>
    </div>
  );
}
