import React from "react";
import { LoaderThree } from "@/components/ui/loader";

export function LoaderThreeDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-[#050507]">
      <LoaderThree text="Loading System" />
    </div>
  );
}

export default LoaderThreeDemo;
