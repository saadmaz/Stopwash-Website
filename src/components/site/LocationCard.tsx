import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { contact, directionsUrl, mapEmbedUrl, type Location } from "@/data/site";
import { ctaVariants } from "./Cta";
import { Photo } from "./Photo";
import { RouteMap } from "./RouteMap";
import { Reveal } from "./Reveal";

/** Full location feature. Renders a live map only once exact coordinates exist. */
export function LocationCard({ location, index }: { location: Location; index: number }) {
  const map = mapEmbedUrl(location);
  return (
    <article className="grid overflow-hidden rounded-md border border-border lg:grid-cols-12" aria-labelledby={`loc-${location.slug}`}>
      <div className="relative flex flex-col justify-between gap-10 p-6 md:p-10 lg:col-span-5">
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <span className="micro rounded-sm bg-lime px-2.5 py-1.5 font-bold text-ink">Stop {String(index + 1).padStart(3, "0")}</span>
            <span className="micro flex items-center gap-2 text-lime">
              <span className="pulse-dot h-2 w-2 rounded-full bg-lime" /> {location.status === "open" ? "Open" : "Coming soon"}
            </span>
          </div>
          <h3 id={`loc-${location.slug}`} className="display-lg mt-6">{location.name}</h3>
          <p className="mt-3 text-lg text-muted-foreground">{location.label}</p>
        </Reveal>
        <dl className="grid gap-5 text-base">
          <div className="flex gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />
            <div>
              <dt className="micro text-muted-foreground">Address</dt>
              <dd className="mt-1">{location.address ?? `${location.name}, Sri Lanka — full address to be confirmed`}</dd>
            </div>
          </div>
          <div className="flex gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />
            <div>
              <dt className="micro text-muted-foreground">Phone</dt>
              <dd className="mt-1"><a href={contact.phoneHref} className="hover:text-lime">{location.phone}</a></dd>
            </div>
          </div>
          <div className="flex gap-4">
            <Clock className="mt-0.5 h-5 w-5 shrink-0 text-lime" aria-hidden />
            <div>
              <dt className="micro text-muted-foreground">Opening hours</dt>
              <dd className="mt-1">{location.hours ?? "Call ahead for today's hours"}</dd>
            </div>
          </div>
        </dl>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href={directionsUrl(location)} target="_blank" rel="noopener noreferrer" className={ctaVariants({ variant: "lime" })}>
            <Navigation className="h-4 w-4" aria-hidden /> Get directions
          </a>
          <a href={contact.phoneHref} className={ctaVariants({ variant: "outline" })}>
            <Phone className="h-4 w-4" aria-hidden /> Call now
          </a>
        </div>
      </div>
      <div className="grid gap-px bg-border lg:col-span-7 lg:h-[40rem] lg:grid-rows-2">
        <Photo src={location.image} alt={location.alt} className="h-72 rounded-none lg:h-full lg:min-h-0" />
        {map ? (
          <iframe
            title={`Map of STOPWASH ${location.name}`}
            src={map}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-72 w-full border-0 lg:h-full grayscale-[0.6] invert-[0.9] hue-rotate-180"
          />
        ) : (
          <RouteMap tone="navy" stopLabel={location.name} stopCode={`Stop ${String(index + 1).padStart(3, "0")}`} className="h-72 rounded-none lg:h-full lg:min-h-0" />
        )}
      </div>
    </article>
  );
}
