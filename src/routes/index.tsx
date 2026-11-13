import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Navigation, Phone } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  alts,
  contact,
  directionsUrl,
  images,
  journey,
  locations,
  pageHead,
  pillars,
  servicePreview,
  standards,
} from "@/data/site";
import { Cta, ctaVariants } from "@/components/site/Cta";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { BrandPanel } from "@/components/site/BrandPanel";
import { Marquee } from "@/components/site/Marquee";
import { Counter } from "@/components/site/Counter";
import { StepTrack } from "@/components/site/StepTrack";
import { RouteMap } from "@/components/site/RouteMap";
import { FinalCta } from "@/components/site/FinalCta";
import { SectionHeading, Container } from "@/components/site/SectionHeading";
import { SectionLabel } from "@/components/site/PageHero";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "STOPWASH — The Queue Ends Here | Car Wash & Vehicle Care in Sri Lanka",
      description:
        "STOPWASH is building a faster, sharper and more dependable way to care for your vehicle. Professional car wash and vehicle care in Katubedda, Sri Lanka.",
      path: "/",
      image: images.heroBay,
    }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <Marquee items={["The queue ends here", "Keep moving", "Better car care. Made convenient", "Katubedda — first outlet"]} />
      <Intro />
      <Difference />
      <FirstOutlet />
      <ServicesPreview />
      <HowItWorks />
      <CleanSquad />
      <Standard />
      <Expansion />
      <FinalCta />
    </>
  );
}

/* ───────────── 01 HERO ───────────── */
function Hero() {
  const lines = [
    { t: "The queue", cls: "" },
    { t: "ends", cls: "text-outline text-snow" },
    { t: "here.", cls: "text-lime" },
  ];
  return (
    <section className="relative isolate overflow-hidden bg-navy pt-24 md:pt-28" aria-labelledby="hero-title">
      <div className="motion-lines pointer-events-none absolute -left-40 bottom-0 h-1/2 w-1/2 opacity-40" aria-hidden />
      <Container className="relative grid items-center gap-10 pb-12 lg:min-h-[calc(100svh-6rem)] lg:max-h-[60rem] lg:grid-cols-12 lg:gap-6 lg:pb-16">
        <div className="relative z-10 lg:col-span-7">
          <p className="micro fade-up mb-6 inline-flex items-center gap-3 rounded-sm border border-border px-3 py-2 text-snow/90" style={{ ["--d" as string]: "0.1s" }}>
            <span className="pulse-dot h-2 w-2 rounded-full bg-lime" />
            Katubedda <span className="text-lime">|</span> First outlet
          </p>
          <h1 id="hero-title" className="hero-xl text-snow">
            {lines.map((l, i) => (
              <span key={l.t} className="block overflow-hidden pb-[0.06em]">
                <span className={cn("rise", l.cls)} style={{ ["--d" as string]: `${0.15 + i * 0.12}s` }}>{l.t}</span>
              </span>
            ))}
          </h1>
          <div className="fade-up mt-6 max-w-xl lg:mt-8" style={{ ["--d" as string]: "0.6s" }}>
            <p className="font-display text-xl font-bold leading-tight tracking-tight text-snow md:text-2xl">
              Vehicle care without the <span className="text-lime">lost afternoon.</span>
            </p>
            <p className="mt-4 text-lg text-snow/75">
              STOPWASH is building a faster, sharper and more dependable way to care for the vehicle that keeps you moving.
            </p>
          </div>
          <div className="fade-up mt-8 flex flex-col gap-3 sm:flex-row" style={{ ["--d" as string]: "0.75s" }}>
            <Cta to="/locations">Find a Stopwash</Cta>
            <Cta to="/franchise" variant="outline">Build a Stopwash</Cta>
          </div>
          <p className="micro fade-up mt-8 flex items-center gap-3 text-steel" style={{ ["--d" as string]: "0.9s" }}>
            <span className="h-px w-10 bg-lime" /> Better car care. Made convenient.
          </p>
        </div>

        <div className="relative lg:col-span-5 lg:self-stretch">
          <div className="wipe-in relative aspect-[4/3] sm:aspect-[16/10] lg:absolute lg:aspect-auto lg:inset-y-0 lg:-right-10 lg:left-0 lg:h-auto" style={{ ["--d" as string]: "0.2s" }}>
            <div className="relative h-full w-full overflow-hidden rounded-md lg:rounded-r-none lg:clip-diagonal">
            <img
              src={images.heroBay}
              alt={alts.heroBay}
              fetchPriority="high"
              decoding="async"
              className="h-full w-full scale-105 object-cover object-[50%_45%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20" />
            </div>
          </div>
          {/* technical overlays */}
          <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block" aria-hidden>
            <span className="micro absolute right-0 top-6 rounded-sm bg-ink/70 px-2.5 py-1.5 text-snow backdrop-blur-sm">Bay 01 · In service</span>
            <svg className="absolute -left-24 bottom-24 h-40 w-[130%]" viewBox="0 0 700 160" fill="none" preserveAspectRatio="none">
              <path className="route-line" d="M0 140 C 120 140, 180 40, 320 60 S 520 120, 700 20" stroke="var(--lime)" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
            </svg>
          </div>
          <div className="fade-up absolute bottom-4 left-4 z-10 rounded-md bg-lime p-4 text-ink md:p-5 lg:-left-10 lg:bottom-10" style={{ ["--d" as string]: "1.1s" }}>
            <p className="micro opacity-70">Pit stop</p>
            <p className="font-display text-4xl font-bold leading-none tracking-tighter md:text-5xl">001</p>
          </div>
        </div>
      </Container>
      <a href="#intro" className="micro absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-steel transition-colors hover:text-lime xl:flex">
        Scroll <span className="block h-6 w-px bg-current" />
      </a>
    </section>
  );
}

