import { useEffect } from 'react';
import { motion } from 'framer-motion';

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => onComplete(), 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const letters = "Welcome To My Portfolio".split("2");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background gradient pulse */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent"
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{ duration: 2.5, ease: 'easeInOut' }}
      />

      {/* Horizontal lines */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{ top: '50%', marginTop: '-40px' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 0.84, 0.26, 1] }}
      />
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
        style={{ top: '50%', marginTop: '40px' }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 0.84, 0.26, 1] }}
      />

      {/* Welcome text with staggered letter animation */}
      <div className="relative flex overflow-hidden">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className="text-5xl md:text-5xl lg:text-5xl font-sora font-light tracking-[0.2em] text-foreground"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.4 + index * 0.08,
              duration: 0.6,
              ease: [0.16, 0.84, 0.26, 1],
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      {/* Fade out overlay */}
      <motion.div
        className="absolute inset-0 bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
      />
    </motion.div>
  );
}
