import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const ctaVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-md px-6 py-4 font-display text-sm font-bold uppercase tracking-wider transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:opacity-60",
  {
    variants: {
      variant: {
        lime: "bg-lime text-ink hover:-translate-y-0.5 hover:bg-snow",
        outline: "border border-current text-foreground hover:bg-foreground hover:text-background",
        ink: "bg-ink text-lime hover:-translate-y-0.5 hover:bg-navy",
        ghost: "px-0 py-2 text-foreground underline decoration-lime decoration-2 underline-offset-8 hover:decoration-4",
      },
    },
    defaultVariants: { variant: "lime" },
  },
);

type Props = VariantProps<typeof ctaVariants> & { children: ReactNode; className?: string };

export function Cta({ to, href, search, children, variant, className }: Props & { to?: string; href?: string; search?: Record<string, string> }) {
  const inner = (
    <>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
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
