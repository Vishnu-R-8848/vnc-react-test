import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 14 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.08,
    },
  }),
};

const projects = [
  {
    title: "Smart Job Assistant",
    description:
      "Production-ready MERN platform for job application tracking and automated workflow analytics.",
    tech: "React • Node.js • Express • MongoDB",
    link: "https://github.com/Vishnu-R-8848",
  },
  {
    title: "Session Task Manager",
    description:
      "High-performance client-side task and productivity suite with persistent state management.",
    tech: "React • Tailwind CSS • LocalStorage",
    link: "https://github.com/Vishnu-R-8848",
  },
  {
    title: "Kinetic Motion Lab",
    description:
      "Curated collection of 60 FPS spring physics, cursor followers, and interactive UI prototypes.",
    tech: "GSAP • Framer Motion • Next.js",
    link: "https://github.com/Vishnu-R-8848",
  },
  {
    title: "Embedded IoT Monitor",
    description:
      "Low-latency telemetry and real-time exam room environment tracking system.",
    tech: "ESP32 • WebSockets • C++",
    link: "https://github.com/Vishnu-R-8848",
  },
];

export default function App() {
  return (
    <div className="min-h-screen w-full bg-white text-[#111111] antialiased selection:bg-neutral-900 selection:text-white font-[-apple-system,BlinkMacSystemFont,'Helvetica_Neue',Helvetica,Arial,sans-serif]">
      <main className="max-w-[600px] w-full mx-auto px-6 py-20 sm:py-28 space-y-16 sm:space-y-20">
        {/* 1. HERO INTRO */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={0}
          className="space-y-5"
        >
          <div className="w-12 h-12 rounded-full overflow-hidden border border-neutral-200 bg-neutral-100 flex items-center justify-center">
            <img
              src="/hero.png"
              alt="Vishnu Naik Chouhan"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              Hi, I'm Vishnu Naik Chouhan.
            </h1>
            <p className="text-base text-neutral-600 leading-relaxed">
              Full-stack engineer and interface designer crafting
              production-ready web platforms with Next.js, Node.js, and fluid
              motion systems.
            </p>
          </div>

          <div className="pt-1">
            <a
              href="mailto:vishnu6364748848@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-medium hover:bg-black transition-colors"
            >
              <span>Email me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.section>

        {/* 2. ABOUT & TECH STACK */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={1}
          className="space-y-4"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            About
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
            I specialize in bridging high-performance backend architecture with
            refined, responsive user interfaces. My work focuses on scalable
            APIs, robust data models, and deterministic state transitions.
          </p>

          <div className="pt-3 space-y-2 text-xs sm:text-sm">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="font-medium text-neutral-900 min-w-[90px]">
                Frontend
              </span>
              <span className="text-neutral-500">
                React 19, Next.js, TypeScript, Tailwind CSS, Framer Motion
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="font-medium text-neutral-900 min-w-[90px]">
                Backend
              </span>
              <span className="text-neutral-500">
                Node.js, Express, MongoDB, REST APIs, WebSockets
              </span>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3">
              <span className="font-medium text-neutral-900 min-w-[90px]">
                Hardware
              </span>
              <span className="text-neutral-500">
                ESP32, ESP8266 Microcontrollers, C++
              </span>
            </div>
          </div>
        </motion.section>

        {/* 3. SELECTED WORK */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={2}
          className="space-y-6"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Selected Work
          </h2>

          <div className="divide-y divide-neutral-100">
            {projects.map((project) => (
              <a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group block py-4 first:pt-0 last:pb-0 transition-all"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm sm:text-base font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <p className="text-xs sm:text-sm text-neutral-500 mt-1 leading-relaxed">
                  {project.description}
                </p>
                <span className="inline-block text-[11px] font-mono text-neutral-400 mt-2">
                  {project.tech}
                </span>
              </a>
            ))}
          </div>
        </motion.section>

        {/* 4. CONTACT & NETWORK */}
        <motion.section
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={3}
          className="space-y-4"
        >
          <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Connect
          </h2>
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm">
            <a
              href="mailto:vishnu6364748848@gmail.com"
              className="text-neutral-900 font-medium hover:underline underline-offset-4"
            >
              Email
            </a>
            <span className="text-neutral-300">•</span>
            <a
              href="https://github.com/Vishnu-R-8848"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-900 font-medium hover:underline underline-offset-4"
            >
              GitHub
            </a>
            <span className="text-neutral-300">•</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-900 font-medium hover:underline underline-offset-4"
            >
              LinkedIn
            </a>
            <span className="text-neutral-300">•</span>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="text-neutral-900 font-medium hover:underline underline-offset-4"
            >
              Twitter / X
            </a>
          </div>
        </motion.section>

        {/* FOOTER */}
        <footer className="pt-8 border-t border-neutral-100 text-xs text-neutral-400 select-none">
          <p>© 2026 Vishnu Naik Chouhan. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
