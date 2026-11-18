import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

type Props = {
  src: string | null;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Shown on the brand placeholder when no photo exists yet. */
  label?: string | undefined;
  priority?: boolean;
};

/** Rounded photograph. Falls back to a plain brand panel until real photography is supplied. */
export function Photo({ src, alt, className, imgClassName, label, priority }: Props) {
  if (!src) {
    return (
      <div
        aria-hidden
        className={cn(
          "flex flex-col items-center justify-center gap-3 overflow-hidden rounded-2xl border border-border bg-paper p-6 text-center text-ink",
          className,
        )}
      >
        <Logo className="h-6 text-ink" />
        {label && <p className="text-sm font-medium text-muted-foreground">{label}</p>}
      </div>
    );
  }
  return (
    <div className={cn("overflow-hidden rounded-2xl bg-paper", className)}>
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        {...(priority ? { fetchPriority: "high" as const } : {})}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
    </div>
  );
}
