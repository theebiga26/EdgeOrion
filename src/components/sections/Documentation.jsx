import { motion } from 'framer-motion';
import { FiTerminal, FiCpu, FiGlobe, FiActivity, FiPackage, FiCamera, FiThermometer, FiBriefcase, FiCloud, FiHardDrive } from 'react-icons/fi';

export default function Documentation() {
  const leftNodes = [
    { title: "Edge Deployment APIs", icon: <FiTerminal />, desc: "Integrate edge orchestration capabilities directly into your enterprise applications." },
    { title: "AI Model Syncing", icon: <FiCpu />, desc: "Push and manage custom models across distributed edge nodes." },
    { title: "Fleet Orchestration", icon: <FiGlobe />, desc: "Manage thousands of devices geographically dispersed." },
    { title: "Telemetry Stream API", icon: <FiActivity />, desc: "Subscribe to real-time events from the edge." },
    { title: "Custom Container Workloads", icon: <FiPackage />, desc: "Run arbitrary Docker containers on edge hardware." },
  ];

  const rightNodes = [
    { title: "IP Camera Integration", icon: <FiCamera />, desc: "RTSP/ONVIF feeds processed directly on-site." },
    { title: "Industrial IoT Sensors", icon: <FiThermometer />, desc: "Temperature, vibration, and pressure monitoring." },
    { title: "Enterprise ERP Systems", icon: <FiBriefcase />, desc: "Trigger events natively in SAP, Oracle, and more." },
    { title: "Cloud Data Lakes", icon: <FiCloud />, desc: "Batch telemetry forwarding to AWS S3 / Snowflake." },
    { title: "Edge Gateway Hardware", icon: <FiHardDrive />, desc: "Native Jetson, JetPack, and DeepStream support." },
  ];

  return (
    <section className="relative py-24 border-t border-white/5 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative w-full border border-primary/20 rounded-xl p-8 md:p-12 backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden moving-border">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          
          {/* Left Text Block */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Developer Hub</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-md">
              Developer API &<br />Documentation.
            </h2>
            <p className="text-lg text-textMuted max-w-2xl mx-auto leading-relaxed">
              We provide the tools you need to build, scale, and integrate real-time distributed AI operations. Everything developers need to orchestrate device fleets securely.
            </p>
          </motion.div>

          {/* Interactive Node Map Layout (Desktop) */}
          <div className="hidden lg:block relative w-full max-w-[1000px] mx-auto h-[600px] mt-12 bg-[#05020a]/40 border border-white/5 rounded-2xl shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] overflow-hidden">
            
            {/* SVG Connecting Lines & Particles */}
            <svg viewBox="0 0 1000 600" className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <defs>
                <linearGradient id="gradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(212,20,255,0.1)" />
                  <stop offset="100%" stopColor="rgba(212,20,255,0.8)" />
                </linearGradient>
                <linearGradient id="gradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(74,0,224,0.8)" />
                  <stop offset="100%" stopColor="rgba(74,0,224,0.1)" />
                </linearGradient>
              </defs>
              
              {leftNodes.map((_, i) => {
                const y = (i + 1) * 100;
                const pathId = `lineL${i}`;
                const pathD = y === 300 ? `M 300 300 L 436 300` : `M 300 ${y} C 370 ${y}, 370 300, 436 300`;
                const dur = 2.5 + (i * 0.3);
                return (
                  <g key={`svg-left-${i}`}>
                    <path id={pathId} d={pathD} fill="none" stroke="url(#gradLeft)" strokeWidth="1.5" />
                    <circle cx="300" cy={y} r="4" fill="#d414ff" />
                    <circle r="3" fill="#fff" style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.8))' }}>
                      <animateMotion dur={`${dur}s`} repeatCount="indefinite">
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                )
              })}

              {rightNodes.map((_, i) => {
                const y = (i + 1) * 100;
                const pathId = `lineR${i}`;
                const pathD = y === 300 ? `M 700 300 L 564 300` : `M 700 ${y} C 630 ${y}, 630 300, 564 300`;
                const dur = 2.8 + (i * 0.25);
                return (
                  <g key={`svg-right-${i}`}>
                    <path id={pathId} d={pathD} fill="none" stroke="url(#gradRight)" strokeWidth="1.5" />
                    <circle cx="700" cy={y} r="4" fill="#4a00e0" />
                    <circle r="3" fill="#fff" style={{ filter: 'drop-shadow(0 0 5px rgba(255,255,255,0.8))' }}>
                      <animateMotion dur={`${dur}s`} repeatCount="indefinite">
                        <mpath href={`#${pathId}`} />
                      </animateMotion>
                    </circle>
                  </g>
                )
              })}
            </svg>

            {/* Column Headers */}
            <div className="absolute top-[20px] left-[175px] -translate-x-1/2 pointer-events-none">
              <span className="text-[10px] font-mono text-textMuted tracking-[0.2em]">API & DEPLOYMENT</span>
            </div>
            <div className="absolute top-[20px] left-[500px] -translate-x-1/2 pointer-events-none">
              <span className="text-[10px] font-mono text-primary tracking-[0.2em]">EDGE ORION · OPERATIONS HUB</span>
            </div>
            <div className="absolute top-[20px] left-[825px] -translate-x-1/2 pointer-events-none">
              <span className="text-[10px] font-mono text-textMuted tracking-[0.2em]">INTEGRATION TARGETS</span>
            </div>

            {/* Center Core Hub */}
            <div className="absolute top-[300px] left-[500px] -translate-x-1/2 -translate-y-1/2 w-32 h-32 flex items-center justify-center z-10">
                <div className="absolute inset-[-40px] rounded-full border border-primary/20 animate-[spin_10s_linear_infinite] border-t-transparent pointer-events-none"></div>
                <div className="absolute inset-[-20px] rounded-full border border-secondary/30 animate-[spin_8s_linear_infinite_reverse] border-b-transparent pointer-events-none"></div>
                <div className="absolute inset-0 rounded-full bg-[#0a0514] border border-white/20 shadow-[0_0_40px_rgba(212,20,255,0.3)] flex flex-col items-center justify-center hover:scale-105 transition-transform cursor-pointer group">
                  <div className="absolute inset-0 bg-primary/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                  <span className="text-[10px] font-mono text-white tracking-widest relative z-10">POLICY</span>
                  <span className="text-[10px] font-mono text-primary tracking-widest mt-1 relative z-10">EVAL</span>
                </div>
            </div>

            {/* Left Nodes rendering */}
            {leftNodes.map((node, i) => (
              <div 
                key={`left-node-${i}`}
                className="absolute left-[50px] w-[250px] -translate-y-1/2 bg-[#111116]/90 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-lg flex items-center justify-between hover:border-primary/50 cursor-pointer transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.5)] group z-10"
                style={{ top: `${(i + 1) * 100}px` }}
              >
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(212,20,255,0.8)] group-hover:scale-150 transition-transform"></div>
                    <span className="text-white text-[13px] font-medium leading-tight">{node.title}</span>
                </div>
                <div className="text-lg grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 group-hover:scale-110 ml-2">{node.icon}</div>
              </div>
            ))}

            {/* Right Nodes rendering */}
            {rightNodes.map((node, i) => (
              <div 
                key={`right-node-${i}`}
                className="absolute left-[700px] w-[250px] -translate-y-1/2 bg-[#111116]/90 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-lg flex items-center justify-between hover:border-secondary/50 cursor-pointer transition-colors shadow-[0_4px_20px_rgba(0,0,0,0.5)] group z-10"
                style={{ top: `${(i + 1) * 100}px` }}
              >
                <div className="text-lg grayscale group-hover:grayscale-0 transition-all opacity-70 group-hover:opacity-100 group-hover:scale-110 mr-2">{node.icon}</div>
                <div className="flex items-center gap-3">
                    <span className="text-white text-[13px] font-medium leading-tight text-right">{node.title}</span>
                    <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_8px_rgba(74,0,224,0.8)] group-hover:scale-150 transition-transform"></div>
                </div>
              </div>
            ))}

          </div>

          {/* Mobile Layout (Stacked Cards) */}
          <div className="lg:hidden w-full max-w-lg mx-auto flex flex-col gap-4 mt-8">
            {[...leftNodes, ...rightNodes].map((node, index) => (
              <div 
                key={index}
                className="bg-[#111116] border border-white/10 p-4 rounded-xl flex items-center justify-between hover:border-primary/50 cursor-pointer transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl flex-shrink-0">
                    {node.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-bold">{node.title}</h4>
                    <p className="text-xs text-textMuted mt-1 leading-relaxed">{node.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
        </div>
      </div>
    </section>
  );
}
