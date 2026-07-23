import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the user has already answered the prompt
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      // Show it after a short delay for better UX upon page load
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-6 right-6 md:right-auto md:left-8 md:bottom-8 z-[100] md:w-[450px] p-6 bg-[#0a0514]/90 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
        >
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-full text-primary mt-1 shadow-glow shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-white/80 text-[15px] leading-relaxed">
                We use cookies to improve your experience. See our <a href="#" className="text-primary hover:underline font-medium">Privacy Policy</a>.
              </p>
            </div>
            
            <div className="flex gap-4 justify-end mt-2">
              <button 
                onClick={handleReject}
                className="px-6 py-2.5 text-sm font-semibold text-white/70 hover:text-white transition-all border border-white/20 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px] rounded-bl-[4px] hover:bg-white/10"
              >
                Reject
              </button>
              <button 
                onClick={handleAccept}
                className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-tl-[20px] rounded-br-[20px] rounded-tr-[4px] rounded-bl-[4px] shadow-[0_0_15px_rgba(212,20,255,0.4)] hover:shadow-[0_0_25px_rgba(212,20,255,0.6)] transition-all hover:scale-105 active:scale-95 border border-primary/50"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
