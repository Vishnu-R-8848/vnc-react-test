import React from "react";
import { ArrowUpRight } from "lucide-react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export default function Hero() {
  return (
    <main className="w-full max-w-5xl mx-auto my-8 py-8 sm:py-14 flex flex-col items-center text-center">
      {/* Subtitle Pill */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200/60 mb-6 font-mono text-[11px] text-neutral-600 uppercase tracking-widest">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse"></span>
        <span>Full Stack Engineer</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111827] leading-[1.15] max-w-3xl">
        Hi, I'm
        <span className="relative inline-flex items-center mx-2 px-3 bg-blue-100/90 rounded-none h-[0.95em] align-baseline">
          <span className="absolute -left-[5px] top-0 bottom-0 w-[2px] bg-neutral-300 flex items-start justify-center">
            <span className="w-3 h-3 rounded-full bg-neutral-300 -translate-y-3 shrink-0"></span>
          </span>

          <svg
            className="h-full w-auto overflow-visible select-none"
            viewBox="0 0 250 70"
            fill="none"
          >
            <text
              y="50"
              fontFamily="'Caveat', cursive"
              fontSize="62"
              fontWeight="700"
              stroke="#9CA3AF"
              strokeWidth="2"
              fill="#9CA3AF"
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

          <span className="absolute -right-[5px] top-0 bottom-0 w-[2px] bg-neutral-300 flex items-end justify-center">
            <span className="w-3 h-3 rounded-full bg-neutral-300 translate-y-3 shrink-0"></span>
          </span>
        </span>
        <br />
        Naik Chouhan
      </h1>

      <p className="mt-6 text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl mx-auto leading-relaxed">
        Building scalable full-stack web platforms and interactive user
        interfaces with clean system design.
      </p>

      {/* CTA Section */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        {/* Primary Animated Border CTA */}
        <HoverBorderGradient
          containerClassName="rounded-full"
          as="a"
          href="mailto:contact@example.com"
          className="bg-[#111827] text-white flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wide"
        >
          <span>Let's Connect</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-neutral-300" />
        </HoverBorderGradient>

        {/* Secondary Standard Pill Button */}
        <a
          href="/projects"
          className="px-6 py-3 rounded-full bg-white text-neutral-800 text-xs font-semibold tracking-wide border border-neutral-200/90 hover:bg-neutral-50 hover:border-neutral-300 transition-colors"
        >
          Explore Projects
        </a>
      </div>
    </main>
  );
}
