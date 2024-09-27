import React, { useState } from "react";
import WorkCard from "./WorkCard";
import { SkillIcons } from "./Skills";

export const FrontendWork = () => {
  const frontendProjects = [
    {
      title: "Helios",
      thumbnail: "/frontend1.png",
      technologies: [
        SkillIcons.HTML5,
        SkillIcons.CSS3,
        SkillIcons.Next,
        SkillIcons.TypeScript,
        SkillIcons.StyledComponents,
        SkillIcons.Storybook,
        SkillIcons.Jest,
        SkillIcons.Git,
      ],
    },
    {
      title: "Little Lemon",
      thumbnail: "/frontend2.png",
      technologies: [
        SkillIcons.HTML5,
        SkillIcons.CSS3,
        SkillIcons.React,
        SkillIcons.JavaScript,
        SkillIcons.StyledComponents,
      ],
    },
    {
      title: "My Portfolio",
      thumbnail: "Description for Project 3",
      technologies: [
        SkillIcons.HTML5,
        SkillIcons.CSS3,
        SkillIcons.Next,
        SkillIcons.TypeScript,
        SkillIcons.Tailwind,
        SkillIcons.Git,
      ],
    },
    {
      title: "Project 4",
      thumbnail: "Description for Project 4",
      technologies: [
        SkillIcons.JavaScript,
        SkillIcons.Figma,
        SkillIcons.Photoshop,
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {frontendProjects.map((project, index) => (
        <WorkCard
          key={index}
          title={project.title}
          image={project.thumbnail}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export const UXWork = () => {
  const uxProjects = [
    {
      title: "DogGo - App",
      thumbnail: "/ux1.png",
      technologies: [
        SkillIcons.Figma,
        SkillIcons.Illustrator,
        SkillIcons.Thunkable,
        SkillIcons.GoogleForms,
      ],
    },
    {
      title: "Druida - Dashboard",
      thumbnail: "/ux2.png",
      technologies: [SkillIcons.Figma],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {uxProjects.map((project, index) => (
        <WorkCard
          key={index}
          title={project.title}
          image={project.thumbnail}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

export const OtherWork = () => {
  const otherProjects = [
    {
      title: "Illustration",
      thumbnail: "/art1.png",
      technologies: [
        SkillIcons.Illustrator,
        SkillIcons.ClipStudioPaint,
        SkillIcons.Photoshop,
      ],
    },
    {
      title: "Photography",
      thumbnail: "/photo1.png",
      technologies: [SkillIcons.Photoshop, SkillIcons.Lightroom],
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {otherProjects.map((project, index) => (
        <WorkCard
          key={index}
          title={project.title}
          image={project.thumbnail}
          technologies={project.technologies}
        />
      ))}
    </div>
  );
};

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState("frontend"); // Default to Frontend tab

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="portfolio" className="section">
      <div className="mx-auto flex w-full max-w-7xl flex-col lg:px-8">
        <h2 className="section-title">Portfolio</h2>
        <div className="flex space-x-4">
          <button
            className={`tab-button ${activeTab === "frontend" ? "active" : ""}`}
            onClick={() => handleTabClick("frontend")}
          >
            Frontend
          </button>
          <button
            className={`tab-button ${activeTab === "ux" ? "active" : ""}`}
            onClick={() => handleTabClick("ux")}
          >
            UX Design
          </button>
          <button
            className={`tab-button ${activeTab === "others" ? "active" : ""}`}
            onClick={() => handleTabClick("others")}
          >
            Others
          </button>
        </div>

        {/* Tab Content */}
        <div className="gap-6 rounded-lg rounded-tl-none border-2 border-tertiary-font-action-blue p-8 shadow-[0_0_10px_1px_rgba(81,159,165)]">
          {activeTab === "frontend" && <FrontendWork />}
          {activeTab === "ux" && <UXWork />}
          {activeTab === "others" && <OtherWork />}
        </div>
      </div>
    </section>
  );
};

export default WorkTabs;
