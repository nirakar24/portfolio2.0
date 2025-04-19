import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Code, Server, PenTool } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
          <motion.div 
            className="md:col-span-1 flex justify-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg" style={{ width: "200px", height: "200px" }}>
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full bg-gray-300 dark:bg-gray-700"
              >
                <rect width="200" height="200" fill="currentColor" />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="60"
                  fill="white"
                >
                  NJ
                </text>
              </svg>
            </div>
          </motion.div>
          
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg mb-4">
              I'm a software developer with expertise in Python, Java, web development, and cloud technologies. I'm passionate about building scalable web applications, APIs, and implementing machine learning models.
            </p>
            <p className="text-lg mb-4">
              I'm currently pursuing a Bachelor of Engineering in Artificial Intelligence and Data Science at Datta Meghe College of Engineering, Navi Mumbai, where I've been developing my skills in various programming languages and frameworks.
            </p>
            <p className="text-lg mb-6">
              As a freelance web developer, I've collaborated with clients to understand their business requirements and delivered high-quality, scalable solutions. When I'm not coding, I enjoy exploring food, astronomy, technology, and playing video games.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2">Quick Facts</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <MapPin className="mr-2 h-4 w-4 text-primary" />
                      Navi Mumbai, Maharashtra
                    </li>
                    <li className="flex items-center">
                      <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                      B.E. in AI & Data Science (Ongoing)
                    </li>
                    <li className="flex items-center">
                      <Briefcase className="mr-2 h-4 w-4 text-primary" />
                      Freelance Web Developer (2023-2024)
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-primary mb-2">I Love Working With</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <Code className="mr-2 h-4 w-4 text-primary" />
                      Modern JavaScript (React, Next.js)
                    </li>
                    <li className="flex items-center">
                      <Server className="mr-2 h-4 w-4 text-primary" />
                      Backend Development (Node.js)
                    </li>
                    <li className="flex items-center">
                      <PenTool className="mr-2 h-4 w-4 text-primary" />
                      UI/UX Design
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
