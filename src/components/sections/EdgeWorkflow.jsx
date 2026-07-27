import { motion } from 'framer-motion';
import { FiGlobe, FiServer, FiCpu, FiPieChart, FiZap } from 'react-icons/fi';

/* ─── Step data ─────────────────────────────────────────────────── */
const STEPS = [
  {
    id: '01',
    title: 'Onboard Devices',
    desc: 'Seamlessly connect cameras, IoT sensors, and industrial equipment into the Edge Orion fleet management ecosystem.',
    Icon: FiGlobe,
    color: '#D414FF',
    glow: 'rgba(212,20,255,0.6)',
  },
  {
    id: '02',
    title: 'Deploy AI',
    desc: 'Deploy and manage AI models across distributed edge infrastructure with intelligent workload orchestration.',
    Icon: FiServer,
    color: '#AA0ACC',
    glow: 'rgba(170,10,204,0.6)',
  },
  {
    id: '03',
    title: 'Process Locally',
    desc: 'Process video streams and sensor telemetry at the edge, drastically reducing cloud latency and bandwidth costs.',
    Icon: FiCpu,
    color: '#8800BB',
    glow: 'rgba(136,0,187,0.6)',
  },
  {
    id: '04',
    title: 'Monitor Fleet',
    desc: 'Monitor device health, inference activity, and network status from a centralized operational dashboard.',
    Icon: FiPieChart,
    color: '#7A00E6',
    glow: 'rgba(122,0,230,0.6)',
  },
  {
    id: '05',
    title: 'Execute Autonomously',
    desc: 'Enable distributed devices to make intelligent, real-time decisions based on locally processed AI inference.',
    Icon: FiZap,
    color: '#5C00D9',
    glow: 'rgba(92,0,217,0.6)',
  },
];

