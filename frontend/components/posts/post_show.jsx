import React from 'react';
import PostIndexLikesContainer from '../likes/post_index_likes_container';
import PostShowCommentsFormContainer from '../comments/post_show_comments_form_container';
import PostShowCommentsContainer from '../comments/post_show_comments_container';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
        this.calculateTime = this.calculateTime.bind(this);
        this.calculateCommentTime = this.calculateCommentTime.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchPost(this.props.match.params.postId);
        this.props.fetchAllLikes();
        this.props.fetchAllComments();
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.postId !== prevProps.match.params.postId) {
            this.componentDidMount()
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

        return seconds + 's';
    }

    render() {
        if (!this.props.post) return null;

        return (
            <div id="post-show-page">
                <div id="post-show-container">
                    <img id="individual-post-photo" src={this.props.post.photoUrl}></img>
                    <div id="post-photo-right-container">
                        <div>
                            <div id="post-photo-right-side">
                                <div id="right-side-header">
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
                            <div id="post-comments-box">
                                <PostShowCommentsContainer post={this.props.post} postId={this.props.post.id} calculateCommentTime={this.calculateCommentTime} closeModal={this.props.closeModal}/>
                            </div>
                        </div>
                        <div>
                            <div id="post-likes-box">
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
        );
    }
}

export default PostShow;