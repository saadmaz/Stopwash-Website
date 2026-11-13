import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { alts, franchiseBrings, franchiseJourney, franchiseWhy, images, pageHead, partnerBrings } from "@/data/site";
import { Container, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { StepTrack } from "@/components/site/StepTrack";
import { Cta } from "@/components/site/Cta";

export const Route = createFileRoute("/franchise/")({
  head: () =>
    pageHead({
      title: "Franchise With Us — Car Wash Franchise in Sri Lanka | STOPWASH",
      description: "Build the next STOPWASH. A serious vehicle-care brand, a defined operating model and the support to build a local business. Car wash franchise opportunities in Sri Lanka.",
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
            <p className="text-lead fade-up mt-6 max-w-2xl text-snow/75" style={{ ["--d" as string]: "0.15s" }}>
              STOPWASH gives franchise partners a serious vehicle-care brand, a defined operating model and the support required to build a local business that customers can return to.
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
              <p>Every vehicle needs care, and people want it close to where they live, work and drive. That demand is local — and it is best served by someone who knows the market.</p>
              <p>STOPWASH provides the brand, the systems and the operating framework. Franchise partners bring local leadership and operational discipline.</p>
            </Reveal>
          </div>
          <Reveal delay={0.1}><Photo src={images.foam} alt={alts.foam} className="aspect-[4/3]" /></Reveal>
        </Container>
      </section>

      <section className="section-paper section-y">
        <Container>
          <SectionHeading center eyebrow="Why STOPWASH" title="Six reasons this is not another car wash." />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {franchiseWhy.map((w, i) => (
              <li key={w}>
                <Reveal delay={(i % 3) * 0.05} className="h-full rounded-2xl bg-snow p-7">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-lime text-sm font-bold text-ink">{i + 1}</span>
                  <p className="text-h3 mt-5">{w.replace(/\.$/, "")}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="section-y">
        <Container>
          <SectionHeading center eyebrow="A shared commitment" title="Who brings what." />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            <Reveal className="rounded-3xl bg-navy p-8 text-snow md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight">What STOPWASH brings</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {franchiseBrings.map((b) => (
                  <li key={b} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />{b}</li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.08} className="rounded-3xl bg-lime p-8 text-ink md:p-10">
              <h3 className="font-display text-2xl font-bold tracking-tight">What the partner brings</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {partnerBrings.map((b) => (
                  <li key={b} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />{b}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="section-paper section-y">
        <Container>
          <SectionHeading eyebrow="Franchise journey" title="Seven steps from first hello to the next stop." />
          <StepTrack steps={franchiseJourney} className="mt-12" />
        </Container>
      </section>

      <section className="section-dark section-y">
        <Container className="text-center">
          <Reveal className="mx-auto max-w-3xl">
            <h2 className="text-h2">If you have the drive, we have the system.</h2>
            <div className="mt-9"><Cta to="/franchise/apply">Start the franchise conversation</Cta></div>
            <p className="mx-auto mt-10 max-w-2xl text-sm text-muted-foreground">
              STOPWASH does not publish investment amounts, fees, royalties or projected returns. These are discussed directly with qualified applicants, and no franchise outcome or profitability is guaranteed.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
