import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { User, Cpu, Sparkles, Zap, Users, Brain } from 'lucide-react';
import profileClose from '@/assets/profile-close.jpg';

const tags = [
  { label: 'Self Learner', icon: Brain, color: 'bg-cyan-500/10 text-cyan-500 border-cyan-500/20' },
  { label: 'Creative Thinker', icon: Sparkles, color: 'bg-rose-500/10 text-rose-500 border-rose-500/20' },
  { label: 'Team Worker', icon: Users, color: 'bg-amber-500/10 text-amber-500 border-amber-500/20' },
  { label: 'Quick Learner', icon: Zap, color: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20' },
  { label: 'Vibe Coder', icon: Cpu, color: 'bg-orange-500/10 text-orange-500 border-orange-500/20' },
];

export function AboutMe() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Stylized Illustration/Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-lg mx-auto aspect-square rounded-3xl overflow-hidden group">
              {/* This simulates the white line-art/sketch effect seen in the image */}
              <img
                src={profileClose}
                alt="About Me"
                className="w-full h-full object-cover grayscale brightness-125 contrast-150 transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2
              className="text-5xl md:text-7xl font-bold font-sora gradient-text mb-6"
            >
              About Me
            </motion.h2>

            <h3 className="text-2xl md:text-3xl font-bold mb-2">Monishwaran K</h3>
            <p className="text-xl text-muted-foreground mb-8">
              Full-Stack Dev | Mechanical Engineer | Embedded Systems
            </p>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed mb-10">
              <p>
                I'm a passionate engineer who bridges the gap between mechanical systems and software development.
                With hands-on experience in CAD design, embedded systems, and full-stack web development,
                I bring a unique perspective to every project.
              </p>
              <p>
                My journey spans from designing mechanical components in SolidWorks and AutoCAD to building
                responsive web applications with React and Node.js. I thrive on solving complex problems
                and creating solutions that make a real impact.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              {tags.map((tag, i) => (
                <motion.div
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + (i * 0.1) }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-bold cursor-default transition-all shadow-lg ${tag.color}`}
                >
                  <tag.icon size={16} />
                  {tag.label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

