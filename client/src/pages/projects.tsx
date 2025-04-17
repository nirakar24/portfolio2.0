import { motion } from "framer-motion";
import Projects from "@/components/sections/projects";
import PageHero from "../components/sections/page-hero";

export default function ProjectsPage() {
  return (
    <motion.main 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero 
        title="My Projects"
        subtitle="A showcase of my best work and technical accomplishments"
      />
      <section id="projects-content" className="py-12">
        <Projects />
      </section>
    </motion.main>
  );
}