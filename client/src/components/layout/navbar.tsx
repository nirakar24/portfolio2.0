import { Link } from "wouter";
import { ThemeToggle } from "../ui/theme-toggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center space-x-2">
          <span className="text-primary">Nirakar</span>
          <span className="dark:text-white">Jena</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center">
          <div className="hidden md:flex items-center space-x-8 mr-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
            <Link href="/projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
            <Link href="/skills" className="text-sm font-medium hover:text-primary transition-colors">Skills</Link>
            <Link href="/resume" className="text-sm font-medium hover:text-primary transition-colors">Resume</Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </div>
          <ThemeToggle className="p-2 rounded-full bg-gray-200 dark:bg-gray-800" />
        </div>
      </nav>
    </header>
  );
}
