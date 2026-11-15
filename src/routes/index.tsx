import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, Crosshair, Navigation, Phone, Repeat, Timer } from "lucide-react";
import { alts, brandPromise, buildingEngine, contact, directionsUrl, images, journey, locations, pageHead, pillars, servicePreview, standards } from "@/data/site";
import { Cta, ctaVariants } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { StepTrack } from "@/components/site/StepTrack";
import { FinalCta } from "@/components/site/FinalCta";
import { LandingHero } from "@/components/site/LandingHero";
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

const pillarIcons = [Timer, Crosshair, Repeat];

function Home() {
  return (
    <>
      <Hero />
      <Intro />
      <Difference />
      <Building />
      <FirstOutlet />
      <ServicesPreview />
      <BrandPromise />
      <HowItWorks />
      <CleanSquad />
      <Standard />
      <Expansion />
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

function Intro() {
  return (
    <section className="section-y">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <SectionHeading className="self-start lg:sticky lg:top-28 lg:col-span-6" eyebrow="Why STOPWASH" title="A car wash should be a pit stop, not a lifestyle." />
          <Reveal delay={0.1} className="text-lead space-y-5 text-muted-foreground lg:col-span-6 lg:pt-10">
            <p className="text-foreground">Somewhere along the way, washing a car became a test of patience.</p>
            <p>You arrive with a dirty vehicle. You join a line. You wait without knowing how long. You leave hoping the finish is worth the time you gave away.</p>
            <p>STOPWASH was built on a simple refusal:</p>
            <p className="border-l-4 border-lime pl-5 font-display text-2xl font-bold leading-snug tracking-tight text-foreground md:text-[1.75rem]">
              Vehicle care should not cost you your momentum.
            </p>
            <p>So we are building a better way to do it, with a clear process, a trained clean squad, a visible standard and a finish that earns the return visit.</p>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2"><Photo src={images.interior} alt={alts.interior} className="h-64 md:h-[26rem]" /></Reveal>
          <Reveal delay={0.08}><Photo src={images.detailHands} alt={alts.detailHands} className="h-64 md:h-[26rem]" /></Reveal>
        </div>
        <Reveal className="mt-4">
          <Link to="/our-story" hash="the-name" className="group flex flex-col gap-5 rounded-3xl bg-navy p-7 text-snow sm:flex-row sm:items-center md:p-9">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-lime"><Timer className="h-7 w-7 text-ink" aria-hidden /></span>
            <div className="flex-1">
              <p className="eyebrow text-lime">Why the name?</p>
              <p className="mt-2 font-display text-xl font-bold leading-snug tracking-tight md:text-2xl">STOPWASH comes from the stopwatch. We never set out to sell a car wash. We set out to sell time.</p>
            </div>
            <span className="inline-flex items-center gap-2 whitespace-nowrap font-semibold text-lime">
              Read the story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
            </span>
          </Link>
        </Reveal>
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

/* Brand promise. */
function BrandPromise() {
  return (
    <section className="section-dark section-y">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading eyebrow="Our promise" title="Your time is not a spare part." intro="We do not treat your time as something that can be left idling beside the wash bay. Every visit is designed to give you what a modern vehicle-care service should." />
        </div>
        <div className="lg:pt-10">
          <ul className="grid gap-3 sm:grid-cols-2">
            {brandPromise.map((item, i) => (
              <li key={item} className={i === brandPromise.length - 1 ? "sm:col-span-2" : ""}>
                <Reveal delay={i * 0.04} className="flex items-center gap-3 rounded-2xl bg-card px-5 py-4">
                  <Check className="h-5 w-5 shrink-0 text-lime" aria-hidden />
                  <span className="font-medium">{item}</span>
                </Reveal>
              </li>
            ))}
          </ul>
          <Reveal delay={0.15} className="mt-8 border-l-2 border-lime pl-5">
            <p className="text-lg text-muted-foreground">The vehicle leaves cleaner.</p>
            <p className="font-display text-xl font-bold tracking-tight">You leave with your day intact.</p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function Difference() {
  return (
    <section className="section-paper section-y">
      <Container>
        <SectionHeading center eyebrow="The STOPWASH difference" title="Less waiting. More moving." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {pillars.map((p, i) => {
            const Icon = pillarIcons[i]!;
            return (
              <Reveal key={p.title} delay={i * 0.06} className="rounded-2xl bg-snow p-8">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-lime"><Icon className="h-6 w-6 text-ink" aria-hidden /></span>
                <h3 className="mt-6 font-display text-2xl font-bold tracking-tight">{p.title}</h3>
                <p className="mt-2 font-medium">{p.lead}</p>
                <p className="mt-2 leading-relaxed text-muted-foreground">{p.text}</p>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function FirstOutlet() {
  const loc = locations[0]!;
  return (
    <section className="section-dark section-y">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal><Photo src={images.foam} alt={alts.foam} className="aspect-[4/3]" /></Reveal>
        <div>
          <SectionHeading eyebrow="Our first outlet" title="Katubedda is where the movement starts." />
          <Reveal delay={0.1} className="text-lead mt-6 space-y-4 text-muted-foreground">
            <p>The first STOPWASH outlet in Katubedda is where the idea meets the road.</p>
            <p>It is the first proof point for a bigger idea: vehicle care can be faster without becoming careless, more professional without becoming complicated and more consistent without losing its human touch.</p>
          </Reveal>
          <Reveal delay={0.15}>
            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-border pt-6">
              <div><dt className="text-sm text-muted-foreground">Location</dt><dd className="mt-1 font-semibold">{loc.address ?? "Katubedda, Sri Lanka"}</dd></div>
              {loc.hours && <div><dt className="text-sm text-muted-foreground">Open</dt><dd className="mt-1 font-semibold">{loc.hours}</dd></div>}
              <div><dt className="text-sm text-muted-foreground">Phone</dt><dd className="mt-1 font-semibold"><a href={contact.phoneHref} className="hover:text-lime">{contact.phone}</a></dd></div>
            </dl>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={directionsUrl(loc)} target="_blank" rel="noopener noreferrer" className={ctaVariants({ variant: "lime" })}><Navigation className="h-4 w-4" aria-hidden /> Get directions</a>
              <a href={contact.phoneHref} className={ctaVariants({ variant: "outline" })}><Phone className="h-4 w-4" aria-hidden /> Call now</a>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

function ServicesPreview() {
  return (
    <section className="section-y">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading eyebrow="Services" title="Pick your pit stop." intro="Clear levels of care, so you can choose what your vehicle needs today." />
          <Reveal delay={0.1}><Cta to="/services" variant="link">See the services</Cta></Reveal>
        </div>
        <ul className="mt-12 grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {servicePreview.map((s, i) => (
            <li key={s.code}>
              <Reveal delay={(i % 3) * 0.06}>
                <Link to="/services" className="group block">
                  <Photo src={s.image} alt="" className="aspect-[4/3] transition-transform duration-300 group-hover:-translate-y-1" />
                  <h3 className="text-h3 mt-5 flex items-center gap-2">
                    {s.name}
                    <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" aria-hidden />
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
                </Link>
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
    <section className="section-paper section-y">
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

function Expansion() {
  return (
    <section className="section-y">
      <Container>
        <Reveal className="section-lime grid gap-8 rounded-3xl px-7 py-12 md:px-14 md:py-16 lg:grid-cols-2 lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow mb-4">Grow with us</p>
            <h2 className="text-h2">One outlet proves a point. A network changes a category.</h2>
          </div>
          <div>
            <p className="text-lead text-muted-foreground">
              STOPWASH is building the vehicle-care ecosystem for Sri Lanka. We are building the network one stop at a time, but the ambition is national.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Cta to="/franchise" variant="ink">Build a STOPWASH</Cta>
              <Cta to="/franchise" variant="outline">Explore franchising</Cta>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
