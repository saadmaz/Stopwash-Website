import { useEffect, useRef, useState } from "react";
import { customerPhotos } from "@/data/site";
import { cn } from "@/lib/utils";

/** Pixels per second. Slow enough to read as calm, fast enough to notice. */
const SPEED = 26;
/** Cards rendered: the photo list twice, so the loop always wraps off-screen, even on very wide monitors. */
const CARDS = [...customerPhotos, ...customerPhotos];

/**
 * Real customer photos fanned in an arc that drifts sideways.
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
    let width = 0, cardW = 0, step = 0, total = 0;
    let offset = 0, last = 0, raf = 0, visible = false;

    const measure = () => {
      width = el.clientWidth;
      cardW = cards.current[0]?.offsetWidth ?? 240;
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
      className={cn("relative transition-opacity duration-700", ready ? "opacity-100" : "opacity-0", className)}
    >
      {CARDS.map((photo, i) => {
        const copy = i >= customerPhotos.length;
        return (
          <div
            key={i}
            ref={(node) => { cards.current[i] = node; }}
            aria-hidden={copy || undefined}
            className="absolute left-0 top-0 w-[clamp(150px,15vw,250px)] origin-bottom will-change-transform"
          >
            <figure className="overflow-hidden rounded-2xl bg-navy shadow-[0_24px_50px_-20px_rgb(0_0_0/0.65)] ring-1 ring-snow/10">
              <img src={photo.src} alt={copy ? "" : photo.alt} loading="lazy" decoding="async" width={560} height={700} className="aspect-[4/5] h-auto w-full object-cover" />
            </figure>
          </div>
        );
      })}
    </div>
  );
}
