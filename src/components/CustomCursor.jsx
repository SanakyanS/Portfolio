import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [hoverState, setHoverState] = useState('default'); // 'default' | 'interactive' | 'view'
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only active on desktop pointer devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handlePointerOver = (e) => {
      const target = e.target;
      if (target.closest('[data-cursor="view"]')) {
        setHoverState('view');
      } else if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]')
      ) {
        setHoverState('interactive');
      } else {
        setHoverState('default');
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('pointerover', handlePointerOver);
    document.body.addEventListener('mouseleave', onMouseLeave);
    document.body.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('pointerover', handlePointerOver);
      document.body.removeEventListener('mouseleave', onMouseLeave);
      document.body.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isView = hoverState === 'view';
  const isInteractive = hoverState === 'interactive';
  const ringSize = isView ? 54 : isInteractive ? 38 : 22;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[120] overflow-hidden">
      {/* Precise center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#C7A86B]"
        style={{
          transform: `translate3d(${mousePosition.x - 3}px, ${mousePosition.y - 3}px, 0)`,
        }}
        animate={{
          scale: isInteractive || isView ? 0 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Outer tracking ring with optional VIEW mode */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#C7A86B]/40 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translate3d(${mousePosition.x - ringSize / 2}px, ${mousePosition.y - ringSize / 2}px, 0)`,
          width: ringSize,
          height: ringSize,
        }}
        animate={{
          borderColor: isView || isInteractive ? 'rgba(199, 168, 107, 0.65)' : 'rgba(199, 168, 107, 0.28)',
          backgroundColor: isView ? 'rgba(199, 168, 107, 0.12)' : isInteractive ? 'rgba(199, 168, 107, 0.05)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 320,
          mass: 0.45,
        }}
      >
        {isView && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-widest font-semibold text-[#C7A86B] uppercase select-none"
          >
            VIEW
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
