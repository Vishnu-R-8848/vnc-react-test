import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const sectionData = [
  {
    id: "languages",
    title: "01 // PROGRAMMING LANGUAGES",
    items: [
      { name: "JAVASCRIPT (ESNEXT)", icon: "⚡" },
      { name: "TYPESCRIPT STRICT", icon: "🔷" },
      { name: "C++ (EMBEDDED)", icon: "⚙️" },
      { name: "PYTHON", icon: "🐍" },
      { name: "SQL & POSTGRES", icon: "🗄️" },
      { name: "HTML5 & CSS3", icon: "🌐" },
    ],
  },
  {
    id: "frameworks",
    title: "02 // FRAMEWORKS & RUNTIMES",
    items: [
      { name: "REACT 19", icon: "⚛️" },
      { name: "NEXT.JS (APP ROUTER)", icon: "▲" },
      { name: "NODE.JS", icon: "🟢" },
      { name: "EXPRESS.JS", icon: "🚂" },
      { name: "MONGODB ATLAS", icon: "🍃" },
      { name: "TAILWIND CSS", icon: "🌊" },
      { name: "GSAP MOTION", icon: "🚀" },
      { name: "FRAMER MOTION", icon: "✨" },
    ],
  },
  {
    id: "systems",
    title: "03 // SYSTEMS & TOOLCHAINS",
    items: [
      { name: "ESP32 / ESP8266", icon: "📡" },
      { name: "WEBSOCKETS", icon: "🔌" },
      { name: "GIT & GITHUB", icon: "🐙" },
      { name: "DOCKER", icon: "🐳" },
      { name: "POSTMAN / INSOMNIA", icon: "🚀" },
      { name: "VERCEL / TURBOPACK", icon: "▲" },
    ],
  },
];

function AccordionRow({ section, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border-b border-neutral-200/70 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Header Row */}
      <div className="w-full px-4 sm:px-6 py-4 sm:py-5 bg-transparent flex items-center justify-between cursor-pointer group select-none transition-colors hover:bg-neutral-100/50">
        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-800 group-hover:text-neutral-950 transition-colors">
          {section.title}
        </span>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline font-mono text-[10px] uppercase text-neutral-400 opacity-0 group-hover:opacity-100 transition-opacity">
            [Hover to inspect stack]
          </span>
          <ArrowUpRight
            className={`w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-transform duration-300 ${
              isHovered ? "rotate-45 text-neutral-900 scale-110" : ""
            }`}
          />
        </div>
      </div>

      {/* Dropdown Marquee Strip */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          isHovered
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden bg-[#0d0e12] text-neutral-200 border-t border-neutral-800">
          <div className="relative py-3.5 flex items-center overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0d0e12] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0d0e12] to-transparent z-10" />

            {/* Scrolling Ticker Track */}
            <div
              className={`flex w-fit ${
                index % 2 === 1 ? "animate-marquee-reverse" : "animate-marquee"
              } items-center gap-6 whitespace-nowrap text-xs font-mono uppercase tracking-wider`}
            >
              {[...section.items, ...section.items, ...section.items].map(
                (item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-800 hover:border-neutral-600 transition-colors shadow-2xs"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-semibold text-neutral-200">
                      {item.name}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TechAccordionMarquee() {
  return (
    <div className="w-full max-w-5xl mx-auto my-6 font-sans">
      {/* Swiss Headline Quote */}
      <div className="p-6 sm:p-10 border-b border-neutral-200/70 bg-white/60 rounded-2xl border border-neutral-200/60 mb-6 shadow-2xs">
        <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-400 block mb-3">
          // ARCHITECTURAL PHILOSOPHY
        </span>
        <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight leading-tight uppercase font-sans max-w-3xl">
          “The function of good software is to make the complex appear to be simple.”
        </h3>
        <span className="block mt-3 text-xs font-mono text-neutral-500 uppercase tracking-wider">
          — Grady Booch • Software Engineering Pioneer
        </span>
      </div>

      {/* Accordion Rows */}
      <div className="flex flex-col divide-y divide-neutral-200/70 bg-white rounded-2xl border border-neutral-200/80 overflow-hidden shadow-2xs">
        {sectionData.map((section, idx) => (
          <AccordionRow key={section.id} section={section} index={idx} />
        ))}
      </div>
    </div>
  );
}
