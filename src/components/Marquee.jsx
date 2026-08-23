import React from "react";

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "API" },
  { name: "MongoDB", category: "Database" },
  { name: "TypeScript", category: "Language" },
  { name: "GSAP", category: "Animation" },
  { name: "Framer Motion", category: "Motion" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Docker", category: "DevOps" },
  { name: "REST APIs", category: "Architecture" },
];

export default function Marquee() {
  return (
    <section className="relative w-full max-w-5xl mx-auto my-12 overflow-hidden py-4">
      {/* Edge Gradient Fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

      {/* Ticker Track */}
      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] items-center gap-3">
        {/* Render list twice for seamless infinite looping */}
        {[...techStack, ...techStack].map((item, idx) => (
          <div
            key={`${item.name}-${idx}`}
            className="flex items-center gap-2.5 px-4 py-2 rounded-full border border-neutral-200/80 bg-white whitespace-nowrap select-none hover:border-neutral-400 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-300"></span>
            <span className="text-xs font-semibold text-neutral-800 tracking-tight">
              {item.name}
            </span>
            <span className="text-[10px] font-mono text-neutral-400 uppercase">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
