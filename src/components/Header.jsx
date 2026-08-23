import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  const ulRef = useRef(null);
  const hoverPillRef = useRef(null);
  const activePillRef = useRef(null);
  const linksRef = useRef([]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/project" },
    { label: "Architecture", href: "/architecture" },
    { label: "Experience", href: "/experience" },
  ];

  useEffect(() => {
    const ul = ulRef.current;
    const hoverPill = hoverPillRef.current;
    const activePill = activePillRef.current;
    const currentLink = linksRef.current[activeIdx];

    if (!ul || !currentLink || !hoverPill || !activePill) return;

    gsap.set(hoverPill, {
      left: 0,
      width: ul.offsetWidth,
      height: ul.offsetHeight,
      opacity: 1,
    });

    gsap.set(activePill, {
      left: currentLink.offsetLeft,
      width: currentLink.offsetWidth,
      height: ul.offsetHeight,
      top: 0,
      opacity: 1,
    });
  }, [activeIdx]);

  const handleMouseEnter = (idx) => {
    const link = linksRef.current[idx];
    if (!link || !hoverPillRef.current) return;

    gsap.to(hoverPillRef.current, {
      left: link.offsetLeft,
      width: link.offsetWidth,
      height: link.offsetHeight,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!ulRef.current || !hoverPillRef.current) return;
    gsap.to(hoverPillRef.current, {
      left: 0,
      width: ulRef.current.offsetWidth,
      duration: 0.45,
      ease: "power4.out",
    });
  };

  return (
    <header className="sticky top-4 sm:top-6 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6">
      <div className="w-full flex justify-between items-center bg-white border border-neutral-200/80 px-4 sm:px-6 py-2.5 rounded-full shadow-sm">
        <div className="flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-200 animate-pulse"></span>
          <span className="font-bold text-sm tracking-tight text-neutral-900 font-mono lowercase">
            portfolio
          </span>
        </div>

        {/* Desktop GSAP Navigation */}
        <nav
          className="relative hidden sm:flex items-center p-[2px] rounded-full"
          onMouseLeave={handleMouseLeave}
        >
          <ul
            ref={ulRef}
            className="relative z-10 flex items-center text-xs font-medium text-neutral-500 rounded-full"
          >
            {navLinks.map((item, idx) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  ref={(el) => (linksRef.current[idx] = el)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onClick={() => setActiveIdx(idx)}
                  className={`inline-block px-4 py-2 transition-colors z-10 ${
                    activeIdx === idx
                      ? "text-white font-semibold"
                      : "text-neutral-500"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}

            {/* Active Pill (Neutral-400) */}
            <div
              ref={activePillRef}
              className="absolute top-0 left-0 bg-neutral-400 rounded-full -z-10 pointer-events-none"
            />

            {/* Hover Resting Bubble (Blue-100/80) */}
            <div
              ref={hoverPillRef}
              className="absolute top-0 left-0 bg-blue-100/80 border border-blue-200 rounded-full -z-20 pointer-events-none"
            />
          </ul>
        </nav>

        {/* Action Button / Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex px-5 py-2 rounded-full bg-[#111827] text-white text-xs font-semibold hover:bg-black transition-all"
          >
            Hire Me
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="sm:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden mt-2 w-full bg-white border border-neutral-200/80 rounded-2xl p-4 shadow-lg flex flex-col gap-2 font-mono text-xs uppercase tracking-wider">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2 rounded-lg text-neutral-700 hover:bg-blue-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="px-3 py-2.5 rounded-lg bg-[#111827] text-white text-center font-bold"
          >
           Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
import { NavLink, useLocation } from "react-router-dom";
import gsap from "gsap";
import { Menu, X } from "lucide-react";

const triggerHaptic = () => {
  if (typeof window !== "undefined" && "vibrate" in navigator) {
    try {
      navigator.vibrate(10);
    } catch {
      // Ignore vibration error
    }
  }
};

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const ulRef = useRef(null);
  const hoverPillRef = useRef(null);
  const activePillRef = useRef(null);
  const linksRef = useRef([]);

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Architecture", path: "/architecture" },
    { label: "Experience", path: "/experience" },
  ];

  useEffect(() => {
    const ul = ulRef.current;
    const hoverPill = hoverPillRef.current;
    const activePill = activePillRef.current;
    const currentIdx = navLinks.findIndex((l) => l.path === location.pathname);
    const activeEl = linksRef.current[currentIdx !== -1 ? currentIdx : 0];

    if (!ul || !activeEl || !hoverPill || !activePill) return;

    gsap.set(hoverPill, {
      left: 0,
      width: ul.offsetWidth,
      height: ul.offsetHeight,
      opacity: 1,
    });

    gsap.to(activePill, {
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
      height: ul.offsetHeight,
      top: 0,
      opacity: 1,
      duration: 0.4,
      ease: "power3.out",
    });
  }, [location.pathname]);

  const handleMouseEnter = (idx) => {
    triggerHaptic();
    const link = linksRef.current[idx];
    if (!link || !hoverPillRef.current) return;

    gsap.to(hoverPillRef.current, {
      left: link.offsetLeft,
      width: link.offsetWidth,
      height: link.offsetHeight,
      duration: 0.35,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    if (!ulRef.current || !hoverPillRef.current) return;
    gsap.to(hoverPillRef.current, {
      left: 0,
      width: ulRef.current.offsetWidth,
      duration: 0.45,
      ease: "power4.out",
    });
  };

  return (
    <header className="sticky top-0 z-50 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-4">
      <div className="w-full flex justify-between items-center bg-white/90 backdrop-blur-md px-4 sm:px-6 py-2.5 rounded-full border border-neutral-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
        <NavLink
          to="/"
          onClick={triggerHaptic}
          className="flex items-center gap-2.5 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5500] animate-pulse"></span>
          <span className="font-bold text-sm tracking-tight text-neutral-900 font-mono lowercase">
            vishnu.dev
          </span>
        </NavLink>

        {/* Desktop GSAP Nav */}
        <nav
          className="relative hidden sm:flex items-center p-[2px]"
          onMouseLeave={handleMouseLeave}
        >
          <ul
            ref={ulRef}
            className="relative z-10 flex items-center text-xs font-semibold text-neutral-500 font-mono uppercase tracking-wider"
          >
            {navLinks.map((item, idx) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  ref={(el) => (linksRef.current[idx] = el)}
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onClick={triggerHaptic}
                  className={({ isActive }) =>
                    `inline-block px-4 py-2 transition-colors z-10 ${
                      isActive
                        ? "text-white font-bold"
                        : "text-neutral-600 hover:text-neutral-900"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Active Pill (Neutral-900) */}
            <div
              ref={activePillRef}
              className="active-pill absolute top-0 left-0 bg-neutral-900 rounded-full -z-10 pointer-events-none opacity-0"
            />

            {/* Hover Resting Bubble (Orange-50) */}
            <div
              ref={hoverPillRef}
              className="hover-pill absolute top-0 left-0 bg-orange-50 border border-orange-200/60 rounded-full -z-20 pointer-events-none"
            />
          </ul>
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:vishnunaik@gmail.com"
            onClick={triggerHaptic}
            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-neutral-900 text-white text-xs font-bold font-mono tracking-wider hover:bg-black transition-colors"
          >
            Connect
          </a>
          <button
            onClick={() => {
              triggerHaptic();
              setMobileOpen(!mobileOpen);
            }}
            className="sm:hidden p-2 rounded-full text-neutral-700 hover:bg-neutral-100 transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="sm:hidden mt-2 w-full bg-white border border-neutral-200/80 rounded-2xl p-4 flex flex-col gap-2 font-mono text-xs uppercase tracking-wider shadow-xl">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => {
                triggerHaptic();
                setMobileOpen(false);
              }}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-orange-50 text-[#FF5500] font-bold border border-orange-200/60"
                    : "text-neutral-700 hover:bg-neutral-50"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a
            href="mailto:vishnunaik@gmail.com"
            onClick={() => {
              triggerHaptic();
              setMobileOpen(false);
            }}
            className="px-3 py-2.5 rounded-lg bg-neutral-900 text-white text-center font-bold"
          >
            Connect
          </a>
        </div>
      )}
    </header>
  );
}