/* ───────────── 02 INTRO ───────────── */
function Intro() {
  return (
    <section id="intro" className="section-light relative overflow-hidden section-y">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionLabel n="01">The idea</SectionLabel>
            <h2 className="display-lg">
              A car wash should be a <span className="mark-lime">pit stop,</span> not a lifestyle.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal delay={0.05}>
              <p className="text-xl leading-relaxed">Somewhere along the way, washing a car became a test of patience.</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="text-lg leading-relaxed text-muted-foreground">
                You arrive with a dirty vehicle. You join a line. You wait without knowing how long. You leave hoping the finish is worth the time you gave away.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:col-span-5 lg:pt-10">
          <Photo src={images.interior} alt={alts.interior} className="aspect-[4/3]" caption="Cabin · Step 03" />
        </div>
        <div className="lg:col-span-10 lg:col-start-3">
          <Reveal>
            <p className="micro text-muted-foreground">STOPWASH was built on a simple refusal:</p>
            <blockquote className="statement mt-5 border-l-4 border-lime pl-6 md:pl-10">
              Vehicle care should not cost you your momentum.
            </blockquote>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:ml-10">
              We are building a better way to do it — with a clear process, a trained clean squad, a visible standard and a finish that earns the return visit.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── 03 DIFFERENCE ───────────── */
function Difference() {
  return (
    <section className="relative overflow-hidden bg-navy section-y">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading n="02" label="The STOPWASH difference" title={<>Less waiting.<br /><span className="text-lime">More moving.</span></>} />
          <Reveal delay={0.1}><p className="max-w-sm text-steel">Three principles every STOPWASH outlet is built around — from the first bay to the next.</p></Reveal>
        </div>
        <ul className="mt-12 border-t border-border md:mt-16">
          {pillars.map((p, i) => (
            <li key={p.n} className="group relative border-b border-border">
              <Reveal delay={i * 0.08} className="grid items-center gap-3 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <span className="font-display text-[4rem] font-bold leading-[0.8] tracking-tighter text-outline text-snow/30 transition-colors duration-500 group-hover:text-lime md:col-span-3 md:text-[6rem] lg:text-[7rem]">
                  <Counter to={Number(p.n)} />
                </span>
                <h3 className="display-md md:col-span-4">{p.title}</h3>
                <div className="md:col-span-5">
                  <p className="font-display text-xl font-bold text-lime">{p.lead}</p>
                  <p className="mt-2 text-lg text-snow/70">{p.text}</p>
                </div>
              </Reveal>
              <span aria-hidden className="absolute bottom-[-1px] left-0 h-0.5 w-0 bg-lime transition-all duration-700 group-hover:w-full" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

/* ───────────── 04 FIRST OUTLET ───────────── */
function FirstOutlet() {
  const loc = locations[0]!;
  return (
    <section className="section-lime relative overflow-hidden section-y">
      <Container className="grid gap-12 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-6">
          <Reveal>
            <SectionLabel n="03">First outlet</SectionLabel>
            <h2 className="display-lg">Katubedda is where the movement starts.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-xl font-medium leading-snug">The first STOPWASH outlet in Katubedda is where the idea meets the road.</p>
            <p className="mt-5 text-lg leading-relaxed text-ink/75">
              It is the first proof point for a bigger idea: vehicle care can be faster without becoming careless, more professional without becoming complicated and more consistent without losing its human touch.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-ink/20 pt-6">
              <div><dt className="micro opacity-70">Location</dt><dd className="mt-1 font-display text-xl font-bold">Katubedda, Sri Lanka</dd></div>
              <div><dt className="micro opacity-70">Phone</dt><dd className="mt-1 font-display text-xl font-bold"><a href={contact.phoneHref} className="underline-offset-4 hover:underline">{contact.phone}</a></dd></div>
            </dl>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={directionsUrl(loc)} target="_blank" rel="noopener noreferrer" className={ctaVariants({ variant: "ink" })}><Navigation className="h-4 w-4" aria-hidden /> Get directions</a>
              <a href={contact.phoneHref} className={ctaVariants({ variant: "outline" })}><Phone className="h-4 w-4" aria-hidden /> Call now</a>
            </div>
          </Reveal>
        </div>
        <div className="relative lg:col-span-6">
          <RouteMap className="aspect-[4/3]" />
          <div className="absolute -left-3 -top-8 hidden w-40 -rotate-3 overflow-hidden rounded-md border-4 border-lime shadow-xl md:block">
            <img src={images.foam} alt="" loading="lazy" decoding="async" className="aspect-square w-full object-cover" />
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── 05 SERVICES ───────────── */
function ServicesPreview() {
  const [active, setActive] = useState(0);
  const current = servicePreview[active]!;
  return (
    <section className="section-light section-y">
      <Container>
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading n="04" label="Services" title="Pick your pit stop." />
          <Reveal delay={0.1}><Cta to="/services" variant="ghost">Explore our services</Cta></Reveal>
        </div>
        <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <ol className="lg:col-span-7" aria-label="Service concepts">
            {servicePreview.map((s, i) => (
              <li key={s.code} className="border-t border-border last:border-b">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 py-5 text-left md:grid-cols-[3.5rem_1fr_auto] md:py-6"
                >
                  <span className={cn("micro transition-colors", active === i ? "text-ink" : "text-muted-foreground")}>{s.code}</span>
                  <span>
                    <span className={cn("block font-display text-2xl font-bold uppercase leading-none tracking-tight transition-all duration-300 md:text-4xl", active === i ? "translate-x-2 text-ink" : "text-ink/35 group-hover:text-ink/70")}>
                      {s.name}
                    </span>
                    <span className={cn("grid transition-all duration-500", active === i ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}>
                      <span className="overflow-hidden text-base leading-relaxed text-muted-foreground md:text-lg">{s.text}</span>
                    </span>
                  </span>
                  <ArrowUpRight className={cn("h-6 w-6 transition-all duration-300", active === i ? "rotate-45 text-ink" : "text-ink/30")} aria-hidden />
                </button>
              </li>
            ))}
          </ol>
          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28 aspect-[4/5] max-h-[34rem] w-full overflow-hidden rounded-md">
              <motion.div
                key={current.code}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full"
              >
                {current.image ? (
                  <img src={current.image} alt="" className="h-full w-full object-cover" loading="lazy" decoding="async" />
                ) : (
                  <BrandPanel word={current.name.split(" ").at(-1)!} label={`Service ${current.code}`} className="h-full w-full rounded-none" />
                )}
              </motion.div>
              <span className="micro absolute bottom-4 left-4 rounded-sm bg-lime px-2.5 py-1.5 font-bold text-ink">{current.code} / {current.name}</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ───────────── 06 HOW IT WORKS ───────────── */
function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-navy section-y">
      <div className="motion-lines pointer-events-none absolute right-0 top-0 h-64 w-1/2 opacity-40" aria-hidden />
      <Container>
        <SectionHeading
          n="05"
          label="How it works"
          title={<>No mystery. No wandering around. <span className="text-lime">No lost afternoon.</span></>}
        />
        <StepTrack steps={journey} className="mt-12 md:mt-16" />
      </Container>
    </section>
  );
}

/* ───────────── 07 CLEAN SQUAD ───────────── */
function CleanSquad() {
  return (
    <section className="section-ink relative overflow-hidden section-y">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionLabel n="06">The clean squad</SectionLabel>
            <h2 className="display-lg">Fast hands. Sharp eyes. <span className="text-lime">No autopilot.</span></h2>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 space-y-4 text-lg leading-relaxed text-snow/75">
            <p className="font-display text-2xl font-bold leading-tight text-snow">A clean vehicle is visible.<br />Good work is visible too.</p>
            <p>The STOPWASH clean squad is trained to move with purpose, pay attention to the details and understand that every vehicle is someone's time, money and responsibility on four wheels.</p>
            <p>We do not want a team that simply completes tasks.</p>
            <p className="text-snow">We want a team that sees the finish before the customer does.</p>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-6 md:gap-4 lg:col-span-7">
          <Photo src={images.detailHands} alt={alts.detailHands} className="col-span-2 aspect-[4/3] md:col-span-4 md:row-span-2 md:aspect-[4/5]" caption="Finish check" />
          <Photo src={images.interior} alt={alts.interior} className="aspect-[3/4] md:col-span-2 md:self-end" />
          <BrandPanel word="Squad" tone="lime" className="aspect-[3/4] md:col-span-2" />
          <Photo src={images.foam} alt={alts.foam} className="col-span-2 aspect-[16/9] md:col-span-6 md:aspect-[16/7]" caption="Pre-wash · Step 02" />
        </div>
      </Container>
      <Container className="mt-14 md:mt-20">
        <Reveal>
          <p className="display-md">
            The system sets the pace.<br />
            <span className="text-lime">The people create the difference.</span>
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

/* ───────────── 08 STANDARD ───────────── */
function Standard() {
  return (
    <section className="relative overflow-hidden bg-navy section-y">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading n="07" label="The STOPWASH standard" title={<>Built like a network. <span className="text-lime">Felt like a local stop.</span></>} />
            <Reveal delay={0.1}>
              <p className="mt-8 max-w-md text-lg text-snow/70">Consistency is designed, not hoped for. These are the controls behind every STOPWASH visit — and every STOPWASH that follows.</p>
              <div className="mt-10"><Cta to="/our-standard" variant="outline">See the standard</Cta></div>
            </Reveal>
          </div>
        </div>
        <ol className="lg:col-span-7">
          {standards.map((s, i) => (
            <li key={s.title} className="group border-t border-border py-5 last:border-b md:py-6">
              <Reveal delay={i * 0.04} className="grid grid-cols-[4.5rem_1fr] gap-4 md:grid-cols-[6rem_1fr_auto] md:items-center">
                <span className="micro text-lime">STD-{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight md:text-2xl">{s.title}</h3>
                  <p className="mt-1 text-snow/65">{s.text}</p>
                </div>
                <StandardMeter delay={i * 0.08} />
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function StandardMeter({ delay }: { delay: number }) {
  return (
    <div className="col-span-2 flex items-center gap-2 md:col-span-1" aria-hidden>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-snow/10 md:w-28">
        <motion.div
          className="h-full origin-left rounded-full bg-lime"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + delay, ease: [0.65, 0, 0.35, 1] }}
        />
      </div>
      <span className="micro text-lime">✓</span>
    </div>
  );
}

/* ───────────── 09 EXPANSION ───────────── */
function Expansion() {
  return (
    <section className="section-light relative overflow-hidden section-y">
      <Container>
        <Reveal>
          <SectionLabel n="08">The bigger build</SectionLabel>
          <h2 className="display-xl max-w-[14ch]">One outlet proves a point.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="display-xl mt-2 max-w-[16ch] text-outline text-ink">A network changes a category.</p>
        </Reveal>
        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="font-display text-xl font-bold leading-tight md:text-2xl">STOPWASH is building the vehicle-care ecosystem for Sri Lanka.</p>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              We are building more than outlets. We are building a connected vehicle-care system designed around convenience, operational excellence and a consistent customer experience.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Cta to="/franchise" variant="ink">Build a Stopwash</Cta>
              <Cta to="/franchise" variant="outline">Explore franchising</Cta>
            </div>
          </Reveal>
          <NetworkDots className="lg:col-span-6" />
        </div>
      </Container>
    </section>
  );
}

/** Abstract network: one filled stop, the rest are open slots. */
function NetworkDots({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <div className={cn("grid w-full max-w-md grid-cols-8 gap-2.5 lg:justify-self-end md:gap-3", className)} aria-hidden>
      {Array.from({ length: 24 }).map((_, i) => (
        <motion.span
          key={i}
          className={cn("aspect-square rounded-full", i === 9 ? "bg-lime ring-4 ring-ink" : "border-2 border-dashed border-ink/25")}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: reduce ? 0 : (i % 8) * 0.04 + Math.floor(i / 8) * 0.08, duration: 0.4 }}
        />
      ))}
      <p className="micro col-span-8 mt-2 flex items-center gap-3 text-muted-foreground">
        <span className="h-3 w-3 rounded-full bg-lime ring-2 ring-ink" /> Stop 001 is open · the rest of the map is still to be built
      </p>
    </div>
  );
}

