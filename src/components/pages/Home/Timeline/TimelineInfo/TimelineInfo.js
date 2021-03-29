import React from "react";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

const TimelineInfo = (props) => {
  return (
    <div className="TimelineInfo">
      <FontAwesomeIcon className="icon" icon={solid.faCheckCircle} />
      <div className="info">
        <h4>{props.title}</h4>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default TimelineInfo;
