import { connect } from 'react-redux';
import React from 'react';
import CreatePostForm from './create_post_form';
import { createPost } from '../../actions/post_actions';
import { openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        createPost: (post) => dispatch(createPost(post)),
        openModal: () => dispatch(openModal()),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostForm);