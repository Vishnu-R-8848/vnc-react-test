import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";

export function SparklesPreview({ text = "Full Stack Engineer" }) {
  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden py-4 select-none">
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white relative z-20 tracking-tight">
        {text}
      </h2>
      <div className="w-[28rem] sm:w-[36rem] md:w-[40rem] h-24 sm:h-32 relative">
        {/* Gradients */}
        <div className="absolute inset-x-12 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-neutral-400 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-12 sm:inset-x-20 top-0 bg-gradient-to-r from-transparent via-neutral-300 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-32 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-neutral-200 to-transparent h-[4px] w-1/4 blur-sm" />
        <div className="absolute inset-x-32 sm:inset-x-60 top-0 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-[#050507] [mask-image:radial-gradient(350px_150px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  );
}

export default SparklesPreview;
