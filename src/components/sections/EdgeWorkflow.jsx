import { motion } from 'framer-motion';

/* ─── Step data with architectural specifications ───────────────── */
const STEPS = [
  {
    id: '01',
    title: 'Connect Intelligent Infrastructure',
    subtitle: 'Infrastructure Connection Layer',
    desc: 'Edge Orion establishes secure connections across distributed infrastructure, creating a foundation for real-time AI operations and centralized visibility.',
    logoUrl: '/images/Connect%20Intelligent.svg',
    color: '#D414FF',
    glow: 'rgba(212,20,255,0.65)',
    specs: [
      'Zero-Touch Node Auto-Discovery',
      'Multi-Protocol IoT Integration',
      'Encrypted Fleet Registration',
    ],
  },
  {
    id: '02',
    title: 'Deploy AI Workloads at the Edge',
    subtitle: 'Model Orchestration Layer',
    desc: 'Deploy, update, and manage AI workloads across edge devices to enable faster processing, reduced latency, and efficient distributed inference.',
    logoUrl: '/images/Deploy%20AI.svg',
    color: '#AA0ACC',
    glow: 'rgba(170,10,204,0.65)',
    specs: [
      'Over-The-Air (OTA) Model Push',
      'Dynamic Workload Balancing',
      'Hardware-Accelerated Quantization',
    ],
  },
  {
    id: '03',
    title: 'Orchestrate Distributed Operations',
    subtitle: 'Edge Processing Layer',
    desc: 'Edge Orion manages device fleets, AI deployments, and infrastructure resources with automated workflows designed for scalable enterprise environments.',
    logoUrl: '/images/Orchestrate.svg',
    color: '#8800BB',
    glow: 'rgba(136,0,187,0.65)',
    specs: [
      'Sub-10ms Local AI Inference',
      'Zero-Cloud Bandwidth Overhead',
      'On-Device Stream Analytics',
    ],
  },
  {
    id: '04',
    title: 'Analyze Real-Time Intelligence',
    subtitle: 'Fleet Telemetry Layer',
    desc: 'Process video streams, sensor telemetry, and device data locally to detect events, monitor performance, and support faster decision-making.',
    logoUrl: '/images/analyse%20real%20time.svg',
    color: '#7A00E6',
    glow: 'rgba(122,0,230,0.65)',
    specs: [
      'Real-Time Distributed Logging',
      'Predictive Hardware Diagnostics',
      'Interactive Fleet Heatmaps',
    ],
  },
  {
    id: '05',
    title: 'Optimize and Scale Continuously',
    subtitle: 'Autonomous Execution Layer',
    desc: 'Monitor infrastructure health, optimize AI workloads, and expand edge operations seamlessly as organizations grow their intelligent device networks.',
    logoUrl: '/images/Optimize%20and%20Scale%20Continuously.svg',
    color: '#5C00D9',
    glow: 'rgba(92,0,217,0.65)',
    specs: [
      'Local Closed-Loop Automation',
      'Real-Time Threat Mitigation',
      'Autonomous Edge Failover',
    ],
  },
];

