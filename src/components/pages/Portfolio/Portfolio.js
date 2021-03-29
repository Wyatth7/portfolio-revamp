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
          </SubHeading>
          <SubHeading heading="Front End">
            <ProjectItem
              link="https://ecstatic-blackwell-e0b418.netlify.app/"
              title="Royal Port Metals"
              description="An app that scraps the precious metal investor's spread sheet for a modern easy to use web app."
            />
          </SubHeading>
          <SubHeading heading="NPM Packages">
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
            <GitHubBtn />
          </SubHeading>
        </div>
      </MainPage>
    </div>
  );
};

export default Portfolio;
