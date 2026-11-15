import type { ReactNode } from "react";
import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import { contact, directionsUrl, mapEmbedUrl, type Location } from "@/data/site";
import { ctaVariants } from "./Cta";
import { Photo } from "./Photo";

/** Location feature card. Embeds Google Maps once exact coordinates are set. */
export function LocationCard({ location }: { location: Location }) {
  const map = mapEmbedUrl(location);
  return (
    <article className="grid overflow-hidden rounded-3xl border border-border bg-snow lg:grid-cols-2" aria-labelledby={`loc-${location.slug}`}>
      <div className="flex flex-col p-7 md:p-10">
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-lime/30 px-3 py-1 text-sm font-semibold text-ink">
          <span className="h-2 w-2 rounded-full bg-leaf" /> {location.status === "open" ? "Open" : "Coming soon"}
        </span>
        <h2 id={`loc-${location.slug}`} className="text-h2 mt-5">{location.name}</h2>
        <p className="mt-2 text-lg text-muted-foreground">{location.label}</p>
        <dl className="mt-8 grid gap-5">
          <Detail icon={MapPin} label="Address">{location.address ?? `${location.name}, Sri Lanka. Full address coming soon.`}</Detail>
          <Detail icon={Phone} label="Phone"><a href={contact.phoneHref} className="hover:underline">{location.phone}</a></Detail>
          <Detail icon={Clock} label="Opening hours">{location.hours ?? "Please call ahead for today's hours."}</Detail>
        </dl>
        <div className="mt-auto flex flex-col gap-3 pt-10 sm:flex-row">
          <a href={directionsUrl(location)} target="_blank" rel="noopener noreferrer" className={ctaVariants({ variant: "lime" })}>
            <Navigation className="h-4 w-4" aria-hidden /> Get directions
          </a>
          <a href={contact.phoneHref} className={ctaVariants({ variant: "outline" })}>
            <Phone className="h-4 w-4" aria-hidden /> Call now
          </a>
        </div>
      </div>
      {map ? (
        <iframe title={`Map of STOPWASH ${location.name}`} src={map} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="h-full min-h-80 w-full border-0" />
      ) : (
        <Photo src={location.image} alt={location.alt} className="min-h-80 rounded-none" />
      )}
    </article>
  );
}

function Detail({ icon: Icon, label, children }: { icon: typeof MapPin; label: string; children: ReactNode }) {
  return (
    <div className="flex gap-4">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-paper"><Icon className="h-[1.1rem] w-[1.1rem]" aria-hidden /></span>
      <div>
        <dt className="text-sm text-muted-foreground">{label}</dt>
        <dd className="mt-0.5 font-medium">{children}</dd>
      </div>
    </div>
  );
}
