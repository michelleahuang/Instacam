import React from 'react';

class DeleteShowEditPostModal extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
    }

    // handleShow(e) {
    //     <Link to="/posts/:postId"></Link>
    // }


    render() {
        return (
            <div id="delete-show-edit-modal-container">
                <div id="delete-show-edit-option-delete" className="delete-show-edit-modal-category">Delete
            
                </div>
                <div id="delete-show-edit-option-edit" className="delete-show-edit-modal-category">Edit

                </div>
                <div id="delete-show-edit-option-show" className="delete-show-edit-modal-category">Go to post

                </div>
                <div id="delete-show-edit-option-cancel" className="delete-show-edit-modal-category" onClick={this.props.closeModal}>Cancel</div>

            </div>
        );
    }
}

export default DeleteShowEditPostModal;