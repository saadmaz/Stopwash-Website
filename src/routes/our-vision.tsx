import { createFileRoute } from "@tanstack/react-router";
import { alts, images, pageHead } from "@/data/site";
import { PageHero, SectionLabel } from "@/components/site/PageHero";
import { Container } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Photo } from "@/components/site/Photo";
import { FinalCta } from "@/components/site/FinalCta";

export const Route = createFileRoute("/our-vision")({
  head: () =>
    pageHead({
      title: "Our Vision — Vehicle Care in the Rhythm of the Day | STOPWASH",
      description: "STOPWASH's vision: professional vehicle care as convenient, repeatable and accessible as the fuel stop or the coffee stop, across Sri Lanka.",
      path: "/our-vision",
      image: images.detailHands,
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
      <PageHero label="Our vision" title={<>Make vehicle care disappear into <span className="text-lime">the rhythm of the day.</span></>} />

      <section className="section-light section-y">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel n="01">Vision</SectionLabel>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-9">
            <p className="statement">
              To make professional vehicle care as convenient, repeatable and accessible as{" "}
              <span className="mark-lime">the fuel stop, the coffee stop</span> or the next stop on the road.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="relative h-[45vh] max-h-[32rem] min-h-64 overflow-hidden">
        <Photo src={images.detailHands} alt={alts.detailHands} className="absolute inset-0 rounded-none" imgClassName="object-[50%_40%]" />
      </section>

      <section className="bg-navy section-y">
        <Container className="grid gap-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-3">
            <SectionLabel n="02">Mission</SectionLabel>
          </Reveal>
          <Reveal delay={0.05} className="lg:col-span-9">
            <p className="text-xl leading-snug text-snow/85 md:text-3xl md:leading-tight">
              We make vehicle care <span className="text-lime">easier for customers</span> and <span className="text-lime">more scalable for operators</span> by combining strong locations, sharp systems, trained teams and a service experience people want to repeat.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="section-ink section-y">
        <Container>
          <Reveal>
            <SectionLabel n="03">Point of view</SectionLabel>
            <h2 className="display-lg">The STOPWASH point of view</h2>
          </Reveal>
          <ol className="mt-12 md:mt-16">
            {pov.map((p, i) => (
              <li key={p.not} className="group grid gap-3 border-t border-border py-8 md:grid-cols-12 md:gap-8 md:py-10">
                <span className="micro text-lime md:col-span-1">{String(i + 1).padStart(2, "0")}</span>
                <Reveal className="md:col-span-5">
                  <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-snow/40 transition-colors duration-500 group-hover:text-snow/70 md:text-3xl">{p.not}</p>
                </Reveal>
                <Reveal delay={0.12} className="md:col-span-6">
                  <p className="font-display text-xl font-bold uppercase leading-tight tracking-tight text-lime md:text-3xl">{p.is}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <FinalCta title="Keep moving." text="See where the vision is already working — and where it goes next." cta="Find a Stopwash" />
    </>
  );
}
