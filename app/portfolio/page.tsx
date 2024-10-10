"use client";
import WorkCard from "../../components/WorkCard";
import {
  frontendProjects,
  uxProjects,
  otherProjects,
} from "../../data/projectsData";

export default function PortfolioPage() {
  // Combine all projects if you want to display them together, or select one category
  const projects = [...frontendProjects, ...uxProjects, ...otherProjects]; // Combine all projects

  return (
    <section className="section">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:px-8">
        <h1 className="section-title">All Projects</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <WorkCard
              key={index}
              title={project.title}
              image={project.thumbnail}
              technologies={project.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
