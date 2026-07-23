import { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';

function AnimatedCounter({ from, to, duration = 2, suffix = '', prefix = '', decimals = 0, delay = 0 }) {
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-20px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        delay,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = prefix + value.toFixed(decimals) + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, delay, inView, prefix, suffix, decimals]);

  return (
    <span ref={nodeRef} className="text-3xl md:text-4xl font-black text-white mb-1 tracking-tight drop-shadow-[0_0_15px_rgba(212,20,255,0.4)]">
      {prefix}{from}{suffix}
    </span>
  );
}

export default function StatsBanner() {
  const stats = [
    { label: "Uptime Rate", from: 0, to: 99.9, decimals: 1, suffix: "%", delay: 0 },
    { label: "Queries Served", from: 0, to: 245, decimals: 0, suffix: "M+", delay: 0.1 },
    { label: "Global Nodes", from: 0, to: 54, decimals: 0, suffix: "+", delay: 0.2 },
    { label: "Smart Contracts", from: 0, to: 12, decimals: 0, suffix: "K+", delay: 0.3 },
    { label: "Avg Latency", from: 100, to: 5, decimals: 0, suffix: "ms", delay: 0.4 },
  ];

  return (
    <section className="relative py-12 bg-[#0a0514]/90 backdrop-blur-xl border-y border-white/10 z-20 shadow-[0_0_40px_rgba(212,20,255,0.08)]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-row justify-between items-center gap-12 overflow-x-auto hide-scrollbar">
          
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center gap-12 min-w-max">
              <div className="flex flex-col items-center sm:items-start">
                <AnimatedCounter 
                  from={stat.from} 
                  to={stat.to} 
                  decimals={stat.decimals} 
                  suffix={stat.suffix} 
                  delay={stat.delay}
                />
                <span className="text-xs text-primary font-semibold uppercase tracking-widest mt-1">
                  {stat.label}
                </span>
              </div>
              
              {/* Divider (except for last item) */}
              {index < stats.length - 1 && (
                <div className="w-[1px] h-12 bg-white/10"></div>
              )}
            </div>
          ))}

        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </section>
  );
}
