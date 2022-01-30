import React from 'react';
import PostIndexLikesContainer from '../likes/post_index_likes_container';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0,0);
        this.props.fetchPost(this.props.match.params.postId)
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.postId !== prevProps.match.params.postId) {
            this.componentDidMount()
        }
    }

    render() {
        if (!this.props.post) return null;

        return (
            <div id="post-show-page">
                <div id="post-show-container">
                    <img id="individual-post-photo" src={this.props.post.photoUrl}></img>
                    <div id="post-photo-right-container">
                        <div id="post-photo-right-side">
                            <div id="right-side-header">
                                <img className="post-profile-icon" src={this.props.post.creatorAvatar}></img>
                                <p id="post-username">{this.props.post.creator}</p>
                                <p id="period">•</p>
                                <p>Following</p>
                            </div>
                        </div>
                        <div id="post-likes-box">
                            <PostIndexLikesContainer post={this.props.post} postId={this.props.post.id} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostShow;