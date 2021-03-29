import React from "react";

const SubHeading = (props) => {
  return (
    <div className="SubHeading headings">
      <h2>{props.heading}</h2>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default SubHeading;
