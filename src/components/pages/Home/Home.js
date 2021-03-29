import React from "react";
import MainPage from "../MainPage/MainPage";

const text =
  "I’m a developer, Computer Science student, and coffee addict. In my free time, when I’m not working on projects, you can find me reading, watching Netflix or spending time with friends and family. If you would like to get a sneak peek of my life, and tech opinions, you can check out my new blog where I write about my personal experiences within the tech world. ";

const Home = (props) => {
  return (
    <div className="Home">
      <MainPage pageHead="Hey, I'm Wyatt Hardin" headText={text}></MainPage>
    </div>
  );
};

export default Home;
