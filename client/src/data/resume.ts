export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  title: string;
  event: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  overview: string;
  experiences: Experience[];
  education: Education[];
  achievements: Achievement[];
  skills: {
    languages: string[];
    cloud: string[];
    tools: string[];
  };
  interests: string[];
}

export const resumeData: ResumeData = {
  name: "Nirakar Jena",
  title: "Software Developer",
  email: "nirakarjena249@gmail.com",
  github: "https://github.com/nirakar24",
  linkedin: "https://www.linkedin.com/in/nirakar-jena-ab12b518b/",
  overview: "Software developer with expertise in Python, Java, web development, and cloud technologies. Adept at building scalable web applications, APIs, and implementing machine learning models. Experienced in working with a variety of frameworks and tools like Django, React, and AWS.",
  experiences: [
    {
      title: "Freelance Web Developer",
      company: "Self-employed",
      period: "2023 - 2024",
      description: [
        "Developed websites for various businesses, ensuring functionality, usability, and responsiveness",
        "Collaborated with clients to understand their business requirements and delivered high-quality, scalable solutions"
      ]
    }
  ],
  education: [
    {
      degree: "Bachelor of Engineering in Artificial Intelligence and Data Science",
      institution: "Datta Meghe College of Engineering, Navi Mumbai",
      period: "2021 - Present",
      description: "Currently pursuing degree in AI and Data Science"
    },
    {
      degree: "Higher Secondary (XII)",
      institution: "Kamladevi College of Arts and Commerce, Maharashtra",
      period: "2019 - 2021",
      description: "Percentage: 89.50%"
    },
    {
      degree: "Secondary (X)",
      institution: "Holy Cross English High School, Maharashtra",
      period: "2019",
      description: "Percentage: 87.66%"
    }
  ],
  achievements: [
    {
      title: "Cyber Incident Monitoring and Insights Framework",
      event: "SIH 2024 Finalist",
      description: "Machine learning-based threat mitigation system"
    },
    {
      title: "Warehouse Management System API",
      event: "Logithon 2024 Runner-Up",
      description: "Sales forecasting, demand prediction, and sentiment analysis"
    },
    {
      title: "Social Media Platform",
      event: "Codethon 2023",
      description: "Platform connecting idea generators with developers"
    }
  ],
  skills: {
    languages: ["Python", "Java", "Django", "Flask", "React", "HTML", "CSS", "JavaScript", "Bootstrap"],
    cloud: ["AWS", "Git"],
    tools: ["Figma", "Pandas", "Scikit-learn", "NLTK", "Spacy", "GitHub"]
  },
  interests: ["Food", "Astronomy", "Technology", "Video Games"]
}; 