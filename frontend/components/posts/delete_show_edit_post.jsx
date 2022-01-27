import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class DeleteShowEditPostModal extends React.Component {
    constructor(props) {
        super(props);

        // this.handleShow = this.handleShow.bind(this)
    }

    // handleShow {
    //     <Redirect to= />
    // }




    render() {
        return (
            <div id="delete-show-edit-modal-container">
                <button id="delete-show-edit-option-delete" className="delete-show-edit-modal-category">Delete
            
                </button>

                <button id="delete-show-edit-option-edit" className="delete-show-edit-modal-category">Edit

                </button>

                <button id="delete-show-edit-option-show" className="delete-show-edit-modal-category">Go to post

                </button>
                {/* <Link id="delete-show-edit-option-show" className="delete-show-edit-modal-category" to={`/posts/`}>
                    Go to post
                </Link> */}
                <button id="delete-show-edit-option-cancel" className="delete-show-edit-modal-category" onClick={this.props.closeModal}>Cancel</button>

            </div>
        );
    }
}

export default DeleteShowEditPostModal;