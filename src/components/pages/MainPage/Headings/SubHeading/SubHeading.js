import React, {useEffect, useState} from "react";

const SubHeading = (props) => {
    const { heading } = props;
    const [header, setHeader] = useState(props.heading)
    
    // Capitalizes heading text
    useEffect(() => {
        setHeader(heading.charAt(0).toUpperCase() + heading.slice(1));
    }, [heading, setHeader])
    
    
  return (
    <div className={`SubHeading headings ${props.className}`}>
      <h2>{header}</h2>
      <div className="content">{props.children}</div>
    </div>
  );
};

export default SubHeading;
