import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Code, Server, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-gray-900 transition-colors duration-300 overflow-x-hidden">
      <div className="w-full py-16 overflow-x-hidden">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 overflow-x-hidden">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">About Me</h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Learn more about my background, skills, and experience
          </p>
        
          <div className="w-full max-w-4xl mx-auto overflow-x-hidden">
            <div className="grid md:grid-cols-3 gap-4 md:gap-8 items-start">
          <motion.div 
                className="md:col-span-1 flex justify-center md:sticky md:top-24"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
                <div className="rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800" style={{ width: "180px", height: "180px" }}>
                  <img 
                    src="/dp.jpg" 
                    alt="Nirakar Jena" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error("Error loading image:", e);
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.jpg";
                    }}
                  />
            </div>
          </motion.div>
          
          <motion.div 
                className="md:col-span-2 overflow-x-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p className="text-base md:text-lg">
              I'm a software developer with expertise in Python, Java, web development, and cloud technologies. I'm passionate about building scalable web applications, APIs, and implementing machine learning models.
            </p>
                  <p className="text-base md:text-lg">
              I'm currently pursuing a Bachelor of Engineering in Artificial Intelligence and Data Science at Datta Meghe College of Engineering, Navi Mumbai, where I've been developing my skills in various programming languages and frameworks.
            </p>
                  <p className="text-base md:text-lg">
              As a freelance web developer, I've collaborated with clients to understand their business requirements and delivered high-quality, scalable solutions. When I'm not coding, I enjoy exploring food, astronomy, technology, and playing video games.
            </p>
                </div>
            
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-3 md:p-4">
                  <h3 className="font-semibold text-primary mb-2">Quick Facts</h3>
                  <ul className="space-y-2">
                        <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
                          <MapPin className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                          <span className="break-words">Navi Mumbai, Maharashtra</span>
                    </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
                          <GraduationCap className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                          <span className="break-words">B.E. in AI & Data Science (Ongoing)</span>
                    </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
                          <Briefcase className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                          <span className="break-words">Freelance Web Developer (2023-2024)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
                  <Card className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                    <CardContent className="p-3 md:p-4">
                  <h3 className="font-semibold text-primary mb-2">I Love Working With</h3>
                  <ul className="space-y-2">
                        <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
                          <Code className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                          <span className="break-words">Modern JavaScript (React, Next.js)</span>
                    </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
                          <Server className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                          <span className="break-words">Backend Development (Node.js)</span>
                    </li>
                        <li className="flex items-center text-gray-700 dark:text-gray-300 text-sm md:text-base">
                          <PenTool className="mr-2 h-4 w-4 text-primary flex-shrink-0" />
                          <span className="break-words">UI/UX Design</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
