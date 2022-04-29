import React, {useCallback, useEffect, useState} from "react";
import { Helmet } from "react-helmet";

// ICONS
// import * as solid from "@fortawesome/free-solid-svg-icons";

// COMPONENTS
import MainPage from "../MainPage/MainPage";
import SubHeading from "./../MainPage/Headings/SubHeading/SubHeading";
import GitHubBtn from "./GitHubBtn/GitHubBtn";
import ProjectItem from "./ProjectItem/ProjectItem";
import ProjectLoader from "../../animations/ProjectLoader/ProjectLoader";
import useFetch from "../../../custom-hooks/useFetch";

const text =
  "All my projects are either NPM packages, full stack, or front end web apps. To check out each project, just click on it!";

const Portfolio = (props) => {
  // const [npm, setNpm] = useState([]);
  // const [frontend, setFrontend] = useState([]);
  // const [fullstack, setFullstack] = useState([]);
  // const [other, setOther] = useState([]);
  
  const [projects, setProjects] = useState({});
  
  const setStates = useCallback((fn, el) => {
    fn((prev) => [...prev, el]);
  }, []);
  
  const setProjectData = useCallback((fetchedProjects) => {
    const newProjectState = {
      fullstack: [],
      frontend: [],
      npm: [],
      other: []
    };
    
    fetchedProjects.forEach(project => {
        switch (project.type) {
          case "Front End":
            newProjectState.frontend.push(project);
            break;
            case "Full Stack":
              newProjectState.fullstack.push(project);
              break;
            case "NPM":
              newProjectState.npm.push(project);
              break;
            default:
              newProjectState.other.push(project);
              break;
            
        }
    })
    
    setProjects(newProjectState);
    
  }, [setProjects])
  
  const {isLoading: projectDataLoading, error, sendRequest: fetchProjectData} = useFetch(setProjectData);
  
  useEffect(() => {
    fetchProjectData({
      url: "http://localhost:8080/api/v1/github/repos",
      method: "GET"
    })
  }, [fetchProjectData]);
  
  return (
    <div className="Portfolio">
      <Helmet>
        <title>Projects | Wyatt Hardin</title>
      </Helmet>
      <MainPage url="http://localhost:8080/api/v1/pageText/getPageText?page=projects" pageHead="Projects" headText={text}>
        <div className="portfolio-content">
          {
            Object.keys(projects).map(projectType => (
                <SubHeading key={projectType} heading={projectType}>
                  {
                    projects[`${projectType}`].length > 0 ?
                        projects[`${projectType}`].map((project, index) => (
                          <ProjectItem 
                            link={project.link}
                            title={project.title}
                            description={project.description}
                            tags={project.topics}
                            key={index}
                          />
                        ))
                        : null
                  }
                </SubHeading>
            ))
          }
          {projectDataLoading ? (
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
