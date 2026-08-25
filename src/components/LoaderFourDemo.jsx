import React from "react";
import { LoaderFour } from "@/components/ui/loader";

export function LoaderFourDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-[#050507]">
      <LoaderFour text="Initializing System" />
    </div>
  );
}

export default LoaderFourDemo;
