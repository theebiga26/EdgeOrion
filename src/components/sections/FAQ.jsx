import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { HiOutlinePlus, HiOutlineMinus, HiPhone } from 'react-icons/hi';

const faqs = [
  { question: "Does Edge Orion support NVIDIA Jetson devices?", answer: "Yes. Our Edge AI deployment engine provides seamless integration with NVIDIA Jetson devices and the JetPack SDK, enabling high-performance distributed inference directly on the edge." },
  { question: "How does the platform reduce latency?", answer: "By processing live video streams and sensor data locally on edge devices rather than streaming all raw data to the cloud, Edge Orion drastically reduces round-trip latency and bandwidth consumption." },
  { question: "Can I manage devices across different geographic locations?", answer: "Absolutely. The Edge Operations Dashboard provides centralized fleet management, allowing you to monitor and orchestrate devices across any number of remote or distributed geographic locations." },
  { question: "Does the platform work offline?", answer: "Yes. Once an AI model is deployed to an edge device, inference continues to run locally even if cloud connectivity is temporarily lost, ensuring uninterrupted operational intelligence." },
  { question: "What types of cameras are supported?", answer: "Edge Orion is agnostic to camera hardware. We support any IP camera or RTSP stream that can connect to your edge gateways, allowing you to easily scale your visual intelligence network." }
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
                  alt="Edge Orion Support" 
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
                    Our Edge AI engineers are ready to architect your distributed intelligence infrastructure.
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
                  24/7 dedicated support for Enterprise fleet operators.
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
                  Everything you need to know about our Edge AI infrastructure.
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
