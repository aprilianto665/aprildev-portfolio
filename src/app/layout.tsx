import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Aprilianto Portfolio",
  description: "Muhammad Aprilianto Portfolio Website",
  icons: {
    icon: "/Avatar.png",
    shortcut: "/Avatar.png",
    apple: "/Avatar.png",
  },
  openGraph: {
    title: "Aprilianto Portfolio",
    description: "Muhammad Aprilianto Portfolio Website",
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
    title: "Aprilianto Portfolio",
    description: "Muhammad Aprilianto Portfolio Website",
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
        className={`${spaceMono.variable} font-mono antialiased bg-[#FFECE3]`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
