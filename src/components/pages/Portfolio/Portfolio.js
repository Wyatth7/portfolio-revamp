import React from "react";

// COMPONENTS
import MainPage from "../MainPage/MainPage";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";
import ProjectItem from "./ProjectItem/ProjectItem";

const text =
  "All my projects are either fullstack or static web apps. To check out each project, just click on it! You can find the projects listed below on my Github page.";

const Portfolio = (props) => {
  return (
    <div className="Portfolio">
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
          </SubHeading>
        </div>
      </MainPage>
    </div>
  );
};

export default Portfolio;
