import React from 'react';

class UserStoriesItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li id="user-stories-item">
                    <img id="user-stories-icon" src={this.props.user.photoUrl}></img>
                    <p id="user-stories-username">{this.props.user.username}</p>
                </li>
            </div>
        )
    }
}

export default UserStoriesItem;