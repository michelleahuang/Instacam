import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_ALL_LIKES = 'RECEIVE_ALL_LIKES';
export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';
export const RECEIVE_LIKE_ERRORS = 'RECEIVE_LIKE_ERRORS';

const receiveAllLikes = (likes) => {
    return {
        type: RECEIVE_ALL_LIKES,
        likes: likes
    };
}

const receiveLike = (like) => {
    return {
        type: RECEIVE_LIKE,
        like: like
    };
}

const removeLike = (likeId) => {
    return {
        type: REMOVE_LIKE,
        likeId: likeId
    };
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_LIKE_ERRORS,
        errors: errors
    };
}

export const fetchAllLikes = () => (dispatch) => {
    return LikeApiUtil.fetchAllLikes()
        .then(likes => dispatch(receiveAllLikes(likes)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const createLike = (like) => (dispatch) => {
    return LikeApiUtil.createLike(like)
        .then(like => dispatch(receiveLike(like)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const deleteLike = (likeId) => (dispatch) => {
    return LikeApiUtil.deleteLike(likeId)
        .then(() => dispatch(removeLike(likeId)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
}