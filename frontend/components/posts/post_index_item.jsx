import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li>
                    <img className="post-photo" src={this.props.post.photoUrl}></img>
                </li>
            </div>
        );
    }
}

export default PostIndexItem;