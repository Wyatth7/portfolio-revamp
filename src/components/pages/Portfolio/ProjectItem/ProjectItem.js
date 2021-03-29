import React from "react";

// COMPONENTS
import ProjectTags from "./ProjectTags/ProjectTags";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

const ProjectItem = (props) => {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      className="ProjectItem"
    >
      <div className="project-img">
        <FontAwesomeIcon icon={solid.faCoins} />
      </div>
      <div className="project-content">
        <h3 className="project-title">{props.title}</h3>
        <p className="projects-desc">{props.description}</p>
        <div>
          <ProjectTags tag="React" />
          <ProjectTags tag="Node" />
          <ProjectTags tag="Firebase" />
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
