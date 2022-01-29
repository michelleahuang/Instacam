import { connect } from 'react-redux';
import { fetchAllLikes, createLike, deleteLike } from '../../util/like_api_util';
import Likes from './likes';

const mapStateToProps = (state) => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllLikes: () => dispatch(fetchAllLikes()),
        createLike: (like) => dispatch(createLike(like)),
        deleteLike: (likeId) => dispatch(deleteLike(likeId))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Likes);