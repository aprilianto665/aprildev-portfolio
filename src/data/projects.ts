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
    title: "Group Chat App",
    slug: "group-chat-app",

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
      "A real-time collaborative workspace that combines instant messaging with collaborative note-taking. Users can create multiple spaces, chat in real-time, and work together on shared notes with a block-based editor. Built with serverless architecture for scalability and performance.",

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
    demo: "https://app.hsr-profile.com/",
    images: [
      "/hsr-profile-tracker1.png",
      "/hsr-profile-tracker2.png",
      "/hsr-profile-tracker3.png",
    ],
    status: "completed",
  },
];
