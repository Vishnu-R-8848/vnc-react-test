import React, { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const DraggableCardContainer = ({
  children,
  className,
  ...props
}) => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative w-full overflow-hidden select-none",
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === DraggableCardBody) {
          return React.cloneElement(child, { containerRef });
        }
        return child;
      })}
    </div>
  );
};

export const DraggableCardBody = ({
  children,
  className,
  containerRef,
  ...props
}) => {
  return (
    <motion.div
      drag
      dragConstraints={containerRef}
      dragElastic={0.2}
      whileDrag={{ scale: 1.05, zIndex: 40, cursor: "grabbing" }}
      whileHover={{ scale: 1.02, cursor: "grab" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "cursor-grab touch-none p-3 rounded-2xl bg-neutral-900 border border-neutral-800 shadow-xl backdrop-blur-sm transition-colors hover:border-neutral-700",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default DraggableCardContainer;
