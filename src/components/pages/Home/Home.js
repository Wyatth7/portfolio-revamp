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
import TimeLine from "./Timeline/Timeline";
import TimelineInfo from "./Timeline/TimelineInfo/TimelineInfo";
import axios from "axios";
import ProjectLoader from "../../animations/ProjectLoader/ProjectLoader";
import useFetch from "../../../custom-hooks/useFetch";
// import breakDownTimeline from "../../../utils/breakDownTimeline";

const Home = (props) => {
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
  
  const {isLoading: projectDataLoading, error, sendRequest: fetchProjects} = useFetch(setProjectData);
  
  useEffect(() => {
    fetchProjects({
      url: "http://localhost:8080/api/v1/github/repos",
      method: "GET"
    })
  }, [fetchProjects])

  return (
    <div className="Home">
      <Helmet>
        <title>Home | Wyatt Hardin</title>
      </Helmet>
      <MainPage url="http://localhost:8080/api/v1/pageText/getPageText?page=home">
        {projects ? (
          <SubHeading heading="Projects">
            {projects.map((el, index) => {
              if (index < 3) {
                return (
                  <ProjectItem
                    link={el.homepage}
                    title={el.title}
                    description={el.description}
                    tags={el.topics}
                    key={el.title}
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
          <TimeLine date="2021">
            <TimelineInfo
              title="Learned C#"
              info="In preparation for university classes, I began learning C# and the .NET framework."
            />
          </TimeLine>
          <TimeLine date="2020">
            <TimelineInfo
              title="Learned React"
              info="I began learning my first front end framework."
            />
            <TimelineInfo
              title="Learned Node.js, Express, MongoDB, and Mongoose"
              info="I began learning server side technologies."
            />
          </TimeLine>
          <TimeLine date="2019">
            <TimelineInfo
              title="Learned Java"
              info="I started learning Java via Udemy in preperation for university classes."
            />
            <TimelineInfo
              title="Left EMSCO"
              info="I resigned from my position at EMSCO to focus on my education."
            />
            <TimelineInfo
              title="Learned Javascript"
              info="I started learning Javascript."
            />
          </TimeLine>
          <TimeLine date="2018">
            <TimelineInfo
              title="Started at EMSCO"
              info="I began working as a janitor for EMSCO."
            />
            <TimelineInfo
              title="Learned Javascript"
              info="I started learning Javascript via Udemy."
            />
            <TimelineInfo
              title="Learned HTML/CSS"
              info="I started learning HTML/CSS via Udemy."
            />
          </TimeLine>
        </SubHeading>
      </MainPage>
    </div>
  );
};

export default Home;
