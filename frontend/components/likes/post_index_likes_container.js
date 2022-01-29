import { connect } from 'react-redux';
import { fetchAllLikes, createLike, deleteLike } from '../../actions/like_actions';
import PostIndexLikes from './post_index_likes';

const mapStateToProps = (state, ownProps) => {
    let likes;
    likes = (!state.entities.likes) ? null : Object.values(state.entities.likes).filter(like => { return like.post_id === ownProps.postId} )
    
    return {
        likes: likes,
        currentUser: state.entities.users[state.session.id],
        postId: ownProps.postId
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexLikes);