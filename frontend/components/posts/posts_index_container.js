import { connect } from 'react-redux';
import React from 'react';
import PostsIndex from './posts_index';
import { fetchAllPosts } from '../../actions/post_actions';
import { fetchAllLikes } from '../../actions/like_actions';
import { fetchAllComments } from '../../actions/comment_actions';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllComments: () => dispatch(fetchAllComments()),
        openModal: (modal, postId) => dispatch(openModal(modal, postId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);