import { createFileRoute } from "@tanstack/react-router";
import { images, pageHead, serviceCatalogue } from "@/data/site";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
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
      image: images.interior,
    }),
  component: Services,
});

const tones = ["bg-navy", "section-light", "section-ink", "section-light", "bg-navy", "section-lime", "section-light"] as const;

function Services() {
  return (
    <>
      <PageHero label="Services" title={<>Your vehicle has a schedule. <span className="text-lime">So should its care.</span></>}>
        <p>STOPWASH care is organised into clear levels — so you can choose what your vehicle needs today and plan what it needs next. Ask the team at the outlet for current inclusions.</p>
      </PageHero>

      {/* service index */}
      <nav aria-label="Service index" className="sticky top-[4.5rem] z-30 border-y border-border bg-ink/95 backdrop-blur">
        <Container>
          <ul className="-mx-5 flex gap-1 overflow-x-auto px-5 py-3 [scrollbar-width:none] md:mx-0 md:px-0">
            {serviceCatalogue.map((s, i) => (
              <li key={s.slug} className="shrink-0">
                <a href={`#${s.slug}`} className="micro flex items-center gap-2 rounded-sm px-3 py-2.5 text-snow/75 transition-colors hover:bg-lime hover:text-ink">
                  <span className="text-lime/80">{String(i + 1).padStart(2, "0")}</span>{s.name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </nav>

      {serviceCatalogue.map((s, i) => {
        const flip = i % 2 === 1;
        return (
          <section key={s.slug} id={s.slug} className={cn("scroll-mt-32 py-20 md:py-28", tones[i % tones.length])} aria-labelledby={`svc-${s.slug}`}>
            <Container className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className={cn("lg:col-span-6", flip && "lg:order-2")}>
                <Reveal>
                  <SectionLabel n={String(i + 1).padStart(2, "0")}>{s.tag}</SectionLabel>
                  <h2 id={`svc-${s.slug}`} className="display-lg">{s.name}</h2>
                  <p className="mt-6 text-xl leading-relaxed">{s.text}</p>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="mt-8 border-l-4 border-lime pl-5">
                    <p className="micro text-muted-foreground">Made for</p>
                    <p className="mt-1 text-lg">{s.forWho}</p>
                  </div>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                    <Cta to="/contact" search={{ type: s.enquiryType }} variant={tones[i % tones.length] === "section-lime" ? "ink" : "lime"}>
                      {s.slug === "fleet" ? "Start a fleet conversation" : `Enquire about ${s.name}`}
                    </Cta>
                    <Cta to="/locations" variant="outline">Find a Stopwash</Cta>
                  </div>
                </Reveal>
              </div>
              <div className={cn("lg:col-span-6", flip && "lg:order-1")}>
                <Photo
                  src={s.image}
                  alt={s.alt}
                  fallbackWord={s.name.split(" ")[0]}
                  fallbackLabel={s.tag}
                  className="aspect-[4/3] w-full"
                />
              </div>
            </Container>
          </section>
        );
      })}

      <FinalCta title="Not sure which stop you need?" text="Tell us about your vehicle and we'll point you to the right level of care." cta="Ask the team" to="/contact" />
    </>
  );
}
