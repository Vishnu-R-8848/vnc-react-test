import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  // Slide horizontally across all cards with generous travel
  const x = useTransform(scrollYProgress, [0, 1], ["2%", "-72%"]);
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} className="relative h-[320vh] w-full bg-[#050507]">
      {/* Sticky Pinned Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between py-10 overflow-hidden select-none">
        
        {/* Section Header with Live Scroll Progress Bar */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex flex-col gap-2 z-20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                Projects Showcase
              </h2>
              <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">
                Pinned Scroll
              </span>
            </div>
            <span className="font-mono text-xs text-neutral-500">
              {projects.length} Production Builds
            </span>
          </div>

          {/* Dynamic Scroll Progress Track */}
          <div className="w-full h-0.5 bg-neutral-900 rounded-full overflow-hidden mt-1">
            <motion.div
              style={{ width: progressBarWidth }}
              className="h-full bg-gradient-to-r from-neutral-600 via-neutral-300 to-white"
            />
          </div>
        </div>

        {/* Horizontal Card Track Sliding from Side */}
        <div className="w-full overflow-hidden my-auto py-4">
          <motion.div style={{ x }} className="flex gap-6 sm:gap-8 px-6 sm:px-12">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={cn(
                  "w-[20rem] sm:w-[24rem] md:w-[26rem] flex-shrink-0 flex flex-col py-8 relative group/feature border border-neutral-800/90 rounded-2xl bg-neutral-950/80 backdrop-blur-md overflow-hidden transition-all duration-300 shadow-2xl hover:border-neutral-700"
                )}
              >
                {/* Ambient Top/Bottom Gradient Illumination */}
                <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800/50 via-transparent to-neutral-900/60 pointer-events-none" />

                {/* Top Badge & Icon */}
                <div className="mb-4 relative z-10 px-8 flex items-center justify-between text-neutral-400">
                  <div className="p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800">
                    {project.icon}
                  </div>
                  <span className="font-mono text-[11px] text-neutral-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Title with Expanding Monochrome Left Indicator Bar */}
                <div className="text-xl font-bold mb-2 relative z-10 px-8">
                  <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-neutral-300 transition-all duration-200 origin-center" />
                  <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
                    {project.title}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-400 relative z-10 px-8 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 pt-3 relative z-10 px-8">
                  <span className="inline-block font-mono text-[11px] text-neutral-500 truncate max-w-full">
                    {project.tech}
                  </span>
                </div>

                {/* Action Links */}
                <div className="mt-4 pt-4 border-t border-neutral-800/80 relative z-10 px-8 flex items-center justify-between text-xs font-mono">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-semibold text-neutral-200 hover:text-white transition-colors group/link"
                    >
                      <span>Visit Live</span>
                      <IconArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-neutral-500">Internal</span>
                  )}

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-neutral-400 hover:text-white transition-colors"
                    >
                      <IconGithub className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Scroll Navigation Hint */}
        <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 flex items-center justify-between text-xs font-mono text-neutral-500 z-20">
          <span>Scroll to explore projects</span>
          <span>Shift / Trackpad Scroll enabled</span>
        </div>

      </div>
    </section>
  );
};

export default HorizontalProjects;
