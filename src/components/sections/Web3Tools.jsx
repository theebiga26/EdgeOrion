import { motion } from 'framer-motion';

export default function Web3Tools() {
  return (
    <section className="relative py-24 border-t border-white/5 bg-transparent overflow-hidden">
      
      {/* Background Hexagon Structure */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center -z-10">
         <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="rgba(212,20,255,0.3)" strokeWidth="0.5"/>
            <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="none" stroke="rgba(74,0,224,0.3)" strokeWidth="0.2"/>
            <polygon points="50,0 100,25 100,75 50,100 0,75 0,25" fill="none" stroke="rgba(212,20,255,0.1)" strokeWidth="0.1"/>
         </svg>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 -z-10"></div>
      
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative w-full border border-primary/20 rounded-xl p-8 backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden moving-border">
          
          {/* Animated SVG Network Background */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <svg width="100%" height="100%">
              <circle cx="10%" cy="20%" r="4" fill="rgba(212,20,255,0.8)" />
              <circle cx="25%" cy="15%" r="6" fill="rgba(212,20,255,0.6)" />
              <circle cx="18%" cy="40%" r="3" fill="rgba(74,0,224,0.8)" />
              <line x1="10%" y1="20%" x2="25%" y2="15%" stroke="rgba(212,20,255,0.4)" strokeWidth="1" />
              <line x1="10%" y1="20%" x2="18%" y2="40%" stroke="rgba(212,20,255,0.4)" strokeWidth="1" />
              <line x1="25%" y1="15%" x2="18%" y2="40%" stroke="rgba(74,0,224,0.4)" strokeWidth="1" />
              
              <circle cx="85%" cy="75%" r="5" fill="rgba(212,20,255,0.8)" />
              <circle cx="95%" cy="60%" r="4" fill="rgba(74,0,224,0.6)" />
              <circle cx="75%" cy="85%" r="6" fill="rgba(212,20,255,0.5)" />
              <line x1="85%" y1="75%" x2="95%" y2="60%" stroke="rgba(212,20,255,0.4)" strokeWidth="1" />
              <line x1="85%" y1="75%" x2="75%" y2="85%" stroke="rgba(212,20,255,0.4)" strokeWidth="1" />
            </svg>
          </div>

          {/* Top Icon & Subtitle */}
          <div className="flex flex-col items-center mb-16 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 -z-10"></div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 bg-background pr-4 text-xs font-mono text-textMuted tracking-widest">
              [ Dapp Toolkit ]
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-24 h-24 mt-8"
            >
               {/* 3D Stacked Diamond Mockup with Floating Animation */}
               <div className="absolute inset-0 flex flex-col items-center justify-center gap-1">
                  <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0 }} className="w-16 h-4 border border-primary/50 bg-background/50 rounded-[50%] rotate-x-60 shadow-[0_0_10px_rgba(212,20,255,0.2)]"></motion.div>
                  <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }} className="w-16 h-4 border border-primary/80 bg-primary/20 rounded-[50%] rotate-x-60 shadow-[0_0_15px_rgba(212,20,255,0.4)]"></motion.div>
                  <motion.div animate={{ y: [0, -2, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }} className="w-16 h-4 border border-primary bg-primary/40 rounded-[50%] rotate-x-60 shadow-[0_0_20px_rgba(212,20,255,0.6)]"></motion.div>
                  <motion.div animate={{ y: [0, -1, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.6 }} className="w-16 h-4 border border-primary/80 bg-primary/20 rounded-[50%] rotate-x-60 shadow-[0_0_15px_rgba(212,20,255,0.4)]"></motion.div>
               </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Web3 Tools</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-2 text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <span className="text-primary/50 font-mono font-light mr-2">{'{'}</span>
                Web3-Native Tools.
                <span className="text-primary/50 font-mono font-light ml-2">{'}'}</span>
              </h2>
              <h3 className="text-xl text-white mb-6 font-medium">Developer platform for dapps.</h3>
              
              <p className="text-textMuted text-sm leading-relaxed mb-8 max-w-md relative">
                <span className="absolute -left-4 top-0 text-white/20 font-mono text-2xl">"</span>
                Build dapps on Space and Time with the Web3 stack, accessing realtime data we've indexed from major chains like Ethereum, Polygon, Avalanche, Binance, and Sui. We have native integrations for Chainlink oracles, decentralized storage, web3.js/ethers.js, and much more.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-gradient-to-r from-secondary to-primary transition-all text-white font-medium rounded shadow-[0_0_20px_rgba(122,0,230,0.6)] hover:shadow-[0_0_30px_rgba(212,20,255,0.8)]"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Right Visual - Toolkit Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center items-center group"
            >
               {/* Behind-image decorative frame */}
               <div className="absolute inset-4 border border-white/5 bg-white/5 rounded-xl transition-all group-hover:rotate-3 group-hover:scale-105 duration-500 z-0"></div>
               
               <img src="/web3_tools.png" alt="Web3 Developer Toolkit" className="w-full max-w-md rounded-xl shadow-2xl relative z-10 transition-transform duration-500 group-hover:-translate-y-2" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
