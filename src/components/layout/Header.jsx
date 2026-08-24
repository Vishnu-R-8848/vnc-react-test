import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navLinks = [
    { label: "Home", href: "#home", id: "home" },
    { label: "About", href: "#about", id: "about" },
    { label: "Capabilities", href: "#capabilities", id: "capabilities" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  // Scroll listener for active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      const sections = navLinks.map((item) => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-4 sm:top-6 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6 pointer-events-none">
      <div className="w-full flex items-center justify-between bg-white/80 backdrop-blur-md border border-neutral-200/80 rounded-full px-3 sm:px-5 py-2 sm:py-2.5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] pointer-events-auto transition-all">
        {/* Brand Avatar & Name */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-neutral-200/90 bg-neutral-100 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
            <img
              src="/hero.png"
              alt="Vishnu Naik Chouhan"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback to stylized monogram if image fails
                e.currentTarget.style.display = "none";
                if (e.currentTarget.nextSibling) {
                  e.currentTarget.nextSibling.style.display = "flex";
                }
              }}
            />
            <span
              style={{ display: "none" }}
              className="w-full h-full items-center justify-center font-mono font-bold text-xs text-neutral-800"
            >
              VN
            </span>
          </div>

          <div className="flex flex-col">
            <span className="font-bold text-xs sm:text-sm tracking-tight text-neutral-900 leading-none font-sans">
              Vishnu Naik Chouhan
            </span>
            <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Full Stack
            </span>
          </div>
        </a>

        {/* Desktop Anchor Navigation */}
        <nav
          className="relative hidden md:flex items-center bg-neutral-100/70 p-1 rounded-full border border-neutral-200/50"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {navLinks.map((item, idx) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                onMouseEnter={() => setHoveredIndex(idx)}
                className={`relative px-4 py-1.5 text-xs font-mono uppercase tracking-wider font-semibold transition-colors duration-200 z-10 select-none ${
                  isActive
                    ? "text-neutral-900"
                    : "text-neutral-500 hover:text-neutral-800"
                }`}
              >
                {/* Active indicator pill */}
                {isActive && (
                  <motion.div
                    layoutId="active-nav-pill"
                    className="absolute inset-0 bg-white rounded-full shadow-xs border border-neutral-200/70 -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {/* Hover resting indicator */}
                {hoveredIndex === idx && !isActive && (
                  <motion.div
                    layoutId="hover-nav-pill"
                    className="absolute inset-0 bg-neutral-200/60 rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                    }}
                  />
                )}

                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-neutral-900 text-white text-xs font-mono font-medium uppercase tracking-wider hover:bg-black transition-all shadow-xs"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
          </a>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 w-full bg-white/95 backdrop-blur-xl border border-neutral-200/80 rounded-2xl p-4 flex flex-col gap-1.5 font-mono text-xs uppercase tracking-wider shadow-xl pointer-events-auto"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2.5 rounded-xl transition-all flex items-center justify-between ${
                    isActive
                      ? "bg-neutral-900 text-white font-bold"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  )}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="mt-2 px-3 py-2.5 rounded-xl bg-blue-600 text-white text-center font-bold flex items-center justify-center gap-1.5"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}