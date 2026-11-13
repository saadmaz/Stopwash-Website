import type { ReactNode } from "react";

export const inputCls =
  "w-full rounded-md border border-input bg-transparent px-4 py-3.5 text-base text-foreground placeholder:text-muted-foreground/70 transition-colors focus:border-lime focus:outline-none focus:ring-2 focus:ring-lime/40";

export function Field({ label, error, children, htmlFor, optional }: { label: string; error?: string; children: ReactNode; htmlFor: string; optional?: boolean }) {
  return (
    <div>
      <label htmlFor={htmlFor} className="micro mb-2 block text-muted-foreground">
        {label} {optional && <span className="opacity-60">(optional)</span>}
      </label>
      {children}
      {error && <p role="alert" className="mt-1.5 text-sm text-destructive">{error}</p>}
    </div>
  );
}

export function Honeypot({ register }: { register: () => object }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>Website<input tabIndex={-1} autoComplete="off" {...register()} /></label>
    </div>
  );
}
