import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Github,
    Globe,
    Search,
    Sparkles,
    Code2,
    Layers,
    Cpu,
    Gamepad2,
    LayoutGrid,
    X,
    Rocket,
    Star,
    GitFork,
    ExternalLink,
    Shield
} from "lucide-react";
import SearchBar from "../components/SearchBar";
import Navbar from "@/components/Navbar";
import { ProjectModal } from "@/components/ProjectModal";



import { projects, type Project } from "@/data/projects";

const ProjectsPage: React.FC = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("ALL");
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        { id: "ALL", label: "All Projects", icon: LayoutGrid },
        { id: "Cyber", label: "Cyber Security", icon: Shield },
        { id: "IT", label: "Information Tech", icon: Code2 },
        { id: "Core", label: "Core Engineering", icon: Layers },
        { id: "AI", label: "Machine Learning/AI", icon: Cpu },
        { id: "Entertainment", label: "Entertainment", icon: Gamepad2 },
    ];

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = selectedCategory === "ALL" || project.tags.includes(selectedCategory);
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.tech.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    const selectedProject = projects.find(p => p.id === selectedProjectId);

    return (
        <div className="min-h-screen relative bg-background text-foreground overflow-hidden transition-colors duration-500">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-6"
                        >
                            <Sparkles className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-bold text-purple-300 tracking-widest uppercase">
                                Featured Works
                            </span>
                        </motion.div>

                        <h1 className="text-5xl md:text-8xl font-bold font-sora tracking-tighter mb-6">
                            <span className="gradient-text">Projects</span>
                        </h1>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
                            Engineering solutions that scale. A collection of works spanning across web systems, machine learning, and core engineering.
                        </p>
                    </div>

                    {/* STATS */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                        {[
                            { label: "Total Projects", value: projects.length, icon: Rocket, gradient: "from-cyan-500 to-blue-600" },
                            { label: "Featured", value: projects.filter(p => p.featured).length, icon: Star, gradient: "from-yellow-500 to-orange-600" },
                            { label: "Open Source", value: projects.filter(p => p.repoUrl).length, icon: GitFork, gradient: "from-emerald-500 to-teal-600" },
                            { label: "Tech Stacks", value: "9+", icon: Layers, gradient: "from-violet-500 to-purple-600" },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-card p-6 border-white/5 bg-card/40 backdrop-blur-xl group relative overflow-hidden"
                            >
                                {/* HUD Corner Markers */}
                                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary/40" />
                                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary/40" />

                                <div className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                                    <stat.icon size={20} className="text-white" />
                                </div>
                                <div className="text-2xl font-bold text-center text-foreground transition-colors duration-500">{stat.value}</div>
                                <div className="text-[10px] font-bold text-muted-foreground text-center tracking-widest uppercase mt-1 transition-colors duration-500">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <div className="max-w-xl mx-auto mb-16">
                        <SearchBar
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                            placeholder="Search by name or technology..."
                            scrollTargetId="projects-grid"
                        />
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 mb-16">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs tracking-widest uppercase transition-all border ${selectedCategory === cat.id
                                    ? "bg-primary border-primary text-white shadow-glow-sm scale-105"
                                    : "bg-white/5 border-white/10 text-gray-400 hover:border-primary/50"
                                    }`}
                            >
                                <cat.icon size={14} />
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    <div id="projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                onClick={() => setSelectedProjectId(project.id)}
                                className="group glass-card border-white/5 relative cursor-pointer overflow-hidden p-0 bg-gray-900/40 backdrop-blur-xl"
                                whileHover={{ y: -10 }}
                            >
                                <div className="relative h-48 overflow-hidden">
                                    <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { (e.target as HTMLImageElement).src = 'https://api.dicebear.com/7.x/shapes/svg?seed=' + project.title }} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 bg-yellow-500 text-black px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                                            Featured
                                        </div>
                                    )}
                                </div>
                                <div className="p-8">
                                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                    <p className="text-xs text-gray-400 line-clamp-2 mb-4">{project.shortDesc}</p>
                                    <div className="flex flex-wrap gap-2 mt-4">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="text-[9px] font-bold tracking-widest uppercase px-2 py-1 bg-white/5 text-gray-500 rounded border border-white/5">
                                                {t}
                                            </span>
                                        ))}
                                        {project.tech.length > 3 && <span className="text-[9px] font-bold text-gray-700">+{project.tech.length - 3}</span>}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </main>

            <ProjectModal
                project={selectedProject || null}
                isOpen={!!selectedProjectId && !!selectedProject}
                onClose={() => setSelectedProjectId(null)}
            />

        </div>
    );
};

export default ProjectsPage;
