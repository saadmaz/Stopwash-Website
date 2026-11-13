import { createFileRoute } from "@tanstack/react-router";
import { images, locations, pageHead } from "@/data/site";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LocationCard } from "@/components/site/LocationCard";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/locations")({
  head: () =>
    pageHead({
      title: "Locations — Car Wash in Katubedda, Sri Lanka | STOPWASH",
      description: "Find STOPWASH. Our first outlet is in Katubedda, Sri Lanka. Get directions, call ahead and see where the STOPWASH network goes next.",
      path: "/locations",
      image: images.heroBay,
    }),
  component: Locations,
});

function Locations() {
  const open = locations.filter((l) => l.status === "open");
  const soon = locations.filter((l) => l.status === "coming-soon");
  return (
    <>
      <PageHero label="Locations" title={<>Find the <span className="text-lime">next stop.</span></>}>
        <p>{open.length === 1 ? "One outlet open today. Built to be the first of many." : `${open.length} outlets open today.`}</p>
      </PageHero>

      <section className="bg-navy pb-24 md:pb-36">
        <Container className="grid gap-8">
          <Reveal><SectionLabel n={String(open.length).padStart(2, "0")}>Open now</SectionLabel></Reveal>
          {open.map((l, i) => <LocationCard key={l.slug} location={l} index={i} />)}
        </Container>
      </section>

      <section className="section-lime relative overflow-hidden py-24 md:py-36">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Reveal>
              <SectionLabel>Coming next</SectionLabel>
              <h2 className="display-lg">We are building the network one stop at a time.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink/75">
                New STOPWASH outlets are announced here when they are ready to welcome customers — not before. If you want the next stop in your area, you can help build it.
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Cta to="/franchise" variant="ink">Build a Stopwash</Cta>
                <Cta to="/contact" variant="outline">Suggest a location</Cta>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            {soon.length > 0 ? (
              <ul className="grid gap-3">
                {soon.map((l) => (
                  <li key={l.slug} className="flex items-center justify-between rounded-md border-2 border-ink px-5 py-4">
                    <span className="font-display text-2xl font-bold uppercase">{l.name}</span>
                    <span className="micro">Coming soon</span>
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="grid gap-3" aria-label="Network slots">
                <li className="flex items-center justify-between rounded-md bg-ink px-5 py-4 text-lime">
                  <span className="font-display text-2xl font-bold uppercase">Stop 001 · Katubedda</span>
                  <span className="micro flex items-center gap-2"><span className="pulse-dot h-2 w-2 rounded-full bg-lime" /> Open</span>
                </li>
                {["002", "003", "004"].map((n) => (
                  <li key={n} aria-hidden className="flex items-center justify-between rounded-md border-2 border-dashed border-ink/40 px-5 py-4 text-ink/50">
                    <span className="font-display text-2xl font-bold uppercase">Stop {n}</span>
                    <span className="micro">Open slot</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
