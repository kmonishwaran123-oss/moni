import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Download,
  ArrowRight,
  Github,
  Linkedin,
  Instagram,
  Rocket,
  Star,
  GitFork,
  Layers,
  Sparkles,
  Trophy,
  Target,
  Code2,
  Cpu,
  GraduationCap
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import { IntroAnimation } from '@/components/IntroAnimation';
import TypewriterEffect from '@/components/TypewriterEffect';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const [showIntro, setShowIntro] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Monishwaran K | Portfolio";
  }, []);

  const typewriterWords = [
    "Where hardware precision meets software intelligence.",

    "Turning circuits into smart, connected experiences.",

    "From microcontrollers to modern web platforms.",

    "Engineering systems that bridge the physical and digital worlds.",

    "Powering real-world devices with scalable code.",

    "Transforming sensor data into meaningful insights.",

    "Designing embedded logic with full-stack vision.",

    "Building complete ecosystems — from silicon to software.",
  ];

  const stats = [
    { label: "Projects Completed", value: "10+", icon: Rocket, gradient: "from-cyan-500 to-blue-600" },
    { label: "Technologies Mastered", value: "10+", icon: Layers, gradient: "from-violet-500 to-purple-600" },
    { label: "Competitions Won", value: "2", icon: Star, gradient: "from-yellow-500 to-orange-600" },
    { label: "Years of Experience", value: "1+", icon: Code2, gradient: "from-emerald-500 to-teal-600" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Monishwaran_K_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (showIntro) {
    return <IntroAnimation onComplete={() => setShowIntro(false)} />;
  }

  return (
    <div className="relative min-h-screen">
      <div className="film-grain" aria-hidden="true" />
      <ParticleBackground />

      <div className="relative z-10">
        <Navbar />

        <main>
          {/* Enhanced Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            <div className="container mx-auto px-6 relative z-10 text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8 cursor-default group"
              >
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase text-gray-300 group-hover:text-primary transition-colors">
                  Innovator & Developer
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold font-sora tracking-tighter mb-8"
              >
                <span className="block text-white">Monishwaran K</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-4xl mx-auto mb-12"
              >
                <h2 className="text-xl md:text-2xl font-light text-gray-400 mb-6 leading-relaxed">
                  Aspiring Frontend Developer | React.js Specialist | Engineering Student
                </h2>
                <TypewriterEffect
                  words={typewriterWords}
                  className="text-primary font-mono text-lg md:text-xl md:justify-center h-12"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap items-center justify-center gap-6"
              >
                <Button
                  onClick={handleDownload}
                  className="btn-primary px-10 py-7 text-lg rounded-2xl group relative overflow-hidden shadow-glow"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"
                  />
                  <Download className="mr-2 h-5 w-5" />
                  Get Resume
                </Button>
                <Button
                  onClick={() => navigate('/about')}
                  className="btn-outline px-10 py-7 text-lg rounded-2xl border-white/10 hover:border-primary/50 text-white"
                >
                  Explore Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-16 flex justify-center gap-8"
              >
                {[
                  { icon: Github, href: "https://github.com/kmonishwaran123-oss" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/monishwaran-k-b463a3363" },
                  { icon: Instagram, href: "https://www.instagram.com/k._.monish/" }
                ].map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                    className="p-4 rounded-2xl glass-card border-white/5 text-gray-400 hover:text-primary transition-all duration-300"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Enhanced Stats Section */}
          <section className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <h2 className="text-4xl md:text-5xl font-bold font-sora gradient-text mb-4">
                  By the Numbers
                </h2>
                <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
              </motion.div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-white">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="glass-card p-10 text-center relative group bg-gray-900/40 backdrop-blur-xl border-white/5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className={`w-14 h-14 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg group-hover:shadow-glow-sm transition-shadow`}>
                      <stat.icon size={24} className="text-white" />
                    </div>
                    <div className="text-4xl md:text-5xl font-bold gradient-text mb-2 tracking-tighter">
                      {stat.value}
                    </div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Quick Navigation Cards */}
          <section className="py-24 relative">
            <div className="container mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { title: "The Lab", desc: "Interactive experiments & production code.", path: "/projects", icon: Rocket, bgIcon: Cpu, color: "from-blue-600 to-cyan-500" },
                  { title: "Academy", desc: "Professional certifications & hackathons.", path: "/certifications", icon: GraduationCap, bgIcon: Trophy, color: "from-amber-500 to-orange-500" },
                  { title: "Frontlines", desc: "Timeline of events & achievements.", path: "/events", icon: Target, bgIcon: Sparkles, color: "from-rose-500 to-pink-500" }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => navigate(item.path)}
                    className="group glass-card p-10 cursor-pointer relative overflow-hidden bg-gray-900/40 border-white/5 hover:border-primary/50 transition-all"
                  >
                    <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.color} opacity-[0.03] group-hover:opacity-10 transition-opacity`} />

                    {/* Background Decorative Icon */}
                    <div className="absolute -bottom-6 -right-6 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-700 group-hover:-translate-y-4 group-hover:-translate-x-4">
                      <item.bgIcon size={180} className="text-white" />
                    </div>

                    {/* Creative Grid Pattern */}
                    <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity duration-500"
                      style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                    <div className="p-4 rounded-2xl bg-white/5 w-fit mb-8 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500">
                      <item.icon size={32} className="text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors relative z-10">{item.title}</h3>
                    <div className="w-12 h-0.5 bg-primary/30 group-hover:w-20 group-hover:bg-primary transition-all duration-500 mb-4 relative z-10" />
                    <p className="text-gray-400 mb-8 font-light relative z-10">{item.desc}</p>
                    <div className="flex items-center text-primary font-bold text-xs tracking-widest uppercase group-hover:gap-3 transition-all relative z-10">
                      Access Terminal <ArrowRight size={16} className="ml-2" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </main>

      </div>
    </div>
  );
};

export default HomePage;
