import React from 'react';

class CommentsIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li>
                <div>
                    <p>{this.props.comment.username}</p>
                    <p>{this.props.comment.body}</p>
                </div>
            </li>
        )
    }
}

export default CommentsIndexItem;