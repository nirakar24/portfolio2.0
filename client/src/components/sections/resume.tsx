import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card"; 
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, Check, Mail, Github, Linkedin, Star } from "lucide-react";
import { resumeData } from "@/data/resume";

export default function Resume() {
  const handleDownload = () => {
    // Google Docs link that forces PDF export
    const googleDocsUrl = "https://docs.google.com/document/d/1UX-PhHQLdQh0S10-ZUknPgfI1g7pBMfH5QRi2zZZF0E/export?format=pdf";
    window.open(googleDocsUrl, '_blank');
  };

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
          <CardHeader className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-600 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">{resumeData.name} - {resumeData.title}</h3>
              <div className="flex gap-4">
                <Button 
                  className="flex items-center gap-2"
                  onClick={handleDownload}
                  variant="default"
                >
                  <Download className="h-4 w-4" />
                  Download PDF
                </Button>
                <Button
                  className="flex items-center gap-2"
                  variant="outline"
                  onClick={() => window.open("https://docs.google.com/document/d/1UX-PhHQLdQh0S10-ZUknPgfI1g7pBMfH5QRi2zZZF0E/edit?usp=sharing", "_blank")}
                >
                  View in Google Docs
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
              <a href={`mailto:${resumeData.email}`} className="flex items-center gap-1 hover:text-primary">
                <Mail className="h-4 w-4" />
                {resumeData.email}
              </a>
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-primary">
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </div>
          </CardHeader>
          
          {/* Resume Preview */}
          <CardContent className="p-6 max-h-[800px] overflow-y-auto">
            {/* Overview */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4">Overview</h4>
              <p className="text-gray-700 dark:text-gray-300">{resumeData.overview}</p>
            </div>

            {/* Experience Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Briefcase className="mr-2 h-4 w-4 text-primary" />
                Professional Experience
              </h4>
              
              <div className="space-y-6">
                {resumeData.experiences.map((exp, index) => (
                  <div key={index} className={`border-l-2 ${index === 0 ? 'border-primary' : 'border-gray-300 dark:border-gray-600'} pl-4`}>
                    <h5 className="font-semibold">{exp.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{exp.company} | {exp.period}</p>
                    <ul className="mt-2 list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-gray-300">
                      {exp.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Achievements Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Star className="mr-2 h-4 w-4 text-primary" />
                Hackathons & Achievements
              </h4>
              
              <div className="space-y-4">
                {resumeData.achievements.map((achievement, index) => (
                  <div key={index} className="border-l-2 border-gray-300 dark:border-gray-600 pl-4">
                    <h5 className="font-semibold">{achievement.title}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.event}</p>
                    <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Check className="mr-2 h-4 w-4 text-primary" />
                Skills
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">Languages & Frameworks</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.languages.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Cloud & DevOps</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.cloud.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">Tools & Technologies</h5>
                  <div className="flex flex-wrap gap-2">
                    {resumeData.skills.tools.map((skill, index) => (
                      <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
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
                {resumeData.education.map((edu, index) => (
                  <div key={index} className={`border-l-2 ${index === 0 ? 'border-primary' : 'border-gray-300 dark:border-gray-600'} pl-4`}>
                    <h5 className="font-semibold">{edu.degree}</h5>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{edu.institution} | {edu.period}</p>
                    <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Interests Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 flex items-center">
                <Award className="mr-2 h-4 w-4 text-primary" />
                Interests
              </h4>
              
              <div className="flex flex-wrap gap-2">
                {resumeData.interests.map((interest, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
