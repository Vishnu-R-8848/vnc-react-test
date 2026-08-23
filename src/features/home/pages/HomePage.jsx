import { motion } from "framer-motion";
import Hero from "../components/Hero";
import TechAccordionShowcase from "@/components/TechAccordionMarquee";
import TechCapabilitiesDeck from "@/components/TechCapabilitiesDeck";

export default function HomePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <TechAccordionShowcase />
      <TechCapabilitiesDeck />
    </motion.div>
  );
}
