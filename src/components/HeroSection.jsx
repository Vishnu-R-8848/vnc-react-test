import React from "react";

export default function HeroSection() {
  return (
    <div className="w-full bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-neutral-200/80 shadow-[0_10px_35px_rgba(0,0,0,0.03)] p-6 sm:p-12 md:p-14 flex flex-col items-center text-center antialiased">
      {/* Status Eyebrow Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/60 mb-8 font-mono text-[11px] text-neutral-600 uppercase tracking-widest select-none">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
        <span>Full Stack Engineer</span>
      </div>

      {/* Display Typography */}
      <div className="space-y-2 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-neutral-900 leading-[1.08]">
          Hi, I'm{" "}
          <span className="relative inline-block bg-[#dbeafe] text-neutral-800 px-3 py-0.5 rounded-md font-normal select-none">
            {/* Corner Resize Handles */}
            <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-neutral-300 rounded-xs" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-neutral-300 rounded-xs" />
            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-neutral-300 rounded-xs" />
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-neutral-300 rounded-xs" />
            <span className="font-serif italic text-neutral-700">Vishnu</span>
          </span>
          <br />
          Naik Chouhan
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-sm sm:text-base text-neutral-600 leading-relaxed font-sans">
          I design, build, and scale production-ready web applications using the MERN stack and Next.js, focusing on clean architecture and high-performance backend systems.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-neutral-900 text-white font-mono text-xs font-semibold hover:bg-black transition-all shadow-xs"
        >
          Let's Connect
        </a>

        <a
          href="#capabilities"
          className="px-6 py-3 rounded-full bg-neutral-100 text-neutral-800 font-mono text-xs font-semibold hover:bg-neutral-200/80 transition-all border border-neutral-200/60"
        >
          Explore Projects
        </a>
      </div>
    </div>
  );
}
