import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export default function Hero({ onViewProjects, onContact }: HeroProps) {
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full Stack Developer specializing in modern web technologies";

  // Text typing animation effect
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 40);
      
      return () => clearTimeout(timeout);
    } else {
      // Blinking cursor effect
      const interval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);
      
      return () => clearInterval(interval);
    }
  }, [typedText, fullText]);
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };
  
  const floatVariants = {
    float: {
      y: [0, -15, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };
  
  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400 } }
  };
  
  // Letter animation for name
  const nameArray = "Hi, I'm John Doe".split("");
  const nameVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };
  
  const letterVariants = {
    hidden: { 
      opacity: 0,
      y: 20 
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };
  
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 container mx-auto px-6 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 -z-10">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"
            style={{
              backgroundColor: i % 2 ? 'var(--primary)' : 'var(--secondary)',
              width: `${Math.random() * 20 + 10}rem`,
              height: `${Math.random() * 20 + 10}rem`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`
            }}
          />
        ))}
      </div>
      
      <motion.div 
        className="max-w-3xl mx-auto text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          animate="float"
          variants={floatVariants}
          className="mb-12"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-wrap justify-center items-center h-[2em]"
            variants={nameVariants}
            initial="hidden"
            animate="visible"
          >
            {nameArray.map((letter, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className={letter === 'J' || letter === 'o' || letter === 'h' || letter === 'n' || letter === 'D' || letter === 'e' ? 
                  "inline-block text-primary" : "inline-block"}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 h-16 flex justify-center items-center"
            variants={itemVariants}
          >
            {typedText}
            {showCursor && <span className="text-primary">|</span>}
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 perspective-500"
          variants={itemVariants}
        >
          <motion.div
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <Button 
              className="px-6 py-3 bg-primary text-white shadow-lg"
              onClick={onViewProjects}
            >
              <span className="flex items-center">
                View My Work
                <motion.svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
            </Button>
          </motion.div>
          
          <motion.div
            variants={buttonHoverVariants}
            initial="initial"
            whileHover="hover"
          >
            <Button 
              variant="outline" 
              className="px-6 py-3 shadow-lg"
              onClick={onContact}
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 flex justify-center space-x-6"
          variants={itemVariants}
        >
          {[
            { icon: <Github size={24} />, href: "https://github.com/", label: "GitHub" },
            { icon: <Linkedin size={24} />, href: "https://linkedin.com/", label: "LinkedIn" },
            { icon: <Mail size={24} />, href: "mailto:john.doe@example.com", label: "Email" }
          ].map((social, index) => (
            <motion.a 
              key={index}
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={social.label}
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all"
              whileHover={{ scale: 1.25 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { delay: 0.8 + (index * 0.1) } 
              }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
