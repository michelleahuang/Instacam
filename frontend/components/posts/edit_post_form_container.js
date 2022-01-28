import { connect } from 'react-redux';
import React from 'react';
import EditPostForm from './edit_post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';
import { openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        post: state.entities.posts[state.ui.modal.postId]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        updatePost: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);