import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Arlene McCoy',
    role: 'Germany',
    feedback: 'Space and Time is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: 2,
    name: 'Eleanor Pena',
    role: 'United States',
    feedback: 'The ability to join on-chain and off-chain data seamlessly has revolutionized how we build dapps. The HTAP cluster performance is unmatched, giving us sub-second query times that were previously impossible.',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: 3,
    name: 'Wade Warren',
    role: 'United Kingdom',
    feedback: 'Integrating with existing Web3 stacks was incredibly easy. The native support for ethers.js and Chainlink oracles means our team didn\'t have to learn new frameworks or overhaul our architecture.',
    avatar: 'https://i.pravatar.cc/150?u=3'
  },
  {
    id: 4,
    name: 'Jacob Jones',
    role: 'Canada',
    feedback: 'Scaling to petabytes while maintaining cryptographically guaranteed tamperproof results is a game-changer for enterprise blockchain applications. Storage is elastic and query execution is rock solid.',
    avatar: 'https://i.pravatar.cc/150?u=4'
  },
  {
    id: 5,
    name: 'Esther Howard',
    role: 'Australia',
    feedback: 'Security and privacy were our top concerns, but the built-in encryption and ability to handle private off-chain data securely exceeded all our enterprise compliance requirements.',
    avatar: 'https://i.pravatar.cc/150?u=5'
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Helper to calculate positions for the 3D arc
  const getAvatarStyle = (index) => {
    const diff = (index - activeIndex + testimonials.length) % testimonials.length;
    
    // We want 0 to be center, 1 to be right1, 2 to be right2, 3 to be left2, 4 to be left1
    let position = 0;
    if (diff === 0) position = 0; // Center
    else if (diff === 1) position = 1; // Right 1
    else if (diff === 2) position = 2; // Right 2
    else if (diff === 3) position = -2; // Left 2
    else if (diff === 4) position = -1; // Left 1

    const x = position * 130; // Horizontal spacing for larger avatars
    const y = Math.abs(position) * -30; // Vertical arc (center is 0, sides go UP to -30, -60)
    const scale = position === 0 ? 1.3 : (1 - Math.abs(position) * 0.25); // Center is 1.3, sides are smaller
    const zIndex = 10 - Math.abs(position); // Center is highest
    const opacity = position === 0 ? 1 : (1 - Math.abs(position) * 0.3); // Sides fade out

    return {
      x,
      y: position === 0 ? 20 : y, // Center dips down slightly (20px), others curve up
      scale,
      zIndex,
      opacity
    };
  };

  return (
    <section className="relative py-24 border-t border-white/5 bg-transparent overflow-hidden" id="testimonials">
      
      {/* Background Diagonal Lasers Structure */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center -z-10">
         <svg width="100%" height="100%">
            <line x1="100%" y1="100%" x2="0" y2="0" stroke="rgba(212,20,255,0.2)" strokeWidth="1"/>
            <line x1="90%" y1="100%" x2="0" y2="10%" stroke="rgba(74,0,224,0.1)" strokeWidth="4"/>
            <line x1="100%" y1="90%" x2="10%" y2="0" stroke="rgba(212,20,255,0.1)" strokeWidth="2"/>
         </svg>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none"></div>
      
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Bounding Box Container */}
        <div className="relative w-full border border-primary/20 rounded-xl p-8 md:p-12 backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden moving-border">
          
          {/* Title */}
          <div className="text-center mb-16 relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-[0_0_15px_rgba(212,20,255,0.3)]">
              What our Customers say
            </h2>
            <p className="text-textMuted text-sm max-w-2xl mx-auto">
              Discover how industry leaders are leveraging our Web3 native tools and hybrid database solutions.
            </p>
          </div>

          {/* 2-Card Row Layout */}
          <div className="relative w-full max-w-[1200px] mx-auto mt-28 mb-12 px-4 md:px-16">
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12"
              >
                
                {/* Render Two Cards */}
                {[0, 1].map((offset) => {
                  const itemIndex = (activeIndex + offset) % testimonials.length;
                  const t = testimonials[itemIndex];
                  
                  return (
                    <div key={t.id} className="relative bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl p-8 md:p-10 shadow-[0_30px_60px_rgba(0,0,0,0.6)] flex flex-col min-h-[300px]">
                      
                      {/* Top Left Hanging Ribbon */}
                      <div className="absolute top-8 -left-4 md:-left-6 z-30">
                         {/* Ribbon Body */}
                         <div className="bg-gradient-to-r from-[#2c0b3d] to-[#4f1166] px-6 md:px-8 py-2 md:py-3 rounded-r-2xl shadow-[0_10px_20px_rgba(0,0,0,0.5)] flex flex-col items-start min-w-[180px]">
                            <h4 className="text-white font-bold tracking-wider text-xs md:text-sm uppercase whitespace-nowrap overflow-hidden text-ellipsis max-w-[200px]">
                              {t.name}
                            </h4>
                            <p className="text-white/70 text-[10px] md:text-xs mb-1 italic">review</p>
                            <div className="flex gap-1 text-yellow-400 text-xs md:text-sm">
                              ★★★★★
                            </div>
                         </div>
                         {/* Ribbon Fold (CSS Triangle) */}
                         <div className="w-0 h-0 border-t-[16px] border-t-[#160421] border-l-[16px] md:border-l-[24px] border-l-transparent absolute top-full left-0"></div>
                      </div>

                      {/* Top Right Circular Avatar */}
                      <div className="absolute -top-12 right-4 md:-top-20 md:-right-8 z-30">
                        <div className="w-28 h-28 md:w-44 md:h-44 rounded-full p-1.5 md:p-3 bg-white/10 backdrop-blur-xl shadow-[0_15px_35px_rgba(212,20,255,0.2)] border border-white/20">
                          <img 
                            src={t.avatar} 
                            alt="Avatar" 
                            className="w-full h-full rounded-full object-cover border-[3px] md:border-4 border-background shadow-inner" 
                          />
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="pt-24 pb-2 text-left relative z-10 flex flex-col flex-grow">
                        <h5 className="text-primary font-bold text-base md:text-lg uppercase tracking-wider mb-1 drop-shadow-[0_0_10px_rgba(212,20,255,0.4)]">
                          {t.name}
                        </h5>
                        <p className="text-white/50 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6">
                          {t.role}
                        </p>
                        
                        <div className="mt-auto">
                          <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium italic relative">
                            <span className="text-4xl md:text-5xl text-primary/30 absolute -top-4 -left-6 md:-left-8 font-serif leading-none">"</span>
                            {t.feedback}
                            <span className="text-4xl md:text-5xl text-primary/30 absolute -bottom-4 md:-bottom-6 -right-2 md:-right-4 font-serif leading-none">"</span>
                          </p>
                        </div>
                      </div>

                    </div>
                  );
                })}

              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] bg-primary/20 border border-primary/50 text-white flex items-center justify-center hover:bg-primary hover:shadow-[0_0_20px_rgba(212,20,255,0.6)] transition-all z-40"
            >
              ←
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] bg-primary/20 border border-primary/50 text-white flex items-center justify-center hover:bg-primary hover:shadow-[0_0_20px_rgba(212,20,255,0.6)] transition-all z-40"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
