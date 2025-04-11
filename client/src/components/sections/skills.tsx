import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { LayoutDashboard, Server, Wrench } from "lucide-react";
import { skills, getSkillsByCategory } from "@/data/skills";

interface SkillsProps {
  onSkillClick?: (skill: string) => void;
}

export default function Skills({ onSkillClick }: SkillsProps) {
  const frontendSkills = getSkillsByCategory("frontend");
  const backendSkills = getSkillsByCategory("backend");
  const toolsSkills = getSkillsByCategory("tools");

  const getColorClass = (color: string) => {
    const baseClasses = {
      bg: {
        light: `bg-${color}-100`,
        dark: `dark:bg-${color}-900`
      },
      text: {
        light: `text-${color}-600`,
        dark: `dark:text-${color}-300`
      }
    };
    
    return `${baseClasses.bg.light} ${baseClasses.bg.dark} ${baseClasses.text.light} ${baseClasses.text.dark}`;
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Skills & Technologies</h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I work with a variety of technologies and frameworks to build modern web applications
        </p>
        
        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <LayoutDashboard className="mr-2 h-5 w-5 text-primary" />
                  Frontend
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {frontendSkills.map(skill => (
                    <button
                      key={skill.name}
                      className="skill-item flex flex-col items-center cursor-pointer"
                      onClick={() => onSkillClick?.(skill.name)}
                    >
                      <div className={`w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-2`}>
                        <span className="text-blue-600 dark:text-blue-300 text-xl">{skill.icon}</span>
                      </div>
                      <span className="text-sm text-center">{skill.name}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Backend */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Server className="mr-2 h-5 w-5 text-primary" />
                  Backend
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {backendSkills.map(skill => (
                    <button
                      key={skill.name}
                      className="skill-item flex flex-col items-center cursor-pointer"
                      onClick={() => onSkillClick?.(skill.name)}
                    >
                      <div className={`w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-2`}>
                        <span className="text-green-600 dark:text-green-300 text-xl">{skill.icon}</span>
                      </div>
                      <span className="text-sm text-center">{skill.name}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {/* Tools & Others */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Wrench className="mr-2 h-5 w-5 text-primary" />
                  Tools & Others
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {toolsSkills.map(skill => (
                    <button
                      key={skill.name}
                      className="skill-item flex flex-col items-center cursor-pointer"
                      onClick={() => onSkillClick?.(skill.name)}
                    >
                      <div className={`w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-2`}>
                        <span className="text-red-600 dark:text-red-300 text-xl">{skill.icon}</span>
                      </div>
                      <span className="text-sm text-center">{skill.name}</span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
