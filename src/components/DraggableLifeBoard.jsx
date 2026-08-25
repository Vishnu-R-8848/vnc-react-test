import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const IconInstagram = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const IconCamera = (props) => (
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
    <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
    <circle cx="12" cy="13" r="3" />
  </svg>
);

const IconSparkle = (props) => (
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
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>
);

export function DraggableLifeBoard() {
  const containerRef = useRef(null);

  const polaroidCards = [
    {
      title: "Visual Framing",
      tag: "Photography",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
      position: "top-4 left-3 sm:top-8 sm:left-[8%]",
      rotate: "-6deg",
      size: "w-36 sm:w-48 md:w-56",
    },
    {
      title: "Urban Minimal",
      tag: "Architecture",
      image:
        "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200&auto=format&fit=crop",
      position: "top-6 right-3 sm:top-14 sm:right-[10%]",
      rotate: "8deg",
      size: "w-36 sm:w-48 md:w-60",
    },
    {
      title: "Quiet Horizons",
      tag: "Exploration",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1200&auto=format&fit=crop",
      position: "bottom-4 left-3 sm:bottom-8 sm:left-[12%]",
      rotate: "-3deg",
      size: "w-32 sm:w-44 md:w-52",
    },
    {
      title: "Design Artifacts",
      tag: "Creative Lab",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
      position: "bottom-4 right-3 sm:bottom-10 sm:right-[12%]",
      rotate: "5deg",
      size: "w-32 sm:w-44 md:w-52",
    },
  ];

  return (
    <section className="w-full max-w-5xl mx-auto px-4 sm:px-6 my-10 sm:my-16 select-none">
      <div
        ref={containerRef}
        className="w-full h-[32rem] sm:h-[38rem] md:h-[42rem] rounded-[2rem] bg-[#09090b] text-white overflow-hidden p-4 sm:p-8 md:p-12 relative border border-neutral-800 shadow-2xl flex items-center justify-center"
      >
        {/* Subtle Background Radial Aura */}
        <div className="absolute inset-0 bg-radial from-neutral-800/20 via-transparent to-transparent pointer-events-none" />

        {/* Central Manifesto Statement */}
        <div className="text-center max-w-md mx-auto relative z-10 space-y-2.5 sm:space-y-3 pointer-events-none px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-neutral-400">
            <IconSparkle className="w-3 h-3 text-neutral-300" />
            <span>Curiosity Board</span>
          </div>
          <h3 className="text-xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase">
            When I&apos;m Not Coding
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal">
            This is where my mind wanders around, between engineering, visual aesthetics, and creative curiosity.
          </p>
          <span className="inline-block text-[9px] sm:text-[10px] font-mono text-neutral-500 pt-1">
            ( Drag the cards & stickers around )
          </span>
        </div>

        {/* Draggable Polaroid Photo Cards */}
        {polaroidCards.map((item) => (
          <motion.div
            key={item.title}
            drag
            dragConstraints={containerRef}
            dragElastic={0.2}
            whileDrag={{ scale: 1.08, zIndex: 50, cursor: "grabbing" }}
            whileHover={{ scale: 1.03, cursor: "grab" }}
            style={{ rotate: item.rotate }}
            className={cn(
              "absolute cursor-grab touch-none p-2 sm:p-3 rounded-2xl bg-neutral-950/95 border border-neutral-800 shadow-2xl backdrop-blur-md transition-colors hover:border-neutral-700",
              item.position,
              item.size
            )}
          >
            <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800/80">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
              <span className="absolute top-1.5 left-1.5 sm:top-2 sm:left-2 px-1.5 sm:px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-xs text-[8px] sm:text-[9px] font-mono uppercase text-neutral-300">
                {item.tag}
              </span>
            </div>
            <div className="pt-2 px-1 flex items-center justify-between">
              <span className="font-semibold text-[10px] sm:text-xs text-neutral-200">
                {item.title}
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-neutral-500">
                2026
              </span>
            </div>
          </motion.div>
        ))}

        {/* Draggable Instagram Badge Pill */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
          whileHover={{ scale: 1.05, cursor: "grab" }}
          style={{ rotate: "-4deg" }}
          className="absolute top-[28%] left-3 sm:left-[30%] cursor-grab touch-none z-30"
        >
          <a
            href="https://instagram.com/vishnu_naik_chouhan_"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#833ab4]/80 via-[#fd1d1d]/80 to-[#fcb045]/80 text-white font-medium text-[11px] sm:text-xs shadow-lg border border-white/20 hover:opacity-95 transition-opacity pointer-events-auto"
          >
            <IconInstagram className="w-3.5 h-3.5" />
            <span className="font-mono text-[10px] sm:text-xs">@vishnu_naik_chouhan_</span>
          </a>
        </motion.div>

        {/* Draggable Floating Sticker 1: Photography Pill */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.2}
          whileDrag={{ scale: 1.1, zIndex: 50, cursor: "grabbing" }}
          whileHover={{ scale: 1.05, cursor: "grab" }}
          style={{ rotate: "12deg" }}
          className="absolute bottom-[28%] right-3 sm:right-[30%] cursor-grab touch-none z-30 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-300 font-mono text-[10px] sm:text-xs shadow-xl flex items-center gap-1.5"
        >
          <IconCamera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-neutral-400" />
          <span>35mm Visuals</span>
        </motion.div>
      </div>
    </section>
  );
}

export default DraggableLifeBoard;
