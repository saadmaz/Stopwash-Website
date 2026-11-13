import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { BrandPanel } from "./BrandPanel";

type Props = {
  src: string | null;
  alt: string;
  className?: string;
  imgClassName?: string;
  /** Word used by the brand composition when no photo is available yet. */
  fallbackWord?: string | undefined;
  fallbackLabel?: string | undefined;
  caption?: string | undefined;
  /** Above-the-fold images: eager load, no reveal animation. */
  priority?: boolean;
};

/**
 * Photograph with a scroll-triggered wipe reveal and hover zoom.
 * Falls back to a brand-coloured composition when `src` is null.
 */
export function Photo({ src, alt, className, imgClassName, fallbackWord, fallbackLabel, caption, priority }: Props) {
  if (!src) return <BrandPanel word={fallbackWord ?? "STOP"} label={fallbackLabel} className={className} />;

  return (
    <motion.figure
      className={cn("group relative overflow-hidden rounded-md bg-ink", className)}
      initial={priority ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {/* Observe the figure, clip the inner layer: IntersectionObserver ignores a clipped-away target. */}
      <motion.div
        className="h-full w-full"
        variants={{ hidden: { clipPath: "inset(0 0 100% 0)" }, show: { clipPath: "inset(0 0 0% 0)" } }}
        transition={{ duration: 1.1, ease: [0.77, 0, 0.18, 1] }}
      >
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          {...(priority ? { fetchPriority: "high" as const } : {})}
          className={cn("h-full w-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]", imgClassName)}
        />
      </motion.div>
      {caption && (
        <figcaption className="micro absolute bottom-3 left-3 rounded-sm bg-ink/80 px-2.5 py-1.5 text-snow backdrop-blur-sm">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
