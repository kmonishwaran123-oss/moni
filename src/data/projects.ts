import bajaImage from "@/assets/baja-e.jpg";
import nsdcLogo from "@/assets/nsdc-logo.jpg";
import IOTImage from "@/assets/IOT.jpg";
import resumeImage from "@/assets/resume.jpeg";
import f1Image from "@/assets/f1.png";
import mscart from "@/assets/mscart.png";
import cyberShieldImage from "@/assets/Screenshot 2026-02-27 104840.png";
import trustBiteImage from "@/assets/trustbite.png";
import hbdImage from "@/assets/hbd.png";
import safeFlowImage from "@/assets/safe flow.png";
import jarvisImage from "@/assets/jarvis.png";

export interface Project {
  id: string;
  title: string;
  tags: string[];
  shortDesc: string;
  longDesc: string;
  challenge: string;
  approach: string;
  result: string;
  images: string[];
  repoUrl?: string;
  liveUrl?: string;
  tech: string[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "Hydrogen-baja",
    title: "Hydrogen Baja Competition",
    tags: ['ALL', 'Core'],
    shortDesc: "Hydrogen–Petrol dual-fuel engine system with real-time monitoring and predictive maintenance.",
    longDesc: "Developed an intelligent Hydrogen–Petrol dual-fuel engine system that enables smooth fuel switching, monitors performance in real-time, predicts maintenance needs, and improves efficiency, reliability, and safety.",
    challenge: "Ensuring stable combustion, safe hydrogen handling, and efficient fuel switching between Hydrogen and Petrol under varying load conditions.",
    approach: "Implemented real-time sensor monitoring, adaptive injector control, and predictive diagnostics to optimize Hydrogen–Petrol fuel switching, engine performance, and safety.",
    result: "Achieved 15% higher fuel efficiency, 20% reduced downtime, smoother engine performance, and improved reliability and safety.",
    images: [bajaImage],
    tech: ['CAD', 'SOLIDWORKS', 'MATLAB'],
    featured: true,
  },
  {
    id: "jarvis-ai",
    title: "Jarvis AI Assistant",
    tags: ['ALL', 'IT'],
    shortDesc: "Voice-only AI assistant with a single input field that gives concise, one-line responses.",
    longDesc: "Voice-only AI assistant with a single input field that gives concise, one-line responses using Gemini LLM and Web Speech API.",
    challenge: "Designing a reliable sensor network for accurate data collection and implementing an efficient irrigation control system.",
    approach: "Utilized low-power sensors, microcontrollers, and cloud integration to collect data and automate irrigation based on predefined thresholds.",
    result: "Reduced water consumption by 30%, improved crop yield by 20%, and provided farmers with actionable insights through a user-friendly dashboard.",
    images: [nsdcLogo],
    tech: ['Python', 'CSS', 'HTML'],
    featured: true,
  },
  {
    id: "IOT",
    title: "Distance measurement System",
    tags: ['ALL', 'Core'],
    shortDesc: "An IoT-based system to measure distance accurately using sensors.",
    longDesc: "This project uses ultrasonic sensors and a microcontroller to measure and display distance in real time.",
    challenge: "Ensuring accurate distance measurement in varying environmental conditions.",
    approach: "Calibrated the sensor and optimized code for stable and precise measurements.",
    result: "The system successfully measured distances with good accuracy and reliability.",
    images: [IOTImage],
    tech: ["Arduino", "C++", "Sensors"],
    featured: false,
  },
  {
    id: "Resume-Analyzer",
    title: "Resume Analyzer",
    tags: ['ALL', 'IT'],
    shortDesc: "A tool to analyze resumes and extract key information.",
    longDesc: "Developed a resume analyzer that extracts key information from resumes and provides insights for recruiters.",
    challenge: "Designing an efficient parsing algorithm and extracting relevant data from various resume formats.",
    approach: "Implemented a parsing algorithm using NLP techniques to extract key information from resumes.",
    result: "Successfully extracted key information from resumes with high accuracy and provided actionable insights for recruiters.",
    images: [resumeImage],
    tech: ['Streamlit', 'LangChain', 'Ollama'],
    repoUrl: "https://github.com/Monishwarann/RAG-ChatBot",
    featured: true,
  },
  {
    id: "F1-RoadMap-tracker",
    title: "F1 RoadMap Tracker",
    tags: ['ALL', 'IT'],
    shortDesc: "A tool to track and analyze F1 race data.",
    longDesc: "Developed a tool to track and analyze F1 race data, providing insights into driver performance and race strategies.",
    challenge: "Designing an efficient data analysis system and extracting meaningful insights from complex race data.",
    approach: "Implemented a data analysis system using Python and machine learning techniques to extract insights from F1 race data.",
    result: "Successfully analyzed F1 race data with high accuracy and provided actionable insights for teams and drivers.",
    images: [f1Image],
    tech: ['Python', 'Machine Learning', 'Data Analysis'],
    repoUrl: "https://github.com/Monishwarann/F1",
    featured: false,
  },
  {
    id: "MScart",
    title: "MScart",
    tags: ['ALL', 'IT'],
    shortDesc: "An e-commerce platform for buying and selling products online.",
    longDesc: "Developed an e-commerce platform that allows users to buy and sell products online, providing a seamless shopping experience.",
    challenge: "Designing a user-friendly interface and implementing secure payment processing.",
    approach: "Implemented a user-friendly interface using React and integrated secure payment processing using Stripe.",
    result: "Successfully launched the e-commerce platform with a growing user base and positive feedback from customers.",
    images: [mscart],
    tech: ['React', 'Node.js', 'Stripe', 'MongoDB', 'Express', 'Tailwind CSS'],
    repoUrl: "https://github.com/Monishwarann/E-commerce",
    featured: true,
  },
  {
    id: "cyber-shield",
    title: "Cyber Shield",
    tags: ['ALL', 'IT', 'AI', 'Cyber'],
    shortDesc: "Intelligent AI-powered phishing detection system with real-time multi-engine analysis.",
    longDesc: "Cyber Shield is an advanced security platform designed to detect and prevent phishing attacks in real-time. It integrates Gemini AI for semantic reasoning, VirusTotal for file/URL intelligence, and AbuseIPDB for IP reputation analysis. The system uses an ML ensemble scoring model to evaluate threats accurately, providing a comprehensive dashboard for security monitoring.",
    challenge: "Combining multiple security intelligence feeds and AI reasoning to provide high-accuracy detection without compromising on-demand scan speeds.",
    approach: "Developed a parallel processing engine that queries multiple security APIs and feeds the results into a custom ML model, complemented by Gemini's natural language understanding for content analysis.",
    result: "Achieved high detection rates for zero-day phishing attempts with an average response time of 1041ms, as demonstrated in live security trials.",
    images: [cyberShieldImage],
    tech: ['React', 'Gemini AI', 'Python', 'ML Ensemble', 'API Integration', 'Tailwind CSS'],
    repoUrl: "https://github.com/Monishwarann/Cyber-Security-Project",
    featured: true,
  },
  {
    id: "trust-bite",
    title: "Trust Bite",
    tags: ['ALL', 'IT', 'AI'],
    shortDesc: "Blockchain-powered food supply chain transparency and safety monitoring system.",
    longDesc: "Trust Bite leverages blockchain and IoT to ensure food safety and transparency throughout the supply chain. It provides real-time tracking of food origins and storage conditions to build consumer trust.",
    challenge: "Integrating disparate data sources from various stages of the supply chain into a unified, immutable ledger.",
    approach: "Utilized Ethereum smart contracts and IoT sensors for automated verification and logging of supply chain events.",
    result: "Successfully demonstrated a transparent tracking system that reduces recall times and improves consumer confidence.",
    images: [trustBiteImage],
    tech: ['Blockchain', 'IoT', 'React', 'Smart Contracts'],
    repoUrl: "https://github.com/Monishwarann/trustbite",
    featured: false,
  },
  {
    id: "birthday-wish",
    title: "Birthday Wish",
    tags: ['ALL', 'IT', 'Entertainment'],
    shortDesc: "A personalized, interactive digital birthday celebration platform with animations.",
    longDesc: "An engaging web-based 3D platform for sending and experiencing personalized birthday wishes, featuring interactive elements and smooth animations tailored for a premium feel.",
    challenge: "Creating high-quality animations that perform well across all device types and screen sizes.",
    approach: "Leveraged Framer Motion and Three.js elements to build a lightweight yet visually stunning interactive experience.",
    result: "Created a highly shareable platform with over 90% positive user engagement score.",
    images: [hbdImage],
    tech: ['React', 'Framer Motion', 'CSS3 Animation'],
    repoUrl: "https://github.com/Monishwarann/Birthday",
    featured: false,
  },
  {
    id: "safe-flow",
    title: "Safe Flow",
    tags: ['ALL', 'Core', 'IT'],
    shortDesc: "Intelligent industrial fluid management and safety monitoring system.",
    longDesc: "Safe Flow is a hybrid engineering solution designed for industrial environments to monitor fluid flow, detect leaks, and ensure operational safety using real-time sensor data.",
    challenge: "Developing a low-latency alert system that can process high volumes of sensor data in real-time.",
    approach: "Built a centralized monitoring hub that uses edge computing modules to analyze flow patterns and trigger automated shut-offs.",
    result: "Reduced manual inspection time by 40% and improved response time to potential leaks by 3x.",
    images: [safeFlowImage],
    tech: ['IoT', 'Embedded Systems', 'React', 'Dashboard'],
    repoUrl: "https://github.com/Monishwarann/Safe-Flow",
    featured: false,
  },
];

