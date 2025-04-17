import { motion } from "framer-motion";
import Skills from "@/components/sections/skills";
import PageHero from "../components/sections/page-hero";
import { useLocation } from "wouter";

export default function SkillsPage() {
  const [, navigate] = useLocation();

  const handleSkillClick = (skill: string) => {
    navigate("/projects");
    // Additional logic could be added to filter projects by skill
  };

  return (
    <motion.main 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero 
        title="My Skills"
        subtitle="The technologies and tools I'm proficient with"
      />
      <section id="skills-content" className="py-12">
        <Skills onSkillClick={handleSkillClick} />
      </section>
    </motion.main>
  );
}