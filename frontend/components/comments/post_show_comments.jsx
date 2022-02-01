import React from 'react';
import PostShowCommentsItem from './post_show_comment_item'

class PostShowComments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            post_id: this.props.postId,
            body: '',
            username: ''
        };
    }

    render() {
        if (!this.props.post) return null;

        return (
            <div id="comment-container">
                <ul id="post-show-comments-list">
                    {this.props.comments.map(comment => <PostShowCommentsItem key={comment.id} comment={comment} currentUserId={this.state.user_id} deleteComment={this.props.deleteComment} />)}
                </ul>
            </div>
        )
    }
}

export default PostShowComments;