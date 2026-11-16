import { useEffect, useRef, useState } from "react";
import { customerPhotos } from "@/data/site";
import { cn } from "@/lib/utils";

/** Pixels per second. Slow enough to read as calm, fast enough to notice. */
const SPEED = 26;
/** Cards rendered: the photo list twice, so the loop always wraps off-screen, even on very wide monitors. */
const CARDS = [...customerPhotos, ...customerPhotos];

/**
 * Real customer photos fanned in an arc that drifts sideways. Give it a height (for example `flex-1`
 * inside a full-screen section): the cards size themselves to fill it.
 * The centre card stands upright; cards tilt and dip as they move toward the edges.
 * Moves only while the section is on screen, and stays still for visitors who prefer reduced motion.
 */
export function CustomerArc({ className }: { className?: string }) {
  return (
    <>
      <CustomerStrip className="md:hidden" />
      <ArcStage className={cn("hidden md:block", className)} />
    </>
  );
}

/**
 * Phones: the same photos in a straight row that drifts sideways. The arc needs width to read as a curve,
 * so narrow screens get this calmer strip instead. Visitors who prefer reduced motion see a still row.
 */
function CustomerStrip({ className }: { className?: string }) {
  return (
    <div
      role="group"
      aria-label="STOPWASH customers at Katubedda"
      className={cn(
        "overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)]",
        className,
      )}
    >
      <ul className="flex w-max animate-[marquee_60s_linear_infinite] motion-reduce:animate-none">
        {CARDS.map((photo, i) => {
          const copy = i >= customerPhotos.length;
          return (
            <li key={i} aria-hidden={copy || undefined} className="w-44 shrink-0 px-2">
              <figure className="overflow-hidden rounded-2xl bg-paper shadow-[0_14px_30px_-16px_rgb(5_10_18/0.35)] ring-1 ring-ink/5">
                {/* Not lazy: cards start beside the screen, where lazy images would arrive blank as they drift in. */}
                <img
                  src={photo.src}
                  alt={copy ? "" : photo.alt}
                  fetchPriority="low"
                  decoding="async"
                  width={560}
                  height={700}
                  className="aspect-[4/5] h-auto w-full object-cover"
                />
              </figure>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/** Tablets and up: the arc. */
function ArcStage({ className }: { className?: string }) {
  const stage = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0,
      cardW = 0,
      step = 0,
      total = 0,
      rise = 0,
      dip = 0;
    let offset = 0,
      last = 0,
      raf = 0,
      visible = false;

    // The arc runs corner to corner: the centre card sits at the top of the stage and the curve drops so that
    // cards at the left and right edges rise out of the bottom corners (about 60% of the card showing).
    const measure = () => {
      width = el.clientWidth;
      const h = el.clientHeight;
      const maxW =
        width < 640 ? width * 0.4 : width < 1024 ? width * 0.3 : Math.min(width * 0.2, 340);
      cardW = Math.max(110, Math.min(h * 0.5, maxW));
      rise = cardW * 0.04;
      dip = Math.max(0, h - cardW * 1.25 * 0.6 - rise);
      el.style.setProperty("--card", `${cardW}px`);
      step = cardW * (width < 640 ? 1.3 : 1.1); // the curve is steeper on phones, so space the tilted cards wider
      total = step * CARDS.length;
    };

    const place = () => {
      const half = width / 2;
      cards.current.forEach((card, i) => {
        if (!card) return;
        let p = (i * step + offset) % total;
        if (p < 0) p += total;
        const left = p - total / 2 + half; // track centred on the stage
        const u = (left + cardW / 2 - half) / Math.max(half, 1); // -1 at the left edge, 1 at the right
        const y = rise + dip * u * u; // parabola: highest in the middle, reaching the bottom corners
        const tangent = (Math.atan((2 * dip * u) / Math.max(half, 1)) * 180) / Math.PI;
        const r = Math.max(-25, Math.min(25, tangent * 0.85)); // tilt along the curve, capped for narrow screens
        card.style.transform = `translate3d(${left}px, ${y}px, 0) rotate(${r}deg)`;
      });
    };

    const frame = (t: number) => {
      if (last) offset += ((t - last) / 1000) * SPEED;
      last = t;
      place();
      raf = visible ? requestAnimationFrame(frame) : 0;
    };

    measure();
    place();
    setReady(true);

    const ro = new ResizeObserver(() => {
      measure();
      place();
    });
    ro.observe(el);

    const io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
      if (visible && !reduce && !raf) {
        last = 0;
        raf = requestAnimationFrame(frame);
      }
    });
    io.observe(el);

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={stage}
      role="group"
      aria-label="STOPWASH customers at Katubedda"
      style={{ ["--card" as string]: "clamp(118px, min(15vw, 21svh), 250px)" }}
      className={cn(
        "relative w-full overflow-hidden transition-opacity duration-700",
        ready ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {CARDS.map((photo, i) => {
        const copy = i >= customerPhotos.length;
        return (
          <div
            key={i}
            ref={(node) => {
              cards.current[i] = node;
            }}
            aria-hidden={copy || undefined}
            className="absolute left-0 top-0 w-[var(--card)] origin-center will-change-transform"
          >
            <figure className="overflow-hidden rounded-2xl bg-paper shadow-[0_18px_40px_-18px_rgb(5_10_18/0.35)] ring-1 ring-ink/5">
              <img
                src={photo.src}
                alt={copy ? "" : photo.alt}
                loading="lazy"
                decoding="async"
                width={560}
                height={700}
                className="aspect-[4/5] h-auto w-full object-cover"
              />
            </figure>
          </div>
        );
      })}
    </div>
  );
}
