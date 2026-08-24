import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  IconBrightnessDown,
  IconBrightnessUp,
  IconCaretRightFilled,
  IconCaretUpFilled,
  IconChevronUp,
  IconMicrophone,
  IconMoon,
  IconPlayerSkipForward,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
  IconSearch,
  IconVolume,
  IconVolume2,
  IconVolume3,
  IconWorld,
} from "./macbook-icons";

export const MacbookScroll = ({
  src,
  showGradient = true,
  title,
  badge,
  children,
}) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);
  const [dynamicScale, setDynamicScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window === "undefined") return;
      const width = window.innerWidth;
      setIsMobile(width < 768);

      const targetBaseWidth = 740;
      if (width < targetBaseWidth + 24) {
        const nextScale = (width - 24) / targetBaseWidth;
        setDynamicScale(Math.max(0.4, Math.min(1.05, nextScale)));
      } else if (width >= 1280) {
        setDynamicScale(1.08);
      } else {
        setDynamicScale(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.1, isMobile ? 1 : 1.25]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.7, isMobile ? 1 : 1.25]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className="flex min-h-[140vh] sm:min-h-[170vh] md:min-h-[190vh] flex-col items-center justify-start py-0 [perspective:1000px] w-full max-w-full overflow-hidden select-none"
    >
      <motion.div
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="mb-8 sm:mb-12 text-center px-4"
      >
        {title || (
          <h2 className="text-white text-3xl sm:text-5xl font-bold tracking-tight">
            Vishnu Naik Chouhan
          </h2>
        )}
      </motion.div>

      {/* Dynamic Fluid Scaled Wrapper */}
      <div
        style={{
          transform: `scale(${dynamicScale})`,
          transformOrigin: "top center",
        }}
        className="w-[46rem] flex flex-col items-center transition-transform duration-150"
      >
        {/* Lid */}
        <Lid
          src={src}
          scaleX={scaleX}
          scaleY={scaleY}
          rotate={rotate}
          translate={translate}
        >
          {children}
        </Lid>

        {/* Base */}
        <div className="h-[22rem] w-[46rem] bg-[#1a1a1c] border border-neutral-800 rounded-2xl overflow-hidden relative -z-10 -mt-2 shadow-2xl">
          {/* Above keyboard bar */}
          <div className="h-10 w-full relative">
            <div className="absolute inset-x-0 mx-auto w-[80%] h-4 bg-[#050505] rounded-b-md" />
          </div>
          <div className="flex relative">
            <div className="mx-auto w-[10%] overflow-hidden h-full">
              <SpeakerGrid />
            </div>
            <div className="mx-auto w-[80%] h-full">
              <Keypad />
            </div>
            <div className="mx-auto w-[10%] overflow-hidden h-full">
              <SpeakerGrid />
            </div>
          </div>
          <Trackpad />
          <div className="h-2 w-28 mx-auto inset-x-0 absolute bottom-0 bg-gradient-to-t from-[#272729] to-[#050505] rounded-tr-3xl rounded-tl-3xl" />
          {showGradient && (
            <div className="h-40 w-full absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#050507] to-transparent z-50 pointer-events-none" />
          )}
          {badge && <div className="absolute bottom-4 left-4 z-50">{badge}</div>}
        </div>
      </div>
    </div>
  );
};

