import { RECEIVE_POST_ERRORS, RECEIVE_POST } from '../actions/post_actions';

const postsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors;
        case RECEIVE_POST:
            return [];
        default:
            return oldState;
    }
}

export default postsErrorsReducer;