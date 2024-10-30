"use client";
import React, { useState } from "react";
import { CldImage } from "next-cloudinary";

export default function Home() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => {
      window.open("/Alena-Hanchar-cv-public.pdf", "CV_alena_hanchar");
    }, 700);

    setTimeout(() => {
      setIsDownloaded(false);
    }, 3000);
  };

  return (
    <section id="home" className="section">
      <div className="mx-auto flex h-fit w-full flex-col items-center justify-around gap-10 px-8 pb-[5%] pt-[10%] md:gap-14 md:px-8 lg:flex-row">
        <div id="left" className="relative">
          <div className="relative m-auto h-[40%] w-3/4">
            <CldImage
              priority
              className="animate-slideInLeft rounded-full"
              src="me_iodyke"
              alt="example"
              width={500}
              height={500}
              crop={{
                type: "fill",
                source: true,
              }}
            />
            <h2 className="absolute -left-[2%] top-[15%] animate-fallDown text-5xl text-primary-font-blue opacity-0 animation-delay-1000 md:text-6xl">
              Hi,
            </h2>
            <h2 className="absolute -left-[2%] top-[35%] animate-fallDown text-4xl text-primary-font-blue opacity-0 animation-delay-1100 md:text-5xl">
              my
            </h2>
            <h2 className="absolute -right-[5%] bottom-[30%] animate-fallDown text-4xl text-primary-font-blue opacity-0 animation-delay-1200 md:text-5xl">
              name is
            </h2>
            <h1 className="absolute -right-[5%] bottom-[10%] animate-fallDown text-5xl text-primary-font-blue opacity-0 animation-delay-1300 md:-right-20 md:top-[60%] md:text-7xl xl:-right-32 xl:text-8xl">
              Alena<span className="text-8xl text-primary-font-blue">.</span>
            </h1>
          </div>
        </div>

        <div
          id="right"
          className="flex animate-slideInRight flex-col items-center gap-8"
        >
          <h2 className="text-center text-3xl text-primary-font-blue md:text-4xl">
            FRONT-END DEVELOPER
            <br /> from Portugal.
          </h2>
          <p className="text-center">
            ✨ passionate about design and UX <br />
            🐶 dog-lover and photography enthusiast
          </p>
          <button
            onClick={handleDownload}
            className="relative mx-auto flex h-12 w-full min-w-52 max-w-[calc(100%-3rem)] animate-wiggle flex-row items-center justify-center gap-2 text-nowrap rounded-lg bg-tertiary-font-action-blue py-2 font-semibold text-primary-font-blue shadow-lg shadow-white/25 animation-delay-3000 hover:bg-tertiary-font-action-blue/90"
          >
            <span
              className={`absolute flex transform items-center gap-2 transition-opacity duration-500 ease-in-out ${
                isDownloaded ? "scale-100 opacity-100" : "scale-0 opacity-0"
              }`}
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12l4 4L19 7"
                  stroke="#EAF3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <span
              className={`absolute flex items-center gap-2 pl-4 transition-opacity duration-500 ease-in-out ${
                isDownloaded ? "opacity-0" : "opacity-100"
              }`}
            >
              Download CV
              <svg
                width="24"
                height="24"
                viewBox="0 0 26 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 1.5V17.5M13 17.5L19.5 11.5M13 17.5L6.5 11.5M1.5 23H24.5"
                  stroke="#EAF3F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
