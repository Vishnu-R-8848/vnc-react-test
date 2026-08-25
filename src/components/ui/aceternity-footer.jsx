import React from "react";

const ArrowUpRight = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="12"
    height="12"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

export function AceternityFooter() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Skills", href: "#" },
      ],
    },
    {
      title: "Socials",
      links: [
        { label: "GitHub", href: "https://github.com/Vishnu-R-8848", external: true },
        { label: "LinkedIn", href: "https://linkedin.com", external: true },
        { label: "Twitter / X", href: "https://x.com", external: true },
        { label: "Instagram", href: "https://instagram.com", external: true },
      ],
    },
    {
      title: "Stack",
      links: [
        { label: "React 19 / Next.js", href: "#" },
        { label: "TypeScript", href: "#" },
        { label: "Node.js & Express", href: "#" },
        { label: "Tailwind CSS", href: "#" },
      ],
    },
    {
      title: "Direct",
      links: [
        { label: "Email Me", href: "mailto:vishnu6364748848@gmail.com" },
        { label: "Source Code", href: "https://github.com/Vishnu-R-8848", external: true },
        { label: "Resume", href: "#" },
      ],
    },
  ];

  return (
    <footer className="relative w-full bg-[#050507] text-white overflow-hidden pt-20 pb-8 sm:pt-28 sm:pb-12 font-sans border-t border-neutral-850 selection:bg-white selection:text-black">
      {/* Top Column Grid */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-10 sm:gap-12">
        {/* Brand Left Column */}
        <div className="col-span-2 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-white text-black flex items-center justify-center font-bold text-sm tracking-tighter shadow-md">
              V
            </div>
            <span className="font-semibold tracking-tight text-base text-neutral-100">
              Vishnu Naik
            </span>
          </div>
          <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
            Full-stack engineer building fast, responsive web applications, modern platforms, and clean user interfaces.
          </p>
          <p className="text-xs text-neutral-500 font-mono pt-2">
            © {currentYear} Vishnu Naik Chouhan.
            <br />
            All rights reserved.
          </p>
        </div>

        {/* Link Columns */}
        {footerLinks.map((section) => (
          <div key={section.title} className="space-y-3.5">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-semibold">
              {section.title}
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400">
              {section.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer" : undefined}
                    className="inline-flex items-center gap-0.5 hover:text-white transition-colors duration-150"
                  >
                    <span>{link.label}</span>
                    {link.external && (
                      <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Massive Background Watermark Text (Aceternity Signature Effect) */}
      <div className="relative w-full overflow-hidden select-none pointer-events-none mt-16 sm:mt-24">
        <div className="text-[15vw] sm:text-[16vw] font-black tracking-tighter leading-none text-center text-neutral-800/25 whitespace-nowrap">
          VISHNU
        </div>
      </div>
    </footer>
  );
}

export default AceternityFooter;
