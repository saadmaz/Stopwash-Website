import { cn } from "@/lib/utils";

/** Text wordmark placeholder: swap for the official STOPWASH logo file when supplied. */
export function Logo({ className = "", wash = "text-lime" }: { className?: string; wash?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2 font-display text-xl font-bold tracking-tight", className)}>
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-lime text-[0.7rem] font-black text-ink">SW</span>
      <span>STOP<span className={wash}>WASH</span></span>
    </span>
  );
}
