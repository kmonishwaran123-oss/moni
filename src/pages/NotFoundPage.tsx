import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, AlertTriangle, ArrowLeft } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: Path not found:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen bg-transparent overflow-hidden">
      <div className="film-grain" aria-hidden="true" />
      <ParticleBackground />
      <Navbar />

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-6 pt-20">
        {/* Animated Background Glitch */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse" />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center relative"
        >
          {/* 404 with Glitch Effect */}
          <div className="relative mb-8">
            <motion.h1
              animate={{
                textShadow: [
                  "2px 2px 0px rgba(0,255,255,0.7)",
                  "-2px -2px 0px rgba(255,0,255,0.7)",
                  "2px 2px 0px rgba(0,255,255,0.7)"
                ],
                x: [0, -2, 2, 0]
              }}
              transition={{ duration: 0.2, repeat: Infinity, repeatType: "mirror" }}
              className="text-9xl md:text-[12rem] font-bold tracking-tighter text-white"
            >
              404
            </motion.h1>
            <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full -z-10 animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Neural Path <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-500">Not Found</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-lg mx-auto mb-12">
              The sector you are trying to access ({location.pathname}) has been vaporized or never existed in this timeline.
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/"
              className="group relative px-8 py-4 rounded-2xl bg-primary text-white font-bold flex items-center gap-3 overflow-hidden shadow-glow transition-all hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <Home size={20} />
              Return to Base
            </Link>

            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 rounded-2xl bg-white/5 border border-white/10 text-white font-bold flex items-center gap-2 hover:bg-white/10 transition-all active:scale-95"
            >
              <ArrowLeft size={20} />
              Previous Jump
            </button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default NotFound;
