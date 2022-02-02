import { RECEIVE_COMMENT_ERRORS, RECEIVE_ALL_COMMENTS, RECEIVE_COMMENT } from "../actions/comment_actions";

const commentsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_COMMENT_ERRORS:
            return action.errors;
        case RECEIVE_ALL_COMMENTS:
            return [];
        case RECEIVE_COMMENT: 
            return [];    
        default:
            return oldState;
    }
};

export default commentsErrorsReducer;
