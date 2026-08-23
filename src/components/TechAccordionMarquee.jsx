import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const sectionData = [
  {
    id: "languages",
    title: "LANGUAGES",
    items: [
      { name: "JAVASCRIPT", icon: "⚡" },
      { name: "TYPESCRIPT", icon: "🔷" },
      { name: "PYTHON", icon: "🐍" },
      { name: "C++", icon: "⚙️" },
      { name: "HTML5", icon: "🌐" },
      { name: "CSS3", icon: "🎨" },
      { name: "SQL", icon: "🗄️" },
    ],
  },
  {
    id: "technologies",
    title: "TECHNOLOGIES",
    items: [
      { name: "REACT.JS", icon: "⚛️" },
      { name: "NEXT.JS", icon: "▲" },
      { name: "NODE.JS", icon: "🟢" },
      { name: "EXPRESS.JS", icon: "🚂" },
      { name: "MONGODB", icon: "🍃" },
      { name: "TAILWIND CSS", icon: "🌊" },
      { name: "GSAP", icon: "🚀" },
      { name: "THREE.JS", icon: "🧊" },
    ],
  },
  {
    id: "tools",
    title: "DEV WORKFLOW & TOOLS",
    items: [
      { name: "VS CODE", icon: "💻" },
      { name: "GIT & GITHUB", icon: "🐙" },
      { name: "POSTMAN", icon: "🚀" },
      { name: "DOCKER", icon: "🐳" },
      { name: "FIGMA", icon: "🎯" },
      { name: "VERCEL", icon: "▲" },
    ],
  },
];

function AccordionRow({ section, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="border-b border-neutral-200/80 transition-colors"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Category Header Row */}
      <div className="w-full px-6 py-4 bg-white flex items-center justify-between cursor-pointer group select-none">
        <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-neutral-800 group-hover:text-neutral-950 transition-colors">
          {section.title}
        </span>
        <ArrowUpRight
          className={`w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-transform duration-300 ${
            isHovered ? "rotate-45 text-neutral-900 scale-110" : ""
          }`}
        />
      </div>

      {/* Dropdown Marquee Strip (Smooth height collapse/expand) */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          isHovered
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 pointer-events-none"
        }`}
      >
        <div className="overflow-hidden bg-[#0a0a0a] text-neutral-200 border-t border-neutral-800">
          <div className="relative py-3 flex items-center overflow-hidden">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10" />

            {/* Scrolling Ticker Track */}
            <div
              className={`flex w-fit ${
                index % 2 === 1 ? "animate-marquee-reverse" : "animate-marquee"
              } items-center gap-8 whitespace-nowrap text-xs font-mono uppercase tracking-wider`}
            >
              {[...section.items, ...section.items, ...section.items].map(
                (item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-neutral-900/80 border border-neutral-800 hover:border-neutral-600 transition-colors"
                  >
                    <span className="text-sm">{item.icon}</span>
                    <span className="font-semibold text-neutral-300">
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

export default function TechAccordionShowcase() {
  return (
    <section className="w-full max-w-5xl mx-auto my-12 py-6">
      {/* Swiss Headline Quote */}
      <div className="p-8 sm:p-12 border-b border-neutral-200/80 bg-neutral-50/50">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight leading-tight uppercase font-sans max-w-3xl">
          “The function of good software is to make the complex appear to be simple.”
        </h2>
        <span className="block mt-4 text-xs font-mono text-neutral-400 uppercase tracking-wider">
          — Grady Booch
        </span>
      </div>

      {/* Accordion Rows */}
      <div className="flex flex-col divide-y divide-neutral-200/80">
        {sectionData.map((section, idx) => (
          <AccordionRow key={section.id} section={section} index={idx} />
        ))}
      </div>
    </section>
  );
}
