import React from "react";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brands from "@fortawesome/free-brands-svg-icons";

const GitHubBtn = (props) => {
  return (
    <a href="https://github.com/Wyatth7" target="_blank" rel="noreferrer">
      <p>
        See all at{" "}
        <span>
          <FontAwesomeIcon icon={brands.faGithub} />
        </span>
      </p>
    </a>
  );
};

export default GitHubBtn;
