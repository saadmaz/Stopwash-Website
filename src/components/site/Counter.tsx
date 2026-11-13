import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/** Counts up to `to` when scrolled into view. Renders the final value on the server. */
export function Counter({ to, pad = 2, className }: { to: number; pad?: number; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(to);
  const [armed, setArmed] = useState(false);

  // Reset to 0 only once we're on the client, so SSR/no-JS shows the real number.
  useEffect(() => {
    if (!reduce) {
      setValue(0);
      setArmed(true);
    }
  }, [reduce]);

  useEffect(() => {
    if (!armed || !inView) return;
    const c = animate(0, to, { duration: 1.4, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setValue(Math.round(v)) });
    return () => c.stop();
  }, [armed, inView, to]);

  return (
    <span ref={ref} className={className} aria-label={String(to).padStart(pad, "0")}>
      {String(value).padStart(pad, "0")}
    </span>
  );
}
