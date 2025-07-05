// Navbar: The top navigation bar with links to pages.
// Changes color as you scroll for better visibility.
// Usage:
// <Navbar />

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

export default function Navbar() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Find all sections that affect navbar theme
    const sections = Array.from(document.querySelectorAll("section"));
    if (!sections.length) return;

    const handleScroll = () => {
      // Get navbar height
      const navbar = document.querySelector("nav");
      const navHeight = navbar ? navbar.getBoundingClientRect().height : 0;
      // Default to light theme
      let currentTheme: "dark" | "light" = "light";

      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top - navHeight <= 0 && rect.bottom - navHeight > 0) {
          // Check if section has a dark background
          const hasDarkBg =
            section.classList.contains("bg-gray-900") || // Explore Property section
            (section.style.backgroundImage && section.querySelector(".bg-gradient-to-b.from-black")); // Hero section

          if (hasDarkBg) {
            currentTheme = "dark";
            break;
          }
        }
      }
      setTheme(currentTheme);
      // Close mobile menu on scroll
      setIsMenuOpen(false);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = cn(
    "fixed top-0 left-0 w-full z-50 transition-all duration-300",
    theme === "dark" ? "text-white" : "text-gray-900",
    !isMenuOpen && "backdrop-blur-md border-b shadow-xl",
    theme === "dark"
      ? "bg-black/30 border-white/10"
      : "bg-white/90 border-gray-200"
  );

  const linkClass = (isActive: boolean) =>
    cn(
      "relative font-medium transition-all duration-200",
      theme === "dark"
        ? isActive
          ? "text-blue-300"
          : "text-white hover:text-blue-200"
        : isActive
        ? "text-blue-600"
        : "text-gray-700 hover:text-blue-600",
      "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100"
    );

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className={cn(
              "font-sans font-bold text-xl tracking-wider relative group flex items-center gap-2 transition-all",
              theme === "dark"
                ? "text-white hover:text-blue-200"
                : "text-gray-900 hover:text-blue-600"
            )}
          >
            <span className="relative flex items-center">
              <span className="absolute -inset-4 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></span>
              <span className="relative">Moon</span>
              <span
                className={cn(
                  "font-light ml-0.5",
                  theme === "dark" ? "text-blue-300" : "text-blue-600"
                )}
              >
                sellers
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link href="/" className={linkClass(pathname === "/")}>
              Home
            </Link>
            <Link
              href="/projects"
              className={linkClass(pathname.startsWith("/projects"))}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={linkClass(pathname.startsWith("/about"))}
            >
              About
            </Link>
            <Button
              variant={theme === "dark" ? "outline" : "default"}
              size="sm"
              className="ml-4"
              asChild
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <span className="sr-only">Open main menu</span>
            <div className="w-6 h-6 flex items-center justify-center relative">
              <span
                className={cn(
                  "absolute w-5 h-0.5 transform transition-all duration-300",
                  theme === "dark" ? "bg-white" : "bg-gray-900",
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1"
                )}
              />
              <span
                className={cn(
                  "absolute w-5 h-0.5 transition-opacity duration-200",
                  theme === "dark" ? "bg-white" : "bg-gray-900",
                  isMenuOpen ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute w-5 h-0.5 transform transition-all duration-300",
                  theme === "dark" ? "bg-white" : "bg-gray-900",
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isMenuOpen ? "max-h-64 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col space-y-4">
            <Link
              href="/"
              className={cn(
                linkClass(pathname === "/"),
                "px-2 py-1 rounded-md text-lg"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/projects"
              className={cn(
                linkClass(pathname.startsWith("/projects")),
                "px-2 py-1 rounded-md text-lg"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={cn(
                linkClass(pathname.startsWith("/about")),
                "px-2 py-1 rounded-md text-lg"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Button
              variant={theme === "dark" ? "outline" : "default"}
              size="default"
              className="w-full justify-center"
              asChild
              onClick={() => setIsMenuOpen(false)}
            >
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
