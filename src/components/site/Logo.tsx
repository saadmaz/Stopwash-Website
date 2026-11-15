import { cn } from "@/lib/utils";

/**
 * Text wordmark placeholder: swap for the official STOPWASH logo file when supplied.
 * `tone` picks the treatment for light or dark surfaces.
 */
export function Logo({ className = "", tone = "dark" }: { className?: string; tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <span className={cn("inline-flex items-center gap-2.5 font-display text-[1.0625rem] font-bold uppercase tracking-[0.02em]", light ? "text-snow" : "text-ink", className)}>
      <span className={cn("grid h-7 w-7 place-items-center rounded-[0.3rem] text-[0.6875rem] font-extrabold", light ? "bg-leaf text-ink" : "bg-navy text-snow")}>SW</span>
      <span>
        STOP<span className={light ? "text-leaf" : "text-moss"}>WASH</span>
      </span>
    </span>
  );
}
