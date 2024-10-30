"use client";
import { useState } from "react";
import { NavLinks } from "../data/projectsData";
import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-background-main">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 md:py-4">
        <a
          className="text-lg font-semibold text-primary-font-blue"
          href="#home"
        >
          Alena Hanchar
        </a>

        {/* Desktop Navbar Links */}
        <ul className="hidden list-none space-x-6 md:flex">
          {NavLinks.map((link) => (
            <li key={link.id}>
              <a
                className={`nav-link ${
                  activeSection === link.label
                    ? "text-secondary-font-pink"
                    : "text-primary-font-blue"
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 items-center justify-center text-primary-font-blue md:hidden"
        >
          {isOpen ? (
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

      {/* Mobile Navbar Dropdown */}
      {isOpen && (
        <ul className="list-none space-y-4 bg-background-main px-6 py-4 shadow-lg md:hidden">
          {NavLinks.map((link) => (
            <li key={link.id} className="text-center">
              <a
                className={`nav-link block ${
                  activeSection === link.label
                    ? "text-secondary-font-pink"
                    : "text-primary-font-blue"
                }`}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
