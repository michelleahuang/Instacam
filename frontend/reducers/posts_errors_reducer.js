import { RECEIVE_POST_ERRORS, RECEIVE_ALL_POSTS, RECEIVE_POST, REMOVE_POST, } from '../actions/post_actions';

const postsErrorsReducer = (oldState = [], action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_POST_ERRORS:
            return action.errors;
        case RECEIVE_POST:
            return [];
        case RECEIVE_ALL_POSTS:
            return [];
        case REMOVE_POST:
            return [];
        default:
            return oldState;
    }
}

export default postsErrorsReducer;