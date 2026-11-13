import { createFileRoute } from "@tanstack/react-router";
import { alts, images, pageHead } from "@/data/site";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { BrandPanel } from "@/components/site/BrandPanel";
import { RouteMap } from "@/components/site/RouteMap";
import { Cta } from "@/components/site/Cta";
import { Marquee } from "@/components/site/Marquee";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/our-story")({
  head: () =>
    pageHead({
      title: "Our Story — Why STOPWASH Exists | STOPWASH Sri Lanka",
      description: "STOPWASH began with a familiar feeling: watching time disappear in car-wash queues. This is the story behind Sri Lanka's new vehicle-care brand.",
      path: "/our-story",
      image: images.foam,
    }),
  component: OurStory,
});

function OurStory() {
  return (
    <>
      <PageHero label="Our story" title={<>We got tired of watching time disappear in <span className="text-lime">car-wash queues.</span></>} />

      <section className="section-light py-24 md:py-36">
        <Container className="grid gap-14 lg:grid-cols-12">
          <div className="space-y-8 text-xl leading-relaxed lg:col-span-6 lg:col-start-2">
            <Reveal>
              <p className="font-display text-3xl font-bold leading-tight tracking-tight md:text-4xl">
                The idea behind STOPWASH did not begin with a fascination for hoses, foam or polishing cloths.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>It began with a familiar feeling: arriving at a car wash and realizing the next part of your day had just been handed over to a queue.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <ul className="space-y-2 border-l-4 border-lime pl-6 font-display text-2xl font-bold uppercase tracking-tight">
                <li>The wait was slow.</li>
                <li>The result was unpredictable.</li>
                <li>The process had no rhythm.</li>
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-muted-foreground">That felt like a business problem waiting for a better answer.</p>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:pt-20">
            <Photo src={images.foam} alt={alts.foam} className="aspect-[3/4]" />
          </div>
        </Container>
      </section>

      <section className="section-lime py-24 md:py-36">
        <Container className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-8">
            <SectionLabel n="01">The insight</SectionLabel>
            <h2 className="display-lg">The car wash was not the product. <span className="text-outline">The time was.</span></h2>
          </Reveal>
          <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed lg:col-span-4">
            <p className="font-medium">Customers are not only paying for a clean vehicle.</p>
            <p className="text-ink/75">They are paying to get their vehicle back without losing the momentum of their day. Every minute in a queue is a cost — one that never appears on the bill, but is always paid.</p>
            <p className="text-ink/75">So STOPWASH is designed around the clock as much as the car: a clear process, a predictable experience and a finish worth the stop.</p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-navy py-24 md:py-36">
        <Container>
          <Reveal>
            <SectionLabel n="02">The first stop</SectionLabel>
            <h2 className="display-lg max-w-5xl">Katubedda is the first chapter, <span className="text-lime">not the full story.</span></h2>
          </Reveal>
          <div className="mt-16 grid gap-4 md:grid-cols-12">
            <Photo src={images.heroBay} alt={alts.heroBay} className="aspect-[4/3] md:col-span-7 md:aspect-auto md:min-h-[28rem]" caption="Stop 001" />
            <div className="grid gap-4 md:col-span-5">
              <Photo src={images.detailHands} alt={alts.detailHands} className="aspect-[16/10]" />
              <BrandPanel word="001" label="Katubedda" tone="lime" className="aspect-[16/10]" />
            </div>
          </div>
          <div className="mt-14 grid gap-10 md:grid-cols-12">
            <Reveal className="text-lg leading-relaxed text-snow/75 md:col-span-6">
              <p>The first STOPWASH outlet is where the thinking meets the road. It is where the process is tested on real vehicles, real schedules and real expectations — every day.</p>
            </Reveal>
            <Reveal delay={0.1} className="text-lg leading-relaxed text-snow/75 md:col-span-6">
              <p>It is also where the people behind the operation — the clean squad, the supervisors and the team building the system — learn what it takes to deliver the same confidence on a busy day as on a quiet one.</p>
              <div className="mt-8"><Cta to="/locations" variant="outline">Visit Katubedda</Cta></div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Marquee items={["One outlet proves a point", "A network changes a category", "Keep moving"]} />

      <section className="section-light py-24 md:py-36">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel n="03">The bigger build</SectionLabel>
              <h2 className="display-lg">One outlet proves a point. A network changes a category.</h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>The long-term ambition is a connected vehicle-care ecosystem across Sri Lanka — outlets that share one brand, one operating system and one standard of finish.</p>
              <p>Local operators bring leadership to their market. STOPWASH brings the brand, the systems and the support. Customers get the same confidence wherever they pull in.</p>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Cta to="/franchise" variant="ink">Build a Stopwash</Cta>
                <Cta to="/our-vision" variant="outline">Read our vision</Cta>
              </div>
            </Reveal>
          </div>
          <RouteMap className="aspect-[4/3] lg:col-span-6" />
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
