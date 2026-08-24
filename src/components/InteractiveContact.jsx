import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check, Copy, Mail, ArrowUpRight } from "lucide-react";

const GithubIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 4l11.733 16h4.267l-11.733 -16z"></path>
    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path>
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
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

const channels = [
  {
    id: "github",
    name: "GitHub",
    domain: "github.com",
    handle: "vishnu-naik-chouhan",
    icon: GithubIcon,
    copyValue: "https://github.com/vishnu-naik-chouhan",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    domain: "linkedin.com/in",
    handle: "vishnu-naik-chouhan",
    icon: LinkedinIcon,
    copyValue: "https://linkedin.com/in/vishnu-naik-chouhan",
  },
  {
    id: "twitter",
    name: "Twitter / X",
    domain: "x.com",
    handle: "vnc_xt",
    icon: TwitterIcon,
    copyValue: "https://x.com/vnc_xt",
  },
  {
    id: "instagram",
    name: "Instagram",
    domain: "instagram.com",
    handle: "vishnu_naik_chouhan",
    icon: InstagramIcon,
    copyValue: "https://www.instagram.com/vishnu_naik_chouhan_/",
  },
  {
    id: "email",
    name: "Direct Email",
    domain: "mailto",
    handle: "vishnu.naik.chouhan@gmail.com",
    icon: Mail,
    copyValue: "vishnu.naik.chouhan@gmail.com",
  },
];

