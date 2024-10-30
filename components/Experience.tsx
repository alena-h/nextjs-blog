"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "../data/projectsData";
import { useRef } from "react";

export default function Experience() {
  const lineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ["0 0.5", "end end"],
  });

  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="experience" className="section">
      <div className="mx-auto flex h-fit w-full flex-col items-center justify-around gap-10 overflow-y-hidden px-4 lg:px-20">
        <h2 className="section-title">Experience</h2>
        <div ref={lineRef} className="relative h-full">
          <motion.div
            className="absolute left-2 h-full w-0.5 bg-tertiary-font-action-blue shadow-[0_0_10px_1px_rgba(45,163,172)]"
            style={{
              scaleY: lineScaleY,
              transformOrigin: "top",
            }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          ></motion.div>

          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              date={exp.date}
              title={exp.title}
              link={exp.link}
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ date, title, link, description }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 0.5], [20, 0]);

  return (
    <div ref={ref} className="relative flex flex-row py-10">
      <motion.span
        initial={{ scale: 0 }}
        style={{ scale: opacity }}
        transition={{ duration: 0.5 }}
        className="absolute top-14 ml-[0.4rem] h-1.5 w-1.5 rounded-full bg-tertiary-font-action-blue shadow-[0_0_15px_10px_rgba(45,163,172)]"
      ></motion.span>

      <div className="ml-10">
        <motion.div
          style={{
            opacity: opacity,
            translateY: translateY,
          }}
          transition={{ duration: 0.5 }}
          className="bg-background-main pb-4"
        >
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <h3 className="flex flex-nowrap items-center gap-1 text-xl font-semibold text-tertiary-font-action-blue hover:underline">
                {title}
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
          style={{
            opacity: opacity,
            translateY: translateY,
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text mt-2 text-primary-font-blue"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
