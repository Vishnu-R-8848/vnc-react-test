import React from "react";
import { cn } from "@/lib/utils";

export function IslandCard({ children, className, ...props }) {
  return (
    <div
      className={cn(
        "w-full bg-white rounded-2xl sm:rounded-3xl border-2 border-black shadow-[6px_6px_0px_0px_#000] p-6 sm:p-10 md:p-14 transition-all",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function StatusBadge({ label = "FULL STACK ENGINEER", accentBg = "bg-[#E2FF38]" }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 border-2 border-black rounded-lg font-mono text-[10px] font-black uppercase tracking-wider text-black shadow-[2px_2px_0px_0px_#000] select-none",
        accentBg
      )}
    >
      <span className="w-2 h-2 rounded-full bg-black animate-ping" />
      <span>{label}</span>
    </div>
  );
}
