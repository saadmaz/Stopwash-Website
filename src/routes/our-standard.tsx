import { createFileRoute } from "@tanstack/react-router";
import { alts, images, pageHead, standards } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { StepTrack } from "@/components/site/StepTrack";
import { Cta } from "@/components/site/Cta";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/our-standard")({
  head: () =>
    pageHead({
      title: "The STOPWASH Standard: Consistent, Professional Car Cleaning | STOPWASH",
      description: "Defined service steps, trained teams, approved products, quality checks and service recovery. How STOPWASH keeps professional car cleaning consistent.",
      path: "/our-standard",
    }),
  component: OurStandard,
});

const loop = [
  { title: "Define", text: "Every service is written down before it is delivered." },
  { title: "Train", text: "The team learns the process, not just the task." },
  { title: "Check", text: "The finish is reviewed before handover." },
  { title: "Improve", text: "What we learn feeds back into the process." },
];

function OurStandard() {
  return (
    <>
      <PageHero eyebrow="The STOPWASH standard" title="Built like a network. Felt like a local stop." image={images.detailHands} imageAlt={alts.detailHands}>
        <p>A single great wash is not a business model. The real test is whether the experience holds up on a busy day, with a different team, at a different location, months after the first visit. That is what STOPWASH is building towards.</p>
      </PageHero>

      <section className="section-y">
        <Container>
          <SectionHeading eyebrow="Our operating standard" title="A standard that travels. A finish that repeats." intro="Seven commitments that make the brand stronger every time a customer returns." />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={(i % 3) * 0.05} className="h-full rounded-2xl border border-border p-7">
                  <span className="text-sm font-semibold text-leaf">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="text-h3 mt-3">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{s.text}</p>
                </Reveal>
              </li>
            ))}
            <li>
              <Reveal className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-navy p-7 text-snow">
                <p className="font-display text-xl font-bold leading-snug">The system sets the pace. The people create the difference.</p>
                <div><Cta to="/contact" variant="lime" className="px-5 py-2.5">Tell us how we did</Cta></div>
              </Reveal>
            </li>
          </ul>
        </Container>
      </section>

      <section className="section-paper section-y">
        <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="The quality loop" title="Standards are not a poster on the wall." intro="Every service is defined before it is delivered, checked before the vehicle is handed back, and recovered properly if it falls short. The network gets sharper as it grows, not looser." />
          </div>
          <Reveal delay={0.1}><Photo src={images.interior} alt={alts.interior} className="aspect-[4/3]" /></Reveal>
        </Container>
        <Container className="mt-12">
          <StepTrack steps={loop} />
        </Container>
      </section>

      <FinalCta title="See the standard for yourself." text="Pull in at Katubedda and check the finish." cta="Find a STOPWASH" />
    </>
  );
}
