import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isFinishing, setIsFinishing] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) {
          const increment = prev < 30 ? 0.8 : prev < 80 ? 1.5 : 0.5;
          return Math.min(prev + increment, 100);
        }
        return 100;
      });
    }, 20);

    const timer = setTimeout(() => {
      setIsFinishing(true);
      setTimeout(onComplete, 600);
    }, 2800);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, [onComplete]);

  const text = "Welcome to My Portfolio";
  const words = text.split(" ");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#030303] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFinishing ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grain */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
        </div>

        {/* Elegant Radial Glows */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Moving Spotlight */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05)_0%,transparent_50%)]"
          animate={{
            background: [
              "radial-gradient(circle_at_30% 30%,rgba(0,229,255,0.05) 0%,transparent_50%)",
              "radial-gradient(circle_at_70% 70%,rgba(0,229,255,0.05) 0%,transparent_50%)",
              "radial-gradient(circle_at_30% 30%,rgba(0,229,255,0.05) 0%,transparent_50%)",
            ]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Text Container */}
        <div className="relative py-8 px-12 flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-x-4 mb-4">
            {words.map((word, wordIndex) => (
              <div key={wordIndex} className="flex overflow-hidden">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    className="text-3xl sm:text-4xl md:text-5xl font-sora font-medium text-white/90 inline-block drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                    initial={{ y: 80, opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{
                      delay: (wordIndex * 0.2) + (charIndex * 0.05),
                      duration: 0.8,
                      ease: [0.2, 1, 0.3, 1]
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            ))}
          </div>

          {/* Underline/Progress Container */}
          <div className="relative w-48 sm:w-64 h-[2px] bg-white/5 rounded-full overflow-hidden mb-4">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ x: "-100%" }}
              animate={{ x: `${progress - 100}%` }}
              transition={{ type: "spring", damping: 20, stiffness: 50 }}
            />
          </div>

          {/* Status Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.4em] font-inter uppercase text-primary/60 font-semibold">
              Personal Portfolio v2.0
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-mono text-white/40">
                {progress === 100 ? "READY" : "LOADING SYSTEMS..."}
              </span>
              <span className="text-[9px] font-mono text-primary/80">
                {Math.floor(progress)}%
              </span>
            </div>
          </motion.div>
        </div>

        {/* Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 pointer-events-none">
          <motion.div
            className="w-[300px] h-[300px] border border-primary/10 rounded-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.5, opacity: [0, 0.4, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
          />
          <motion.div
            className="w-[300px] h-[300px] border border-primary/5 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 2, opacity: [0, 0.2, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Finishing Flash */}
      <AnimatePresence>
        {isFinishing && (
          <motion.div
            className="absolute inset-0 bg-white z-[10000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
