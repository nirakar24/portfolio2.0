import { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { ProjectModal } from "../project-modal";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <div className="w-full max-w-[90rem] mx-auto px-4 overflow-x-hidden">
          {children}
        </div>
      </main>
      <Footer />
      <ProjectModal />
    </div>
  );
}
