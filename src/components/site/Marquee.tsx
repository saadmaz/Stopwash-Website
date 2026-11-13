import { cn } from "@/lib/utils";

/** Decorative ticker band. Hidden from assistive tech; stops under reduced motion. */
export function Marquee({ items, className, separator = "✦" }: { items: string[]; className?: string; separator?: string }) {
  const row = (
    <div className="flex shrink-0 items-center gap-8 pr-8">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-8">
          <span>{t}</span>
          <span className="text-[0.6em] opacity-70">{separator}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div aria-hidden className={cn("overflow-hidden whitespace-nowrap border-y border-ink/10 bg-lime py-3 font-display text-xl font-bold uppercase tracking-tight text-ink md:py-4 md:text-3xl", className)}>
      <div className="marquee flex w-max">
        {row}
        {row}
      </div>
    </div>
  );
}
