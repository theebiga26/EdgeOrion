import { useState, useEffect, useRef } from 'react';

export default function LazySection({ children, fallback = null, minHeight = '300px' }) {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '300px 0px', // Load section 300px before it enters the viewport
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: inView ? 'auto' : minHeight }} className="w-full">
      {inView ? children : fallback}
    </div>
  );
}
