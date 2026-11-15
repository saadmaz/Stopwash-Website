import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { landingHeroPaths, mainNav } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Cta } from "./Cta";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 16);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  // Pages that open with a dark landing hero get a transparent bar until the visitor scrolls.
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const overDark = landingHeroPaths.has(path) && !scrolled && !open;

  const isActive = (item: (typeof mainNav)[number]) =>
    item.to === "/" ? pathname === "/" : item.children ? item.children.some((c) => pathname.startsWith(c.to)) : pathname.startsWith(item.to);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300",
        overDark ? "bg-transparent text-snow" : "bg-snow/95 text-ink shadow-[0_1px_0_rgb(5_10_18/0.08)] backdrop-blur",
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center justify-between px-5 md:px-8" aria-label="Main">
        <Link to="/" aria-label="STOPWASH home"><Logo className={overDark ? "text-snow" : "text-ink"} wash={overDark ? "text-lime" : "text-leaf"} /></Link>
        <ul className="hidden items-center gap-1 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.label} className="group relative">
                <Link
                  to={item.to as "/"}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                  className={cn(
                    "flex items-center gap-1 rounded-full px-4 py-2 text-[0.9375rem] font-medium transition-colors",
                    overDark ? "hover:bg-snow/10" : "hover:bg-paper",
                    active && (overDark ? "bg-snow/10" : "bg-paper"),
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-4 w-4 opacity-60 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="min-w-52 rounded-2xl border border-border bg-snow p-2 text-ink shadow-lg shadow-ink/5">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to as "/"} className="block rounded-xl px-4 py-2.5 text-[0.9375rem] hover:bg-paper">{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:block">
          <Cta to="/franchise" className="px-5 py-2.5" arrow={false}>Become a franchisee</Cta>
        </div>
        <button
          className={cn("grid h-11 w-11 place-items-center rounded-full lg:hidden", overDark ? "hover:bg-snow/10" : "hover:bg-paper")}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="page-fade h-[calc(100dvh-4.5rem)] overflow-y-auto bg-snow px-5 pb-10 pt-2 lg:hidden">
          <ul className="divide-y divide-border">
            {mainNav.map((item) => (
              <li key={item.label} className="py-2">
                {item.children ? (
                  <>
                    <p className="eyebrow py-2 text-muted-foreground">{item.label}</p>
                    <ul>
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to as "/"} className={cn("block py-2 font-display text-2xl font-bold tracking-tight", pathname.startsWith(c.to) && "text-leaf")}>{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.to as "/"} className={cn("block py-2 font-display text-2xl font-bold tracking-tight", isActive(item) && "text-leaf")}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Cta to="/franchise">Become a franchisee</Cta>
            <Cta to="/locations" variant="ink">Find a STOPWASH</Cta>
          </div>
        </div>
      )}
    </header>
  );
}
