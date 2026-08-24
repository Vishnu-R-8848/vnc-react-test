import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const DottedGlowBackground = ({
  className,
  opacity = 1,
  gap = 12,
  radius = 1.6,
  colorLightVar = "--color-neutral-500",
  glowColorLightVar = "--color-neutral-600",
  colorDarkVar = "--color-neutral-500",
  glowColorDarkVar = "--color-sky-800",
  backgroundOpacity = 0,
  speedMin = 0.3,
  speedMax = 1.6,
  speedScale = 1,
  ...props
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 300);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 300);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    // Helper to resolve CSS variables or hex fallbacks
    const getColor = (varName, fallback) => {
      if (typeof window === "undefined") return fallback;
      const val = getComputedStyle(document.documentElement)
        .getPropertyValue(varName)
        .trim();
      return val || fallback;
    };

    const isDark = document.documentElement.classList.contains("dark");
    const baseColor = isDark
      ? getColor(colorDarkVar, "#737373")
      : getColor(colorLightVar, "#a3a3a3");
    const glowColor = isDark
      ? getColor(glowColorDarkVar, "#0284c7")
      : getColor(glowColorLightVar, "#525252");

    let time = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (backgroundOpacity > 0) {
        ctx.fillStyle = `rgba(0, 0, 0, ${backgroundOpacity})`;
        ctx.fillRect(0, 0, width, height);
      }

      const cols = Math.floor(width / gap);
      const rows = Math.floor(height / gap);
      const offsetX = (width % gap) / 2;
      const offsetY = (height % gap) / 2;

      time += 0.015 * speedScale;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = offsetX + i * gap;
          const y = offsetY + j * gap;

          // Spatial & Temporal wave computation
          const noise =
            Math.sin(x * 0.04 + time * speedMin) *
            Math.cos(y * 0.04 + time * speedMax) *
            Math.sin((x + y) * 0.02 + time * 0.8);

          const intensity = Math.max(0, (noise + 1) / 2); // 0 to 1

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);

          if (intensity > 0.65) {
            // Glowing state
            ctx.fillStyle = glowColor;
            ctx.shadowColor = glowColor;
            ctx.shadowBlur = (intensity - 0.65) * 12;
            ctx.globalAlpha = opacity * intensity;
          } else {
            // Normal base dot
            ctx.fillStyle = baseColor;
            ctx.shadowColor = "transparent";
            ctx.shadowBlur = 0;
            ctx.globalAlpha = opacity * 0.25;
          }

          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [
    gap,
    radius,
    opacity,
    backgroundOpacity,
    colorLightVar,
    glowColorLightVar,
    colorDarkVar,
    glowColorDarkVar,
    speedMin,
    speedMax,
    speedScale,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 h-full w-full", className)}
      style={{
        maskImage: "radial-gradient(circle at center, black 60%, transparent 95%)",
        WebkitMaskImage: "radial-gradient(circle at center, black 60%, transparent 95%)",
      }}
      {...props}
    />
  );
};

export default DottedGlowBackground;
