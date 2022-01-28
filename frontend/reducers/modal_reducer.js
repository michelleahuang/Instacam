import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';
import modal from '../components/modal/modal';

const modalReducer = (oldState = null, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case OPEN_MODAL:
            let nextState;
            
            if (action.postId) {
                debugger
                nextState = { type: action.modal, postId: action.postId }
            } else {
                nextState = action.modal
            }
            
            return nextState; 
        case CLOSE_MODAL:
            return null;
        default:
            return oldState;
    }
};

export default modalReducer;