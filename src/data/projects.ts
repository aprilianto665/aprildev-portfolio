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
  status: 'completed' | 'in-progress';
}

export const projects: Project[] = [
  {
    title: "Movie API",
    slug: "movie-api",
    description:
      "RESTful API for movie database with CRUD operations, user authentication, and advanced search functionality.",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "Multer"],
    fullDescription:
      "A comprehensive RESTful API built for managing movie databases. Features include full CRUD operations, secure user authentication using JWT tokens, advanced search and filtering capabilities, and file upload functionality for movie posters using Multer middleware.",
    features: [
      "User authentication and authorization",
      "CRUD operations for movies",
      "Advanced search and filtering",
      "File upload for movie posters",
      "Rate limiting and security middleware",
    ],
    github: "https://github.com/username/movie-api",
    demo: "https://movie-api-demo.com",
    images: [
      "/images/movie-api-1.png",
      "/images/movie-api-2.png",
      "/images/movie-api-3.png",
    ],
    status: 'in-progress',
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
    status: 'completed',
  },
  {
    title: "Email Provider",
    slug: "email-provider",
    description:
      "EmailProvider is a full-stack, self-hosted email service similar to Gmail, featuring frontend, backend and its SMTP server. It uses SMTP for sending, IMAP for receiving, and includes a working webmail interface.",
    tech: ["React.js", "Golang"],
    fullDescription:
      "A complete self-hosted email solution that rivals commercial email providers. Built from scratch with custom SMTP and IMAP implementations, featuring a modern webmail interface and comprehensive email management capabilities.",
    features: [
      "Custom SMTP server implementation",
      "IMAP protocol support",
      "Modern webmail interface",
      "Email composition and management",
      "Self-hosted deployment",
    ],
    github: "https://github.com/username/email-provider",
    demo: "https://email-provider-demo.com",
    images: [
      "/images/email-provider-1.png",
      "/images/email-provider-2.png",
      "/images/email-provider-3.png",
    ],
    status: 'in-progress',
  },
];
