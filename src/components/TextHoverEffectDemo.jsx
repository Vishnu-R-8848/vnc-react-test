import React from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export function TextHoverEffectDemo({ text = "ACET" }) {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <TextHoverEffect text={text} />
    </div>
  );
}

export default TextHoverEffectDemo;