export default function InteractiveContact() {
  const [activeChannel, setActiveChannel] = useState(channels[0]);
  const [hoveredType, setHoveredType] = useState(null);
  const [copied, setCopied] = useState(false);

  const containerRef = useRef(null);
  const domainRef = useRef(null);
  const handleRef = useRef(null);

  const [boxPos, setBoxPos] = useState({
    x: 0,
    width: 0,
    visible: false,
    label: "",
  });

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(activeChannel.copyValue);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.error("Failed to copy link: ", err);
    }
  };

  useEffect(() => {
    if (!containerRef.current || !hoveredType) {
      setBoxPos((prev) => ({ ...prev, visible: false }));
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const targetEl =
      hoveredType === "domain" ? domainRef.current : handleRef.current;

    if (targetEl) {
      const rect = targetEl.getBoundingClientRect();
      setBoxPos({
        x: rect.left - containerRect.left,
        width: rect.width,
        visible: true,
        label:
          hoveredType === "domain"
            ? `Protocol: ${activeChannel.domain}`
            : `Handle: @${activeChannel.handle}`,
      });
    }
  }, [hoveredType, activeChannel]);

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center font-sans select-none">
      {/* Technical Index Header */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neutral-100/90 border border-neutral-200/80 mb-6 font-mono text-[10px] sm:text-[11px] text-neutral-500 uppercase tracking-widest shadow-2xs">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span className="text-neutral-700 font-semibold">// 04.00 CONNECT & NETWORK</span>
        <span className="text-neutral-300">•</span>
        <span>CHANNEL ACTIVE</span>
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-neutral-900 mb-3">
        Let’s Build Something Exceptional
      </h2>
      <p className="text-xs sm:text-sm font-mono text-neutral-500 max-w-md mx-auto mb-8">
        Click the interactive address row to copy telemetry handle
      </p>

      {/* Main Address Display (Click to Copy) */}
      <div
        ref={containerRef}
        onClick={handleCopy}
        title="Click to copy target link"
        className="relative group cursor-pointer flex flex-wrap items-center justify-center text-base sm:text-xl md:text-2xl lg:text-3xl font-bold font-mono tracking-tight text-neutral-900 select-none py-4 px-6 rounded-2xl bg-white border border-neutral-200/90 shadow-xs hover:border-neutral-300 hover:bg-neutral-50/70 transition-all max-w-full overflow-hidden"
      >
        <span className="text-neutral-400 font-normal mr-1.5">@</span>

        {/* Domain Segment */}
        <motion.span
          ref={domainRef}
          onMouseEnter={() => setHoveredType("domain")}
          onMouseLeave={() => setHoveredType(null)}
          animate={{
            filter: hoveredType === "handle" ? "blur(3px)" : "blur(0px)",
            opacity: hoveredType === "handle" ? 0.35 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="text-neutral-700 hover:text-neutral-950 transition-colors"
        >
          {activeChannel.domain}
        </motion.span>

        <span className="mx-2 text-neutral-300 font-normal">/</span>

        {/* Handle Segment */}
        <motion.span
          ref={handleRef}
          onMouseEnter={() => setHoveredType("handle")}
          onMouseLeave={() => setHoveredType(null)}
          animate={{
            filter: hoveredType === "domain" ? "blur(3px)" : "blur(0px)",
            opacity: hoveredType === "domain" ? 0.35 : 1,
          }}
          transition={{ duration: 0.15 }}
          className="text-neutral-900 hover:text-blue-600 transition-colors truncate max-w-full"
        >
          {activeChannel.handle}
        </motion.span>

        {/* Animated Dashed Tracking Box */}
        {boxPos.visible && (
          <AnimatedDashBracket
            x={boxPos.x}
            width={boxPos.width}
            label={boxPos.label}
          />
        )}
      </div>

      {/* Copy Feedback Indicator */}
      <div className="h-6 mt-4 flex items-center justify-center font-mono text-xs">
        <AnimatePresence mode="wait">
          {copied ? (
            <motion.span
              key="copied"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              className="inline-flex items-center gap-1.5 text-emerald-600 font-medium bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200"
            >
              <Check className="w-3.5 h-3.5" /> Copied {activeChannel.name} link!
            </motion.span>
          ) : (
            <motion.span
              key="hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="inline-flex items-center gap-1.5 text-neutral-400"
            >
              <Copy className="w-3 h-3" /> Click address bar to copy to clipboard
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Social Selector Row (Hover or Click to switch active channel) */}
      <div className="mt-8 flex items-center gap-2 sm:gap-3 p-1.5 rounded-full border border-neutral-200/80 bg-white shadow-2xs">
        {channels.map((channel) => {
          const Icon = channel.icon;
          const isActive = activeChannel.id === channel.id;

          return (
            <motion.button
              key={channel.id}
              onClick={() => setActiveChannel(channel)}
              onMouseEnter={() => setActiveChannel(channel)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              aria-label={channel.name}
              className={`relative p-2.5 sm:p-3 rounded-full cursor-pointer transition-colors ${
                isActive
                  ? "text-neutral-900"
                  : "text-neutral-400 hover:text-neutral-800"
              }`}
            >
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />

              {isActive && (
                <motion.div
                  layoutId="channel-active-pill"
                  className="absolute inset-0 bg-blue-100/80 rounded-full border border-blue-300/80 -z-0"
                  transition={{ type: "spring", stiffness: 450, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function AnimatedDashBracket({ x, width, label }) {
  const paddingX = 6;
  const boxWidth = width + paddingX * 2;
  const boxHeight = 10;

  const pathD = `M 0 0 L 0 ${boxHeight} L ${boxWidth} ${boxHeight} L ${boxWidth} 0`;

  return (
    <motion.div
      layoutId="dash-box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, x: x - paddingX }}
      transition={{ type: "spring", stiffness: 400, damping: 32 }}
      className="pointer-events-none absolute top-full left-0 mt-1 flex flex-col items-start"
    >
      <svg
        width={boxWidth}
        height={boxHeight + 2}
        viewBox={`0 0 ${boxWidth} ${boxHeight + 2}`}
        fill="none"
        className="overflow-visible"
      >
        <motion.path
          d={pathD}
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -16 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
      </svg>

      <div className="mt-1 font-mono text-[9px] text-neutral-400 whitespace-nowrap overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={label}
            initial={{ opacity: 0, y: -3, filter: "blur(2px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: 3, filter: "blur(2px)" }}
            transition={{ duration: 0.15 }}
            className="block text-left"
          >
            {label}
          </motion.span>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
