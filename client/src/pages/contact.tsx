import { motion } from "framer-motion";
import Contact from "@/components/sections/contact";
import PageHero from "../components/sections/page-hero";

export default function ContactPage() {
  return (
    <motion.main 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHero 
        title="Contact Me"
        subtitle="Get in touch for collaboration opportunities or inquiries"
      />
      <section id="contact-content" className="py-12">
        <Contact />
      </section>
    </motion.main>
  );
}