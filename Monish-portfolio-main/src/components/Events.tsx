import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Trophy } from "lucide-react";

// Images
import bajaImage from "@/assets/baja-e.jpg";
import hackathonImage from "@/assets/Hackintym'25 2.0.jpg";
import symposiumImage from "@/assets/1761585584912.jpg";
import codingImage from "@/assets/python.jpg";
import droneImage from "@/assets/The future of IoT is at the edge! ️ Dive into….jpg";

// ---------------- EVENTS DATA ----------------
const events = [
  {
    title: "SAE India H-Baja",
    type: "National Competition",
    date: "2025 - Present",
    location: "India",
    description:
      "Designing and fabricating an off-road electric vehicle for SAE India H-Baja.",
    achievement: "Ongoing",
    icon: "🚗",
    image: bajaImage,
  },
  {
    title: "Hackintym'25 2.0",
    type: "Hackathon",
    date: "October 2025",
    location: "Chennai, India",
    description:
      "Participated in a national-level hackathon solving real-world engineering problems.",
    achievement: "Top 10 Finalist",
    icon: "💡",
    image: hackathonImage,
  },
  {
    title: "Guess Build Unlock",
    type: "Symposium",
    date: "October 2025",
    location: "Sri Sai Ram Engineering College",
    description:
      "Innovation-focused symposium encouraging creative engineering solutions.",
    achievement: "Winner",
    icon: "🏆",
    image: symposiumImage,
  },
  {
    title: "Prompt-o-Mania",
    type: "Coding Competition",
    date: "April 2025",
    location: "Meenakshi Sundararajan Engineering College",
    description:
      "Competitive coding and prompt engineering challenge.",
    achievement: "Top 10",
    icon: "💻",
    image: codingImage,
  },
  {
    title: "Drone Workshop",
    type: "Workshop",
    date: "April 2025",
    location: "Meenakshi Sundararajan Engineering College",
    description:
      "Hands-on workshop on drones, control systems, and flight mechanics.",
    achievement: "Completed",
    icon: "🚁",
    image: droneImage,
  },
];

// ---------------- ANIMATIONS ----------------
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ---------------- COMPONENT ----------------
export function Events() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} id="events" className="relative py-24">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px]" />

      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-accent text-sm uppercase tracking-widest">
              Achievements
            </span>
            <h2 className="text-4xl font-bold mt-2">
              Events & <span className="gradient-text">Hackathons</span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Center line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 -translate-x-1/2" />

            {events.map((event, index) => (
              <motion.div
                key={event.title}
                variants={itemVariants}
                className={`relative flex items-start mb-14 ${
                  index % 2 === 0
                    ? "md:flex-row"
                    : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10">
                  <span>{event.icon}</span>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className={`ml-16 md:ml-0 md:w-[calc(50%-2.5rem)] glass-card rounded-2xl overflow-hidden ${
                    index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  {/* Image */}
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-44 object-cover"
                  />

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between mb-3">
                      <span className="tag-chip">{event.type}</span>
                      <span className="tag-chip-core flex items-center gap-1">
                        <Trophy size={12} />
                        {event.achievement}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">
                      {event.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4">
                      {event.description}
                    </p>

                    <div className="flex gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="text-primary" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="text-accent" />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
