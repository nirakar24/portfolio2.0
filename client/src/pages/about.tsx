import { motion } from "framer-motion";
import About from "@/components/sections/about";
import PageHero from "@/components/sections/page-hero";

export default function AboutPage() {
  return (
    <motion.main 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero 
        title="About Me"
        subtitle="Learn more about my background, skills, and experience"
      />
      <section id="about-content" className="py-12">
        <About />
      </section>
    </motion.main>
  );
}