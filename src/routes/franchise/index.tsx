import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { alts, franchiseBrings, franchiseJourney, franchiseWhy, images, pageHead, partnerBrings, partnerTraits } from "@/data/site";
import { Container, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { StepTrack } from "@/components/site/StepTrack";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/franchise/")({
  head: () =>
    pageHead({
      title: "Franchise With Us — Car Wash Franchise in Sri Lanka | STOPWASH",
      description: "Do not open another car wash. Build the next STOPWASH — a serious vehicle-care brand, a defined operating model and the support to build a local business. Selective by design.",
      path: "/franchise",
    }),
  component: Franchise,
});

function Franchise() {
  return (
    <>
      <section className="section-dark relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
        <img src={images.heroBay} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy via-navy/90 to-navy/40" />
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow fade-up mb-5">Franchise with us</p>
            <h1 className="text-h1 fade-up" style={{ ["--d" as string]: "0.05s" }}>
              <span className="text-snow/60">Do not open another car wash.</span><br />Build the next STOPWASH.
            </h1>
            <p className="fade-up mt-6 font-display text-xl font-semibold text-lime md:text-2xl" style={{ ["--d" as string]: "0.1s" }}>The difference is the system.</p>
            <p className="text-lead fade-up mt-4 max-w-2xl text-snow/75" style={{ ["--d" as string]: "0.15s" }}>
              STOPWASH gives franchise partners a serious vehicle-care brand, a defined operating model and the support required to build a local business that customers return to.
            </p>
            <div className="fade-up mt-9" style={{ ["--d" as string]: "0.25s" }}><Cta to="/franchise/apply">Apply to become a franchise partner</Cta></div>
          </div>
        </Container>
      </section>

      <section className="section-y">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The opportunity" title="The demand is local. The system is shared." />
            <Reveal delay={0.1} className="text-lead mt-6 space-y-4 text-muted-foreground">
              <p className="text-foreground">Every city has vehicles. Every vehicle needs care.</p>
              <p>The opportunity is to bring a better standard to a local market — without asking every operator to invent the brand, process, training model and customer experience from zero.</p>
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
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {franchiseWhy.map((w, i) => (
              <li key={w.title}>
                <Reveal delay={(i % 3) * 0.05} className="h-full rounded-2xl bg-snow p-7">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-sm font-bold text-ink">{i + 1}</span>
                  <h3 className="text-h3 mt-5">{w.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{w.text}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-dark section-y">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
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
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Reveal className="flex flex-col rounded-3xl bg-navy p-8 text-snow md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight">What STOPWASH brings</h3>
              <p className="mt-2 text-snow/70">The framework that makes the opportunity buildable.</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {franchiseBrings.map((b) => (
                  <li key={b} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />{b}</li>
                ))}
              </ul>
              <p className="mt-auto border-t border-snow/15 pt-6 text-snow/80">The partner is not left to figure out the hard parts alone — and is expected to operate the system with discipline.</p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col rounded-3xl bg-lime p-8 text-ink md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight">What the partner brings</h3>
              <p className="mt-2 text-ink/70">Full responsibility for the local business.</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {partnerBrings.map((b) => (
                  <li key={b} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />{b}</li>
                ))}
              </ul>
              <p className="mt-auto border-t border-ink/15 pt-6 font-display text-xl font-bold tracking-tight">We provide the road map. The partner still has to drive.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-paper section-y">
        <Container>
          <SectionHeading eyebrow="Franchise journey" title="From first conversation to first customer." />
          <StepTrack steps={franchiseJourney} className="mt-12" />
        </Container>
      </section>

      <section className="section-dark section-y">
        <Container className="text-center">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-h2">If you have the drive, we have the system.</h2>
            <p className="text-lead mx-auto mt-5 max-w-2xl text-muted-foreground">Tell us about the city you want to build in, the experience you bring and the standard you are willing to protect.</p>
            <div className="mt-9"><Cta to="/franchise/apply">Apply to become a franchise partner</Cta></div>
            <p className="mt-5 text-sm font-medium text-lime">Selective by design. Built for serious operators.</p>
            <p className="mx-auto mt-10 max-w-2xl text-sm text-muted-foreground">
              STOPWASH does not publish investment amounts, fees, royalties or projected returns. These are discussed directly with qualified applicants, and no franchise outcome or profitability is guaranteed.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
