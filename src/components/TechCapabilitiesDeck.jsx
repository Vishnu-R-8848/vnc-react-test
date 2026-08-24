import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Layers, Sparkles, Cpu, Globe, Server, Check } from "lucide-react";

const defaultSpring = {
  type: "spring",
  visualDuration: 0.55,
  bounce: 0.22,
};

export const TechCapabilitiesDeck = ({
  spring = defaultSpring,
  activeScale = 1.12,
  cardSpacing = 175,
} = {}) => {
  const cards = [
    {
      id: "mern",
      title: "MERN Architecture",
      tag: "01 // BACKEND",
      icon: Server,
      description:
        "Engineering scalable full-stack applications with MongoDB schema design, Express REST gateways, React 19, and Node.js microservices.",
      skills: ["MongoDB", "Express.js", "React 19", "Node.js", "REST APIs"],
      skeleton: (
        <div className="h-36 sm:h-40 w-full rounded-xl bg-emerald-200/50 border border-emerald-300/40 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-800 bg-white/80 px-2 py-0.5 rounded">
              SCHEMA & GATEWAYS
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
          </div>
          <div className="space-y-1.5 font-mono text-[10px] text-emerald-900/80">
            <div className="h-2 w-3/4 bg-emerald-300/60 rounded" />
            <div className="h-2 w-1/2 bg-emerald-300/40 rounded" />
          </div>
        </div>
      ),
      className:
        "bg-[#D1F2D9] border border-emerald-300/80 shadow-[0_12px_32px_rgba(16,185,129,0.12)] text-emerald-950",
      pillClass: "bg-emerald-100/90 text-emerald-900 border-emerald-300/80",
      config: { y: -18, rotate: -10, zIndex: 2 },
    },
    {
      id: "motion",
      title: "Kinetic UI & Motion",
      tag: "02 // AESTHETICS",
      icon: Sparkles,
      description:
        "Crafting 60 FPS fluid user journeys with GSAP ScrollTrigger physics, Framer Motion spring layouts, and accessible micro-interactions.",
      skills: ["GSAP Core", "ScrollTrigger", "Framer Motion", "Tailwind CSS"],
      skeleton: (
        <div className="h-36 sm:h-40 w-full rounded-xl bg-orange-200/50 border border-orange-300/40 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-orange-800 bg-white/80 px-2 py-0.5 rounded">
              PHYSICS & SPRINGS
            </span>
            <div className="w-2 h-2 rounded-full bg-orange-600 animate-pulse" />
          </div>
          <div className="space-y-1.5 font-mono text-[10px] text-orange-900/80">
            <div className="h-2 w-4/5 bg-orange-300/60 rounded" />
            <div className="h-2 w-2/3 bg-orange-300/40 rounded" />
          </div>
        </div>
      ),
      className:
        "bg-[#FFE2D1] border border-orange-300/80 shadow-[0_12px_32px_rgba(255,85,0,0.12)] text-orange-950",
      pillClass: "bg-orange-100/90 text-orange-900 border-orange-300/80",
      config: { y: 18, rotate: -3, zIndex: 3 },
    },
    {
      id: "nextjs",
      title: "Next.js & Type-Safe Core",
      tag: "03 // PLATFORMS",
      icon: Globe,
      description:
        "Building reactive full-stack web applications utilizing Next.js App Router, TypeScript strict contracts, and optimized Edge runtime routes.",
      skills: ["Next.js", "TypeScript", "Vite", "Turbopack", "Edge Logic"],
      skeleton: (
        <div className="h-36 sm:h-40 w-full rounded-xl bg-blue-200/50 border border-blue-300/40 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-blue-800 bg-white/80 px-2 py-0.5 rounded">
              APP ROUTER & STRICT TYPES
            </span>
            <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          </div>
          <div className="space-y-1.5 font-mono text-[10px] text-blue-900/80">
            <div className="h-2 w-3/4 bg-blue-300/60 rounded" />
            <div className="h-2 w-3/5 bg-blue-300/40 rounded" />
          </div>
        </div>
      ),
      className:
        "bg-[#D8E6FE] border border-blue-300/80 shadow-[0_12px_32px_rgba(59,130,246,0.12)] text-blue-950",
      pillClass: "bg-blue-100/90 text-blue-900 border-blue-300/80",
      config: { y: -24, rotate: 6, zIndex: 4 },
    },
    {
      id: "iot",
      title: "Embedded IoT Systems",
      tag: "04 // HARDWARE",
      icon: Cpu,
      description:
        "Interfacing low-cost microcontrollers (ESP32/ESP8266) with real-time sensor networks, WebSockets, and live telemetry dashboards.",
      skills: ["ESP32", "ESP8266", "C++", "WebSockets", "Telemetry"],
      skeleton: (
        <div className="h-36 sm:h-40 w-full rounded-xl bg-purple-200/50 border border-purple-300/40 p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-purple-800 bg-white/80 px-2 py-0.5 rounded">
              ESP32 & MESH TELEMETRY
            </span>
            <div className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
          </div>
          <div className="space-y-1.5 font-mono text-[10px] text-purple-900/80">
            <div className="h-2 w-4/5 bg-purple-300/60 rounded" />
            <div className="h-2 w-1/2 bg-purple-300/40 rounded" />
          </div>
        </div>
      ),
      className:
        "bg-[#EBD8FE] border border-purple-300/80 shadow-[0_12px_32px_rgba(168,85,247,0.12)] text-purple-950",
      pillClass: "bg-purple-100/90 text-purple-900 border-purple-300/80",
      config: { y: 16, rotate: 12, zIndex: 5 },
    },
  ];

  const [active, setActive] = useState(null);
  const [spacing, setSpacing] = useState(cardSpacing);

  const ref = useRef(null);
  const cardSpring = spring;

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
      setSpacing(mq.matches ? cardSpacing : Math.round(cardSpacing * 0.42));
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [cardSpacing]);

  const middle = (cards.length - 1) / 2;

  const isAnyCardActive = () => Boolean(active?.title);
  const isCurrentActive = (card) => active?.title === card.title;

  return (
    <div className="relative w-full flex flex-col items-center justify-center font-sans select-none">
      {/* Section Editorial Header */}
      <div className="max-w-5xl mx-auto px-4 mb-4 text-center">
        <div className="inline-flex items-center gap-2 font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-2">
          <span>// 03.00 CAPABILITIES DECK</span>
          <span className="text-neutral-300">•</span>
          <span className="text-neutral-600">[INTERACTIVE 4-CARD STACK]</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 font-sans">
          Engineered from Circuit to Pixel
        </h2>
        <p className="text-xs sm:text-sm font-mono text-neutral-500 mt-2">
          Click any pastel card to expand live architecture telemetry
        </p>
      </div>

      {/* Spring Deck Stage Container */}
      <div className="relative flex w-full items-center justify-center py-2">
        <motion.div
          ref={ref}
          onClick={() => setActive(null)}
          className="relative mx-auto flex h-[500px] sm:h-[560px] lg:h-[600px] w-full max-w-5xl items-center justify-center [--height:340px] [--width:240px] lg:[--height:400px] lg:[--width:290px]"
        >
          {cards.map((card, index) => {
            const offsetX = (index - middle) * spacing;
            const Icon = card.icon;

            return (
              <motion.div key={card.id}>
                <motion.button
                  initial={{ x: 0, scale: 0 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActive(isCurrentActive(card) ? null : card);
                  }}
                  animate={{
                    y: isCurrentActive(card)
                      ? -30
                      : isAnyCardActive()
                        ? 210
                        : card.config.y,
                    x: isCurrentActive(card)
                      ? 0
                      : isAnyCardActive()
                        ? offsetX * 0.4
                        : offsetX,
                    rotate: isCurrentActive(card)
                      ? 0
                      : isAnyCardActive()
                        ? 0.2 * card.config.rotate
                        : card.config.rotate,
                    scale: isCurrentActive(card)
                      ? activeScale
                      : isAnyCardActive()
                        ? 0.76
                        : 1,
                  }}
                  whileHover={{
                    scale: isCurrentActive(card)
                      ? activeScale
                      : isAnyCardActive()
                        ? 0.76
                        : 1.04,
                  }}
                  transition={cardSpring}
                  style={{
                    width: `var(--width)`,
                    height: `var(--height)`,
                    marginLeft: `calc(var(--width) / -2)`,
                    marginTop: `calc(var(--height) / -2)`,
                    zIndex: isCurrentActive(card) ? 50 : card.config.zIndex,
                  }}
                  className={cn(
                    "absolute top-1/2 left-1/2 flex cursor-pointer flex-col items-start justify-between overflow-hidden rounded-3xl p-4 sm:p-5 text-left select-none transition-all",
                    card.className
                  )}
                >
                  {card.skeleton}

                  <div className="mt-3 w-full flex-1 flex flex-col justify-start">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[9px] uppercase font-bold tracking-wider opacity-60">
                        {card.tag}
                      </span>
                      <Icon className="w-3.5 h-3.5 opacity-60" />
                    </div>

                    <motion.h3
                      layout="position"
                      className="font-extrabold text-left text-base sm:text-lg lg:text-xl tracking-tight text-current"
                    >
                      {card.title}
                    </motion.h3>

                    <AnimatePresence>
                      {isCurrentActive(card) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="mt-2.5 overflow-hidden text-left text-xs sm:text-sm opacity-90 leading-relaxed font-sans"
                        >
                          <p>{card.description}</p>
                          {card.skills && (
                            <div className="flex flex-wrap gap-1 mt-3">
                              {card.skills.map((s) => (
                                <span
                                  key={s}
                                  className={cn(
                                    "px-2 py-0.5 rounded-md text-[10px] font-mono border font-semibold",
                                    card.pillClass
                                  )}
                                >
                                  {s}
                                </span>
                              ))}
                            </div>
                          )}
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
    </div>
  );
};

export const Cards = TechCapabilitiesDeck;
export default TechCapabilitiesDeck;