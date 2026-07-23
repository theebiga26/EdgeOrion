import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiOutlinePlus, HiOutlineMinus, HiPhone } from 'react-icons/hi';

const faqs = [
  { question: "How does the HTAP cluster perform sub-second queries?", answer: "Our hybrid transactional and analytical processing (HTAP) architecture separates compute from storage. This allows us to route complex analytical queries to dedicated read-nodes in real-time, completely isolating them from your high-throughput transactional nodes." },
  { question: "Is the data fully decentralized?", answer: "Yes. While we provide enterprise-grade access APIs, the underlying storage relies on a decentralized network of cryptographic nodes. Every piece of data is hashed and verified on-chain." },
  { question: "What is the maximum TPS supported?", answer: "Our infrastructure is horizontally scalable. Depending on your node allocation, you can achieve upwards of 100,000+ TPS with zero read-latency for analytical streams." },
  { question: "Do you support standard SQL/JDBC?", answer: "Absolutely. You can connect your existing BI tools, Tableau, or custom dashboards directly to our cluster using standard Postgres drivers and JDBC connections." },
  { question: "How does pricing work for storage?", answer: "Storage on our decentralized tier is completely free. You only pay for the compute resources (query execution time and TPS throughput) utilized by your active nodes." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Default first item open to show active state

  return (
    <section id="faq" className="py-24 relative border-t border-white/5 bg-transparent overflow-hidden">
      
      {/* Background Topographical Waves Structure */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center -z-10">
         <svg width="100%" height="100%">
            <path d="M 0 50 Q 25 10 50 50 T 100 50" fill="none" stroke="rgba(212,20,255,1)" strokeWidth="2" vectorEffect="non-scaling-stroke"/>
            <path d="M 0 60 Q 25 20 50 60 T 100 60" fill="none" stroke="rgba(74,0,224,1)" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
            <path d="M 0 40 Q 25 0 50 40 T 100 40" fill="none" stroke="rgba(212,20,255,1)" strokeWidth="1" vectorEffect="non-scaling-stroke"/>
            <path d="M 0 70 Q 25 30 50 70 T 100 70" fill="none" stroke="rgba(74,0,224,1)" strokeWidth="0.5" vectorEffect="non-scaling-stroke"/>
         </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bounding Box */}
        <div className="relative w-full border border-primary/20 rounded-xl p-8 md:p-12 backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden moving-border">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Cards */}
            <div className="col-span-1 lg:col-span-4 flex flex-col gap-6">
              
              {/* Image Card */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden group border border-white/10"
              >
                <img 
                  src="/assets/images/faq_support.png" 
                  alt="Web3 Support" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-[#0a0514]/70 to-transparent"></div>
                
                {/* Card Content */}
                <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                  <h3 className="text-3xl font-bold text-white mb-3 leading-tight drop-shadow-lg">
                    Need Custom<br/>Solutions?
                  </h3>
                  <p className="text-sm text-white/80 mb-6 leading-relaxed">
                    Our Web3 engineers are ready to architect your enterprise data infrastructure.
                  </p>
                  <button className="bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-8 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] text-sm shadow-[0_0_20px_rgba(212,20,255,0.4)] hover:shadow-[0_0_30px_rgba(212,20,255,0.6)] transition-all hover:scale-105 active:scale-95">
                    Learn More
                  </button>
                </div>
              </motion.div>

              {/* Contact Call Card */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-black/40 border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:border-primary/40 transition-colors shadow-lg"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center mb-5 text-primary text-2xl shadow-[0_0_15px_rgba(212,20,255,0.3)]">
                  <HiPhone />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Contact Us</h3>
                <p className="text-sm text-textMuted mb-8 leading-relaxed max-w-[250px]">
                  24/7 dedicated support for Enterprise node operators.
                </p>
                <button className="w-full bg-primary/10 text-primary border border-primary/50 font-bold py-3 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] text-sm hover:bg-primary hover:text-white transition-all hover:shadow-[0_0_20px_rgba(212,20,255,0.4)]">
                  Call Now
                </button>
              </motion.div>

            </div>

            {/* Right Column: Accordion */}
            <div className="col-span-1 lg:col-span-8 flex flex-col justify-center">
              
              {/* Header */}
              <div className="mb-10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
                  <span className="text-xs font-bold text-primary uppercase tracking-widest">F.A.Q</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Frequently Asked Questions
                </h2>
                <p className="text-textMuted text-lg">
                  Everything you need to know about our HTAP architecture.
                </p>
              </div>

              {/* Accordion List */}
              <div className="flex flex-col gap-4">
                {faqs.map((faq, index) => {
                  const isActive = openIndex === index;

                  return (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                        isActive 
                          ? 'bg-primary border-primary shadow-[0_5px_25px_rgba(212,20,255,0.3)]' 
                          : 'bg-black/40 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <button
                        className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left focus:outline-none group"
                        onClick={() => setOpenIndex(isActive ? null : index)}
                      >
                        <span className={`text-base md:text-lg font-semibold pr-8 transition-colors ${
                          isActive ? 'text-white' : 'text-white/80 group-hover:text-white'
                        }`}>
                          {faq.question}
                        </span>
                        
                        {/* Toggle Icon */}
                        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          isActive 
                            ? 'bg-white text-primary' 
                            : 'bg-white/10 text-white group-hover:bg-primary/20 group-hover:text-primary'
                        }`}>
                          {isActive ? <HiOutlineMinus className="text-lg" /> : <HiOutlinePlus className="text-lg" />}
                        </div>
                      </button>
                      
                      {/* Animated Content Body */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className={`px-6 md:px-8 pb-6 md:pb-8 text-sm md:text-base leading-relaxed ${
                              isActive ? 'text-white/90' : 'text-textMuted'
                            }`}>
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
