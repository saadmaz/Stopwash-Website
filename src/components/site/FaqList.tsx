import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

/** Accessible accordion built on <details>, so it works before JavaScript loads. */
export function FaqList({ items, className }: { items: { q: string; a: string }[]; className?: string }) {
  return (
    <div className={cn("divide-y divide-border border-y border-border", className)}>
      {items.map((f, i) => (
        <details key={f.q} className="group" {...(i === 0 ? { open: true } : {})}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-left transition-colors hover:text-moss md:py-6 [&::-webkit-details-marker]:hidden">
            <span className="text-h3 pr-2">{f.q}</span>
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-border transition-colors group-open:border-moss group-open:text-moss">
              <Plus className="h-4 w-4 transition-transform duration-300 group-open:rotate-45" aria-hidden />
            </span>
          </summary>
          <p className="max-w-3xl pb-6 pr-10 leading-relaxed text-muted-foreground md:pb-7">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
