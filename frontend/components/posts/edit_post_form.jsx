import React from 'react';

class EditPostForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.post;
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(e) {
        e.preventDefault;
        this.setState({caption: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePost(this.state);
        this.props.closeModal();
    }

    render() {
        console.log(this.state);
        let preview;

        if (this.state.photoUrl) {
            preview = (
                <div id="form-left-side">
                    <img id="preview-photo" src={this.state.photoUrl}></img> 
                </div>
            )
        } 

        return (
            <>
                <div id="form-close-button">
                    <svg onClick={this.props.closeModal} aria-label="Close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                </div>
                <div id="post-form-container">
                    <div id="post-form-wrapper">
                        <div id="post-form-header">
                            <p onClick={this.props.closeModal} id="edit-dummy-text">Cancel</p>
                            <p id="create-text">Edit Caption</p>
                            <button id="share-text" form="post-form">Done</button>
                        </div>
                        <form id="post-form" onSubmit={this.handleSubmit}>
                            {preview}
                            <div id="form-right-side">
                                <div id="form-right-side-header">
                                    <img id="form-user-avatar" src={this.props.currentUser.photoUrl}></img>
                                    <p>{this.props.currentUser.username}</p>
                                </div>
                                <div>
                                    <textarea id="caption-input" type="text" value={this.state.caption} placeholder="Write a caption..." onChange={this.handleInput}></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}

export default EditPostForm;