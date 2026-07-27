import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="cta" className="py-32 relative border-t border-white/5 bg-transparent overflow-hidden">

      {/* Background Topographical Waves Structure */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none flex items-center justify-center -z-10">
        <svg width="100%" height="100%">
          <path d="M 0 50 Q 25 90 50 50 T 100 50" fill="none" stroke="rgba(212,20,255,1)" strokeWidth="2" vectorEffect="non-scaling-stroke" />
          <path d="M 0 40 Q 25 80 50 40 T 100 40" fill="none" stroke="rgba(74,0,224,1)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M 0 60 Q 25 100 50 60 T 100 60" fill="none" stroke="rgba(212,20,255,1)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d="M 0 30 Q 25 70 50 30 T 100 30" fill="none" stroke="rgba(74,0,224,1)" strokeWidth="0.5" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Full Bounding Box Container */}
        <div className="relative w-full border border-primary/20 rounded-3xl p-12 md:p-20 backdrop-blur-md bg-[#0a0514]/80 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden moving-border">

          {/* Abstract glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          {/* 3-Column CTA Layout */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-10 md:gap-16 items-center relative z-10">

            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -50, rotate: -10 }}
              whileInView={{ opacity: 1, x: 0, rotate: -3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10 hidden md:block"
            >
              <div className="relative group perspective-1000">
                {/* Stepped Geometric Borders (Top-Right Offset) */}
                <div className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:-translate-y-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="absolute inset-0 border border-primary/20 rounded-2xl"
                      style={{ transform: `translate(${i * 6}px, -${i * 6}px)`, opacity: 1 - (i * 0.1) }}></div>
                  ))}
                </div>

                {/* Main Polaroid Image */}
                <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:rotate-3 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img src="/images/team_left.png" alt="Edge Orion Team Collaborating" className="w-full h-auto object-cover aspect-[4/5]" />
                </div>
              </div>
            </motion.div>

            {/* Center Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center px-2 flex flex-col items-center justify-center"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Enterprise Edge AI Platform</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] drop-shadow-[0_0_20px_rgba(212,20,255,0.2)]">
                Ready to scale your <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">distributed intelligence?</span>
              </h2>

              <p className="text-white/60 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Join leading organizations orchestrating device fleets, cameras, and sensor networks with Edge Orion today.
              </p>

              {/* Contact Us Button — scrolls to #contact */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-12 py-4 bg-[#120a24] border border-primary/40 text-white font-bold rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] shadow-[0_0_30px_rgba(212,20,255,0.2)] hover:shadow-[0_0_40px_rgba(212,20,255,0.5)] hover:border-primary transition-all duration-300 text-sm tracking-widest uppercase relative overflow-hidden group cursor-pointer"
              >
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 z-0"></div>
              </motion.a>
            </motion.div>

            {/* Right Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 50, rotate: 10 }}
              whileInView={{ opacity: 1, x: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
              className="relative z-10 hidden md:block"
            >
              <div className="relative group perspective-1000">
                {/* Stepped Geometric Borders (Top-Left Offset) */}
                <div className="absolute inset-0 -z-10 transition-transform duration-500 group-hover:-translate-x-2 group-hover:-translate-y-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="absolute inset-0 border border-secondary/30 rounded-2xl"
                      style={{ transform: `translate(-${i * 6}px, -${i * 6}px)`, opacity: 1 - (i * 0.1) }}></div>
                  ))}
                </div>

                {/* Main Polaroid Image */}
                <div className="relative overflow-hidden rounded-2xl border border-white/20 shadow-[0_20px_40px_rgba(0,0,0,0.8)] transition-transform duration-500 group-hover:-rotate-3 group-hover:scale-[1.02]">
                  <div className="absolute inset-0 bg-secondary/20 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img src="/images/team_right.png" alt="Edge Orion Team Engineering" className="w-full h-auto object-cover aspect-[4/5]" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
