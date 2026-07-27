import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 150; // offset for early activation
      let current = '';
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && scrollPos >= section.offsetTop) {
          current = link.name;
        }
      });
      setActiveLink(current);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Set active link from URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const matching = navLinks.find((link) => link.href === hash);
      if (matching) setActiveLink(matching.name);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none transition-all duration-300">
      <nav className="pointer-events-auto w-full md:w-max bg-[#0a0514]/70 backdrop-blur-xl border border-white/20 rounded-full px-4 md:px-8 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.5)]">
        <div className="flex justify-between items-center gap-8 md:gap-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_15px_rgba(212,20,255,0.5)]">
              <span className="font-heading font-bold text-white text-sm">EO</span>
            </div>
            <span className="font-heading font-bold text-lg tracking-tight text-white hidden sm:block">Edge Orion</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`relative ${activeLink === link.name ? 'text-white after:w-full' : 'text-white/70'} hover:text-primary transition-colors text-sm font-semibold tracking-wide duration-300 hover:scale-105 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full focus:outline-none`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-white font-bold py-2 px-6 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] transition-all shadow-[0_0_20px_rgba(212,20,255,0.3)] hover:shadow-[0_0_30px_rgba(212,20,255,0.6)] hover:-translate-y-0.5 border border-white/10 text-sm hover:scale-105 focus:outline-none"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white focus:outline-none p-1"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 10 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 right-0 mt-4 md:hidden bg-[#0a0514]/95 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-4"
            >
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2 rounded-lg text-base font-semibold text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="pt-2 border-t border-white/10">
                  <a
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3 px-6 rounded-tl-[30px] rounded-br-[30px] rounded-tr-[4px] rounded-bl-[4px] transition-colors shadow-lg"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}
