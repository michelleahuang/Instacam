import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';

const receiveAllComments = (comments) => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments: comments
    };
}

const receiveComment = (comment) => {
    return {
        type: RECEIVE_COMMENT,
        comment: comment
    };
}

const removeComment = (commentId) => {
    return {
        type: REMOVE_COMMENT,
        commentId: commentId
    };
}

const receiveErrors = (errors) => {
    return {
        type: RECEIVE_COMMENT_ERRORS,
        errors: errors
    };
}

export const fetchAllComments = () => (dispatch) => {
    return CommentApiUtil.fetchAllComments()
        .then(comments => dispatch(receiveAllComments(comments)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const createComment = (comment) => (dispatch) => {
    return CommentApiUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const deleteComment = (commentId) => (dispatch) => {
    return CommentApiUtil.deleteComment(commentId)
        .then(() => dispatch(removeComment(commentId)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
}