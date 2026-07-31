import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const hoverRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    // Detect if device supports touch to turn off cursor mouse events
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsMobile(isTouch);
  }, []);

  // Sync state to ref to avoid re-registering event listeners when hover status changes
  useEffect(() => {
    hoverRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e) => {
      if (!isVisible) {
        setIsVisible(true);
      }
      
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const shouldHover = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) || 
                          target.closest('a') || 
                          target.closest('button') ||
                          target.classList.contains('cursor-pointer') ||
                          target.closest('.cursor-pointer');
      
      if (hoverRef.current !== !!shouldHover) {
        setIsHovering(!!shouldHover);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, isMobile]);

  if (isMobile || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div 
        ref={cursorRef}
        className="absolute top-0 left-0 w-0 h-0 flex items-center justify-center pointer-events-none"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform',
        }}
      >
        {/* Outer Ring - smooth lag transition */}
        <div className={`absolute rounded-full border transition-all duration-300 ease-out pointer-events-none ${
          isHovering 
            ? 'w-14 h-14 border-secondary bg-secondary/15 shadow-[0_0_25px_rgba(74,0,224,0.6)] scale-110' 
            : 'w-8 h-8 border-primary/30 bg-transparent scale-100'
        }`} />
        
        {/* Inner Dot - tracks mouse immediately */}
        <div className={`absolute rounded-full transition-all duration-200 ease-out pointer-events-none ${
          isHovering 
            ? 'w-2 h-2 bg-white shadow-[0_0_12px_rgba(255,255,255,1)]' 
            : 'w-2.5 h-2.5 bg-primary shadow-[0_0_8px_rgba(212,20,255,0.8)]'
        }`} />
      </div>
    </div>
  );
}
