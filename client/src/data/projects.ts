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
    title: "InsightSync 2.0",
    description: "A fully functional Customer Relationship Management (CRM) system tailored for Indian businesses with smart data visualization and churn prediction features.",
    image: "/InsightSync_output.png",
    tags: ["React", "TailwindCSS", "Chart.js", "JSON"],
    githubUrl: "https://github.com/nirakar24/InsightSync2.0",
    demoUrl: "#",
    features: [
      "Performance Graphs per product using Chart.js",
      "Churn Prediction Module to identify at-risk customers",
      "Dynamic dashboards for customer behavior & retention metrics",
      "All data fetched from a centralized dummydata.json file"
    ],
    challenges: "Creating an end-to-end frontend logic with visual insights and real business applications while maintaining performance and user experience.",
    techStack: ["React", "TailwindCSS", "Chart.js", "JSON"]
  },
  {
    id: "2",
    title: "Flixio – Movie Recommendation System",
    description: "A content-based recommendation engine for movie suggestions using cosine similarity.",
    image: "/Flixio_output.png",
    tags: ["Python", "Pandas", "Scikit-learn", "Flask"],
    githubUrl: "https://github.com/nirakar24/Flixio_Recommendation_System",
    demoUrl: "#",
    features: [
      "TF-IDF Vectorization for feature extraction",
      "Cosine similarity for determining user preferences",
      "Simple Flask web interface for user interaction",
      "Returns movies based on textual metadata similarity"
    ],
    challenges: "Implementing an efficient recommendation system that provides accurate suggestions while maintaining good performance.",
    techStack: ["Python", "Pandas", "Scikit-learn", "Flask"]
  },
  {
    id: "3",
    title: "Chess Review",
    description: "Analyzes chess games from Lichess or Chess.com via username input, and displays a step-by-step review of the moves with visual feedback.",
    image: "/chess_review_output.jpg",
    tags: ["React", "TypeScript", "TailwindCSS"],
    githubUrl: "https://github.com/nirakar24/chess_review",
    demoUrl: "#",
    features: [
      "Fetches and parses real user match data",
      "Lets users select and review specific matches",
      "Provides move-by-move analysis and position breakdown",
      "Interactive chess board visualization"
    ],
    challenges: "Integrating with chess APIs and creating an intuitive interface for move analysis and game review.",
    techStack: ["React", "TypeScript", "TailwindCSS"]
  },
  {
    id: "4",
    title: "Warehouse Management System API",
    description: "A backend API for managing warehouse inventory, order tracking, and demand forecasting.",
    image: "/WarehouseManagement_output.webp",
    tags: ["FastAPI", "Pandas", "PostgreSQL"],
    githubUrl: "https://github.com/nirakar24/Warehouse_Management_System_API",
    demoUrl: "#",
    features: [
      "CSV file uploads for bulk inventory updates",
      "Demand and reorder level prediction using ML models",
      "Product placement suggestions",
      "Reporting and alert system for low-stock items"
    ],
    challenges: "Creating a robust backend architecture with real business use cases and data-driven automation.",
    techStack: ["FastAPI", "Pandas", "PostgreSQL"]
  },
  {
    id: "5",
    title: "PubMed LLM API",
    description: "An LLM-powered API that scrapes PubMed articles and summarizes academic content.",
    image: "https://images.unsplash.com/photo-1534723328310-e82dad3ee43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    tags: ["LangChain", "Python", "BeautifulSoup", "Pandas"],
    githubUrl: "https://github.com/nirakar24/pubmed_llm_api",
    demoUrl: "#",
    features: [
      "Keyword-based search from PubMed",
      "Summarization using Large Language Models via LangChain",
      "Fast API setup for RESTful access",
      "Converts data into structured summaries"
    ],
    challenges: "Smart fusion of AI + web scraping + real-world data science tools while maintaining accuracy and performance.",
    techStack: ["LangChain", "Python", "BeautifulSoup", "Pandas"]
  },
  {
    id: "6",
    title: "Pixio – Image Gallery App",
    description: "A desktop application for image manipulation and gallery management with advanced features.",
    image: "/Pixio_output.JPG",
    tags: ["Python", "Tkinter", "OpenCV"],
    githubUrl: "https://github.com/nirakar24/Pixio",
    demoUrl: "#",
    features: [
      "Image manipulation using OpenCV",
      "User-friendly Tkinter GUI interface",
      "Advanced image processing capabilities",
      "Efficient image gallery management"
    ],
    challenges: "Creating a robust desktop application with advanced image processing features while maintaining good performance.",
    techStack: ["Python", "Tkinter", "OpenCV"]
  }
];

export const allTags: string[] = Array.from(
  new Set(projects.flatMap(project => project.tags))
);
