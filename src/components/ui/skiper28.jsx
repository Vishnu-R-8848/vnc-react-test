import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const defaultBio =
  "I AM VISHNU NAIK CHOUHAN, A FULL STACK ENGINEER CRAFTING HIGH-PERFORMANCE MERN PLATFORMS, REACTIVE NEXT.JS ARCHITECTURES, AND 60 FPS GSAP MOTION EXPERIENCES. WHETHER SCALING DISTRIBUTED MICROSERVICES, FINE-TUNING REST GATEWAYS, OR ARCHITECTING INTERACTIVE INTERFACES, I BUILD FOR RAW SPEED, MODULARITY, AND SUB-MILLISECOND PRECISION.";

export function Skiper28({ text = defaultBio }) {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const yMotionValue = useTransform(scrollYProgress, [0, 1], [380, -280]);
  const opacity = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0.2, 1, 1, 0.2]);
  const transform = useMotionTemplate`rotateX(26deg) translateY(${yMotionValue}px) translateZ(10px)`;

  return (
    <div
      ref={targetRef}
      className="relative z-0 h-[140vh] sm:h-[160vh] w-full bg-transparent text-neutral-900 select-none font-sans"
    >
      <div className="sticky top-20 mx-auto flex h-[65vh] sm:h-[75vh] flex-col items-center justify-center overflow-hidden">
        {/* Top Scroll Indicator */}
        <div className="mb-4 sm:mb-6 grid content-start justify-items-center gap-3 text-center text-neutral-900 pointer-events-none select-none z-20">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-neutral-400 font-semibold">
            // 02.01 SCROLL TO EXPLORE BIO
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-neutral-400 to-transparent" />
        </div>

        {/* 3D Perspective Stage */}
        <div
          className="relative w-full flex items-center justify-center"
          style={{
            transformStyle: "preserve-3d",
            perspective: "260px",
          }}
        >
          <motion.div
            style={{
              transformStyle: "preserve-3d",
              transform,
              opacity,
            }}
            className="w-full max-w-4xl px-4 sm:px-6 text-center text-2xl sm:text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-neutral-900 select-none leading-[1.12]"
          >
            <span className="text-neutral-900">{text.split("I BUILD")[0]}</span>
            <span className="text-[#FF5500]">I BUILD{text.split("I BUILD")[1]}</span>
          </motion.div>
        </div>

        {/* Top & Bottom Fade Gradient Masks seamlessly matching #fafafa */}
        <div className="pointer-events-none absolute bottom-0 left-0 h-28 sm:h-36 w-full bg-gradient-to-t from-[#fafafa] via-[#fafafa]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute top-0 left-0 h-16 w-full bg-gradient-to-b from-[#fafafa] to-transparent z-10" />
      </div>
    </div>
  );
}

export default Skiper28;
