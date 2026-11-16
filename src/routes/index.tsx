import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { alts, buildingEngine, images, journey, locations, pageHead, serviceModels, standards } from "@/data/site";
import { Cta, ctaVariants } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { StepTrack } from "@/components/site/StepTrack";
import { FinalCta } from "@/components/site/FinalCta";
import { LocationCard } from "@/components/site/LocationCard";
import { LandingHero } from "@/components/site/LandingHero";
import { CustomerArc } from "@/components/site/CustomerArc";
import { Container, SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "STOPWASH: Giving You Back the Gift of Time | Car Wash & Vehicle Care in Sri Lanka",
      description:
        "STOPWASH is building a faster, sharper and more dependable way to care for your vehicle. Professional car wash and vehicle care in Katubedda, Sri Lanka.",
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <WhyStopwash />
      <WhyTheName />
      <ServicesPreview />
      <Building />
      <HowItWorks />
      <CleanSquad />
      <Standard />
      <Expansion />
      <OurOutlets />
      <FinalCta />
    </>
  );
}

/* Hero: full-bleed photograph, one confident line, two actions. */
function Hero() {
  return (
    <LandingHero
      id="hero-title"
      tone="ink"
      titleClassName="text-hero"
      image={images.heroHome}
      imageAlt={alts.heroHome}
      focus="62% 10%"
      title={<>Giving you <br />back <span className="text-lime">the gift</span> <br />of time</>}
      actions={<>
        <Cta to="/locations">Find a STOPWASH</Cta>
        <Cta to="/services" variant="outline" className="text-snow">See our services</Cta>
      </>}
      lead={<p>Professional vehicle care that fits around your day, not the other way round.</p>}
    />
  );
}

/* Why STOPWASH: full-screen statement above an arc of real customers that drifts while in view. */
function WhyStopwash() {
  return (
    <section aria-labelledby="why-title" className="relative isolate flex flex-col overflow-hidden bg-snow pb-16 pt-24 md:min-h-[100svh] md:pb-0 md:pt-28 [@media(max-height:700px)]:pt-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(55%_45%_at_50%_100%,rgb(178_224_76/0.14),transparent_70%)]" aria-hidden />
      <Container className="pb-8 text-center">
        <Reveal>
          <p className="eyebrow mb-5">Why STOPWASH</p>
          <h2 id="why-title" className="mx-auto max-w-5xl font-display font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(2rem,min(5vw,7.5svh),5rem)]">
            A car wash should be a <span className="whitespace-nowrap bg-lime px-2">pit stop</span>, not a lifestyle.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-lead mx-auto mt-5 max-w-xl text-muted-foreground">Vehicle care should not cost you your momentum.</p>
          <div className="mt-7 flex justify-center"><Cta to="/our-story">Read our story</Cta></div>
        </Reveal>
      </Container>
      <CustomerArc className="min-h-[200px] flex-1" />
    </section>
  );
}

