import React from 'react';

class PostIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li>
                    <div id="post-header">
                        <div id="post-header-left">
                            <div className="post-profile-icon"></div>
                            <p id="post-username">Username</p>
                        </div>
                        <div id="post-header-right">
                            <svg aria-label="More options" className="_8-yf5 " color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 24 24" width="24"><circle cx="12" cy="12" r="1.5"></circle><circle cx="6" cy="12" r="1.5"></circle><circle cx="18" cy="12" r="1.5"></circle></svg>
                        </div>
                    </div>
                    <img className="post-photo" src={this.props.post.photoUrl}></img>

                </li>
            </div>
        );
    }
}

export default PostIndexItem;