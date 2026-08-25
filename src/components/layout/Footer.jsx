import React from "react";
import { ArrowUpRight } from "lucide-react";
import heroImg from "../../assets/hero.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationSections = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Capabilities", href: "#capabilities" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Socials",
      links: [
        {
          label: "GitHub",
          href: "https://github.com/vishnu-naik-chouhan",
          external: true,
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/vishnu-naik-chouhan",
          external: true,
        },
        { label: "Twitter / X", href: "https://x.com/vnc_xt", external: true },
        {
          label: "Instagram",
          href: "https://www.instagram.com/vishnu_naik_chouhan_/",
          external: true,
        },
      ],
    },
    {
      title: "Engineering",
      links: [
        { label: "MERN Stack", href: "#capabilities" },
        { label: "Kinetic UI / Motion", href: "#capabilities" },
        { label: "Next.js App Router", href: "#capabilities" },
        { label: "IoT & Telemetry", href: "#capabilities" },
      ],
    },
    {
      title: "Direct Connect",
      links: [
        {
          label: "Email Me",
          href: "mailto:vishnu.naik.chouhan@gmail.com",
          external: true,
        },
        {
          label: "GitHub Profile",
          href: "https://github.com/vishnu-naik-chouhan",
          external: true,
        },
      ],
    },
  ];

  return (
    <footer className="relative w-full max-w-5xl mx-auto mt-20 sm:mt-28 overflow-hidden border-t border-neutral-200/80 pt-14 pb-10 font-sans select-none">
      {/* Top Grid Area: Brand Info + Navigation Columns */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
        {/* Left Col: Identity */}
        <div className="md:col-span-4 flex flex-col justify-between space-y-6 md:space-y-0">
          <div className="space-y-3">
            <a href="#home" className="inline-flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-200 bg-neutral-900 text-white flex items-center justify-center font-bold text-xs font-mono">
                <img
                  src={heroImg}
                  alt="Vishnu"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>
              <span className="font-bold text-sm tracking-tight text-neutral-900 font-sans">
                Vishnu Naik Chouhan
              </span>
            </a>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed font-sans">
              Full Stack Engineer architecting scalable MERN backends, responsive Next.js web applications, and kinetic craft.
            </p>
          </div>

          <div className="text-[11px] text-neutral-400 font-mono">
            © {currentYear} Vishnu Naik Chouhan. All rights reserved.
          </div>
        </div>

        {/* Right Col: 4-Column Navigation */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
          {navigationSections.map((section) => (
            <div key={section.title} className="flex flex-col space-y-3">
              <h4 className="text-[10px] font-bold text-neutral-900 uppercase tracking-widest font-mono">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noreferrer" : undefined}
                      className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors inline-flex items-center gap-1 group"
                    >
                      <span>{link.label}</span>
                      {link.external && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Status Bar */}
      <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between border-t border-neutral-200/60 pt-6 text-[11px] font-mono text-neutral-400 gap-3">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-neutral-700 font-medium">
            All systems nominal • VNC Studio Engine v2.4
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span>Bengaluru, IN</span>
          <span>•</span>
          <span>UTC+5:30</span>
          <span>•</span>
          <span className="text-neutral-600 font-semibold">SWISS EDITORIAL</span>
        </div>
      </div>

      {/* Giant Subtle Background Watermark */}
      <div className="pointer-events-none select-none absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-full text-center leading-none z-0">
        <span className="font-extrabold text-[16vw] tracking-tighter text-neutral-900/[0.02] uppercase inline-block font-sans">
          CHOUHAN
        </span>
      </div>
    </footer>
  );
}
