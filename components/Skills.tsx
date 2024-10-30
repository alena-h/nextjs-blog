import { CldImage } from "next-cloudinary";
import React from "react";
import { SkillIcons } from "../data/projectsData";

export default function Skills() {
  return (
    <div>
      <div className="flex flex-col items-center px-4 py-4 lg:px-8">
        <h3 className="pb-4 text-2xl font-bold text-primary-font-blue">
          Skills
        </h3>
        <div className="relative grid grid-cols-5 gap-6 md:grid-cols-5 lg:grid-cols-9 xl:grid-cols-10">
          {Object.entries(SkillIcons).map(([name, src], index) => (
            <div
              key={index}
              className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-lg bg-white p-4"
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
