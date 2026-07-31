"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-3 px-4 sm:px-8 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto transition-all duration-300 ${
          scrolled
            ? "bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_6px,#fcfbf9_6px,#fcfbf9_12px)] border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] outline outline-1 outline-black/30 outline-offset-[-3px] px-6 py-2.5"
            : "bg-transparent px-4 py-3"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-xl sm:text-2xl font-extrabold text-black tracking-tight select-none">
            April{" "}
            <span className="text-orange-600">
              Dev
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-black font-extrabold text-sm sm:text-base px-3 py-1 rounded-[15px_255px_15px_225px/255px_15px_225px_15px] border-2 border-transparent hover:border-black hover:bg-amber-200/80 transition-all duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}