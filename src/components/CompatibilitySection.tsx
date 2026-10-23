import { AlertTriangle, CheckCircle2, XCircle, FileCode } from 'lucide-react';

export default function CompatibilitySection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Binary Compatibility</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        An explicit binary-format detection layer determines supported inputs. File extensions are not treated
        as proof of executable format. The original executable payload is preserved byte-for-byte.
      </p>

      {/* Supported formats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="section-card rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🪟</span>
            <h3 className="text-lg font-semibold text-white">Windows PE</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 size={14} className="text-accent-green" />
              <span className="text-nexa-200">PE x86-64 executables</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <XCircle size={14} className="text-accent-red" />
              <span className="text-nexa-400">DLLs / shared libraries</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <XCircle size={14} className="text-accent-red" />
              <span className="text-nexa-400">ARM64 (future milestone)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <XCircle size={14} className="text-accent-red" />
              <span className="text-nexa-400">32-bit x86</span>
            </div>
          </div>
        </div>

        <div className="section-card rounded-xl p-5">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-2xl">🐧</span>
            <h3 className="text-lg font-semibold text-white">Linux ELF</h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 size={14} className="text-accent-green" />
              <span className="text-nexa-200">ELF x86-64 executables</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle2 size={14} className="text-accent-green" />
              <span className="text-nexa-200">Static and dynamic linking</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <XCircle size={14} className="text-accent-red" />
              <span className="text-nexa-400">Shared objects (.so)</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <XCircle size={14} className="text-accent-red" />
              <span className="text-nexa-400">ARM64 (future milestone)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Special handling cases */}
      <div className="section-card rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <AlertTriangle size={18} className="text-accent-amber" />
          Cases Requiring Special Handling or Explicit Rejection
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Unsupported CPU architectures or binary formats',
            'DLLs and shared libraries (not standalone programs)',
            'Executables with unsupported dependencies',
            'Scripts requiring an interpreter or shebang',
            'Programs dependent on installation directory',
            'Programs locating resources relative to executable path',
            'Programs requiring adjacent files or plugins',
            'Executables depending on file metadata or disk identity',
            'Signed binaries subject to application-control policies',
            'Files whose representation cannot be preserved exactly',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-nexa-300">
              <span className="text-accent-amber mt-0.5">•</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Integrity guarantee */}
      <div className="section-card rounded-xl p-5 border-accent-green/20">
        <div className="flex items-start gap-3">
          <CheckCircle2 size={20} className="text-accent-green flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-accent-green mb-2">Byte-for-Byte Integrity</h4>
            <p className="text-sm text-nexa-300">
              The original executable payload is preserved byte-for-byte. Its size and cryptographic digest are
              recorded and the restored file is verified against both. The runtime wrapper is a new executable
              and must not be represented as byte-identical to the original program.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
