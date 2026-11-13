import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { franchiseBrings, franchiseJourney, franchiseWhy, images, pageHead, partnerBrings } from "@/data/site";
import { SectionLabel } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { Counter } from "@/components/site/Counter";
import { StepTrack } from "@/components/site/StepTrack";
import { Marquee } from "@/components/site/Marquee";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/franchise/")({
  head: () =>
    pageHead({
      title: "Franchise With Us — Car Wash Franchise in Sri Lanka | STOPWASH",
      description: "Build the next STOPWASH. A serious vehicle-care brand, a defined operating model and the support to build a local business. Car wash franchise opportunities in Sri Lanka.",
      path: "/franchise",
      image: images.heroBay,
    }),
  component: Franchise,
});

function Franchise() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="motion-lines pointer-events-none absolute -right-20 top-0 h-full w-1/3 opacity-60" aria-hidden />
        <Container className="relative">
          <p className="micro fade-up mb-8 flex items-center gap-3 text-lime"><span className="h-px w-10 bg-lime" />Franchise with us</p>
          <h1 className="hero-xl text-snow">
            <span className="block overflow-hidden pb-[0.06em]"><span className="rise text-outline" style={{ ["--d" as string]: "0.1s" }}>Do not open</span></span>
            <span className="block overflow-hidden pb-[0.06em]"><span className="rise text-outline" style={{ ["--d" as string]: "0.2s" }}>another car wash.</span></span>
            <span className="mt-4 block overflow-hidden pb-[0.06em]"><span className="rise text-lime" style={{ ["--d" as string]: "0.4s" }}>Build the next</span></span>
            <span className="block overflow-hidden pb-[0.06em]"><span className="rise text-lime" style={{ ["--d" as string]: "0.5s" }}>Stopwash.</span></span>
          </h1>
          <div className="fade-up mt-12 grid gap-10 md:grid-cols-2" style={{ ["--d" as string]: "0.7s" }}>
            <p className="max-w-xl text-lg text-snow/80 md:text-xl">
              STOPWASH gives franchise partners a serious vehicle-care brand, a defined operating model and the support required to build a local business that customers can return to.
            </p>
            <div className="md:justify-self-end"><Cta to="/franchise/apply">Apply to become a franchise partner</Cta></div>
          </div>
        </Container>
      </section>

      {/* OPPORTUNITY */}
      <section className="section-light py-24 md:py-36">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel n="01">The opportunity</SectionLabel>
              <h2 className="display-lg">The demand is local. <span className="mark-lime">The system is shared.</span></h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>Every vehicle needs care, and people want it close to where they live, work and drive. That demand is local — and it is best served by someone who knows the market.</p>
              <p><strong className="text-ink">STOPWASH provides the brand, the systems and the operating framework.</strong> Franchise partners bring local leadership and operational discipline. Together, the outlet benefits from both.</p>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            <div className="flex aspect-square flex-col justify-between rounded-md bg-ink p-6 text-snow">
              <span className="micro text-lime">STOPWASH</span>
              <p className="font-display text-2xl font-bold uppercase leading-tight md:text-3xl">Brand.<br />System.<br />Support.</p>
            </div>
            <div className="flex aspect-square flex-col justify-between rounded-md bg-lime p-6 text-ink">
              <span className="micro">Partner</span>
              <p className="font-display text-2xl font-bold uppercase leading-tight md:text-3xl">Capital.<br />Leadership.<br />Discipline.</p>
            </div>
            <Photo src={images.foam} alt="" className="col-span-2 aspect-[2/1]" />
          </div>
        </Container>
      </section>

      {/* WHY */}
      <section className="bg-navy py-24 md:py-36">
        <Container>
          <Reveal>
            <SectionLabel n="02">Why STOPWASH</SectionLabel>
            <h2 className="display-lg max-w-4xl">Six reasons this is <span className="text-lime">not another car wash.</span></h2>
          </Reveal>
          <ol className="mt-16 grid gap-x-10 md:grid-cols-2 lg:grid-cols-3">
            {franchiseWhy.map((w, i) => (
              <li key={w} className="group border-t border-border py-10">
                <Reveal delay={(i % 3) * 0.08}>
                  <span className="font-display text-7xl font-bold leading-none tracking-tighter text-outline text-snow/30 transition-colors group-hover:text-lime md:text-8xl">
                    <Counter to={i + 1} />
                  </span>
                  <p className="mt-6 font-display text-2xl font-bold uppercase leading-tight tracking-tight">{w}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <Marquee items={["The demand is local", "The system is shared", "Build the next Stopwash"]} />

      {/* WHO BRINGS WHAT */}
      <section className="grid lg:grid-cols-2">
        <div className="section-ink px-5 py-20 md:px-14 md:py-28">
          <Reveal>
            <SectionLabel n="03">What STOPWASH brings</SectionLabel>
            <h2 className="display-md">The system.</h2>
          </Reveal>
          <ul className="mt-10 grid gap-3">
            {franchiseBrings.map((b) => (
              <li key={b} className="flex items-start gap-3 border-b border-border pb-3 text-lg">
                <Check className="mt-1 h-5 w-5 shrink-0 text-lime" aria-hidden />{b}
              </li>
            ))}
          </ul>
        </div>
        <div className="section-lime px-5 py-20 md:px-14 md:py-28">
          <Reveal>
            <SectionLabel n="04">What the partner brings</SectionLabel>
            <h2 className="display-md">The drive.</h2>
          </Reveal>
          <ul className="mt-10 grid gap-3">
            {partnerBrings.map((b) => (
              <li key={b} className="flex items-start gap-3 border-b border-ink/20 pb-3 text-lg">
                <Check className="mt-1 h-5 w-5 shrink-0" aria-hidden />{b}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="section-light py-24 md:py-36">
        <Container>
          <Reveal>
            <SectionLabel n="05">Franchise journey</SectionLabel>
            <h2 className="display-lg max-w-4xl">Seven steps from first hello to the next stop.</h2>
          </Reveal>
          <StepTrack steps={franchiseJourney} tone="light" className="mt-16 md:mt-24" />
        </Container>
      </section>

      {/* FINAL */}
      <section className="relative overflow-hidden bg-navy py-24 md:py-36">
        <div className="motion-lines pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40" aria-hidden />
        <Container className="relative">
          <Reveal>
            <h2 className="display-xl max-w-[13ch]">If you have the drive, <span className="text-lime">we have the system.</span></h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12"><Cta to="/franchise/apply">Start the franchise conversation</Cta></div>
            <p className="mt-10 max-w-2xl text-sm text-steel">
              STOPWASH does not publish investment amounts, fees, royalties or projected returns. These are discussed directly with qualified applicants, and no franchise outcome or profitability is guaranteed.
            </p>
          </Reveal>
        </Container>
        <div className="absolute bottom-0 left-0 h-2 w-full bg-lime" />
      </section>
    </>
  );
}
