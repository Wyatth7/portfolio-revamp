import React from "react";
import Modal from "../Modal";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectLink from "../../Modals/ProjectDetailModal/ProjectLink/ProjectLink";
import useStore from "../../../custom-hooks/useStore";

const ProjectDetailModal = (props) => {
  const project = useStore()[0].selectedProject;
  return (
    <Modal title={project.title}>
      <div className="ProjectDetailModal">
        <p className="description project-text">{project.description}</p>
        <div className="detail-container">
          <div className="tag-container">
            <h2 className="sub-modal-header">Powered By</h2>
            <div className="tags">
              {project.tags
                ? project.tags.map((tag, index) => (
                    <p key={index} className="tag project-text">
                      {tag}
                    </p>
                  ))
                : null}
            </div>
          </div>
          <div className="project-link-container">
            <h2 className="sub-modal-header">Check It Out</h2>
            <div className="project-links">
              <ProjectLink
                icon={faGlobe}
                text="View Website"
                link={project.link}
              />
              <ProjectLink
                icon={faGithub}
                text="View Code"
                link={project.github}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailModal;
