"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

const WorkCard = ({ title, image, technologies }) => {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => setHovered(true);
    const handleMouseLeave = () => setHovered(false);

    const cardElement = cardRef.current;
    if (cardElement) {
      cardElement.addEventListener("mouseenter", handleMouseEnter);
      cardElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener("mouseenter", handleMouseEnter);
        cardElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <Link
      href={`/portfolio/${title.toLowerCase().replace(/\s+/g, "")}`}
      passHref
    >
      <div
        ref={cardRef}
        className="work-card relative mb-4 min-h-48 w-full cursor-pointer overflow-hidden border md:aspect-square md:max-h-96"
      >
        <CldImage
          priority
          alt=""
          width={200}
          height={200}
          src={image || "image_not_jwluuo"}
          className={`absolute inset-0 h-full w-full object-cover transition ${
            hovered ? "" : "opacity-50"
          }`}
        />
        <div
          className={`z-5 relative flex h-full flex-col items-center justify-between p-4 transition ${
            hovered ? "" : "bg-gradient-to-b from-background-main"
          }`}
        >
          {!hovered && (
            <div className="flex h-full flex-col justify-between p-4">
              <h3 className="text-lg font-semibold text-primary-font-blue transition">
                {title.toUpperCase()}
              </h3>
              <div className="grid grid-cols-4 gap-6">
                {technologies.map((name, index) => (
                  <div
                    key={index}
                    className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-lg bg-white p-2"
                  >
                    <CldImage
                      src={name}
                      unoptimized
                      format="auto"
                      alt={name}
                      width="100"
                      height="100"
                      crop={{
                        type: "fit",
                        aspectRatio: "1:1",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default WorkCard;
