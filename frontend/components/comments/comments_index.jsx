import React from 'react';
import CommentsIndexItem from './comments_index_item';

class CommentsIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_id: this.props.currentUser.id,
            post_id: this.props.postId,
            body: '',
            username: ''
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleInput(e) {
        e.preventDefault();
        this.setState({body: e.currentTarget.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createComment({
            user_id: this.state.user_id,
            post_id: this.state.post_id,
            body: this.state.body
        });
        this.setState({ username: this.props.currentUser.name })
        this.setState({ body: '' });
    }
    

    render() {
        if (!this.props.post) return null;

        return (
            <div id="comment-container">
                <ul id="comments-list">
                    {this.props.comments.map(comment => <CommentsIndexItem key={comment.id} comment={comment} currentUserId={this.state.user_id} />)}
                </ul>
                <form id="comment-form" onSubmit={this.handleSubmit}>
                    <div id="comment-form-svg">
                        <svg aria-label="Emoji" color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><path d="M15.83 10.997a1.167 1.167 0 101.167 1.167 1.167 1.167 0 00-1.167-1.167zm-6.5 1.167a1.167 1.167 0 10-1.166 1.167 1.167 1.167 0 001.166-1.167zm5.163 3.24a3.406 3.406 0 01-4.982.007 1 1 0 10-1.557 1.256 5.397 5.397 0 008.09 0 1 1 0 00-1.55-1.263zM12 .503a11.5 11.5 0 1011.5 11.5A11.513 11.513 0 0012 .503zm0 21a9.5 9.5 0 119.5-9.5 9.51 9.51 0 01-9.5 9.5z"></path></svg>
                    </div>
                    <textarea type="text" value={this.state.body} placeholder="Add a comment..." onChange={this.handleInput}></textarea>
                    <button id="comment-post-button">Post</button>
                </form>
            </div>
        )
    }
}

export default CommentsIndex;