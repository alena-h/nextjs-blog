import React from "react";

const skillIcons = [
  "/images/css3.png",
  "/images/html5.png",
  "/images/react.png",
  "/images/javascript.png",
  "/images/typescript.png",
  "/images/styled_components.svg",
  "/images/tailwind.svg",
  "/images/git.png",
  "/images/npm.png",
  "/images/storybook.png",
  "/images/jest.png",
  "/images/figma.png",
  "/images/photoshop.png",
  "/images/illustrator.png",
];

export default function Skills() {
  return (
    <div className="mt-16">
      <div className="container px-4 py-4 lg:px-8">
        <h3 className="pb-4 text-2xl font-bold text-primary-font-blue">
          Skills
        </h3>
        <div className="grid grid-cols-3 gap-6 md:grid-cols-4 lg:grid-cols-7">
          {skillIcons.map((src, index) => (
            <div
              key={index}
              className="flex h-32 w-32 items-center justify-center overflow-hidden rounded-lg bg-white p-4"
            >
              <img
                src={src}
                alt={`Skill ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
