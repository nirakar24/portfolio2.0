import { useLocation } from "wouter";
import { motion } from "framer-motion";
import Hero from "@/components/sections/hero";
import { User, FolderGit2, Code2, Mail } from "lucide-react";

export default function Home() {
  const [, navigate] = useLocation();

  return (
    <motion.main 
      className="flex-grow"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero 
        onViewProjects={() => navigate("/projects")}
        onContact={() => navigate("/contact")}
      />
      
      <motion.section 
        className="py-16 container mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-8">Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
          Explore the different sections to learn more about my skills, 
          projects, experience, and how we can work together.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              title: "About Me", 
              description: "Learn about my background and expertise", 
              path: "/about", 
              icon: <User className="w-8 h-8 text-primary" />
            },
            { 
              title: "Projects", 
              description: "See my previous work and accomplishments", 
              path: "/projects", 
              icon: <FolderGit2 className="w-8 h-8 text-primary" />
            },
            { 
              title: "Skills", 
              description: "Discover my technical skillset", 
              path: "/skills", 
              icon: <Code2 className="w-8 h-8 text-primary" />
            },
            { 
              title: "Contact", 
              description: "Get in touch for opportunities", 
              path: "/contact", 
              icon: <Mail className="w-8 h-8 text-primary" />
            }
          ].map((item, index) => (
            <motion.div 
              key={item.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-all cursor-pointer text-center"
              whileHover={{ y: -5 }}
              onClick={() => navigate(item.path)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + (index * 0.1), duration: 0.5 }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
