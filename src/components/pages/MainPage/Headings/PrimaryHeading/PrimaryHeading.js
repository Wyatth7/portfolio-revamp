import React from "react";

const PrimaryHeading = (props) => {
  return (
    <div className="PrimaryHeading headings">
      <h1>{props.heading}</h1>
      <p>{props.introText}</p>
    </div>
  );
};

export default PrimaryHeading;
