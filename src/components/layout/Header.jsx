import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { ArrowUpRight } from "lucide-react";
import heroImg from "@/assets/hero.png";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", link: "#home", id: "home" },
    { name: "About", link: "#about", id: "about" },
    { name: "Capabilities", link: "#capabilities", id: "capabilities" },
    { name: "Projects", link: "#projects", id: "projects" },
    { name: "Contact", link: "#contact", id: "contact" },
  ];

  // Scroll listener for active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = navItems.map((item) => document.getElementById(item.id));

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Navbar>
      <NavBody>
        {/* Desktop Left: Logo */}
        <div className="hidden md:flex items-center">
          <NavbarLogo name="Portfolio" role="By VNC" href="#home" />
        </div>

        {/* Desktop Center: Nav items */}
        <NavItems items={navItems} activeSection={activeSection} />

        {/* Desktop Right: CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <NavbarButton variant="primary" href="#contact">
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-black" />
          </NavbarButton>
        </div>

        {/* Mobile Header: Single Logo + Hamburger Toggle */}
        <MobileNav className="flex md:hidden w-full flex-col">
          <MobileNavHeader>
            <NavbarLogo name="Portfolio" role="By VNC" href="#home" />
            <MobileNavToggle
              isOpen={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
            items={navItems}
          >
            <div className="pt-2">
              <NavbarButton
                variant="primary"
                href="#contact"
                className="w-full py-3"
                onClick={() => setMobileOpen(false)}
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </NavBody>
    </Navbar>
  );
}
