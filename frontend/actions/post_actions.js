import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';

const receiveAllPosts = (posts) => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts: posts
    };
}

const receivePost = (post) => {
    return {
        type: RECEIVE_POST,
        post: post
    };
}

const removePost = (postId) => {
    return {
        type: REMOVE_POST,
        postId: postId
    };
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_POST_ERRORS,
        errors: errors
    };
}

export const 