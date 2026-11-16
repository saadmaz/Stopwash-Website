import type { ReactNode } from "react";

export const inputCls =
  "w-full rounded-xl border border-input bg-snow px-4 py-3 text-base text-ink placeholder:text-ink/40 transition-colors focus:border-navy focus:outline-none focus:ring-4 focus:ring-navy/10";

export function Field({
  label,
  error,
  children,
  htmlFor,
  optional,
}: {
  label: string;
  error?: string | undefined;
  children: ReactNode;
  htmlFor: string;
  optional?: boolean;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium text-ink">
        {label} {optional && <span className="font-normal text-muted-foreground">(optional)</span>}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export function Honeypot({ register }: { register: () => object }) {
  return (
    <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
      <label>
        Website
        <input tabIndex={-1} autoComplete="off" {...register()} />
      </label>
    </div>
  );
}
