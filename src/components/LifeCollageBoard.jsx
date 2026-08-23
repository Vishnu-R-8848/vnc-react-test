import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";

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

const photos = [
  {
    id: 1,
    title: "Bengaluru Skyline & Transit",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200&auto=format&fit=crop",
    pos: "top-8 left-[6%] sm:left-[10%] rotate-[-8deg]",
    zIndex: 2,
  },
  {
    id: 2,
    title: "Sensors & Breadboards",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
    pos: "top-14 right-[6%] sm:right-[12%] rotate-[9deg]",
    zIndex: 3,
  },
  {
    id: 3,
    title: "Nature & Escapes",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200&auto=format&fit=crop",
    pos: "bottom-10 left-[12%] sm:left-[18%] rotate-[6deg]",
    zIndex: 4,
  },
  {
    id: 4,
    title: "Kinetic Perspectives",
    image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1200&auto=format&fit=crop",
    pos: "bottom-8 right-[10%] sm:right-[15%] rotate-[-10deg]",
    zIndex: 5,
  },
];

export default function LifeCollageBoard() {
  const containerRef = useRef(null);

  return (
    <section className="w-full max-w-5xl mx-auto my-16 px-4 antialiased font-sans">
      {/* Section Header */}
      <div className="flex items-center justify-between border-b border-neutral-200/80 pb-4 mb-6">
        <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
          // BEYOND THE CODE
        </span>
        <span className="font-mono text-[11px] text-neutral-400">
          [DRAGGABLE_STAGE • INTERACTIVE]
        </span>
      </div>

      {/* Interactive Collage Canvas */}
      <div
        ref={containerRef}
        className="relative w-full min-h-[560px] sm:min-h-[640px] bg-[#0c0d10] border border-neutral-800/80 rounded-3xl overflow-hidden p-6 shadow-2xl flex items-center justify-center select-none"
      >
        {/* Background Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px]" />

        {/* 1. Scattered Draggable Photo Cards */}
        {photos.map((item) => (
          <motion.div
            key={item.id}
            drag
            dragConstraints={containerRef}
            whileHover={{ scale: 1.05, zIndex: 50, cursor: "grab" }}
            whileDrag={{ scale: 1.08, zIndex: 60, cursor: "grabbing" }}
            className={`absolute ${item.pos} bg-neutral-900 border border-neutral-700/80 p-2.5 pb-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] w-52 sm:w-64`}
            style={{ zIndex: item.zIndex }}
          >
            <div className="w-full h-44 sm:h-52 rounded-xl overflow-hidden bg-neutral-800">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover pointer-events-none"
              />
            </div>
            <p className="mt-2 text-center font-mono text-[11px] text-neutral-400 tracking-wider">
              {item.title}
            </p>
          </motion.div>
        ))}

        {/* 2. Floating Sticker: Camera Badge */}
        <motion.div
          drag
          dragConstraints={containerRef}
          whileHover={{ scale: 1.1, zIndex: 50, rotate: 12 }}
          whileDrag={{ scale: 1.15, zIndex: 60 }}
          className="absolute top-16 left-[40%] sm:left-[35%] -rotate-[14deg] bg-[#1a1b22] border-2 border-neutral-700/80 p-3.5 rounded-2xl shadow-xl flex items-center gap-2 cursor-grab text-white"
          style={{ zIndex: 10 }}
        >
          <Camera className="w-5 h-5 text-orange-400" />
          <span className="font-mono text-xs font-bold uppercase tracking-wider">
            FRAMES & MOMENTS
          </span>
        </motion.div>

        {/* 3. Floating Sticker: Instagram Pill */}
        <motion.a
          href="https://www.instagram.com/vishnu_naik_chouhan_/"
          target="_blank"
          rel="noreferrer"
          drag
          dragConstraints={containerRef}
          whileHover={{ scale: 1.08, zIndex: 50, rotate: -4 }}
          whileDrag={{ scale: 1.12, zIndex: 60 }}
          className="absolute top-28 right-[24%] sm:right-[30%] rotate-[8deg] bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 cursor-pointer font-mono text-xs font-bold"
          style={{ zIndex: 12 }}
        >
          <InstagramIcon />
          <span>@vishnu_naik_chouhan_</span>
        </motion.a>

        {/* 4. Center Manifesto Bubble */}
        <motion.div
          drag
          dragConstraints={containerRef}
          whileHover={{ scale: 1.03, zIndex: 50 }}
          whileDrag={{ scale: 1.05, zIndex: 60 }}
          className="relative z-20 max-w-md mx-auto p-6 sm:p-8 bg-neutral-900/95 backdrop-blur-md border border-neutral-700/80 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-center cursor-grab"
        >
          <span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-[#FF5500] font-bold mb-2">
            WHEN I'M NOT CODING
          </span>
          <h3 className="text-base sm:text-xl font-bold tracking-tight text-white leading-snug">
            “This is where my mind wanders around, between reality and surrealism.”
          </h3>
          <span className="block mt-3 text-[11px] font-mono text-neutral-400">
            [Drag elements to inspect life fragments]
          </span>
        </motion.div>
      </div>
    </section>
  );
}
