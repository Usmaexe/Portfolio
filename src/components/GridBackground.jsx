'use client';

import { motion } from 'framer-motion';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Grid pattern with fade effect on sides */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(#64FFDA 1px, transparent 1px), linear-gradient(90deg, #64FFDA 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
          }}
        />
      </div>

      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/2 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#64FFDA]/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 100, 0],
          y: [0, 50, -50, 0],
          scale: [1, 0.8, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 10
        }}
      />
    </div>
  );
}
