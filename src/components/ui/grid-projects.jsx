import React from "react";
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

export const GridProjects = ({ projects = [] }) => {
  return (
    <section className="max-w-6xl w-full mx-auto px-6 sm:px-8 py-16">
      {/* Section Header */}
      <div className="mb-10 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
            Featured Projects
          </h2>
          <p className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">
            Selected Works & Systems
          </p>
        </div>
        <span className="inline-block px-3 py-1 rounded-full text-xs font-mono bg-neutral-900 border border-neutral-800 text-neutral-400">
          4 Core Builds
        </span>
      </div>

      {/* 2x2 Grid of Wide Grid-Pattern Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={cn(
              "relative bg-gradient-to-b from-neutral-900/90 via-neutral-900/70 to-neutral-950 p-7 sm:p-9 rounded-3xl overflow-hidden border border-neutral-800/90 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between group shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.8)] min-h-[19rem]"
            )}
          >
            {/* Grid Pattern Boxes Background with highlight squares */}
            <Grid size={22} />

            {/* Ambient Radial Hover Illumination */}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 bg-radial from-neutral-800/40 via-transparent to-transparent pointer-events-none" />

            {/* Top Row: Icon + Number Badge */}
            <div className="flex items-center justify-between relative z-20 mb-6">
              <div className="p-3 rounded-2xl bg-neutral-950/90 border border-neutral-800/90 text-neutral-300 group-hover:text-white group-hover:border-neutral-700 transition-colors shadow-md">
                {project.icon}
              </div>
              <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-full bg-neutral-950/80 border border-neutral-800/80 text-neutral-400">
                0{index + 1}
              </span>
            </div>

            {/* Content Area */}
            <div className="relative z-20 space-y-3 flex-1">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:translate-x-1 transition-transform duration-200">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Footer: Tech Stack & Live Links */}
            <div className="relative z-20 mt-8 pt-5 border-t border-neutral-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="font-mono text-xs text-neutral-500">
                {project.tech}
              </span>

              <div className="flex items-center gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-colors shadow-sm active:scale-95"
                  >
                    <span>Visit Live</span>
                    <IconArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-xs font-medium active:scale-95"
                  >
                    <IconGithub className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GridProjects;
