import { createFileRoute } from "@tanstack/react-router";
import { pageHead, serviceCatalogue } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { Cta } from "@/components/site/Cta";
import { FinalCta } from "@/components/site/FinalCta";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () =>
    pageHead({
      title: "Services — Car Wash, Interior, Detail & Fleet Vehicle Care | STOPWASH",
      description: "Routine, interior, exterior, full, detail, fleet and repeat care. Professional car cleaning and fleet vehicle cleaning in Sri Lanka from STOPWASH.",
      path: "/services",
    }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Services" title="Your vehicle has a schedule. So should its care.">
        <p>STOPWASH services are designed around real moments: the quick reset, the weekly clean, the full refresh, the pre-sale presentation and the fleet that needs to be ready every morning.</p>
      </PageHero>

      <nav aria-label="Services on this page" className="sticky top-[4.5rem] z-30 border-b border-border bg-snow/95 backdrop-blur">
        <Container>
          <ul className="-mx-5 flex gap-1 overflow-x-auto px-5 py-3 [scrollbar-width:none] md:mx-0 md:px-0">
            {serviceCatalogue.map((s) => (
              <li key={s.slug} className="shrink-0">
                <a href={`#${s.slug}`} className="block rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-paper hover:text-ink">{s.name}</a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      <div className="section-y space-y-16 md:space-y-24">
        {serviceCatalogue.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <section key={s.slug} id={s.slug} className="scroll-mt-36" aria-labelledby={`svc-${s.slug}`}>
              <Container className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                <Reveal className={cn(flip && "lg:order-2")}>
                  <Photo src={s.image} alt={s.alt} label="Photography coming soon" className="aspect-[4/3]" />
                </Reveal>
                <Reveal delay={0.08} className={cn(flip && "lg:order-1")}>
                  <span className="inline-block rounded-full bg-paper px-3 py-1 text-sm font-medium">{s.tag}</span>
                  <h2 id={`svc-${s.slug}`} className="text-h2 mt-4">{s.name}</h2>
                  <p className="text-lead mt-4 text-muted-foreground">{s.text}</p>
                  <p className="mt-6 border-l-2 border-lime pl-4"><span className="font-semibold">Made for: </span>{s.forWho}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Cta to="/contact" search={{ type: s.enquiryType }}>
                      {s.slug === "fleet" ? "Start a fleet conversation" : "Enquire"}
                    </Cta>
                    <Cta to="/locations" variant="outline">Find a STOPWASH</Cta>
                  </div>
                </Reveal>
              </Container>
            </section>
          );
        })}
      </div>

      <FinalCta title="Not sure which stop you need?" text="Tell us about your vehicle and we'll point you to the right level of care." cta="Ask the team" to="/contact" />
    </>
  );
}
