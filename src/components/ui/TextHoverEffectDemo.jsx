import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHoverEffectDemo() {
  return (
    <div className="relative w-full max-w-5xl mx-auto h-[24rem] sm:h-[30rem] flex flex-col items-center justify-center bg-white border border-neutral-200/80 rounded-3xl overflow-hidden my-8">
      {/* Subtle background radial tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50/60 via-white to-white pointer-events-none" />

      {/* Main Interactive Hover Text */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <TextHoverEffect text="VISHNU" duration={0.6} />
      </div>

      {/* Apple-style subtle caption */}
      <div className="absolute bottom-6 text-xs font-mono text-neutral-400 tracking-wider lowercase select-none pointer-events-none">
        hover to reveal cursor glow
      </div>
    </div>
  );
}

export default TextHoverEffectDemo;
