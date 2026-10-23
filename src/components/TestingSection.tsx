import { Bug, Shield, Cpu, Server } from 'lucide-react';

interface TestCategory {
  title: string;
  icon: any;
  color: string;
  tests: string[];
}

export default function TestingSection() {
  const categories: TestCategory[] = [
    {
      title: 'Payload Integrity',
      icon: Shield,
      color: 'accent-cyan',
      tests: [
        'Empty or invalid input',
        'Small and large executable payloads',
        'Random and high-entropy content',
        'Payload corruption and truncation',
        'Invalid manifest fields and offsets',
        'Wrong decompressed size or digest',
        'Unsupported codec and format versions',
      ],
    },
    {
      title: 'Runtime Behavior',
      icon: Cpu,
      color: 'accent-green',
      tests: [
        'Harmless test program prints arguments',
        'Spaces, quotes, Unicode, empty arguments',
        'Long argument lists',
        'Exit-code propagation',
        'Environment and working-directory checks',
        'Standard input and output',
        'Multiple simultaneous launches',
        'Cleanup after normal exit and failure',
        'Read-only source directories',
        'Temporary-directory permission failures',
        'Disk-full and interrupted decompression',
      ],
    },
    {
      title: 'Platform Compatibility',
      icon: Server,
      color: 'accent-purple',
      tests: [
        'Windows PE x86-64 integration tests',
        'Linux ELF x86-64 integration tests',
        'Static and dynamic ELF samples',
        'Unsupported binary types rejection',
        'Architecture mismatch handling',
        'Signature verification (where available)',
      ],
    },
    {
      title: 'Security',
      icon: Bug,
      color: 'accent-red',
      tests: [
        'Fuzz manifest and container parser',
        'Integer-overflow and bounds-checking paths',
        'AddressSanitizer and UBSan testing',
        'Malformed archives and decompression bombs',
        'Corrupted payloads never launched',
        'Failure paths do not overwrite files',
      ],
    },
  ];

  const colorMap: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    'accent-cyan': { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/20', text: 'text-accent-cyan', dot: 'bg-accent-cyan' },
    'accent-green': { bg: 'bg-accent-green/10', border: 'border-accent-green/20', text: 'text-accent-green', dot: 'bg-accent-green' },
    'accent-purple': { bg: 'bg-accent-purple/10', border: 'border-accent-purple/20', text: 'text-accent-purple', dot: 'bg-accent-purple' },
    'accent-red': { bg: 'bg-accent-red/10', border: 'border-accent-red/20', text: 'text-accent-red', dot: 'bg-accent-red' },
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Testing Strategy</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        Automated tests cover payload integrity, runtime behavior, platform compatibility, and security.
        Small, harmless fixtures are built specifically for integration tests — real third-party executables
        are not the only test suite.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat, i) => {
          const colors = colorMap[cat.color];
          const Icon = cat.icon;
          return (
            <div key={i} className={`section-card rounded-xl p-5`}>
              <div className="flex items-center gap-2 mb-4">
                <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center`}>
                  <Icon size={16} className={colors.text} />
                </div>
                <h3 className="text-base font-semibold text-white">{cat.title}</h3>
              </div>
              <div className="space-y-1.5">
                {cat.tests.map((test, j) => (
                  <div key={j} className="flex items-start gap-2 text-sm text-nexa-300">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} flex-shrink-0 mt-1.5`} />
                    <span>{test}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Benchmark requirements */}
      <div className="mt-8 section-card rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <span className="text-xl">📊</span>
          Benchmark Requirements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            'Original vs wrapper size comparison',
            'Compression ratio and bytes saved',
            'Packing time measurement',
            'Startup latency',
            'Time to first application output',
            'Total runtime on representative workloads',
            'Peak resident memory',
            'Temporary storage usage',
            'Decompression throughput',
            'Repeated-launch behavior',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-sm text-nexa-300">
              <span className="text-accent-amber">▸</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 rounded-lg bg-nexa-700/50 border border-nexa-600">
          <p className="text-xs text-nexa-300">
            <span className="text-accent-amber font-medium">Methodology:</span> Record hardware, OS, compiler,
            tool versions, test inputs, and raw measurements. Use multiple runs, medians, and dispersion statistics.
            Do not invent results or publish single best-case runs as representative.
          </p>
        </div>
      </div>
    </section>
  );
}
