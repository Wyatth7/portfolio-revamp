import React, { useCallback, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// ICONS
// import * as solid from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import MainPage from "../MainPage/MainPage";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";
import ProjectDetailModal from "./../../Modals/ProjectDetailModal/ProjectDetailModal";
import GitHubBtn from "./GitHubBtn/GitHubBtn";
import ProjectItem from "./ProjectItem/ProjectItem";
import ProjectLoader from "../../animations/ProjectLoader/ProjectLoader";
import useFetch from "../../../custom-hooks/useFetch";
import useStore from "../../../custom-hooks/useStore";
import ProjectWrapper from "../../hoc/ProjectWrapper/ProjectWrapper";

const text =
  "All my projects are either NPM packages, full stack, or front end web apps. To check out each project, just click on it!";

const Portfolio = (props) => {
  const [state, dispatch] = useStore();

  const [projects, setProjects] = useState({});
  const [selectedProject, setSelectedProject] = useState({});

  const setProjectData = useCallback(
    (fetchedProjects) => {
      const newProjectState = {
        fullstack: [],
        frontend: [],
        npm: [],
        other: [],
      };

      fetchedProjects.forEach((project) => {
        switch (project.type) {
          case "Front End":
            newProjectState.frontend.push(project);
            break;
          case "Full Stack":
            newProjectState.fullstack.push(project);
            break;
          case "NPM":
            newProjectState.npm.push(project);
            break;
          default:
            newProjectState.other.push(project);
            break;
        }
      });

      setProjects(newProjectState);
    },
    [setProjects]
  );

  const {
    isLoading: projectDataLoading,
    error,
    sendRequest: fetchProjectData,
  } = useFetch(setProjectData);

  useEffect(() => {
    fetchProjectData({
      url: "http://localhost:8080/api/v1/github/repos",
      method: "GET",
    });
  }, [fetchProjectData]);

  const dispatchFunc = (project) => {
    console.log(project);
    dispatch("SELECTED_PROJECT", {
      title: project.title,
      link: project.homepage,
      github: project.url,
      description: project.description,
      tags: project.topics,
    });
    dispatch("SHOW_MODAL_DISPATCH");
  };

  return (
    <div className="Portfolio">
      <ProjectDetailModal project={state.selectedProject} />
      <Helmet>
        <title>Projects | Wyatt Hardin</title>
      </Helmet>
      <MainPage
        url="http://localhost:8080/api/v1/pageText/getPageText?page=projects"
        pageHead="Projects"
        headText={text}
      >
        <div className="portfolio-content">
          {Object.keys(projects).map((projectType) => (
            <SubHeading key={projectType} heading={projectType}>
              {projects[`${projectType}`].length > 0
                ? projects[`${projectType}`].map((project, index) => (
                    <ProjectItem
                      title={project.title}
                      description={project.description}
                      tags={project.topics}
                      key={index}
                      clicked={() => dispatchFunc(project)}
                    />
                  ))
                : null}
            </SubHeading>
          ))}
          {projectDataLoading ? (
            <div className="portfolio-loader">
              <ProjectLoader />
            </div>
          ) : (
            <div className="github-btn">
              <GitHubBtn />
            </div>
          )}
        </div>
      </MainPage>
    </div>
  );
};

export default Portfolio;
