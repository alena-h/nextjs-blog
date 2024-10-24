"use client";
import { useEffect, useState } from "react";
import IndexPage from "./index";
import SocialPill from "../components/SocialPill";

export default function Page() {
  const [showSocialPill, setShowSocialPill] = useState(true);

  useEffect(() => {
    const handleVisibility = () => {
      const currentHash = window.location.hash;
      if (currentHash === "#contact") {
        setShowSocialPill(false);
      } else {
        setShowSocialPill(true);
      }
    };

    handleVisibility();

    window.addEventListener("hashchange", handleVisibility);

    return () => {
      window.removeEventListener("hashchange", handleVisibility);
    };
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

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <IndexPage />
      {showSocialPill && <SocialPill />}
    </>
  );
}
