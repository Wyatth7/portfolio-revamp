import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brands from "@fortawesome/free-brands-svg-icons";

const ProjectLoader = (props) => {
  return (
    <div className="ProjectLoader">
      <FontAwesomeIcon className="github-loader-icon" icon={brands.faGithub} />
      <p className="loading-text">
        Loading<span className="dots"></span>
      </p>
    </div>
  );
};

export default ProjectLoader;
