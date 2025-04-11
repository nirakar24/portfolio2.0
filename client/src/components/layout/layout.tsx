import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { ProjectModal } from "../project-modal";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      {children}
      <Footer />
      <ProjectModal />
    </div>
  );
}
