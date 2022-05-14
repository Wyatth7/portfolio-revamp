import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import MainPage from "../MainPage/MainPage";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";
import ProjectItem from "./../Portfolio/ProjectItem/ProjectItem";
import { Helmet } from "react-helmet";
import axios from "axios";
import ProjectLoader from "../../animations/ProjectLoader/ProjectLoader";
import useFetch from "../../../custom-hooks/useFetch";
import TimeLine from "./Timeline/TimeLine";
import ProjectDetailModal from "../../Modals/ProjectDetailModal/ProjectDetailModal";
import useStore from "../../../custom-hooks/useStore";

const Home = (props) => {
  const dispatch = useStore()[1];
  const [projects, setProjects] = useState([]);

  // Sets and sorts array of objects to be used.
  const setProjectData = useCallback(
    (repoData) => {
      if (repoData.success === false) {
        setProjects(null);
        return;
      }
      let projectArr = [];

      // removes all projects from repoData that are not
      // full-stack or front-end.
      repoData.forEach((el) => {
        if (el.type === "Full Stack") {
          projectArr.push(el);
        }
        if (el.type === "Front End") {
          projectArr.push(el);
        }
      });

      // sorts project array based on project type
      //  Example: [full-stack, full-stack, front-end, front-end]
      setProjects(
        projectArr.sort((a, b) => {
          if (a.type < b.type) {
            return 1;
          } else if (a.type > b.type) {
            return -1;
          } else {
            return 0;
          }
        })
      );
    },
    [setProjects]
  );

  const {
    isLoading: projectDataLoading,
    error,
    sendRequest: fetchProjects,
  } = useFetch(setProjectData);

  useEffect(() => {
    fetchProjects({
      url: "http://localhost:8080/api/v1/github/repos",
      method: "GET",
    });
  }, [fetchProjects]);

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
    <div className="Home">
      <ProjectDetailModal />
      <Helmet>
        <title>Home | Wyatt Hardin</title>
      </Helmet>
      <MainPage url="http://localhost:8080/api/v1/pageText/getPageText?page=home">
        {projects ? (
          <SubHeading heading="Featured Projects">
            {projects.map((el, index) => {
              if (index < 3) {
                return (
                  <ProjectItem
                    title={el.title}
                    description={el.description}
                    tags={el.topics}
                    key={el.title}
                    clicked={() => dispatchFunc(el)}
                  />
                );
              } else {
                return null;
              }
            })}
            {projectDataLoading ? (
              <div className="loader">
                <ProjectLoader />
              </div>
            ) : (
              <NavLink className="show-more" to="/projects">
                <p className="show-more-paragraph">
                  See More{" "}
                  <span>
                    <FontAwesomeIcon icon={solid.faChevronDown} />
                  </span>
                </p>
              </NavLink>
            )}
          </SubHeading>
        ) : null}

        <SubHeading heading="Timeline">
          <TimeLine />
        </SubHeading>
      </MainPage>
    </div>
  );
};

export default Home;
