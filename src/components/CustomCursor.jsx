import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [hoverText, setHoverText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive elements
      const target = e.target;
      const isInteractive = target.closest('button, a, input, textarea, [data-cursor-hover], .clickable');
      const textHint = target.getAttribute('data-cursor-text') || target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (isInteractive) {
        setIsHovered(true);
        setHoverText(textHint || '');
      } else {
        setIsHovered(false);
        setHoverText('');
      }
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden hidden md:block">
      {/* Inner Gold Glowing Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#c9a84c] rounded-full shadow-[0_0_10px_#c9a84c] z-[9999]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isClicked ? 0.6 : isHovered ? 1.5 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.1 }}
      />

      {/* Outer Magnetic Ring */}
      <motion.div
        className={`fixed top-0 left-0 rounded-full border border-[#c9a84c]/60 flex items-center justify-center transition-colors duration-200 ${
          isHovered ? 'bg-[#c9a84c]/10 border-[#c9a84c]' : 'bg-transparent'
        }`}
        animate={{
          x: mousePosition.x - (isHovered ? 28 : 18),
          y: mousePosition.y - (isHovered ? 28 : 18),
          width: isHovered ? 56 : 36,
          height: isHovered ? 56 : 36,
          scale: isClicked ? 0.8 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 250, mass: 0.3 }}
      >
        {hoverText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[9px] font-mono tracking-tighter text-[#c9a84c] font-semibold uppercase px-1"
          >
            {hoverText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
