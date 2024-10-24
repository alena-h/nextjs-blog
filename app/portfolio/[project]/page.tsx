"use client";
import { useRouter } from "next/navigation";
import {
  frontendProjects,
  otherProjects,
  uxProjects,
} from "../../../data/projectsData";

export default function ProjectPage({ params }) {
  const allProjects = [...frontendProjects, ...uxProjects, ...otherProjects];
  console.log(params.project);
  const project = allProjects.find(
    (proj) => proj.title.toLowerCase().replace(/\s+/g, "") === params.project,
  );

  if (!project) {
    return <div>Project not found</div>;
  }
  const router = useRouter();

  return (
    <section id="project" className="section">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:px-8">
        {project.component ? (
          <project.component />
        ) : (
          <article className="flex h-[calc(100vh-6rem)] flex-col items-center justify-center gap-8 px-8 lg:px-0">
            <button
              className="mt-2 flex h-12 w-12 items-center justify-center self-start rounded bg-transparent hover:bg-primary-font-blue/5 active:bg-primary-font-blue/50"
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
            <img src="/images/working-dog.png" className="max-h-96" />
            <h2 className="text-center text-2xl text-primary-font-blue">
              "🐾Fetching the final details, updates coming soon!"
            </h2>
          </article>
        )}
      </div>
    </section>
  );
}
