import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = ({ children, className }) => {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn(
        "sticky top-3 sm:top-5 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6 pointer-events-none transition-all duration-300",
        className,
      )}
    >
      <div className="w-full flex items-center justify-center">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { scrolled });
          }
          return child;
        })}
      </div>
    </motion.header>
  );
};

export const NavBody = ({ children, className, scrolled }) => {
  return (
    <motion.div
      layout
      transition={{ type: "spring", stiffness: 350, damping: 30 }}
      className={cn(
        "w-full flex items-center justify-between pointer-events-auto rounded-full transition-all duration-300 relative",
        "bg-[#0e0e11]/85 backdrop-blur-xl border border-neutral-800/80 shadow-[0_8px_32px_rgba(0,0,0,0.5)]",
        scrolled
          ? "py-1 px-2 sm:px-5 max-w-4xl border-neutral-700/80 bg-[#09090b]/90 shadow-black/80"
          : "py-1 px-1 sm:px-6 max-w-5xl",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavbarLogo = ({
  avatarSrc,
  name = "Vishnu Naik Chouhan",
  role = "Full Stack",
  href = "#home",
}) => {
  const [imgError, setImgError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className="flex items-center gap-2.5 group select-none shrink-0"
    >
      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-700 bg-neutral-800 flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
        {avatarSrc && !imgError ? (
          <img
            src={avatarSrc}
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="w-full h-full flex items-center justify-center font-mono font-bold text-xs text-white">
            VN
          </span>
        )}
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-xs sm:text-sm tracking-tight text-white leading-none font-sans group-hover:text-neutral-200 transition-colors">
          {name}
        </span>
        <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {role}
        </span>
      </div>
    </a>
  );
};

export const NavItems = ({ items = [], activeSection, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleClick = (e, link) => {
    e.preventDefault();
    const targetId = link.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      onMouseLeave={() => setHoveredIndex(null)}
      className={cn(
        "nav-wrapper hidden md:flex items-center border border-[#3f3f3f]/80  rounded-full w-fit shadow-2xl",
        className,
      )}
    >
      <ul className="nav-link-container relative z-10 flex items-center gap-1 sm:gap-1.5 justify-center bg-gradient-to-t from-[#141414] to-[#222226] shadow-[inset_0_2px_8px_rgba(0,0,0,0.85)] rounded-full border border-neutral-800/80">
        {/* Full Container Fill on Mouse Leave (Expands smoothly to fill the container) */}
        {hoveredIndex === null && (
          <motion.div
            layoutId="nav-hover-fill"
            className="nav-pills hover-pill absolute inset-0 bg-gradient-to-b from-[#2a2a2e]/50 to-[#18181b]/50 shadow-[inset_0_1px_4px_rgba(255,255,255,0.1)] rounded-full -z-20 pointer-events-none"
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
          />
        )}

        {items.map((item, idx) => {
          const targetId = item.link?.replace("#", "") || item.id;
          const isActive = activeSection === targetId;

          return (
            <li
              key={item.link || item.name}
              className="nav-items relative list-none"
            >
              <a
                href={item.link}
                onClick={(e) => handleClick(e, item.link)}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={cn(
                  "nav-links relative block px-3.5 sm:px-4 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors duration-200 z-10 select-none rounded-full",
                  isActive
                    ? "text-black font-bold"
                    : "text-neutral-400 hover:text-white font-medium",
                )}
              >
                {/* Active Pill (Metallic Gradient with Crisp Inset Shadow) */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="nav-pills active-pill absolute inset-0 bg-gradient-to-b from-[#f2f2f2] to-[#b3b3b3] shadow-[inset_0_2px_7px_#fff,0_3px_12px_rgba(255,255,255,0.2)] rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 32,
                    }}
                  />
                )}

                {/* Hover Pill (Contracts to Hovered Item with Shared LayoutId) */}
                {hoveredIndex === idx && !isActive && (
                  <motion.div
                    layoutId="nav-hover-fill"
                    className="nav-pills hover-pill absolute inset-0 bg-gradient-to-b from-[#3f3f3f] to-[#212121] shadow-[inset_0_2px_7px_#ffffff29] rounded-full -z-20"
                    transition={{
                      type: "spring",
                      stiffness: 450,
                      damping: 32,
                    }}
                  />
                )}

                {item.name || item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export const NavbarButton = ({
  children,
  variant = "primary",
  className,
  onClick,
  href = "#contact",
  ...props
}) => {
  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
      return;
    }
    if (href?.startsWith("#")) {
      e.preventDefault();
      const targetId = href.replace("#", "");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const isPrimary = variant === "primary";

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        "cursor-pointer inline-flex items-center justify-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider font-semibold transition-all duration-200 select-none shadow-sm",
        isPrimary
          ? "bg-white text-black hover:bg-neutral-200 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          : "bg-neutral-800/80 text-white border border-neutral-700 hover:bg-neutral-700",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export const MobileNav = ({ children, className }) => {
  return (
    <div
      className={cn("md:hidden w-full relative pointer-events-auto", className)}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn("flex items-center justify-between w-full", className)}>
      {children}
    </div>
  );
};

export const MobileNavToggle = ({ isOpen, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Navigation"
      className={cn(
        "p-2 rounded-full text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer",
        className,
      )}
    >
      {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
    </button>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  children,
  items = [],
  className,
}) => {
  const handleNavClick = (e, link) => {
    e.preventDefault();
    if (onClose) onClose();
    const targetId = link.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.96 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className={cn(
            "absolute top-full left-0 right-0 mt-3 w-full bg-[#0e0e11]/95 backdrop-blur-2xl border border-neutral-800 rounded-3xl p-4 flex flex-col gap-2 font-mono text-xs uppercase tracking-wider shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-50 pointer-events-auto",
            className,
          )}
        >
          {items.map((item, idx) => (
            <a
              key={`mobile-item-${idx}`}
              href={item.link}
              onClick={(e) => handleNavClick(e, item.link)}
              className="px-4 py-3 rounded-2xl transition-all flex items-center justify-between text-neutral-300 hover:text-white hover:bg-neutral-800/80 active:bg-neutral-800"
            >
              <span>{item.name || item.label}</span>
              <ArrowUpRight className="w-4 h-4 text-neutral-500" />
            </a>
          ))}

          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
