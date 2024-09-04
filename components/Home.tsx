export default function Home() {
  return (
    <section className="mx-4 flex min-h-[calc(100vh-4rem)] items-center justify-center pt-8 lg:pt-0">
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
          <button className="animate-wiggle animation-delay-4000 mx-auto flex w-full min-w-52 max-w-[calc(100%-3rem)] flex-row justify-center gap-2 text-nowrap rounded-lg bg-tertiary-font-action-blue py-2 pl-4 font-semibold text-primary-font-blue shadow-lg shadow-primary-font-blue/25 hover:bg-tertiary-font-action-blue/90">
            Download CV
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="30" height="30" fill="url(#pattern0_74_42)" />
              <defs>
                <pattern
                  id="pattern0_74_42"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use href="#image0_74_42" transform="scale(0.0166667)" />
                </pattern>
                <image
                  id="image0_74_42"
                  width="50"
                  height="50"
                  href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAAAkdJREFUaAXtmk1uE0EQRh3EAbJkRcBO4BogoRyBC2TFEsXJLjHsIJwkOYUJEivOEAQkWScElsmjy+5Go3b3TI8lO1NWlTRuz/RfvfqqZ0Zt93pmFgGLgEWgZQSAh8CDlt10NgfeAn9ceQ0c6KQo9Bp4zaxtF3bX1wz4MMvLR30khR4DnxLAR4Xd9TUz4KncprC+3M14bCltKZ1JDa2XLaUtpbXmbsZvS2lL6UxqaL1sKW0prTV3M36rT2ngKXAK3ACfgWcZ1snleYCB58DY74N9AZ7UzbHQOuDrdBn+//xe51BbYBkLkDGrNl4oVN3gbtfxtuqJ/y4OJpVuA+yVvUyMf1fn00LrfDonfJqoshFPXgqcUTbM8y0ed2nnwGPgZ/AkKi9ipUuApQ8gfVMmc80EcmnAMhEwSKyz4OxZdU03ATcoK7CDpcLlJgP6NUqfA1s+ONltWg8rbVMmsPd3d06BlyidUxjYBCQbUvajM8rG4B76V8prQNQ7TtSdALk+3VM2Ax0/OxOcjZdE8W6s2RgyPvdKizrzWveVzUDn1mVdIPQom4Fuo7S01ZHGMWw4948budM2max73bAVaHk5qVNav7IBNpRe6RS0KNsP7VaqTNy9V0/ZWDHgkXvR2AHeAOtxvZ1bBCwCFoG5IuB2Cl+43chdYE/ZMRTfW0ED75teixTUD4ug/R8/5X+Q2u1KWBqhPfBv7bRuGf51mbrWCCwNgP0VAB4VwYZGwCsHPQLeKTsO3c8+LwOHlRYBi4BFwCJgEehwBP4Bnwm3x/rX+EkAAAAASUVORK5CYII="
                />
              </defs>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
