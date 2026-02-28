import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import solidWorksIcon from '../assets/solidwords.png';
import {
    GraduationCap,
    Target,
    Rocket,
    Users,
    Brain,
    Zap,
    Code,
    Cpu,
    Database,
    Layout,
    Lightbulb,
    Puzzle,
    Sparkles,
    Server,
    Cloud,
    Layers
} from 'lucide-react';
import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import TechStackRadar from '@/components/TechStackRadar';

// Skill data with official brand logos and original colors
const skillsData = [
    // Web Ecosystems
    { name: "HTML5", icon: "html5", type: "devicon", category: "Web Ecosystems" },
    { name: "CSS3", icon: "css3", type: "devicon", category: "Web Ecosystems" },
    { name: "React", icon: "react", type: "devicon", category: "Web Ecosystems" },
    { name: "Next.js", icon: "nextjs", type: "devicon", category: "Web Ecosystems" },
    { name: "Node.js", icon: "nodejs", type: "devicon", category: "Web Ecosystems" },
    { name: "Tailwind CSS", icon: "tailwindcss", type: "devicon", category: "Web Ecosystems" },

    // Core Languages
    { name: "JavaScript", icon: "javascript", type: "devicon", category: "Languages" },
    { name: "TypeScript", icon: "typescript", type: "devicon", category: "Languages" },
    { name: "Python", icon: "python", type: "devicon", category: "Languages" },
    { name: "Java", icon: "java", type: "devicon", category: "Languages" },
    { name: "C/C++", icon: "cplusplus", type: "devicon", category: "Languages" },

    // Data Engine
    { name: "MySQL", icon: "mysql", type: "devicon", category: "Data Engine" },
    { name: "PostgreSQL", icon: "postgresql", type: "devicon", category: "Data Engine" },
    { name: "MongoDB", icon: "mongodb", type: "devicon", category: "Data Engine" },

    // Cloud Infrastructure
    { name: "Firebase", icon: "https://cdn.simpleicons.org/firebase/FFCA28", type: "url", category: "Cloud Infrastructure" },
    { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E", type: "url", category: "Cloud Infrastructure" },
    { name: "AWS", icon: "https://cdn.simpleicons.org/amazonwebservices/FF9900", type: "url", category: "Cloud Infrastructure" },

    // Physical Computing
    { name: "Arduino", icon: "arduino", type: "devicon", category: "Physical Computing" },
    { name: "ESP32", icon: "https://cdn.simpleicons.org/espressif/E7352C", type: "url", category: "Physical Computing" },
    { name: "Raspberry Pi", icon: "raspberrypi", type: "devicon", category: "Physical Computing" },
    { name: "Linux", icon: "linux", type: "devicon", category: "Physical Computing" },

    // Mechanical Intelligence
    {
        name: "AutoCAD (via Autodesk)",
        icon: "https://cdn.simpleicons.org/autodesk/0696D7",
        type: "url",
        category: "Mechanical Intelligence"
    },
    {
        name: "SolidWorks",
        icon: solidWorksIcon,
        type: "url",
        category: "Mechanical Intelligence"
    },
    {
        name: "ANSYS",
        icon: "https://cdn.simpleicons.org/ansys/ffb71b",
        type: "url",
        category: "Mechanical Intelligence"
    },

    // Utilities
    { name: "Git", icon: "git", type: "devicon", category: "Utilities" },
    { name: "GitHub", icon: "github", type: "devicon", category: "Utilities" },
    { name: "VS Code", icon: "vscode", type: "devicon", category: "Utilities" },
    { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/white", type: "url", category: "Utilities" },
    { name: "Netlify", icon: "https://cdn.simpleicons.org/netlify/00ADBB", type: "url", category: "Utilities" },
    { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E", type: "url", category: "Utilities" },
    { name: "Docker", icon: "docker", type: "devicon", category: "Utilities" },
];

const timeline = [
    { id: 1, year: "2024", title: "Engineering Genesis", description: "Began BE.Mechanical at Meenakshi Sundararajan Engineering College.", icon: GraduationCap },
    { id: 2, year: "2026", title: "IoT Innovation", description: "Won Second place in National Level IoT Hackathon.", icon: Zap },
    { id: 3, year: "2027", title: "Software Horizon", description: "Spearheading React-based digital transformation projects.", icon: Code },
    { id: 4, year: "2028", title: "Global Impact", description: "Bridging the gap between engineering and software at scale.", icon: Rocket },
];

const AboutPage = () => {
    return (
        <div className="relative min-h-screen">
            <div className="film-grain" aria-hidden="true" />
            <ParticleBackground />

            <div className="relative z-10">
                <Navbar />

                <main className="pb-24">
                    {/* Premium Full-width Hero Section */}
                    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden mb-24">
                        {/* Background Elements */}
                        <div className="absolute inset-0 z-0">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-gray-950/90 to-transparent" />
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#050505_70%)] opacity-80" />

                            {/* Animated Background Image */}
                            <motion.div
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 0.2 }}
                                transition={{ duration: 2, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <img
                                    src="/about-illustration.jpg"
                                    alt=""
                                    className="w-full h-full object-cover grayscale opacity-40 mix-blend-luminosity"
                                />
                            </motion.div>
                        </div>

                        <div className="container mx-auto px-6 relative z-10 text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 mb-8"
                            >
                                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                                <span className="text-[10px] font-black tracking-[0.4em] uppercase text-gray-300">
                                    The Architect's Dossier
                                </span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.7 }}
                                className="text-7xl md:text-9xl font-bold font-sora tracking-tighter mb-8 leading-none"
                            >
                                <span className="block text-white">Engineering</span>
                                <span className="gradient-text">Excellence.</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1, delay: 1.2 }}
                                className="text-gray-400 font-light tracking-[0.5em] uppercase text-xs md:text-sm max-w-2xl mx-auto"
                            >
                                Merging Physical Precision with Digital Intelligence
                            </motion.p>

                            {/* Scroll Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 2, duration: 1 }}
                                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                            >
                                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
                                <span className="text-[8px] font-black tracking-[0.5em] uppercase text-primary/60">Initialize Scroll</span>
                            </motion.div>
                        </div>
                    </section>

                    <div className="container mx-auto px-6">
                        {/* Cinematic Hero Header */}
                        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative group flex-shrink-0"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-violet-500/30 blur-[60px] opacity-20 group-hover:opacity-100 transition-opacity" />
                                <div className="w-64 aspect-[3/4] md:w-80 md:h-[500px] rounded-[48px] overflow-hidden glass-card border-white/10 group-hover:border-primary/50 transition-all duration-700 p-2 shadow-2xl relative">
                                    <div className="w-full h-full rounded-[40px] bg-gray-900 flex items-center justify-center relative overflow-hidden">
                                        <img
                                            src="/monish-profile.jpg"
                                            alt="Monishwaran K"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 origin-top"
                                            onError={(e) => { (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=Monish' }}
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                                    </div>
                                </div>
                                <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }} className="absolute -bottom-8 -right-8 glass-card p-6 border-primary/20 shadow-glow-sm">
                                    <div className="text-3xl font-bold gradient-text">7.25</div>
                                    <div className="text-[10px] font-black text-white/50 tracking-[0.3em] uppercase">Avg CGPA</div>
                                </motion.div>
                            </motion.div>

                            <div className="flex-1 space-y-12">
                                <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="h-px w-16 bg-gradient-to-r from-primary to-transparent" />
                                        <span className="text-xs font-black tracking-[0.5em] uppercase text-primary text-glow-sm">Core.Identity</span>
                                    </div>
                                    <h1 className="text-7xl md:text-10xl font-bold font-sora tracking-tighter mb-10 text-white leading-none">
                                        About <span className="gradient-text">Me</span>
                                    </h1>
                                    <div className="space-y-6 mb-12">
                                        <h2 className="text-4xl lg:text-6xl font-bold text-white tracking-tight">
                                            Monishwaran K
                                        </h2>
                                        <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-3">
                                                <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                                                <span className="text-xl font-medium tracking-widest uppercase text-white hover:text-primary transition-colors cursor-default">Hybrid Engineer</span>
                                            </div>
                                            <div className="h-4 w-px bg-white/10 hidden md:block" />
                                            <span className="text-gray-400 font-light hidden md:block italic">Mechanical x Software</span>
                                        </div>
                                    </div>
                                    <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl border-l-[3px] border-primary/30 pl-10 py-4 mb-12 hover:border-primary transition-colors">
                                        A <span className="text-white font-medium italic underline decoration-primary underline-offset-8">Mechanical Engineer</span> by education, a <span className="text-white font-medium hover:text-primary transition-colors">Software Architect</span> by intuition. I specialize in merging tactile precision with digital intelligence.
                                    </p>
                                </motion.div>

                                <div className="flex flex-wrap gap-5">
                                    {[
                                        { label: "Self-Learner", icon: Brain, color: "text-rose-400", bg: "bg-rose-500/10" },
                                        { label: "Quick Learner", icon: Zap, color: "text-amber-400", bg: "bg-amber-500/10" },
                                        { label: "Creative Thinker", icon: Sparkles, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                                        { label: "Team Player", icon: Users, color: "text-blue-400", bg: "bg-blue-500/10" },
                                        { label: "Problem Solver", icon: Puzzle, color: "text-violet-400", bg: "bg-violet-500/10" }
                                    ].map((badge, i) => (
                                        <motion.div
                                            key={i}
                                            whileHover={{ scale: 1.1, y: -4, rotate: -1 }}
                                            className={`${badge.bg} ${badge.color} px-6 py-3 rounded-3xl flex items-center gap-3 border border-white/5 backdrop-blur-xl shadow-lg transition-all`}
                                        >
                                            <badge.icon size={18} />
                                            <span className="text-[10px] font-black tracking-[0.2em] uppercase">{badge.label}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Narrative Cards */}
                        <div className="grid lg:grid-cols-2 gap-12 mb-32">
                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-card p-10 relative overflow-hidden group border-white/5">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10" />
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                                    <Brain className="text-primary" /> My Journey
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    I am a Second-Year Mechanical Engineering student with a deep passion for software development. I enjoy merging the precision of engineering with the creativity of frontend technologies, especially React. My goal is to orchestrate digital experiences that are as stable as they are beautiful.
                                </p>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="glass-card p-10 relative overflow-hidden group border-white/5">
                                <div className="absolute bottom-0 left-0 w-32 h-32 bg-violet-600/5 rounded-full blur-3xl -z-10" />
                                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-4">
                                    <Rocket className="text-violet-400" /> What Drives Me
                                </h3>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    I am motivated by building clean, user-centric solutions. Whether it's crafting high-performance interfaces or exploring the future of IoT, I thrive on turning complex problems into elegant, efficient code. For me, every project is an opportunity to learn and innovate.
                                </p>
                            </motion.div>
                        </div>

                        {/* Tech Stack: Organized by Category */}
                        <div className="mb-32">
                            <div className="flex flex-col items-center mb-16">
                                <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                                    <h2 className="text-4xl md:text-5xl font-bold font-sora text-center text-white mb-4">Core <span className="gradient-text">Tech Stack</span></h2>
                                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
                                </motion.div>
                            </div>

                            <div className="space-y-24">
                                {Array.from(new Set(skillsData.map(s => s.category))).map((category, idx) => (
                                    <div key={idx} className="space-y-10">
                                        <div className="flex items-center gap-6">
                                            <h3 className="text-xs font-black tracking-[0.6em] uppercase text-primary/60">{category}</h3>
                                            <div className="h-px flex-1 bg-white/5" />
                                        </div>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                                            {skillsData.filter(s => s.category === category).map((skill, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ scale: 1.05, y: -5, rotateZ: 1 }}
                                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                    className="group glass-card p-4 relative flex flex-col items-center justify-center overflow-hidden h-36 cursor-pointer border-white/5 active:scale-95"
                                                >
                                                    <div className="relative z-10 w-16 h-16 bg-white/[0.03] rounded-2xl flex items-center justify-center shadow-inner group-hover:shadow-glow-sm transition-all mb-4 overflow-hidden border border-white/5">
                                                        {skill.type === 'devicon' ? (
                                                            <img
                                                                src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                                                                alt={skill.name}
                                                                className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110"
                                                                loading="lazy"
                                                            />
                                                        ) : (
                                                            <img
                                                                src={skill.icon}
                                                                alt={skill.name}
                                                                className={`${skill.name === 'SolidWorks' ? 'w-14 h-14' : 'w-10 h-10'} object-contain transition-all duration-300 group-hover:scale-110`}
                                                                loading="lazy"
                                                            />
                                                        )}
                                                    </div>
                                                    <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-white transition-colors text-center px-1">{skill.name}</div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Ecosystem Expertise (Radar + Skill Progress) */}
                        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
                            <TechStackRadar />
                            <div className="space-y-6">
                                <h3 className="text-2xl font-bold text-white mb-8">Ecosystem Expertise</h3>
                                {[
                                    { area: "Frontend Development", value: 85, icon: Layout },
                                    { area: "Backend Development", value: 65, icon: Server },
                                    { area: "Database Management", value: 75, icon: Database },
                                    { area: "Embedded Systems", value: 70, icon: Cpu },
                                ].map((item, i) => (
                                    <div key={i} className="space-y-3">
                                        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-gray-400">
                                            <div className="flex items-center gap-2"><item.icon size={14} className="text-primary" /> {item.area}</div>
                                            <div className="text-white">{item.value}%</div>
                                        </div>
                                        <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.value}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: i * 0.1 }}
                                                className="h-full bg-gradient-to-r from-primary via-violet-500 to-cyan-500"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="relative max-w-4xl mx-auto">
                            <h2 className="text-4xl font-bold font-sora mb-24 text-center text-white">Operational <span className="gradient-text">Timeline</span></h2>
                            <div className="absolute left-1/2 -ml-px top-32 bottom-0 w-px bg-gradient-to-b from-primary via-violet-500 to-transparent opacity-20 hidden md:block" />
                            <div className="space-y-24">
                                {timeline.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        <div className="md:w-1/2 flex justify-end">
                                            <div className={`p-8 glass-card border-white/10 relative group hover:border-primary/50 transition-all ${i % 2 !== 0 ? 'text-left' : 'text-right'}`}>
                                                <div className={`text-sm font-bold text-primary mb-2 ${i % 2 !== 0 ? '' : 'justify-end'} flex`}>{item.year}</div>
                                                <h4 className="text-xl font-bold text-white mb-4">{item.title}</h4>
                                                <p className="text-gray-400 font-light leading-relaxed text-sm">{item.description}</p>
                                            </div>
                                        </div>
                                        <div className="relative z-10 w-14 h-14 rounded-2xl glass-card border-primary/40 flex items-center justify-center text-primary shadow-glow-sm bg-gray-900">
                                            <item.icon size={20} />
                                        </div>
                                        <div className="md:w-1/2" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </main>

            </div >
        </div >
    );
};

export default AboutPage;
