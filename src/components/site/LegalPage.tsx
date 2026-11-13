import type { ReactNode } from "react";
import { PageHero } from "./PageHero";
import { Container } from "./SectionHeading";

export type LegalSection = { heading: string; body: ReactNode };

export function LegalPage({ label, title, updated, intro, sections }: { label: string; title: string; updated: string; intro: ReactNode; sections: LegalSection[] }) {
  return (
    <>
      <PageHero label={label} title={title}>
        <p className="micro text-steel">Last updated {updated}</p>
      </PageHero>
      <section className="section-light section-y">
        <Container className="grid gap-12 lg:grid-cols-12">
          <nav aria-label="On this page" className="lg:col-span-3">
            <ol className="space-y-2 lg:sticky lg:top-28">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#s-${i + 1}`} className="micro text-muted-foreground transition-colors hover:text-ink">
                    {String(i + 1).padStart(2, "0")} {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
          <article className="max-w-3xl space-y-12 text-lg leading-relaxed lg:col-span-8 lg:col-start-5 [&_a]:underline [&_a]:underline-offset-4 [&_li]:ml-5 [&_li]:list-disc [&_p+p]:mt-4 [&_ul]:mt-4 [&_ul]:space-y-2">
            <div className="text-xl">{intro}</div>
            {sections.map((s, i) => (
              <section key={s.heading} id={`s-${i + 1}`} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-bold uppercase tracking-tight">
                  <span className="micro mr-3 align-middle text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  {s.heading}
                </h2>
                <div className="mt-4 text-muted-foreground">{s.body}</div>
              </section>
            ))}
          </article>
        </Container>
      </section>
    </>
  );
}
