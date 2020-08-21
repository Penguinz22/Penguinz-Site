import React from "react";

const ProjectCard = (props) => {
  return (
    <div className="flex flex-col shadow-md bg-blue-200 rounded-md px-3 py-2 h-auto">
      <h3 className="text-2xl font-semibold">{props.name}</h3>
      <h4 className="text-lg mb-1">{props.mini}</h4>
      <p className="mb-1 text-sm">{props.description}</p>
      <div className="mt-auto flex">
        <a href={props.github} target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
