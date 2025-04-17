import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects, allTags } from "@/data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));
  
  // Animation variants for Framer Motion
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
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
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: { type: "spring", stiffness: 300, damping: 15 }
    }
  };
  
  const filterVariants = {
    inactive: { 
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "var(--color-text)",
      border: "1px solid rgba(var(--primary-rgb), 0.2)"
    },
    active: { 
      scale: 1.05,
      backgroundColor: "var(--color-primary)",
      color: "white",
      border: "1px solid transparent",
      boxShadow: "0 0 15px rgba(var(--primary-rgb), 0.3)"
    }
  };

  return (
    <motion.div 
      className="py-24 relative"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-to-tr from-primary/5 to-transparent rounded-full blur-3xl"></div>
        
        {/* Decorative grid */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMmgxdjFoLTF2LTF6bS0yLTJoMXY1aC0xdi01em0tMi0yaDF2OWgtMXYtOXptLTItNGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptLTIgMGgxdjE1aC0xdi0xNXptMTYgNGgxdjFoLTF2LTF6bS0yIDJoM3YxaC0zdi0xem0wIDJoM3YxaC0zdi0xem0wIDJoM3YxaC0zdi0xem0wIDJoM3YxaC0zdi0xem0tNCAwaDN2MWgtM3YtMXptMC0yaDF2M2gtMXYtM3ptLTQgMGgzdjFoLTN2LTF6bS00IDBsNCAxdjFsLTQtMXYtMXptMTIgN2wtMTYgNHYtMS4wNDNMNDAgNDR2LTF6Ii8+PC9nPjwvZz48L3N2Zz4=')]
                opacity-10 dark:opacity-5"></div>
      </div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          className="mb-16 relative"
          variants={itemVariants}
        >
          {/* Decorative element */}
          <motion.div 
            className="w-20 h-1 bg-gradient-to-r from-primary to-purple-400 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: 80 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <h2 className="text-4xl font-bold text-center mb-4 text-gradient">My Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            A collection of my recent work that showcases my skills and experience
          </p>
        </motion.div>
        
        {/* Project Filters */}
        <motion.div 
          className="mb-12 flex flex-wrap justify-center gap-3"
          variants={itemVariants}
        >
          <motion.div
            animate={activeFilter === "all" ? "active" : "inactive"}
            variants={filterVariants}
            whileTap={{ scale: 0.95 }}
            className="rounded-md overflow-hidden"
          >
            <Button
              className="px-5 py-2 text-sm font-medium h-10 rounded-md"
              onClick={() => setActiveFilter("all")}
              variant={activeFilter === "all" ? "default" : "outline"}
            >
              All
            </Button>
          </motion.div>
          
          {allTags.map(tag => (
            <motion.div 
              key={tag}
              animate={activeFilter === tag ? "active" : "inactive"}
              variants={filterVariants}
              whileTap={{ scale: 0.95 }}
              className="rounded-md overflow-hidden"
            >
              <Button
                className="px-5 py-2 text-sm font-medium h-10 rounded-md"
                onClick={() => setActiveFilter(tag)}
                variant={activeFilter === tag ? "default" : "outline"}
              >
                {tag}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 50, scale: 0.9 }}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(project.id)}
                onHoverEnd={() => setHoveredCard(null)}
                custom={index}
                variants={cardVariants}
                className="group perspective-1000"
              >
                <motion.div
                  className="glass-card relative h-full"
                  style={{ 
                    transformStyle: "preserve-3d",
                    transform: hoveredCard === project.id ? "rotateY(5deg)" : "rotateY(0deg)",
                    transition: "transform 0.3s ease-out"
                  }}
                >
                  {/* Project image with overlay */}
                  <div className="relative">
                    <div className="w-full h-52 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                      <motion.div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                        <div className="absolute transform rotate-45 bg-primary/60 backdrop-blur-sm text-white text-xs font-bold py-1 right-[-35px] top-[20px] w-[140px] text-center">
                          {project.tags[0]}
                        </div>
                      </div>
                    </div>
                    
                    {/* Overlay with button */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-0 group-hover:opacity-100 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <Button
                          className="px-5 py-2 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border-none shadow-lg"
                          onClick={() => window.dispatchEvent(new CustomEvent('open-project-modal', { detail: project }))}
                        >
                          View Details
                        </Button>
                      </motion.div>
                    </motion.div>
                  </div>
                  
                  {/* Card content */}
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center pt-3 border-t border-gray-200 dark:border-gray-700">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary flex items-center gap-1 font-medium"
                        whileHover={{ scale: 1.05, x: -2 }}
                      >
                        <Github className="h-4 w-4" />
                        <span>GitHub</span>
                      </motion.a>
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1 font-medium"
                        whileHover={{ scale: 1.05, x: 2 }}
                      >
                        <span>Demo</span>
                        <ExternalLink className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </CardContent>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Show if no projects match filter */}
        {filteredProjects.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-500 dark:text-gray-400">No projects match the selected filter.</p>
            <Button 
              className="mt-4 bg-primary/80 hover:bg-primary"
              onClick={() => setActiveFilter("all")}
            >
              Show All Projects
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
