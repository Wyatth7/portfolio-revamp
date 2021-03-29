import React from "react";
import { NavLink } from "react-router-dom";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import MainPage from "../MainPage/MainPage";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";
import ProjectItem from "./../Portfolio/ProjectItem/ProjectItem";

const text =
  "I’m a developer, Computer Science student, and coffee addict. In my free time, when I’m not working on projects, you can find me reading, watching Netflix or spending time with friends and family. If you would like to get a sneak peek of my life, and tech opinions, you can check out my new blog where I write about my personal experiences within the tech world. ";

const Home = (props) => {
  return (
    <div className="Home">
      <MainPage pageHead="Hey, I'm Wyatt Hardin" headText={text}>
        <SubHeading heading="Projects">
          <ProjectItem
            link="https://ecstatic-blackwell-e0b418.netlify.app/"
            title="Royal Port Metals"
            description="An app that scraps the precious metal investor's spread sheet for a modern easy to use web app."
          />
          <ProjectItem
            link="https://ecstatic-blackwell-e0b418.netlify.app/"
            title="Royal Port Metals"
            description="An app that scraps the precious metal investor's spread sheet for a modern easy to use web app."
          />
          <ProjectItem
            link="https://ecstatic-blackwell-e0b418.netlify.app/"
            title="Royal Port Metals"
            description="An app that scraps the precious metal investor's spread sheet for a modern easy to use web app."
          />
          <NavLink className="show-more" to="/projects">
            <p>
              See More{" "}
              <span>
                <FontAwesomeIcon icon={solid.faChevronDown} />
              </span>
            </p>
          </NavLink>
        </SubHeading>
      </MainPage>
    </div>
  );
};

export default Home;
