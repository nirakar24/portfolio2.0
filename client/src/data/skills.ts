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
    name: "Next.js",
    icon: "N",
    category: "frontend",
    color: "gray"
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
    name: "Redux",
    icon: "Rx",
    category: "frontend",
    color: "purple"
  },
  {
    name: "HTML/CSS",
    icon: "</>",
    category: "frontend",
    color: "orange"
  },

  // Backend
  {
    name: "Node.js",
    icon: "N",
    category: "backend",
    color: "green"
  },
  {
    name: "Express",
    icon: "Ex",
    category: "backend",
    color: "gray"
  },
  {
    name: "MongoDB",
    icon: "M",
    category: "backend",
    color: "green"
  },
  {
    name: "PostgreSQL",
    icon: "PG",
    category: "backend",
    color: "blue"
  },
  {
    name: "Firebase",
    icon: "FB",
    category: "backend",
    color: "yellow"
  },
  {
    name: "GraphQL",
    icon: "GQL",
    category: "backend",
    color: "pink"
  },

  // Tools
  {
    name: "Git",
    icon: "Git",
    category: "tools",
    color: "red"
  },
  {
    name: "Docker",
    icon: "🐳",
    category: "tools",
    color: "blue"
  },
  {
    name: "AWS",
    icon: "AWS",
    category: "tools",
    color: "yellow"
  },
  {
    name: "CI/CD",
    icon: "CI",
    category: "tools",
    color: "green"
  },
  {
    name: "Jest",
    icon: "Jest",
    category: "tools",
    color: "red"
  },
  {
    name: "Figma",
    icon: "F",
    category: "tools",
    color: "purple"
  },
];

export const getSkillsByCategory = (category: string) => {
  return skills.filter(skill => skill.category === category);
};