/* Why the name: a compact band. The wordmark shows the idea, the copy explains it. */
function WhyTheName() {
  return (
    <section aria-labelledby="name-title" className="section-dark py-20 md:py-24">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-12 md:gap-0">
          <Reveal className="md:col-span-5 md:pr-12">
            <p className="eyebrow mb-6">Why the name?</p>
            <p className="sr-only">STOPWATCH became STOPWASH.</p>
            <div aria-hidden className="font-display font-bold uppercase leading-[0.95] tracking-[-0.04em] text-[clamp(2.25rem,4.4vw,3.75rem)]">
              <p className="text-snow/30">STOPWA<span className="line-through decoration-lime decoration-[0.08em]">TCH</span></p>
              <p className="mt-1">STOP<span className="text-lime">WASH</span></p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:border-l md:border-snow/10 md:pl-12 lg:pl-16">
            <h2 id="name-title" className="font-display text-2xl font-semibold leading-snug tracking-tight md:text-[1.875rem]">
              STOPWASH comes from the stopwatch.
            </h2>
            <p className="text-lead mt-3 max-w-xl text-snow/70">We never set out to sell a car wash. We set out to sell time.</p>
            <Link to="/our-story" hash="the-name" className="group mt-8 inline-flex items-center gap-2 font-semibold text-lime underline-offset-[6px] hover:underline">
              Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* What STOPWASH is building: the engine behind the outlet. */
function Building() {
  return (
    <section className="section-y">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <SectionHeading eyebrow="What we are building" title="A network of pit stops for people who keep moving." />
          <Reveal delay={0.1} className="text-lead mt-6 space-y-4 text-muted-foreground">
            <p>STOPWASH is building more than outlets. We are building a connected vehicle-care system designed around the real rhythm of modern life: work, school, errands, meetings, traffic, family and the next place you need to be.</p>
            <p className="text-foreground">The outlet is the visible part. Behind it is the real engine.</p>
          </Reveal>
        </div>
        <div className="lg:col-span-6 lg:pt-10">
          <ul className="divide-y divide-border rounded-2xl bg-paper px-6">
            {buildingEngine.map((item, i) => (
              <li key={item}>
                <Reveal delay={i * 0.03} className="flex items-center justify-between gap-4 py-4">
                  <span className="font-medium">{item}</span>
                  <span className="text-sm tabular-nums text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.1} className="mt-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">The goal is not to make customers better at waiting.</p>
            <p className="font-display text-xl font-bold tracking-tight">The goal is to remove the waiting from the experience.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* Our outlets: every location as a card with its details and map. */
function OurOutlets() {
  const open = locations.filter((l) => l.status === "open");
  return (
    <section aria-labelledby="outlets-title" className="section-paper section-y">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow mb-4">Our outlets</p>
              <h2 id="outlets-title" className="text-h2">Find your nearest STOPWASH.</h2>
              <p className="text-lead mt-5 text-muted-foreground">
                {open.length === 1 ? "One outlet open today, built to be the first of many." : `${open.length} outlets open today.`}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.1}><Cta to="/locations" variant="link">See all locations</Cta></Reveal>
        </div>
        <div className="mt-12 space-y-6">
          {open.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.05}><LocationCard location={l} /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* Services: the two STOPWASH formats as full-bleed photo tiles, sized to fit one screen. */
function ServicesPreview() {
  return (
    <section aria-labelledby="models-title" className="section-paper flex min-h-[100svh] flex-col justify-center py-20 md:py-24 [@media(max-height:760px)]:py-12">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Reveal className="max-w-2xl">
            <p className="eyebrow mb-4">Services</p>
            <h2 id="models-title" className="text-h2">Two ways to STOPWASH.</h2>
            <p className="text-lead mt-4 text-muted-foreground">One standard of care, for the drivers we serve and the brands we partner with.</p>
          </Reveal>
          <Reveal delay={0.1}><Cta to="/services" variant="link">See all services</Cta></Reveal>
        </div>
        <ul className="mt-10 grid gap-5 md:mt-12 md:grid-cols-2 md:gap-6">
          {serviceModels.map((m, i) => (
            <li key={m.slug}>
              <Reveal delay={i * 0.08}>
                <article className="group relative isolate flex min-h-[clamp(340px,54svh,620px)] flex-col justify-end overflow-hidden rounded-3xl bg-ink text-snow" aria-labelledby={`model-${m.slug}`}>
                  <img src={m.image} alt={m.alt} loading="lazy" decoding="async" className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/95 via-ink/45 to-ink/0" />
                  <div className="p-7 md:p-9">
                    <p className="inline-flex items-center gap-2 rounded-full bg-snow/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] backdrop-blur">
                      <span className="text-lime">{String(i + 1).padStart(2, "0")}</span> {m.label}
                    </p>
                    <h3 id={`model-${m.slug}`} className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight md:text-[2.125rem]">{m.title}</h3>
                    <p className="mt-3 max-w-md leading-relaxed text-snow/80">{m.text}</p>
                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                      {"partners" in m ? (
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-snow/60">Official partner to</span>
                          <ul className="flex flex-wrap gap-2" aria-label="Official brand partners">
                            {m.partners.map((brand) => (
                              <li key={brand} className="rounded-full border border-snow/25 px-3 py-1 font-display text-sm font-bold tracking-[0.12em] text-snow">{brand}</li>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        <ul className="flex flex-wrap gap-2">
                          {m.points.map((pt) => (
                            <li key={pt} className="inline-flex items-center gap-1.5 rounded-full border border-snow/20 px-3 py-1 text-sm text-snow/90">
                              <Check className="h-3.5 w-3.5 text-lime" aria-hidden /> {pt}
                            </li>
                          ))}
                        </ul>
                      )}
                      <Link to={m.cta.to} {...("search" in m.cta ? { search: m.cta.search as never } : {})} className="inline-flex items-center gap-2 font-semibold text-lime underline-offset-[6px] hover:underline">
                        {m.cta.label} <ArrowRight className="h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function HowItWorks() {
  return (
    <section className="section-dark section-y">
      <Container>
        <SectionHeading center eyebrow="How it works" title="No mystery. No wandering around. No lost afternoon." />
        <StepTrack steps={journey} className="mt-12" />
      </Container>
    </section>
  );
}

function CleanSquad() {
  return (
    <section className="section-y">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="lg:order-2">
          <SectionHeading eyebrow="The clean squad" title="Fast hands. Sharp eyes. No autopilot." />
          <Reveal delay={0.1} className="text-lead mt-6 space-y-4 text-muted-foreground">
            <p className="text-foreground">A clean vehicle is visible. Good work is visible too.</p>
            <p>The STOPWASH clean squad is trained to move with purpose, pay attention to the details and understand that every vehicle is someone's time, money and responsibility on four wheels.</p>
            <p>We do not want a team that simply completes tasks. We want a team that sees the finish before the customer does.</p>
          </Reveal>
          <Reveal delay={0.15} className="mt-8 rounded-2xl bg-paper p-6">
            <p className="font-display text-xl font-bold leading-snug tracking-tight">The system sets the pace. The people create the difference.</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:order-1">
          <Reveal className="col-span-2"><Photo src={images.detailHands} alt={alts.detailHands} className="aspect-[16/10]" /></Reveal>
          <Reveal delay={0.06}><Photo src={images.interior} alt={alts.interior} className="aspect-square" /></Reveal>
          <Reveal delay={0.1}><Photo src={images.foam} alt={alts.foam} className="aspect-square" /></Reveal>
        </div>
      </Container>
    </section>
  );
}

function Standard() {
  return (
    <section className="section-dark section-y">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow="The STOPWASH standard" title="Built like a network. Felt like a local stop." intro="A single great wash is not a business model. The real test is whether the experience holds up on a busy day, with a different team, at a different location, months after the first visit." />
          <Reveal delay={0.1} className="mt-8"><Cta to="/our-standard" variant="outline">Read about our standard</Cta></Reveal>
        </div>
        <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:col-span-7">
          {standards.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={(i % 2) * 0.05} className="flex gap-4">
                <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-lime"><Check className="h-4 w-4 text-ink" aria-hidden /></span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* Franchise pitch: the lime card, sized as a full section and aligned to the navigation width. */
function Expansion() {
  return (
    <section aria-labelledby="franchise-pitch-title" className="py-16 md:py-24">
      <Container className="max-w-[1440px]">
        <Reveal className="section-lime rounded-3xl px-7 py-12 md:px-14 md:py-16 lg:px-20 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-5">Franchise with STOPWASH</p>
              <h2 id="franchise-pitch-title" className="text-h2 md:text-display">
                One outlet proves the idea. A network changes the category.
              </h2>
            </div>
            <div className="lg:col-span-5">
              <p className="text-lead text-muted-foreground">
                We are building Sri Lanka&apos;s vehicle-care network one stop at a time, with local partners who lead their market and a shared system that keeps every STOPWASH consistent. The ambition is national.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Cta to="/franchise" variant="ink">Become a franchisee</Cta>
                <Link to="/franchise" hash="faq" className={ctaVariants({ variant: "outline" })}>
                  <span>Read the franchise FAQ</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
