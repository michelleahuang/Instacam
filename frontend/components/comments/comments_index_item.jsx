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
                    <p id="comment-body"><Link to={`/users/${this.props.comment.userId}`} className="link"><span id="comment-username">{this.props.comment.username}</span></Link>{this.props.comment.body}</p>
                </div>
                    {this.handleDelete()}
            </li>
        )
    }
}

export default CommentsIndexItem;