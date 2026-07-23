import { motion } from 'framer-motion';
import { FiGlobe, FiServer, FiCpu, FiPieChart, FiZap } from 'react-icons/fi';

const ribbonSteps = [
  { 
    id: '01', 
    title: 'Connect', 
    desc: 'Seamlessly load data from any on-chain or off-chain source into our globally distributed decentralized cluster.',
    icon: <FiGlobe />,
    grad: 'from-primary to-purple-600',
    fold: 'bg-purple-950',
    glow: 'rgba(212, 20, 255, 0.6)'
  },
  { 
    id: '02', 
    title: 'Ingest', 
    desc: 'Automatically normalize, encrypt, and index massive datasets in real-time across the Web3 network.',
    icon: <FiServer />,
    grad: 'from-purple-600 to-indigo-600',
    fold: 'bg-indigo-950',
    glow: 'rgba(147, 51, 234, 0.6)'
  },
  { 
    id: '03', 
    title: 'Process', 
    desc: 'Run sub-second analytic queries alongside high-throughput transactions in a unified HTAP environment.',
    icon: <FiCpu />,
    grad: 'from-indigo-600 to-secondary',
    fold: 'bg-blue-950',
    glow: 'rgba(79, 70, 229, 0.6)'
  },
  { 
    id: '04', 
    title: 'Analyze', 
    desc: 'Utilize zero-knowledge proofs (ZK) to ensure all data analytics and operations are cryptographically verifiable.',
    icon: <FiPieChart />,
    grad: 'from-secondary to-blue-600',
    fold: 'bg-blue-950',
    glow: 'rgba(59, 130, 246, 0.6)'
  },
  { 
    id: '05', 
    title: 'Execute', 
    desc: 'Produce verifiably tamperproof results that route securely and directly to your smart contracts for execution.',
    icon: <FiZap />,
    grad: 'from-blue-600 to-cyan-600',
    fold: 'bg-cyan-950',
    glow: 'rgba(8, 145, 178, 0.6)'
  }
];

export default function Transactions() {
  return (
    <section className="relative py-32 border-t border-white/10 bg-transparent overflow-hidden" id="how-it-works">
      
      {/* Background Ambience Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-[150px] -z-10 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Bounding Box Container */}
        <div className="relative w-full border border-primary/20 rounded-2xl p-8 md:p-12 lg:p-16 backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden moving-border">

          {/* Title */}
          <div className="text-center mb-24 relative z-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              How It Works
            </h2>
          </div>

          {/* Alternating Ribbon Layout Container */}
          <div className="flex flex-col gap-12 md:gap-16 max-w-5xl mx-auto pb-8">
            {ribbonSteps.map((step, i) => {
              const isEven = i % 2 !== 0; // Steps 2 and 4 (0-indexed 1 and 3)
              
              return (
                <motion.div 
                  key={step.id} 
                  initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  // Removed dark shadow, added dynamic bright glowing shadow
                  className={`relative flex items-center w-full min-h-[140px] group transition-all duration-300 hover:scale-[1.02] ${isEven ? 'pr-[40px] md:pr-[60px] justify-end' : 'pl-[40px] md:pl-[60px]'}`}
                  style={{ filter: `drop-shadow(0 0 6px ${step.glow})` }}
                >
                   
                   {/* Hanging Ribbon */}
                   <div className={`absolute top-0 w-[90px] md:w-[110px] h-[140px] md:h-[150px] z-20 group-hover:-translate-y-1 transition-transform duration-300 ${isEven ? 'right-0' : 'left-0'}`}>
                      {/* Front Ribbon Face with Chevron Cut */}
                      <div className={`w-full h-full bg-gradient-to-br ${step.grad} flex flex-col items-center pt-6 pb-2`}
                           style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 50% 88%, 0 100%)' }}>
                         <span className="text-white/90 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-1">Step</span>
                         <span className="text-white font-black text-4xl md:text-5xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">{step.id}</span>
                      </div>
                   </div>

                   {/* 3D Fold (Triangle connecting top of ribbon to banner) */}
                   <div className={`absolute top-0 w-[24px] h-[24px] ${step.fold} z-0 ${isEven ? 'right-[90px] md:right-[110px]' : 'left-[90px] md:left-[110px]'}`}
                        style={{ clipPath: isEven ? 'polygon(100% 0, 0 100%, 100% 100%)' : 'polygon(0 0, 0 100%, 100% 100%)' }}></div>

                   {/* Main Banner (Chevron arrow pointing left or right) */}
                   {/* Removed border-black, added bright inner glass border */}
                   <div className={`w-full bg-[#0a0514]/90 backdrop-blur-xl border border-white/10 flex items-center py-8 md:py-10 relative z-10 transition-all duration-300 group-hover:bg-[#120a24] ${isEven ? 'pr-[70px] md:pr-[90px] pl-[70px] md:pl-32 flex-row-reverse text-right' : 'pl-[70px] md:pl-[90px] pr-[70px] md:pr-32'}`}
                        style={{ 
                          marginTop: '24px', 
                          clipPath: isEven 
                            ? 'polygon(40px 0, 100% 0, 100% 100%, 40px 100%, 0 50%)' 
                            : 'polygon(0 0, calc(100% - 40px) 0, 100% 50%, calc(100% - 40px) 100%, 0 100%)',
                        }}>
                      
                      {/* Glowing top accent border */}
                      <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${step.grad} opacity-50`}></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                         <h3 className="text-xl md:text-2xl font-bold text-white mb-2 tracking-wide drop-shadow-sm">{step.title}</h3>
                         <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xl">{step.desc}</p>
                      </div>
                      
                      {/* Icon inside the Chevron point */}
                      <div className={`absolute top-1/2 -translate-y-1/2 text-4xl md:text-6xl text-white/10 group-hover:text-white transition-all duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] ${isEven ? 'left-6 md:left-12' : 'right-6 md:right-12'}`}>
                         {step.icon}
                      </div>
                   </div>

                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
