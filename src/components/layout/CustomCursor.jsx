import { motion } from "framer-motion";
import { useMousePosition } from "../../hooks/useMousePosition";

export default function CustomCursor() {
  const { x, y, isHovered } = useMousePosition();

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] overflow-hidden hidden md:block">
      {/* Small Precision Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-neutral-900 -translate-x-1/2 -translate-y-1/2"
        animate={{ x, y }}
        transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Trailing Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-neutral-400/80 -translate-x-1/2 -translate-y-1/2 bg-blue-200/20 backdrop-blur-[1px]"
        animate={{
          x,
          y,
          width: isHovered ? 48 : 26,
          height: isHovered ? 48 : 26,
          scale: isHovered ? 1.2 : 1,
          borderColor: isHovered ? "#93c5fd" : "#a3a3a3",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.2 }}
      />
    </div>
  );
}
