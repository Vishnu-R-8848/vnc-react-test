import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Grid } from "@/components/ui/grid-pattern-features";
import { cn } from "@/lib/utils";

const IconArrowUpRight = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const IconGithub = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export const HorizontalProjects = ({ projects = [] }) => {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(600);

  const calculateScrollRange = () => {
    if (trackRef.current) {
      const track = trackRef.current;
      const windowWidth = window.innerWidth;
      const trackWidth = track.scrollWidth;
      const extraOffset = windowWidth < 640 ? 40 : 120;
      const totalDistance = Math.max(trackWidth - windowWidth + extraOffset, 350);
      setScrollRange(totalDistance);
    }
  };

  useEffect(() => {
    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);
    
    // Recalculate after DOM/fonts render
    const t1 = setTimeout(calculateScrollRange, 100);
    const t2 = setTimeout(calculateScrollRange, 400);

    return () => {
      window.removeEventListener("resize", calculateScrollRange);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [projects]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    damping: 24,
    stiffness: 140,
    mass: 0.15,
  });

  const x = useTransform(smoothProgress, [0, 1], [300, -scrollRange]);
  const progressBarWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[240vh] sm:h-[260vh] w-full bg-[#050507]"
    >
      {/* Sticky Pinned Viewport Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-6 sm:py-8 overflow-hidden select-none">
        
        {/* Section Header */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex flex-col gap-2 z-20 shrink-0">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
              Featured Projects
            </h2>
            <span className="font-mono text-xs text-neutral-500">
              {projects.length} Projects
            </span>
          </div>

          {/* Dynamic Scroll Progress Bar */}
          <div className="w-full h-0.5 bg-neutral-900 rounded-full overflow-hidden mt-1">
            <motion.div
              style={{ width: progressBarWidth }}
              className="h-full bg-gradient-to-r from-neutral-600 via-neutral-300 to-white"
            />
          </div>
        </div>

        {/* Horizontal Track */}
        <div className="w-full overflow-hidden my-auto py-2">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-6 sm:gap-8 px-6 sm:px-16 w-max items-stretch"
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "w-[300px] h-[460px] flex-shrink-0 flex flex-col justify-between p-6 relative group/feature border border-neutral-800/90 rounded-3xl bg-gradient-to-b from-neutral-900/95 via-neutral-900/80 to-neutral-950 overflow-hidden transition-all duration-300 shadow-2xl hover:border-neutral-700 hover:shadow-[0_25px_70px_rgba(0,0,0,0.95)]"
                )}
              >
                {/* SVG Grid Pattern Boxes Background */}
                <Grid size={24} />

                {/* Ambient Radial Hover Illumination */}
                <div className="opacity-0 group-hover/feature:opacity-100 transition-opacity duration-500 absolute inset-0 bg-radial from-neutral-800/40 via-transparent to-transparent pointer-events-none" />

                {/* Top Row: Icon + Number Badge */}
                <div className="flex items-center justify-between relative z-20 mb-4">
                  <div className="p-3.5 rounded-2xl bg-neutral-950/90 border border-neutral-800/90 text-neutral-300 group-hover/feature:text-white group-hover/feature:border-neutral-700 transition-colors shadow-lg">
                    {project.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-950/80 border border-neutral-800/80 text-neutral-400">
                      0{index + 1}
                    </span>
                    <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-900/60 border border-neutral-800/60 text-neutral-500">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative z-20 space-y-3 flex-1 flex flex-col justify-start">
                  <div className="relative">
                    <div className="absolute -left-6 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-neutral-300 transition-all duration-200 origin-center" />
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover/feature:translate-x-1 transition-transform duration-200">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="pt-1 flex flex-wrap gap-1.5">
                    {project.tech.split("•").map((item) => (
                      <span
                        key={item}
                        className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-neutral-950/80 border border-neutral-800 text-neutral-400"
                      >
                        {item.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer: Year & Action Buttons */}
                <div className="relative z-20 mt-5 pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-2">
                  <span className="font-mono text-xs text-neutral-500">
                    {project.year}
                  </span>

                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3.5 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-md active:scale-95 group/link cursor-pointer"
                      >
                        <span>Visit Live</span>
                        <IconArrowUpRight className="w-3.5 h-3.5 text-black group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-xs font-medium active:scale-95 cursor-pointer"
                      >
                        <IconGithub className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Navigation Hint */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex items-center justify-between text-xs font-mono text-neutral-500 z-20">
          <span>Scroll to explore projects</span>
          <span>{projects.length} Works</span>
        </div>

      </div>
    </section>
  );
};

export default HorizontalProjects;
