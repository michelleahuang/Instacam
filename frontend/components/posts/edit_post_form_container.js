import { connect } from 'react-redux';
import React from 'react';
import EditPostForm from './create_post_form';
import { updatePost } from '../../actions/post_actions';
import { openModal, closeModal} from '../../actions/modal_actions';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id],
        postId: state.ui.modal.postId
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (post) => dispatch(updatePost(post)),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);