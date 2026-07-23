import { motion } from 'framer-motion';

export default function DashboardShowcase() {
  return (
    <section className="relative py-24 border-t border-white/5 bg-transparent overflow-hidden">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none"></div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
            <span className="text-xs font-bold text-primary uppercase tracking-widest">Centralized Control</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            Edge Operations Dashboard
          </h2>
          <p className="text-lg text-textMuted max-w-2xl mx-auto">
            Gain real-time visibility into your entire distributed AI infrastructure. Monitor fleet health, camera analytics, and sensor networks from a single pane of glass.
          </p>
        </div>

        {/* Dashboard Mockup UI */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-6xl mx-auto rounded-3xl border border-white/10 bg-[#0a0514]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col md:flex-row h-[600px]"
        >
          {/* Dashboard Sidebar */}
          <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-white/10 bg-black/40 p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4">
            <div className="hidden md:flex items-center gap-3 mb-10">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(212,20,255,0.5)]">
                <span className="text-white font-bold text-xs">EO</span>
              </div>
              <span className="text-white font-bold tracking-wide">Edge Orion</span>
            </div>
            
            {/* Nav Items */}
            <div className="flex flex-row md:flex-col gap-2 w-full overflow-x-auto md:overflow-visible">
              {['Fleet Overview', 'Device Status', 'AI Workloads', 'Camera Analytics', 'Sensor Network'].map((item, idx) => (
                <div key={idx} className={`px-4 py-3 rounded-lg text-sm font-medium whitespace-nowrap cursor-pointer transition-colors ${idx === 0 ? 'bg-primary/20 text-primary border border-primary/30' : 'text-textMuted hover:bg-white/5 hover:text-white'}`}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard Main Area */}
          <div className="flex-1 p-6 md:p-8 flex flex-col gap-6 overflow-y-auto">
            
            {/* Top Bar Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: "Active Devices", value: "2,408", trend: "+12%" },
                { label: "Total Inferences", value: "1.4M / hr", trend: "+5%" },
                { label: "Avg Latency", value: "12ms", trend: "-2ms", good: true },
                { label: "Fleet Health", value: "99.8%", trend: "Stable" }
              ].map((stat, idx) => (
                <div key={idx} className="bg-black/40 border border-white/5 rounded-xl p-4">
                  <div className="text-textMuted text-xs uppercase tracking-wider mb-2">{stat.label}</div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className={`text-xs font-medium ${stat.good ? 'text-green-400' : 'text-primary'}`}>{stat.trend}</div>
                </div>
              ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1">
              
              {/* Large Map/Graph Area */}
              <div className="lg:col-span-2 bg-black/40 border border-white/5 rounded-2xl p-6 relative overflow-hidden group">
                <div className="flex justify-between items-center mb-6 relative z-10">
                  <h4 className="text-white font-semibold">Global AI Inference Activity</h4>
                  <div className="flex gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="text-xs text-primary font-mono uppercase">Live</span>
                  </div>
                </div>
                
                {/* Simulated Graph / Map Visualization */}
                <div className="absolute inset-0 top-16 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
                  <svg width="100%" height="100%" preserveAspectRatio="none">
                    <path d="M0,100 C150,200 250,0 400,100 C550,200 650,50 800,150 L800,300 L0,300 Z" fill="url(#graphGradient)" />
                    <path d="M0,100 C150,200 250,0 400,100 C550,200 650,50 800,150" fill="none" stroke="rgba(212,20,255,1)" strokeWidth="3" />
                    <defs>
                      <linearGradient id="graphGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgba(212,20,255,0.3)" />
                        <stop offset="100%" stopColor="rgba(212,20,255,0)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Simulated Data Points */}
                <div className="absolute inset-0 top-16 pointer-events-none">
                   {[20, 45, 60, 80].map((left, i) => (
                      <div key={i} className="absolute w-3 h-3 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]" style={{ left: `${left}%`, top: `${30 + (i * 15) - (i % 2 * 30)}%` }}>
                         <div className="absolute inset-0 border border-white rounded-full animate-ping opacity-50"></div>
                      </div>
                   ))}
                </div>
              </div>

              {/* Activity Feed Sidebar */}
              <div className="bg-black/40 border border-white/5 rounded-2xl p-6 flex flex-col">
                <h4 className="text-white font-semibold mb-6">Camera & Sensor Alerts</h4>
                <div className="flex flex-col gap-4 overflow-y-auto pr-2">
                  {[
                    { type: 'Alert', msg: 'Motion detected (Zone A)', time: 'Just now', color: 'text-secondary' },
                    { type: 'System', msg: 'Jetson Nano 04 deployed', time: '2m ago', color: 'text-primary' },
                    { type: 'Update', msg: 'Model v2.4 synced', time: '15m ago', color: 'text-green-400' },
                    { type: 'Alert', msg: 'Temperature threshold exceeded', time: '1h ago', color: 'text-secondary' }
                  ].map((alert, idx) => (
                    <div key={idx} className="flex gap-3 items-start border-b border-white/5 pb-4 last:border-0">
                      <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${alert.color.replace('text-', 'bg-')}`}></div>
                      <div>
                        <div className="text-white text-sm font-medium">{alert.msg}</div>
                        <div className="text-textMuted text-xs mt-1">{alert.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
