"use client";
import { useEffect, useRef, useState } from "react";
import { SocialLinks } from "../data/projectsData";
import useActiveSection from "../hooks/useActiveSection";

export default function SocialPill() {
  const activeSection = useActiveSection();
  const [opacity, setOpacity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);
  const pillRef = useRef<HTMLDivElement | null>(null);
  const [translateY, setTranslateY] = useState(0);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;

      if (scrollDiff > 0) {
        setTranslateY(10);
      } else if (scrollDiff < 0) {
        setTranslateY(-10);
      }

      lastScrollY = currentScrollY;

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setTranslateY(0);
      }, 250);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pillRef.current && !pillRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClick = () => {
    if (activeSection === "contact") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setIsExpanded((prev) => !prev);
    }
  };

  useEffect(() => {
    if (activeSection === "contact") {
      setOpacity(0);
    } else {
      setOpacity(1);
    }
  }, [activeSection]);

  return (
    <div
      id="social-pill"
      className="fixed bottom-8 right-8 z-50 flex flex-col items-center"
      ref={pillRef}
    >
      <div className="lg:hidden">
        {isExpanded && (
          <div className="flex translate-y-12 flex-col items-center space-y-4 rounded-full bg-background-main pb-16 pt-4">
            {Object.entries(SocialLinks).map(([key, { url, icon: Icon }]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="transform transition-all duration-300 hover:scale-125"
              >
                <Icon className="text-3xl text-primary-font-blue" />
              </a>
            ))}
          </div>
        )}
        <button
          onClick={handleClick}
          className="flex h-14 w-14 transform items-center justify-center rounded-full bg-secondary-font-pink text-primary-font-blue transition-transform duration-300 hover:scale-110"
        >
          {activeSection === "contact" ? (
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
                d="M5 15l7-7 7 7"
              />
            </svg>
          ) : isExpanded ? (
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
                d="M12 4v16m8-8H4"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Pill for medium and large screens */}
      <div
        className="fixed bottom-4 left-1/2 z-50 hidden flex-row items-center space-x-6 rounded-full bg-background-main/50 p-2 shadow-lg transition-all duration-150 ease-in-out lg:flex"
        style={{
          transform: `translateX(-50%) translateY(${translateY}px)`,
          opacity: opacity,
        }}
      >
        {Object.entries(SocialLinks).map(([key, { url, icon: Icon }]) => (
          <a
            key={key}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-all duration-300 hover:scale-125"
          >
            <Icon className="text-3xl text-primary-font-blue" />
          </a>
        ))}
      </div>
    </div>
  );
}
