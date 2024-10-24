import React from "react";

export const SkillIcons = {
  CSS3: "/images/css3.png",
  HTML5: "/images/html5.png",
  React: "/images/react.png",
  JavaScript: "/images/javascript.png",
  TypeScript: "/images/typescript.png",
  StyledComponents: "/images/styled_components.svg",
  Tailwind: "/images/tailwind.svg",
  Git: "/images/git.png",
  NPM: "/images/npm.png",
  Storybook: "/images/storybook.png",
  Jest: "/images/jest.png",
  Figma: "/images/figma.png",
  Photoshop: "/images/photoshop.png",
  Illustrator: "/images/illustrator.png",
  Next: "/images/next.svg",
  Lightroom: "/images/lr.png",
  Thunkable: "/images/thunkable.png",
  ClipStudioPaint: "/images/csp.png",
  GoogleForms: "/images/forms.png",
  Three: "/images/threejs.png",
  GSAP: "/images/gsap.png",
};

export default function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center px-4 py-4 lg:px-8">
        <h3 className="pb-4 text-2xl font-bold text-primary-font-blue">
          Skills
        </h3>
        <div className="relative grid grid-cols-5 gap-6 md:grid-cols-5 lg:grid-cols-9 xl:grid-cols-10">
          {/* Convert the SkillIcons object into an array of entries and map over them */}
          {Object.entries(SkillIcons).map(([name, src], index) => (
            <div
              key={index}
              className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg bg-white p-4"
            >
              <img
                src={src}
                alt={name}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
