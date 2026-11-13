import { createFileRoute } from "@tanstack/react-router";
import { alts, images, pageHead } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { Cta } from "@/components/site/Cta";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/our-story")({
  head: () =>
    pageHead({
      title: "Our Story — Why STOPWASH Exists | STOPWASH Sri Lanka",
      description: "STOPWASH began with a familiar feeling: watching time disappear in car-wash queues. This is the story behind Sri Lanka's new vehicle-care brand.",
      path: "/our-story",
    }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      <PageHero eyebrow="Our story" title="We got tired of watching time disappear in car-wash queues." image={images.foam} imageAlt={alts.foam} />

      <section className="section-y">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionHeading className="lg:col-span-5" eyebrow="How it started" title="It didn't start with foam and polishing cloths." />
          <Reveal delay={0.1} className="text-lead space-y-5 text-muted-foreground lg:col-span-7 lg:pt-10">
            <p className="text-foreground">The idea behind STOPWASH did not begin with a fascination for hoses, foam or polishing cloths.</p>
            <p>It began with a familiar feeling: arriving at a car wash and realizing the next part of your day had just been handed over to a queue.</p>
            <p>The wait was slow. The result was unpredictable. The process had no rhythm.</p>
            <p>That felt like a business problem waiting for a better answer.</p>
          </Reveal>
        </Container>
      </section>

      <section className="section-y pt-0">
        <Container>
          <Reveal className="section-lime grid gap-8 rounded-3xl px-7 py-12 md:px-14 md:py-16 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow mb-4">The insight</p>
              <h2 className="text-h2">The car wash was not the product. The time was.</h2>
            </div>
            <div className="text-lead space-y-4 text-muted-foreground">
              <p>Customers are not only paying for a clean vehicle. They are paying to get their vehicle back without losing the momentum of their day.</p>
              <p>So STOPWASH is designed around the clock as much as the car: a clear process, a predictable experience and a finish worth the stop.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-paper section-y">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The first stop" title="Katubedda is the first chapter, not the full story." />
            <Reveal delay={0.1} className="text-lead mt-6 space-y-4 text-muted-foreground">
              <p>The first STOPWASH outlet is where the process is tested on real vehicles, real schedules and real expectations — every day.</p>
              <p>It is also where the team behind the operation learns what it takes to deliver the same confidence on a busy day as on a quiet one.</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8"><Cta to="/locations" variant="ink">Visit Katubedda</Cta></Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Reveal className="col-span-2"><Photo src={images.heroBay} alt={alts.heroBay} className="aspect-[16/10]" /></Reveal>
            <Reveal delay={0.06}><Photo src={images.detailHands} alt={alts.detailHands} className="aspect-square" /></Reveal>
            <Reveal delay={0.1}><Photo src={images.interior} alt={alts.interior} className="aspect-square" /></Reveal>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionHeading className="lg:col-span-6" eyebrow="The bigger build" title="One outlet proves a point. A network changes a category." />
          <Reveal delay={0.1} className="lg:col-span-6 lg:pt-10">
            <div className="text-lead space-y-4 text-muted-foreground">
              <p>The long-term ambition is a connected vehicle-care ecosystem across Sri Lanka — outlets that share one brand, one operating system and one standard of finish.</p>
              <p>Local operators bring leadership to their market. STOPWASH brings the brand, the systems and the support. Customers get the same confidence wherever they pull in.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta to="/franchise" variant="ink">Build a STOPWASH</Cta>
              <Cta to="/our-vision" variant="outline">Read our vision</Cta>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
