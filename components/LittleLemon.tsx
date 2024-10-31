import { useRouter } from "next/navigation";

export const LittleLemon = () => {
  const router = useRouter();
  return (
    <article className="flex flex-col gap-12 px-8 lg:px-0">
      <div className="flex flex-col items-center gap-12">
        <div className="flex w-full md:items-center md:gap-8">
          <button
            className="mt-2 flex h-12 w-12 items-center justify-center rounded bg-transparent hover:bg-primary-font-blue/5 active:bg-primary-font-blue/50"
            type="button"
            onClick={() => router.push("/#portfolio")}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 289 498"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M247 42L42 248.5L247 455.5"
                stroke="#EAF3F3"
                strokeWidth="84"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h1 className="pl-4 text-6xl font-bold text-primary-font-blue md:pl-14">
            Little Lemon
          </h1>
        </div>
        <p className="p-large">
          A family-owned Mediterranean restaurant with recipes passed down
          through generations. They sought to enhance their online presence and
          simplify table reservations with an app, making it easier for
          customers to engage with their business online.
        </p>
      </div>

      <div className="relative w-full overflow-visible">
        <div className="z-10 grid grid-cols-1 md:absolute md:grid-cols-2">
          <div className="flex flex-col justify-center gap-12">
            <a
              className="flex w-full justify-center self-center md:justify-start md:self-auto"
              href="https://codesandbox.io/p/sandbox/p2mj7j"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="action-button">Demo</button>
            </a>
            <p className="p-large">
              This project was part of the{" "}
              <i className="text-tertiary-font-action-blue">
                Meta Front-End Developer Professional Certificate
              </i>
              . You can check the design process <a href="">here</a>, what
              folows is focused on the front-end implementation.
            </p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-background-main md:absolute md:inset-0"></div>
        <img
          src="/images/littlelemon.png"
          alt="little lemon mockup"
          className="-z-10 w-[1500px] md:relative md:left-[30%] md:min-w-[800px]"
        />
      </div>

      <h2 className="project-title">Context</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <p className="p-large col-span-1 md:col-span-2">
          Throughout the
          <i className="text-tertiary-font-action-blue">
            Meta Front-End Developer Professional Certificate
          </i>
          , I learned:
          <ul className="ml-4 pl-4">
            <li className="text-xl md:text-[1.5rem] md:leading-[3rem]">
              How to code and build interactive web pages using HTML5, CSS and
              JavaScript.
            </li>
            <li className="text-xl md:text-[1.5rem] md:leading-[3rem]">
              In-demand design skills to create professional page layouts using
              industry-standard tools such as Bootstrap, React, and Figma.
            </li>
            <li className="text-xl md:text-[1.5rem] md:leading-[3rem]">
              GitHub repositories for version control, content management system
              (CMS).
            </li>
            <li className="text-xl md:text-[1.5rem] md:leading-[3rem]">
              Apply the knowledge in a lab environment and in this final
              project.
            </li>
          </ul>
        </p>
        <div className="col-span-1 grid content-around md:col-span-1">
          <img
            src="/images/react.png"
            alt="react"
            className="col-span-1 row-start-2 place-self-center md:row-start-auto md:max-w-36"
          />
          <img
            src="/images/bootstrap.png"
            alt="bootstrap"
            className="col-span-1 row-start-2 place-self-center md:row-start-auto md:max-w-36 md:place-self-end"
          />
          <img
            src="/images/figma.png"
            alt="figma"
            className="col-span-1 row-start-2 place-self-center md:row-start-auto md:max-w-36"
          />
        </div>
      </div>
      <h2 className="project-title">Final Project</h2>
      <div className="flex flex-col items-center gap-8 md:grid md:grid-cols-3">
        <div className="flex flex-col content-around items-center gap-8 place-self-center md:col-span-2 md:grid">
          <p className="p-large md:col-span-2">
            Build a static version of an responsive application—applying React,
            frameworks, routing, hooks, bundlers and data fetching.
          </p>
          <a
            className="flex w-full justify-center md:justify-start md:self-auto"
            href="https://github.com/alena-h/little-lemon-booking"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="action-button w-[calc(100%-3rem)]">Code</button>
          </a>
          <a
            className="flex w-full justify-center md:justify-start md:self-auto"
            href="https://codesandbox.io/p/sandbox/p2mj7j"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="action-button w-[calc(100%-3rem)]">Demo</button>
          </a>
        </div>
        <img
          src="/images/logo.png"
          alt="react"
          className="col-span-1 max-w-36 place-self-center"
        />
      </div>
    </article>
  );
};
