import bajaCard from "@/assets/baja card.jpeg";
import gbuCard from "@/assets/GBU card.jpeg";
import droneWorkshopCard from "@/assets/drone workshop card.png";
import hackathonImage from "@/assets/Hackintym'25 2.0.jpg";
import promptOManiaCard from "@/assets/prompt_o_mania card.webp";
import connectionsAndPaperImage from "@/assets/connections and paper presentation.png";
import droneIcon from "@/assets/nov.jpg";
import innoverseImage from "@/assets/ino.jpeg";
import bajaCertificate from "@/assets/baja ce.jpeg";
import gbuCertificate from "@/assets/1761585584912.jpg";
import droneCertificate from "@/assets/Drone workshop.jpeg";
import bajaImage from "@/assets/baja-e.jpg";

// PDF Certificates
import connectionsPDF from "@/assets/cerficate/connections vel tech.pdf";
import paperPresentationPDF from "@/assets/cerficate/certificate- paper Presentation- vel tecch.pdf";
import maiiyamInternshipPDF from "@/assets/cerficate/internship certificate- maiiyam.pdf";
import atvcCertificatePDF from "@/assets/cerficate/atvc.pdf";

export interface Event {
    id: number;
    title: string;
    type: string | string[];
    role: string;
    date: string;
    location: string;
    description: string;
    achievement: string;
    image: string;
    technologies: string[];
    featured: boolean;
    certificate?: string;
    logo?: string;
    duration?: string;
    icon?: string;
}

export const events: Event[] = [
    {
        id: 1,
        title: "SAE India H-Baja",
        type: "competition",
        role: "Participant",
        date: "2025 - Present",
        location: "India",
        description: "Designing and fabricating an off-road electric vehicle for SAE India H-Baja. Involved in vehicle dynamics and battery thermal management systems.",
        achievement: "TI-Clearance for Final Round",
        image: bajaCard,
        technologies: ["Electric Vehicle", "CAD", "Simulations", "Dynamics"],
        featured: true,
        certificate: bajaCertificate,
        icon: "🚗",
    },
    {
        id: 2,
        title: "Hackintym'25 2.0",
        type: ["hackathon", "Club Event"],
        role: "Top 10 Finalist",
        date: "October 2025",
        location: "Chennai, India",
        description: "Participated in a national-level hackathon solving real-world engineering problems through innovative software and hardware integration.",
        achievement: "Top 10 Finalist",
        image: hackathonImage,
        technologies: ["React", "Python", "Problem Solving", "Team Work"],
        duration: "48 hours",
        featured: true,
        icon: "💡",
    },
    {
        id: 3,
        title: "Guess Build Code (GBU)",
        type: "competition",
        role: "Winner",
        date: "October 2025",
        location: "Sri Sai Ram Engineering College",
        description: "Intensive technical coding competition involving 'Guessing' the output and 'Building' optimized logic for complex C-programming challenges.",
        achievement: "Winner",
        image: gbuCard,
        technologies: ["C-Programming", "Logic Building", "Code Optimization"],
        featured: true,
        certificate: gbuCertificate,
        icon: "🏆",
    },
    {
        id: 4,
        title: "Prompt-o-Mania",
        type: "competition",
        role: "Winner",
        date: "April 2025",
        location: "Meenakshi Sundararajan Engineering College",
        description: "Competitive coding and prompt engineering challenge focusing on Large Language Model optimization and creative output generation.",
        achievement: "Winner",
        image: promptOManiaCard,
        technologies: ["Prompt Engineering", "NLP", "LLMs"],
        featured: false,
        icon: "💻",
    },
    {
        id: 5,
        title: "Drone Workshop",
        type: "workshop",
        role: "Participant",
        date: "April 2025",
        location: "Meenakshi Sundararajan Engineering College",
        description: "Hands-on workshop on drones, control systems, and flight mechanics. Built and tested quadcopters for stability and data collection.",
        achievement: "Completed",
        image: droneWorkshopCard,
        technologies: ["Drones", "Control Systems", "Flight Mechanics"],
        featured: false,
        logo: droneIcon,
        certificate: droneCertificate,
        icon: "🚁",
    },
    {
        id: 6,
        title: "Connections - CEAANS 2025 Symposium",
        type: "competition",
        role: "Participant",
        date: "2025",
        location: "VelTech High Tech Dr.Rangarajan Dr.sakunthala Engineering College, Chennai",
        description: "A national level engineering symposium event testing logical reasoning and technical cross-connections.",
        achievement: "Participant",
        image: connectionsAndPaperImage,
        technologies: ["Logical Reasoning", "Problem Solving"],
        featured: false,
        certificate: connectionsPDF,
        icon: "🔗",
    },
    {
        id: 7,
        title: "Paper Presentation - CEAANS 2025 Symposium",
        type: "competition",
        role: "Participant",
        date: "2025",
        location: "VelTech High Tech Dr.Rangarajan Dr.sakunthala Engineering College, Chennai",
        description: "National level symposium event involved in presenting innovative engineering research and solutions.",
        achievement: "Presented",
        image: connectionsAndPaperImage,
        technologies: ["Research", "Public Speaking"],
        featured: false,
        certificate: paperPresentationPDF,
        icon: "📄",
    },
    {
        id: 9,
        title: "Innoverse Hackathon",
        type: ["hackathon", "Club Event"],
        role: "Runner Up",
        date: "2026",
        location: "Meenakshi Sundararajan Engineering College",
        description: "An IoT-focused hackathon involving hardware-software integration and real-time data monitoring.",
        achievement: "Runner Up",
        image: innoverseImage,
        technologies: ["IOT", "Hardware Integration", "Prototyping"],
        featured: false,
        certificate: innoverseImage,
        icon: "⚙️",
    },
    {
        id: 10,
        title: "ATVC Hydrogen Baja Vehicle Competition",
        type: "competition",
        role: "Team Member",
        date: "2025",
        location: "India",
        description: "Participated in the Advanced Technology Vehicle Challenge (ATVC), focusing on the design and development of a hydrogen-powered Baja vehicle. The competition emphasized sustainable mobility, engineering design, and innovation in alternative fuel technologies.",
        achievement: "Participant",
        image: bajaImage,
        technologies: ["Hydrogen Fuel Systems", "Vehicle Design", "Sustainable Engineering", "Team Collaboration"],
        featured: true,
        certificate: atvcCertificatePDF,
        icon: "🧪",
    },
];
