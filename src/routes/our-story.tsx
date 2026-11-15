import { createFileRoute } from "@tanstack/react-router";
import { Check, Timer } from "lucide-react";
import { alts, images, networkParts, pageHead, storyQuestions } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { Cta } from "@/components/site/Cta";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/our-story")({
  head: () =>
    pageHead({
      title: "Our Story: Why STOPWASH Exists | STOPWASH Sri Lanka",
      description: "Named after the stopwatch, STOPWASH was built to sell time, not just a car wash. The story behind Sri Lanka's new vehicle-care brand.",
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
          <SectionHeading className="lg:col-span-5" eyebrow="How it started" title="It did not start with foam and polishing cloths." />
          <Reveal delay={0.1} className="text-lead space-y-5 text-muted-foreground lg:col-span-7 lg:pt-10">
            <p className="text-foreground">The idea behind STOPWASH did not begin with a fascination for hoses, foam or polishing cloths.</p>
            <p>It began with a familiar feeling: arriving at a car wash and realising the next part of your day had just been handed over to a queue.</p>
            <p>The wait was slow. The result was unpredictable. The process had no rhythm.</p>
            <p>That felt like a business problem waiting for a better answer.</p>
          </Reveal>
        </Container>
      </section>

      <section id="the-name" className="section-dark section-y scroll-mt-20">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Timer className="h-7 w-7 text-leaf" aria-hidden />
            <p className="sr-only">STOPWATCH became STOPWASH.</p>
            <div aria-hidden className="mt-8 font-[family-name:var(--display-face)] uppercase leading-[0.92] tracking-[-0.025em] text-[clamp(2.75rem,7.4vw,5.5rem)]">
              <p className="text-snow/35">STOPWA<span className="line-through decoration-leaf decoration-[0.08em]">TCH</span></p>
              <p>STOP<span className="text-leaf">WASH</span></p>
            </div>
          </Reveal>
          <div>
            <SectionHeading eyebrow="The name" title="We named it after a stopwatch." />
            <Reveal delay={0.1} className="text-lead mt-6 space-y-4 text-muted-foreground">
              <p>Say it quickly and you will hear it. STOPWASH comes from the stopwatch, the simplest instrument ever made for respecting time.</p>
              <p>That was deliberate. We never set out to sell soap, foam or shine. We set out to sell time: the hour you get back, the afternoon that stays yours, the day that keeps moving.</p>
              <p>A stopwatch does one thing honestly. It shows you exactly where the time went. We hold every STOPWASH visit to the same test.</p>
            </Reveal>
            <Reveal delay={0.15} className="rule-leaf mt-10">
              <p className="text-muted-foreground">The car wash is what we do.</p>
              <p className="text-statement mt-1">Time is what we sell.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <Reveal className="panel-stone grid gap-8 rounded-2xl px-7 py-14 md:px-14 md:py-20 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="eyebrow mb-4">The insight</p>
              <h2 className="text-h2">The car wash was not the product. The time was.</h2>
            </div>
            <div className="text-lead space-y-4 text-muted-foreground">
              <p>A customer is not only paying for a clean vehicle. They are paying to get their vehicle back without losing the momentum of their day.</p>
              <p>That changed the way we thought about the category. We did not ask, “How do we wash more cars?” We asked:</p>
              <ul className="space-y-2 text-ink">
                {storyQuestions.map((q) => <li key={q} className="flex gap-3"><span aria-hidden className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-moss" />{q}</li>)}
              </ul>
              <p className="font-semibold text-ink">STOPWASH is the answer we are building.</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="section-stone section-y">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The first stop" title="Katubedda is the first chapter, not the full story." />
            <Reveal delay={0.1} className="text-lead mt-6 space-y-4 text-muted-foreground">
              <p>The first STOPWASH outlet in Katubedda is where the idea meets the road. It is the beginning of a network built around a simple promise: vehicle care should fit into life, not swallow it.</p>
              <p>The first location gives us the operating ground to test, improve and prove the standard. The next locations will carry that standard further.</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8"><Cta to="/locations">Visit Katubedda</Cta></Reveal>
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
              <p>STOPWASH is building the vehicle-care ecosystem for Sri Lanka. That means more than opening locations. It means connecting the parts that make the experience better:</p>
            </div>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {networkParts.map((n) => (
                <li key={n} className="flex gap-3 text-[0.9375rem]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-moss" aria-hidden />{n}</li>
              ))}
            </ul>
            <div className="mt-6 text-lg">
              <p className="text-muted-foreground">We are building the network one stop at a time.</p>
              <p className="font-display text-xl font-bold tracking-tight">But the ambition is national.</p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Cta to="/franchise">Build a STOPWASH</Cta>
              <Cta to="/our-vision" variant="outline">Read our vision</Cta>
            </div>
          </Reveal>
        </Container>
      </section>

      <FinalCta />
    </>
  );
}
