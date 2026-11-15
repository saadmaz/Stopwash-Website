import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { alts, franchiseBrings, franchiseFaqs, franchiseJourney, franchiseWhy, images, locations, pageHead, partnerBrings, partnerTraits } from "@/data/site";
import { Container, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { StepTrack } from "@/components/site/StepTrack";
import { Cta } from "@/components/site/Cta";
import { LocationCard } from "@/components/site/LocationCard";
import { FaqList } from "@/components/site/FaqList";
import { FranchiseApply } from "@/components/site/FranchiseApply";
import { LandingHero } from "@/components/site/LandingHero";

export const Route = createFileRoute("/franchise/")({
  head: () =>
    pageHead({
      title: "Franchise With Us: Car Wash Franchise in Sri Lanka | STOPWASH",
      description: "Do not open another car wash. Build the next STOPWASH: a serious vehicle-care brand, a defined operating model and the support to build a local business. Selective by design.",
      path: "/franchise",
    }),
  component: Franchise,
});

/** Only confirmed facts; no fees, returns or timelines until they are approved. */
const atAGlance: [string, string][] = [
  ["First outlet", "Katubedda, Sri Lanka"],
  ["The model", "Local operators, one shared system"],
  ["Growth routes", "Single-unit and multi-unit"],
  ["Partner profile", "Operators, not spectators"],
  ["Investment", "Discussed with qualified applicants"],
];

function Franchise() {
  return (
    <>
      <LandingHero
        id="franchise-title"
        eyebrow="Franchise with us"
        titleClassName=""
        image={images.franchiseHero}
        imageAlt={alts.franchiseHero}
        focus="68% 0%"
        title={<>
          <span className="block font-display text-xl font-semibold tracking-tight text-snow/55 md:text-2xl">Do not open another car wash.</span>
          <span className="text-h1 mt-3 block">Build the next STOPWASH.</span>
        </>}
        actions={<>
          <Cta href="#apply">Apply to become a franchise partner</Cta>
          <Cta href="#faq" variant="outline" className="text-snow" arrow={false}>Read the FAQ</Cta>
        </>}
      >
        <p className="fade-up mt-6 font-display text-xl font-semibold text-lime md:text-2xl" style={{ ["--d" as string]: "0.1s" }}>The difference is the system.</p>
        <p className="text-lead fade-up mt-3 max-w-xl text-snow/75" style={{ ["--d" as string]: "0.15s" }}>
          STOPWASH gives franchise partners a serious vehicle-care brand, a defined operating model and the support required to build a local business that customers return to.
        </p>
      </LandingHero>

      <section className="section-paper border-b border-border py-10 md:py-12" aria-label="Franchise at a glance">
        <Container>
          <p className="eyebrow mb-5">At a glance</p>
          <dl className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-5">
            {atAGlance.map(([k, v]) => (
              <div key={k} className="border-l-2 border-lime pl-4">
                <dt className="text-sm text-muted-foreground">{k}</dt>
                <dd className="mt-1 font-semibold leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The opportunity" title="The demand is local. The system is shared." />
            <Reveal delay={0.1} className="text-lead mt-6 space-y-4 text-muted-foreground">
              <p className="text-foreground">Every city has vehicles. Every vehicle needs care.</p>
              <p>The opportunity is to bring a better standard to a local market without asking every operator to invent the brand, process, training model and customer experience from zero.</p>
              <p>STOPWASH provides the shared architecture. The franchise partner brings local leadership and the discipline to run it properly.</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 rounded-2xl bg-paper p-6">
              <p className="leading-relaxed">This is not a passive investment and it is not a signboard licence. It is an operating opportunity for people who want to build a business with a standard, a network and a future.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}><Photo src={images.foam} alt={alts.foam} className="aspect-[4/3]" /></Reveal>
        </Container>
      </section>

      <section className="section-paper section-y">
        <Container>
          <SectionHeading center eyebrow="Why STOPWASH" title="Build with a head start." />
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {franchiseWhy.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={(i % 3) * 0.05} className="flex h-full gap-4 rounded-2xl bg-snow p-5 sm:block sm:p-7">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-lime text-sm font-bold text-ink">{i + 1}</span>
                  <div className="sm:mt-5">
                    <h3 className="font-display text-lg font-bold leading-snug tracking-tight sm:text-xl">{w.title}</h3>
                    <p className="mt-1.5 leading-relaxed text-muted-foreground">{w.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-dark section-y">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="The partner we want" title="We are not looking for spectators. We are looking for operators." />
            <Reveal delay={0.1} className="mt-8 text-lg">
              <p className="text-muted-foreground">Capital opens the conversation.</p>
              <p className="font-display text-2xl font-bold tracking-tight">Commitment earns the opportunity.</p>
            </Reveal>
          </div>
          <div className="lg:pt-10">
            <p className="font-medium">The right franchise partner is someone who:</p>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {partnerTraits.map((t, i) => (
                <li key={t}>
                  <Reveal delay={i * 0.03} className="flex gap-4 py-3.5">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />
                    <span>{t}</span>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading center eyebrow="A shared commitment" title="Who brings what." />
          <div className="mt-12 grid gap-4 lg:grid-cols-5">
            <Reveal className="flex flex-col rounded-3xl bg-navy p-7 text-snow md:p-10 lg:col-span-3">
              <h3 className="font-display text-2xl font-bold tracking-tight">What STOPWASH brings</h3>
              <p className="mt-2 text-snow/70">The framework that makes the opportunity buildable.</p>
              <ul className="mt-7 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {franchiseBrings.map((b) => (
                  <li key={b} className="flex gap-3 text-[0.9375rem] leading-snug"><Check className="mt-px h-[1.1rem] w-[1.1rem] shrink-0 text-lime" aria-hidden />{b}</li>
                ))}
              </ul>
              <p className="mt-auto border-t border-snow/15 pt-6 text-snow/80 lg:mt-8">The partner is never left to figure out the hard parts alone. In return, the partner is expected to operate the system with discipline.</p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col rounded-3xl bg-lime p-7 text-ink md:p-10 lg:col-span-2">
              <h3 className="font-display text-2xl font-bold tracking-tight">What the partner brings</h3>
              <p className="mt-2 text-ink/70">Full responsibility for the local business.</p>
              <ul className="mt-7 grid gap-y-3">
                {partnerBrings.map((b) => (
                  <li key={b} className="flex gap-3 text-[0.9375rem] leading-snug"><Check className="mt-px h-[1.1rem] w-[1.1rem] shrink-0" aria-hidden />{b}</li>
                ))}
              </ul>
              <p className="mt-auto border-t border-ink/15 pt-6 font-display text-xl font-bold tracking-tight lg:mt-8">We provide the road map. The partner still has to drive.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-paper section-y">
        <Container>
          <SectionHeading eyebrow="Franchise journey" title="From first conversation to first customer." />
          <StepTrack
            steps={franchiseJourney}
            className="mt-12"
            trailing={
              <Reveal className="flex h-full flex-col justify-between gap-5 rounded-2xl bg-navy p-6 text-snow">
                <div>
                  <p className="font-display text-lg font-bold tracking-tight lg:text-xl">Ready to raise your hand?</p>
                  <p className="mt-1.5 text-[0.9375rem] text-snow/70">Step one starts with your application.</p>
                </div>
                <Cta href="#apply" className="self-start px-5 py-2.5">Apply now</Cta>
              </Reveal>
            }
          />
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="Visit the first stop" title="See the system working in Katubedda." intro="Before you build, see the standard for yourself. Our first outlet is where the process, the team and the finish are tested every day." />
          <div className="mt-12 grid gap-6">
            {locations.filter((l) => l.status === "open").map((l) => (
              <Reveal key={l.slug}><LocationCard location={l} /></Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="faq" className="section-paper section-y scroll-mt-16">
        <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow="Franchise FAQ" title="Questions serious operators ask." intro="Straight answers to the questions we hear most. Anything else, ask us directly in your application." />
            <p className="mt-6 text-sm text-muted-foreground">STOPWASH does not publish investment amounts, fees, royalties or projected returns. These are discussed directly with qualified applicants, and no franchise outcome or profitability is guaranteed.</p>
          </div>
          <Reveal delay={0.05} className="lg:col-span-8">
            <FaqList items={franchiseFaqs} />
          </Reveal>
        </Container>
      </section>

      <FranchiseApply />
    </>
  );
}
