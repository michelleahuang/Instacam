import { connect } from 'react-redux';
import { openModal, closeModal} from '../../actions/modal_actions';
import UserShowPost from './user_show_post';


const mapStateToProps = (state, ownProps) => {

    return {
        currentUser: state.entities.users[state.session.id],
        postId: state.ui.modal.postId,
        post: state.entities.posts[state.ui.modal.postId],
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllComments: () => dispatch(fetchAllComments()),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserShowPost)