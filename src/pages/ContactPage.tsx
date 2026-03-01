import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageCircle, Clock, Globe, ArrowRight, Sparkles, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const contactInfo = [
    {
        icon: Mail,
        title: "Email",
        value: "k.monishwaran123@gmail.com",
        href: "k.monishwaran123@gmail.com",
        description: "Send me an email anytime",
    },
    {
        icon: Phone,
        title: "Phone",
        value: "+91 7358996358",
        href: "7358996358",
        description: "Call me during business hours",
    },
    {
        icon: MapPin,
        title: "Location",
        value: "22/45,Palani Amman Kovil South 3rd Street, Triplicane, Chennai-600005, Tamil Nadu",
        href: "https://www.google.com/maps/place/South+3rd+St,+Triplicane,+Chennai,+Tamil+Nadu+600005/@13.0560718,80.2795493,21z",
        description: "Available for local meetups",
    },
    {
        icon: Clock,
        title: "Response Time",
        value: "Within 24 hours",
        href: "#",
        description: "I typically respond quickly",
    },
];

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
    };

    const OnCopy = (text: string) => {
        const cleanText = text.replace(/^(mailto:|tel:)/, '');
        navigator.clipboard.writeText(cleanText);
        toast.success("Copied to clipboard!");
    };

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
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
                        >
                            {[
                                { label: "Response Rate", value: "95%", icon: MessageCircle },
                                { label: "Avg Response Time", value: "< 24h", icon: Clock },
                                { label: "Projects Completed", value: "6+", icon: Globe },
                                { label: "Happy Clients", value: "1", icon: Mail },
                            ].map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="text-center p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 relative group overflow-hidden"
                                >
                                    <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3 lg:mb-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                                    <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm lg:text-base text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                            {/* Contact Information */}
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                className="space-y-8 lg:space-y-12"
                            >
                                <motion.div variants={itemVariants}>
                                    <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8">
                                        Let's Start a Conversation
                                    </h2>
                                    <p className="text-gray-400 text-lg leading-relaxed mb-8 lg:mb-12 font-light">
                                        I'm always interested in new opportunities, innovative
                                        projects, and meaningful collaborations. Whether you have a
                                        project in mind or just want to connect, I'd love to hear from
                                        you.
                                    </p>
                                </motion.div>

                                {/* Contact Info Cards */}
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {contactInfo.map((info, index) => (
                                        <motion.a
                                            key={index}
                                            variants={itemVariants}
                                            onClick={() => OnCopy(info.href)}
                                            whileHover={{ scale: 1.02, y: -5 }}
                                            className="block p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer group"
                                        >
                                            <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-xl flex items-center justify-center mb-4 lg:mb-6 shadow-inner group-hover:shadow-glow-sm transition-all">
                                                <info.icon size={26} className="text-white" />
                                            </div>
                                            <h3 className="font-semibold text-white text-lg lg:text-xl mb-2">
                                                {info.title}
                                            </h3>
                                            <p className="text-cyan-400 text-sm font-medium mb-2">
                                                {info.value}
                                            </p>
                                            <p className="text-gray-500 text-sm">{info.description}</p>
                                        </motion.a>
                                    ))}
                                </div>

                                {/* Social Nodes */}
                                <motion.div variants={itemVariants} className="space-y-6">
                                    <h3 className="text-[10px] font-bold text-gray-400 tracking-[0.3em] uppercase">Peripheral Nodes</h3>
                                    <div className="flex gap-4">
                                        {[
                                            { icon: Github, href: "https://github.com/kmonishwaran123-oss" },
                                            { icon: Linkedin, href: "https://www.linkedin.com/in/monishwaran-k-b463a3363" },
                                            { icon: Instagram, href: "https://www.instagram.com/k._.monish/" }
                                        ].map((node, i) => (
                                            <motion.a
                                                key={i}
                                                href={node.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.1, y: -5 }}
                                                className="w-14 h-14 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-primary transition-all duration-300 group"
                                            >
                                                <node.icon size={22} className="group-hover:rotate-12 transition-transform" />
                                            </motion.a>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>

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
                                    Let's Start a Conversation
                                </h3>

                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Name</label>
                                            <input {...register("name", { required: true })} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700" placeholder=" Your Name" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Email</label>
                                            <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700" placeholder="Your@Email.com" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Subject</label>
                                        <input {...register("subject", { required: true })} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700" placeholder="What's the about?" />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 block">Message</label>
                                        <textarea {...register("message", { required: true })} rows={6} className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-white focus:border-primary/50 focus:bg-white/10 outline-none transition-all placeholder:text-gray-700 resize-none h-40" placeholder=" Tell Me About Your Project Or Just Say Hello" />
                                    </div>

                                    <Button type="submit" disabled={isSubmitting} className="w-full h-16 rounded-2xl bg-primary text-white font-bold text-lg shadow-glow hover:shadow-primary/40 transition-all flex items-center justify-center gap-3 active:scale-95 disabled:opacity-50">
                                        {isSubmitting ? (
                                            <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                        ) : (
                                            <>Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
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
