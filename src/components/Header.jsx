"use client";
import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-gray-900 text-white py-4 fixed w-full z-50 top-0 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
        {/* Logo Image */}
        <div className="text-2xl font-bold">
          <img src="/logo.svg" alt="Your Brand Logo" className="h-11 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#hero" className="text-white hover:text-blue-500">
            Home
          </a>
          <a href="#how-it-works" className="text-white hover:text-blue-500">
            How It Works
          </a>
          <a href="#why-choose-us" className="text-white hover:text-blue-500">
            Why Choose Us
          </a>
          <a href="#contact" className="text-white hover:text-blue-500">
            Contact
          </a>
          <a
            href="#get-started"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Get Started
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white py-4 space-y-4">
          <a href="#hero" className="block px-4 py-2 hover:bg-gray-700">
            Home
          </a>
          <a href="#how-it-works" className="block px-4 py-2 hover:bg-gray-700">
            How It Works
          </a>
          <a href="#why-choose-us" className="block px-4 py-2 hover:bg-gray-700">
            Why Choose Us
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-700">
            Contact
          </a>
          <a
            href="#get-started"
            className="block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
