import React from 'react';
import CommentsIndexItem from './comments_index_item';
import CommentsForm from './comments_index_form';
import CommentsFormContainer from './comments_form_container';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            post_id: this.props.postId,
            body: '',
            username: ''
        }
    }


    render() {
        if (!this.props.post) return null;

        return (
            <div id="comment-container">
                <ul id="comments-list">
                    {this.props.comments.map(comment => <CommentsIndexItem key={comment.id} comment={comment} currentUserId={this.state.user_id} deleteComment={this.props.deleteComment} />)}
                </ul>
            </div>
        )
    }
}

export default CommentsIndex;