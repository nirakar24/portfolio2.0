import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { projects, allTags } from "@/data/projects";
import { useProjectModal } from "@/hooks/use-project-modal";

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;  // Optional GitHub URL
  demoUrl?: string;    // Optional demo URL
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const { openModal } = useProjectModal();
  
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
      y: -5,
      scale: 1.02,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400 }
    }
  };

  return (
    <motion.div 
      className="py-12 sm:py-16 container mx-auto px-4 sm:px-6 overflow-x-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="mb-8 sm:mb-12"
        variants={itemVariants}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">My Projects</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          A collection of my recent work that showcases my skills and experience
        </p>
      </motion.div>
      
      {/* Project Filters */}
      <motion.div 
        className="mb-6 sm:mb-10 flex flex-wrap justify-center gap-1.5 sm:gap-2"
        variants={itemVariants}
      >
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant={activeFilter === "all" ? "default" : "outline"}
            className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm"
            onClick={() => setActiveFilter("all")}
          >
            All
          </Button>
        </motion.div>
        
        {allTags.map(tag => (
          <motion.div 
            key={tag}
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={activeFilter === tag ? "default" : "outline"}
              className="px-3 py-1.5 sm:px-4 sm:py-2 text-sm"
              onClick={() => setActiveFilter(tag)}
            >
              {tag}
            </Button>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Projects Grid */}
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        variants={containerVariants}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="relative group"
            >
              <Card className="h-full overflow-hidden border dark:border-gray-800 transition-all duration-300 hover:shadow-lg dark:hover:shadow-gray-800/30">
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-2"
                        onClick={() => openModal(project)}
                      >
                        <Eye className="w-4 h-4" />
                        View Details
                      </Button>
                </div>
                  </div>
                  <div className="p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map(tag => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {project.githubUrl && (
                        <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <Github className="h-4 w-4" />
                          Source Code
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
      
      {/* Show if no projects match filter */}
      {filteredProjects.length === 0 && (
        <motion.div 
          className="text-center py-12 sm:py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">No projects match the selected filter.</p>
          <Button 
            className="mt-4"
            onClick={() => setActiveFilter("all")}
          >
            Show All Projects
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
}
