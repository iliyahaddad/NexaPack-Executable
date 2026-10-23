import { useState } from 'react';
import { Terminal, Copy, Check } from 'lucide-react';

interface Command {
  name: string;
  description: string;
  syntax: string;
}

interface Option {
  flag: string;
  description: string;
  type?: string;
}

export default function CLISection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const commands: Command[] = [
    { name: 'pack-executable', description: 'Pack an executable into a self-contained wrapper', syntax: 'npx pack-executable <input> --output <wrapper>' },
    { name: 'inspect-executable', description: 'Display metadata about a packed wrapper', syntax: 'npx inspect-executable <wrapper>' },
    { name: 'verify-executable', description: 'Verify integrity of a packed wrapper', syntax: 'npx verify-executable <wrapper>' },
    { name: 'unpack-executable', description: 'Extract the original executable from a wrapper', syntax: 'npx unpack-executable <wrapper> --output <file>' },
    { name: 'run-executable', description: 'Launch a packed wrapper with forwarded arguments', syntax: 'npx run-executable <wrapper> -- <arguments...>' },
  ];

  const options: Option[] = [
    { flag: '--platform', description: 'Target platform', type: 'windows|linux' },
    { flag: '--arch', description: 'Target architecture', type: 'x86_64' },
    { flag: '--codec', description: 'Compression codec', type: 'store|zstd|lz4' },
    { flag: '--level', description: 'Compression level', type: '<value>' },
    { flag: '--strategy', description: 'Execution strategy', type: 'temp-file|memory-experimental' },
    { flag: '--max-output-size', description: 'Maximum output size', type: '<bytes>' },
    { flag: '--memory-limit', description: 'Runtime memory limit', type: '<bytes>' },
    { flag: '--allow-fallback', description: 'Allow fallback to Strategy A', type: '' },
    { flag: '--verify-signature', description: 'Verify original executable signature', type: '' },
    { flag: '--json', description: 'Output in JSON format', type: '' },
    { flag: '--verbose', description: 'Enable verbose diagnostics', type: '' },
    { flag: '--help', description: 'Show command help', type: '' },
  ];

  const copyToClipboard = (text: string, idx: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx(null), 2000);
    });
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">CLI Reference</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        The executable packing feature integrates into the existing <code className="px-1.5 py-0.5 rounded bg-nexa-700 text-accent-cyan text-sm">npx</code> CLI.
        Commands are design targets adapted to the repository's parser and naming conventions.
      </p>

      {/* Commands */}
      <div className="space-y-3 mb-10">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Terminal size={18} className="text-accent-cyan" />
          Commands
        </h3>
        {commands.map((cmd, i) => (
          <div key={i} className="section-card rounded-xl p-4 hover:border-accent-cyan/30 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <code className="text-sm font-semibold text-accent-cyan">{cmd.name}</code>
                </div>
                <p className="text-sm text-nexa-300 mb-2">{cmd.description}</p>
                <div className="relative">
                  <pre className="code-block px-3 py-2 rounded-lg bg-nexa-900 border border-nexa-600 text-nexa-200 overflow-x-auto">
                    {cmd.syntax}
                  </pre>
                  <button
                    onClick={() => copyToClipboard(cmd.syntax, i)}
                    className="absolute top-2 right-2 p-1.5 rounded bg-nexa-700 hover:bg-nexa-600 transition-colors"
                  >
                    {copiedIdx === i ? <Check size={12} className="text-accent-green" /> : <Copy size={12} className="text-nexa-400" />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Options */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Options</h3>
        <div className="section-card rounded-xl overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-nexa-600">
                <th className="text-left px-4 py-3 text-nexa-400 font-medium">Flag</th>
                <th className="text-left px-4 py-3 text-nexa-400 font-medium">Description</th>
                <th className="text-left px-4 py-3 text-nexa-400 font-medium hidden sm:table-cell">Type</th>
              </tr>
            </thead>
            <tbody>
              {options.map((opt, i) => (
                <tr key={i} className="border-b border-nexa-700/50 hover:bg-nexa-700/30">
                  <td className="px-4 py-3">
                    <code className="text-accent-cyan text-xs">{opt.flag}</code>
                  </td>
                  <td className="px-4 py-3 text-nexa-300">{opt.description}</td>
                  <td className="px-4 py-3 hidden sm:table-cell">
                    {opt.type && <code className="text-xs text-nexa-400 bg-nexa-700 px-1.5 py-0.5 rounded">{opt.type}</code>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Example workflow */}
      <div className="mt-8 section-card rounded-xl p-6">
        <h3 className="text-sm font-semibold text-white mb-3">Example Workflow</h3>
        <pre className="code-block text-nexa-200 overflow-x-auto">
{`# Pack a Linux executable with Zstandard compression
$ npx pack-executable ./my-program --output ./my-program.packed \\
    --platform linux --arch x86_64 --codec zstd --level 19

# Inspect the packed wrapper
$ npx inspect-executable ./my-program.packed --json

# Verify integrity
$ npx verify-executable ./my-program.packed

# Run with arguments forwarded
$ npx run-executable ./my-program.packed -- --verbose --config /etc/app.conf

# Unpack to restore original
$ npx unpack-executable ./my-program.packed --output ./my-program-restored`}
        </pre>
      </div>
    </section>
  );
}
