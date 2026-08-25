import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const ChromaticImage = ({
  src,
  alt = "Chromatic image",
  className,
  intensity = 6,
}) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 200, damping: 20 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Red Channel Shift
  const redX = useTransform(smoothX, (v) => v * intensity);
  const redY = useTransform(smoothY, (v) => v * intensity);

  // Blue / Cyan Channel Shift (Inverse)
  const blueX = useTransform(smoothX, (v) => -v * intensity);
  const blueY = useTransform(smoothY, (v) => -v * intensity);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x * 2);
    mouseY.set(y * 2);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative overflow-hidden cursor-crosshair select-none group",
        className
      )}
    >
      {/* Red Color Offset Channel */}
      <motion.div
        style={{
          x: redX,
          y: redY,
          opacity: isHovered ? 0.85 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
        className="pointer-events-none absolute inset-0 mix-blend-screen overflow-hidden"
      >
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover filter [filter:url(#chromatic-red)]"
        />
      </motion.div>

      {/* Blue / Cyan Color Offset Channel */}
      <motion.div
        style={{
          x: blueX,
          y: blueY,
          opacity: isHovered ? 0.85 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
        className="pointer-events-none absolute inset-0 mix-blend-screen overflow-hidden"
      >
        <img
          src={src}
          alt=""
          className="h-full w-full object-cover filter [filter:url(#chromatic-cyan)]"
        />
      </motion.div>

      {/* Base Primary Image */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.01]"
      />

      {/* SVG Filters for RGB Channel Separation */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-[9999px] -left-[9999px] h-0 w-0 opacity-0"
      >
        <defs>
          <filter id="chromatic-red">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0
                      0 0 0 0 0
                      0 0 0 0 0
                      0 0 0 1 0"
            />
          </filter>
          <filter id="chromatic-cyan">
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 1 0"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ChromaticImage;
