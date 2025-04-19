import { Link } from "wouter";

export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-6 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {year} Nirakar Jena. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link 
              href="/projects" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Projects
            </Link>
            <Link 
              href="/resume" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Resume
            </Link>
            <Link 
              href="/contact" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
