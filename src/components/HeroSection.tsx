import { motion } from 'framer-motion';
import { Package, Shield, Zap, Terminal, Cpu, GitBranch } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-8">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan text-xs font-medium mb-6"
      >
        <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
        Experimental Feature • Architecture Extension
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
      >
        NexaPack{' '}
        <span className="gradient-text">Executable Runtime</span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-nexa-300 max-w-3xl mb-8 leading-relaxed"
      >
        A cross-platform executable-packing capability that allows supported programs to be launched
        without manual extraction. Integrating with the existing NexaPack C++20 codebase, archive format,
        codecs, CLI, security model, and benchmark harness.
      </motion.p>

      {/* Platform badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="flex flex-wrap gap-3 mb-12"
      >
        <span className="px-3 py-1.5 rounded-lg bg-nexa-700 border border-nexa-600 text-sm text-nexa-200">
          🪟 Windows PE x86-64
        </span>
        <span className="px-3 py-1.5 rounded-lg bg-nexa-700 border border-nexa-600 text-sm text-nexa-200">
          🐧 Linux ELF x86-64
        </span>
        <span className="px-3 py-1.5 rounded-lg bg-nexa-700 border border-nexa-600 text-sm text-nexa-300 opacity-60">
          🔜 ARM64 (Future)
        </span>
      </motion.div>

      {/* Product goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {[
          { icon: Package, title: 'Reduce Distribution Size', desc: 'Compress executables for smaller on-disk footprint' },
          { icon: Shield, title: 'Fail Safely', desc: 'Graceful failure with actionable diagnostics' },
          { icon: Zap, title: 'No Manual Extraction', desc: 'Launch programs directly from packed wrappers' },
          { icon: Terminal, title: 'Bounded Latency', desc: 'Measurable and bounded startup performance' },
          { icon: Cpu, title: 'Memory Efficient', desc: 'Controlled runtime memory consumption' },
          { icon: GitBranch, title: 'Transparent & Auditable', desc: 'Compression feature, not stealth or evasion' },
        ].map((goal, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 + i * 0.1 }}
            className="section-card rounded-xl p-4 hover:border-accent-cyan/30 transition-colors"
          >
            <goal.icon size={20} className="text-accent-cyan mb-2" />
            <h3 className="text-sm font-semibold text-white mb-1">{goal.title}</h3>
            <p className="text-xs text-nexa-400">{goal.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
