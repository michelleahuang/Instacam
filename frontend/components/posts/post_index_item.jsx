import React from 'react';
import PostIndexLikesContainer from '../likes/post_index_likes_container';
import CommentsIndexContainer from '../comments/comments_index_container';
import CommentsFormContainer from '../comments/comments_form_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
        
        this.calculateTime = this.calculateTime.bind(this);
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


    render() {
        let postId = this.props.post.id;
        return (
            <div>
                <li id="post-index-item">
                    <div id="post-header">
                        <div id="post-header-left">
                            <img className="post-profile-icon" src={this.props.post.creatorAvatar}></img>
                            <p id="post-username">{this.props.post.creator}</p>
                        </div>
                        <div id="post-header-right">
                            <svg onClick={() => this.props.openModal('delete_show_edit', postId)} aria-label="More options" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </div>
                    </div>
                    <img className="post-photo" src={this.props.post.photoUrl}></img>
                    <div id="post-likes-comments-container">
                        <PostIndexLikesContainer post={this.props.post} postId={postId} />
                        <div id="post-caption">
                            <p id="post-caption-username">{this.props.post.creator}</p>
                            <p id="post-caption-body">{this.props.post.caption}</p>
                        </div>
                        <CommentsIndexContainer post={this.props.post} postId={postId} />
                        <p className="post-time">{this.calculateTime(this.props.post.createdAt)} AGO</p>
                        <CommentsFormContainer post={this.props.post} postId={postId}/>
                    </div>
                </li>
            </div>
        );
    }
}

export default PostIndexItem;