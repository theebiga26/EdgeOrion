import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const hoverRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Sync state to ref to avoid re-registering event listeners when hover status changes
  useEffect(() => {
    hoverRef.current = isHovering;
  }, [isHovering]);

  useEffect(() => {
    const updatePosition = (e) => {
      if (!isVisible) {
        setIsVisible(true);
      }
      
      if (cursorRef.current) {
        const offset = hoverRef.current ? 10 : 6;
        cursorRef.current.style.transform = `translate3d(${e.clientX - offset}px, ${e.clientY - offset}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      
      const shouldHover = ['A', 'BUTTON', 'INPUT', 'TEXTAREA'].includes(target.tagName) || 
                          target.closest('a') || 
                          target.closest('button');
      
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
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      <div 
        ref={cursorRef}
        className={`absolute top-0 left-0 rounded-full transition-all duration-150 ease-out ${isHovering ? 'w-5 h-5 bg-white' : 'w-3 h-3 bg-primary'}`}
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform',
        }}
      ></div>
    </div>
  );
}
