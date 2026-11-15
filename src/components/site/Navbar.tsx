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

  // Only the homepage starts over a dark photo; everywhere else the bar is warm neutral.
  const overDark = pathname === "/" && !scrolled && !open;

  const isActive = (item: (typeof mainNav)[number]) =>
    item.to === "/" ? pathname === "/" : item.children ? item.children.some((c) => pathname.startsWith(c.to)) : pathname.startsWith(item.to);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,color] duration-300",
        overDark ? "bg-transparent text-snow" : "bg-paper/92 text-ink shadow-[0_1px_0_rgb(41_45_47/0.1)] backdrop-blur",
      )}
    >
      <nav className="mx-auto flex h-[4.5rem] w-full max-w-[1240px] items-center justify-between px-5 md:px-8" aria-label="Main">
        <Link to="/" aria-label="STOPWASH home"><Logo tone={overDark ? "light" : "dark"} /></Link>
        <ul className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item);
            return (
              <li key={item.label} className="group relative">
                <Link
                  to={item.to as "/"}
                  aria-current={active ? "page" : undefined}
                  aria-haspopup={item.children ? "true" : undefined}
                  className={cn(
                    "flex items-center gap-1 py-2 text-[0.9375rem] transition-colors",
                    "border-b border-transparent",
                    overDark ? "text-snow/85 hover:text-snow" : "text-ink/70 hover:text-ink",
                    active && (overDark ? "border-leaf text-snow" : "border-moss text-ink"),
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-50 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" aria-hidden />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="min-w-52 rounded-lg border border-border bg-snow p-1.5 text-ink shadow-[0_12px_30px_-12px_rgb(28_48_56/0.35)]">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to as "/"} className="block rounded-md px-3.5 py-2.5 text-[0.9375rem] text-ink/75 transition-colors hover:bg-stone hover:text-ink">{c.label}</Link>
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
          <Cta to="/franchise" variant={overDark ? "light" : "primary"} className="px-4 py-2.5" arrow={false}>Build a STOPWASH</Cta>
        </div>
        <button
          className={cn("-mr-2 grid h-11 w-11 place-items-center rounded-md transition-colors lg:hidden", overDark ? "hover:bg-snow/10" : "hover:bg-stone")}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="page-fade h-[calc(100dvh-4.5rem)] overflow-y-auto bg-paper px-5 pb-10 pt-2 lg:hidden">
          <ul className="divide-y divide-border">
            {mainNav.map((item) => (
              <li key={item.label} className="py-3">
                {item.children ? (
                  <>
                    <p className="eyebrow py-1">{item.label}</p>
                    <ul className="mt-1">
                      {item.children.map((c) => (
                        <li key={c.to}>
                          <Link to={c.to as "/"} className={cn("block py-2 font-display text-xl font-semibold tracking-tight", pathname.startsWith(c.to) ? "text-moss" : "text-ink")}>{c.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link to={item.to as "/"} className={cn("block py-2 font-display text-xl font-semibold tracking-tight", isActive(item) ? "text-moss" : "text-ink")}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-3">
            <Cta to="/franchise">Build a STOPWASH</Cta>
            <Cta to="/locations" variant="outline">Find a STOPWASH</Cta>
          </div>
        </div>
      )}
    </header>
  );
}
