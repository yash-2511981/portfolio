import { Github, Linkedin, type LucideIcon, CodeIcon } from "lucide-react";
import type { Project, Education, Certification } from "./types";

export const projects: Project[] = [
  {
    title: "Grabit (Food Delivery Platform)",
    description:
      "A food delivery platform combining restaurant orders and mess-based subscription meals with flexibility and real-world usability.",
    images: [
      "/Grabit/0.png",
      "/Grabit/1.png",
      "/Grabit/2.png",
      "/Grabit/3.png",
      "/Grabit/4.png",
    ],
    images_alt: [
      "screenshot of Grabit platform home page",
      "screenshot of Grabit restaurant listing",
      "screenshot of Grabit mess subscription plans",
      "screenshot of Grabit cart and checkout",
      "screenshot of Grabit order tracking",
    ],
    data_ai_hint: [
      "food delivery application",
      "subscription-based meal service",
      "real-world scalable platform",
    ],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Razorpay",
      "WebSockets",
    ],
    githubUrl: "https://github.com/yash-2511981/grabit", // update with actual repo
    liveUrl: "https://grabit-app.vercel.app", // update with actual live URL
    longDescription:
      "Grabit is a scalable food delivery platform that bridges restaurants and mess-based meal subscriptions. Designed for flexibility, it allows users to order food on demand or subscribe to monthly meal plans with features like meal pausing, cancellation before cutoff times, OTP-based delivery confirmation, and vendor-controlled notifications. The system ensures user convenience while keeping vendor profitability in mind. Built using the MERN stack with WebSockets for real-time updates and Razorpay integration for secure payments.",
  },

  {
    title: "ProFileBuilder (AI Resume Builder)",
    description:
      "An AI-powered resume generator with a multi-step form and real-time preview.",
    images: [
      "/ProFileBuilder/0.png",
      "/ProFileBuilder/1.png",
      "/ProFileBuilder/2.png",
      "/ProFileBuilder/3.png",
      "/ProFileBuilder/4.png",
    ],
    images_alt: [
      "screenshot of ProFileBuilder 1",
      "screenshot of ProFileBuilder 2",
      "screenshot of ProFileBuilder 3",
      "screenshot of ProFileBuilder 4",
      "screenshot of ProFileBuilder 5",
      "screenshot of ProFileBuilder 6",
    ],
    data_ai_hint: [
      "resume builder application",
      "modern web application",
      "ai powered tool",
    ],
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Zod",
      "React-hook-form",
      "Clerk",
      "PostgreSql",
      "Razorpay",
    ],
    githubUrl: "https://github.com/yash-2511981/ai-resume-builder",
    liveUrl: "https://profilebuilder-two.vercel.app",
    longDescription:
      "Building an AI-powered resume generator with multi-step form flow and real-time-preview. Implementing client-side validation and clean data structure using Zod and react-hook-form. Focused on reusable components, form data flow, and responsive design principles. Integrated subscription-based access control with Razorpay, enabling feature based access on user subscription level.",
  },
  {
    title: "VibeChat (Real-time Chat app)",
    description:
      "A responsive chat app with 1:1/group messaging, media sharing, and video/audio calls.",
    images: [
      "/VibeChatt/1.png",
      "/VibeChatt/2.png",
      "/VibeChatt/3.png",
      "/VibeChatt/5.png",
    ],
    images_alt: ["screenshot of VibeChat"],
    data_ai_hint: ["chat application interface"],
    tags: [
      "React.js",
      "Tailwind",
      "Node.js",
      "Express.js",
      "Mongoose",
      "axios",
      "socket.io",
      "webRTC",
      "JWT",
    ],
    githubUrl: "https://github.com/yash-2511981/VibeChatt",
    liveUrl: "https://vibe-chatt.vercel.app",
    longDescription:
      "Built a responsive chat app with 1:1 and group messaging, media sharing, and video/audio calling using webRTC. Designed RESTful APIs with Express and handled schema designed with mongoose. Implemented message persistence, notification, and real-time updates via socket.io. Integrated authentication with JWT, and managed online/offline status tracking. In-app notifications with instant reply feature and Delete/Edit message in particular time for better user control.",
  },
  {
    title: "Vestis (Ecommerce website)",
    description:
      "A fashion platform with user authentication, session management, and dynamic product handling.",
    images: [
      "/Vestis/1.png",
      "/Vestis/2.png",
      "/Vestis/3.png",
      "/Vestis/4.png",
      "/Vestis/5.png",
    ],
    images_alt: ["screenshot of Vestis"],
    data_ai_hint: ["ecommerce fashion website"],
    tags: ["HTML", "CSS", "Javascript", "Bootstrap", "Php", "Mysql", "DomPDF"],
    githubUrl: "https://github.com/yash-2511981/Vestis",
    liveUrl: "https://github.com/yash-2511981/Vestis",
    longDescription:
      "Created a fashion platform with user authentication, session management, and dynamic product handling. Designed a custom layout, components, and backend logic for cart, order tracking, and invoice generation. Built admin panel with product/user/category management and order reporting system.",
  },
  {
    title: "Online Tiffin Service",
    description:
      "A food ordering platform with secure payment integration and dynamic product filters.",
    images: [
      "/OnlineTiffinServices/0.png",
      "/OnlineTiffinServices/1.png",
      "/OnlineTiffinServices/2.png",
    ],
    images_alt: ["screenshot of Online Tiffin Service"],
    data_ai_hint: ["food delivery app"],
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap",
      "Php",
      "Mysql",
      "RazorPay Api",
      "TcPDF",
      "PHPmailer",
    ],
    githubUrl: "https://github.com/yash-2511981/OnlineTiffinService",
    liveUrl: "https://github.com/yash-2511981/OnlineTiffinService",
    longDescription:
      "Developed a food ordering platform with secure Razorpay payment integration and dynamic product filter. Built admin dashboard with full CRUD operations, sales reporting, and user/vendor management. Integrated email confirmation, bill generation, and order tracking functionality.",
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

export const navLinks: { name: string; href: string }[] = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
];

export const socialLinks: { name: string; url: string; icon: LucideIcon }[] = [
  { name: "GitHub", url: "https://github.com/yash-2511981", icon: Github },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yash-shetye-62b58b313",
    icon: Linkedin,
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/yash-shetye",
    icon: CodeIcon,
  },
];

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Information Technology (Bsc.IT)",
    institution: "Viva Institute of Technology",
    year: "2023-24",
    grade: "7.9 CGPA",
  },
  {
    degree: "Class XII (HSC)",
    institution: "S V M Pachal and Junior College(science)",
    year: "2018-19",
    grade: "60.00%",
  },
  {
    degree: "Class X (SSC)",
    institution: "A M V Karwali",
    year: "2016-17",
    grade: "90.60%",
  },
];

export const certifications: Certification[] = [
  {
    name: "JavaScript Full-Stack Developer",
    issuer: "SDAC Infotech",
    year: "2024 - 2025",
    grade: "A+",
    skills: [
      "Full-Stack Web Development",
      "MERN stack",
      "SEO techniques",
      "Database Management",
      "Core Web Technologies",
      "Soft Skills",
    ],
  },
];
