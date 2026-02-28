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
import TechStackRadar from '@/components/TechStackRadar';
import { useTilt } from '@/hooks/useTilt';

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
    { id: 1, year: "2024", title: "Engineering", description: "Began BE.Mechanical at Meenakshi Sundararajan Engineering College.", icon: GraduationCap },
    { id: 2, year: "2026", title: "IoT Innovation", description: "Won Second place in  IoT Hackathon.", icon: Zap },
    { id: 3, year: "2027", title: "Gaining Software Knowledge", description: "Spearheading React-based digital transformation projects.", icon: Code },
    { id: 4, year: "2028", title: "Global Impact", description: "Bridging the gap between engineering and software at scale.", icon: Rocket },
];

const AboutPage = () => {
    const portraitRef = useTilt<HTMLDivElement>({ maxTilt: 10, scale: 1.02 });
    const quoteRef = useTilt<HTMLDivElement>({ maxTilt: 5, scale: 1.01 });

    return (
        <div className="relative min-h-screen">
            <div className="film-grain" aria-hidden="true" />

            <div className="relative z-10">
                <Navbar />

                <main className="pt-32 pb-24">
                    <div className="container mx-auto px-6">
                        {/* Cinematic Hero Header */}
                        <div className="flex flex-col lg:flex-row gap-20 items-center mb-32">
                            <motion.div
                                ref={portraitRef}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="relative group flex-shrink-0 cursor-crosshair"
                            >
                                <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-violet-500/30 blur-[60px] opacity-20 group-hover:opacity-100 transition-opacity" />
                                <div className="w-64 aspect-[3/4] md:w-80 md:h-[520px] rounded-[48px] overflow-hidden glass-card border-white/10 group-hover:border-primary/50 transition-all duration-700 p-2 shadow-[0_0_50px_-12px_rgba(6,182,212,0.3)] relative">
                                    <div className="w-full h-full rounded-[40px] bg-gray-950 flex items-center justify-center relative overflow-hidden">
                                        {/* HUD Scanning Line */}
                                        <motion.div
                                            animate={{ top: ['0%', '100%', '0%'] }}
                                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent z-20 pointer-events-none opacity-0 group-hover:opacity-100"
                                        />

                                        <img
                                            src={`${import.meta.env.BASE_URL}monish-profile.jpg`}
                                            alt="Monishwaran K"
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 origin-top brightness-[0.9] group-hover:brightness-110 contrast-[1.1]"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />

                                        {/* Decorative HUD Corners */}
                                        {[
                                            "top-4 left-4 border-t border-l",
                                            "top-4 right-4 border-t border-r",
                                            "bottom-4 left-4 border-b border-l",
                                            "bottom-4 right-4 border-b border-r"
                                        ].map((style, i) => (
                                            <div key={i} className={`absolute w-4 h-4 border-primary/40 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${style}`} />
                                        ))}

                                        {/* Floating Badge HUD */}
                                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                            <div className="flex flex-col">
                                                <span className="text-[8px] font-bold tracking-[0.2em] text-cyan-400 uppercase mb-1">Status</span>
                                                <span className="text-[10px] font-mono text-white/80 tracking-tighter">CORE_ACTIVE</span>
                                            </div>
                                            <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center backdrop-blur-md">
                                                <Sparkles size={12} className="text-primary animate-pulse" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                                    <motion.div
                                        ref={quoteRef}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="relative group mt-12 mb-16 transform-gpu transition-all"
                                    >
                                        <div className="absolute -inset-y-4 -inset-x-8 bg-primary/2 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                        <div className="absolute left-0 inset-y-0 w-[5px] bg-gradient-to-b from-primary via-violet-500 to-transparent rounded-full shadow-[0_0_20px_rgba(6,182,212,0.5)]" />

                                        <p className="text-2xl md:text-4xl lg:text-5xl text-gray-300 font-extralight leading-[1.1] pl-10 py-2 max-w-4xl tracking-tighter">
                                            <span className="relative inline-block group/me">
                                                <span className="text-white font-black italic bg-clip-text text-transparent bg-gradient-to-r from-gray-100 via-white to-gray-500 animate-pulse">Mechanical</span>
                                                <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-primary/20 group-hover:bg-primary transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.4)]" />
                                            </span> by degree, <br className="hidden md:block" />
                                            <span className="relative inline-block group/sa">
                                                <span className="text-white font-black bg-clip-text text-transparent bg-gradient-to-r from-primary via-violet-400 to-cyan-400 drop-shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover/sa:drop-shadow-[0_0_25px_rgba(124,58,237,0.7)] transition-all">Software</span>
                                                <span className="absolute -left-3 top-0 bottom-0 w-[2px] bg-primary/0 group-hover/sa:bg-primary/50 transition-all" />
                                                <span className="absolute -right-3 top-0 bottom-0 w-[2px] bg-primary/0 group-hover/sa:bg-primary/50 transition-all" />
                                            </span> by destiny. <br className="hidden md:block" />
                                            <span className="text-xl md:text-2xl text-gray-400 mt-10 block font-mono tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity border-l border-white/5 pl-8 py-2">
                                                I bridge the gap between <span className="text-white italic underline decoration-primary/30 decoration-dashed underline-offset-8 transition-colors hover:decoration-primary">hardware logic</span> <br className="hidden lg:block" /> and <span className="text-violet-400 font-bold">software innovation</span>.
                                            </span>
                                        </p>
                                    </motion.div>
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
                                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-center text-white mb-4 uppercase">
                                        Developer <span className="text-primary italic">Skills</span>
                                    </h2>
                                    <div className="h-1 w-24 bg-gradient-to-r from-primary to-transparent rounded-full mx-auto" />
                                </motion.div>
                            </div>

                            <div className="space-y-24">
                                {Array.from(new Set(skillsData.map(s => s.category))).map((category, idx) => (
                                    <div key={idx} className="space-y-10">
                                        <div className="flex items-center gap-6">
                                            <h3 className="text-[10px] font-black tracking-[0.6em] uppercase text-primary/40">{category}</h3>
                                            <div className="h-px flex-1 bg-white/5" />
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
                                            {skillsData.filter(s => s.category === category).map((skill, i) => (
                                                <motion.div
                                                    key={i}
                                                    whileHover={{ y: -8, scale: 1.02 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                    className="group relative h-40"
                                                >
                                                    <div className="absolute inset-0 bg-primary/5 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    <div className="relative glass-card h-full p-6 flex flex-col items-center justify-center border-white/5 group-hover:border-primary/40 transition-all duration-500 overflow-hidden">
                                                        <div className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 mb-4 bg-gray-950/50 border border-white/5 group-hover:border-primary/20 shadow-inner">
                                                            {skill.type === 'devicon' ? (
                                                                <img
                                                                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}/${skill.icon}-original.svg`}
                                                                    alt={skill.name}
                                                                    className="w-10 h-10 object-contain brightness-90 group-hover:brightness-110"
                                                                />
                                                            ) : (
                                                                <img
                                                                    src={skill.icon}
                                                                    alt={skill.name}
                                                                    className={`${skill.name === 'SolidWorks' ? 'w-12 h-12' : 'w-10 h-10'} object-contain brightness-90 group-hover:brightness-110`}
                                                                />
                                                            )}
                                                        </div>
                                                        <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-500 group-hover:text-white transition-colors text-center">{skill.name}</span>
                                                        
                                                        <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                                            <Sparkles size={8} className="text-primary animate-pulse" />
                                                        </div>
                                                    </div>
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
