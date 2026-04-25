import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShockwaveIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'initial' | 'shockwave' | 'out'>('initial');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Progress bar simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 15);

    // Sequence timing
    const shockwaveTimer = setTimeout(() => setPhase('shockwave'), 2000);
    const outTimer = setTimeout(() => setPhase('out'), 2800);
    const completeTimer = setTimeout(onComplete, 3500);

    return () => {
      clearInterval(interval);
      clearTimeout(shockwaveTimer);
      clearTimeout(outTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'out' ? 0 : 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Deep Space Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.03)_0%,transparent_70%)]" />
        <div className="absolute inset-0 bg-[#050505]" />
      </div>

      {/* The Shockwave Ring */}
      <AnimatePresence>
        {phase === 'shockwave' && (
          <motion.div
            initial={{ scale: 0, opacity: 1, border: "2px solid rgba(0, 255, 255, 0.8)" }}
            animate={{ 
              scale: 4, 
              opacity: 0, 
              border: "0px solid rgba(0, 255, 255, 0)",
              filter: "blur(4px)" 
            }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute w-[400px] h-[400px] rounded-full pointer-events-none z-20"
          />
        )}
      </AnimatePresence>

      {/* Secondary Waves */}
      <AnimatePresence>
        {phase === 'shockwave' && (
          <motion.div
            initial={{ scale: 0, opacity: 0.5 }}
            animate={{ scale: 3, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.1, ease: "easeOut" }}
            className="absolute w-[400px] h-[400px] bg-cyan-500/10 rounded-full pointer-events-none z-10 blur-xl"
          />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-30 flex flex-col items-center">
        {/* Logo/Icon Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: phase === 'shockwave' ? 1.1 : 1, 
            opacity: 1,
            filter: phase === 'shockwave' ? "brightness(2)" : "brightness(1)"
          }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-[2px] shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <div className="w-full h-full bg-[#050505] rounded-[14px] flex items-center justify-center overflow-hidden">
               <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-500 font-sora">
                M
               </span>
            </div>
          </div>
        </motion.div>

        {/* Text Animation */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl font-bold tracking-[0.2em] text-white uppercase font-sora"
          >
            MONISHWARAN
          </motion.h1>
        </div>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.8, duration: 1 }}
          className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-48 mb-6"
        />

        {/* Progress Tracker */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-[10px] tracking-[0.5em] text-cyan-400/60 font-medium uppercase animate-pulse">
            {progress < 100 ? "System Initialization" : "Ready for Flight"}
          </div>
          
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-white/30">0%</span>
            <div className="w-32 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-[10px] font-mono text-white/30">100%</span>
          </div>
        </div>
      </div>

      {/* Screen Distortional Flash */}
      <AnimatePresence>
        {phase === 'shockwave' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.2, 0] }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 bg-white z-[100] pointer-events-none"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
