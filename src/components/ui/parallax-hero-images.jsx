import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export const ParallaxHeroImages = ({
  images = [],
  variant = "edge-focus",
  className,
}) => {
  const containerRef = useRef(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Positions and parallax depths for edge-focus variant
  const edgeFocusConfigs = [
    {
      className: "top-8 left-[4%] sm:left-[8%] w-44 sm:w-64 -rotate-6",
      depth: 35,
      rotateDepth: 5,
      zIndex: 2,
    },
    {
      className: "top-12 right-[4%] sm:right-[8%] w-48 sm:w-72 rotate-6",
      depth: -45,
      rotateDepth: -6,
      zIndex: 3,
    },
    {
      className: "bottom-14 left-[6%] sm:left-[10%] w-48 sm:w-68 rotate-4",
      depth: 55,
      rotateDepth: 4,
      zIndex: 4,
    },
    {
      className: "bottom-10 right-[6%] sm:right-[10%] w-44 sm:w-64 -rotate-8",
      depth: -35,
      rotateDepth: -5,
      zIndex: 2,
    },
    {
      className: "top-1/2 -translate-y-1/2 left-[2%] sm:left-[4%] w-36 sm:w-56 -rotate-12 hidden md:block",
      depth: 25,
      rotateDepth: 8,
      zIndex: 1,
    },
    {
      className: "top-1/2 -translate-y-1/2 right-[2%] sm:right-[4%] w-36 sm:w-56 rotate-12 hidden md:block",
      depth: -25,
      rotateDepth: -8,
      zIndex: 1,
    },
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full overflow-hidden select-none",
        className
      )}
    >
      {images.map((src, index) => {
        const config = edgeFocusConfigs[index % edgeFocusConfigs.length];
        return (
          <ParallaxCard
            key={`${src}-${index}`}
            src={src}
            config={config}
            smoothX={smoothX}
            smoothY={smoothY}
          />
        );
      })}
    </div>
  );
};

const ParallaxCard = ({ src, config, smoothX, smoothY }) => {
  const x = useTransform(smoothX, (val) => val * config.depth);
  const y = useTransform(smoothY, (val) => val * config.depth);
  const rotate = useTransform(smoothX, (val) => val * config.rotateDepth);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        zIndex: config.zIndex,
      }}
      className={cn(
        "pointer-events-auto absolute rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 dark:border-neutral-800/80 bg-white dark:bg-neutral-900 transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
        config.className
      )}
      whileHover={{ scale: 1.06, zIndex: 50 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <img
        src={src}
        alt="Parallax showcase"
        className="w-full h-full object-cover pointer-events-none"
        loading="lazy"
      />
    </motion.div>
  );
};

export default ParallaxHeroImages;
