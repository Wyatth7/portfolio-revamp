import {useEffect, useState} from "react";

let globalState = {
    showModal: false,
    selectedProject: {}
};
let actions = {
    SHOW_MODAL_DISPATCH: (state, payload) => {
        return {showModal: !state.showModal}
    },
    // payload for this method must be formatted on state update.
    SELECTED_PROJECT: (state, payload) => {
        return {selectedProject: {...payload}}
    }
};

const useStore = () => {
    const setState = useState(globalState)[1];
    
    const dispatch = (action, payload = null) => {
        const newState = actions[action](globalState, payload);
        globalState = {...globalState, ...newState};
        setState(globalState);
    }
    
    return [globalState, dispatch];
};

export default useStore;