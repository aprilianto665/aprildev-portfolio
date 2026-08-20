export interface Project {
  title: string;
  slug: string;
  tech: string[];
  fullDescription: string;
  github: string;
  demo: string;
  images: string[];
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    title: "HSR Profile Tracker",
    slug: "hsr-profile-tracker",

    tech: [
      "React.js",
      "Tailwind CSS",
      "Golang",
      "Go Fiber",
      "Redis",
      "Docker",
      "Azure Container Apps",
    ],
    fullDescription:
      "A game optimization tool for Honkai: Star Rail players that analyzes character builds and equipment quality. Players enter their game UID to import their data, and the app uses intelligent scoring algorithms to evaluate which equipment is worth upgrading and which characters are optimally built.",

    github: "https://github.com/aprilianto665/hsr-profile-tracker-monorepo",
    demo: "",
    images: [
      "/hsr-profile-tracker1.png",
      "/hsr-profile-tracker2.png",
      "/hsr-profile-tracker3.png",
    ],
    status: "completed",
  },
  {
    title: "Predictive Lead Scoring Portal for Banking Sales",
    slug: "predictive-lead-scoring-portal",

    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Ant Design",
      "Zustand",
      "React Hook Form",
      "Zod",
      "Golang",
      "Go Fiber",
      "GORM",
      "PostgreSQL",
      "Scikit-Learn",
      "ONNX",
      "Azure OpenAI",
      "Docker",
      "Azure VM",
      "GitHub Actions",
    ],
    fullDescription:
      "A machine learning-based web portal designed to optimize banking sales lead targeting using predictive analytics and real-time dashboards. Features responsive interfaces with data visualization for customer scoring, campaign tracking, and KPI monitoring. Integrates with backend APIs and ML models to provide feedback loops for customer tagging and performance analysis, enhancing sales team efficiency through improved usability and dashboard interactivity.",

    github: "https://github.com/cuanversation",
    demo: "https://cuanversation.com/dashboard",
    images: ["/cuanvers1.png"],
    status: "completed",
  },
  {
    title: "Donpro.id (Company Profile Website)",
    slug: "donpro-id",
    tech: [
      "PHP",
      "Laravel",
      "Blade",
      "Tailwind CSS",
      "Alpine.js",
      "MySQL",
      "REST API",
      "Docker",
      "Nginx",
      "Linux",
    ],
    fullDescription:
      "A company profile website and content management platform developed for a maritime industry consultancy firm to showcase services, projects, and corporate information. The platform includes a custom content management dashboard, enabling administrators to manage website content efficiently while maintaining performance, SEO optimization, and scalability for future business growth.",
    github: "",
    demo: "https://donpro.id",
    images: ["/donpro1.png", "/donpro2.png", "/donpro3.png"],
    status: "completed",
  },
  {
    title: "PT Antang Gunung Meratus E-Requisition Form",
    slug: "pt-agm-e-requisition-form",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Zustand",
    ],
    fullDescription:
      "A modern web-based electronic requisition application designed specifically to transition corporate procurement from an error-prone manual Excel-based process into a streamlined digital workflow. Built to eliminate manual data checking by the procurement department and drastically reduce input errors, it features dynamic requisition forms with real-time validation, comprehensive item catalog integration, and automated data export back to standardized Excel spreadsheets. The application utilizes a robust full-stack architecture to create a seamless, accurate, and structured approval experience.",
    github: "",
    demo: "",
    images: ["/e-requisition1.png", "/e-requisition2.png", "/e-requisition3.png"],
    status: "completed",
  },
  {
    title: "run.mem (Habit & Commitment Tracking Platform)",
    slug: "run-mem",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
    ],
    fullDescription:
      "A productivity platform designed to help users achieve long-term objectives through habit tracking, mission-based routines, and progress visualization. Inspired by Atomic Habits principles, the application combines behavioral design concepts with a scalable web architecture to create a structured and engaging self-improvement experience.",
    github: "https://github.com/aprilianto665/mem.exe-new",
    demo: "https://run-mem.vercel.app/",
    images: ["/run-mem.png"],
    status: "completed",
  },
  {
    title: "KanjiGoto (Marugoto Curriculum Kanji Practice App)",
    slug: "kanjigoto",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS"
    ],
    fullDescription:
      "A minimalist language learning web application designed specifically for practicing and memorizing Japanese Kanji following the Marugoto curriculum. Featuring dynamic randomized flashcards and a rapid-fire manual input drill system, the application utilizes a fast, zero-latency pure frontend architecture to create an engaging and frictionless active recall experience.",
    github: "https://github.com/aprilianto665/kanjigoto-app",
    demo: "https://kanjigoto.vercel.app/",
    images: [
      "/kanjigoto1.png",
      "/kanjigoto2.png",
    ],
    status: "completed",
  },
];
