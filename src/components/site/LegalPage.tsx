import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Container } from "./SectionHeading";

export type LegalSection = { heading: string; body: ReactNode };

export function LegalPage({
  label,
  title,
  updated,
  intro,
  sections,
}: {
  label: string;
  title: string;
  updated: string;
  intro: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero eyebrow={label} title={title}>
        <p>Last updated {updated}</p>
      </PageHero>
      <section className="section-y">
        <Container className="grid gap-12 lg:grid-cols-12">
          <nav aria-label="On this page" className="hidden lg:col-span-3 lg:block">
            <ol className="sticky top-28 space-y-1 border-l border-border">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a
                    href={`#s-${i + 1}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-ink hover:text-ink"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="max-w-2xl space-y-10 text-[1.0625rem] leading-relaxed lg:col-span-8 lg:col-start-5 [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-4 [&_ul]:mt-4 [&_ul]:space-y-2">
            <div className="text-lead">{intro}</div>
            {sections.map((s, i) => (
              <section key={s.heading} id={`s-${i + 1}`} className="scroll-mt-28">
                <h2 className="font-display text-xl font-bold tracking-tight">{s.heading}</h2>
                <div className="mt-3 text-muted-foreground">{s.body}</div>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}
