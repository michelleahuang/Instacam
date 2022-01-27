import React from 'react';

class PostShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchPost(this.props.match.params.postId)
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

                    </div>
                </div>
            </div>
        );
    }
}

export default PostShow;