import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, Check } from "lucide-react";

export default function Resume() {
  return (
    <div className="py-16 container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-4">Resume</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        View my professional experience and education
      </p>
      
      <motion.div 
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Card className="shadow-lg">
          {/* Resume Header */}
          <CardHeader className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 flex justify-between items-center p-6">
            <h3 className="text-xl font-bold">John Doe - Full Stack Developer</h3>
            <Button 
              className="flex items-center gap-2"
              onClick={() => {
                // In a real app, this would download the PDF
                alert("Resume download functionality would be implemented here");
              }}
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
          </CardHeader>
          
          {/* Resume Preview */}
          <CardContent className="p-6 max-h-96 overflow-y-auto">
            {/* Experience Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Briefcase className="mr-2 h-4 w-4 text-primary" />
                Professional Experience
              </h4>
              
              <div className="space-y-6">
                {/* Job 1 */}
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold">Senior Full Stack Developer</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Tech Innovations Inc. | Jan 2020 - Present</p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Led development of flagship SaaS platform using React, Node.js, and PostgreSQL</li>
                    <li>Implemented CI/CD pipelines that reduced deployment time by 40%</li>
                    <li>Mentored junior developers and conducted code reviews</li>
                  </ul>
                </div>
                
                {/* Job 2 */}
                <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                  <h5 className="font-semibold">Frontend Developer</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">WebSolutions Co. | Mar 2018 - Dec 2019</p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Developed responsive web applications using React and Redux</li>
                    <li>Collaborated with UX designers to implement pixel-perfect interfaces</li>
                    <li>Improved application performance by 30% through code optimization</li>
                  </ul>
                </div>
                
                {/* Job 3 */}
                <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                  <h5 className="font-semibold">Junior Web Developer</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Digital Agency Inc. | Jun 2016 - Feb 2018</p>
                  <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                    <li>Built and maintained client websites using HTML, CSS, and JavaScript</li>
                    <li>Implemented responsive designs and cross-browser compatibility</li>
                    <li>Created custom WordPress themes and plugins</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Education Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <GraduationCap className="mr-2 h-4 w-4 text-primary" />
                Education
              </h4>
              
              <div className="space-y-6">
                {/* Education 1 */}
                <div className="border-l-2 border-primary pl-4">
                  <h5 className="font-semibold">Bachelor of Science in Computer Science</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">University of Technology | 2012 - 2016</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Graduated with honors. Specialized in Software Engineering.
                  </p>
                </div>
                
                {/* Education 2 */}
                <div className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                  <h5 className="font-semibold">Web Development Bootcamp</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-300">CodeCamp Academy | 2016</p>
                  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                    Intensive 12-week full-stack web development program.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Certifications */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Award className="mr-2 h-4 w-4 text-primary" />
                Certifications
              </h4>
              
              <div className="space-y-2">
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                  <div>
                    <h5 className="font-semibold text-sm">AWS Certified Developer - Associate</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Amazon Web Services | 2021</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                  <div>
                    <h5 className="font-semibold text-sm">Professional Scrum Master I (PSM I)</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300">Scrum.org | 2019</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Check className="text-primary mt-1 mr-2 h-4 w-4" />
                  <div>
                    <h5 className="font-semibold text-sm">MongoDB Certified Developer</h5>
                    <p className="text-xs text-gray-600 dark:text-gray-300">MongoDB University | 2018</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
