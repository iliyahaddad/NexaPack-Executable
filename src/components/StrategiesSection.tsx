import { motion } from 'framer-motion';
import { CheckCircle2, AlertTriangle, ArrowDown, Shield, Cpu, HardDrive, Zap } from 'lucide-react';

export default function StrategiesSection() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-2">Execution Strategies</h2>
      <p className="text-nexa-400 mb-8 max-w-3xl">
        Two execution strategies are implemented behind a common interface. Strategy A is the default
        compatibility target; Strategy B is an opt-in experimental backend for Linux.
      </p>

      <div className="space-y-8">
        {/* Strategy A */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-card rounded-xl overflow-hidden"
        >
          <div className="px-6 py-4 bg-accent-cyan/10 border-b border-accent-cyan/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
                <HardDrive size={16} className="text-accent-cyan" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Strategy A — Secure Temporary Materialization</h3>
                <p className="text-xs text-accent-cyan">Default • Production-ready target</p>
              </div>
            </div>
            <span className="px-2 py-1 rounded text-xs font-medium bg-accent-green/20 text-accent-green border border-accent-green/30">
              Primary
            </span>
          </div>

          <div className="p-6">
            <p className="text-sm text-nexa-300 mb-4">
              The platform-specific launcher contains a small runtime stub, compressed payload, versioned manifest,
              integrity digest, codec identifier, and optional metadata. At launch, the payload is validated,
              decompressed to a secure temporary file, verified, and executed.
            </p>

            <h4 className="text-sm font-semibold text-white mb-3">Launch Sequence</h4>
            <div className="space-y-2">
              {[
                'Parse and validate embedded manifest (strict size/offset limits)',
                'Verify compressed payload integrity',
                'Decompress into securely created, uniquely named temp file',
                'Enforce decompressed-size and memory limits',
                'Verify exact decompressed size and cryptographic digest',
                'Apply restrictive permissions and ownership controls',
                'Launch restored executable via platform native process API',
                'Preserve args, env, working directory, streams, exit status',
                'Forward termination signals where practical',
                'Clean up temporary artifacts on exit (normal and abnormal)',
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-cyan/20 text-accent-cyan flex items-center justify-center text-xs font-mono">
                    {i + 1}
                  </span>
                  <span className="text-nexa-300">{step}</span>
                </div>
              ))}
            </div>

            <div className="mt-4 p-3 rounded-lg bg-accent-green/5 border border-accent-green/20">
              <div className="flex items-center gap-2 text-accent-green text-sm font-medium mb-1">
                <CheckCircle2 size={14} />
                Key Guarantee
              </div>
              <p className="text-xs text-nexa-300">
                The wrapper never executes a partially decompressed or unverified payload. If secure temporary
                execution is impossible, it fails closed with an actionable diagnostic.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Strategy B */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-card rounded-xl overflow-hidden"
        >
          <div className="px-6 py-4 bg-accent-amber/10 border-b border-accent-amber/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent-amber/20 flex items-center justify-center">
                <Zap size={16} className="text-accent-amber" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Strategy B — Linux Memory-backed Execution</h3>
                <p className="text-xs text-accent-amber">Experimental • Opt-in • Linux only</p>
              </div>
            </div>
            <span className="px-2 py-1 rounded text-xs font-medium bg-accent-amber/20 text-accent-amber border border-accent-amber/30">
              Experimental
            </span>
          </div>

          <div className="p-6">
            <p className="text-sm text-nexa-300 mb-4">
              Investigates Linux <code className="px-1.5 py-0.5 rounded bg-nexa-700 text-accent-cyan text-xs">memfd_create</code>,
              <code className="px-1.5 py-0.5 rounded bg-nexa-700 text-accent-cyan text-xs mx-1">ftruncate</code>,
              file seals, and <code className="px-1.5 py-0.5 rounded bg-nexa-700 text-accent-cyan text-xs">execve</code>-compatible
              execution paths where supported by the kernel and security policy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-nexa-700/50 border border-nexa-600">
                <h5 className="text-xs font-semibold text-accent-green mb-2">Requirements</h5>
                <ul className="space-y-1 text-xs text-nexa-300">
                  <li>• Verify kernel and runtime prerequisites</li>
                  <li>• Test with dynamic and static ELF binaries</li>
                  <li>• Document interpreter/loader limitations</li>
                  <li>• Handle environments that prohibit memory execution</li>
                </ul>
              </div>
              <div className="p-3 rounded-lg bg-nexa-700/50 border border-nexa-600">
                <h5 className="text-xs font-semibold text-accent-red mb-2">Limitations</h5>
                <ul className="space-y-1 text-xs text-nexa-300">
                  <li>• Dynamic loaders may require file-backed paths</li>
                  <li>• Shared library resolution constraints</li>
                  <li>• Security policies may deny memory execution</li>
                  <li>• Not a release requirement until validated</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 rounded-lg bg-accent-amber/5 border border-accent-amber/20">
              <div className="flex items-center gap-2 text-accent-amber text-sm font-medium mb-1">
                <AlertTriangle size={14} />
                Fallback Policy
              </div>
              <p className="text-xs text-nexa-300">
                Provides safe fallback to Strategy A only when the user has explicitly allowed it via
                <code className="px-1 py-0.5 rounded bg-nexa-700 text-accent-cyan mx-1">--allow-fallback</code>.
                Does not claim universal in-memory execution support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Windows note */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-card rounded-xl p-5 border-accent-red/20"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle size={20} className="text-accent-red flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-semibold text-accent-red mb-2">Windows Memory-backed Execution — Not Planned</h4>
              <p className="text-sm text-nexa-300">
                A custom PE loader would need to correctly implement complex OS behavior involving relocations,
                imports, TLS callbacks, exception handling, memory protections, and other loader responsibilities.
                This is outside the initial implementation scope. Process injection, stealth loading, security-product
                bypasses, and anti-analysis behavior are explicitly excluded.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
