import React from 'react';
import { Link } from 'react-router-dom';

class PostShowCommentsItem extends React.Component {
    constructor(props) {
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
        this.calculateTime = this.calculateTime.bind(this);
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

    calculateTime(date) {
        let now = new Date();
        let seconds = Math.floor((now - new Date(date)) / 1000);

        let years = Math.floor(seconds / 31536000);

        if (years === 1) {
            return years + ' YEAR';
        } else if (years > 1) {
            return years + ' YEARS'
        };

        let months = Math.floor(seconds / 2592000);

        if (months === 1) {
            return months + ' MONTH';
        } else if (months > 1) {
            return months + ' MONTHS'
        };

        let days = Math.floor(seconds / 86400);

        if (days >= 1) {
            return days + 'd';
        };

        let hours = Math.floor(seconds / 3600);

        if (hours >= 1) {
            return hours + 'h';
        };

        let minutes = Math.floor(seconds / 60);

        if (minutes >= 1) {
            return minutes + 'm';
        };

        return seconds + 's';
    }

    render() {
        return (
            <li id="post-show-comments-item-container">
                <div id="post-show-comments-body-item-container">
                    <div>
                        <img className="post-profile-icon" src={this.props.comment.userAvatar}></img>
                    </div>
                    <div id="post-show-comments-username-caption-time">
                        <div id="post-show-comments-username-caption">
                            <Link to={`/users/${this.props.comment.userId}`} id="post-show-comment-username" className="link">{this.props.comment.username}</Link>
                            <p id="post-show-comment-body">{this.props.comment.body}</p>
                        </div>
                        <p id="post-show-time">{this.calculateTime(this.props.comment.createdAt)}</p>
                    </div>
                </div>
                {this.handleDelete()}
            </li>
        )
    }
}

export default PostShowCommentsItem;