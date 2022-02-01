import React from 'react';

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
                        { /*<div id="post-photo-right-container">
                            <div>
                                <div id="post-photo-right-side">
                                    <div id="right-side-header">
                                        <img className="post-profile-icon" src={this.props.post.creatorAvatar}></img>
                                        <Link to={`/users/${this.props.post.userId}`} className="link" id="post-username">{this.props.post.creator}</Link>
                                        <p id="period">•</p>
                                        <p>Following</p>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div> 
            </>
        )
    }
}

export default UserShowPost