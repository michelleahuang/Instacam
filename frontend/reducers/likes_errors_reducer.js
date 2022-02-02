import { RECEIVE_LIKE_ERRORS, RECEIVE_LIKE, RECEIVE_ALL_LIKES } from "../actions/like_actions";

const likesErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_LIKE_ERRORS:
            return action.errors;
        case RECEIVE_LIKE:
            return [];
        case RECEIVE_ALL_LIKES:
            return [];
        default:
            return oldState;
    }
};

export default likesErrorsReducer;