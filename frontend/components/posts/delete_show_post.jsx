import React from 'react';

class DeleteShowPostModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="delete-show-modal-container">
                <div id="delete-show-option-delete" className="delete-show-modal-category">Delete
            
                </div>
                <div id="delete-show-option-show" className="delete-show-modal-category">Go to post

                </div>
                <div id="delete-show-option-cancel" className="delete-show-modal-category" onClick={this.props.closeModal}>Cancel</div>

            </div>
        );
    }
}

export default DeleteShowPostModal;