/* ─── 3D Isometric Stacked Parallelogram Slab Component ─────────── */
function IsometricSlabRow({ step, stepIndex }) {
  return (
    <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 lg:gap-8 w-full group cursor-pointer">
      {/* ── 1. LEFT: 3D Isometric Parallelogram Slab (skewX(-24deg)) ── */}
      <div
        className="relative w-full lg:w-[440px] xl:w-[480px] flex-shrink-0 transition-all duration-300 group-hover:scale-[1.03] group-hover:translate-x-2"
        style={{ filter: `drop-shadow(0 12px 28px ${step.glow})` }}
      >
        {/* 3D Extruded Thickness Layer underneath */}
        <div
          className="absolute inset-0 rounded-2xl opacity-90 translate-y-2.5 translate-x-1.5 skew-x-0 lg:-skew-x-[22deg]"
          style={{
            background: `linear-gradient(to bottom, ${step.color}88, rgba(11,5,24,0.95))`,
            border: `1px solid ${step.color}55`,
          }}
        />

        {/* Main Top Glowing Glass Slab Face */}
        <div
          className="relative w-full h-20 sm:h-24 rounded-2xl flex items-center justify-between px-6 sm:px-8 overflow-hidden transition-all duration-300 group-hover:border-white/60 skew-x-0 lg:-skew-x-[22deg]"
          style={{
            background: `linear-gradient(135deg, ${step.color}ee 0%, ${step.color}88 55%, rgba(11,5,24,0.95) 100%)`,
            border: `2px solid ${step.color}99`,
            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -3px 12px ${step.glow}`,
          }}
        >
          {/* Animated sweeping light shimmer across the slab */}
          <motion.div
            className="absolute inset-y-0 w-28 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none"
            animate={{
              x: ['-200%', '450%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1.5 + stepIndex * 0.4,
              ease: 'easeInOut',
            }}
          />

          {/* Un-skewed Content: LOGO FIRST on left, NUMBER SECOND, TITLE on right */}
          <div className="flex items-center w-full gap-4 skew-x-0 lg:skew-x-[22deg]">
            {/* LEFT: Logo 1st + Number 2nd */}
            <div className="flex items-center gap-3.5 flex-shrink-0">
              {/* 1st: Logo inside glowing circular glass badge */}
              <div
                className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/40 bg-white/15 shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:rotate-12"
                style={{
                  boxShadow: `0 0 16px ${step.glow}, inset 0 0 8px rgba(255,255,255,0.35)`,
                }}
              >
                <img
                  src={step.logoUrl}
                  alt={step.title}
                  className="w-9 h-9 object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.9)]"
                />
              </div>

              {/* 2nd: Step Number */}
              <span
                className="text-2xl sm:text-3xl font-black text-white tracking-tight select-none"
                style={{
                  textShadow: `0 2px 12px rgba(0,0,0,0.85), 0 0 16px ${step.glow}`,
                  fontFamily: 'Plus Jakarta Sans, sans-serif',
                }}
              >
                {step.id}
              </span>
            </div>

            {/* Glowing Vertical Divider */}
            <div
              className="w-px h-8 flex-shrink-0 opacity-70"
              style={{ background: `linear-gradient(to bottom, transparent, ${step.color}, transparent)` }}
            />

            {/* RIGHT INSIDE SLAB: Step Title */}
            <span
              className="flex-1 text-sm sm:text-base xl:text-lg font-black uppercase tracking-wider text-white pr-2"
              style={{
                textShadow: `0 0 15px ${step.glow}`,
                fontFamily: 'Plus Jakarta Sans, sans-serif',
              }}
            >
              {step.title}
            </span>
          </div>
        </div>
      </div>

      {/* ── 2. MIDDLE: Glowing Dotted Callout Line (Desktop only • - - - •) ── */}
      <div className="hidden lg:flex items-center justify-center w-16 xl:w-24 flex-shrink-0">
        <div className="flex items-center w-full">
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: step.color, boxShadow: `0 0 10px ${step.color}` }}
          />
          <div
            className="flex-1 h-0.5 border-t border-dashed mx-1"
            style={{ borderColor: `${step.color}88` }}
          />
          <div
            className="w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: step.color, boxShadow: `0 0 10px ${step.color}` }}
          />
        </div>
      </div>

      {/* ── 3. RIGHT: Architectural Specifications & Bracket Panel ── */}
      <div className="flex-1 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-white/[0.02] lg:bg-transparent p-4 sm:p-5 lg:p-0 rounded-2xl border border-white/5 lg:border-none">
        {/* Subtitle & Description */}
        <div className="max-w-md">
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="text-xs sm:text-sm font-extrabold uppercase tracking-widest"
              style={{ color: step.color, textShadow: `0 0 12px ${step.glow}` }}
            >
              {step.subtitle}
            </span>
          </div>
          <p className="text-white/75 text-xs sm:text-sm leading-relaxed font-normal">
            {step.desc}
          </p>
        </div>

        {/* Architectural Bracket List [ • spec 1, • spec 2, • spec 3 ] */}
        <div
          className="relative pl-5 sm:pl-6 border-l-2 py-1 flex flex-col gap-2 flex-shrink-0"
          style={{ borderColor: step.color }}
        >
          {step.specs.map((spec, sIdx) => (
            <div key={sIdx} className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-medium">
              <div
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: step.color, boxShadow: `0 0 8px ${step.color}` }}
              />
              <span>{spec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Vertical Abstraction / Evolution Arrow (Far Left) ─────────── */
function AbstractionArrowAxis() {
  return (
    <div className="hidden xl:flex flex-col items-center justify-between py-4 pr-6 border-r border-white/10 text-white/50 select-none">
      {/* Top Label */}
      <div className="text-[11px] font-extrabold uppercase tracking-widest text-primary rotate-180 [writing-mode:vertical-rl] mb-3">
        Concrete / Apex
      </div>

      {/* Upward Glowing Arrow Line */}
      <div className="flex-1 flex flex-col items-center my-2">
        <div className="w-0.5 flex-1 bg-gradient-to-t from-secondary via-primary to-white relative">
          {/* Arrow head pointing UP at the top */}
          <div
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[8px] border-b-white"
            style={{ filter: 'drop-shadow(0 0 8px #D414FF)' }}
          />
        </div>
      </div>

      {/* Bottom Label */}
      <div className="text-[11px] font-extrabold uppercase tracking-widest text-secondary rotate-180 [writing-mode:vertical-rl] mt-3">
        Abstract / Base
      </div>
    </div>
  );
}

/* ─── Main Section Component ────────────────────────────────────── */
export default function EdgeWorkflow() {
  // We stack the layers from Top (05, Surface/Apex) down to Bottom (01, Strategy/Foundation)
  const stackedSteps = [STEPS[4], STEPS[3], STEPS[2], STEPS[1], STEPS[0]]; // 05 -> 01

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
              Five isometric architectural layers — from foundational device onboarding up to autonomous edge AI execution.
            </p>
          </div>

          {/* ══════════════════════════════════════════════
              3D Isometric Stacked Parallelogram Architecture
          ══════════════════════════════════════════════ */}
          <div className="flex items-stretch gap-8 relative z-10 my-8">
            {/* Left Vertical Abstraction Axis Arrow (Desktop XL) */}
            <AbstractionArrowAxis />

            {/* Stacked 3D Isometric Slabs (05 Top -> 01 Bottom) */}
            <div className="flex-1 flex flex-col gap-8 sm:gap-9">
              {stackedSteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <IsometricSlabRow step={step} stepIndex={idx} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
