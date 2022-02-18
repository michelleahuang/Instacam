import React from 'react';
import { Link } from 'react-router-dom';

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
                        <Link to={`/users/${this.props.comment.userId}`} className="link">
                            <img className="post-profile-icon" src={this.props.comment.userAvatar} onClick={this.props.closeModal}></img>
                        </Link>
                    </div>
                    <div id="post-show-comments-username-caption-time">
                        <div id="post-show-comments-username-caption">
                            <p id="post-show-comment-body"><Link to={`/users/${this.props.comment.userId}`} id="post-show-comment-username" className="link"><span onClick={this.props.closeModal} >{this.props.comment.username}</span></Link>{this.props.comment.body}</p>
                        </div>
                        <p id="post-show-time">{this.props.calculateCommentTime(this.props.comment.createdAt)}</p>
                    </div>
                </div>
                {this.handleDelete()}
            </li>
        )
    }
}

export default PostShowCommentsItem;