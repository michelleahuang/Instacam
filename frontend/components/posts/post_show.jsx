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

                </div>
            </div>
        );
    }
}

export default PostShow;