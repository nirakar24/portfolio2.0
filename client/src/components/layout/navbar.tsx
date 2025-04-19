import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";
import { Button } from "../ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const navItems = [
    { label: "Home", href: "/", iconClass: "home" },
    { label: "About", href: "/about", iconClass: "user" },
    { label: "Projects", href: "/projects", iconClass: "folder" },
    { label: "Skills", href: "/skills", iconClass: "code" },
    { label: "Resume", href: "/resume", iconClass: "file-alt" },
    { label: "Contact", href: "/contact", iconClass: "envelope" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center space-x-2">
          <span className="text-primary">Nirakar</span>
          <span className="dark:text-white">Jena</span>
        </Link>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMobileMenu}
          className="md:hidden"
          aria-label="Toggle Menu"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map(item => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors flex items-center"
            >
              <i className={`fas fa-${item.iconClass} text-primary mr-2`}></i>
              {item.label}
            </Link>
          ))}
          <ThemeToggle className="p-2 rounded-full bg-gray-200 dark:bg-gray-800" />
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex flex-col items-center justify-center space-y-6 text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleMobileMenu}
                className="absolute top-6 right-6"
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </Button>
              
              <div className="w-full max-w-xs flex flex-col items-start space-y-6 px-4">
                {navItems.map((item, index) => (
                  <motion.div 
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="w-full"
                  >
                    <Link
                      href={item.href}
                      className="hover:text-primary transition-colors flex items-center p-2 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                      onClick={() => toggleMobileMenu()}
                    >
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <i className={`fas fa-${item.iconClass} text-primary`}></i>
                      </div>
                      <span>{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              
              <ThemeToggle className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 mt-4" />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
