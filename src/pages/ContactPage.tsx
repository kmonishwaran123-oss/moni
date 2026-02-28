import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, Clock, Globe, ArrowRight, Sparkles, Activity } from 'lucide-react';
import Navbar from "@/components/Navbar";
import { Button } from '@/components/ui/button';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const contactInfo = [
    { icon: Mail, title: "Email", value: "k.monishwaran123@gmail.com", href: "mailto:k.monishwaran123@gmail.com", description: "Inquiry or collaboration" },
    { icon: Phone, title: "Phone", value: "+91 7358996358", href: "tel:+917358996358", description: "Emergency or consulting" },
    { icon: MapPin, title: "Location", value: "Chennai, Tamil Nadu", href: "#", description: "Based in South India" },
    { icon: Activity, title: "Uptime", value: "90.99%", href: "#", description: "Always operational" },
];

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);
        try {
            const response = await fetch("https://formspree.io/f/mnnvkoyg", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Form submission failed");
            toast.success("Signal Received. I'll get back to you soon.");
            reset();
        } catch (error) {
            toast.error("Signal Lost. Something went wrong.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="relative min-h-screen">
            <div className="film-grain" aria-hidden="true" />

            <div className="relative z-10">
                <Navbar />

                <main className="pt-32 pb-24">
                    <div className="container mx-auto px-6">
                        {/* Cinematic Header */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            className="text-center mb-24"
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6 group cursor-default text-[10px] font-bold tracking-[0.3em] uppercase text-gray-400">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                Open for Collaboration
                            </div>
                            <h1 className="text-5xl md:text-8xl font-bold font-sora tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
                                Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-violet-400 to-cyan-400">Connection</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
                                Whether you have a groundbreaker project or just want to discuss the intersection of engineering and software, my terminal is open.
                            </p>
                        </motion.div>

                        {/* Live Status Stats */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                            {[
                                { label: "Successful Pings", value: "95%", icon: Globe, color: "text-emerald-400", bg: "bg-emerald-500/10" },
                                { label: "Latency Rating", value: "< 24h", icon: Clock, color: "text-amber-400", bg: "bg-amber-500/10" },
                                { label: "Project Load", value: "Active", icon: Sparkles, color: "text-primary", bg: "bg-primary/10" },
                                { label: "Active Channels", value: "4+", icon: MessageCircle, color: "text-rose-400", bg: "bg-rose-500/10" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 + i * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="glass-card p-10 text-center relative group overflow-hidden"
                                >
                                    <div className={`absolute top-0 right-0 w-16 h-16 ${stat.bg} rounded-bl-full opacity-30`} />
                                    <stat.icon size={24} className={`mx-auto mb-6 ${stat.color} group-hover:scale-110 transition-transform`} />
                                    <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid lg:grid-cols-2 gap-16 items-start">
                            {/* Communication Channels */}
                            <div className="space-y-12">
                                <div className="space-y-6">
                                    <h3 className="text-3xl font-bold flex items-center gap-4">
                                        <div className="w-1.5 h-10 bg-primary rounded-full" />
                                        Channel Details
                                    </h3>
                                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                                        Always interested in new opportunities, innovative projects, and meaningful collaborations.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {contactInfo.map((info, i) => (
                                        <motion.a
                                            key={i}
                                            href={info.href}
                                            whileHover={{ scale: 1.02 }}
                                            className="glass-card p-8 group relative overflow-hidden flex flex-col items-center text-center cursor-pointer border-white/5 hover:border-primary/30"
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-6 shadow-inner group-hover:shadow-glow-sm transition-all group-hover:scale-110">
                                                <info.icon size={24} />
                                            </div>
                                            <h4 className="text-xl font-bold mb-2 text-white">{info.title}</h4>
                                            <div className="text-sm font-bold text-primary mb-2 line-clamp-1">{info.value}</div>
                                            <div className="text-[10px] uppercase font-bold tracking-widest text-gray-500">{info.description}</div>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Social Nodes */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-bold text-gray-400 tracking-widest uppercase">Peripheral Nodes</h3>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: Github, label: "GitHub", href: "https://github.com/kmonishwaran123-oss" },
                                            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/monishwaran-k-b463a3363" },
                                            { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/k._.monish/" }
                                        ].map((node, i) => (
                                            <motion.a
                                                key={i}
                                                href={node.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                className="w-16 h-16 glass-card flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300 group"
                                            >
                                                <node.icon size={24} className="group-hover:rotate-12 transition-transform" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Secure Transmission Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="glass-card p-12 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse" />
                                <h3 className="text-3xl font-bold mb-10 flex items-center gap-4">
                                    <div className="w-1.5 h-10 bg-violet-500 rounded-full" />
                                    Signal Encryption
                                </h3>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Identity Name</label>
                                            <input {...register("name", { required: true })} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700" placeholder="Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Digital Email</label>
                                            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700" placeholder="Email@gmail.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Frequency Subject</label>
                                        <input {...register("subject", { required: true })} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700" placeholder="New Project Proposition" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Encrypted Message</label>
                                        <textarea {...register("message", { required: true })} rows={6} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700 resize-none h-40" placeholder="Your signal goes here..." />
                                    </div>

                                    <Button type="submit" disabled={isSubmitting} className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-lg shadow-glow hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50">
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>Transmit Signal <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                        )}
                                    </Button>
                                </form>
                            </motion.div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default ContactPage;
