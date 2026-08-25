import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * FluidLiquidCursor:
 * Recreates the organic liquid droplet / ink metaball cursor with velocity-based stretching,
 * trailing fluid beads, and gooey SVG filter fusion inspired by high-end creative websites.
 */
export function FluidLiquidCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // Position history for fluid trailing beads
  const mouseRef = useRef({ x: -100, y: -100 });
  const pointsRef = useRef([
    { x: -100, y: -100, vx: 0, vy: 0 },
    { x: -100, y: -100, vx: 0, vy: 0 },
    { x: -100, y: -100, vx: 0, vy: 0 },
    { x: -100, y: -100, vx: 0, vy: 0 },
    { x: -100, y: -100, vx: 0, vy: 0 },
  ]);

  const animationFrameRef = useRef(null);
  const headElementRef = useRef(null);
  const beadsRef = useRef([]);

  useEffect(() => {
    // Check for touch / mobile
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e) => {
      if (!isVisible) setIsVisible(true);
      mouseRef.current = { x: e.clientX, y: e.clientY };

      // Check for interactive element under cursor
      const target = e.target;
      const isInteractive = target && (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("[role='button']") ||
        target.closest(".cursor-pointer") ||
        target.closest(".cursor-grab") ||
        window.getComputedStyle(target).cursor === "pointer"
      );
      setIsHovered(!!isInteractive);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Continuous physics render loop
    let prevX = mouseRef.current.x;
    let prevY = mouseRef.current.y;

    const render = () => {
      const mouse = mouseRef.current;
      const points = pointsRef.current;

      // Calculate instantaneous mouse velocity
      const dx = mouse.x - prevX;
      const dy = mouse.y - prevY;
      const speed = Math.hypot(dx, dy);
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      prevX = mouse.x;
      prevY = mouse.y;

      // 1. Leader (Head) interpolation
      const leaderLerp = 0.35;
      points[0].x += (mouse.x - points[0].x) * leaderLerp;
      points[0].y += (mouse.y - points[0].y) * leaderLerp;

      // Dynamic stretch based on velocity
      const stretch = Math.min(speed * 0.055, 1.4);
      const scaleX = 1 + stretch;
      const scaleY = 1 / (1 + stretch * 0.6);

      if (headElementRef.current) {
        headElementRef.current.style.transform = `translate3d(${points[0].x}px, ${points[0].y}px, 0) translate(-50%, -50%) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
      }

      // 2. Trailing Beads interpolation
      const beadLerps = [0.28, 0.22, 0.17, 0.12];
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const current = points[i];
        const lerp = beadLerps[i - 1] || 0.15;

        current.x += (prev.x - current.x) * lerp;
        current.y += (prev.y - current.y) * lerp;

        if (beadsRef.current[i - 1]) {
          beadsRef.current[i - 1].style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
        }
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isVisible]);

  if (isTouchDevice) return null;

  return (
    <>
      {/* SVG Gooey Metaball Filter */}
      <svg className="pointer-events-none fixed inset-0 z-[-1] opacity-0" aria-hidden="true">
        <defs>
          <filter id="liquid-metaball-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -9"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      {/* Main Liquid Metaball Container with Gooey Filter */}
      <div
        style={{
          filter: "url(#liquid-metaball-filter)",
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.25s ease-out",
        }}
        className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden mix-blend-difference"
      >
        {/* Head Liquid Droplet */}
        <div
          ref={headElementRef}
          style={{
            width: isHovered ? "42px" : isClicking ? "22px" : "28px",
            height: isHovered ? "42px" : isClicking ? "22px" : "28px",
            transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), height 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          className="absolute top-0 left-0 rounded-full bg-white will-change-transform shadow-[0_0_12px_rgba(255,255,255,0.8)]"
        />

        {/* Trailing Fluid Beads (Create the organic swimming teardrop effect) */}
        <div
          ref={(el) => (beadsRef.current[0] = el)}
          style={{
            width: isHovered ? "28px" : "20px",
            height: isHovered ? "28px" : "20px",
          }}
          className="absolute top-0 left-0 rounded-full bg-white will-change-transform"
        />
        <div
          ref={(el) => (beadsRef.current[1] = el)}
          style={{
            width: isHovered ? "20px" : "15px",
            height: isHovered ? "20px" : "15px",
          }}
          className="absolute top-0 left-0 rounded-full bg-white will-change-transform"
        />
        <div
          ref={(el) => (beadsRef.current[2] = el)}
          style={{
            width: isHovered ? "14px" : "10px",
            height: isHovered ? "14px" : "10px",
          }}
          className="absolute top-0 left-0 rounded-full bg-white will-change-transform"
        />
        <div
          ref={(el) => (beadsRef.current[3] = el)}
          style={{
            width: isHovered ? "9px" : "6px",
            height: isHovered ? "9px" : "6px",
          }}
          className="absolute top-0 left-0 rounded-full bg-white will-change-transform"
        />
      </div>

      {/* Precision Core Dot (Renders sharp above the blur metaball for crisp pointer precision) */}
      <div
        style={{
          transform: `translate3d(${mouseRef.current.x}px, ${mouseRef.current.y}px, 0) translate(-50%, -50%)`,
          opacity: isVisible && !isHovered ? 0.9 : 0,
          transition: "opacity 0.2s ease",
        }}
        className="pointer-events-none fixed top-0 left-0 z-[10000] h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_6px_rgba(255,255,255,1)] mix-blend-difference will-change-transform"
      />
    </>
  );
}

export default FluidLiquidCursor;
