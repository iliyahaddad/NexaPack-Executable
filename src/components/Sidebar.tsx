import { motion, AnimatePresence } from 'framer-motion';
import { Package } from 'lucide-react';

interface Section {
  id: string;
  label: string;
  icon: any;
}

interface SidebarProps {
  sections: Section[];
  activeSection: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ sections, activeSection, isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/60 z-30"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-nexa-800 border-r border-nexa-600 z-40 transition-transform duration-300 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-nexa-600">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-blue flex items-center justify-center">
                <Package size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white">NexaPack</h1>
                <p className="text-xs text-nexa-400">Executable Runtime</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4 overflow-y-auto">
            <ul className="space-y-1 px-3">
              {sections.map((section) => {
                const Icon = section.icon;
                const isActive = activeSection === section.id;
                return (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      onClick={onClose}
                      className={`nav-link flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm border-l-2 border-transparent ${
                        isActive
                          ? 'active font-medium'
                          : 'text-nexa-300 hover:text-white'
                      }`}
                    >
                      <Icon size={16} />
                      {section.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-nexa-600">
            <div className="text-xs text-nexa-400 space-y-1">
              <p>Version 0.1.0-alpha</p>
              <p>C++20 • Cross-platform</p>
              <p className="text-accent-cyan">Experimental</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
