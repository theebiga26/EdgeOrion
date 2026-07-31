import { FaArrowRight, FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaPinterest } from 'react-icons/fa';

export default function Footer({ onOpenPolicy, onGoHome }) {
  return (
    <footer className="relative bg-[#05020a] text-textBase pt-32 pb-6 mt-32 rounded-t-[3rem] lg:rounded-t-[4rem] z-10 font-sans border-t border-white/10">

      {/* Topographic background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-t-[3rem] lg:rounded-t-[4rem]">
        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[120px] z-0"></div>
        {/* Topographic Lines */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100 100 Q 200 400 500 100 T 1100 100" stroke="white" strokeWidth="1" fill="none" />
            <path d="M-100 200 Q 200 500 500 200 T 1100 200" stroke="white" strokeWidth="1" fill="none" />
            <path d="M-100 300 Q 200 600 500 300 T 1100 300" stroke="white" strokeWidth="1" fill="none" />
            <path d="M-100 400 Q 200 700 500 400 T 1100 400" stroke="white" strokeWidth="1" fill="none" />
            <path d="M-100 500 Q 200 800 500 500 T 1100 500" stroke="white" strokeWidth="1" fill="none" />
            <path d="M-100 600 Q 200 900 500 600 T 1100 600" stroke="white" strokeWidth="1" fill="none" />
          </svg>
        </div>
      </div>

      {/* Overlapping Top Logo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <button
          onClick={onGoHome}
          className="w-28 h-28 md:w-36 md:h-36 rounded-3xl md:rounded-[2rem] bg-[#05020a] border-2 border-primary/50 flex items-center justify-center shadow-glow hover:shadow-[0_0_40px_rgba(212,20,255,0.6)] transition-all duration-500 overflow-hidden group cursor-pointer hover:-translate-y-2 focus:outline-none relative"
        >
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
          <img 
            src="/images/logo.svg" 
            alt="Edge Orion Logo" 
            className="w-22 h-22 md:w-30 md:h-30 object-contain group-hover:scale-110 transition-transform duration-500 relative z-10" 
          />
        </button>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 relative z-10 flex flex-col">

        {/* Main 3-Column Footer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-8 mt-8">

          {/* Left Column: Contact */}
          <div className="flex flex-col gap-6 text-textBase">
            <h3 className="text-2xl font-bold mb-2 text-white">Follow Us</h3>

            {/* Socials */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:-translate-y-1 shadow-glow group">
                <FaFacebook size={20} className="group-hover:text-primary" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:-translate-y-1 shadow-glow group">
                <FaInstagram size={20} className="group-hover:text-primary" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:-translate-y-1 shadow-glow group">
                <FaLinkedin size={20} className="group-hover:text-primary" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:-translate-y-1 shadow-glow group">
                <FaTwitter size={20} className="group-hover:text-primary" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-primary hover:border-primary/50 transition-all hover:scale-110 hover:-translate-y-1 shadow-glow group">
                <FaPinterest size={20} className="group-hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Middle Column: Brand */}
          <div className="flex flex-col items-center text-center">
            <button
              onClick={onGoHome}
              className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-4 hover:text-primary transition-colors duration-300 focus:outline-none cursor-pointer"
            >
              Edge Orion
            </button>
            <p className="text-textMuted text-sm leading-relaxed max-w-xs">
              Edge Orion is a unified Edge AI platform empowering enterprises to deploy, manage, and scale intelligent operations across distributed devices, camera networks, and sensor infrastructure — in real time, at the edge.
            </p>
          </div>

          {/* Right Column: Quick Links */}
          <div className="flex flex-col lg:items-end gap-6 text-textBase">
            <h3 className="text-2xl font-bold mb-2 lg:text-right w-full text-white">Quick Links</h3>
            <div className="w-full lg:w-auto text-textMuted">
              <ul className="space-y-4 text-[15px] lg:text-right">
                <li><a href="#home" className="hover:text-primary transition-colors block">Home</a></li>
                <li><a href="#about" className="hover:text-primary transition-colors block">About</a></li>
                <li><a href="#how-it-works" className="hover:text-primary transition-colors block">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors block">Pricing</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors block">Contact</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-textMuted w-full">
          <div className="font-medium">
            © 2026 Edge Orion. All rights reserved.
          </div>
          <div className="flex gap-6 font-medium">
            <button onClick={() => onOpenPolicy && onOpenPolicy('terms')} className="hover:text-primary transition-colors focus:outline-none">Terms of Service</button>
            <button onClick={() => onOpenPolicy && onOpenPolicy('cookies')} className="hover:text-primary transition-colors focus:outline-none">Cookies policy</button>
            <button onClick={() => onOpenPolicy && onOpenPolicy('privacy')} className="hover:text-primary transition-colors focus:outline-none">Privacy policy</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
