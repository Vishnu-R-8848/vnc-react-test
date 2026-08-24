import React from "react";
import { ChromaticImage } from "@/components/ui/chromatic-image";
import heroImg from "@/assets/hero.png";

export function ChromaticImageDemo({ src = "https://assets.aceternity.com/screenshots/8131a006-884a-4444-85a6-aee9d56af136.webp", alt = "A person standing beneath a red light" }) {
  return (
    <div className="w-full py-10 sm:py-16">
      <ChromaticImage
        src={src || heroImg}
        alt={alt}
        className="mx-auto aspect-[4/5] w-full max-w-sm rounded-[min(1.5vw,18px)] outline-1 -outline-offset-1 outline-black/10 dark:outline-white/10 shadow-xl"
      />
    </div>
  );
}

export default ChromaticImageDemo;
