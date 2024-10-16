"use client";
import React, { useState } from "react";
import WorkCard from "./WorkCard";
import {
  frontendProjects,
  uxProjects,
  otherProjects,
} from "../data/projectsData";

const WorkTabs = () => {
  const [activeTab, setActiveTab] = useState("frontend");

  // Handle tab switching
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section id="portfolio" className="section">
      <div className="mx-auto flex w-full max-w-7xl flex-col p-4 lg:px-8">
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
        <div className="gap-6 rounded-lg rounded-tl-none border-2 border-tertiary-font-action-blue p-8 shadow-[0_0_10px_1px_rgba(45,163,172)]">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {activeTab === "frontend" &&
              frontendProjects.map((project, index) => (
                <WorkCard
                  key={index}
                  title={project.title}
                  image={project.thumbnail}
                  technologies={project.technologies}
                />
              ))}

            {activeTab === "ux" &&
              uxProjects.map((project, index) => (
                <WorkCard
                  key={index}
                  title={project.title}
                  image={project.thumbnail}
                  technologies={project.technologies}
                />
              ))}

            {activeTab === "others" &&
              otherProjects.map((project, index) => (
                <WorkCard
                  key={index}
                  title={project.title}
                  image={project.thumbnail}
                  technologies={project.technologies}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkTabs;
