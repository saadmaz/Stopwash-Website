import { createFileRoute } from "@tanstack/react-router";
import { alts, images, pageHead, standards } from "@/data/site";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { Counter } from "@/components/site/Counter";
import { Cta } from "@/components/site/Cta";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/our-standard")({
  head: () =>
    pageHead({
      title: "The STOPWASH Standard — Consistent, Professional Car Cleaning | STOPWASH",
      description: "Defined service steps, trained teams, approved products, quality checks and service recovery. How STOPWASH keeps professional car cleaning consistent.",
      path: "/our-standard",
      image: images.detailHands,
    }),
  component: OurStandard,
});

const loop = ["Define", "Train", "Deliver", "Check", "Recover", "Improve"];

function OurStandard() {
  return (
    <>
      <PageHero label="The STOPWASH standard" title={<>Built like a network. <span className="text-lime">Felt like a local stop.</span></>}>
        <p>A clean car on a quiet morning proves very little. The STOPWASH standard is how we deliver the same confidence on the busiest afternoon of the month — in this outlet and in every one that follows.</p>
      </PageHero>

      <section className="section-light py-24 md:py-36">
        <Container>
          <Reveal>
            <SectionLabel n="01">Seven controls</SectionLabel>
            <h2 className="display-lg max-w-4xl">What the standard is made of.</h2>
          </Reveal>
          <ol className="mt-16 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {standards.map((s, i) => (
              <li key={s.title} className={`group relative bg-paper p-8 transition-colors duration-300 hover:bg-lime md:p-10 ${i === 0 ? "lg:col-span-2 lg:row-span-1" : ""}`}>
                <Reveal delay={(i % 3) * 0.06}>
                  <span className="font-display text-6xl font-bold leading-none tracking-tighter text-outline text-ink/40 group-hover:text-ink md:text-7xl">
                    <Counter to={i + 1} />
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-bold uppercase tracking-tight">{s.title}</h3>
                  <p className="mt-3 text-muted-foreground group-hover:text-ink/75">{s.text}</p>
                </Reveal>
              </li>
            ))}
            <li className="flex flex-col justify-between gap-6 bg-ink p-8 text-snow md:p-10 lg:col-span-2">
              <p className="font-display text-3xl font-bold uppercase leading-tight tracking-tight">The system sets the pace. <span className="text-lime">The people create the difference.</span></p>
              <div><Cta to="/contact" variant="lime">Tell us how we did</Cta></div>
            </li>
          </ol>
        </Container>
      </section>

      <section className="bg-navy py-24 md:py-36">
        <Container className="grid gap-14 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <SectionLabel n="02">The quality loop</SectionLabel>
              <h2 className="display-lg">Standards are not a poster on the wall.</h2>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-snow/75">
              <p>Every service is defined before it is delivered, checked before the vehicle is handed back, and recovered properly if it falls short.</p>
              <p>What we learn from each visit feeds back into the process — so the network gets sharper as it grows, not looser.</p>
            </Reveal>
            <ol className="mt-12 flex flex-wrap gap-2" aria-label="Quality loop">
              {loop.map((l, i) => (
                <li key={l}>
                  <Reveal delay={i * 0.07} className="flex items-center gap-2">
                    <span className="micro rounded-sm border border-lime px-3 py-2 text-lime">{String(i + 1).padStart(2, "0")} {l}</span>
                    {i < loop.length - 1 && <span aria-hidden className="text-lime">→</span>}
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:col-span-6">
            <Photo src={images.detailHands} alt={alts.detailHands} className="aspect-[3/4]" caption="Check" />
            <Photo src={images.interior} alt={alts.interior} className="mt-16 aspect-[3/4]" caption="Deliver" />
          </div>
        </Container>
      </section>

      <FinalCta title="See the standard for yourself." text="Pull in at Katubedda and check the finish." cta="Find a Stopwash" />
    </>
  );
}
