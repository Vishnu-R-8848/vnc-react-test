import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

const defaultBio =
  "I AM VISHNU NAIK CHOUHAN, A FULL STACK WEB DEVELOPER AND COMPUTER APPLICATIONS SCHOLAR BASED IN KARNATAKA, INDIA. I SPECIALIZE IN DESIGNING AND ENGINEERING SCALABLE, PRODUCTION-GRADE WEB APPLICATIONS. MY ENGINEERING PHILOSOPHY REVOLVES AROUND DETERMINISTIC SYSTEM ARCHITECTURE ON THE BACKEND PAIRED WITH SUB-MILLISECOND, AWWWARDS-CALIBER MOTION CRAFT ON THE FRONTEND. WHETHER OPTIMIZING MERN MICROSERVICES, ARCHITECTING RESTFUL GATEWAYS, OR FINE-TUNING 60 FPS GSAP SCROLLTRIGGER TIMELINES, I BUILD FOR CLARITY, MODULARITY, AND ZERO BLOAT.";

export function Skiper28({ text = defaultBio }) {
  const targetRef = useRef(null);

  // Track progress strictly from when container enters until it unpins
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Balanced translateY: scrolls upward smoothly and terminates at 0px without extra blank delay
  const yMotionValue = useTransform(scrollYProgress, [0, 1], [380, -180]);
  const transform = useMotionTemplate`rotateX(30deg) translateY(${yMotionValue}px) translateZ(10px)`;

  return (
    <div
      ref={targetRef}
      className="relative z-0 h-[140vh] w-full bg-white text-black overflow-hidden select-none"
    >
      {/* Top Scroll Indicator */}
      <div className="sticky top-6 left-1/2 -translate-x-1/2 grid content-start justify-items-center gap-3 text-center text-black pointer-events-none select-none z-10">
        <span className="relative text-[10px] font-mono uppercase tracking-[0.2em] opacity-40 after:absolute after:left-1/2 after:top-full after:h-6 after:w-px after:bg-gradient-to-b after:from-neutral-400 after:to-transparent after:content-['']">
          scroll down to see
        </span>
      </div>

      {/* 3D Perspective Stage */}
      <div
        className="sticky top-0 mx-auto flex h-screen w-full items-center justify-center bg-transparent py-10"
        style={{
          transformStyle: "preserve-3d",
          perspective: "200px",
        }}
      >
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            transform,
          }}
          className="w-full max-w-5xl px-6 text-center text-4xl sm:text-6xl md:text-7xl font-extrabold italic uppercase tracking-tighter text-[#ff5800] select-none leading-[0.92]"
        >
          {text}
        </motion.div>
      </div>
    </div>
  );
}

export default Skiper28;
