import { create } from 'zustand';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  features: string[];
  challenges: string;
  techStack: string[];
  githubUrl?: string;
  demoUrl?: string;
}

interface ProjectModalStore {
  isOpen: boolean;
  project: Project | null;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

export const useProjectModal = create<ProjectModalStore>()((set) => ({
  isOpen: false,
  project: null,
  openModal: (project: Project) => set(() => ({ isOpen: true, project })),
  closeModal: () => set(() => ({ isOpen: false, project: null })),
})); 