import { Shield, Lock, AlertTriangle, Eye, CheckCircle2 } from 'lucide-react';

export default function SecuritySection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Security Model</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        Every packed file is treated as potentially malformed or hostile. The security model defines
        what is mitigated, what is delegated to the operating system, and what remains unresolved.
      </p>

      {/* Pre-execution checks */}
      <div className="section-card rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Shield size={18} className="text-accent-cyan" />
          Pre-Execution Validation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {[
            'Validate all header fields, offsets, lengths, codec identifiers',
            'Reject truncated, overlapping, or out-of-range payload regions',
            'Enforce decompression limits and memory budgets',
            'Verify payload integrity before launching',
            'Prevent path traversal and unsafe temp-file creation',
            'Avoid following attacker-controlled symlinks',
            'Use atomic creation and restrictive permissions',
            'Prevent unsafe replacement of existing files',
            'Avoid untrusted env vars influencing sensitive components',
            'Ensure failures do not leave partial executables',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-nexa-300">
              <CheckCircle2 size={14} className="text-accent-green flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Signature and trust */}
      <div className="section-card rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Lock size={18} className="text-accent-purple" />
          Signature, Trust & Distribution
        </h3>
        <div className="space-y-3">
          <div className="p-3 rounded-lg bg-nexa-700/50 border border-nexa-600">
            <p className="text-sm text-nexa-200 font-medium mb-1">Four distinct trust boundaries:</p>
            <ol className="list-decimal list-inside space-y-1 text-sm text-nexa-300">
              <li>Integrity of the compressed payload</li>
              <li>Authenticity of the NexaPack wrapper</li>
              <li>The original executable's digital signature</li>
              <li>The signature of the restored executable</li>
            </ol>
          </div>
          <div className="p-3 rounded-lg bg-accent-amber/5 border border-accent-amber/20">
            <p className="text-sm text-nexa-300">
              <span className="text-accent-amber font-medium">Important:</span> A valid payload digest does not establish
              publisher identity. Cryptographic digest is for corruption detection; digital signatures are for
              authenticity. Compression or wrapping may affect code-signing validity and antivirus reputation.
            </p>
          </div>
        </div>
      </div>

      {/* Threat model */}
      <div className="section-card rounded-xl p-6 mb-6">
        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
          <Eye size={18} className="text-accent-amber" />
          Threat Model
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-lg bg-accent-green/5 border border-accent-green/20">
            <h4 className="text-sm font-semibold text-accent-green mb-2">Mitigated</h4>
            <ul className="space-y-1 text-xs text-nexa-300">
              <li>• Payload corruption detection</li>
              <li>• Decompression bomb prevention</li>
              <li>• Path traversal attacks</li>
              <li>• TOCTOU on temp files</li>
              <li>• Integer overflow in parsing</li>
              <li>• Partial payload execution</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-accent-amber/5 border border-accent-amber/20">
            <h4 className="text-sm font-semibold text-accent-amber mb-2">Delegated to OS</h4>
            <ul className="space-y-1 text-xs text-nexa-300">
              <li>• Process isolation</li>
              <li>• Memory protection</li>
              <li>• File system permissions</li>
              <li>• Network security</li>
              <li>• User authentication</li>
              <li>• ASLR / DEP</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-accent-red/5 border border-accent-red/20">
            <h4 className="text-sm font-semibold text-accent-red mb-2">Unresolved</h4>
            <ul className="space-y-1 text-xs text-nexa-300">
              <li>• Malicious payload content</li>
              <li>• Runtime dependency attacks</li>
              <li>• Side-channel during decompression</li>
              <li>• Original binary vulnerabilities</li>
              <li>• Signature bypass (OS-level)</li>
              <li>• Supply-chain compromise</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Explicit exclusions */}
      <div className="section-card rounded-xl p-5 border-accent-red/20">
        <div className="flex items-start gap-3">
          <AlertTriangle size={20} className="text-accent-red flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm font-semibold text-accent-red mb-2">Explicit Security Exclusions</h4>
            <p className="text-sm text-nexa-300">
              The implementation does not attempt to bypass antivirus, EDR, application control, code-signing
              verification, or operating-system security policy. Encryption or obfuscation is not used to
              conceal the payload. A checksum check does not constitute a malware scan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
