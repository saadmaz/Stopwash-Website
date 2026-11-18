import { cn } from "@/lib/utils";
import { LOGO_PATH, LOGO_VIEWBOX, MARK_PATH, MARK_VIEWBOX } from "./logo-art";

/**
 * The official STOPWASH logo. It takes its colour from `currentColor`:
 * lime on dark backgrounds, ink on light ones (never lime on white).
 */
export function Logo({
  className = "",
  variant = "horizontal",
}: {
  className?: string;
  variant?: "horizontal" | "mark";
}) {
  const mark = variant === "mark";
  return (
    <svg
      viewBox={mark ? MARK_VIEWBOX : LOGO_VIEWBOX}
      role="img"
      aria-label="STOPWASH"
      fill="currentColor"
      className={cn("block h-7 w-auto shrink-0", className)}
    >
      <path fillRule="evenodd" d={mark ? MARK_PATH : LOGO_PATH} />
    </svg>
  );
}
