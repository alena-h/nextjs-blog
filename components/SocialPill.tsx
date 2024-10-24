"use client";
import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";
import useActiveSection from "../hooks/useActiveSection";

export default function SocialPill() {
  const activeSection = useActiveSection();
  const [translateY, setTranslateY] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDiff = currentScrollY - lastScrollY;

      if (scrollDiff > 0) {
        setTranslateY(50);
      } else if (scrollDiff < 0) {
        setTranslateY(-50);
      }

      lastScrollY = currentScrollY;

      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        setTranslateY(0);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

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
      className="fixed left-2 top-1/3 z-50 flex flex-col items-center space-y-6 rounded-full bg-background-main/50 p-2 shadow-lg transition-all duration-300 ease-in-out"
      style={{
        transform: `translateY(${translateY}px)`,
        opacity: opacity,
      }}
    >
      <a
        href="https://github.com/alena-h"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125"
      >
        <FaGithub className="text-2xl text-primary-font-blue" />
      </a>
      <a
        href="https://www.linkedin.com/in/alena-hanchar/"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125"
      >
        <FaLinkedin className="text-2xl text-primary-font-blue" />
      </a>
      <a
        href="https://codepen.io/Lena-Hanchar"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125"
      >
        <FaCodepen className="text-2xl text-primary-font-blue" />
      </a>
      <a
        href="https://www.instagram.com/shir0hana"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125"
      >
        <FaInstagram className="text-2xl text-primary-font-blue" />
      </a>
      <a
        href="https://www.behance.net/lenahanchar"
        target="_blank"
        rel="noopener noreferrer"
        className="transform transition-all duration-300 hover:scale-125"
      >
        <FaBehance className="text-2xl text-primary-font-blue" />
      </a>
    </div>
  );
}
