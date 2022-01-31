import React from 'react';
import PostIndexLikesContainer from '../likes/post_index_likes_container';
import CommentsIndexContainer from '../comments/comments_index_container';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
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
                    </div>
                </li>
            </div>
        );
    }
}

export default PostIndexItem;