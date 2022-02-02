import React from 'react';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div id="current-user-container">
                    <div id="current-user-info">
                        <div>
                            <img id="user-index-profile-pic" src={this.props.currentUser.photoUrl}></img>
                        </div>
                        <div id="current-user-name-wrapper">
                            <p id="current-user-username">{this.props.currentUser.username}</p>
                            <p id="current-user-fullname">{this.props.currentUser.name}</p>
                        </div>
                    </div>
                    <div id="switch">
                        <p>Switch</p>
                    </div>
                </div>


            </div>
        )
    }
}

export default UserIndex;