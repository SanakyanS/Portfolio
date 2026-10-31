import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
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
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('[role="button"]')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
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

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {/* Precise center dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#c5a059]"
        style={{
          transform: `translate3d(${mousePosition.x - 3}px, ${mousePosition.y - 3}px, 0)`,
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: 1,
        }}
        transition={{ duration: 0.15 }}
      />

      {/* Subtle outer tracking ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#c5a059]/40"
        style={{
          transform: `translate3d(${mousePosition.x - (isHovered ? 20 : 12)}px, ${mousePosition.y - (isHovered ? 20 : 12)}px, 0)`,
          width: isHovered ? 40 : 24,
          height: isHovered ? 40 : 24,
        }}
        animate={{
          scale: isHovered ? 1.15 : 1,
          borderColor: isHovered ? 'rgba(197, 160, 89, 0.7)' : 'rgba(197, 160, 89, 0.3)',
          backgroundColor: isHovered ? 'rgba(197, 160, 89, 0.05)' : 'transparent',
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 300,
          mass: 0.5,
        }}
      />
    </div>
  );
}
