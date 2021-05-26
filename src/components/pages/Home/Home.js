import React, { useEffect, useState } from "react";
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

const text =
  "If you haven't already guessed it, I'm a fullstack web developer who mostly uses Javascript and its surrounding frameworks. As you look around my corner of the interenet, you will not only find information about myself, but you will also recieve full access to my public Github repositories, so, if you find a project that interests you, check it out! And, if you find a bug in the code, just open an issue. ";

const Home = (props) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const call = async () => {
      try {
        const repos = await axios.get("/api/v1/github/repos");

        let projectArr = [];

        repos.data.repos.forEach((el) => {
          if (el.type === "Full Stack") {
            projectArr.push(el);
          }
          if (el.type === "Front End") {
            projectArr.push(el);
          }
        });

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
        setLoading(false);
      } catch (err) {
        console.err("Could not get projects from server.");
      }
    };

    call();
  }, [setProjects, setLoading]);

  return (
    <div className="Home">
      <Helmet>
        <title>Home | Wyatt Hardin</title>
      </Helmet>
      <MainPage pageHead="Hey, I'm Wyatt Hardin" headText={text}>
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
            {loading ? (
              <div className="loader">
                <ProjectLoader />
              </div>
            ) : (
              <NavLink className="show-more" to="/projects">
                <p>
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
              info="In preperation for university classes, I began learning C# and the .NET framework."
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
              info="I started learning Java (Udemy) in preperation for college level programming classes."
            />
            <TimelineInfo
              title="Left EMSCO"
              info="I resigned from my position at EMSCO to focus on school."
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
