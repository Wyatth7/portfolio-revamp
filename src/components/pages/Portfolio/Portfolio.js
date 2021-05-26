import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// ICONS
// import * as solid from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import MainPage from "../MainPage/MainPage";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";
import GitHubBtn from "./GitHubBtn/GitHubBtn";
import ProjectItem from "./ProjectItem/ProjectItem";
import axios from "axios";
import ProjectLoader from "../../animations/ProjectLoader/ProjectLoader";

const text =
  "All my projects are either NPM packages, full stack, or front end web apps. To check out each project, just click on it!";

const Portfolio = (props) => {
  const [npm, setNpm] = useState([]);
  const [frontend, setFrontend] = useState([]);
  const [fullstack, setFullstack] = useState([]);
  const [other, setOther] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const CALL = async () => {
      try {
        const repos = await axios.get("/api/v1/github/repos");

        repos.data.repos.forEach((el) => {
          switch (el.type) {
            case "Front End":
              setStates(setFrontend, el);
              break;
            case "Full Stack":
              setStates(setFullstack, el);
              break;
            case "NPM":
              setStates(setNpm, el);

              break;
            case "Other":
              setStates(setOther, el);

              break;
            default:
              setStates(setOther, el);
          }
        });

        setLoader(false);
      } catch (err) {
        console.err("Could not get projects from server.");
      }
    };

    CALL();
  }, [setFrontend, setFullstack, setNpm, setOther, setLoader]);

  const setStates = (fn, el) => {
    fn((prev) => [...prev, el]);
  };

  return (
    <div className="Portfolio">
      <Helmet>
        <title>Projects | Wyatt Hardin</title>
      </Helmet>
      <MainPage pageHead="Projects" headText={text}>
        <div className="portfolio-content">
          {fullstack.length !== 0 ? (
            <SubHeading heading="Full Stack">
              {fullstack.map((el) => (
                <ProjectItem
                  link={el.homepage}
                  title={el.title}
                  description={el.description}
                  tags={el.topics}
                  key={el.title}
                />
              ))}
            </SubHeading>
          ) : null}

          {frontend.length !== 0 ? (
            <SubHeading heading="Front End">
              {frontend.map((el) => (
                <ProjectItem
                  link={el.homepage}
                  title={el.title}
                  description={el.description}
                  tags={el.topics}
                  key={el.title}
                />
              ))}
            </SubHeading>
          ) : null}

          {npm.length !== 0 ? (
            <SubHeading heading="NPM">
              {npm.map((el) => (
                <ProjectItem
                  link={el.url}
                  title={el.title}
                  description={el.description}
                  tags={el.topics}
                  key={el.title}
                />
              ))}
            </SubHeading>
          ) : null}

          {other.length !== 0 ? (
            <SubHeading heading="Other">
              {other.map((el) => (
                <ProjectItem
                  link={el.url}
                  title={el.title}
                  description={el.description}
                  tags={el.topics}
                  key={el.title}
                />
              ))}
            </SubHeading>
          ) : null}

          {loader ? (
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
