import { motion } from 'framer-motion';

const features = [
  {
    title: 'Semantic Multi-Media Processing',
    icon: '🔵', // Placeholder for image/icon
    delay: 0.1,
  },
  {
    title: 'Content Detection',
    icon: '📱',
    delay: 0.2,
  },
  {
    title: 'System Integration',
    icon: '⚙️',
    delay: 0.3,
  },
  {
    title: 'Consultancy Services',
    icon: '🤝',
    delay: 0.4,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: feature.delay }}
              whileHover={{ y: -10, boxShadow: '0 0 20px rgba(0, 229, 255, 0.4)' }}
              className="glass-panel p-6 flex flex-col items-center justify-center text-center group cursor-pointer transition-all h-64 relative overflow-hidden"
            >
              {/* Abstract image placeholder for the blue images in reference */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-secondary/40 to-primary/20 mb-6 flex items-center justify-center text-4xl shadow-inner border border-white/5 relative z-10">
                 {/* In a real app, this would be the actual image from the mockup */}
                 <div className="w-16 h-16 rounded-full bg-primary/20 blur-xl absolute"></div>
                 <span className="relative z-10">{feature.icon}</span>
              </div>
              
              <h3 className="font-heading font-semibold text-lg text-white relative z-10">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
