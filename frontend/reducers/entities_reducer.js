import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducers';
import likesReducer from './likes_reducers';
import commentsReducer from './comments_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    posts: postsReducer,
    likes: likesReducer,
    comments: commentsReducer
});

export default entitiesReducer;