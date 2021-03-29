import React from "react";
import PrimaryHeading from "./Headings/PrimaryHeading/PrimaryHeading";

const MainPage = (props) => {
  return (
    <div className="MainPage">
      <PrimaryHeading heading={props.pageHead} introText={props.headText} />
      <div className="content">{props.children}</div>
    </div>
  );
};

export default MainPage;
