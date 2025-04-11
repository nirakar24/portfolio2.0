import { Github, ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  features: string[];
  challenges: string;
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Dashboard",
    description: "A comprehensive admin dashboard for managing online store operations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "Redux"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
    features: [
      "Real-time sales analytics",
      "Inventory management system",
      "Order processing workflows",
      "Customer segmentation",
      "Responsive admin interface"
    ],
    challenges: "Implementing real-time data synchronization across multiple admin users while maintaining consistent state was particularly challenging. Used WebSockets and Redux middleware to solve this.",
    techStack: ["React", "Node.js", "Redux", "Express", "MongoDB", "WebSockets", "Chart.js"]
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A collaborative tool for teams to manage projects and tasks efficiently.",
    image: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "Prisma"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
    features: [
      "Kanban board interface",
      "Task assignment and tracking",
      "Project timeline visualization",
      "Comment and collaboration tools",
      "File attachments"
    ],
    challenges: "Creating a smooth drag-and-drop experience that updates in real-time across all team members was a significant challenge. Implemented optimistic UI updates with server validation.",
    techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "React DnD", "Websockets"]
  },
  {
    id: "3",
    title: "Social Media Analytics",
    description: "A platform for analyzing social media performance and audience insights.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "D3.js"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
    features: [
      "Multi-platform analytics dashboard",
      "Audience demographic analysis",
      "Engagement tracking",
      "Content performance metrics",
      "Automated reporting"
    ],
    challenges: "Working with different APIs from various social platforms and normalizing the data for consistent visualization was complex. Created a middleware layer to standardize data formats.",
    techStack: ["React", "Node.js", "D3.js", "Express", "Redis", "AWS Lambda"]
  },
  {
    id: "4",
    title: "Personal Blog Platform",
    description: "A modern blogging platform with markdown support and SEO optimization.",
    image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "MDX"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
    features: [
      "Markdown/MDX content editing",
      "SEO optimization tools",
      "Social media preview generation",
      "Code syntax highlighting",
      "Reading time estimation"
    ],
    challenges: "Building a markdown editor with live preview that supports custom components and extensions while maintaining good performance was challenging.",
    techStack: ["Next.js", "TypeScript", "MDX", "Tailwind CSS", "Next SEO", "Vercel"]
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    description: "A comprehensive fitness app for tracking workouts, nutrition, and progress.",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["React", "Node.js", "TypeScript"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
    features: [
      "Workout planning and tracking",
      "Nutrition diary and analysis",
      "Progress visualization",
      "Goal setting and achievement tracking",
      "Social sharing and competitions"
    ],
    challenges: "Creating accurate calorie and nutrition tracking that integrates with various exercise types required extensive research and algorithm development.",
    techStack: ["React", "Node.js", "TypeScript", "Express", "MongoDB", "Chart.js", "React Native"]
  },
  {
    id: "6",
    title: "Weather Forecast App",
    description: "A beautiful weather application with detailed forecasts and location search.",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/",
    demoUrl: "#",
    features: [
      "7-day weather forecast",
      "Detailed hourly predictions",
      "Location-based weather data",
      "Weather alerts and notifications",
      "Interactive weather maps"
    ],
    challenges: "Integrating multiple weather data sources to provide accurate forecasts while keeping the app performance fast and responsive was a significant challenge.",
    techStack: ["Next.js", "TypeScript", "TailwindCSS", "OpenWeatherMap API", "Mapbox", "SWR"]
  }
];

export const allTags: string[] = Array.from(
  new Set(projects.flatMap(project => project.tags))
);
