import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { SquigglyText } from "@/components/ui/squiggly-text";
import { FlipWords } from "@/components/ui/flip-words";
import { SparklesCore } from "@/components/ui/sparkles";
import { ScrollMarquee } from "@/components/ui/velocity-marquee";
import { HorizontalProjects } from "@/components/ui/horizontal-projects";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { LoaderFour } from "@/components/ui/loader";
import { AceternityFooter } from "@/components/ui/aceternity-footer";
import BentoServices from "@/components/BentoServices";
import DraggableLifeBoard from "@/components/DraggableLifeBoard";
import InteractiveContact from "@/components/InteractiveContact";
import FluidLiquidCursor from "@/components/ui/fluid-cursor";
import heroImg from "@/assets/hero.png";

// Self-contained reliable SVG icons
const IconArrowUpRight = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
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

const IconGithub = (props) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const IconShoppingBag = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const IconUsers = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconBookOpen = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconSparkles = () => (
  <svg
    viewBox="0 0 24 24"
    width="22"
    height="22"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  </svg>
);

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.05,
    },
  }),
};

// 4 Core Important Projects Database
const projects = [
  {
    title: "SkyMart",
    description:
      "Modern full-stack e-commerce platform with live product catalog, cart state persistence, and checkout flows.",
    year: "2026",
    tech: "React • Node.js • Express • MongoDB",
    icon: <IconShoppingBag />,
    liveUrl: "https://sky-mart-mauve.vercel.app/home",
    githubUrl: "https://github.com/Vishnu-R-8848/skyMart",
  },
  {
    title: "TeamSync",
    description:
      "Real-time team workspace and project management platform built for collaborative task coordination.",
    year: "2026",
    tech: "React • MERN Stack • WebSockets",
    icon: <IconUsers />,
    liveUrl: "https://team-sync-eta.vercel.app/",
    githubUrl: "https://github.com/Vishnu-R-8848/team-sync",
  },
  {
    title: "Inkwell",
    description:
      "Modern publishing and rich-text editing platform engineered for focused writing and responsive reading.",
    year: "2026",
    tech: "Next.js • Tailwind CSS • Rich Text",
    icon: <IconBookOpen />,
    liveUrl: "https://inkwell-project-orcin.vercel.app/",
    githubUrl: "https://github.com/Vishnu-R-8848/inkwell-project",
  },
  {
    title: "Scroll-Trigger Kinetic Lab",
    description:
      "Interactive physics animations and fluid scroll-linked kinetic interface effects powered by GSAP.",
    year: "2026",
    tech: "GSAP • ScrollTrigger • JavaScript",
    icon: <IconSparkles />,
    liveUrl: "https://vishnu-r-8848.github.io/Scroll-Trigger/",
    githubUrl: "https://github.com/Vishnu-R-8848/Scroll-Trigger",
  },
];

const techStackRow1 = [
  "React 19",
  "Next.js 15",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "REST APIs",
];

