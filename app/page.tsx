"use client";
import { useEffect } from "react";
import IndexPage from "./index";

export default function Page() {
  useEffect(() => {
    const hash = window.location.hash;

    if (hash) {
      const section = document.getElementById(hash.substring(1));
      if (section) {
        section.scrollIntoView();
      }
    }
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll(
      "main > section",
    ) as NodeListOf<HTMLElement>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            history.replaceState(null, "", `#${id}`);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return <IndexPage />;
}
