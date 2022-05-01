import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const ProjectLink = (props) => {
    return (
        <a href={props.link} className="ProjectLink" target="_blank">
            <div className="project-link-wrapper">
                <FontAwesomeIcon className="project-link-icon" icon={props.icon} />
                <p className="action-text">{props.text}</p>
            </div>
        </a>
    )
}

export default ProjectLink;