import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Step = { title: string; text: string };

/**
 * Numbered process: horizontal track on desktop, vertical timeline on mobile.
 * The connecting line draws in when the track scrolls into view.
 */
export function StepTrack({ steps, className, tone = "dark" }: { steps: Step[]; className?: string; tone?: "dark" | "light" }) {
  const reduce = useReducedMotion();
  const cols = steps.length === 7 ? "lg:grid-cols-7" : steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4";
  const line = tone === "dark" ? "bg-snow/15" : "bg-ink/15";
  return (
    <ol className={cn("relative grid gap-0 lg:gap-6", cols, className)}>
      {/* track lines */}
      <span aria-hidden className={cn("absolute left-[19px] top-2 bottom-2 w-px lg:left-0 lg:right-0 lg:top-[19px] lg:bottom-auto lg:h-px lg:w-auto", line)} />
      <motion.span
        aria-hidden
        className="absolute left-[19px] top-2 bottom-2 hidden w-px origin-left bg-lime lg:left-0 lg:right-0 lg:top-[19px] lg:bottom-auto lg:block lg:h-[2px] lg:w-auto"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
      />
      <motion.span
        aria-hidden
        className="absolute left-[19px] top-2 bottom-2 w-[2px] origin-top bg-lime lg:hidden"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
      />
      {steps.map((s, i) => (
        <motion.li
          key={s.title}
          className="relative pb-10 pl-16 last:pb-0 lg:pb-0 lg:pl-0 lg:pt-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <span
            className={cn(
              "absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full border-2 border-lime font-mono text-xs font-bold",
              tone === "dark" ? "bg-navy text-lime" : "bg-paper text-ink",
              i === steps.length - 1 && "bg-lime text-ink",
            )}
          >
            {String(i + 1).padStart(2, "0")}
          </span>
          <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight md:text-2xl">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{s.text}</p>
        </motion.li>
      ))}
    </ol>
  );
}
