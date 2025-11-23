"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navClass = cn(
    "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#09294C] text-white shadow-md"
  );

  const linkClass = (isActive: boolean) =>
    cn(
      "relative font-medium text-base transition-all duration-200 px-2 py-1",
      isActive ? "text-yellow-400" : "text-white hover:text-yellow-300",
      "after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform hover:after:scale-x-100"
    );

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-5 lg:px-10 h-20 flex items-center justify-between relative">
        {/* Left-aligned Logos */}
        <Link
          href="/"
          aria-label="Moonsellers Home"
          className="flex items-center gap-2 h-full"
        >
          <Image
            src="/images/moonsellerslogo.png"
            alt="Moonsellers icon logo"
            width={200}
            height={200}
            priority
            className="h-12 md:h-14 w-auto object-contain"
          />
          <Image
            src="/images/moonsellerslogo2.png"
            alt="Moonsellers wordmark"
            width={800}
            height={320}
            priority
            className="hidden sm:block h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/projects"
            className={linkClass(pathname === "/projects")}
          >
            Projects
          </Link>
          <Link href="/about" className={linkClass(pathname === "/about")}>
            About
          </Link>
          <a
            href="#overview"
            className={linkClass(pathname === "/#overview" || pathname === "/")}
          >
            Overview
          </a>
          <Link
            href="/contact"
            className={cn(
              "ml-4 px-5 py-2 rounded-md text-sm font-semibold transition-all duration-300",
              pathname === "/contact"
                ? "bg-yellow-400 text-black border border-yellow-400"
                : "bg-transparent border border-yellow-400 text-yellow-300 hover:bg-yellow-400 hover:text-black"
            )}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="p-2 rounded-md text-white hover:text-yellow-300"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#09294C] bg-opacity-95 text-white border-t border-gray-700">
          <div className="container mx-auto px-5 py-4 flex flex-col gap-4 text-lg">
            <Link
              href="/projects"
              className={linkClass(pathname === "/projects")}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/about"
              className={linkClass(pathname === "/about")}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <a
              href="#overview"
              className={linkClass(false)}
              onClick={() => setIsMenuOpen(false)}
            >
              Overview
            </a>
            <Link
              href="/contact"
              className="px-4 py-2 rounded-md border border-yellow-500 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
