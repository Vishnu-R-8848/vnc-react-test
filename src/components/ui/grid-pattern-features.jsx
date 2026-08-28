import React, { useId, useMemo } from "react";
import { cn } from "@/lib/utils";

export function GridPattern({
  width = 20,
  height = 20,
  x = -12,
  y = 4,
  squares,
  className,
  ...props
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" className={className} {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${patternId})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sqX, sqY], idx) => (
            <rect
              strokeWidth="0"
              key={`${sqX}-${sqY}-${idx}`}
              width={width + 1}
              height={height + 1}
              x={sqX * width}
              y={sqY * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export const Grid = ({ pattern, size = 20 }) => {
  const p = useMemo(() => {
    return (
      pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      ]
    );
  }, [pattern]);

  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 from-zinc-100/30 to-zinc-300/30 dark:to-zinc-900/30 opacity-100">
        <GridPattern
          width={size}
          height={size}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridFeatureCard({ title, description, size = 20, pattern, className, children }) {
  return (
    <div
      className={cn(
        "relative bg-gradient-to-b dark:from-neutral-900 from-neutral-100 dark:to-neutral-950 to-white p-6 rounded-3xl overflow-hidden border border-neutral-200/60 dark:border-neutral-800/60 shadow-xs",
        className
      )}
    >
      <Grid size={size} pattern={pattern} />
      <p className="text-base font-bold text-neutral-800 dark:text-white relative z-20">
        {title}
      </p>
      <p className="text-neutral-600 dark:text-neutral-400 mt-3 text-sm sm:text-base font-normal relative z-20 leading-relaxed">
        {description}
      </p>
      {children && <div className="relative z-20 mt-4">{children}</div>}
    </div>
  );
}

export default GridPattern;
