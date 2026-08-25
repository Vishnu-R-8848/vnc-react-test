import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Loader Three: Orbital 3-Node Gyroscopic Spinner
export const LoaderThree = ({ className, text = "Loading" }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-6 select-none",
        className
      )}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center [perspective:800px]">
        {/* Orbital Track 1 (X-Axis Orbit) */}
        <motion.div
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180],
            rotateZ: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.2,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-white border-b-neutral-500 [transform-style:preserve-3d] shadow-[0_0_12px_rgba(255,255,255,0.4)]"
        />

        {/* Orbital Track 2 (Y-Axis Counter-Orbit) */}
        <motion.div
          animate={{
            rotateX: [360, 0],
            rotateY: [0, 360],
            rotateZ: [180, -180],
          }}
          transition={{
            repeat: Infinity,
            duration: 2.6,
            ease: "linear",
          }}
          className="absolute inset-1 rounded-full border-2 border-transparent border-r-white border-l-neutral-600 [transform-style:preserve-3d]"
        />

        {/* Orbital Track 3 (Z-Axis Angled Orbit) */}
        <motion.div
          animate={{
            rotateX: [180, -180],
            rotateY: [360, 0],
            rotateZ: [0, 360],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.9,
            ease: "linear",
          }}
          className="absolute inset-2 rounded-full border-2 border-transparent border-t-neutral-400 border-r-white/80 [transform-style:preserve-3d]"
        />

        {/* Central Glowing Fusion Core */}
        <motion.div
          animate={{
            scale: [0.8, 1.25, 0.8],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.4,
            ease: "easeInOut",
          }}
          className="w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,1)]"
        />
      </div>

      {/* Stylized Typography */}
      {text && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-1.5"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            {text}
          </span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-neutral-400"
          />
        </motion.div>
      )}
    </div>
  );
};

// Loader Four: Concentric Counter-Rotating Ring Spinner
export const LoaderFour = ({ className, text = "Loading Experience" }) => {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-6 select-none",
        className
      )}
    >
      <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
        {/* Outer Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 2.4,
            ease: "linear",
          }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-white border-r-white/40 shadow-[0_0_15px_rgba(255,255,255,0.3)]"
        />

        {/* Middle Counter-Rotating Ring */}
        <motion.div
          animate={{ rotate: -360 }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "linear",
          }}
          className="absolute inset-2 rounded-full border-2 border-transparent border-b-neutral-400 border-l-neutral-400/30"
        />

        {/* Inner Pulsing Ring */}
        <motion.div
          animate={{
            scale: [0.85, 1.15, 0.85],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
          className="absolute inset-4 rounded-full border border-neutral-600 bg-neutral-900/80"
        />

        {/* Center Glowing Core */}
        <motion.div
          animate={{
            scale: [0.7, 1.2, 0.7],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
          className="w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)]"
        />
      </div>

      {/* Loading Label */}
      {text && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">
            {text}
          </span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-neutral-400"
          />
        </motion.div>
      )}
    </div>
  );
};

export default LoaderThree;
