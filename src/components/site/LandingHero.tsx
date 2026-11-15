import type { CSSProperties, ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./SectionHeading";

type Tone = "ink" | "navy";

type Props = {
  /** Id of the page heading; the section is labelled by it. */
  id: string;
  title: ReactNode;
  /** Heading size utility. Defaults to `text-display`; pass `text-hero` for the homepage, or "" when the title styles itself. */
  titleClassName?: string;
  eyebrow?: string;
  /** Supporting paragraph under the heading. */
  lead?: ReactNode;
  /** Free-form content placed between the heading and the lead. */
  children?: ReactNode;
  /** Buttons. */
  actions?: ReactNode;
  /** Hero photograph. Without one, the branded backdrop is shown. */
  image?: string;
  imageAlt?: string;
  /** Which part of the photo to keep in view when it is cropped (narrow screens), as CSS object-position. */
  focus?: string;
  tone?: Tone;
  /** "full" fills the screen; "tall" (about 70%) suits pages where the visitor came to do something below the hero. */
  size?: "full" | "tall";
};

const toneClasses: Record<Tone, { side: string; top: string; bottom: string; mobile: string }> = {
  ink: { side: "from-ink/85 via-ink/45", top: "from-ink", bottom: "from-ink/60", mobile: "bg-ink/50" },
  navy: { side: "from-navy via-navy/75 via-45%", top: "from-navy", bottom: "from-navy/70", mobile: "bg-navy/60" },
};

const delay = (d: string) => ({ ["--d" as string]: d }) as CSSProperties;

/**
 * Full-screen landing hero shared by the main pages.
 * Photos start below the navigation bar; on screens wider than 16:9 they show whole at the right,
 * fading into the dark side behind the text. Narrower screens crop to fill, framed by `focus`.
 */
export function LandingHero({ id, title, titleClassName = "text-display", eyebrow, lead, children, actions, image, imageAlt = "", focus = "50% 20%", tone = "navy", size = "full" }: Props) {
  const t = toneClasses[tone];
  return (
    <>
      <section
        aria-labelledby={id}
        className={cn("section-dark relative isolate flex items-end overflow-hidden md:items-center", size === "full" ? "min-h-[100svh]" : "min-h-[70svh]")}
        style={tone === "ink" ? { background: "var(--ink)" } : undefined}
      >
        {image ? (
          <>
            <img
              src={image}
              alt={imageAlt}
              fetchPriority="high"
              decoding="async"
              style={{ objectPosition: focus }}
              className="absolute inset-x-0 bottom-0 top-[4.5rem] -z-10 h-[calc(100%-4.5rem)] w-full object-cover wide:left-auto wide:w-auto wide:max-w-none wide:fade-left"
            />
            <div className={cn("absolute inset-x-0 top-[4.5rem] -z-10 h-40 bg-gradient-to-b to-transparent", t.top)} />
            <div className={cn("absolute inset-0 -z-10 bg-gradient-to-r to-transparent", t.side)} />
            <div className={cn("absolute inset-x-0 bottom-0 -z-10 h-1/3 bg-gradient-to-t to-transparent", t.bottom)} />
            <div className={cn("absolute inset-0 -z-10 md:hidden", t.mobile)} />
          </>
        ) : (
          <HeroBackdrop />
        )}

        <Container className="max-w-[1440px] pb-20 pt-32 md:py-28">
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow fade-up mb-5">{eyebrow}</p>}
            <h1 id={id} className={cn("fade-up", titleClassName)} style={delay("0.05s")}>{title}</h1>
            {children}
            {lead && <div className="text-lead fade-up mt-6 max-w-xl text-snow/75" style={delay("0.15s")}>{lead}</div>}
            {actions && <div className="fade-up mt-9 flex flex-col gap-3 sm:flex-row" style={delay("0.25s")}>{actions}</div>}
          </div>
        </Container>

        <a
          href={`#${id}-next`}
          aria-label="Scroll to the next section"
          className="fade-up absolute bottom-6 left-1/2 hidden h-11 w-11 -translate-x-1/2 place-items-center rounded-full border border-snow/20 text-snow/70 transition-colors hover:border-snow/50 hover:text-snow md:grid"
          style={delay("0.4s")}
        >
          <ChevronDown className="h-5 w-5" aria-hidden />
        </a>
      </section>
      <div id={`${id}-next`} className="scroll-mt-16" />
    </>
  );
}

/** Branded background used until a page has its own photograph: lime rings and disc, as on the design file cover. */
function HeroBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(55%_65%_at_78%_45%,rgb(178_224_76/0.14),transparent_70%)]" />
      <div className="absolute right-[-18rem] top-1/2 h-[52rem] w-[52rem] -translate-y-1/2 rounded-full border border-lime/20 md:right-[-10rem]" />
      <div className="absolute right-[-10rem] top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 rounded-full border border-lime/35 md:right-[-2rem]" />
      <div className="absolute right-[8%] top-[13%] h-20 w-20 rounded-full bg-lime md:right-[14%] md:top-[30%] md:h-40 md:w-40" />
    </div>
  );
}
