import React from "react";
import { Skiper28 } from "@/components/ui/skiper28";
import InteractiveContact from "@/components/InteractiveContact";
import LifeCollageBoard from "@/components/LifeCollageBoard";

export default function AboutPage() {
  return (
    <main className="w-full antialiased font-sans bg-white overflow-x-hidden">
      {/* 1. Official Skiper28 3D Perspective Bio */}
      <Skiper28 />

      {/* 2. Beyond The Code Draggable Photo Collage Board */}
      <LifeCollageBoard />

      {/* 3. Interactive Contact Telemetry */}
      <section className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-12 bg-white">
        <InteractiveContact />
      </section>
    </main>
  );
}
