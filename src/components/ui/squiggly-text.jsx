import React, { useEffect, useId, useState } from "react";
import { cn } from "@/lib/utils";

export const SquigglyText = ({
  children,
  className,
  stepDuration = 70,
  scale = [4, 8],
  baseFrequency = "0.02 0.05",
  as: Component = "span",
  ...props
}) => {
  const uniqueId = useId().replace(/:/g, "_");
  const filterId = `squiggly-filter-${uniqueId}`;
  
  const [seed, setSeed] = useState(0);

  // Compute active scale value if passed as [min, max] or number
  const currentScale = Array.isArray(scale)
    ? scale[seed % scale.length]
    : scale;

  useEffect(() => {
    const interval = setInterval(() => {
      setSeed((prev) => (prev + 1) % 100);
    }, stepDuration);

    return () => clearInterval(interval);
  }, [stepDuration]);

  return (
    <Component
      className={cn("inline-block select-none", className)}
      style={{
        filter: `url(#${filterId})`,
      }}
      {...props}
    >
      {children}

      {/* SVG Filter for Organic Hand-Drawn Squiggle Effect */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-[9999px] -left-[9999px] h-0 w-0 opacity-0"
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              type="fractalNoise"
              baseFrequency={baseFrequency}
              numOctaves="2"
              result="noise"
              seed={seed}
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={currentScale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>
    </Component>
  );
};

export default SquigglyText;