const techStackRow2 = [
  "JavaScript (ES6+)",
  "Framer Motion",
  "GSAP ScrollTrigger",
  "WebSockets",
  "Git & GitHub",
  "Vite",
  "Zod Schemas",
  "Full-Stack Architecture",
];

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#050507] text-white antialiased selection:bg-white selection:text-black font-sans relative">
      {/* FLUID ORGANIC LIQUID CURSOR */}
      <FluidLiquidCursor />

      {/* INITIAL SYSTEM LOADING SPLASH */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="initial-loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 bg-[#050507] flex items-center justify-center pointer-events-auto"
          >
            <LoaderFour text="Vishnu Naik Chouhan" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. 3D MACBOOK SCROLL HERO SHOWCASE */}
      <section className="w-full overflow-hidden bg-[#050507] pt-12 sm:pt-16 pb-6">
        <MacbookScroll
          title={
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
                Vishnu Naik Chouhan
              </h2>
              <div className="w-[22rem] sm:w-[30rem] md:w-[38rem] h-20 relative mt-2 flex flex-col items-center">
                <p className="text-base sm:text-xl text-neutral-300 font-medium relative z-20 text-center tracking-wide">
                  Full-Stack Engineer
                </p>

                {/* Sparkling Gradients */}
                <div className="absolute inset-x-8 sm:inset-x-16 top-6 sm:top-7 bg-gradient-to-r from-transparent via-neutral-400 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-8 sm:inset-x-16 top-6 sm:top-7 bg-gradient-to-r from-transparent via-neutral-300 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-20 sm:inset-x-32 top-6 sm:top-7 bg-gradient-to-r from-transparent via-white to-transparent h-[3px] w-1/3 blur-sm" />
                <div className="absolute inset-x-20 sm:inset-x-32 top-6 sm:top-7 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/3" />

                {/* Core Sparkles Component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1.2}
                  particleDensity={100}
                  className="w-full h-full"
                  particleColor="#FFFFFF"
                />

                {/* Radial gradient mask to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-[#050507] [mask-image:radial-gradient(300px_90px_at_top,transparent_20%,white)] pointer-events-none" />
              </div>
            </div>
          }
          src={heroImg}
          showGradient={false}
        >
          {/* INSIDE MACBOOK DISPLAY SCREEN (The card that animates down on scroll) */}
          <div className="h-full w-full bg-[#09090b] text-white flex flex-col justify-between p-5 sm:p-7 pointer-events-auto relative z-30">
            {/* macOS Window Traffic Lights (Apple style) */}
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E] shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123] shadow-xs" />
              <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29] shadow-xs" />
            </div>

            {/* Profile Content inside MacBook - Centered */}
            <div className="space-y-3 my-auto max-w-lg mx-auto flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center">
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  <SquigglyText stepDuration={75} scale={[2, 5]}>
                    Vishnu Naik Chouhan
                  </SquigglyText>
                </h1>

                {/* Clean Aligned Sparkle Beam Subtitle */}
                <div className="w-[18rem] sm:w-[22rem] h-10 relative mt-0.5 flex flex-col items-center justify-start">
                  <p className="text-xs sm:text-sm text-neutral-200 font-medium relative z-20 text-center tracking-wide">
                    Full-Stack Engineer
                  </p>

                  {/* Perfectly Centered Light Beams */}
                  <div className="absolute inset-x-0 mx-auto top-5 bg-gradient-to-r from-transparent via-neutral-400 to-transparent h-[2px] w-3/4 blur-xs" />
                  <div className="absolute inset-x-0 mx-auto top-5 bg-gradient-to-r from-transparent via-neutral-300 to-transparent h-px w-3/4" />
                  <div className="absolute inset-x-0 mx-auto top-5 bg-gradient-to-r from-transparent via-white to-transparent h-[2px] w-1/3 blur-xs" />
                  <div className="absolute inset-x-0 mx-auto top-5 bg-gradient-to-r from-transparent via-white to-transparent h-px w-1/3" />

                  {/* Core Sparkles Component */}
                  <div className="w-full h-8 absolute top-1 inset-x-0 pointer-events-none">
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1.2}
                      particleDensity={85}
                      className="w-full h-full"
                      particleColor="#FFFFFF"
                    />
                  </div>

                  {/* Radial gradient mask */}
                  <div className="absolute inset-0 w-full h-full bg-[#09090b] [mask-image:radial-gradient(180px_35px_at_top,transparent_15%,white)] pointer-events-none" />
                </div>
              </div>

              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-md font-normal">
                I build fast, responsive web applications and modern user
                interfaces with React, Next.js, Node.js, and MongoDB.
              </p>

              {/* Interactive Address Bar & Social Channel Selector */}
              <div className="w-full pt-1">
                <InteractiveContact compact={true} />
              </div>
            </div>

            {/* Bottom spacer */}
            <div className="h-1" />
          </div>
        </MacbookScroll>
      </section>

      {/* 2. ABOUT & SKILLS */}
      <section className="max-w-4xl w-full mx-auto px-6 py-12 space-y-4">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          custom={1}
          className="space-y-4"
        >
          <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
            About
          </h2>
          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl">
            I am a full-stack engineer building{" "}
            <FlipWords
              words={["scalable", "modern", "fast", "resilient"]}
              className="text-white font-semibold px-1"
            />{" "}
            web applications with clean architecture, accessible interfaces, and
            scalable backend APIs.
          </p>

          <div className="pt-4 space-y-2.5 w-full overflow-hidden">
            <ScrollMarquee items={techStackRow1} baseVelocity={-1.5} direction={-1} />
            <ScrollMarquee items={techStackRow2} baseVelocity={1.5} direction={1} />
          </div>
        </motion.div>
      </section>

      {/* DRAGGABLE CARDS / CURIOSITY BOARD */}
      <DraggableLifeBoard />

      {/* 3. CAPABILITIES & SERVICES (BENTO GRID) */}
      <BentoServices />

      {/* 4. PINNED HORIZONTAL PROJECTS SHOWCASE (GRID PATTERN CARDS) */}
      <HorizontalProjects projects={projects} />

      {/* 5. ACETERNITY SIGNATURE FOOTER & CONTACT */}
      <AceternityFooter />
    </div>
  );
}
