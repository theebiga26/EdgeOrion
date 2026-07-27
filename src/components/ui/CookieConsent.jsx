import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiShield, FiCheck } from 'react-icons/fi';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 600);
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
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 80, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed bottom-6 left-4 right-4 sm:right-auto sm:left-6 z-[100] max-w-lg p-4 sm:px-5 sm:py-4 bg-[#0b0518]/95 backdrop-blur-2xl border border-primary/40 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.85),0_0_25px_rgba(212,20,255,0.25)]"
        >
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
            {/* Left: Glowing Icon & Concise Copy */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <div
                className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/20 border border-primary/40 text-primary shrink-0"
                style={{ boxShadow: '0 0 12px rgba(212,20,255,0.4)' }}
              >
                <FiShield className="w-4 h-4 drop-shadow-[0_0_6px_#D414FF]" />
              </div>
              <p className="text-white/85 text-xs sm:text-sm leading-snug font-normal">
                We use cookies to improve your experience. See our{' '}
                <a
                  href="#privacy"
                  className="text-primary hover:text-white underline decoration-primary/60 hover:decoration-white transition-colors font-semibold"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Right: Sleek Compact Cyberpunk Buttons */}
            <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end shrink-0">
              <button
                onClick={handleReject}
                className="px-4 py-2 text-xs font-semibold text-white/70 hover:text-white transition-all border border-white/20 hover:border-primary/50 rounded-xl hover:bg-white/10"
              >
                Decline
              </button>

              <button
                onClick={handleAccept}
                className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary rounded-xl shadow-[0_0_15px_rgba(212,20,255,0.5)] hover:shadow-[0_0_25px_rgba(212,20,255,0.75)] transition-all hover:scale-105 active:scale-95 border border-primary/50"
              >
                <FiCheck className="w-3.5 h-3.5" />
                <span>Accept</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
