import React from "react";
import { ArrowUpRight, Compass, Sparkles, Terminal } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Hero() {
  return (
    <div className="w-full max-w-5xl mx-auto pt-10 sm:pt-16 pb-12 sm:pb-16 flex flex-col items-center text-center select-none font-sans">
      {/* Top Technical Metadata Chip */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100/90 border border-neutral-200/80 mb-8 font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-widest shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-neutral-700 font-semibold">// 01.00 SYSTEM ARCHITECT</span>
        <span className="text-neutral-300">•</span>
        <span>BANGALORE, IN [UTC+5:30]</span>
      </div>

      {/* Main Architectural Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-900 leading-[1.12] max-w-4xl">
        <span>Designing software with</span>
        <br className="hidden sm:inline" />
        <span className="mx-2 sm:mx-3"></span>
        {/* Precision Designer Selection Bounding Box */}
        <span className="relative inline-flex items-center px-3 sm:px-4 py-0.5 bg-blue-50/70 border border-blue-400/90 rounded-none h-[1em] align-baseline my-1 group cursor-crosshair">
          {/* 4 Corner Control Squares */}
          <span className="absolute -top-1 -left-1 w-2 h-2 bg-white border border-blue-500 rounded-none shadow-2xs pointer-events-none" />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-white border border-blue-500 rounded-none shadow-2xs pointer-events-none" />
          <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-white border border-blue-500 rounded-none shadow-2xs pointer-events-none" />
          <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-white border border-blue-500 rounded-none shadow-2xs pointer-events-none" />

          {/* Designer Measurement Chip */}
          <span className="absolute -top-5.5 left-0 font-mono text-[9px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/90 px-1.5 py-0.5 rounded-xs border border-blue-300 pointer-events-none">
            Vishnu [240×54]
          </span>

          {/* Animated SVG Signature */}
          <svg
            className="h-full w-auto overflow-visible select-none"
            viewBox="0 0 250 70"
            fill="none"
          >
            <text
              y="52"
              fontFamily="'Caveat', cursive"
              fontSize="62"
              fontWeight="700"
              stroke="#2563EB"
              strokeWidth="2"
              fill="#1D4ED8"
            >
              <tspan x="6" className="animated-letter letter-v">
                V
              </tspan>
              <tspan x="42" className="animated-letter letter-i">
                i
              </tspan>
              <tspan x="64" className="animated-letter letter-s">
                s
              </tspan>
              <tspan x="98" className="animated-letter letter-h">
                h
              </tspan>
              <tspan x="140" className="animated-letter letter-n">
                n
              </tspan>
              <tspan x="180" className="animated-letter letter-u">
                u
              </tspan>
            </text>
          </svg>
        </span>
        <span className="ml-1 sm:ml-2">Naik Chouhan</span>
      </h1>

      {/* 2-Line Engineering Manifesto */}
      <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed font-sans font-normal">
        Architecting resilient full-stack systems and kinetic web interfaces with sub-millisecond precision — bridging robust backend logic and fluid visual craft.
      </p>

      {/* Dual Pill Action Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4">
        {/* Primary Animated Border CTA */}
        <HoverBorderGradient
          containerClassName="rounded-full shadow-xs"
          as="a"
          href="#capabilities"
          className="bg-neutral-900 text-white flex items-center gap-2 px-6 py-2.5 text-xs font-mono font-semibold uppercase tracking-wider hover:bg-black transition-colors"
        >
          <span>Explore Capabilities</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
        </HoverBorderGradient>

        {/* Secondary Standard Pill Button */}
        <a
          href="#about"
          className="px-6 py-2.5 rounded-full bg-white text-neutral-800 text-xs font-mono font-semibold uppercase tracking-wider border border-neutral-200/90 hover:bg-neutral-100 hover:border-neutral-300 transition-all shadow-2xs flex items-center gap-2"
        >
          <span>Bio & Life Collage</span>
          <Compass className="w-3.5 h-3.5 text-neutral-500" />
        </a>
      </div>

      {/* Technical Index Chipset Grid */}
      <div className="mt-12 pt-8 border-t border-neutral-200/60 w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            [ROLE]
          </span>
          <span className="text-xs font-semibold text-neutral-900 mt-0.5">
            Full Stack Engineer
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            [CORE STACK]
          </span>
          <span className="text-xs font-semibold text-neutral-900 mt-0.5">
            MERN • Next.js • TypeScript
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            [MOTION & CRAFT]
          </span>
          <span className="text-xs font-semibold text-neutral-900 mt-0.5">
            GSAP • Framer Motion • 60 FPS
          </span>
        </div>

        <div className="flex flex-col">
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400">
            [HARDWARE IOT]
          </span>
          <span className="text-xs font-semibold text-neutral-900 mt-0.5">
            ESP32 • WebSockets • C++
          </span>
        </div>
      </div>
    </div>
  );
}
