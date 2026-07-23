import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-transparent overflow-hidden">
      
      {/* Background Network Nodes Structure */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center -z-10">
         <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(212,20,255,0.5)" strokeWidth="0.2" strokeDasharray="1 1"/>
            <circle cx="50" cy="50" r="30" fill="none" stroke="rgba(74,0,224,0.3)" strokeWidth="0.5"/>
            <circle cx="20" cy="20" r="25" fill="none" stroke="rgba(212,20,255,0.2)" strokeWidth="0.3"/>
            <circle cx="85" cy="85" r="35" fill="none" stroke="rgba(74,0,224,0.2)" strokeWidth="0.3"/>
            <line x1="20" y1="20" x2="50" y2="50" stroke="rgba(212,20,255,0.2)" strokeWidth="0.1"/>
            <line x1="85" y1="85" x2="50" y2="50" stroke="rgba(74,0,224,0.2)" strokeWidth="0.1"/>
         </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Bounding Box Container */}
        <div className="relative w-full border border-primary/20 rounded-xl p-8 md:p-12 backdrop-blur-sm bg-background/60 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden moving-border">
          
          {/* Abstract glows */}
          <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-secondary/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10">
            
            {/* Left Column (Spans 4/12) */}
            <div className="lg:col-span-4 flex flex-col gap-6">
              
              {/* Portrait Image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full h-[400px] rounded-2xl overflow-hidden relative shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10"
              >
                <img 
                  src="/assets/images/about_us_portrait.png" 
                  alt="Web3 Developer" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
              </motion.div>



            </div>

            {/* Right Column (Spans 8/12) */}
            <div className="lg:col-span-8 flex flex-col gap-8 lg:gap-12">
              
              {/* Top Row Text Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">About Us</span>
                  </div>
                  <h2 className="text-3xl lg:text-5xl font-bold text-white leading-tight drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    Trusted Source for Web3 Infrastructure
                  </h2>
                </div>
                
                <div className="flex flex-col items-start mt-2 md:mt-10">
                  <p className="text-textMuted text-sm leading-relaxed mb-6 md:text-right">
                    We empower developers and enterprises with hybrid database solutions that seamlessly merge on-chain security with off-chain performance. Building the backbone of the decentralized future.
                  </p>
                  
                  {/* Enhanced CTA with Image */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full p-3 rounded-2xl bg-[#0a0514]/80 backdrop-blur-md border border-white/10 flex items-center gap-4 group cursor-pointer hover:border-primary/40 transition-all shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden relative mt-auto"
                  >
                    {/* Hover Glow Effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[40px] pointer-events-none group-hover:bg-primary/40 transition-colors duration-500"></div>
                    
                    {/* Thumbnail Image */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 relative border border-white/10 shadow-[0_0_15px_rgba(212,20,255,0.2)]">
                      <img 
                        src="/assets/images/ent_analytics.png" 
                        alt="Get Started" 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-transparent mix-blend-overlay"></div>
                    </div>
                    
                    {/* Text Content */}
                    <div className="flex flex-col flex-grow z-10 text-left pl-2">
                      <span className="text-white font-bold text-base md:text-lg group-hover:text-primary transition-colors drop-shadow-md">
                        Start Building Today
                      </span>
                      <span className="text-white/60 text-xs font-medium mt-0.5">
                        Access our developer resources
                      </span>
                    </div>
                    
                    {/* Action Icon */}
                    <div className="w-10 h-10 flex-shrink-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(212,20,255,0.4)] group-hover:shadow-[0_0_25px_rgba(212,20,255,0.7)] transition-all z-10 mr-1">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Landscape Image with Play Button */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="w-full flex-grow min-h-[300px] lg:min-h-[400px] rounded-2xl relative shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 mt-auto"
              >
                {/* Image */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <img 
                    src="/assets/images/about_us_landscape.png" 
                    alt="Global Data Network" 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-background via-transparent to-primary/20 opacity-60"></div>
                </div>

                {/* Overlapping Play Button to mimic the "cutout" effect */}
                <div className="absolute -bottom-6 -left-6 z-20">
                  <div className="relative group cursor-pointer">
                    {/* The thick border mimics the background cutout */}
                    <div className="w-24 h-24 rounded-tl-[40px] rounded-br-[40px] rounded-tr-[40px] rounded-bl-[10px] bg-background absolute -inset-3 -z-10"></div>
                    
                    <motion.div 
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-[0_0_30px_rgba(212,20,255,0.6)]"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L19 12L5 21V3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

              </motion.div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
