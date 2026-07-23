import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Bounding Box Container */}
        <div className="relative w-full border border-primary/20 rounded-3xl p-12 md:p-20 backdrop-blur-md bg-[#0a0514]/80 shadow-[0_0_60px_rgba(0,0,0,0.9)] overflow-hidden moving-border">
          
          {/* Abstract glows inside the box */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            
            {/* Left Side: Text & Info */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(212,20,255,0.8)]"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Get In Touch</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1]">
                Let's build the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">future together.</span>
              </h2>
              
              <p className="text-white/60 text-lg leading-relaxed mt-4 max-w-md">
                Whether you have a technical question, want to explore partnership opportunities, or just need more information, our team is here to help.
              </p>
              
              <div className="flex flex-col gap-6 mt-8">
                {/* Email */}
                <div className="flex items-center gap-4 text-textMuted">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" clipRule="evenodd" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Email Us</p>
                    <p className="text-sm">hello@edgeorion.io</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center gap-4 text-textMuted">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Phone</p>
                    <p className="text-sm">0511 - 43 22 99</p>
                  </div>
                </div>
                
                {/* Website */}
                <div className="flex items-center gap-4 text-textMuted">
                  <div className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white font-semibold">Website</p>
                    <p className="text-sm">www.edgeorion.io</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side: Form Container */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full"
            >
              <form className="w-full flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="w-full">
                    <label className="text-sm text-textMuted font-medium mb-2 block">Your Name</label>
                    <input type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm shadow-inner" required />
                  </div>
                  <div className="w-full">
                    <label className="text-sm text-textMuted font-medium mb-2 block">Email Address</label>
                    <input type="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm shadow-inner" required />
                  </div>
                </div>
                
                <div className="w-full">
                  <label className="text-sm text-textMuted font-medium mb-2 block">Subject</label>
                  <input type="text" placeholder="How can we help?" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm shadow-inner" required />
                </div>
                
                <div className="w-full">
                  <label className="text-sm text-textMuted font-medium mb-2 block">Message</label>
                  <textarea placeholder="Write your message here..." rows="5" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder-white/30 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm shadow-inner resize-none" required></textarea>
                </div>
                
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full mt-4 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] shadow-[0_0_20px_rgba(212,20,255,0.3)] hover:shadow-[0_0_30px_rgba(212,20,255,0.6)] hover:border-primary transition-all duration-300 text-sm tracking-widest uppercase relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Message</span>
                </motion.button>
              </form>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
