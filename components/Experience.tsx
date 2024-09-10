import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const experiences = [
  {
    date: "2024 Jan – present",
    title: "Junior Frontend Developer at Helios",
    link: "https://www.helios.sc/",
    description:
      "Successfully contributed to migrating a Vue.js project to React.js with Next.js, crafting efficient, reusable components using Styled Components and TypeScript. Played an active role in feature development, UX enhancements, and UI/UX design. Also maintained a streamlined component library in Storybook for efficient development and testing.",
  },
  {
    date: "2021 Jul – present",
    title: "Freelance Illustrator",
    link: "https://www.instagram.com/yunique.pawtrait/",
    description:
      "This is my creative outlet and a hobby that evolved into a side project. I primarily create pet portraits but also enjoy experimenting with different mediums and subjects.",
  },
  {
    date: "2019 - 2022",
    title:
      "Freelance Nutritionist at various wellness clinics, online consultations, and a football sports club",
    link: "",
    description:
      "Managed clients and provided personalized nutrition plans. Conducted body composition measurements and progress tracking. Created email newsletters on nutrition and health.",
  },
  {
    date: "2018 Jan - 2018 Jul",
    title: "Intern at ISPUP (Institute of Public Health University of Porto)",
    link: "https://ispup.up.pt/",
    description:
      "Conducted health interviews and collected data for epidemiological research. Cleaned and organized data.",
  },
  {
    date: "2017 Mar - 2017 Jul",
    title: "Intern at ITAU (food catering company)",
    link: "https://www.itau.pt/",
    description:
      "Menu Planing, internal audit for food quality and safety. Bachelor's thesis project on food waste and organization of an awareness campaign on the topic in a hospital unit.",
  },
];

export default function Experience() {
  const [highestVisibleIndex, setHighestVisibleIndex] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateLineHeight = () => {
      if (containerRef.current) {
        const containerHeight = containerRef.current.offsetHeight;
        const totalItems = experiences.length;
        const newHeight =
          ((highestVisibleIndex + 1) / totalItems) * containerHeight - 30;
        console.log(`Updating highestVisibleIndex: ${highestVisibleIndex}`);
        setLineHeight(newHeight);
      }
    };

    updateLineHeight();

    window.addEventListener("resize", updateLineHeight);

    return () => {
      window.removeEventListener("resize", updateLineHeight);
    };
  }, [highestVisibleIndex]);

  return (
    <section id="experience" className="section">
      <div className="container px-4 lg:px-20">
        <h2 className="section-title">Experience</h2>
        <div ref={containerRef} className="relative">
          <motion.div
            className="absolute left-2 w-0.5 bg-tertiary-font-action-blue shadow-[0_0_10px_1px_rgba(81,159,165)]"
            initial={{ height: 0 }}
            animate={{ height: lineHeight }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              date={exp.date}
              title={exp.title}
              link={exp.link}
              description={exp.description}
              index={index}
              setHighestVisibleIndex={setHighestVisibleIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  date,
  title,
  link,
  description,
  index,
  setHighestVisibleIndex,
}) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      setHighestVisibleIndex((prevIndex) => Math.max(prevIndex, index));
    } else {
      setHighestVisibleIndex((prevIndex) =>
        prevIndex === index ? index - 1 : prevIndex,
      );
    }
  }, [inView, index, setHighestVisibleIndex]);

  return (
    <div ref={ref} className="relative flex flex-row py-10">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-14 ml-[0.4rem] h-1.5 w-1.5 rounded-full bg-tertiary-font-action-blue shadow-[0_0_15px_10px_rgba(81,159,165)]"
      ></motion.span>

      <div className="ml-10">
        <motion.div
          initial={{ opacity: 0 }}
          className="bg-background-main pb-4"
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          {link !== "" ? (
            <a href={link} target="_blank" className="group">
              <h3 className="flex flex-nowrap items-center gap-1 text-xl font-semibold text-tertiary-font-action-blue hover:underline">
                {title}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 60 60"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ease stroke-[#519FA5] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  <path
                    d="M32 3.43506H49M49 3.43506V20.4351M49 3.43506L26.5 25.4351M19 3.43506H11C6.58172 3.43506 3 7.01678 3 11.4351V41.4351C3 45.8533 6.58172 49.4351 11 49.4351H41C45.4183 49.4351 49 45.8533 49 41.4351V33.5"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </h3>
            </a>
          ) : (
            <h3 className="flex flex-nowrap items-center gap-1 text-xl font-semibold text-tertiary-font-action-blue">
              {title}
            </h3>
          )}

          <p className="text-primary-font-blue">{date}</p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: -50, height: 0 }}
          animate={{
            opacity: inView ? 1 : 0,
            y: inView ? 0 : -50,
            height: inView ? "fit-content" : 0,
          }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-2 text-primary-font-blue"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
