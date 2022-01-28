import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';

class DeleteShowEditPostModal extends React.Component {
    constructor(props) {
        super(props);

        this.handleShow = this.handleShow.bind(this)
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleShow(e) {
        this.props.history.push(`/posts/${this.props.postId}`);
        this.props.closeModal();
    }

    handleEdit(e) {
        this.props.openModal('edit_post', this.props.postId);
    }

    handleDelete(e) {
        this.props.deletePost(this.props.postId);
        this.props.closeModal();
    }


    render() {
        let editButton;
        let deleteButton;

        if (this.props.post.userId === this.props.currentUser.id) {
            editButton = <button onClick={this.handleEdit} id="delete-show-edit-option-edit" className="delete-show-edit-modal-category">Edit</button>
        } else {
            editButton = <button disabled id="delete-show-edit-option-edit-disabled" className="delete-show-edit-modal-category">Edit</button>
        }

        if (this.props.post.userId === this.props.currentUser.id) {
            deleteButton = <button onClick={this.handleDelete} id="delete-show-edit-option-delete" className="delete-show-edit-modal-category">Delete</button>
        } else {
            deleteButton = <button id="delete-show-edit-option-delete-disabled" className="delete-show-edit-modal-category">Delete</button>
        }


        return (
            <div id="delete-show-edit-modal-container">
                {deleteButton}
                {editButton}
                <button onClick={this.handleShow} id="delete-show-edit-option-show" className="delete-show-edit-modal-category">Go to post</button>
                <button id="delete-show-edit-option-cancel" className="delete-show-edit-modal-category" onClick={this.props.closeModal}>Cancel</button>
            </div>
        );
    }
}

export default withRouter(DeleteShowEditPostModal);