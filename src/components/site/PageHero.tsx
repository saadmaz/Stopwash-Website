import type { ReactNode } from "react";
import { Container } from "./SectionHeading";

/** Inner-page header: light, generous, sentence case. Optional photo on the right. */
export function PageHero({
  eyebrow,
  title,
  children,
  image,
  imageAlt = "",
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="section-paper pb-16 pt-32 md:pb-20 md:pt-40">
      <Container className={image ? "grid items-end gap-10 lg:grid-cols-12" : ""}>
        <div className={image ? "lg:col-span-7" : "max-w-4xl"}>
          <p className="eyebrow fade-up mb-5">{eyebrow}</p>
          <h1 className="text-h1 fade-up" style={{ ["--d" as string]: "0.05s" }}>
            {title}
          </h1>
          {children && (
            <div
              className="text-lead fade-up mt-6 max-w-2xl text-muted-foreground"
              style={{ ["--d" as string]: "0.15s" }}
            >
              {children}
            </div>
          )}
        </div>
        {image && (
          <div className="fade-up lg:col-span-5" style={{ ["--d" as string]: "0.2s" }}>
            <img
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              className="aspect-[4/3] w-full rounded-2xl object-cover"
            />
          </div>
        )}
      </Container>
    </section>
  );
}
