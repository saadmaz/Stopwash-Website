import type { ReactNode } from "react";

export function PageHero({ label, title, children, image }: { label: string; title: ReactNode; children?: ReactNode; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-navy pb-14 pt-28 md:pb-20 md:pt-36">
      {image && (
        <>
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="grain-overlay absolute inset-0" />
        </>
      )}
      <div className="motion-lines pointer-events-none absolute -right-20 top-0 h-full w-1/3 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-[1440px] px-5 md:px-10">
        <p className="micro mb-6 flex items-center gap-3 text-lime"><span className="h-px w-10 bg-lime" />{label}</p>
        <h1 className="display-lg fade-up max-w-6xl text-snow">
          {title}
        </h1>
        {children && <div className="fade-up mt-8 max-w-2xl text-lg text-snow/80 md:text-xl" style={{ ["--d" as string]: "0.2s" }}>{children}</div>}
      </div>
    </section>
  );
}

export function SectionLabel({ n, children }: { n?: string | undefined; children: ReactNode }) {
  return (
    <p className="micro mb-6 flex items-center gap-3 text-muted-foreground">
      {n && <span className="font-bold text-current">{n}</span>}
      <span className="h-px w-8 bg-current opacity-40" />
      {children}
    </p>
  );
}
