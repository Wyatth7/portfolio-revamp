import React from "react";

const ExternalNavLink = (props) => {
  return (
    <a href={props.to} target="_blank" rel="noreferrer" className="NavLinks">
      <p>{props.title}</p>
    </a>
  );
};

export default ExternalNavLink;
