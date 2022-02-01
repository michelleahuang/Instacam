import React from 'react';

class UserShowPost extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div id="user-show-post-close-button">
                    <svg onClick={this.props.closeModal} aria-label="Close" color="#ffffff" fill="#ffffff" height="24" role="img" viewBox="0 0 24 24" width="24"><polyline fill="none" points="20.643 3.357 12 12 3.353 20.647" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></polyline><line fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" x1="20.649" x2="3.354" y1="20.649" y2="3.354"></line></svg>
                </div>
                <div id="user-show-post-wrapper">
                    <div id="user-show-post-container">

                    </div>
                </div>
    
            </>
        )
    }
}

export default UserShowPost