import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const techElem = technologies.map((tech) => {
    console.log(tech.name)
    return <span key={tech}>{tech.name}</span>;
  });

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
      {techElem};
      </div>
    </div>
  );
}

export default ProjectItem;
