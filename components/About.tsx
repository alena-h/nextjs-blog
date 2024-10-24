"use client";
import { useState } from "react";
import Skills from "./Skills";

export default function About() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

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
            <img
              src="/images/rocket.png"
              className={`rocket ${isAnimating ? "animate-fly" : "rocket-hover"}`}
              onClick={handleClick}
            />
          </b>
        </p>
      </div>
      <Skills />
    </section>
  );
}
