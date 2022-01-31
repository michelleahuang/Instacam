import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import { closeModal } from '../../actions/modal_actions';
import DeleteComment from './delete_comment';

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteComment);

