import React from "react";
import useStore from "../../../custom-hooks/useStore";

// dynamic component that allows project modal to open
// from any page on the application.

// renders all projects!
const ProjectWrapper = (props) => {
    
    const [state, dispatch] = useStore();
    
    const projectClicked = () => {
        dispatch();
    }
    
    return(
        <>
            {
                props.children.map(child => (
                    React.cloneElement(child, {...child.props, dispatchFunction: projectClicked})
                ))
            }
        </>
    )
}

export default ProjectWrapper;