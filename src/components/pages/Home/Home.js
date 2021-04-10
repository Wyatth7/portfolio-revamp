import React from "react";
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

const text =
  "I’m a developer, Computer Science student, and coffee addict. In my free time, when I’m not working on projects, you can find me reading, watching Netflix or spending time with friends and family. If you would like to get a sneak peek of my life, and tech opinions, you can check out my new blog where I write about my personal experiences within the tech world. ";

const Home = (props) => {
  return (
    <div className="Home">
      <Helmet>
        <title>Home | Wyatt Hardin</title>
      </Helmet>
      <MainPage pageHead="Hey, I'm Wyatt Hardin" headText={text}>
        <SubHeading heading="Projects">
          <ProjectItem
            link="https://wyatth7.github.io/JSON_Formatter/"
            title="JSON Formatter"
            description="JSON Formatter validates and pretty prints a string submitted by the user."
            icon={solid.faAlignLeft}
            tags={["React", "SASS/SCSS"]}
          />
          <ProjectItem
            link="https://github.com/Wyatth7/querry-array"
            title="Query Array"
            description="Query an array with a string. This NPM package is great for filtering search data."
            icon={solid.faSearch}
            tags={["Typescript"]}
          />
          <ProjectItem
            link="https://github.com/Wyatth7/handy-date"
            title="Handy Date"
            description="A package that removes the hastle of using the Javascript Date class."
            icon={solid.faClock}
            tags={["Typescript"]}
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
