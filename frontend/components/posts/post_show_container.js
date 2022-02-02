import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';
import { fetchAllLikes } from '../../actions/like_actions';
import { fetchAllComments } from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
    return {
        post: state.entities.posts[ownProps.match.params.postId]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchPost: (postId) => dispatch(fetchPost(postId)),
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        fetchAllComments: () => dispatch(fetchAllComments())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostShow);