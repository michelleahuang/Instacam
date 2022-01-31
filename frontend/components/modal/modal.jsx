import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreatePostFormContainer from '../posts/create_post_form_container';
import EditPostFormContainer from '../posts/edit_post_form_container';
import DeleteShowEditPostModalContainer from '../posts/delete_show_edit_post_container';
import DeleteCommentContainer from '../comments/delete_comment_container';

function Modal({modal, postId, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {        
        case 'create_post':
            component = <CreatePostFormContainer />
            break;
        case 'delete_show_edit':
            component = <DeleteShowEditPostModalContainer />
            break;
        case 'edit_post':
            component = <EditPostFormContainer postId={postId} />
            break;
        case 'delete_comment':
            component = <DeleteCommentContainer />
        default:
            return null;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                { component }
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
        
    if (state.ui.modal) {
        if (state.ui.modal.postId) {
            return {
                modal: state.ui.modal.type,
                postId: state.ui.modal.postId
            };
        }
    }

    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal)