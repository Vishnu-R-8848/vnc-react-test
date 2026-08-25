import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Camera, Sparkles, Pin, Terminal, ArrowUpRight } from "lucide-react";

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const polaroids = [
  {
    id: "photo-1",
    title: "Bengaluru Skyline & Transit",
    location: "BLR • INDIA",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
    pos: "top-6 left-[4%] sm:left-[8%]",
    rotate: -6,
    zIndex: 2,
  },
  {
    id: "photo-2",
    title: "Sensors & Microcontrollers",
    location: "HARDWARE LAB",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    pos: "top-10 right-[4%] sm:right-[10%]",
    rotate: 7,
    zIndex: 3,
  },
  {
    id: "photo-3",
    title: "Nature & Focus Escapes",
    location: "TRAIL FOOTAGE",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    pos: "bottom-8 left-[8%] sm:left-[14%]",
    rotate: 5,
    zIndex: 4,
  },
  {
    id: "photo-4",
    title: "Kinetic Perspectives & Lights",
    location: "NIGHT VISUALS",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1200&auto=format&fit=crop",
    pos: "bottom-6 right-[6%] sm:right-[12%]",
    rotate: -8,
    zIndex: 5,
  },
];

export default function LifeCollageBoard() {
  const containerRef = useRef(null);

  return (
    <div className="w-full max-w-5xl mx-auto my-6 select-none font-sans">
      {/* Section Header with Swiss Technical Indexes */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-neutral-200/80 pb-4 mb-8 gap-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-neutral-400">
            // 02.02 BEYOND THE CODE
          </span>
          <span className="text-neutral-300">•</span>
          <span className="text-xs font-bold text-neutral-800">
            Interactive Life Fragments & Memos
          </span>
        </div>
        <span className="font-mono text-[10px] sm:text-[11px] text-neutral-500 bg-neutral-100 px-2.5 py-0.5 rounded-full border border-neutral-200/80">
          [DRAGGABLE STAGE • EXPLORE & TILT]
        </span>
      </div>

      {/* Interactive Collage Canvas Container */}
      <div
        ref={containerRef}
        className="relative w-full h-[580px] sm:h-[640px] md:h-[680px] bg-[#0f1015] border border-neutral-800/80 rounded-3xl overflow-hidden p-6 shadow-2xl flex items-center justify-center cursor-default"
      >
        {/* Background Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:24px_24px]" />

        {/* Hairline Grid Crosshairs */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-full h-px bg-white" />
          <div className="h-full w-px bg-white absolute" />
        </div>

        {/* 1. Scattered Draggable Polaroid Cards */}
        {polaroids.map((item) => (
          <motion.div
            key={item.id}
            drag
            dragConstraints={containerRef}
            dragElastic={0.1}
            initial={{ rotate: item.rotate }}
            whileHover={{ scale: 1.05, zIndex: 60, cursor: "grab" }}
            whileDrag={{ scale: 1.08, zIndex: 70, cursor: "grabbing" }}
            className={`absolute ${item.pos} bg-white text-neutral-900 p-2.5 pb-4 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.5)] w-48 sm:w-60 border border-neutral-200`}
            style={{ zIndex: item.zIndex }}
          >
            {/* Subtle Washi Tape Accent */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-amber-100/80 border border-amber-300/40 rounded-xs -rotate-2 opacity-90 pointer-events-none" />

            <div className="w-full h-40 sm:h-48 rounded-lg overflow-hidden bg-neutral-900">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover pointer-events-none"
                loading="lazy"
              />
            </div>

            <div className="mt-2.5 px-1 flex flex-col">
              <span className="font-sans font-bold text-xs text-neutral-900 tracking-tight">
                {item.title}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-400 mt-0.5">
                {item.location}
              </span>
            </div>
          </motion.div>
        ))}

        {/* 2. Draggable Memo Fragment: Engineering Note */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          initial={{ rotate: -8 }}
          whileHover={{ scale: 1.06, zIndex: 60, cursor: "grab" }}
          whileDrag={{ scale: 1.1, zIndex: 70, cursor: "grabbing" }}
          className="absolute top-10 left-[34%] sm:left-[30%] bg-[#FEF08A] text-neutral-900 p-4 rounded-xl shadow-xl w-44 sm:w-52 border border-yellow-300/80 cursor-grab"
          style={{ zIndex: 8 }}
        >
          <div className="flex items-center justify-between border-b border-yellow-300/60 pb-1.5 mb-2">
            <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-yellow-900">
              [MEMO // LAB]
            </span>
            <Pin className="w-3 h-3 text-yellow-800" />
          </div>
          <p className="font-mono text-[11px] leading-relaxed text-yellow-950 font-medium">
            "Real-time telemetry gateway deployed. Sub-10ms packet latency on ESP32 mesh."
          </p>
        </motion.div>

        {/* 3. Draggable Memo Fragment: Camera Badge */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          initial={{ rotate: 10 }}
          whileHover={{ scale: 1.1, zIndex: 60, cursor: "grab" }}
          whileDrag={{ scale: 1.15, zIndex: 70, cursor: "grabbing" }}
          className="absolute top-28 right-[32%] sm:right-[36%] bg-[#1c1e27] border border-neutral-700/80 px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2 cursor-grab text-white"
          style={{ zIndex: 10 }}
        >
          <Camera className="w-4 h-4 text-orange-400" />
          <span className="font-mono text-[10px] font-bold uppercase tracking-wider">
            FRAMES & MOMENTS
          </span>
        </motion.div>

        {/* 4. Draggable Sticker: Instagram Link Pill */}
        <motion.a
          href="https://www.instagram.com/vishnu_naik_chouhan_/"
          target="_blank"
          rel="noreferrer"
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          initial={{ rotate: -5 }}
          whileHover={{ scale: 1.08, zIndex: 60, cursor: "pointer" }}
          whileDrag={{ scale: 1.12, zIndex: 70 }}
          className="absolute bottom-20 left-[35%] sm:left-[38%] bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 cursor-pointer font-mono text-[11px] font-bold tracking-wide"
          style={{ zIndex: 12 }}
        >
          <InstagramIcon />
          <span>@vishnu_naik_chouhan_</span>
          <ArrowUpRight className="w-3 h-3 text-white/80" />
        </motion.a>

        {/* 5. Center Manifesto Card */}
        <motion.div
          drag
          dragConstraints={containerRef}
          dragElastic={0.1}
          whileHover={{ scale: 1.03, zIndex: 60, cursor: "grab" }}
          whileDrag={{ scale: 1.05, zIndex: 70, cursor: "grabbing" }}
          className="relative z-20 max-w-sm sm:max-w-md mx-auto p-6 sm:p-8 bg-neutral-900/90 backdrop-blur-xl border border-neutral-700/90 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-center cursor-grab"
        >
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF5500] font-bold mb-2">
            WHEN I'M NOT CODING
          </span>
          <h3 className="text-base sm:text-xl font-extrabold tracking-tight text-white leading-snug font-sans">
            “This is where my mind wanders around, between reality and surrealism.”
          </h3>
          <span className="block mt-3 text-[10px] sm:text-[11px] font-mono text-neutral-400">
            [Drag elements to inspect life fragments]
          </span>
        </motion.div>
      </div>
    </div>
  );
}
