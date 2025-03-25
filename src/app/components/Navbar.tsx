'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-indigo-600">Portfolio</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link
              href="#about"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-indigo-600 px-3 py-2 text-sm font-medium transition-colors duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600 hover:bg-gray-100 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
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
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="#about"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 text-base font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#projects"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 text-base font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 text-base font-medium transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="block px-3 py-2 text-gray-600 hover:text-indigo-600 text-base font-medium transition-colors duration-300"
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