export interface TimelineItem {
  id: number;
  year: string;
  title: string;
  company: string;
  description: string;
}

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2024",
    title: "Engineering",
    company: "Meenakshi Sundararajan Engineering College",
    description: "Began BE.Mechanical - Focused on core engineering foundations and first steps in technical problem solving."
  },
  {
    id: 5,
    year: "2024",
    title: "National Level Symposium",
    company: "Veltech University",
    description: "Participated in 'Connections' and 'Paper Presentation' at a national level platform, honing technical research and competitive problem-solving skills."
  },
  {
    id: 2,
    year: "2025",
    title: "IoT-Hackathon Runner-up",
    company: "Symposium",
    description: "Won second prize in IoT Hackathon - Demonstrated proficiency in smart hardware integration."
  },
  {
    id: 3,
    year: "2026",
    title: "Software Evolution",
    company: "Digital Transformation",
    description: "Spearheading React-based projects - Bridging the gap between hardware logic and software innovation."
  },
  {
    id: 4,
    year: "2028",
    title: "Global Impact",
    company: "Engineering at Scale",
    description: "Engineering and software leadership - Delivering high-impact hybrid solutions globally."
  }
];

export const certifications = [
  {
    id: 1,
    title: "Schema Design Optimization",
    issuer: "MongoDB",
    date: "2025"
  },
  {
    id: 2,
    title: "Relational To Document Model",
    issuer: "MongoDB",
    date: "2025"
  },
  {
    id: 6,
    title: "Python 101 for Data Science",
    issuer: "IBM",
    date: "2025"
  },
  {
    id: 10,
    title: "Advanced Prompt Engineering with ChatGPT",
    issuer: "upGrad",
    date: "2026"
  },
  {
    id: 12,
    title: "AWS Academy Graduate - Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    date: "2025"
  }
];

