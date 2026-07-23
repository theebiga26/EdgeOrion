import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Abstract Network Visualization */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] w-full"
          >
            {/* SVG/CSS based nodes and lines representing the connection diagram in the image */}
            <div className="absolute inset-0">
               {/* Lines */}
               <svg className="absolute w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                 <path d="M 10 50 C 40 50, 40 20, 80 20" stroke="#00E5FF" strokeWidth="0.5" fill="none" />
                 <path d="M 20 80 C 50 80, 50 50, 90 50" stroke="#0F52BA" strokeWidth="0.5" fill="none" />
                 <path d="M 50 10 L 50 90" stroke="#00E5FF" strokeWidth="0.2" fill="none" strokeDasharray="1,2" />
               </svg>
               
               {/* Nodes */}
               <motion.div animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 4, repeat: Infinity }} className="absolute top-[20%] right-[20%] w-12 h-12 bg-primary rounded-full shadow-glow z-10"></motion.div>
               <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }} className="absolute bottom-[20%] left-[20%] w-16 h-16 bg-secondary rounded-full shadow-[0_0_30px_#0F52BA] z-10"></motion.div>
               <div className="absolute top-[50%] left-[10%] w-4 h-4 bg-primary/50 rounded-full z-10"></div>
               
               {/* Glass UI Element mockups */}
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-72 glass-panel border border-white/20 z-20 flex flex-col p-3 overflow-hidden">
                 <div className="w-full h-1/2 bg-gradient-to-br from-primary/30 to-transparent rounded-lg mb-2 border border-white/10"></div>
                 <div className="w-full h-4 bg-white/10 rounded mb-2"></div>
                 <div className="w-2/3 h-4 bg-white/10 rounded"></div>
               </div>
               
               <div className="absolute bottom-10 right-10 w-40 h-56 glass-panel border border-white/20 z-0 flex flex-col p-3 opacity-60">
                 <div className="w-full h-full bg-gradient-to-t from-secondary/30 to-transparent rounded-lg border border-white/10"></div>
               </div>
            </div>
          </motion.div>

          {/* Right Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Discover Our Story <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-textMuted">and Team</span>
            </h2>
            
            <div className="space-y-6 text-textMuted text-lg leading-relaxed">
              <p>
                Discover the forefront of digital innovation with vcLabs, a research-driven software development, system integration, and consultancy powerhouse in the realm of digital media. From our roots as a cutting-edge start-up, we've expanded our influence across the USA, Canada, and Australia, with our headquarters nestled in Colombo, Sri Lanka.
              </p>
              <p>
                At vcLabs, we go beyond the ordinary, crafting stand-alone products and tailoring bespoke solutions to meet the unique needs of our clients. With a team of top-tier researchers, engineers, and consultants, we are on a mission to propel the digital media industry into the era of perceptual computing.
              </p>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 px-8 py-3 bg-primary/20 text-primary border border-primary/50 font-semibold rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-primary hover:text-background transition-all"
            >
              Explore
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
