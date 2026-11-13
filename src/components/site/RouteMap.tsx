import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Abstract route graphic: one live stop, the road ahead drawn as a dashed line.
 * Deliberately shows no future place names — planned outlets are not implied.
 */
export function RouteMap({ className, tone = "lime", stopLabel = "Katubedda", stopCode = "Stop 001" }: { className?: string; tone?: "lime" | "navy"; stopLabel?: string; stopCode?: string }) {
  const ink = tone === "lime" ? "var(--ink)" : "var(--snow)";
  const accent = tone === "lime" ? "var(--ink)" : "var(--lime)";
  return (
    <div className={cn("relative isolate overflow-hidden rounded-md", tone === "lime" ? "bg-ink/[0.06]" : "bg-ink", className)}>
      <div className="grid-lines absolute inset-0" style={{ color: ink }} />
      <svg viewBox="0 0 600 460" className="relative h-full w-full" role="img" aria-label={`Route graphic marking ${stopLabel} as the first STOPWASH stop`}>
        {/* secondary roads */}
        <g stroke={ink} strokeOpacity=".18" strokeWidth="10" fill="none" strokeLinecap="round">
          <path d="M-20 120 C 140 140, 220 60, 380 90 S 560 40, 640 70" />
          <path d="M120 480 C 150 360, 260 330, 300 230 S 420 120, 470 -20" />
          <path d="M-20 380 C 120 360, 200 410, 340 390 S 520 300, 640 330" />
        </g>
        {/* travelled route */}
        <motion.path
          d="M-10 300 C 80 300, 130 250, 210 250 S 300 230, 300 230"
          stroke={accent}
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: [0.65, 0, 0.35, 1] }}
        />
        {/* road ahead */}
        <path d="M300 230 C 360 215, 400 170, 470 160 S 560 120, 620 90" stroke={ink} strokeOpacity=".55" strokeWidth="3" strokeDasharray="2 12" strokeLinecap="round" fill="none" />
        {/* the stop */}
        <circle cx="300" cy="230" r="34" fill={accent} fillOpacity=".12" className="motion-safe:animate-ping [transform-box:fill-box] [transform-origin:center]" />
        <circle cx="300" cy="230" r="14" fill={accent} />
        <circle cx="300" cy="230" r="5" fill={tone === "lime" ? "var(--lime)" : "var(--ink)"} />
        <g fontFamily="var(--font-mono)" fill={ink}>
          <text x="326" y="262" fontSize="13" letterSpacing="2.5" opacity=".7">{stopCode.toUpperCase()}</text>
          <text x="326" y="290" fontSize="26" fontWeight="700" fontFamily="var(--font-display)" letterSpacing="-0.5">{stopLabel.toUpperCase()}</text>
          <text x="540" y="70" fontSize="12" letterSpacing="2.5" opacity=".55" textAnchor="end">NEXT STOP →</text>
        </g>
      </svg>
    </div>
  );
}
