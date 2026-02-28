import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [glitch, setGlitch] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 50);
    }, 1200);

    const progressInterval = setInterval(() => {
      setProgress(prev => Math.min(prev + 1, 100));
    }, 25);

    const timer = setTimeout(() => onComplete(), 2500);
    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const text = "WELCOME TO MY PORTFOLIO";
  const letters = text.split("");

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Hex Grid Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill-outline='none' stroke='%2300ffff' stroke-width='1' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}
      />

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.1), transparent)",
          height: "10%",
          top: "-10%"
        }}
        animate={{ top: ["-10%", "110%"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
      />

      {/* Cybernetic Corners */}
      {[
        "top-8 left-8 border-t-2 border-l-2",
        "top-8 right-8 border-t-2 border-r-2",
        "bottom-8 left-8 border-b-2 border-l-2",
        "bottom-8 right-8 border-b-2 border-r-2"
      ].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute w-12 h-12 border-primary/40 ${pos}`}
          initial={{ opacity: 0, scale: 0.5, rotate: i % 2 === 0 ? -90 : 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
        />
      ))}

      {/* Center Hex Focus */}
      <motion.div
        className="absolute w-[800px] h-[800px] border border-primary/5 rounded-full"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "anticipate" }}
      />

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center">
        {/* Futuristic Status Labels */}
        <motion.div
          className="absolute -top-32 left-1/2 -translate-x-1/2 flex gap-8 w-full justify-center opacity-40"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.4, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <div className="text-[8px] font-mono tracking-widest text-primary">CORE_TEMP: 32.4°C</div>
          <div className="text-[8px] font-mono tracking-widest text-primary">LINK_STAT: STABLE</div>
          <div className="text-[8px] font-mono tracking-widest text-primary">PWR_MODE: OVERDRIVE</div>
        </motion.div>

        {/* Text Reveal */}
        <div className="relative flex flex-col items-center px-10 py-6">
          <div className="flex mb-4">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                className={`text-3xl md:text-5xl lg:text-7xl font-mono font-bold tracking-[0.2em] relative ${char === " " ? "w-4 md:w-8" : ""
                  } ${glitch && char !== " " ? "text-primary/70 translate-x-1 skew-x-12" : "text-white"}`}
                initial={{ opacity: 0, y: 40, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  delay: 0.4 + index * 0.05,
                  type: "spring",
                  stiffness: 100,
                  damping: 10
                }}
              >
                {char}
                {/* Letter Glow */}
                <motion.span
                  className="absolute inset-0 text-primary blur-md -z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                  animate={{ opacity: [0, 0.2, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                >
                  {char}
                </motion.span>
              </motion.span>
            ))}
          </div>

          {/* Sleek Progress Bar */}
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden mt-8 border border-white/10 relative">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-primary via-cyan-400 to-primary shadow-[0_0_15px_rgba(0,255,255,0.5)]"
              style={{ width: `${progress}%` }}
            />
            <motion.div
              className="absolute inset-0 bg-white/10"
              animate={{ opacity: [0, 0.2, 0] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            />
          </div>

          <motion.div
            className="mt-4 text-[10px] tracking-[0.8em] font-mono text-cyan-400/80 uppercase font-bold text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {progress < 100 ? `INITIALIZING_SYSTEM_${progress}%` : "SYSTEM_READY"}
          </motion.div>
        </div>
      </div>

      {/* Final reveal flash */}
      <motion.div
        className="absolute inset-0 bg-white z-[10000]"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0] }}
        transition={{ delay: 2.8, duration: 0.4 }}
      />

      {/* Fade out mask */}
      <motion.div
        className="absolute inset-0 bg-[#050505] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.1, duration: 0.2 }}
      />
    </motion.div>
  );
}
