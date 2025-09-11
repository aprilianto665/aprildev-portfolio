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
}

export const projects: Project[] = [
  {
    title: "Movie API",
    slug: "movie-api",
    description: "RESTful API for movie database with CRUD operations, user authentication, and advanced search functionality.",
    tech: ["Node.js", "Express.js", "MySQL", "JWT", "Multer"],
    fullDescription: "A comprehensive RESTful API built for managing movie databases. Features include full CRUD operations, secure user authentication using JWT tokens, advanced search and filtering capabilities, and file upload functionality for movie posters using Multer middleware.",
    features: [
      "User authentication and authorization",
      "CRUD operations for movies",
      "Advanced search and filtering",
      "File upload for movie posters",
      "Rate limiting and security middleware"
    ],
    github: "https://github.com/username/movie-api",
    demo: "https://movie-api-demo.com",
    images: ["/images/movie-api-1.png", "/images/movie-api-2.png", "/images/movie-api-3.png"]
  },
  {
    title: "HSR Profile Tracker",
    slug: "hsr-profile-tracker",
    description: "A full-stack app for Honkai: Star Rail (HSR), a popular turn-based RPG. It integrates with real in-game data, featuring advanced algorithms for character stat calculations and a complex relics scoring system to optimize builds.",
    tech: ["React.js", "Golang", "Redis","Docker"],
    fullDescription: "A sophisticated tracking application for Honkai: Star Rail players. The app integrates with real game data to provide character statistics, build optimization, and relic scoring. Built with React.js frontend, Golang backend, and Redis for caching game data.",
    features: [
      "Real-time game data integration",
      "Character stat calculations",
      "Relic scoring system",
      "Build optimization algorithms",
      "Performance caching with Redis"
    ],
    github: "https://github.com/aprilianto665/hsr-profile-tracker",
    demo: "https://hsr-tracker-demo.com",
    images: ["/test.png", "/test2.png"]
  },
  {
    title: "Email Provider",
    slug: "email-provider",
    description: "EmailProvider is a full-stack, self-hosted email service similar to Gmail, featuring frontend, backend and its SMTP server. It uses SMTP for sending, IMAP for receiving, and includes a working webmail interface.",
    tech: ["React.js", "Golang"],
    fullDescription: "A complete self-hosted email solution that rivals commercial email providers. Built from scratch with custom SMTP and IMAP implementations, featuring a modern webmail interface and comprehensive email management capabilities.",
    features: [
      "Custom SMTP server implementation",
      "IMAP protocol support",
      "Modern webmail interface",
      "Email composition and management",
      "Self-hosted deployment"
    ],
    github: "https://github.com/username/email-provider",
    demo: "https://email-provider-demo.com",
    images: ["/images/email-provider-1.png", "/images/email-provider-2.png", "/images/email-provider-3.png"]
  }
];