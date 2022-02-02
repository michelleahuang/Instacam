import React from 'react';
import { Link } from 'react-router-dom';
import UserIndexItem from './user_index_item';

class UserIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        let focusedUsers = this.props.users.slice(3, 8);

        return (
            <div id="right-side-container">
                <div id="current-user-container">
                    <div id="current-user-info">
                        <div>
                            <Link className="link" to={`/users/${this.props.currentUser.id}`}>
                                <img id="user-index-profile-pic" src={this.props.currentUser.photoUrl}></img>
                            </Link>
                        </div>
                        <div id="current-user-name-wrapper">
                            <Link className="link" to={`/users/${this.props.currentUser.id}`}>
                                <p id="current-user-username">{this.props.currentUser.username}</p>
                            </Link>
                            <p id="current-user-fullname">{this.props.currentUser.name}</p>
                        </div>
                    </div>
                    <div id="switch">
                        <p onClick={this.props.logout}>Switch</p>
                    </div>
                </div>
                <div id="right-bottom-container">
                    <p id="suggestion">Suggestions For You</p>
                    <ul>
                        {focusedUsers.reverse().map(user => <UserIndexItem key={user.id} user={user} />) }
                    </ul>
                </div>
            


            </div>
        )
    }
}

export default UserIndex;