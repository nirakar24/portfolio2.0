import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import ProjectsPage from "@/pages/projects";
import SkillsPage from "@/pages/skills";
import ResumePage from "@/pages/resume";
import ContactPage from "@/pages/contact";
import Layout from "@/components/layout/layout";
import { ThemeProvider } from "./hooks/use-theme";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/skills" component={SkillsPage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/contact" component={ContactPage} />
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Router />
        </Layout>
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
