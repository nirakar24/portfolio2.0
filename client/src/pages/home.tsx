import { useRef } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import Resume from "@/components/sections/resume";
import Contact from "@/components/sections/contact";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.main 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        onViewProjects={() => scrollToSection(projectsRef)}
        onContact={() => scrollToSection(contactRef)}
      />
      
      <section ref={aboutRef} id="about">
        <About />
      </section>
      
      <section ref={projectsRef} id="projects">
        <Projects />
      </section>
      
      <section ref={skillsRef} id="skills">
        <Skills onSkillClick={(skill) => {
          scrollToSection(projectsRef);
          // There would be additional logic here to activate the filter
        }} />
      </section>
      
      <section ref={resumeRef} id="resume">
        <Resume />
      </section>
      
      <section ref={contactRef} id="contact">
        <Contact />
      </section>
    </motion.main>
  );
}
