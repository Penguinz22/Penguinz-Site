import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="pt-16 pb-4 px-16 md:px-20 lg:px-64 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <ProjectCard
        name="Sylk"
        mini="A 2d game engine developed in Java"
        description="
        Built and designed for making 2d games in Java simple with an intuitive rendering system, built in physics, and polished UI system. 
        The main focus of this project is the rendering aspect with use of OpenGl. 
        Sylk is still a work in progress at the moment and will hopefully become usable around the end of 2020."
        github="https://github.com/Penguinz22/Sylk"
      />
      <ProjectCard
        name="Penguinz"
        mini="This website developed with React"
        description="
        Quite a simple website designed as a representation of who I am and what I have made. 
        Though not a frontend web developer, it is still interesting and fun to design something such as this."
        github="https://github.com/Penguinz22/Penguinz-Site"
      />
      {/*<ProjectCard name="TBD" mini="TBD" description="TBD" github="TBD" />
      <ProjectCard name="TBD" mini="TBD" description="TBD" github="TBD" />
      <ProjectCard name="TBD" mini="TBD" description="TBD" github="TBD" />
      <ProjectCard name="TBD" mini="TBD" description="TBD" github="TBD" />*/}
    </div>
  );
};

export default Projects;
