import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Accessible accordion built on <details>, so it works before JavaScript loads. */
export function FaqList({
  items,
  className,
}: {
  items: { q: string; a: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "divide-y divide-border overflow-hidden rounded-3xl border border-border bg-snow",
        className,
      )}
    >
      {items.map((f, i) => (
        <details key={f.q} className="group" {...(i === 0 ? { open: true } : {})}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-paper/60 md:px-8 md:py-6 [&::-webkit-details-marker]:hidden">
            <span className="font-display text-lg font-bold leading-snug tracking-tight md:text-xl">
              {f.q}
            </span>
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-paper transition-colors group-open:bg-lime">
              <Plus
                className="h-4 w-4 transition-transform duration-300 group-open:rotate-45"
                aria-hidden
              />
            </span>
          </summary>
          <p className="max-w-3xl px-6 pb-6 leading-relaxed text-muted-foreground md:px-8 md:pb-7">
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}
