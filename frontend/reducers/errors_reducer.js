import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import postsErrorsReducer from './posts_errors_reducer';
import likesErrorsReducer from './likes_errors_reducer';
import commentsErrorsReducer from './comments_errors_reducer';

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    post: postsErrorsReducer,
    like: likesErrorsReducer,
    comment: commentsErrorsReducer
});

export default errorsReducer;