import { CldImage } from "next-cloudinary";
import React from "react";
import { SkillIcons } from "../data/projectsData";

export default function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center px-8 py-4">
        <h3 className="pb-4 text-2xl font-bold text-primary-font-blue">
          Skills
        </h3>
        <div
          className="relative grid w-full gap-6"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(6rem, 1fr))",
          }}
        >
          {Object.entries(SkillIcons).map(([name, src], index) => (
            <div
              key={index}
              className="mx-auto flex aspect-square w-fit items-center justify-center overflow-hidden rounded-lg bg-white p-6"
            >
              <CldImage
                src={src}
                unoptimized
                format="auto"
                width="100"
                height="100"
                alt={name}
                crop={{
                  aspectRatio: "1:1",
                  type: "fit",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
