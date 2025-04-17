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
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Animated background - gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent -z-10">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXY1aC0xdi01em0tMi0yaDF2OWgtMXYtOXptLTItNGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptMTYgNGgxdjFoLTF2LTF6bS0yIDJoM3YxaC0zdi0xem0wIDJoM3YxaC0zdi0xem0wIDJoM3YxaC0zdi0xem0wIDJoM3YxaC0zdi0xem0tNCAwaDN2MWgtM3YtMXptMC0yaDF2M2gtMXYtM3ptLTQgMGgzdjFoLTN2LTF6bS00IDBsNCAxdjFsLTQtMXYtMXptMTIgN2wtMTYgNHYtMS4wNDNMNDAgNDR2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]
                  opacity-20 dark:opacity-10 animate-[grain_8s_steps(10)_infinite]"></div>
        
        {/* Dynamic shapes */}
        <motion.div 
          className="absolute top-20 right-[20%] w-64 h-64 rounded-full bg-primary/30 mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
            rotate: [0, 90]
          }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute bottom-40 left-[10%] w-80 h-80 rounded-full bg-blue-400/20 mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, -90]
          }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.div 
          className="absolute top-40 left-[30%] w-40 h-40 rounded-full bg-purple-400/20 mix-blend-multiply filter blur-xl"
          animate={{ 
            scale: [1, 1.4, 1],
            opacity: [0.2, 0.3, 0.2],
            y: [0, -30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />
      </div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary"
            style={{
              width: `${Math.random() * 5 + 3}px`,
              height: `${Math.random() * 5 + 3}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -Math.random() * 400 - 100],
              x: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 0.7, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 7,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <motion.div 
          className="max-w-3xl mx-auto text-center backdrop-blur-sm py-8 px-6 rounded-lg bg-white/10 dark:bg-black/10 border border-gray-200/20 dark:border-gray-800/20 shadow-xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative lines */}
          <div className="absolute left-6 top-6 h-10 w-10 border-t-2 border-l-2 border-primary opacity-60"></div>
          <div className="absolute right-6 top-6 h-10 w-10 border-t-2 border-r-2 border-primary opacity-60"></div>
          <div className="absolute left-6 bottom-6 h-10 w-10 border-b-2 border-l-2 border-primary opacity-60"></div>
          <div className="absolute right-6 bottom-6 h-10 w-10 border-b-2 border-r-2 border-primary opacity-60"></div>
          
          <motion.div 
            animate="float"
            variants={floatVariants}
            className="mb-12 relative"
          >
            <motion.div
              className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
              animate={{ width: ["0%", "40%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
            
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 flex flex-wrap justify-center items-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 h-[2em]"
              variants={nameVariants}
              initial="hidden"
              animate="visible"
            >
              {nameArray.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="inline-block"
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
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-md blur-md opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <Button 
                className="px-8 py-4 relative bg-gradient-to-r from-primary to-purple-500 border-none text-white font-semibold shadow-lg"
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
                className="px-8 py-4 border-2 border-primary/50 hover:border-primary text-primary hover:text-primary/90 shadow-lg backdrop-blur-sm"
                onClick={onContact}
              >
                Contact Me
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="mt-12 flex justify-center space-x-8"
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
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all p-3 bg-white/30 dark:bg-black/30 rounded-full backdrop-blur-sm"
                whileHover={{ 
                  scale: 1.2, 
                  boxShadow: "0 0 15px rgba(var(--primary-rgb), 0.5)",
                  backgroundColor: "rgba(var(--primary-rgb), 0.1)"
                }}
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
          
          {/* Scroll indicator */}
          <motion.div 
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <motion.div 
                className="w-1 h-2 bg-primary rounded-full mt-2"
                animate={{ y: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
