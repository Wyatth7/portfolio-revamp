import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";

import useStore from "../../custom-hooks/useStore";

const Backdrop = (props) => <div onClick={() => props.dispatch("SHOW_MODAL_DISPATCH")} className="Backdrop"></div>;
    
const ModalOverlay = (props) => (
    <div className="Modal">
        <Backdrop dispatch={props.dispatch} />
        <div className="ModalOverlay">
            <div className="header">
                <h1 className="title-text">{props.title}</h1>
                <FontAwesomeIcon onClick={() => props.dispatch("SHOW_MODAL_DISPATCH")} className="close-icon" icon={solid.faTimes} />
            </div>
            
        </div>
    </div>
);    
    
const Modal = (props) => {
    const [state, dispatch] = useStore();
    
    const closeModal = () => {
        dispatch("SHOW_MODAL_DISPATCH");
    }
    
    return (
        <>
            {   state.showModal ? 
                <>
                    {ReactDOM.createPortal(<ModalOverlay title={props.title} dispatch={dispatch}/>, document.getElementById('modal-root'))}
                </>
                : null
            }
        </>
    )
}

export default Modal;