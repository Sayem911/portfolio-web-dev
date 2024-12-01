import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Github, Linkedin } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import AIImageGenPage from './pages/AIImageGenPage';
import CodeCollabPage from './pages/CodeCollabPage';
import ProductCustomizerPage from './pages/ProductCustomizerPage';
import WeatherDashboardPage from './pages/WeatherDashboardPage';
import DevNotePage from './pages/DevNotePage';
import TaskFlowPage from './pages/TaskFlowPage';
import DashboardPage from './pages/DashboardPage';
import EcommercePage from './pages/EcommercePage';
import SocialDashboardPage from './pages/SocialDashboardPage';
import RealEstatePage from './pages/RealEstatePage';
import FitnessTrackerPage from './pages/FitnessTrackerPage';
import RecipeManagerPage from './pages/RecipeManagerPage';
import BudgetTrackerPage from './pages/BudgetTrackerPage';
import LearningPlatformPage from './pages/LearningPlatformPage';
import JobBoardPage from './pages/JobBoardPage';
import EventManagerPage from './pages/EventManagerPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
          <nav className="fixed w-full bg-gray-900/80 backdrop-blur-sm z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Portfolio
              </a>
              <div className="hidden md:flex space-x-8">
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </nav>

          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>

          <footer className="bg-gray-900 text-gray-400 py-8">
            <div className="container mx-auto px-4 text-center">
              <p>© 2024 Portfolio. Built with React & TypeScript.</p>
            </div>
          </footer>
        </div>
      } />
      <Route path="/ai-chat" element={<AIImageGenPage />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/ecommerce" element={<EcommercePage />} />
      <Route path="/code-collab" element={<CodeCollabPage />} />
      <Route path="/product-customizer" element={<ProductCustomizerPage />} />
      <Route path="/weather-dashboard" element={<WeatherDashboardPage />} />
      <Route path="/dev-note" element={<DevNotePage />} />
      <Route path="/task-flow" element={<TaskFlowPage />} />
      <Route path="/social-dashboard" element={<SocialDashboardPage />} />
      <Route path="/real-estate" element={<RealEstatePage />} />
      <Route path="/fitness" element={<FitnessTrackerPage />} />
      <Route path="/recipe" element={<RecipeManagerPage />} />
      <Route path="/budget" element={<BudgetTrackerPage />} />
      <Route path="/learning" element={<LearningPlatformPage />} />
      <Route path="/jobs" element={<JobBoardPage />} />
      <Route path="/events" element={<EventManagerPage />} />
    </Routes>
  );
};

export default App;