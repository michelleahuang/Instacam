import React from 'react';

class PostShowCommentsItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        if (this.props.comment.userId === this.props.currentUserId) {
            return (
                <div id="post-show-comments-trash-container" onClick={() => this.props.deleteComment(this.props.comment.id)}>
                    <i className="fas fa-trash"></i>
                </div>
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <li id="post-show-comments-item-container">
                <div id="post-show-comments-body-item-container">
                    <div>
                        <img className="post-profile-icon" src={this.props.comment.userAvatar}></img>
                    </div>
                            <p id="post-show-comment-username">{this.props.comment.username}</p>
                            <p id="post-show-comment-body">{this.props.comment.body}</p>
                            <p className="post-time">{this.props.calculateTime(this.props.comment.createdAt)}</p>
                </div>
                {this.handleDelete()}
            </li>
        )
    }
}

export default PostShowCommentsItem;