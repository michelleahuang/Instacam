import React from 'react';
import PostIndexLikesContainer from '../likes/post_index_likes_container';
import PostShowCommentsFormContainer from '../comments/post_show_comments_form_container';
import PostShowCommentsContainer from '../comments/post_show_comments_container';
import { Link } from 'react-router-dom';

class UserShowPost extends React.Component {
    constructor(props) {
        super(props);

        this.calculateTime = this.calculateTime.bind(this);
        this.calculateCommentTime = this.calculateCommentTime.bind(this);
        this.closePostShowModal = this.closePostShowModal.bind(this);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId);
        this.props.fetchAllComments();
        this.props.fetchAllLikes();
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

        if (days === 1) {
            return days + ' DAY';
        } else if (days > 1) {
            return days + ' DAYS'
        };

        let hours = Math.floor(seconds / 3600);

        if (hours === 1) {
            return hours + ' HOUR';
        } else if (hours > 1) {
            return hours + ' HOURS'
        };

        let minutes = Math.floor(seconds / 60);

        if (minutes === 1) {
            return minutes + ' MINUTE';
        } else if (minutes > 1) {
            return minutes + ' MINUTES'
        };

        return seconds + ' SECONDS';
    }

    calculateCommentTime(date) {
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

        return Math.floor(seconds) + 's';
    }

    closePostShowModal() {
        this.props.closeModal();
        this.props.fetchUser(this.props.post.userId);
    }

    render() {

        if (!this.props.post) return null;

        return (
            <>
                <div id="user-show-post-close-button">
                    <svg onClick={this.closePostShowModal} aria-label="Close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                </div>
                <div id="user-show-post-wrapper">
                    <div id="user-show-post-container">
                        <img id="user-show-post-photo" src={this.props.post.photoUrl}></img>
                        <div id="user-show-post-right-container">
                            <div>
                                <div id="user-show-post-right-side">
                                    <div id="user-show-post-right-side-header">
                                        <img className="post-profile-icon" src={this.props.post.creatorAvatar}></img>
                                        <Link to={`/users/${this.props.post.userId}`} className="link" id="post-username">{this.props.post.creator}</Link>
                                        <p id="period">•</p>
                                        <p>Following</p>
                                    </div>
                                </div>
                                <div id="post-photo-photo-caption-container">
                                    <img className="post-profile-icon" src={this.props.post.creatorAvatar}></img>
                                    <div id="post-show-user-caption-container">
                                        <div>
                                            <p id="post-show-caption"><Link to={`/users/${this.props.post.userId}`} className="link"><span id="post-username">{this.props.post.creator}</span></Link>{this.props.post.caption}</p>
                                        </div>
                                        <p id="post-show-time">{this.calculateCommentTime(this.props.post.createdAt)}</p>
                                    </div>
                                </div>
                                <div id="user-show-post-comments-box">
                                    <PostShowCommentsContainer post={this.props.post} postId={this.props.post.id} calculateCommentTime={this.calculateCommentTime}/>
                                </div>
                            </div>
                            <div>
                                <div id="user-show-post-likes-box">
                                    <PostIndexLikesContainer post={this.props.post} postId={this.props.post.id} />
                                </div>
                                <div>
                                    <p className="post-time">{this.calculateTime(this.props.post.createdAt)} AGO</p>
                                </div>
                                <div id="post-comments-form-box">
                                    <PostShowCommentsFormContainer post={this.props.post} postId={this.props.post.id} />
                                </div> 
                            </div> 
                        </div> 
                    </div>
                </div> 
            </>
        )
    }
}

export default UserShowPost