'use client';

import { useState, useEffect, useRef } from 'react';

export function useCounterAnimation(targets, options = {}) {
  const { threshold = 0.3 } = options;
  const [counts, setCounts] = useState(() => targets.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          targets.forEach(({ target, duration }, index) => {
            let startTimestamp = null;
            const step = (timestamp) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = Math.min((timestamp - startTimestamp) / duration, 1);
              const eased = 1 - Math.pow(1 - progress, 3);
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.ceil(eased * target);
                return next;
              });
              if (progress < 1) window.requestAnimationFrame(step);
            };
            window.requestAnimationFrame(step);
          });
        }
      },
      { threshold }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasAnimated, targets, threshold]);

  return { counts, sectionRef };
}
