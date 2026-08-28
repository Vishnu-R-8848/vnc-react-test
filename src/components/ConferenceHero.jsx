import React, { Component } from "react";
import {
  Shader,
  SolidColor,
  Surface3D,
  DotGrid,
  Prism,
  LinearGradient,
  LiquidMetal,
} from "shaders/react";
import heroImg from "@/assets/hero.png";

// Error Boundary to ensure graceful degradation if WebGPU is unsupported
class ShaderErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.warn("Shader WebGPU fallback activated:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || null;
    }
    return this.props.children;
  }
}

export default function ConferenceHero({
  badgeText = "FULL STACK ENGINEER · CREATIVE DEVELOPER",
  paragraph = "Architecting resilient full-stack systems, scalable web applications, and kinetic interactive interfaces with React, Next.js, Node.js, and WebGPU.",
  primaryCtaText = "Explore Projects",
  primaryCtaLink = "#projects",
  secondaryCtaText = "Let's Connect",
  secondaryCtaLink = "#contact",
}) {
  return (
    <main
      id="home"
      className="relative isolate flex flex-col justify-between min-h-[100dvh] w-full overflow-hidden bg-[#080808] text-white font-['Geist',system-ui,sans-serif] antialiased select-none px-6 sm:px-10 md:px-16 lg:px-20 pt-28 sm:pt-32 pb-12 sm:pb-16"
    >
      {/* 1. Full-Width Hero Image Background Layer (Top visible with 10% vertical positioning) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-cover bg-no-repeat opacity-80 filter brightness-95 contrast-105 transition-all duration-700"
        style={{ backgroundImage: `url(${heroImg})`, backgroundPosition: "center 10%" }}
        aria-hidden="true"
      />

      {/* 2. Ambient Gradient overlays for cinematic depth and high contrast readability */}
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-t from-[#080808] via-[#080808]/40 to-[#080808]/60"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-r from-transparent via-[#080808]/20 to-[#080808]/80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none [background:radial-gradient(ellipse_85%_70%_at_50%_35%,transparent_30%,#080808_100%)]"
        aria-hidden="true"
      />

      {/* 3. Shaders WebGPU Canvas Backdrop Layer with Screen Blend */}
      <div className="absolute inset-0 z-0 pointer-events-auto mix-blend-screen opacity-95" aria-hidden="true">
        <ShaderErrorBoundary
          fallback={
            <div className="w-full h-full bg-transparent" />
          }
        >
          <Shader
            toneMapping="aces"
            style={{ width: "100%", height: "100%", display: "block" }}
          >
            {/* 1. Solid Near-Black Base */}
            <SolidColor color="#080808" />

            {/* 2. 3D Displaced Surface with DotGrid driven by LinearGradient */}
            <Surface3D
              amplitude={0.31}
              cursorIntensity={0.83}
              edgePinning={0.4}
              farCutoff={0.12}
              frequency={1.8}
              height={0.31}
              highlights={6}
              lighting={29}
              lightX={-0.8}
              lightY={-0.95}
              octaves={1}
              tilt={73}
              zoom={1.1}
            >
              <DotGrid
                density={57}
                dotSize={{
                  type: "map",
                  source: "idmrf0jzpi1json7rda",
                  channel: "luminance",
                  inputMin: 0,
                  inputMax: 1,
                  outputMin: 0,
                  outputMax: 0.21,
                  curve: 0.2,
                }}
                speed={0.91}
                visible={true}
              />
            </Surface3D>

            {/* 3. Prism Dispersion Pass anchored near bottom-right */}
            <Prism
              endFalloff={0.44}
              intensity={0.24}
              position={{ x: 1.01, y: 1.23 }}
              saturation={0.79}
              softness={0.001}
              speed={0.16}
              splitPosition={{ x: 0.99, y: 1.11 }}
              spread={3}
              startFalloff={0.64}
            />

            {/* 4. Invisible LinearGradient Driver for dot sizing */}
            <LinearGradient
              id="idmrf0jzpi1json7rda"
              colorSpace="oklab"
              start={{ x: 0.5, y: 1.01 }}
              end={{ x: 0.5, y: 0.15 }}
              stops={[
                { color: "#ffffff", position: 0 },
                { color: "#000000", position: 1 },
              ]}
              visible={false}
            />

            {/* 5. LiquidMetal Metaballs Glint floating above base */}
            <LiquidMetal
              center={{ x: 0.5, y: 0.45 }}
              lightColor="#1f1f1f"
              ripple={5.31}
              scale={1.17}
              shape='{"type":"metaballs3D","ballRadius":0.1,"spread":0.29,"blend":0.325,"speed":1,"rotX":0,"rotY":0,"rotZ":0}'
              shapeType="metaballs3D"
              turbulence={0.37}
            />
          </Shader>
        </ShaderErrorBoundary>
      </div>

      {/* Top Meta Status (Right-Aligned) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex justify-end">
        {badgeText && (
          <div
            className="animate-hero-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-black/50 backdrop-blur-md font-['Geist_Mono',monospace] text-[11px] sm:text-xs text-neutral-300 uppercase tracking-widest shadow-xs"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span>{badgeText}</span>
          </div>
        )}
      </div>

      {/* Massive Editorial Headline Stack (Right-Aligned, br per word) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-end text-right my-auto py-6 sm:py-10">
        <h1
          className="animate-hero-reveal font-black uppercase tracking-tighter leading-[0.84] text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] xl:text-[9.5rem] 2xl:text-[11rem] select-none text-right"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="block text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            VISHNU
          </span>
          <span className="block bg-gradient-to-b from-white via-white/95 to-neutral-300 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            NAIK
          </span>
          <span className="block bg-gradient-to-b from-white/90 via-neutral-300 to-neutral-500 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)]">
            CHOUHAN.
          </span>
        </h1>
      </div>

      {/* Bottom Information Row (Balanced Paragraph + Right-Aligned CTAs) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-end md:items-end justify-between gap-6 pt-4">
        {/* Supporting Narrative Paragraph */}
        <p
          className="animate-hero-reveal max-w-md text-sm sm:text-base leading-relaxed text-[#d4d4d4] text-right md:text-left font-normal"
          style={{ animationDelay: "0.3s" }}
        >
          {paragraph}
        </p>

        {/* Action CTAs */}
        <div
          className="animate-hero-reveal flex flex-wrap items-center justify-end gap-3.5"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href={primaryCtaLink}
            className="rounded-full bg-white text-black px-7 py-3 text-sm font-semibold hover:bg-neutral-200 transition-colors duration-150 shadow-lg text-center"
          >
            {primaryCtaText}
          </a>
          <a
            href={secondaryCtaLink}
            className="rounded-full border border-white/25 bg-black/50 backdrop-blur-md text-white px-7 py-3 text-sm font-semibold hover:border-white/50 hover:bg-white/10 transition-all duration-150 text-center shadow-xs"
          >
            {secondaryCtaText}
          </a>
        </div>
      </div>
    </main>
  );
}
