import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import CreatePostFormContainer from '../posts/create_post_form_container';
import DeleteShowPostModal from '../posts/delete_show_post';

function Modal({modal, closeModal}) {
    if (!modal) {
        return null;
    }

    let component;
    switch (modal) {
        case 'create_post':
            component = <CreatePostFormContainer />
            break;
        case 'delete_and_show':
            component = <DeleteShowPostModal />
            break;
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