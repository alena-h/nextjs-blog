import { CarouselCustom } from "./Carousel";

export const Helios = () => {
  const slides = [
    {
      src: "/images/image1.png",
      alt: "image 1",
      caption: "Image 1: Log in page",
    },
    {
      src: "/images/image2.png",
      alt: "image 2",
      caption: "Image 2: Main page dashboard in map view, using mapbox library",
    },
    {
      src: "/images/image3.png",
      alt: "image 3",
      caption:
        "Image 3: Insight's page climate tab, graphs made using recharts",
    },
    {
      src: "/images/image4.png",
      alt: "image 4",
      caption: "Image 4: Notes page",
    },
    {
      src: "/images/image5.png",
      alt: "image 5",
      caption: "Image 5: Main page dashboard in table view",
    },
    {
      src: "/images/image6.png",
      alt: "image 6",
      caption: "Image 6: Mobile version of the user profile",
    },
  ];

  return (
    <article className="flex flex-col gap-12">
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-6xl font-bold text-primary-font-blue">
          Helios Project
        </h1>
        <p className="p-large">
          Helios AI is an AI-driven platform for commodity traders and
          agricultural buyers, offering real-time predictions on global
          agricultural supply chain risks and price changes.
        </p>
      </div>

      <div className="relative w-full overflow-visible">
        <div className="absolute z-10 grid grid-cols-2">
          <div className="flex flex-col justify-center gap-12">
            <a
              className="w-80"
              href="https://www.helios.sc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="action-button">Official Website</button>
            </a>
            <p className="p-large">
              It tracks 150+ countries and 50+ commodities using climate data,
              economic analysis, and machine learning models. The platform helps
              users identify supply disruptions, anticipate price shifts, and
              mitigate risks weeks in advance by analyzing billions of data
              points daily
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background-main"></div>
        <img
          src="/images/helios.png"
          alt="helios map view"
          className="relative -top-[5%] left-[30%] -z-10 w-[1000px] min-w-[800px] max-w-none"
        />
      </div>

      <h2 className="project-title">My Role</h2>
      <div className="grid grid-cols-4 gap-4">
        {/* First Row: Paragraph spans 2 columns, Vue image in 3rd column */}
        <p className="p-large col-span-3">
          As a Frontend Developer in a startup, I’ve gained significant
          experience over the past{" "}
          <b className="text-tertiary-font-action-blue">8 months</b>,
          contributing to various aspects of the project.
        </p>
        <img
          src="/images/vue.png"
          alt="vue"
          className="max-h-28 place-self-center"
        />

        {/* Second Row: Paragraph in 1st column, image spans 2 columns */}
        <p className="p-large col-span-2">
          Initially, I helped migrate the MVP app from Vue.js to a React.js and
          Next.js environment, adapting the code to the new stack.
        </p>
        <img
          src="/images/to-react.png"
          alt="to-react"
          className="col-span-2 max-h-64 self-center justify-self-end"
        />
        <p className="p-large col-span-4 text-justify">
          I continuously contributed to ideating and developing new features
          alongside the UX team and my senior frontend colleague. This involved
          researching the best libraries (date-fns, slate.js, etc) and
          documenting technical decisions and reasoning in Confluence.
        </p>
        <img
          src="/images/confluence.png"
          alt="confluence"
          className="self-center justify-self-start p-8"
        />
        <img
          src="/images/slate.png"
          alt="slate"
          className="col-span-2 place-self-center p-8"
        />
        <img
          src="/images/date-fns.png"
          alt="date-fns"
          className="self-center justify-self-end p-8"
        />
        <p className="p-large col-span-4 text-justify">
          I built new components using Styled Components and TypeScript, which
          were added to the Storybook-based component library. Some components
          were customized from the Carbon UI library.
        </p>
        <img
          src="/images/carbonUI.png"
          alt="carbon ui"
          className="col-span-1 col-start-2 max-h-52 place-self-center p-8"
        />
        <img
          src="/images/storybook.png"
          alt="storybook"
          className="col-span-1 col-start-3 max-h-52 place-self-center p-8"
        />
        <p className="p-large col-span-4 text-justify">
          I worked extensively with the UI, gaining a strong understanding of
          Flexbox, Grid, and CSS in general. I also connected frontend
          components to backend services, integrating dynamic data from FastAPI
          endpoints for operations like adding, editing, and deleting data,
          ensuring smooth communication between the frontend and backend
          systems. <br />
          Additionally, I fetched data and managed state using React hooks like
          useState, useRef, useContext and costum hooks.
        </p>
        <img
          src="/images/fastapi.png"
          alt="fast api"
          className="col-span-1 col-start-2 max-h-52 place-self-center p-8"
        />
        <img
          src="/images/hook.png"
          alt="react hook"
          className="col-span-1 col-start-3 max-h-52 place-self-center p-4"
        />
        <p className="p-large col-span-4 text-justify">
          I also gained experience working with Git in a collaborative
          repository, handling contributions from multiple team members. Task
          management was done via Jira, and daily and weekly planning meetings
          ensured the team remained synchronized and focused.
        </p>
        <img
          src="/images/jira.png"
          alt="jira"
          className="col-span-1 col-start-2 max-h-52 place-self-center p-8"
        />
        <img
          src="/images/gitlight.png"
          alt="git"
          className="col-span-1 col-start-3 max-h-52 place-self-center p-8"
        />
      </div>

      <p className="p-large">Some of the components I worked on include:</p>
      <CarouselCustom slides={slides} />
    </article>
  );
};
