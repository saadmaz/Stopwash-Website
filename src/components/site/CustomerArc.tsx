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
  const stage = useRef<HTMLDivElement>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, cardW = 0, step = 0, total = 0, top = 0;
    let offset = 0, last = 0, raf = 0, visible = false;

    // Cards fill the stage: as tall as the space allows (card + dip + tilt is about 1.62 card widths),
    // capped so a phone shows a couple of cards and a wide monitor about five.
    const measure = () => {
      width = el.clientWidth;
      const maxW = width < 640 ? width * 0.5 : width < 1024 ? width * 0.3 : Math.min(width * 0.2, 340);
      cardW = Math.max(110, Math.min(el.clientHeight / 1.62, maxW));
      // On tall screens the width cap wins; centre the arc in the leftover height instead of leaving one big gap.
      top = Math.max(0, (el.clientHeight - cardW * 1.62) / 2);
      el.style.setProperty("--card", `${cardW}px`);
      step = cardW * 1.1;
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
        const y = cardW * 0.22 * u * u; // edges dip
        const r = 11 * u; // edges tilt outward
        card.style.transform = `translate3d(${left}px, ${top + y}px, 0) rotate(${r}deg)`;
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

    const ro = new ResizeObserver(() => { measure(); place(); });
    ro.observe(el);

    const io = new IntersectionObserver(([entry]) => {
      visible = !!entry?.isIntersecting;
      if (visible && !reduce && !raf) { last = 0; raf = requestAnimationFrame(frame); }
    });
    io.observe(el);

    return () => { ro.disconnect(); io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div
      ref={stage}
      role="group"
      aria-label="STOPWASH customers at Katubedda"
      style={{ ["--card" as string]: "clamp(118px, min(15vw, 21svh), 250px)" }}
      className={cn(
        "relative w-full overflow-hidden transition-opacity duration-700",
        "[-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        ready ? "opacity-100" : "opacity-0",
        className,
      )}
    >
      {CARDS.map((photo, i) => {
        const copy = i >= customerPhotos.length;
        return (
          <div
            key={i}
            ref={(node) => { cards.current[i] = node; }}
            aria-hidden={copy || undefined}
            className="absolute left-0 top-[calc(var(--card)*0.06)] w-[var(--card)] origin-bottom will-change-transform"
          >
            <figure className="overflow-hidden rounded-2xl bg-paper shadow-[0_18px_40px_-18px_rgb(5_10_18/0.35)] ring-1 ring-ink/5">
              <img src={photo.src} alt={copy ? "" : photo.alt} loading="lazy" decoding="async" width={560} height={700} className="aspect-[4/5] h-auto w-full object-cover" />
            </figure>
          </div>
        );
      })}
    </div>
  );
}
