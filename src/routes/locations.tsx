import { createFileRoute } from "@tanstack/react-router";
import { locations, pageHead } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { LocationCard } from "@/components/site/LocationCard";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/locations")({
  head: () =>
    pageHead({
      title: "Locations: Car Wash in Katubedda, Sri Lanka | STOPWASH",
      description: "Find STOPWASH. Our first outlet is in Katubedda, Sri Lanka. Get directions, call ahead and see where the STOPWASH network goes next.",
      path: "/locations",
    }),
  component: Locations,
});

function Locations() {
  const open = locations.filter((l) => l.status === "open");
  const soon = locations.filter((l) => l.status === "coming-soon");
  return (
    <>
      <PageHero eyebrow="Locations" title="Find the next stop.">
        <p>{open.length === 1 ? "One outlet open today. Built to be the first of many." : `${open.length} outlets open today.`}</p>
      </PageHero>

      <section className="section-y">
        <Container className="grid gap-6">
          {open.map((l) => (
            <Reveal key={l.slug}><LocationCard location={l} /></Reveal>
          ))}
          {soon.map((l) => (
            <Reveal key={l.slug}><LocationCard location={l} /></Reveal>
          ))}
        </Container>
      </section>

      <section className="section-y pt-0">
        <Container>
          <Reveal className="section-lime rounded-3xl px-7 py-12 text-center md:px-14 md:py-16">
            <p className="eyebrow mb-4">Coming next</p>
            <h2 className="text-h2 mx-auto max-w-2xl">We are building the network carefully, one location at a time.</h2>
            <p className="text-lead mx-auto mt-5 max-w-xl text-muted-foreground">
              New outlets are announced here when they are ready to welcome customers, and not before. Want STOPWASH in your area? Register your interest or build it with us.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Cta to="/franchise" variant="ink">Build a STOPWASH</Cta>
              <Cta to="/contact" variant="outline">Register your interest</Cta>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
