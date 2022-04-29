import React from "react";

const TimeLineHeader = (props) => {
  return (
    <div className="Timeline">
      <h3>{props.date}</h3>
      <div>{props.children}</div>
    </div>
  );
};

export default TimeLineHeader;
