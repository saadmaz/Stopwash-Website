import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav } from "@/data/site";
import { Logo } from "./Logo";
import { Cta } from "./Cta";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b border-border bg-navy/95 backdrop-blur" : "bg-transparent"}`}>
      <nav className="mx-auto flex h-18 max-w-[1440px] items-center justify-between px-5 py-4 md:px-10" aria-label="Main">
        <Link to="/" aria-label="STOPWASH home" onClick={() => setOpen(false)}><Logo className="text-snow" /></Link>
        <ul className="hidden items-center gap-8 lg:flex">
          {mainNav.map((item) => (
            <li key={item.label} className="group relative">
              <Link
                to={item.to as "/"}
                className="relative flex items-center gap-1 py-2 text-sm font-medium text-snow/85 transition-colors hover:text-lime"
                activeProps={{ className: "text-lime" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />}
                <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-lime transition-all duration-300 group-hover:w-full" />
              </Link>
              {item.children && (
                <div className="invisible absolute left-0 top-full pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-52 rounded-md border border-border bg-ink p-2">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <Link to={c.to as "/"} className="block rounded px-3 py-2.5 text-sm text-snow/85 hover:bg-lime hover:text-ink">{c.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="hidden lg:block">
          <Cta to="/locations" className="px-5 py-3 text-xs">Find a Stopwash</Cta>
        </div>
        <button className="grid h-11 w-11 place-items-center rounded-md border border-border text-snow lg:hidden" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>
      {open && (
        <div className="h-[calc(100dvh-4.5rem)] overflow-y-auto bg-navy px-5 pb-10 lg:hidden">
          <ul className="divide-y divide-border">
            {mainNav.flatMap((i) => (i.children ? i.children : [i])).map((i) => (
              <li key={i.to + i.label}>
                <Link to={i.to as "/"} onClick={() => setOpen(false)} className="block py-4 font-display text-3xl font-bold uppercase tracking-tight text-snow hover:text-lime">{i.label}</Link>
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
