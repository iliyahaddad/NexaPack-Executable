import { ExternalLink, BookOpen, Scale } from 'lucide-react';

interface Reference {
  title: string;
  url: string;
  description: string;
  category: string;
}

export default function ReferencesSection() {
  const references: Reference[] = [
    {
      title: 'UPX — Ultimate Packer for eXecutables',
      url: 'https://github.com/upx/upx',
      description: 'Source, documentation, supported formats, and GPL license. Used as a research baseline for executable packing strategies.',
      category: 'Research Baseline',
    },
    {
      title: 'Zstandard (zstd)',
      url: 'https://github.com/facebook/zstd',
      description: 'Fast real-time compression algorithm. BSD licensed. Used as a primary codec for payload compression.',
      category: 'Codec',
    },
    {
      title: 'LZ4 — Extremely Fast Compression',
      url: 'https://github.com/lz4/lz4',
      description: 'High-speed compression/decompression. BSD licensed. Used where speed is prioritized over ratio.',
      category: 'Codec',
    },
    {
      title: 'Microsoft PE Format',
      url: 'https://learn.microsoft.com/en-us/windows/win32/debug/pe-format',
      description: 'Official documentation for the Portable Executable format including Authenticode signing.',
      category: 'Binary Format',
    },
    {
      title: 'memfd_create(2)',
      url: 'https://man7.org/linux/man-pages/man2/memfd_create.2.html',
      description: 'Linux system call for creating anonymous memory-backed files. Used in Strategy B investigation.',
      category: 'Linux API',
    },
    {
      title: 'execve(2)',
      url: 'https://man7.org/linux/man-pages/man2/execve.2.html',
      description: 'Linux system call for executing programs. Core mechanism for launching restored executables.',
      category: 'Linux API',
    },
  ];

  const categories = ['Research Baseline', 'Codec', 'Binary Format', 'Linux API'];

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">References & Licensing</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        Upstream projects and primary documentation reviewed before implementing executable-specific logic.
        Dependencies and licenses are reviewed before bundling or redistributing third-party components.
      </p>

      {/* Reference cards */}
      <div className="space-y-3 mb-8">
        {references.map((ref, i) => (
          <a
            key={i}
            href={ref.url}
            target="_blank"
            rel="noopener noreferrer"
            className="section-card rounded-xl p-4 flex items-start gap-4 hover:border-accent-cyan/30 transition-colors group"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-nexa-700 flex items-center justify-center group-hover:bg-accent-cyan/10 transition-colors">
              <ExternalLink size={16} className="text-nexa-400 group-hover:text-accent-cyan transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-sm font-semibold text-white truncate">{ref.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded bg-nexa-700 text-nexa-400 flex-shrink-0">
                  {ref.category}
                </span>
              </div>
              <p className="text-xs text-nexa-400 mb-1">{ref.description}</p>
              <p className="text-xs text-accent-cyan truncate">{ref.url}</p>
            </div>
          </a>
        ))}
      </div>

      {/* Documentation outputs */}
      <div className="section-card rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <BookOpen size={18} className="text-accent-purple" />
          Documentation Outputs
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            'docs/executable-packing-research.md',
            'docs/executable-runtime-design.md',
            'docs/executable-security-model.md',
            'docs/executable-compatibility.md',
            'docs/executable-benchmarks.md',
          ].map((doc, i) => (
            <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-nexa-700/50 border border-nexa-600">
              <span className="text-accent-purple text-xs">📄</span>
              <code className="text-xs text-nexa-200">{doc}</code>
            </div>
          ))}
        </div>
      </div>

      {/* License notice */}
      <div className="section-card rounded-xl p-5 border-accent-amber/20">
        <div className="flex items-start gap-3">
          <Scale size={20} className="text-accent-amber flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-accent-amber mb-2">License Obligations</h4>
            <p className="text-sm text-nexa-300">
              Dependencies and their licenses are reviewed before bundling or redistributing third-party components.
              Implementation code is not copied from other projects without verifying license obligations.
              UPX's GPL license is noted as a research baseline; no GPL code is incorporated into NexaPack.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 pt-8 border-t border-nexa-700 text-center">
        <p className="text-sm text-nexa-400">
          NexaPack Executable Runtime — Architecture Extension Specification
        </p>
        <p className="text-xs text-nexa-500 mt-2">
          C++20 • Cross-platform • Experimental Feature
        </p>
      </div>
    </section>
  );
}
