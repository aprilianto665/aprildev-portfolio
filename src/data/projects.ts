export interface Project {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  fullDescription: string;
  features: string[];
  github: string;
  demo: string;
  images: string[];
  status: "completed" | "in-progress";
}

export const projects: Project[] = [
  {
    title: "Group Chat App",
    slug: "group-chat-app",
    description:
      "Real-time collaborative platform with instant messaging, collaborative note-taking, and space management capabilities using serverless architecture.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Prisma",
      "PostgreSQL",
      "Pusher",
      "NextAuth.js",
      "Azure Blob Storage",
    ],
    fullDescription:
      "A modern serverless group chat application built with Next.js and real-time collaboration features. The app provides instant messaging with Pusher WebSocket, collaborative note-taking with block-based editor and drag-and-drop functionality, and multi-space management with role-based access control. Features secure authentication using NextAuth.js with JWT sessions, optimized PostgreSQL database with Prisma ORM, and Azure Blob Storage for file management. The application follows serverless architecture for automatic scaling, cost efficiency, and high performance with real-time capabilities.",
    features: [
      "Real-time messaging with Pusher WebSocket",
      "Collaborative note-taking with block-based editor",
      "Drag-and-drop functionality via @dnd-kit",
      "Multi-space management with role-based access",
      "Secure authentication with NextAuth.js and JWT",
      "Optimized PostgreSQL database with Prisma ORM",
      "Azure Blob Storage for file management",
      "Serverless deployment on Vercel with auto-scaling",
      "Responsive UI built with Tailwind CSS",
      "Type safety with TypeScript",
      "Efficient state management using Zustand",
    ],
    github: "https://github.com/aprilianto665/group-chat-app-submission",
    demo: "https://group-chat-app-submission.vercel.app",
    images: [
      "/group-chat-app-1.png",
      "/group-chat-app-2.png",
      "/group-chat-app-3.png",
    ],
    status: "completed",
  },
  {
    title: "HSR Profile Tracker",
    slug: "hsr-profile-tracker",
    description:
      "Full-stack web app for Honkai: Star Rail (popular turn-based RPG by HoYoverse) integrating real in-game data with weighted scoring algorithm for equipment evaluation.",
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
      "HSR Profile Tracker is a comprehensive web application designed to help Honkai: Star Rail players optimize their gameplay experience. The app connects to HoYoverse's official API to fetch real-time player data, including character builds, equipment (relics), and statistics. Players can input their game UID to automatically import their character roster and equipment inventory. The core feature is an intelligent scoring system that evaluates relic quality using weighted algorithms, helping players identify which equipment pieces are worth upgrading and which characters have the most optimized builds. This eliminates the guesswork in equipment management and provides data-driven insights for character progression. Built with modern technologies and optimized for performance, achieving 86% faster API responses and deployed on Azure for reliable access.",
    features: [
      "Real in-game data integration with HoYoverse API",
      "Weighted scoring algorithm using linear combination formula",
      "Equipment quality ranking and comparison system",
      "Rate limiting for API security under high traffic",
      "CI/CD pipelines with GitHub Actions (80% faster releases)",
      "Cloud-native deployment on Azure Container Apps",
      "Responsive UI with React.js and Tailwind CSS",
    ],
    github: "https://github.com/aprilianto665/hsr-profile-tracker-monorepo",
    demo: "https://app.hsr-profile.com/",
    images: [
      "/hsr-profile-tracker1.png",
      "/hsr-profile-tracker2.png",
      "/hsr-profile-tracker3.png",
    ],
    status: "completed",
  },
];
