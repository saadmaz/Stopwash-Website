import { images } from "@/data/site";
import { Cta } from "./Cta";
import { Container } from "./SectionHeading";
import { Reveal } from "./Reveal";

/** Full-bleed photo with one calm, centred line and a single action. */
export function FinalCta({
  title = "Your time is too valuable to waste.",
  text = "Find your nearest STOPWASH and get back to what matters.",
  cta = "Find your STOPWASH",
  to = "/locations",
}: {
  title?: string;
  text?: string;
  cta?: string;
  to?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-snow">
      <img
        src={images.foam}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/40 to-ink/80" />
      <Container className="section-y text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-h2">{title}</h2>
          <p className="text-lead mx-auto mt-5 max-w-xl text-snow/80">{text}</p>
          <div className="mt-9">
            <Cta to={to}>{cta}</Cta>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
