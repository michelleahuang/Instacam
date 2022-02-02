import React from 'react';
import PostIndexLikesContainer from '../likes/post_index_likes_container';
import PostShowCommentsFormContainer from '../comments/post_show_comments_form_container';
import PostShowCommentsContainer from '../comments/post_show_comments_container';
import { Link } from 'react-router-dom';

class UserShowPost extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.postId)
    }


    render() {

        if (!this.props.post) return null;

        return (
            <>
                <div id="user-show-post-close-button">
                    <svg onClick={this.props.closeModal} aria-label="Close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
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
                                        <p id="post-show-caption"><Link to={`/users/${this.props.post.userId}`} className="link"><span id="post-username">{this.props.post.creator}</span></Link>{this.props.post.caption}</p>
                                    </div>
                                </div>
                                <div id="post-comments-box">
                                    <PostShowCommentsContainer post={this.props.post} postId={this.props.post.id}/>
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