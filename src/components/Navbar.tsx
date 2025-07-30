"use client";
import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <Image
                src="/img-logo-icon.svg"
                alt="Pomofy Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-[24px] font-[700]">Pomofy</span>
            </div>
          </div>

          {/* Desktop Navigation and Download Button */}
          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("hero")}
              className="relative text-[16px] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-black transition-all duration-200 cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="relative text-[16px] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-black transition-all duration-200 cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("plans")}
              className="relative text-[16px] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-black transition-all duration-200 cursor-pointer"
            >
              Plans
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="relative text-[16px] hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-black transition-all duration-200 cursor-pointer"
            >
              Contact Us
            </button>
            <a
              onClick={() => scrollToSection("hero")}
              className="bg-black text-white px-6 py-3 rounded-full text-[16px] font-[500] hover:bg-black/90 transition-colors flex items-center space-x-2 cursor-pointer"
            >
              <Image
                src="/ic-download.svg"
                alt="Download"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span>DOWNLOAD NOW</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="p-6 bg-white/20 backdrop-blur-sm rounded-[20px] space-y-4">
              <button
                onClick={() => scrollToSection("hero")}
                className="block w-full text-left hover:text-gray-600 transition-colors text-[16px] font-[500]"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left hover:text-gray-600 transition-colors text-[16px] font-[500]"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("plans")}
                className="block w-full text-left hover:text-gray-600 transition-colors text-[16px] font-[500]"
              >
                Plans
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left hover:text-gray-600 transition-colors text-[16px] font-[500]"
              >
                Contact Us
              </button>
              <a
                onClick={() => scrollToSection("hero")}
                className="bg-black text-white px-6 py-3 rounded-full text-[16px] font-[500] hover:bg-black/90 transition-colors flex justify-center items-center space-x-2 cursor-pointer"
              >
                <Image
                  src="/ic-download.svg"
                  alt="Download"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <span>DOWNLOAD NOW</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
