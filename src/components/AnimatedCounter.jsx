import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function AnimatedCounter({ 
  value, 
  duration = 1.6, 
  decimals = 0, 
  prefix = '', 
  suffix = '',
  className = '' 
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTimestamp = null;
    const target = typeof value === 'number' ? value : parseFloat(value) || 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      
      // Luxury easeOutCubic curve for smooth deceleration
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = ease * target;
      
      setDisplayValue(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplayValue(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [inView, value, duration]);

  const formatted = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.floor(displayValue).toString();

  return (
    <span ref={ref} className={className}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
