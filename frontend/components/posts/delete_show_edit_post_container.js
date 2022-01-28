import { connect } from 'react-redux';
import React from 'react';
import DeleteShowEditPostModal from './delete_show_edit_post';
import { deletePost } from '../../actions/post_actions';
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
        openModal: (modal, postId) => dispatch(openModal(modal, postId)),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteShowEditPostModal);