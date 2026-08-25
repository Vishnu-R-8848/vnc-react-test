import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.8,
  maxSize = 2.5,
  speed = 1.2,
  particleColor = "#FFFFFF",
  particleDensity = 250,
  ...props
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 400);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 200);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initParticles();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    let particles = [];

    const initParticles = () => {
      particles = [];
      const count = Math.max(60, Math.min(350, Math.floor((width * height) / 3500 * (particleDensity / 100))));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * 0.4 * speed,
          speedY: (Math.random() - 0.5) * 0.4 * speed,
          opacity: Math.random() * 0.5 + 0.5,
          opacitySpeed: (Math.random() * 0.03 + 0.01) * (Math.random() > 0.5 ? 1 : -1),
        });
      }
    };

    initParticles();

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      if (background !== "transparent") {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, width, height);
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacitySpeed;

        if (p.opacity > 1 || p.opacity < 0.25) {
          p.opacitySpeed = -p.opacitySpeed;
        }

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.globalAlpha = Math.max(0.2, Math.min(1, p.opacity));
        ctx.fillStyle = particleColor;
        ctx.shadowColor = particleColor;
        ctx.shadowBlur = p.size * 4;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [background, minSize, maxSize, speed, particleColor, particleDensity]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("h-full w-full", className)}
      {...props}
    />
  );
};

export default SparklesCore;
