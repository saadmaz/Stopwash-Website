import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/data/site";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { Cta } from "./Cta";

export function Navbar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  // Close the mobile menu whenever the route changes.
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

  const isActive = (item: (typeof mainNav)[number]) =>
    item.to === "/" ? pathname === "/" : item.children ? item.children.some((c) => pathname.startsWith(c.to)) : pathname.startsWith(item.to);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-colors duration-300", scrolled || open ? "border-b border-border bg-navy/95 backdrop-blur" : "bg-transparent")}>
      <nav className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 py-4 md:px-10" aria-label="Main">
        <Link to="/" aria-label="STOPWASH home"><Logo className="text-snow" /></Link>
        <ul className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.label} className="group relative">
                <Link
                  to={item.to as "/"}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                  className={cn("relative flex items-center gap-1 py-2 text-sm font-medium transition-colors hover:text-lime", active ? "text-lime" : "text-snow/85")}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />}
                  <span className={cn("absolute -bottom-0.5 left-0 h-0.5 bg-lime transition-all duration-300 group-hover:w-full", active ? "w-full" : "w-0")} />
                </Link>
                {item.children && (
                  <div className="invisible absolute -left-3 top-full translate-y-1 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    <ul className="min-w-56 rounded-md border border-border bg-ink p-2">
                      {item.children.map((c, i) => (
                        <li key={c.to}>
                          <Link to={c.to as "/"} className="flex items-center gap-3 rounded px-3 py-2.5 text-sm text-snow/85 transition-colors hover:bg-lime hover:text-ink">
                            <span className="micro opacity-60">{String(i + 1).padStart(2, "0")}</span>{c.label}
                          </Link>
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
          <Cta to="/locations" className="px-5 py-3 text-xs">Find a Stopwash</Cta>
        </div>
        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-border text-snow lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="page-fade h-[calc(100dvh-4.5rem)] overflow-y-auto bg-navy px-5 pb-10 lg:hidden">
          <ul className="divide-y divide-border">
            {mainNav.map((item) => (
              <li key={item.label} className="py-3">
                {item.children ? (
                  <>
                    <p className="micro pb-2 pt-2 text-steel">{item.label}</p>
                    <ul>
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to as "/"} className={cn("block py-1.5 font-display text-3xl font-bold uppercase tracking-tight hover:text-lime", pathname.startsWith(c.to) ? "text-lime" : "text-snow")}>{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.to as "/"} className={cn("block py-1.5 font-display text-3xl font-bold uppercase tracking-tight hover:text-lime", isActive(item) ? "text-lime" : "text-snow")}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Cta to="/locations">Find a Stopwash</Cta>
            <Cta to="/franchise" variant="outline">Build a Stopwash</Cta>
          </div>
        </div>
      )}
    </header>
  );
}
