import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";

export const FeaturesSection = ({ features = [], className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto",
        className
      )}
    >
      {features.map((feature, index) => (
        <FeatureCard key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
};

export const FeatureCard = ({
  title,
  description,
  icon,
  index,
  liveUrl,
  githubUrl,
  tech,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-8 sm:py-10 relative group/feature border-neutral-200 dark:border-neutral-800 transition-colors",
        (index === 0 || index === 4) && "lg:border-l border-neutral-200 dark:border-neutral-800",
        index < 4 && "lg:border-b border-neutral-200 dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100/80 dark:from-neutral-800/60 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100/80 dark:from-neutral-800/60 to-transparent pointer-events-none" />
      )}

      {/* Top Icon & Tech Tag */}
      <div className="mb-4 relative z-10 px-6 sm:px-8 flex items-center justify-between text-neutral-600 dark:text-neutral-400">
        <div className="p-2 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 group-hover/feature:bg-blue-50 dark:group-hover/feature:bg-blue-950/50 group-hover/feature:text-blue-600 transition-colors">
          {icon}
        </div>
        {tech && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-400">
            {tech}
          </span>
        )}
      </div>

      {/* Title with Blue Accent Bar */}
      <div className="text-base sm:text-lg font-bold mb-2 relative z-10 px-6 sm:px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-1.5 transition duration-200 inline-block text-neutral-900 dark:text-neutral-100">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-xs relative z-10 px-6 sm:px-8 leading-relaxed flex-1">
        {description}
      </p>

      {/* Action Links (Live & GitHub) */}
      {(liveUrl || githubUrl) && (
        <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800/60 relative z-10 px-6 sm:px-8 flex items-center gap-3 font-mono text-[11px]">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-neutral-900 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <span>Live Preview</span>
              <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover/feature:text-blue-500" />
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-3 h-3" />
              <span>Source</span>
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default FeaturesSection;
