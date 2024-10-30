"use client";
import { useEffect, useRef, useState } from "react";
import Skills from "./Skills";
import Tooltip from "./Tooltip";

export default function About() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const rocketRef = useRef(null);

  const handleClick = () => {
    setIsAnimating(true);
    setShowTooltip(false);
    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      });
    });

    if (rocketRef.current) {
      observer.observe(rocketRef.current);
    }

    return () => {
      if (rocketRef.current) {
        observer.unobserve(rocketRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section flex-col">
      <div className="mx-auto flex w-full flex-col p-4 px-8">
        <h2 className="section-title">About me</h2>
        <p className="text text-justify">
          Enthusiastic Frontend Developer with a background in nutrition
          science. As a former health professional, I understand the human
          brain, and how this knowledge translates into design, engagement, and
          building relationships.
          <br /> I’m passionate about creating intuitive, engaging, and
          accessible websites and applications that prioritize aesthetics,
          functionality, and user experience. <br />
          With a solid foundation in React, I’m eager to tackle challenges
          head-on and contribute to impactful projects in a collaborative
          environment. I am excited to continue learning, growing, and
          delivering innovative, scalable web applications that enhance user
          experiences and drive success. <br />
          I’m also interested in exploring 3D and animation to create more
          exciting and dynamic applications, currently diving into libraries
          like Three.js and GSAP. <br />
        </p>
        <p className="text pt-6 text-center">
          <b>
            Looking for a first job opportunity in the IT field to kickstart my
            career. <br />
            <span
              ref={rocketRef}
              className={`rocket ${isAnimating ? "animate-fly" : isInView ? "animate-wiggle" : "rocket-hover"}`}
              style={{ transition: "transform 0.3s ease" }}
              onClick={handleClick}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <img src="/images/rocket.png" alt="Rocket" />
            </span>
            {showTooltip && (
              <Tooltip
                text="Click!"
                style={{ transform: "translateY(-120px) translateX(-50%)" }}
              />
            )}
          </b>
        </p>
      </div>
      <Skills />
    </section>
  );
}
