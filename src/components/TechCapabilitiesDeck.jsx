import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Sparkles, Cpu, Server, ArrowUpRight } from "lucide-react";

const defaultSpring = {
  type: "spring",
  visualDuration: 0.6,
  bounce: 0.25,
};

export const TechCapabilitiesDeck = ({
  spring = defaultSpring,
  activeScale = 1.15,
  cardSpacing = 200,
} = {}) => {
  const cards = [
    {
      title: "MERN Architecture",
      description:
        "Building scalable systems with MongoDB clusters, Express REST gateways, React 19, and Node runtime environments.",
      skills: ["MongoDB", "Express.js", "React 19", "Node.js"],
      icon: Server,
      tag: "CORE_BACKEND",
      skeleton: (
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-emerald-500/25 to-emerald-600/10 border border-emerald-500/30 p-4 flex flex-col justify-between shrink-0">
          <div className="flex items-center justify-between">
            <Server className="w-6 h-6 text-emerald-700" />
            <ArrowUpRight className="w-4 h-4 opacity-60 text-emerald-700" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest font-semibold text-emerald-800">
            01 // CORE_BACKEND
          </span>
        </div>
      ),
      className:
        "bg-[#f0fdf4] border border-emerald-200/90 text-emerald-950 shadow-[0_12px_40px_rgba(16,185,129,0.08)]",
      descClass: "text-emerald-800/90",
      pillClass: "bg-emerald-100/90 text-emerald-900 border-emerald-200",
      config: {
        y: -20,
        rotate: -12,
        zIndex: 2,
      },
    },
    {
      title: "Kinetic UI & Motion",
      description:
        "Crafting 60 FPS interactive experiences using GSAP ScrollTrigger timelines, Framer Motion layouts, and Tailwind CSS.",
      skills: ["GSAP Core", "ScrollTrigger", "Framer Motion", "Tailwind CSS"],
      icon: Sparkles,
      tag: "AESTHETICS",
      skeleton: (
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-[#FF5500]/25 to-[#FF5500]/10 border border-[#FF5500]/30 p-4 flex flex-col justify-between shrink-0">
          <div className="flex items-center justify-between">
            <Sparkles className="w-6 h-6 text-[#FF5500]" />
            <ArrowUpRight className="w-4 h-4 opacity-60 text-[#FF5500]" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest font-semibold text-orange-900">
            02 // AESTHETICS
          </span>
        </div>
      ),
      className:
        "bg-[#fff7f2] border border-orange-200/90 text-orange-950 shadow-[0_12px_40px_rgba(255,85,0,0.08)]",
      descClass: "text-orange-900/80",
      pillClass: "bg-orange-100/90 text-orange-900 border-orange-200",
      config: {
        y: 20,
        rotate: -4,
        zIndex: 3,
      },
    },
    {
      title: "Next.js & Type-Safe Core",
      description:
        "Developing deterministic full-stack applications with Next.js App Router, TypeScript contracts, and edge runtime APIs.",
      skills: ["Next.js", "TypeScript", "Vite", "Turbopack"],
      icon: Code2,
      tag: "PLATFORMS",
      skeleton: (
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-blue-500/25 to-blue-600/10 border border-blue-500/30 p-4 flex flex-col justify-between shrink-0">
          <div className="flex items-center justify-between">
            <Code2 className="w-6 h-6 text-blue-700" />
            <ArrowUpRight className="w-4 h-4 opacity-60 text-blue-700" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest font-semibold text-blue-800">
            03 // PLATFORMS
          </span>
        </div>
      ),
      className:
        "bg-[#eff6ff] border border-blue-200/90 text-blue-950 shadow-[0_12px_40px_rgba(37,99,235,0.08)]",
      descClass: "text-blue-800/90",
      pillClass: "bg-blue-100/90 text-blue-900 border-blue-200",
      config: {
        y: -30,
        rotate: 6,
        zIndex: 4,
      },
    },
    {
      title: "Embedded IoT Systems",
      description:
        "Interfacing low-cost microcontrollers (ESP32/ESP8266) with live sensor feeds, WebSockets, and real-time telemetry dashboards.",
      skills: ["ESP32", "ESP8266", "C++", "WebSockets"],
      icon: Cpu,
      tag: "HARDWARE",
      skeleton: (
        <div className="h-44 w-full rounded-xl bg-gradient-to-br from-purple-500/25 to-purple-600/10 border border-purple-500/30 p-4 flex flex-col justify-between shrink-0">
          <div className="flex items-center justify-between">
            <Cpu className="w-6 h-6 text-purple-700" />
            <ArrowUpRight className="w-4 h-4 opacity-60 text-purple-700" />
          </div>
          <span className="font-mono text-[10px] uppercase tracking-widest font-semibold text-purple-800">
            04 // HARDWARE
          </span>
        </div>
      ),
      className:
        "bg-[#faf5ff] border border-purple-200/90 text-purple-950 shadow-[0_12px_40px_rgba(147,51,234,0.08)]",
      descClass: "text-purple-800/90",
      pillClass: "bg-purple-100/90 text-purple-900 border-purple-200",
      config: {
        y: 20,
        rotate: 14,
        zIndex: 5,
      },
    },
  ];

  const [active, setActive] = useState(null);
  const [spacing, setSpacing] = useState(cardSpacing);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setActive(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () =>
      setSpacing(mq.matches ? cardSpacing : Math.round(cardSpacing * 0.39));
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [cardSpacing]);

  const middle = (cards.length - 1) / 2;

  const isAnyCardActive = () => {
    return Boolean(active?.title);
  };

  const isCurrentActive = (card) => {
    return active?.title === card.title;
  };

  return (
    <section className="w-full py-16 bg-white font-sans">
      {/* Section Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-8 flex flex-col items-center text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
          Engineered from Circuit to Pixel
        </h2>
        <p className="text-xs font-mono text-neutral-400 mt-2">
          Click any card to inspect active engineering telemetry
        </p>
      </div>

      {/* Dynamic Stage Stage Container without fixed clipping height */}
      <div className="relative flex min-h-[580px] lg:min-h-[660px] h-auto w-full items-center justify-center py-10">
        <motion.div
          ref={ref}
          onClick={() => setActive(null)}
          className="relative mx-auto flex h-full w-full max-w-5xl items-center justify-center [--height:320px] [--width:240px] lg:[--height:420px] lg:[--width:300px]"
        >
          {cards.map((card, index) => {
            const offsetX = (index - middle) * spacing;
            const current = isCurrentActive(card);
            const anyActive = isAnyCardActive();

            return (
              <motion.div key={card.title}>
                <motion.button
                  initial={{
                    x: 0,
                    scale: 0,
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(current ? null : card);
                  }}
                  animate={{
                    y: current ? 0 : anyActive ? 400 : card.config.y,
                    x: current ? 0 : anyActive ? offsetX * 0.4 : offsetX,
                    rotate: current
                      ? 0
                      : anyActive
                        ? 0.2 * card.config.rotate
                        : card.config.rotate,
                    scale: current ? activeScale : anyActive ? 0.7 : 1,
                  }}
                  whileHover={{
                    scale: current ? activeScale : anyActive ? 0.7 : 1.05,
                  }}
                  transition={spring}
                  style={{
                    width: `var(--width)`,
                    minHeight: `var(--height)`,
                    height: current ? "auto" : `var(--height)`,
                    marginLeft: `calc(var(--width) / -2)`,
                    marginTop: `calc(var(--height) / -2)`,
                    zIndex: current ? 50 : card.config.zIndex,
                  }}
                  className={cn(
                    "absolute top-1/2 left-1/2 flex cursor-pointer flex-col items-start justify-between rounded-2xl p-3 md:p-5 shadow-xl select-none text-left transition-shadow hover:shadow-2xl",
                    card.className,
                  )}
                >
                  {card.skeleton}
                  <div className="mt-4 w-full flex-1 flex flex-col justify-between">
                    <motion.h2
                      layoutId={card.title + "title"}
                      className="font-bold max-w-full text-left text-lg md:text-2xl tracking-tight"
                    >
                      {card.title}
                    </motion.h2>
                    <AnimatePresence mode="popLayout">
                      {current && (
                        <motion.div
                          layoutId={card.title + "description"}
                          initial={{ opacity: 0, x: 20, y: 20, height: 0 }}
                          animate={{ opacity: 1, x: 0, y: 0, height: "auto" }}
                          exit={{ opacity: 0, x: 40, y: 40 }}
                          transition={spring}
                          className="mt-3 space-y-3"
                        >
                          <p
                            className={cn(
                              "text-left text-xs md:text-sm leading-relaxed font-sans",
                              card.descClass,
                            )}
                          >
                            {card.description}
                          </p>

                          <div className="flex flex-wrap gap-1 pt-1">
                            {card.skills.map((s) => (
                              <span
                                key={s}
                                className={cn(
                                  "px-2 py-0.5 rounded-md text-[10px] font-mono border",
                                  card.pillClass,
                                )}
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechCapabilitiesDeck;
