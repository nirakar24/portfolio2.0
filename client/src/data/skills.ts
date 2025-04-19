export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'tools';
  color: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "React",
    icon: "⚛️",
    category: "frontend",
    color: "blue"
  },
  {
    name: "TypeScript",
    icon: "TS",
    category: "frontend",
    color: "blue"
  },
  {
    name: "TailwindCSS",
    icon: "TW",
    category: "frontend",
    color: "teal"
  },
  {
    name: "HTML/CSS",
    icon: "</>",
    category: "frontend",
    color: "orange"
  },
  {
    name: "JavaScript",
    icon: "JS",
    category: "frontend",
    color: "yellow"
  },
  {
    name: "Chart.js",
    icon: "📊",
    category: "frontend",
    color: "green"
  },

  // Backend
  {
    name: "Python",
    icon: "🐍",
    category: "backend",
    color: "blue"
  },
  {
    name: "FastAPI",
    icon: "FA",
    category: "backend",
    color: "green"
  },
  {
    name: "Flask",
    icon: "F",
    category: "backend",
    color: "gray"
  },
  {
    name: "PostgreSQL",
    icon: "PG",
    category: "backend",
    color: "blue"
  },
  {
    name: "Pandas",
    icon: "PD",
    category: "backend",
    color: "purple"
  },
  {
    name: "Scikit-learn",
    icon: "SK",
    category: "backend",
    color: "orange"
  },

  // Tools & Others
  {
    name: "Git",
    icon: "Git",
    category: "tools",
    color: "red"
  },
  {
    name: "BeautifulSoup",
    icon: "BS",
    category: "tools",
    color: "green"
  },
  {
    name: "LangChain",
    icon: "LC",
    category: "tools",
    color: "blue"
  },
  {
    name: "Vercel",
    icon: "V",
    category: "tools",
    color: "black"
  },
  {
    name: "JSON",
    icon: "{}",
    category: "tools",
    color: "yellow"
  },
  {
    name: "Machine Learning",
    icon: "🤖",
    category: "tools",
    color: "purple"
  }
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};
