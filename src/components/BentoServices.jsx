import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Server,
  Sparkles,
  ArrowUpRight,
  Cpu,
  Zap,
} from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

export default function BentoServices() {
  const services = [
    {
      id: "01",
      title: "Design Engineering",
      subtitle: "Fluid 60 FPS interfaces & kinetic interactions",
      icon: Sparkles,
      colSpan: "col-span-1 md:col-span-2",
      gradient: "from-neutral-700/20 via-transparent to-transparent",
      accent: "text-neutral-200 group-hover:text-white",
      pills: ["Shery.js", "Anime.js", "GSAP ScrollTrigger", "Framer Motion", "Tailwind CSS"],
      badge: "Core Focus",
    },
    {
      id: "02",
      title: "Frontend Engineering",
      subtitle: "Deterministic client platforms & Next.js systems",
      icon: Layers,
      colSpan: "col-span-1 md:col-span-1",
      gradient: "from-neutral-700/20 via-transparent to-transparent",
      accent: "text-neutral-300 group-hover:text-white",
      pills: ["React 19", "Next.js App Router", "TypeScript", "Vite"],
    },
    {
      id: "03",
      title: "Backend & Systems",
      subtitle: "Scalable REST gateways, microservices & caching",
      icon: Server,
      colSpan: "col-span-1 md:col-span-1",
      gradient: "from-neutral-700/20 via-transparent to-transparent",
      accent: "text-neutral-300 group-hover:text-white",
      pills: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT Auth"],
    },
    {
      id: "04",
      title: "Full Stack & IoT Systems",
      subtitle: "End-to-end architectures & real-time telemetry",
      icon: Cpu,
      colSpan: "col-span-1 md:col-span-2",
      gradient: "from-neutral-700/20 via-transparent to-transparent",
      accent: "text-neutral-200 group-hover:text-white",
      pills: ["MERN Architecture", "WebSockets", "ESP32 / ESP8266", "C++", "State Machines"],
      badge: "Full Pipeline",
    },
  ];

  return (
    <section id="services" className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24 select-none font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-500 font-bold block mb-2">
            // CAPABILITIES & SERVICES
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
            What I Deliver
          </h2>
        </div>
        <p className="text-xs font-mono text-neutral-400 max-w-xs">
          Engineered modules from interactive kinetic frontends to production REST backends.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
        {services.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              custom={idx}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`group relative rounded-3xl bg-[#0e0e11] border border-neutral-800/80 p-6 sm:p-8 flex flex-col justify-between overflow-hidden shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition-all duration-300 hover:border-neutral-700 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${item.colSpan}`}
            >
              {/* Subtle Atmospheric Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              {/* Top Row: Tag & Icon */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className={`w-5 h-5 ${item.accent} transition-colors`} />
                  </div>
                  <span className="font-mono text-[11px] font-bold text-neutral-500 tracking-wider">
                    {item.id}
                  </span>
                </div>

                {item.badge ? (
                  <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] text-neutral-300 font-medium">
                    {item.badge}
                  </span>
                ) : (
                  <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                )}
              </div>

              {/* Center Content */}
              <div className="relative z-10 my-6 sm:my-8 space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-md">
                  {item.subtitle}
                </p>
              </div>

              {/* Floating Pill Tags */}
              <div className="relative z-10 flex flex-wrap gap-1.5 pt-2">
                {item.pills.map((pill) => (
                  <span
                    key={pill}
                    className="px-2.5 py-1 rounded-xl bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono text-neutral-300 group-hover:border-neutral-700 transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA Row */}
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        className="mt-4 sm:mt-5 rounded-3xl bg-[#0e0e11] border border-neutral-800/80 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-white animate-pulse" />
            <h4 className="text-base sm:text-lg font-bold text-white">
              Ready to construct high-performance digital products?
            </h4>
          </div>
          <p className="text-xs font-mono text-neutral-400">
            Available for full-stack engineering, animation rigs, and frontend consulting.
          </p>
        </div>

        <a
          href="mailto:vishnu6364748848@gmail.com"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-black text-xs font-bold hover:bg-neutral-200 active:scale-95 transition-all self-start sm:self-auto shrink-0 cursor-pointer shadow-lg"
        >
          <span>Initiate collaboration</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </motion.div>
    </section>
  );
}
