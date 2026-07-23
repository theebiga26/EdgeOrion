import { useState } from 'react';
import { motion } from 'framer-motion';

const pricingPlans = [
  {
    name: 'Developer',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Perfect for exploring and building small dapps.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    features: [
      { text: 'Up to 10k queries/month', included: true },
      { text: 'Community support', included: true },
      { text: 'Basic analytics', included: true },
      { text: 'Dedicated advanced cluster', included: false },
      { text: 'Custom SLAs', included: false }
    ],
    ctaText: 'BUY NOW',
    theme: {
      badge: 'bg-[#1a0f2e] border border-white/20 text-white',
      topBg: 'bg-[#150a21]',
      bottomBg: 'bg-[#1a0f2e]',
      button: 'border-white/30 text-white hover:bg-white/10'
    }
  },
  {
    name: 'Pro',
    monthlyPrice: 99,
    annualPrice: 79,
    description: 'For growing Web3 projects that need scale.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    features: [
      { text: 'Up to 1M queries/month', included: true },
      { text: 'Priority email support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Dedicated basic cluster', included: true },
      { text: 'Custom SLAs', included: false }
    ],
    ctaText: 'BUY NOW',
    theme: {
      badge: 'bg-gradient-to-r from-primary to-secondary text-white shadow-[0_5px_20px_rgba(212,20,255,0.4)]',
      topBg: 'bg-[#1a1125]',
      bottomBg: 'bg-gradient-to-b from-primary to-secondary',
      button: 'border-white text-white hover:bg-white hover:text-primary'
    }
  },
  {
    name: 'Enterprise',
    monthlyPrice: 499,
    annualPrice: 399,
    description: 'For massive scale and rigorous compliance.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-white/80">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
    features: [
      { text: 'Unlimited queries', included: true },
      { text: '24/7 dedicated support', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Dedicated advanced cluster', included: true },
      { text: 'Custom SLAs', included: true }
    ],
    ctaText: 'BUY NOW',
    theme: {
      badge: 'bg-[#110524] border border-secondary/50 text-white',
      topBg: 'bg-[#150a21]',
      bottomBg: 'bg-[#0f041c]',
      button: 'border-secondary/50 text-white hover:bg-secondary/20'
    }
  }
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="relative py-24 border-t border-white/5 bg-transparent overflow-hidden" id="pricing">
      
      {/* Background Diagonal Lasers Structure */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center -z-10">
         <svg width="100%" height="100%">
            <line x1="0" y1="100%" x2="100%" y2="0" stroke="rgba(212,20,255,0.2)" strokeWidth="1"/>
            <line x1="10%" y1="100%" x2="100%" y2="10%" stroke="rgba(74,0,224,0.1)" strokeWidth="4"/>
            <line x1="0" y1="90%" x2="90%" y2="0" stroke="rgba(212,20,255,0.1)" strokeWidth="2"/>
         </svg>
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10 pointer-events-none"></div>
      
      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Bounding Box Container */}
        <div className="relative w-full border border-primary/20 rounded-xl p-8 md:p-12 backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden moving-border">
          
          {/* Title & Toggle */}
          <div className="text-center mb-16 relative z-10 flex flex-col items-center">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Pricing</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-[0_0_15px_rgba(212,20,255,0.3)]">
              Transparent Pricing
            </h2>
            
            {/* Monthly / Annual Toggle */}
            <div className="flex items-center justify-center gap-4 mt-4 mb-4">
              <span className={`text-sm font-semibold transition-colors ${!isAnnual ? 'text-white' : 'text-textMuted'}`}>Monthly</span>
              
              <button 
                onClick={() => setIsAnnual(!isAnnual)}
                className="relative w-16 h-8 rounded-full bg-white/10 border border-white/20 flex items-center p-1 transition-all"
              >
                <motion.div 
                  animate={{ x: isAnnual ? 32 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-secondary shadow-[0_0_10px_rgba(212,20,255,0.6)]"
                />
              </button>

              <span className={`text-sm font-semibold transition-colors flex items-center gap-2 ${isAnnual ? 'text-white' : 'text-textMuted'}`}>
                Annually
                <span className="text-[10px] bg-primary/20 text-primary border border-primary/30 px-2 py-0.5 rounded-full">Save 20%</span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-12 lg:gap-8 relative z-10 mt-12 pb-12">
            {pricingPlans.map((plan, index) => {
              const isCenter = index === 1;
              return (
                <div 
                  key={plan.name} 
                  className={`relative w-full max-w-sm flex flex-col pt-6 transition-all duration-500 ${isCenter ? 'lg:-translate-y-4 lg:scale-105 z-20' : 'z-10'}`}
                  style={{ filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))' }}
                >
                  
                  {/* Container with clip-path for arrow bottom */}
                  <div 
                    className="w-full flex flex-col rounded-t-3xl overflow-hidden shadow-2xl"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 100% 92%, 50% 100%, 0 92%)' }}
                  >
                    {/* Top Section */}
                    <div className={`${plan.theme.topBg} flex flex-col items-center pt-12 pb-8 px-6 text-center border-b border-white/5`}>
                      
                      {/* Icon */}
                      <div className="mb-4">
                        {plan.icon}
                      </div>

                      <div className="flex items-start justify-center gap-1 mb-2">
                        <span className="text-2xl font-bold text-white mt-2">$</span>
                        <span className="text-6xl font-black text-white tracking-tighter">
                          {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                        </span>
                      </div>
                      <div className="w-16 h-[2px] bg-white/20 my-4"></div>
                      <p className="text-white/50 text-xs font-medium uppercase tracking-widest max-w-[200px]">
                        {plan.description}
                      </p>
                    </div>

                    {/* Bottom Colored Section */}
                    <div className={`${plan.theme.bottomBg} flex flex-col px-8 md:px-10 pt-10 pb-24 flex-grow`}>
                      <div className="flex flex-col gap-5 mb-10">
                        {plan.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-4">
                            <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-md">
                              {feature.included ? (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={isCenter ? '#d414ff' : '#000'} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              ) : (
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                  <line x1="18" y1="6" x2="6" y2="18"></line>
                                  <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                              )}
                            </div>
                            <span className={`text-sm font-medium ${feature.included ? 'text-white' : 'text-white/50'}`}>
                              {feature.text}
                            </span>
                          </div>
                        ))}
                      </div>

                      <button className={`w-full py-3.5 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] border-2 font-bold text-sm tracking-wider transition-all ${plan.theme.button} mx-auto max-w-[200px] mt-auto`}>
                        {plan.ctaText}
                      </button>
                    </div>
                  </div>

                  {/* Top Badge sticking out */}
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${plan.theme.badge} px-8 py-2.5 rounded-2xl font-bold tracking-widest text-sm z-30`}>
                    {plan.name.toUpperCase()}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
