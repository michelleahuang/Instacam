import { connect } from 'react-redux';
import { fetchAllComments, createComment, deleteComment } from '../../actions/comment_actions';
import { closeModal } from '../../actions/modal_actions'
import PostShowComments from './post_show_comments';

const mapStateToProps = (state, ownProps) => {
    let comments;
    comments = (!state.entities.comments) ? null : Object.values(state.entities.comments).filter(comment => { return comment.postId === ownProps.post.id} )

    return {
        comments: comments,
        currentUser: state.entities.users[state.session.id],
        postId: ownProps.postId,
        post: state.entities.posts[ownProps.postId]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllComments: () => dispatch(fetchAllComments()),
        createComment: (comment) => dispatch(createComment(comment)),
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
        closeModal: () => dispatch(closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShowComments);