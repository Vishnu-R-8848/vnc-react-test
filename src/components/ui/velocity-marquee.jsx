import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

// Pure, zero-dependency wrap function
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const ScrollMarquee = ({
  items = [],
  baseVelocity = 2,
  direction = 1,
  className,
}) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(direction);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -direction;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = direction;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  // Duplicate items 4 times to ensure seamless infinite looping
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className="w-full overflow-hidden whitespace-nowrap flex select-none py-1.5 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <motion.div className={cn("flex gap-3", className)} style={{ x }}>
        {repeatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg border border-neutral-800/80 bg-neutral-900/60 hover:border-neutral-700 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all cursor-default shadow-xs backdrop-blur-xs font-mono text-xs"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
            <span>{typeof item === "string" ? item : item.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollMarquee;
