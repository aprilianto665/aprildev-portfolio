import type { Metadata } from "next";
import { Comic_Neue } from "next/font/google";
import "./globals.css";
import StructuredData from "../components/StructuredData";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Muhammad Aprilianto - Portfolio",
  description:
    "Muhammad Aprilianto Portfolio Website - Software Engineer & Web Developer",
  keywords: [
    "Muhammad Aprilianto",
    "Aprilianto",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: "Muhammad Aprilianto" }],
  icons: {
    icon: "/Avatar.png",
    shortcut: "/Avatar.png",
    apple: "/Avatar.png",
  },
  openGraph: {
    title: "Muhammad Aprilianto - Portfolio",
    description: "Muhammad Aprilianto Portfolio Website - Software Engineer",
    siteName: "Muhammad Aprilianto Portfolio",
    images: [
      {
        url: "/Avatar.png",
        width: 512,
        height: 512,
        alt: "Aprilianto Avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Muhammad Aprilianto - Portfolio",
    description: "Muhammad Aprilianto Portfolio Website - Software Engineer",
    images: ["/Avatar.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${comicNeue.variable} font-mono antialiased bg-[#FFECE3]`}
        cz-shortcut-listen="true"
      >
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
