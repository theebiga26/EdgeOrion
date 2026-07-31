import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  const sectionRef = useRef(null);

  return (
    <section ref={sectionRef} id="home" className="relative min-h-screen pt-20 pb-12 flex items-center justify-center overflow-hidden bg-transparent">
      
      {/* Premium Static Neon Ambient Glows (Highly Performant) */}
      <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-20 transform-gpu backface-hidden" />
      <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none -z-20 transform-gpu backface-hidden" />
      
      {/* Background Perspective Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none -z-10 flex items-center justify-center overflow-hidden perspective-[1000px]">
        <div className="w-[200%] h-[200%] [transform:rotateX(75deg)_translateY(-10%)]">
           <svg width="100%" height="100%">
             <defs>
               <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                 <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(212,20,255,0.4)" strokeWidth="2"/>
               </pattern>
             </defs>
             <rect width="100%" height="100%" fill="url(#grid)" />
           </svg>
        </div>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        {/* Main Bounding Frame */}
        <div className="relative w-full border border-primary/20 rounded-xl p-8 flex backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden min-h-[750px] moving-border">
          
          {/* Top Right Line Decoration */}
          <div className="absolute right-8 top-0 w-[1px] h-32 bg-primary/30"></div>
          <div className="absolute right-8 top-40 w-[1px] h-full bg-primary/30"></div>

          {/* Left Vertical Side Banners Area */}
          <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 z-20">
            {/* The main vertical line */}
            <div className="absolute left-[38px] top-0 w-[1px] h-full bg-primary/40"></div>
            
            {/* First Top Pink Bar (Half from top) */}
            <div className="absolute top-0 left-4 w-11 h-[50%] bg-primary flex flex-col items-center justify-start pt-12 pb-8 gap-6 shadow-[0_0_20px_rgba(212,20,255,0.4)] overflow-hidden">
              <span className="text-black font-black tracking-widest text-sm whitespace-nowrap flex-shrink-0" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>EDGE ORION</span>
              <div className="w-[2px] flex-1 bg-black opacity-80"></div>
            </div>
            
            {/* Inner vertical line for the shifted block */}
            <div className="absolute left-[88px] top-[20%] w-[1px] h-full bg-primary/40"></div>

            {/* Second Shifted Pink Bar (Half from bottom) */}
            <div className="absolute bottom-0 left-[66px] w-11 h-[50%] bg-primary flex flex-col items-center justify-end pb-12 pt-8 gap-6 shadow-[0_0_20px_rgba(212,20,255,0.4)] z-20 overflow-hidden">
              <div className="w-[2px] flex-1 bg-black opacity-80"></div>
              <span className="text-black font-black tracking-widest text-sm whitespace-nowrap flex-shrink-0" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>EDGE ORION</span>
            </div>
          </div>

          {/* Right Side / Center Content Area */}
          <div className="flex-1 flex flex-col relative z-10 pr-12 lg:pl-24">
            

            <div className="flex flex-col lg:flex-row justify-between items-center pl-4 gap-12">
              
              {/* Text Content */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex-1 relative z-30 max-w-xl pr-4"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-primary drop-shadow-[0_0_15px_rgba(212,20,255,0.4)]">
                  Real-Time Intelligence.<br />
                  <span className="text-white">Wherever Your</span> <br />
                  Infrastructure Operates.
                </h1>
                
                <p className="text-base text-white/70 mb-10 max-w-xl leading-relaxed">
                  Modern enterprises no longer operate from a single location. Intelligence now lives inside manufacturing facilities, transportation networks, retail environments, utility infrastructure, logistics hubs, and smart campuses.
                </p>
                
                <div className="flex items-center gap-8">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-3 bg-gradient-to-r from-primary/80 to-secondary/80 text-white text-sm font-bold rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] border border-white/10 shadow-[0_0_20px_rgba(212,20,255,0.3)] backdrop-blur-md hover:shadow-[0_0_30px_rgba(212,20,255,0.5)] transition-all"
                  >
                    Explore Platform
                  </motion.button>
                </div>
              </motion.div>

              {/* Right Card / Static Hero Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="w-full lg:w-[580px] h-[650px] relative hidden md:flex items-center justify-center mt-2 z-20"
              >
                <img 
                  src="/images/hero_img.svg" 
                  alt="Edge Orion Hero Image" 
                  className="w-full h-full object-contain filter drop-shadow-[0_0_20px_rgba(212,20,255,0.2)]" 
                />
              </motion.div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
