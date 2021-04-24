import React from "react";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

const Editor = (props) => {
  return (
    <div className="Editor">
      <div className="Editor__tools">
        <div className="Editor__tools--font-changers">
          <FontAwesomeIcon className="edit-icons" icon={solid.faBold} />
          <FontAwesomeIcon className="edit-icons" icon={solid.faItalic} />
        </div>
        <div className="Editor__tools--special-formatters">
          <FontAwesomeIcon className="edit-icons" icon={solid.faLink} />
          <FontAwesomeIcon className="edit-icons" icon={solid.faQuoteRight} />
          <FontAwesomeIcon className="edit-icons" icon={solid.faCode} />
        </div>
        <div className="Editor__tools--basic-formatting">
          <FontAwesomeIcon className="edit-icons" icon={solid.faListOl} />
          <FontAwesomeIcon className="edit-icons" icon={solid.faListUl} />
          <FontAwesomeIcon className="edit-icons" icon={solid.faHeading} />
          <FontAwesomeIcon className="edit-icons" icon={solid.faEllipsisH} />
        </div>
      </div>
      <textarea
        onChange={(e) => console.log(e.target.value)}
        className="Editor__textarea"
      ></textarea>
    </div>
  );
};

export default Editor;
