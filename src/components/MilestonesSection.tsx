import { Target, CheckCircle2, Circle, Clock } from 'lucide-react';

interface Milestone {
  id: number;
  title: string;
  description: string;
  status: 'complete' | 'active' | 'pending';
  tasks: string[];
}

export default function MilestonesSection() {
  const milestones: Milestone[] = [
    {
      id: 1,
      title: 'Research & Analysis',
      description: 'Study existing packers, binary formats, runtime constraints, licenses, and threat models.',
      status: 'pending',
      tasks: ['UPX source and license review', 'PE/ELF format documentation', 'memfd_create/execve research', 'Codec API documentation', 'Threat model draft'],
    },
    {
      id: 2,
      title: 'Manifest & Round-trip Prototype',
      description: 'Implement cross-platform manifest, payload verification, and pack/unpack prototype.',
      status: 'pending',
      tasks: ['Payload manifest format', 'Codec integration', 'Integrity digest verification', 'Round-trip pack/unpack', 'Basic CLI commands'],
    },
    {
      id: 3,
      title: 'Windows Launcher',
      description: 'Implement and test Windows temporary-materialization launcher for PE subset.',
      status: 'pending',
      tasks: ['PE format detection', 'Secure temp file creation', 'Process creation via native API', 'Argument forwarding', 'Exit code propagation'],
    },
    {
      id: 4,
      title: 'Linux Launcher',
      description: 'Implement and test Linux temporary-materialization launcher for ELF subset.',
      status: 'pending',
      tasks: ['ELF format detection', 'Secure temp file creation', 'execve-based launch', 'Signal forwarding', 'Cleanup on exit'],
    },
    {
      id: 5,
      title: 'Integration & CLI',
      description: 'Integrate codec selection, resource limits, runtime diagnostics, and CLI commands.',
      status: 'pending',
      tasks: ['Full CLI implementation', 'Resource limit enforcement', 'Runtime diagnostics', 'Error reporting', 'Documentation sync'],
    },
    {
      id: 6,
      title: 'Security & CI',
      description: 'Complete security tests, fuzzing, cross-platform CI, and reproducible benchmarks.',
      status: 'pending',
      tasks: ['Manifest fuzzing', 'ASan/UBSan testing', 'Cross-platform CI', 'Benchmark automation', 'Security audit'],
    },
    {
      id: 7,
      title: 'Memory-backed Experiment',
      description: 'Investigate Linux memory-backed execution as optional experimental backend.',
      status: 'pending',
      tasks: ['memfd_create implementation', 'File seal configuration', 'Compatibility testing', 'Fallback mechanism', 'Performance comparison'],
    },
    {
      id: 8,
      title: 'Documentation & Publication',
      description: 'Publish compatibility tables, threat model, limitations, usage examples, and benchmarks.',
      status: 'pending',
      tasks: ['Compatibility tables', 'Threat model document', 'Usage examples', 'Benchmark evidence', 'License review'],
    },
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Milestones</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        Milestones are not marked complete until code, tests, documentation, and verification evidence exist.
        Each milestone builds on the previous one.
      </p>

      <div className="space-y-4">
        {milestones.map((ms) => (
          <div
            key={ms.id}
            className={`section-card rounded-xl p-5 ${ms.status === 'active' ? 'milestone-active border-accent-cyan/40' : ''}`}
          >
            <div className="flex items-start gap-4">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                ms.status === 'complete' ? 'bg-accent-green/20' :
                ms.status === 'active' ? 'bg-accent-cyan/20' :
                'bg-nexa-700'
              }`}>
                {ms.status === 'complete' ? (
                  <CheckCircle2 size={18} className="text-accent-green" />
                ) : ms.status === 'active' ? (
                  <Clock size={18} className="text-accent-cyan" />
                ) : (
                  <Circle size={18} className="text-nexa-500" />
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-mono text-nexa-400">M{ms.id}</span>
                  <h3 className="text-base font-semibold text-white">{ms.title}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    ms.status === 'complete' ? 'bg-accent-green/20 text-accent-green' :
                    ms.status === 'active' ? 'bg-accent-cyan/20 text-accent-cyan' :
                    'bg-nexa-700 text-nexa-400'
                  }`}>
                    {ms.status === 'complete' ? 'Complete' : ms.status === 'active' ? 'In Progress' : 'Pending'}
                  </span>
                </div>
                <p className="text-sm text-nexa-300 mb-3">{ms.description}</p>
                <div className="flex flex-wrap gap-2">
                  {ms.tasks.map((task, i) => (
                    <span key={i} className="text-xs px-2 py-1 rounded bg-nexa-700 text-nexa-300 border border-nexa-600">
                      {task}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
