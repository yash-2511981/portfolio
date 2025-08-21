import { Github, Linkedin, CodeXml, type LucideIcon } from "lucide-react";
import type { Project, Education, Certification } from "./types";

export const projects: Project[] = [
  {
    title: "ProFileBuilder (AI Resume Builder)",
    description: "An AI-powered resume generator with a multi-step form and real-time preview.",
    images: ["https://placehold.co/600x400.png", "https://placehold.co/600x400.png", "https://placehold.co/600x400.png"],
    images_alt: ["screenshot of ProFileBuilder 1", "screenshot of ProFileBuilder 2", "screenshot of ProFileBuilder 3"],
    data_ai_hint: ["resume builder application", "modern web application", "ai powered tool"],
    tags: ["Next.js", "Tailwind CSS", "Zod", "React-hook-form", "Clerk", "PostgreSql", "Razorpay"],
    githubUrl: "#",
    liveUrl: "#",
    longDescription: "Building an AI-powered resume generator with multi-step form flow and real-time-preview. Implementing client-side validation and clean data structure using Zod and react-hook-form. Focused on reusable components, form data flow, and responsive design principles. Integrated subscription-based access control with Razorpay, enabling feature based access on user subscription level.",
  },
  {
    title: "VibeChat (Real-time Chat app)",
    description: "A responsive chat app with 1:1/group messaging, media sharing, and video/audio calls.",
    images: ["https://placehold.co/600x400.png"],
    images_alt: ["screenshot of VibeChat"],
    data_ai_hint: ["chat application interface"],
    tags: ["React.js", "Tailwind", "Node.js", "Express.js", "Mongoose", "axios", "socket.io", "webRTC", "JWT"],
    githubUrl: "#",
    liveUrl: "#",
    longDescription: "Built a responsive chat app with 1:1 and group messaging, media sharing, and video/audio calling using webRTC. Designed RESTful APIs with Express and handled schema designed with mongoose. Implemented message persistence, notification, and real-time updates via socket.io. Integrated authentication with JWT, and managed online/offline status tracking. In-app notifications with instant reply feature and Delete/Edit message in particular time for better user control.",
  },
  {
    title: "Vestis (Ecommerce website)",
    description: "A fashion platform with user authentication, session management, and dynamic product handling.",
    images: ["https://placehold.co/600x400.png"],
    images_alt: ["screenshot of Vestis"],
    data_ai_hint: ["ecommerce fashion website"],
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "Php", "Mysql", "DomPDF"],
    githubUrl: "#",
    liveUrl: "#",
    longDescription: "Created a fashion platform with user authentication, session management, and dynamic product handling. Designed a custom layout, components, and backend logic for cart, order tracking, and invoice generation. Built admin panel with product/user/category management and order reporting system.",
  },
  {
    title: "Online Tiffin Service",
    description: "A food ordering platform with secure payment integration and dynamic product filters.",
    images: ["https://placehold.co/600x400.png"],
    images_alt: ["screenshot of Online Tiffin Service"],
    data_ai_hint: ["food delivery app"],
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "Php", "Mysql", "RazorPay Api", "TcPDF", "PHPmailer"],
    githubUrl: "#",
    liveUrl: "#",
    longDescription: "Developed a food ordering platform with secure Razorpay payment integration and dynamic product filter. Built admin dashboard with full CRUD operations, sales reporting, and user/vendor management. Integrated email confirmation, bill generation, and order tracking functionality.",
  },
];

export const skills: string[] = [
  "HTML",
  "CSS",
  "Javascript",
  "Bootstrap",
  "Tailwind CSS",
  "React.js",
  "Redux",
  "Next.js",
  "axios",
  "Node.js",
  "Express.js",
  "Java",
  "Php",
  "MongoDB",
  "MySql",
  "Git",
  "Github",
  "Postman",
  "Chrome DevTools",
];

export const navLinks: { name: string, href: string }[] = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export const socialLinks: { name: string, url: string, icon: LucideIcon }[] = [
    { name: "GitHub", url: "#", icon: Github },
    { name: "LinkedIn", url: "#", icon: Linkedin },
    { name: "LeetCode", url: "#", icon: CodeXml },
];

export const education: Education[] = [
    {
        degree: "Bachelor of Science in Information Technology (Bsc.IT)",
        institution: "Viva Institute of Technology",
        year: "2023-24",
        grade: "7.9 CGPA"
    },
    {
        degree: "Class XII (HSC)",
        institution: "S V M Pachal and Junior College(science)",
        year: "2018-19",
        grade: "60.00%"
    },
    {
        degree: "Class X (SSC)",
        institution: "A M V Karwali",
        year: "2016-17",
        grade: "90.60%"
    }
];

export const certifications: Certification[] = [
    {
        name: "JavaScript Full-Stack Developer",
        issuer: "SDAC Infotech",
        year: "2024 - 2025",
        grade: "A+",
        skills: ["Full-Stack Web Development", "MERN stack", "SEO techniques", "Database Management", "Core Web Technologies", "Soft Skills"]
    }
]
