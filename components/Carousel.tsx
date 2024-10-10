"use client";
import { Carousel, Typography } from "@material-tailwind/react";

export function CarouselCustom({ slides }) {
  return (
    <Carousel
      className="max-h-[600px] w-[calc(100%-8rem)] self-center overflow-visible"
      loop={true}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                activeIndex === i
                  ? "w-8 bg-tertiary-font-action-blue"
                  : "w-4 bg-tertiary-font-action-blue/50"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {slides.map(({ src, alt, caption }, index) => (
        <div
          key={index}
          className="relative m-auto h-full w-[calc(100%-4rem)] bg-background-main/75 p-8"
        >
          <img src={src} alt={alt} className="h-full w-full object-contain" />
          <div className="absolute inset-8 grid h-20 w-[calc(100%-4rem)] place-items-center bg-background-main/75">
            <div className="text-center">
              <Typography variant="small" color="white" className="opacity-80">
                {caption}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