/* ─── Cyberpunk Arrow Card Component ────────────────────────────── */
function ArrowCard({ step }) {
  const { Icon } = step;
  return (
    <div className="flex flex-col items-start text-left group cursor-pointer w-full">
      {/* ── Chevron Arrow Badge ── */}
      <div className="w-full" style={{ filter: `drop-shadow(0 4px 16px ${step.glow})` }}>
        <div
          className="relative w-full h-16 sm:h-20 transition-all duration-300 group-hover:scale-105 group-hover:translate-x-1"
          style={{
            clipPath: 'polygon(0% 0%, 76% 0%, 100% 50%, 76% 100%, 0% 100%)',
            background: `linear-gradient(135deg, ${step.color}ee, ${step.color}77)`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-between pl-4 pr-7 sm:pl-5 sm:pr-9">
            <span
              className="text-2xl sm:text-3xl font-black text-white"
              style={{
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              {step.id}
            </span>
            <Icon
              className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
              style={{ fontSize: 24 }}
            />
          </div>
        </div>
      </div>

      {/* ── Step Title & Description below Arrow ── */}
      <div className="mt-6 text-left pr-2">
        <h3
          className="font-extrabold text-xs xl:text-sm uppercase tracking-wider mb-2"
          style={{
            color: step.color,
            textShadow: `0 0 12px ${step.glow}`,
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          {step.title}
        </h3>
        <p className="text-white/70 text-xs leading-relaxed font-normal">
          {step.desc}
        </p>
      </div>
    </div>
  );
}

/* ─── Cyberpunk Target Emblem Component (6th column) ─────────────── */
function TargetEmblem() {
  return (
    <div className="flex flex-col items-center justify-start text-center group cursor-pointer w-full">
      <div style={{ filter: 'drop-shadow(0 0 24px rgba(212,20,255,0.75))' }}>
        <div
          className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-transform duration-500 group-hover:scale-110"
          style={{
            background: 'radial-gradient(circle, rgba(212,20,255,0.25) 0%, rgba(11,5,24,0.95) 75%)',
            border: '2px solid #D414FF',
            boxShadow: 'inset 0 0 20px rgba(212,20,255,0.6)',
          }}
        >
          {/* Concentric glowing bullseye rings */}
          <div className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-primary/60 flex items-center justify-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-primary/80 flex items-center justify-center bg-primary/25">
              <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-primary shadow-[0_0_15px_#D414FF]" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center">
        <h3
          className="font-extrabold text-xs xl:text-sm uppercase tracking-wider mb-2 text-primary"
          style={{
            textShadow: '0 0 15px rgba(212,20,255,0.85)',
            fontFamily: 'Plus Jakarta Sans, sans-serif',
          }}
        >
          EDGE TARGET
        </h3>
        <p className="text-white/70 text-xs leading-relaxed font-normal">
          Autonomous, real-time edge AI execution achieved across all nodes.
        </p>
      </div>
    </div>
  );
}

/* ─── Main Section Component ────────────────────────────────────── */
export default function EdgeWorkflow() {
  return (
    <section
      id="how-it-works"
      className="relative py-28 border-t border-white/10 overflow-hidden bg-background"
    >
      {/* ─── Cyberpunk Background Grid & Network Nodes ─── */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Ambient radial gradient glows */}
        <div
          className="absolute -top-32 right-0 w-[800px] h-[600px] rounded-full blur-[160px] opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(212,20,255,0.25), transparent 70%)' }}
        />
        <div
          className="absolute -bottom-32 left-0 w-[800px] h-[600px] rounded-full blur-[160px] opacity-40"
          style={{ background: 'radial-gradient(ellipse, rgba(122,0,230,0.25), transparent 70%)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full blur-[180px] opacity-25"
          style={{ background: 'radial-gradient(ellipse, rgba(165,11,204,0.18), transparent 70%)' }}
        />

        {/* SVG Background Grid & Circuit Nodes */}
        <svg className="w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wf-grid-dots" x="0" y="0" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.2" fill="rgba(212,20,255,0.3)" />
            </pattern>
            <pattern id="wf-fine-grid" x="0" y="0" width="64" height="64" patternUnits="userSpaceOnUse">
              <path d="M 64 0 L 0 0 0 64" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
            </pattern>
          </defs>

          {/* Grid lines & dots */}
          <rect width="100%" height="100%" fill="url(#wf-fine-grid)" />
          <rect width="100%" height="100%" fill="url(#wf-grid-dots)" />

          {/* Decorative circuit paths and nodes in background */}
          <g stroke="rgba(212,20,255,0.2)" strokeWidth="1.5" fill="none">
            <path d="M 0,150 L 300,150 L 450,300 L 1000,300" />
            <path d="M 1920,400 L 1500,400 L 1350,250 L 800,250" />
          </g>
          <g fill="none" stroke="rgba(212,20,255,0.3)" strokeWidth="1">
            <circle cx="300" cy="150" r="8" />
            <circle cx="300" cy="150" r="3" fill="#d414ff" />
            <circle cx="1500" cy="400" r="8" />
            <circle cx="1500" cy="400" r="3" fill="#d414ff" />
            <circle cx="1000" cy="300" r="6" />
            <circle cx="800" cy="250" r="6" />
          </g>
        </svg>
      </div>

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ─── Glassmorphic Bounding Box Container ─── */}
        <div className="relative w-full border border-primary/25 rounded-3xl p-6 sm:p-10 md:p-14 lg:p-16 backdrop-blur-xl bg-[#0b0518]/80 shadow-[0_0_60px_rgba(0,0,0,0.85)] overflow-hidden moving-border">
          {/* Inner subtle glow in top-left & bottom-right corners of container */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[90px] pointer-events-none -z-10" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[90px] pointer-events-none -z-10" />

          {/* ── Section header ── */}
          <div className="text-center mb-16 relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Architecture
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              How It Works
            </h2>
            <p className="mt-4 text-white/60 text-base max-w-xl mx-auto">
              Five intelligent stages that power your edge AI infrastructure — from device onboarding to autonomous execution.
            </p>
          </div>

          {/* ══════════════════════════════════════════════
              Desktop: Horizontal Arrow Pipeline + Target Emblem
          ══════════════════════════════════════════════ */}
          <div className="hidden lg:grid grid-cols-6 gap-4 xl:gap-6 items-start relative z-10 my-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full"
              >
                <ArrowCard step={step} />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="w-full"
            >
              <TargetEmblem />
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════
              Tablet & Mobile: Responsive Grid Stack
          ══════════════════════════════════════════════ */}
          <div className="grid lg:hidden grid-cols-1 sm:grid-cols-2 gap-8 relative z-10 my-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="w-full"
              >
                <ArrowCard step={step} />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="w-full sm:col-span-2 flex justify-center mt-4"
            >
              <div className="max-w-xs w-full">
                <TargetEmblem />
              </div>
            </motion.div>
          </div>

          {/* Bottom subtle divider/light */}
          <div className="mt-16 border-t border-white/5 pt-8 flex items-center justify-between text-xs text-white/40">
            <span>Edge Orion v3.4 — Enterprise Fleet Architecture</span>
            <span>Zero-Latency Autonomous Nodes</span>
          </div>
        </div>
      </div>
    </section>
  );
}
