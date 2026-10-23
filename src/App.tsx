import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Package, Shield, Terminal, Cpu, Layers, BookOpen,
  Menu, X, FileCode, Target, Bug, Zap
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import HeroSection from './components/HeroSection';
import ArchitectureSection from './components/ArchitectureSection';
import StrategiesSection from './components/StrategiesSection';
import CLSection from './components/CLISection';
import SecuritySection from './components/SecuritySection';
import ModulesSection from './components/ModulesSection';
import MilestonesSection from './components/MilestonesSection';
import TestingSection from './components/TestingSection';
import ReferencesSection from './components/ReferencesSection';
import CompatibilitySection from './components/CompatibilitySection';

const sections = [
  { id: 'overview', label: 'Overview', icon: Package },
  { id: 'architecture', label: 'Architecture', icon: Layers },
  { id: 'strategies', label: 'Execution Strategies', icon: Zap },
  { id: 'compatibility', label: 'Binary Compatibility', icon: FileCode },
  { id: 'cli', label: 'CLI Reference', icon: Terminal },
  { id: 'security', label: 'Security Model', icon: Shield },
  { id: 'modules', label: 'Code Organization', icon: Cpu },
  { id: 'testing', label: 'Testing', icon: Bug },
  { id: 'milestones', label: 'Milestones', icon: Target },
  { id: 'references', label: 'References', icon: BookOpen },
];

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const { offsetTop, offsetHeight } = el;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Mobile menu button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-nexa-700 border border-nexa-600"
      >
        {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <Sidebar
        sections={sections}
        activeSection={activeSection}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* Main content */}
      <main className="flex-1 lg:ml-72 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div id="overview">
              <HeroSection />
            </div>

            <div id="architecture" className="mt-20">
              <ArchitectureSection />
            </div>

            <div id="strategies" className="mt-20">
              <StrategiesSection />
            </div>

            <div id="compatibility" className="mt-20">
              <CompatibilitySection />
            </div>

            <div id="cli" className="mt-20">
              <CLSection />
            </div>

            <div id="security" className="mt-20">
              <SecuritySection />
            </div>

            <div id="modules" className="mt-20">
              <ModulesSection />
            </div>

            <div id="testing" className="mt-20">
              <TestingSection />
            </div>

            <div id="milestones" className="mt-20">
              <MilestonesSection />
            </div>

            <div id="references" className="mt-20">
              <ReferencesSection />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
