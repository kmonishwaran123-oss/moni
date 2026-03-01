import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  const [glitch, setGlitch] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 80);
    }, 800);

    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev < 30) return prev + 0.5;
        if (prev < 70) return prev + 1.5;
        return prev + 0.8;
      });
    }, 20);

    const timer = setTimeout(() => onComplete(), 3200);
    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const text = "WELCOME TO MY PORTFOLIO";
  const letters = text.split("");

  // Noise particle generation
  const noiseParticles = Array.from({ length: 40 });
  const dataFragments = Array.from({ length: 15 });

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#050505] flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Grain/Noise Overlay */}
      <div className="absolute inset-0 z-50 pointer-events-none opacity-[0.03] overflow-hidden">
        <div className="absolute inset-0 animate-noise bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat" />
      </div>

      {/* Hex Grid Background */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z' fill='none' stroke='%2300ffff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      {/* Vertical Scanlines Effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] z-[20]"
        style={{
          backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
          backgroundSize: '100% 2px, 3px 100%'
        }}
      />

      {/* Scanning Line Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-[30] opacity-30"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.2), rgba(0, 255, 255, 0.5), rgba(0, 255, 255, 0.2), transparent)",
          height: "2px",
          top: "-2%"
        }}
        animate={{ top: ["-2%", "102%"] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
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
          className={`absolute w-16 h-16 border-primary/60 shadow-[0_0_15px_rgba(0,255,255,0.3)] ${pos}`}
          initial={{ opacity: 0, scale: 0.5, rotate: i % 2 === 0 ? -90 : 90 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "backOut" }}
        />
      ))}

      {/* Floating Code Fragments */}
      {dataFragments.map((_, i) => (
        <motion.div
          key={`code-${i}`}
          className="absolute text-[9px] font-mono text-cyan-400/30 pointer-events-none whitespace-nowrap z-0"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: [0, 0.4, 0],
            x: [0, 100],
            y: [0, Math.random() < 0.5 ? -40 : 40]
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          {`>> SYST_${Math.random().toString(36).substring(7).toUpperCase()}_0x${Math.random().toString(16).slice(2, 6)}`}
        </motion.div>
      ))}

      {/* Background Rings */}
      <motion.div
        className="absolute w-[600px] h-[600px] border border-primary/20 rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.2, 0.1], scale: [0.8, 1.1, 1] }}
        transition={{ duration: 2, ease: "easeOut" }}
      />
      <motion.div
        className="absolute w-[800px] h-[800px] border-dashed border border-primary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      />

      {/* Flickering Data Points */}
      {noiseParticles.map((_, i) => (
        <motion.div
          key={`point-${i}`}
          className="absolute w-1 h-1 bg-primary/40 rounded-full z-0"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0]
          }}
          transition={{
            duration: 0.5 + Math.random() * 1.5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
      <motion.div
        className="absolute w-[1000px] h-[1000px] border border-primary/5 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />

      {/* Main Content Container */}
      <div className="relative flex flex-col items-center">
        {/* Futuristic Status Labels */}
        <motion.div
          className="absolute -top-40 left-1/2 -translate-x-1/2 flex gap-12 w-full justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="text-[10px] font-mono tracking-widest text-primary font-bold">CORE_TEMP</div>
            <div className="text-[14px] font-mono text-white">32.4°C</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-[10px] font-mono tracking-widest text-primary font-bold">LINK_STAT</div>
            <div className="text-[14px] font-mono text-white">ENCRYPTED</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-[10px] font-mono tracking-widest text-primary font-bold">UPLINK</div>
            <div className="text-[14px] font-mono text-white">0.42ms</div>
          </div>
        </motion.div>

        {/* Text Reveal */}
        <div className="relative flex flex-col items-center px-16 py-12 bg-black/60 backdrop-blur-xl rounded-[40px] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">
          {/* Inner Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-50" />

          {/* Glitch Overlay for Container */}
          {glitch && (
            <div className="absolute inset-0 bg-primary/5 animate-pulse z-0 pointer-events-none" />
          )}

          <div className="flex mb-8 relative z-10 scale-[0.85] md:scale-100">
            {letters.map((char, index) => (
              <motion.span
                key={index}
                className={`text-4xl md:text-6xl lg:text-7xl font-mono font-black tracking-[0.2em] relative ${char === " " ? "w-6 md:w-12" : ""
                  } ${glitch && char !== " " ? "text-cyan-400 scale-105" : "text-white"}`}
                initial={{ opacity: 0, scale: 0.5, filter: "blur(20px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{
                  delay: 0.2 + index * 0.04,
                  duration: 0.8,
                  ease: [0.2, 1, 0.3, 1]
                }}
              >
                {char}
                {/* Aberration Layer 1: Cyan */}
                {glitch && char !== " " && (
                  <motion.span
                    className="absolute inset-0 text-[#00ffff] -translate-x-[3px] -z-10 blur-[2px] opacity-70"
                    animate={{ x: [-2, 2, -1] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                  >
                    {char}
                  </motion.span>
                )}
                {/* Aberration Layer 2: Rose */}
                {glitch && char !== " " && (
                  <motion.span
                    className="absolute inset-0 text-[#ff0055] translate-x-[3px] -z-10 blur-[2px] opacity-70"
                    animate={{ x: [2, -2, 1] }}
                    transition={{ duration: 0.1, repeat: Infinity }}
                  >
                    {char}
                  </motion.span>
                )}
              </motion.span>
            ))}
          </div>

          {/* Sleek Progress Bar */}
          <div className="w-[320px] md:w-[450px] h-1.5 bg-white/5 rounded-full overflow-hidden mt-2 border border-white/5 relative shadow-inner">
            <motion.div
              className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-cyan-600 via-cyan-400 to-primary shadow-[0_0_20px_rgba(34,211,238,0.6)]"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
            {/* Rapid Scanning Progress Glint */}
            <motion.div
              className="absolute top-0 bottom-0 w-20 bg-white/20 blur-md"
              animate={{ left: ["-100%", "200%"] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <motion.div
            className="mt-6 flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
            <div className="text-[11px] tracking-[0.6em] font-mono text-cyan-400 font-bold uppercase">
              {progress < 100 ? `ESTABLISHING_SIGNAL` : "CONNECTION_SECURED"}
            </div>
            <div className="text-[11px] font-mono text-white/40">
              {Math.floor(progress)}%
            </div>
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
