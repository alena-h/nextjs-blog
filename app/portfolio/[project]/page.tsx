import {
  frontendProjects,
  otherProjects,
  uxProjects,
} from "../../../data/projectsData";

export default function ProjectPage({ params }) {
  // Find the project in the data
  const allProjects = [...frontendProjects, ...uxProjects, ...otherProjects];
  const project = allProjects.find(
    (proj) => proj.title.toLowerCase() === params.project.toLowerCase(),
  );

  // If project is not found, show an error or a fallback
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section id="project" className="section">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:px-8">
        {project.component ? (
          <project.component /> // Render the custom component if it exists
        ) : (
          <>
            <img src={project.thumbnail} alt={project.title} />
            <div className="grid grid-cols-4 gap-6">
              {project.technologies.map((tech, index) => (
                <div
                  key={index}
                  className="flex h-14 w-14 items-center justify-center"
                >
                  <img
                    src={tech}
                    alt={tech}
                    className="h-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
