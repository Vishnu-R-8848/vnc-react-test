import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationSections = [
    {
      title: "Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Projects", href: "/projects" },
        { label: "Architecture", href: "/architecture" },
        { label: "Experience", href: "/experience" },
      ],
    },
    {
      title: "Socials",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/Vishnu-R-8848",
          external: true,
        },
        { label: "Twitter / X", href: "https://twitter.com", external: true },
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "Instagram", href: "https://instagram.com", external: true },
      ],
    },
    {
      title: "System",
      links: [
        { label: "Design Guide", href: "#" },
        {
          label: "Source Code",
          href: "https://github.com/Vishnu-R-8848",
          external: true,
        },
        { label: "Microservices", href: "/architecture" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        {
          label: "Email Me",
          href: "mailto:contact@example.com",
          external: true,
        },
        { label: "Schedule Call", href: "#" },
        { label: "Download CV", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative w-full max-w-6xl mx-auto mt-28 overflow-hidden border-t border-neutral-200/80 pt-16 pb-12 px-6 sm:px-10 bg-white">
      {/* Top Grid Area: Brand Info + Dynamic Navigation Links */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 pb-16">
        {/* Left Col: Brand & Identity */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-6 md:space-y-0">
          <div className="space-y-3">
            <Link to="/" className="inline-flex items-center gap-2.5 group">
              <div className="w-7 h-7 rounded-lg bg-[#111827] text-white flex items-center justify-center font-bold text-sm group-hover:bg-neutral-800 transition-colors">
                V
              </div>
              <span className="font-bold text-base tracking-tight text-neutral-900 font-mono">
                Vishnu.dev
              </span>
            </Link>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-sans">
              Full Stack Engineer specializing in modern web platforms,
              distributed architectures, and refined micro-interactions.
            </p>
          </div>

          <div className="text-xs text-neutral-400 font-mono">
            © {currentYear} Vishnu Naik R. All rights reserved.
          </div>
        </div>

        {/* Right Col: Navigation Grid */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {navigationSections.map((section) => (
            <div key={section.title} className="flex flex-col space-y-3.5">
              <h4 className="text-xs font-semibold text-neutral-900 uppercase tracking-wider font-mono">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between border-t border-neutral-100 pt-6 text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-neutral-600 font-medium">
            All systems nominal
          </span>
        </div>

        <div className="mt-2 sm:mt-0 flex items-center gap-3">
          <span>Bengaluru, IN</span>
          <span>•</span>
          <span>UTC+5:30</span>
        </div>
      </div>

      {/* Giant Aceternity Watermark Behind Links */}
      <div className="pointer-events-none select-none absolute -bottom-6 sm:-bottom-10 left-1/2 -translate-x-1/2 w-full text-center leading-none z-0">
        <span className="font-extrabold text-[18vw] tracking-tighter text-neutral-900/[0.03] uppercase inline-block">
          Vishnu
        </span>
      </div>
    </footer>
  );
}
