import { connect } from 'react-redux';
import React from 'react';
import DeleteShowPostModal from './delete_show_post';
import { deletePost } from '../../actions/post_actions';
import { openModal, closeModal} from '../../actions/modal_actions';


const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteShowPostModal);