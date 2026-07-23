import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';

const features = [
  {
    id: 1,
    title: "Petabyte-Scale Storage",
    tag: "Storage",
    metric: "Free Unlimited Storage",
    image: "/assets/images/ent_storage.png",
    desc: "Major blockchains generate terabytes of data. Our network scales to petabytes elastically, and data storage is always free. Load in your own data from source systems with REST APIs, JDBC, Kafka streams, ETL tools, etc."
  },
  {
    id: 2,
    title: "Encryption & Privacy",
    tag: "Security",
    metric: "AES-256 & ZK Proofs",
    image: "/assets/images/ent_privacy.png",
    desc: "We encrypt private data at rest and in transit, and enable enterprises to join public on-chain data with sensitive, private off-chain data loaded in."
  },
  {
    id: 3,
    title: "High-Throughput",
    tag: "Performance",
    metric: "100k+ TPS Scalability",
    image: "/assets/images/ent_throughput.png",
    desc: "We scale to thousands of concurrent requests with high TPS to power dapps and analytics... regardless of the query complexity."
  },
  {
    id: 4,
    title: "Real-time Analytics",
    tag: "Compute",
    metric: "<1ms Query Latency",
    image: "/assets/images/ent_analytics.png",
    desc: "Execute sub-second analytical queries on live, streaming data without impacting the performance of your high-volume transactional workloads."
  },
  {
    id: 5,
    title: "Decentralized Integrity",
    tag: "Consensus",
    metric: "100% Trustless Verification",
    image: "/assets/images/ent_integrity.png",
    desc: "Every query executed against our cluster is cryptographically verified using zk-proofs, ensuring complete trustless data integrity."
  },
  {
    id: 6,
    title: "Automated Compliance",
    tag: "Governance",
    metric: "SOC 2 & GDPR Ready",
    image: "/assets/images/ent_compliance.png",
    desc: "Built-in audit trails and automated regulatory reporting tools designed specifically for the unique demands of Web3 enterprises."
  }
];

export default function EnterpriseScale() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        const cardWidth = window.innerWidth >= 768 ? 350 + 24 : 320 + 24; // card width + gap (24px)
        
        // If we've reached the end, scroll back to the beginning
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          // Scroll to the next card
          scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 4000); // scrolls every 4 seconds

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="relative py-24 border-t border-white/5 overflow-hidden bg-transparent">
      
      {/* Background Isometric Grid */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="isometricGrid" width="40" height="23" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
              <path d="M20,0 L40,11.5 L20,23 L0,11.5 Z" fill="none" stroke="rgba(212,20,255,0.2)" strokeWidth="0.5"/>
              <path d="M20,23 L20,46" fill="none" stroke="rgba(212,20,255,0.2)" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#isometricGrid)" />
        </svg>
      </div>

      <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Split Layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 relative">
          
          {/* Left Column (Sticky Text) */}
          <div className="lg:col-span-4 relative">
            <div className="lg:sticky lg:top-32 flex flex-col items-start pr-4">
              
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Features</span>
              </div>
              
              <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-md">
                Infrastructure.
              </h2>
              
              <p className="text-lg text-textMuted font-medium mb-10 leading-relaxed max-w-sm">
                Unforgettable decentralized performance.<br/>
                Easy & elastic scalability for tens of terabytes of decentralized data.
              </p>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-primary/80 to-secondary/80 text-white font-bold rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] text-base flex items-center gap-2 border border-white/10 shadow-[0_0_20px_rgba(212,20,255,0.3)] backdrop-blur-md hover:shadow-[0_0_30px_rgba(212,20,255,0.5)] transition-all"
              >
                Get Started
                <HiOutlineArrowRight className="text-lg" />
              </motion.button>
              
            </div>
          </div>

          {/* Right Column (Horizontal Carousel) */}
          <div className="lg:col-span-8 overflow-hidden rounded-2xl relative">
            
            {/* The Scrolling Container */}
            <div 
              ref={scrollRef}
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory hide-scrollbar relative z-10 pl-2 lg:pl-0 pt-2"
            >
              
              {features.map((feature, index) => (
                <motion.div 
                  key={feature.id}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex-none w-[320px] md:w-[350px] h-[550px] relative rounded-2xl overflow-hidden snap-start group border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] cursor-pointer"
                >
                  {/* Full Background Image */}
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                  />
                  
                  {/* Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/80 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Left Tag */}
                  <div className="absolute top-6 left-6">
                    <span className="text-white/90 text-sm font-medium tracking-wide drop-shadow-md">
                      {feature.tag}
                    </span>
                  </div>

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-3 leading-tight drop-shadow-lg group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-sm text-white/70 leading-relaxed font-light line-clamp-4 group-hover:text-white/90 transition-colors">
                      {feature.desc}
                    </p>
                    
                    {/* Feature Specific Metric */}
                    <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                      <span className="text-base font-bold text-white tracking-wide">
                        {feature.metric}
                      </span>
                      <div className="w-8 h-8 flex-shrink-0 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <HiOutlineArrowRight className="text-white group-hover:text-primary transition-colors" />
                      </div>
                    </div>
                  </div>
                  
                </motion.div>
              ))}

            </div>
            
            {/* Scroll indicator hint for desktop */}
            <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-background to-transparent pointer-events-none z-20 hidden lg:block"></div>
          </div>

        </div>
      </div>
      
      {/* CSS to hide scrollbar for webkit and standard */}
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