export const Lid = ({ scaleX, scaleY, rotate, translate, src, children }) => {
  return (
    <div className="relative [perspective:1000px] w-[46rem]">
      {/* Base Perspective Bezel Layer */}
      <div
        style={{
          transform: "perspective(1000px) rotateX(-25deg) translateZ(0px)",
          transformOrigin: "bottom",
          transformStyle: "preserve-3d",
        }}
        className="h-[14rem] w-[46rem] bg-[#010101] border border-neutral-800 rounded-2xl p-2.5 relative shadow-2xl overflow-hidden"
      >
        <div className="relative bg-[#09090b] rounded-lg h-full w-full overflow-hidden flex flex-col">
          {children ? (
            <div className="h-full w-full overflow-hidden opacity-90">{children}</div>
          ) : (
            <img
              src={src}
              alt="Macbook display"
              className="object-cover object-top absolute inset-0 h-full w-full"
            />
          )}
        </div>
      </div>

      {/* Opening Active Lid */}
      <motion.div
        style={{
          scaleX: scaleX,
          scaleY: scaleY,
          rotateX: rotate,
          translateY: translate,
          transformStyle: "preserve-3d",
          transformOrigin: "bottom",
        }}
        className="h-[28rem] w-[46rem] bg-[#010101] border border-neutral-700/80 rounded-2xl p-2.5 absolute inset-0 shadow-[0_30px_70px_rgba(0,0,0,0.95)]"
      >
        {/* Top Notch & Camera */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-3.5 bg-[#010101] rounded-b-md z-30 flex items-center justify-center">
          <div className="w-1.5 h-1.5 rounded-full bg-neutral-900 border border-neutral-700/60" />
        </div>

        {/* Screen Display Container */}
        <div className="relative bg-[#09090b] rounded-lg h-full w-full overflow-hidden border border-neutral-800/80 flex flex-col">
          {children ? (
            <div className="h-full w-full overflow-hidden flex flex-col">{children}</div>
          ) : (
            <img
              src={src}
              alt="Macbook display content"
              className="object-cover object-top absolute inset-0 h-full w-full"
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

export const Trackpad = () => {
  return (
    <div
      className="w-[42%] mx-auto h-32 rounded-xl my-1 border border-neutral-800/80 bg-[#0d0d0f]"
      style={{
        boxShadow: "0px 0px 1px 1px #00000040 inset",
      }}
    />
  );
};

export const Keypad = () => {
  return (
    <div className="h-full rounded-md bg-[#050505] mx-1 p-1.5">
      {/* Row 1: Function Keys */}
      <div className="flex gap-[3px] mb-[3px] w-full justify-between">
        <Kbd className="w-[2.4rem] h-[0.85rem] text-[7px]">esc</Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconBrightnessDown className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconBrightnessUp className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconWorld className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconSearch className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconMicrophone className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconMoon className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconPlayerTrackPrev className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconPlayerSkipForward className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconPlayerTrackNext className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconVolume3 className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconVolume2 className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.1rem] h-[0.85rem] text-[7px]"><IconVolume className="h-2 w-2" /></Kbd>
        <Kbd className="w-[2.4rem] h-[0.85rem] text-[7px]">⏻</Kbd>
      </div>

      {/* Row 2: Numbers */}
      <div className="flex gap-[3px] mb-[3px] w-full justify-between">
        <Kbd className="w-[2rem] h-[1.2rem]">~</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">1</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">2</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">3</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">4</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">5</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">6</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">7</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">8</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">9</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">0</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">-</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">+</Kbd>
        <Kbd className="w-[3rem] h-[1.2rem] text-[8px]">delete</Kbd>
      </div>

      {/* Row 3: QWERTY */}
      <div className="flex gap-[3px] mb-[3px] w-full justify-between">
        <Kbd className="w-[3rem] h-[1.2rem] text-[8px]">tab</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">Q</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">W</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">E</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">R</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">T</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">Y</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">U</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">I</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">O</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">P</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">[</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">]</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">\</Kbd>
      </div>

      {/* Row 4: ASDF */}
      <div className="flex gap-[3px] mb-[3px] w-full justify-between">
        <Kbd className="w-[3.4rem] h-[1.2rem] text-[8px]">caps</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">A</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">S</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">D</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">F</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">G</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">H</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">J</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">K</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">L</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">;</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">'</Kbd>
        <Kbd className="w-[3rem] h-[1.2rem] text-[8px]">return</Kbd>
      </div>

      {/* Row 5: ZXCV */}
      <div className="flex gap-[3px] mb-[3px] w-full justify-between">
        <Kbd className="w-[4rem] h-[1.2rem] text-[8px]">shift</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">Z</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">X</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">C</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">V</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">B</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">N</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">M</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">,</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">.</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem]">/</Kbd>
        <Kbd className="w-[4rem] h-[1.2rem] text-[8px]">shift</Kbd>
      </div>

      {/* Row 6: Spacebar & Modifiers */}
      <div className="flex gap-[3px] w-full justify-between">
        <Kbd className="w-[2rem] h-[1.2rem] text-[7px]">fn</Kbd>
        <Kbd className="w-[2rem] h-[1.2rem] text-[7px]">control</Kbd>
        <Kbd className="w-[2.2rem] h-[1.2rem] text-[7px]">option</Kbd>
        <Kbd className="w-[2.8rem] h-[1.2rem] text-[7px]">command</Kbd>
        <Kbd className="w-[13rem] h-[1.2rem]"></Kbd>
        <Kbd className="w-[2.8rem] h-[1.2rem] text-[7px]">command</Kbd>
        <Kbd className="w-[2.2rem] h-[1.2rem] text-[7px]">option</Kbd>
        <div className="w-[4.5rem] h-[1.2rem] flex items-center justify-between">
          <Kbd className="w-[1.4rem] h-[1.2rem] text-[8px]">◀</Kbd>
          <div className="flex flex-col gap-[1px]">
            <Kbd className="w-[1.4rem] h-[0.56rem] text-[6px]">▲</Kbd>
            <Kbd className="w-[1.4rem] h-[0.56rem] text-[6px]">▼</Kbd>
          </div>
          <Kbd className="w-[1.4rem] h-[1.2rem] text-[8px]">▶</Kbd>
        </div>
      </div>
    </div>
  );
};

export const Kbd = ({ className, children }) => {
  return (
    <div
      className={cn(
        "bg-[#0a0a0a] text-neutral-400 flex items-center justify-center rounded-[4px] text-[10px] font-sans border border-neutral-800 shadow-[0px_0.5px_1px_0px_rgba(255,255,255,0.05)_inset]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SpeakerGrid = () => {
  return (
    <div
      className="flex px-[1px] gap-[3px] mt-2 h-48"
      style={{
        backgroundImage:
          "radial-gradient(circle, #080808 0.6px, transparent 0.6px)",
        backgroundSize: "3px 3px",
      }}
    />
  );
};

export default MacbookScroll;
