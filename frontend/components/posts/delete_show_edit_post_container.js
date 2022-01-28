import { connect } from 'react-redux';
import React from 'react';
import DeleteShowEditPostModal from './delete_show_edit_post';
import { deletePost, fetchAllPosts } from '../../actions/post_actions';
import { openModal, closeModal} from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        postId: state.ui.modal.postId,
        post: state.entities.posts[state.ui.modal.postId]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (postId) => dispatch(deletePost(postId)),
        fetchAllPosts: () => dispatch(fetchAllPosts()),
        openModal: (modal, postId) => dispatch(openModal(modal, postId)),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteShowEditPostModal);