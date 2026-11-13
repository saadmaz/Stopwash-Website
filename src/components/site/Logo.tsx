export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 font-display text-xl font-bold tracking-tight ${className}`}>
      <span className="grid h-6 w-6 place-items-center rounded-sm bg-lime text-[0.65rem] font-black text-ink">SW</span>
      STOP<span className="text-lime">WASH</span>
    </span>
  );
}
