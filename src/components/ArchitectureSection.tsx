import { motion } from 'framer-motion';
import { ArrowRight, Box, FileCode, Lock, Shield } from 'lucide-react';

export default function ArchitectureSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Architecture Overview</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        The executable packing feature integrates with the existing NexaPack codebase through a common
        interface that supports multiple execution strategies. The critical architectural decision is to
        avoid modifying arbitrary PE/ELF internals or implementing a custom in-memory loader initially.
      </p>

      {/* Architecture diagram */}
      <div className="section-card rounded-xl p-6 mb-8 glow-border">
        <h3 className="text-lg font-semibold text-white mb-6">System Architecture</h3>
        
        <div className="space-y-4">
          {/* Input Layer */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-40 text-right">
              <span className="text-xs font-medium text-accent-cyan uppercase tracking-wider">Input</span>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="px-4 py-3 rounded-lg bg-nexa-700 border border-nexa-600 flex items-center gap-2">
                <FileCode size={16} className="text-accent-amber" />
                <span className="text-sm text-nexa-200">PE / ELF Executable</span>
              </div>
              <ArrowRight size={16} className="text-nexa-500" />
              <div className="px-4 py-3 rounded-lg bg-nexa-700 border border-nexa-600 flex items-center gap-2">
                <Box size={16} className="text-accent-purple" />
                <span className="text-sm text-nexa-200">Format Detector</span>
              </div>
            </div>
          </div>

          {/* Processing Layer */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-40 text-right">
              <span className="text-xs font-medium text-accent-blue uppercase tracking-wider">Processing</span>
            </div>
            <div className="flex-1 flex items-center gap-2 flex-wrap">
              <div className="px-4 py-3 rounded-lg bg-nexa-700 border border-nexa-600 flex items-center gap-2">
                <Shield size={16} className="text-accent-green" />
                <span className="text-sm text-nexa-200">Payload Manifest</span>
              </div>
              <ArrowRight size={16} className="text-nexa-500" />
              <div className="px-4 py-3 rounded-lg bg-nexa-700 border border-nexa-600 flex items-center gap-2">
                <Box size={16} className="text-accent-cyan" />
                <span className="text-sm text-nexa-200">Codec (Zstd/LZ4/Store)</span>
              </div>
              <ArrowRight size={16} className="text-nexa-500" />
              <div className="px-4 py-3 rounded-lg bg-nexa-700 border border-nexa-600 flex items-center gap-2">
                <Lock size={16} className="text-accent-red" />
                <span className="text-sm text-nexa-200">Integrity Digest</span>
              </div>
            </div>
          </div>

          {/* Output Layer */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-40 text-right">
              <span className="text-xs font-medium text-accent-green uppercase tracking-wider">Output</span>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="px-4 py-3 rounded-lg bg-accent-cyan/10 border border-accent-cyan/30 flex items-center gap-2">
                <Package size={16} className="text-accent-cyan" />
                <span className="text-sm text-white font-medium">Packed Wrapper Executable</span>
              </div>
            </div>
          </div>

          {/* Runtime Layer */}
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-40 text-right">
              <span className="text-xs font-medium text-accent-purple uppercase tracking-wider">Runtime</span>
            </div>
            <div className="flex-1 flex items-center gap-2 flex-wrap">
              <div className="px-4 py-3 rounded-lg bg-nexa-700 border border-accent-purple/30 flex items-center gap-2">
                <span className="text-sm text-nexa-200">Strategy A: Temp Materialization</span>
              </div>
              <div className="px-4 py-3 rounded-lg bg-nexa-700 border border-accent-amber/30 flex items-center gap-2 opacity-70">
                <span className="text-sm text-nexa-300">Strategy B: Memory-backed (Experimental)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key decisions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="section-card rounded-xl p-5">
          <h4 className="text-sm font-semibold text-accent-green mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-green" />
            Design Principles
          </h4>
          <ul className="space-y-2 text-sm text-nexa-300">
            <li>• Common interface for multiple execution strategies</li>
            <li>• Reuse existing NexaPack codec abstraction</li>
            <li>• Platform-specific code behind narrow interfaces</li>
            <li>• Fail closed with actionable diagnostics</li>
            <li>• Never execute unverified payloads</li>
          </ul>
        </div>

        <div className="section-card rounded-xl p-5">
          <h4 className="text-sm font-semibold text-accent-red mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-red" />
            Explicit Non-Goals
          </h4>
          <ul className="space-y-2 text-sm text-nexa-300">
            <li>• Custom in-memory PE loader (initial release)</li>
            <li>• Process injection or stealth loading</li>
            <li>• Security-product bypasses</li>
            <li>• Anti-analysis or obfuscation</li>
            <li>• Universal in-memory execution</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

function Package({ size, className }: { size?: number; className?: string }) {
  return (
    <svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16.5 9.4 7.55 4.24" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.29 7 12 12 20.71 7" /><line x1="12" y1="22" x2="12" y2="12" />
    </svg>
  );
}
