import { images } from "@/data/site";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

export function FinalCta({ title = "Your time is too valuable to waste.", text = "Find your nearest STOPWASH and get back to what matters.", cta = "Find your Stopwash", to = "/locations" }: { title?: string; text?: string; cta?: string; to?: string }) {
  return (
    <section className="relative overflow-hidden section-ink">
      <img src={images.foam} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div className="grain-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-[1440px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <h2 className="display-lg max-w-5xl text-snow">{title}</h2>
          <p className="mt-6 max-w-xl text-lg text-snow/80">{text}</p>
          <div className="mt-10"><Cta to={to}>{cta}</Cta></div>
        </Reveal>
      </div>
      <div className="absolute bottom-0 left-0 h-2 w-full bg-lime" />
    </section>
  );
}
