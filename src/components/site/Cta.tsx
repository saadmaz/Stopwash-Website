import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Compact, confident buttons.
 * `primary` is the solid dark action; everything else is deliberately quieter.
 */
export const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-[0.9375rem] font-medium transition-colors duration-200 sm:whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring disabled:opacity-60",
  {
    variants: {
      variant: {
        primary: "bg-navy text-snow hover:bg-ink",
        ink: "bg-ink text-snow hover:bg-navy",
        outline: "border border-current/25 text-foreground hover:border-current/60 hover:bg-current/5",
        light: "bg-snow text-ink hover:bg-stone",
        link: "rounded-none px-0 py-1 text-foreground underline decoration-leaf decoration-2 underline-offset-[6px] hover:decoration-current",
      },
    },
    defaultVariants: { variant: "primary" },
  },
);

type Props = VariantProps<typeof ctaVariants> & { children: ReactNode; className?: string; arrow?: boolean };

export function Cta({ to, href, search, children, variant, className, arrow = true }: Props & { to?: string; href?: string; search?: Record<string, string> }) {
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />}
    </>
  );
  const cls = cn(ctaVariants({ variant }), className);
  if (href) {
    const external = href.startsWith("http");
    return <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>;
  }
  // Routes come from data, so the path is not statically known here.
  return <Link to={to as "/"} {...(search ? { search: search as never } : {})} className={cls}>{inner}</Link>;
}
