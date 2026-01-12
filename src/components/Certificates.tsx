import { motion, useInView, type Variants, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, X } from "lucide-react";

import mongoDBicon from "@/assets/mongodb.jpg";
import googleicon from "@/assets/google.jpg";
import pythonlogo from "@/assets/python.jpg";
import ioticon from "@/assets/The future of IoT is at the edge! ️ Dive into….jpg";
import upgradlogo from "@/assets/upgrad.jpg";
import techlogo from "@/assets/tech.jpg";
import delogo from "@/assets/6 Ways To Start Programming - EMR Industry.jpg";
import tatalogo from "@/assets/Tata Motors Logo Meaning and History [Tata Motors symbol].jpg";

const certificates = [
  {
    title: "Schema Design Optimization",
    issuer: "MongoDB",
    date: "2025",
    image: mongoDBicon,
    credentialUrl: "https://learn.mongodb.com/c/jPRqKMxoS32a2xCHBAxH8Q",
    skills: ["MongoDB"],
  },
  {
    title: "Relational To Document Model",
    issuer: "MongoDB",
    date: "2025",
    image: mongoDBicon,
    credentialUrl: "https://learn.mongodb.com/c/j8yCqbZ2S9uU5yCHWgfz5w",
    skills: ["MongoDB", "NoSQL"],
  },
  {
    title: "Connecting to MongoDB in Python",
    issuer: "MongoDB",
    date: "2025",
    image: mongoDBicon,
    credentialUrl: "https://learn.mongodb.com/c/_IibyEVCQKecFHe_O4_CBA",
    skills: ["MongoDB", "Python"],
  },
   {
    title: "Data Visualization : Empowering Business With Effective insights",
    issuer: "Tata Group ",
    date: "2025",
    image: tatalogo,
    credentialUrl:
      "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_3TgX7Ncw8tHkDLtum_1750919385252_completion_certificate.pdf",
    skills: [ "Data Visualization", "Business Insights", "Data Analysis"],
  },
  {
    title: "Python Programming",
    issuer: "NSDC & Reliance Foundation",
    date: "2025",
    image: pythonlogo,
    credentialUrl:
      "https://rfskillingacademy.com/certificate/group/300/235783",
    skills: ["Python", "Programming"],
  },
  {
    title: "Python 101 for Data Science",
    issuer: "IBM",
    date: "2025",
    image: pythonlogo,
    credentialUrl:
      "https://courses.cognitiveclass.ai/certificates/1ee466a5854e44a4ac5e77a7ba26acd2",
    skills: ["Python", "Data Science"],
  },
 
  {
    title: "IOT-Network Specialist",
    issuer: "NSDC & Reliance Foundation",
    date: "2025",
    image: ioticon,
    credentialUrl:
      "https://rfskillingacademy.com/certificate/group/500/236025",
    skills: ["IoT", "Embedded Systems"],
  },
  {
    title: "Cyber Security",
    issuer: "Tech Mahindra & NSDC",
    date: "2025",
    image: techlogo,
    credentialUrl:
      "https://rfskillingacademy.com/certificate/group/500/236025",
    skills: ["Cyber Security", "AI Basics"],
  },
   {
    title: "Google Certification For Students",
    issuer: "Google",
    date: "2025",
    image: googleicon,
    credentialUrl:
      "https://edu.exceedlms.com/student/award/gXQ5bcu6DsWgq8LcFJwMKBmB",
    skills: ["AI"],
  },
  {
    title: "Advanced Prompt Engineering with ChatGPT",
    issuer: "upGrad",
    date: "2026",
    image: upgradlogo,
    credentialUrl:
      "https://www.upgrad.com/certificates/advanced-prompt-engineering-with-chatgpt/KAU6N6YJ",
    skills: ["Prompt Engineering", "AI"],
  },
  {
    title: "Front-End Development",
    issuer: "Reliance Foundation & NSDC",
    date: "2026",
    image: delogo,
    credentialUrl:
      "https://rfskillingacademy.com/certificate/group/300/235782",
    skills: ["HTML", "CSS", "JavaScript"],
  },

];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function Certificates() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedCert, setSelectedCert] = useState<
    (typeof certificates)[0] | null
  >(null);

  return (
    <section
      ref={sectionRef}
      id="certificates"
      className="relative py-24 overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-primary text-sm font-medium tracking-widest uppercase block mb-3">
              Professional Growth
            </span>
            <h2 className="section-title">
              Certificates & <span className="gradient-text">Credentials</span>
            </h2>
          </motion.div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className="w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.02, y: -6 }}
                  onClick={() => setSelectedCert(cert)}
                  className="glass-card rounded-2xl overflow-hidden cursor-pointer h-full"
                >
                  {/* Image */}
                  <div className="relative h-44">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    <span className="absolute top-3 right-3 px-3 py-1 text-xs rounded-full bg-primary text-white">
                      {cert.date}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Award size={18} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold line-clamp-1">
                          {cert.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-xs rounded-md bg-muted/50"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card rounded-2xl max-w-2xl w-full overflow-hidden relative"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4"
              >
                <X />
              </button>

              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-60 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-1">
                  {selectedCert.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedCert.skills.map((skill) => (
                    <span key={skill} className="tag-chip">
                      {skill}
                    </span>
                  ))}
                </div>

                <a
                  href={selectedCert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <ExternalLink size={18} />
                  View Credential
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
