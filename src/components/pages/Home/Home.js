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

// const text =
//   "If you haven't already guessed it, I'm a fullstack web developer who mostly uses Javascript and its surrounding frameworks. As you look around my corner of the internet, you will not only find information about myself, but you will also recieve full access to my public Github repositories, so, if you find a project that interests you, check it out! And, if you find a bug in the code, just open an issue. ";

const Home = (props) => {
  const [projects, setProjects] = useState([]);
  const projectDataLoading = true;
  
  // const [text, setText] = useState("");
  // const [title, setTitle] = useState("");
  // const [pageInfo, setPageInfo] = useState({});

  // const [timeline, setTimeline] = useState({});

  // const setProjectData = useCallback(
  //   (repoData) => {
  //     if (repoData.success === false) {
  //       setProjects(null);
  //       return;
  //     }
  //     console.log(repoData);
  //     const repoDataToArray = Object.keys(repoData.data).map(
  //       (key) => repoData.data[key]
  //     );
  //     let projectArr = [];
  //
  //     repoDataToArray.forEach((el) => {
  //       if (el.type === "Full Stack") {
  //         projectArr.push(el);
  //       }
  //       if (el.type === "Front End") {
  //         projectArr.push(el);
  //       }
  //     });
  //
  //     setProjects(
  //       projectArr.sort((a, b) => {
  //         if (a.type < b.type) {
  //           return 1;
  //         } else if (a.type > b.type) {
  //           return -1;
  //         } else {
  //           return 0;
  //         }
  //       })
  //     );
  //   },
  //   [setProjects]
  // );

  // const { data: pageTextData, pageTextDataLoading } = useFetch({
  //   method: "GET",
  //   url: "http://localhost:8080/api/v1/pageText/getPageText?page=home",
  // });
  // const { response: projectData, isLoading: projectDataLoading } = useFetch({
  //   method: "GET",
  //   url: "http://localhost:8080/api/v1/github/repos",
  // });

  // This works but causes an infinite loop. Banned from GitHub Again.
  // useEffect(() => {
  //   setProjectData(projectData);
  // }, [setProjectData, projectData]);

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
          {/* {timeline ? (
            Object.keys(timeline).map((el) => {
              const arrayData = breakDownTimeline(timeline, el);
              return (
                <TimeLine date={el}>
                  {arrayData.map((el) => (
                    <TimelineInfo
                      title="Learned C#"
                      info="In preperation for university classes, I began learning C# and the .NET framework."
                    />
                  ))}
                </TimeLine>
              );
            })
          ) : (
            // <TimeLine date="2021">
            //   <TimelineInfo
            //     title="Learned C#"
            //     info="In preperation for university classes, I began learning C# and the .NET framework."
            //   />
            // </TimeLine>
            <p>Could not load data.</p>
          )} */}

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
