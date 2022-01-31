import React from 'react';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div id="comments-body-item-container">
                    <p id="comment-username">{this.props.comment.username}</p>
                    <p id="comment-body">{this.props.comment.body}</p>
                </div>
            </li>
        )
    }
}

export default CommentsIndexItem;