export const events = [
  {
    id: 1,
    title: "SAE India H-Baja",
    date: "2025 - Present",
    achievement: "Finalist",
    description: "Designing and fabricating a Hydrogen-Petrol dual-fuel engine system and battery thermal management."
  },
  {
    id: 3,
    title: "Guess Build Unlock",
    date: "October 2025",
    achievement: "Winner",
    description: "Won first prize in structural innovation symposium at Sri Sai Ram Engineering College."
  },
  {
    id: 2,
    title: "Hackintym'25 2.0",
    date: "October 2025",
    achievement: "Top 10 Finalist",
    description: "Solved real-world engineering problems through modern software and hardware integration in a 48-hour sprint."
  },
  {
    id: 6,
    title: "Connections - Veltech Symposium",
    date: "2024",
    achievement: "Participant",
    description: "Competed in the national level 'Connections' event, enhancing cross-disciplinary technical reasoning."
  },
  {
    id: 7,
    title: "Paper Presentation - Veltech Symposium",
    date: "2024",
    achievement: "Presented",
    description: "Documented and presented engineering research at a national symposium platform."
  },
  {
    id: 8,
    title: "Guess Build Code (GBU)",
    date: "October 2025",
    achievement: "Winner",
    description: "Secured 1st place in the technical coding challenge at Sri Sai Ram Engineering College."
  },
  {
    id: 9,
    title: "Innoverse Hackathon",
    date: "2026",
    achievement: "Participant",
    description: "IoT-focused hackathon involving hardware-software integration."
  },
  {
    id: 10,
    title: "Brainstorm Mini Hackathon",
    date: "2026",
    achievement: "Participant",
    description: "Product development competition focused on design thinking."
  },
  {
    id: 11,
    title: "Code Nexus Hackathon",
    date: "2026",
    achievement: "Participant",
    description: "IT-based hackathon solving complex software challenges."
  }
];

export const skills = {
  programming: [
    { name: "Python", level: 70 },
    { name: "C/C++", level: 70 },
    { name: "JavaScript/TypeScript", level: 65 },
    { name: "Java", level: 60 },
  ],
  web: [
    { name: "Next.js", level: 65 },
    { name: "Tailwind CSS", level: 60 },
    { name: "React", level: 58 },
    { name: "Node.js", level: 52 },
  ],
  embedded: [
    { name: "Arduino", level: 75 },
    { name: "ESP32", level: 70 },
    { name: "Raspberry Pi", level: 60 },
  ],
  mechanical: [
    { name: "AutoCAD", level: 75 },
    { name: "SolidWorks", level: 65 },
    { name: "ANSYS", level: 60 },
    { name: "CATIA", level: 55 },
  ],
};
