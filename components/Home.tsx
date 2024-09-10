import React, { useState } from "react";

export default function Home() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = () => {
    setIsDownloaded(true);
    setTimeout(() => {
      window.open("/Alena-Hanchar-CV.pdf", "CV_alena_hanchar");
    }, 700);

    setTimeout(() => {
      setIsDownloaded(false);
    }, 3000);
  };

  return (
    <section id="home" className="section">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-around gap-10 md:flex-row md:gap-20 lg:px-8">
        <div id="left" className="relative">
          <img
            src="/portrait.png"
            className="animate-slideInLeft max-w-md"
            alt="Portrait"
          />
          <h2 className="animate-fallDown animation-delay-1000 absolute left-24 top-[15%] text-5xl text-primary-font-blue opacity-0">
            Hi,
          </h2>
          <h2 className="animate-fallDown animation-delay-1100 absolute left-16 top-[30%] text-5xl text-primary-font-blue opacity-0">
            my
          </h2>
          <h2 className="animate-fallDown animation-delay-1200 absolute -right-7 top-[30%] text-5xl text-primary-font-blue opacity-0">
            name is
          </h2>
          <h1 className="animate-fallDown animation-delay-1300 absolute -right-20 top-[40%] text-7xl text-secondary-font-pink opacity-0 xl:-right-32 xl:top-[45%] xl:text-8xl">
            Alena<span className="text-8xl text-primary-font-blue">.</span>
          </h1>
        </div>

        <div
          id="right"
          className="animate-slideInRight flex flex-col items-center gap-8"
        >
          <h2 className="text-center text-4xl text-primary-font-blue">
            I’m a dietitian turned
            <br /> FRONT-END DEVELOPER
            <br /> from Portugal.
          </h2>
          <p className="text-lg text-primary-font-blue">
            ✨ passionate about design and UX <br />
            🐶 dog-lover and photography enthusiast
          </p>
          <button
            onClick={handleDownload}
            className="animate-wiggle animation-delay-3000 relative mx-auto flex h-12 w-full min-w-52 max-w-[calc(100%-3rem)] flex-row items-center justify-center gap-2 text-nowrap rounded-lg bg-tertiary-font-action-blue py-2 font-semibold text-primary-font-blue shadow-lg shadow-white/25 hover:bg-tertiary-font-action-blue/90"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
