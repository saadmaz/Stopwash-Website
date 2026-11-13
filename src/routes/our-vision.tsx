import { createFileRoute } from "@tanstack/react-router";
import { alts, images, pageHead } from "@/data/site";
import { PageHero } from "@/components/site/PageHero";
import { Container, SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/our-vision")({
  head: () =>
    pageHead({
      title: "Our Vision — Vehicle Care in the Rhythm of the Day | STOPWASH",
      description: "STOPWASH's vision: professional vehicle care as convenient, repeatable and accessible as the fuel stop or the coffee stop, across Sri Lanka.",
      path: "/our-vision",
    }),
  component: OurVision,
});

const pov = [
  { not: "Convenience is not speed alone.", is: "It is knowing what will happen next." },
  { not: "Quality is not a lucky finish.", is: "It is a standard that survives a busy day." },
  { not: "Growth is not more signs on more buildings.", is: "It is the ability to deliver the same confidence in more places." },
  { not: "A franchise is not a logo licence.", is: "It is a local operator inside a larger operating system." },
];

function OurVision() {
  return (
    <>
      <PageHero eyebrow="Our vision" title="Make vehicle care disappear into the rhythm of the day." />

      <section className="section-y">
        <Container>
          <div className="grid gap-4 md:grid-cols-2">
            <Reveal className="flex flex-col rounded-3xl bg-navy p-8 text-snow md:p-12">
              <p className="eyebrow text-lime">Vision</p>
              <p className="mt-5 font-display text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                To make professional vehicle care as convenient, repeatable and accessible as the fuel stop, the coffee stop or the next stop on the road.
              </p>
            </Reveal>
            <Reveal delay={0.08} className="flex flex-col rounded-3xl bg-lime p-8 text-ink md:p-12">
              <p className="eyebrow text-ink">Mission</p>
              <p className="mt-5 font-display text-2xl font-bold leading-snug tracking-tight md:text-3xl">
                We make vehicle care easier for customers and more scalable for operators by combining strong locations, sharp systems, trained teams and a service experience people want to repeat.
              </p>
            </Reveal>
          </div>
          <Reveal className="mt-4"><Photo src={images.detailHands} alt={alts.detailHands} className="aspect-[21/9]" imgClassName="object-[50%_40%]" /></Reveal>
        </Container>
      </section>

      <section className="section-paper section-y">
        <Container>
          <SectionHeading center eyebrow="What we believe" title="The STOPWASH point of view" />
          <ul className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2">
            {pov.map((p, i) => (
              <li key={p.not}>
                <Reveal delay={(i % 2) * 0.06} className="h-full rounded-2xl bg-snow p-8">
                  <p className="text-lg text-muted-foreground">{p.not}</p>
                  <p className="mt-2 font-display text-2xl font-bold leading-snug tracking-tight">{p.is}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <FinalCta title="Keep moving." text="See where the vision is already working — and where it goes next." cta="Find a STOPWASH" />
    </>
  );
}
