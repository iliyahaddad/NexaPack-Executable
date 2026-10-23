import { Folder, FileCode } from 'lucide-react';

interface Module {
  name: string;
  description: string;
  platform?: string;
  status: 'core' | 'platform' | 'test' | 'bench';
}

export default function ModulesSection() {
  const modules: Module[] = [
    { name: 'executable/format_detector', description: 'Binary format detection and validation layer', status: 'core' },
    { name: 'executable/payload_manifest', description: 'Versioned manifest parsing and serialization', status: 'core' },
    { name: 'executable/packer', description: 'Pack/unpack orchestration with codec selection', status: 'core' },
    { name: 'executable/runtime_interface', description: 'Common interface for execution strategies', status: 'core' },
    { name: 'executable/temp_materializer', description: 'Secure temporary file creation and management', status: 'core' },
    { name: 'executable/compatibility_policy', description: 'Binary compatibility rules and rejection logic', status: 'core' },
    { name: 'executable/signature_verifier', description: 'Platform signature verification integration', status: 'core' },
    { name: 'executable/windows_runtime', description: 'Windows PE launcher and process creation', platform: 'Windows', status: 'platform' },
    { name: 'executable/linux_runtime', description: 'Linux ELF launcher and process creation', platform: 'Linux', status: 'platform' },
    { name: 'tests/executable', description: 'Integration tests, fixtures, and fuzzing harness', status: 'test' },
    { name: 'benchmarks/executable', description: 'Performance benchmarks and baseline comparisons', status: 'bench' },
  ];

  const statusColors = {
    core: { bg: 'bg-accent-cyan/10', border: 'border-accent-cyan/30', text: 'text-accent-cyan', label: 'Core' },
    platform: { bg: 'bg-accent-purple/10', border: 'border-accent-purple/30', text: 'text-accent-purple', label: 'Platform' },
    test: { bg: 'bg-accent-green/10', border: 'border-accent-green/30', text: 'text-accent-green', label: 'Test' },
    bench: { bg: 'bg-accent-amber/10', border: 'border-accent-amber/30', text: 'text-accent-amber', label: 'Benchmark' },
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Code Organization</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        The feature adapts the existing repository rather than duplicating components. Platform-specific code
        is isolated behind narrow interfaces. Archive container, codecs, integrity primitives, and common
        parsers remain portable.
      </p>

      {/* Module tree */}
      <div className="section-card rounded-xl p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Folder size={18} className="text-accent-cyan" />
          <h3 className="text-lg font-semibold text-white">Module Map</h3>
        </div>

        <div className="space-y-2">
          {modules.map((mod, i) => {
            const colors = statusColors[mod.status];
            return (
              <div
                key={i}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg border ${colors.border} ${colors.bg} hover:opacity-80 transition-opacity`}
              >
                <FileCode size={14} className={colors.text} />
                <code className="text-sm text-nexa-200 flex-1">{mod.name}</code>
                {mod.platform && (
                  <span className="text-xs px-2 py-0.5 rounded bg-nexa-700 text-nexa-300 hidden sm:inline">
                    {mod.platform}
                  </span>
                )}
                <span className={`text-xs px-2 py-0.5 rounded ${colors.bg} ${colors.text} border ${colors.border}`}>
                  {colors.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Design principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="section-card rounded-xl p-5">
          <h4 className="text-sm font-semibold text-accent-green mb-3">Organization Principles</h4>
          <ul className="space-y-2 text-sm text-nexa-300">
            <li>• Adapt existing repository, don't duplicate</li>
            <li>• Platform code behind narrow interfaces</li>
            <li>• Portable archive container and codecs</li>
            <li>• No empty stubs without functionality</li>
            <li>• Modules backed by actual tests</li>
          </ul>
        </div>
        <div className="section-card rounded-xl p-5">
          <h4 className="text-sm font-semibold text-accent-cyan mb-3">Integration Points</h4>
          <ul className="space-y-2 text-sm text-nexa-300">
            <li>• Existing codec abstraction and adaptive planner</li>
            <li>• Archive format and container primitives</li>
            <li>• Integrity and digest infrastructure</li>
            <li>• CLI parser and command dispatch</li>
            <li>• Benchmark harness and reporting</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
