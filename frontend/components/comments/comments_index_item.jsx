import React from 'react';
import { Link } from 'react-router-dom';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        if (this.props.comment.userId === this.props.currentUserId) {
            return (
                <div id="comments-trash-container" onClick={() => this.props.deleteComment(this.props.comment.id)}>
                    <i className="fas fa-trash"></i>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <li id="comments-item-container">
                <div id="comments-body-item-container">
                    <Link to={`/users/${this.props.comment.userId}`} className="link">
                        <p id="comment-username">{this.props.comment.username}</p>
                    </Link>
                    <p id="comment-body">{this.props.comment.body}</p>
                </div>
                    {this.handleDelete()}
            </li>
        )
    }
}

export default CommentsIndexItem;