import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

// import { signup, login, logout } from './util/session_api_util'
// import { fetchAllPosts, fetchPost, createPost, updatePost, deletePost } from "./util/post_api_util";
import { login, logout, signup } from './actions/session_actions';
import { fetchAllPosts, fetchPost, createPost, updatePost, deletePost } from "./actions/post_actions";
import {fetchAllLikes, createLike, deleteLike } from "./actions/like_actions";


document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    }
    else {
        store = configureStore();
    }

    // TESTING START
    window.signup = signup;
    window.login = login;
    window.logout = logout;

    window.fetchAllPosts = fetchAllPosts;
    window.fetchPost = fetchPost;
    window.createPost = createPost;
    window.updatePost = updatePost;
    window.deletePost = deletePost;

    window.fetchAllLikes = fetchAllLikes;
    window.createLike = createLike;
    window.deleteLike = deleteLike;
    
    window.store = store;
    // TESTING END

    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});