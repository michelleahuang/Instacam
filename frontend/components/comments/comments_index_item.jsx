import React from 'react';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        if (this.props.comment.userId === this.props.currentUserId) {
            return (
                <div>
                    <i className="fas fa-trash"></i>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <li>
                <div id="comments-body-item-container">
                    <p id="comment-username">{this.props.comment.username}</p>
                    <p id="comment-body">{this.props.comment.body}</p>
                    {this.handleDelete()}
                </div>
            </li>
        )
    }
}

export default CommentsIndexItem;