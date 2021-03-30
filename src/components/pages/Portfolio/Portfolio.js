import React from "react";
import { Helmet } from "react-helmet";

// COMPONENTS
import MainPage from "../MainPage/MainPage";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";
import GitHubBtn from "./GitHubBtn/GitHubBtn";
import ProjectItem from "./ProjectItem/ProjectItem";

const text =
  "All my projects are either NPM packages, full stack, or front end web apps. To check out each project, just click on it!";

const Portfolio = (props) => {
  return (
    <div className="Portfolio">
      <Helmet>
        <title>Projects | Wyatt Hardin</title>
      </Helmet>
      <MainPage pageHead="Projects" headText={text}>
        <div className="portfolio-content">
          <SubHeading heading="Full Stack">
            <ProjectItem
              link="https://github.com/Wyatth7/portfolio-revamp"
              title="Personal Portfolio"
              description="It's what you're looking at right now! Click to see the code."
              tags={[
                "React",
                "Node",
                "Express",
                "Mongo",
                "Typescript",
                "SASS/SCSS",
              ]}
            />
          </SubHeading>
          <SubHeading heading="Front End">
            <ProjectItem
              link="https://wyatth7.github.io/JSON_Formatter/"
              title="JSON Formatter"
              description="JSON Formatter validates and pretty prints a string submitted by the user."
              tags={["React", "SASS/SCSS"]}
            />
          </SubHeading>
          <SubHeading heading="NPM Packages">
            <ProjectItem
              link="https://github.com/Wyatth7/querry-array"
              title="Query Array"
              description="Query an array with a string. This NPM package is great for filtering search data."
              tags={["Typescript"]}
            />
            <ProjectItem
              link="https://github.com/Wyatth7/handy-date"
              title="Handy Date"
              description="A package that removes the hastle of using the Javascript Date class."
              tags={["Typescript"]}
            />
            <GitHubBtn />
          </SubHeading>
        </div>
      </MainPage>
    </div>
  );
};

export default Portfolio;
