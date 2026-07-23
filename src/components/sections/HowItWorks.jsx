import { motion } from 'framer-motion';

const steps = [
  { id: 1, title: 'Discovery & Analysis', desc: 'We analyze your enterprise needs and identify AI opportunities.' },
  { id: 2, title: 'Strategic Planning', desc: 'Developing a customized roadmap for integration and deployment.' },
  { id: 3, title: 'Implementation', desc: 'Deploying state-of-the-art models with seamless system integration.' },
  { id: 4, title: 'Optimization & Scale', desc: 'Continuous monitoring, fine-tuning, and enterprise-wide scaling.' },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How It <span className="text-primary">Works</span>
          </h2>
          <p className="text-textMuted max-w-2xl mx-auto text-lg">
            A streamlined approach to transforming your enterprise with AI.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-white/10 -translate-y-1/2 rounded-full z-0">
             <motion.div 
               initial={{ width: 0 }}
               whileInView={{ width: '100%' }}
               viewport={{ once: true }}
               transition={{ duration: 1.5, ease: 'easeInOut' }}
               className="h-full bg-gradient-to-r from-primary to-secondary"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-full bg-surface border-2 border-primary/50 flex items-center justify-center text-2xl font-bold text-primary shadow-[0_0_15px_rgba(0,229,255,0.3)] mb-6">
                  {step.id}
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-textMuted text-sm">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
