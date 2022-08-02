import React from "react";

// COMPONENTS
import ProjectTags from "./ProjectTags/ProjectTags";
import useStore from "../../../../custom-hooks/useStore";

// ICONS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectItem = (props) => {
  return (
    <a
      target="_blank"
      rel="noreferrer"
      className="ProjectItem"
      onClick={props.clicked}
    >
      <div className="project-img"></div>
      <div className="project-content">
        <h3 className="project-title">{props.title}</h3>
        <p className="projects-desc">{props.description}</p>
        <div>
          {props.tags
            ? props.tags.map((el) => (
                <ProjectTags key={Math.random()} tag={el} />
              ))
            : null}
        </div>
      </div>
    </a>
  );
};

export default ProjectItem;
