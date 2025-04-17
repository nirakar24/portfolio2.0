import { motion } from "framer-motion";
import Resume from "@/components/sections/resume";
import PageHero from "@/components/sections/page-hero";

export default function ResumePage() {
  return (
    <motion.main 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero 
        title="My Resume"
        subtitle="A summary of my professional experience and education"
      />
      <section id="resume-content" className="py-12">
        <Resume />
      </section>
    </motion.main>
  );
}