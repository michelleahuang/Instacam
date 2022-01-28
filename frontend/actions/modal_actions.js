export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal, postId) => {
    return {
        type: OPEN_MODAL,
        modal: modal, 
        postId: postId
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};
