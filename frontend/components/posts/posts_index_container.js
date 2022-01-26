import { connect } from 'react-redux';
import React from 'react';
import PostsIndex from './posts_index';
import { fetchAllPosts } from '../../actions/post_actions';

const mapStateToProps = (state) => {
    return {
        posts: Object.values(state.entities.posts),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllPosts: () => dispatch(fetchAllPosts()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsIndex);